import crypto from 'crypto';
import { resolve } from 'path';
import { readFile } from 'fs/promises';
import { makeJWT } from './utils';
import { checkPortStatus, findAPortNotInUse } from 'portscanner';

import Docker from 'dockerode'; /* this talks to the docker API at `/var/run/docker.sock` see: https://www.npmjs.com/package/dockerode */
// import { parse as parseDockerFile } from 'docker-file-parser'; /* this parses dockerfiles. See: https://www.npmjs.com/package/docker-file-parser */
import {
  default as boxBase,
  isDockerReady,
  buildFromDockerfile,
  startContainer,
  quickstartFactory,
  parseYaml,
  getAnswersFromCLI,
  addToKeychain,
  retrieveFromKeychain,
  makePasswordPrompt,
  DefinitionsVolume,
  DefinitionsService,
  generatePasswords,
} from '@incremental.design/box-base';
/**
 *
 * @param dockerInstance - an instance of the {@link Docker} class. If an instance isn't provided, then quickstart will create one for you. The idea is that you can chain quickstarts together, sharing the same docker instance among them.
 *
 * @returns dockerInstance - the same instance of the {@link Docker} class that was passed in, or if no instance was passed in, a new instance.
 */

const quickstartName = __dirname
  .split('/')
  .slice(0, -2)
  .pop() as string; /* i.e. '/path/to/packages/box-vue3-supabase/src/quickstart.ts' -> ['','path','to','packages','box-vue3-supabase','src','quickstart.ts'] -> ['','path','to','packages','box-vue3-supabase'] -> 'box-vue3-supabase' */

/**
 * Sets up a new Vue 3 frontend and Supabase backend. This consists of:
 *
 * 1. Either a local or an S3 docker storage volume.
 * 2. A Postgres database.
 * 3. six middlewares:
 *  * Realtime, which broadcasts changes to the postgres database in realtime.
 *  * PostgREST, which maps database queries to REST API endpoints
 *  * Storage, which maps S3 objects to REST API endpoints
 *  * postgres-meta, which maps database metadata queries to REST API endpoints.
 *  * GoTrue, which handles user authentication.
 *  * Studio, which serves an admin interface for the backend.
 *  * {@link boxBase}, which serves the Vue 3 frontend.
 * 4. Kong, a proxy server which connects the middlewares to the database, and routes API requests to their respective middlewares.
 *
 * The docker storage volume handles the backend's data, Postgres handles its state, the middleware handles its functionality, and the proxy server exposes its functionality to the frontend.
 *
 * The postgres database, each of the middlewares, and proxy server run in their own docker container.
 *
 * @typeParam AllOptions - the options for the docker volume and all of the containers used in this quickstart.
 */
const quickstart = quickstartFactory<AllOptions>(
  quickstartName,
  async (options, dockerInstance: Docker) => {
    /* the idea is to load the compose file, modify it with JS, dump it back out to yaml, and then call the compose API */

    const suffix = crypto
      .randomBytes(4)
      .toString(
        'hex'
      ); /* append the suffix to all container names so that if you start several containers, you can keep track of which ones are grouped together */

    const passedOptions = Object.keys(options);

    const { environmentVariables, yamlObject } = await getDockerCompose();

    /* apply defaults first*/
    if (
      !passedOptions.includes('s3') &&
      !passedOptions.includes('postgresCluster')
    ) {
      /* then use development defaults */
      const defaults = await getDefaultEnvironmentVariables();
      Object.entries(environmentVariables).forEach((entry) => {
        const [k, v] = entry;
        if (defaults.hasOwnProperty(v))
          /* because the values of the env variables map to the defaults */
          environmentVariables[k] =
            defaults[
              v
            ]; /* this WILL omit defaults that aren't present in the environment variables ... because how would we apply them to the yamlObject? */
      });
    } else {
      /* use production defaults */
      console.error('not implemented yet');
      process.exit(1); // todo: actually implement production and get rid of this stuff
    }

    /* apply options next */

    environmentVariables.ANON_KEY = makeJWT('anon', options.jwtSecret);
    environmentVariables.SERVICE_ROLE_KEY = makeJWT(
      'service',
      options.jwtSecret
    );
    environmentVariables.JWT_SECRET = options.jwtSecret;
    environmentVariables.POSTGRES_PASSWORD = options.postgresPassword;

    if (options.studio) {
      /* apply studio options */
      environmentVariables.STUDIO_PORT = options.studio.STUDIO_PORT;
      environmentVariables.META_URL = options.studio.META_URL;
      environmentVariables.KONG_URL = options.studio.KONG_URL;
    }

    console.log(environmentVariables);

    const c = yamlObject.services.storage.environment.SERVICE_KEY;

    // console.log(
    //   JSON.stringify(
    //     yamlObject.services.storage.environment.SERVICE_ROLE_KEY,
    //     null,
    //     2
    //   )
    // );

    return {
      destroy: async () => {
        // destroy the things you made
        return { destroyed: true };
      },
      items: {
        images: [],
        containers: [],
        volumes: [],
        binds: [],
        networks: [],
      },
    };
  },
  async () => {
    const {
      STUDIO_PORT,
      KONG_HTTP_PORT,
      KONG_HTTPS_PORT,
      POSTGRES_PORT,
      KONG_URL,
      META_URL,
    } = await getDefaultEnvironmentVariables();

    const availablePorts = await Promise.all(
      [STUDIO_PORT, KONG_HTTP_PORT, KONG_HTTPS_PORT, POSTGRES_PORT].map(
        (port) => findAPortNotInUse(port, 65535)
      )
    );

    const validatePort = async (port: number) => {
      if ((await checkPortStatus(port)) === 'closed') return true;
      return `Port ${port} on localhost is in use. Choose a different port`;
    };

    const jwtPrompt = await makePasswordPrompt(
      'box-vue3-supabase',
      'JWT_SECRET'
    );

    const postgresPasswordPrompt = await makePasswordPrompt(
      'box-vue3-supabase',
      'postgres'
    );
    const {
      preset,
      newPasswordBoxVue3SupabaseJwtSecret,
      newPasswordBoxVue3Supabasepostgres,
      studioPort,
    } = await getAnswersFromCLI([
      {
        name: 'preset',
        type: 'select',
        message: 'Use default settings?',
        choices: [
          {
            title: 'dev',
            description:
              '\nDefault settings for development:\n- Uses your local filesystem as the storage location.\n- Uses a single Postgres instance.\n- Starts Supabase studio.\n- Does NOT secure supabase.\n',
          },
          {
            title: 'prod',
            description:
              '\nDefault settings for production:\n- Uses an S3 provider of your choice as the storage location.\n- Uses a Postgres cluster of your choice as the database.\n- Secures supabase with passwords and certificates.\n- Does NOT start Supabase studio.\n- Bring your own S3 storage and Postgres cluster.\n',
          },
          {
            title: 'custom',
            description:
              '\nCustomize all of the cluster settings however you want.',
          },
        ],
        initial: 0,
      },
      ...jwtPrompt,
      ...postgresPasswordPrompt,
      {
        name: 'studioPort',
        type: (prev, values) => (values.preset === 2 ? 'number' : false),
        message: `Choose the port on which Supabase Studio will run. (e.g. https://localhost:${STUDIO_PORT}`,
        initial: availablePorts[0],
        validate: validatePort,
      },
    ]);

    if (
      ![
        0 /* prompt 'dev' */,
        1 /* prompt 'prod' */,
        2 /* prompt 'custom' */,
        'dev',
        'development',
        'prod',
        'production',
      ].includes(preset)
    ) {
      console.error(
        `--preset '${preset}' is not a valid option. It should be either 'dev' for the development preset or 'prod' for the production preset.`
      );
      process.exit(1);
    }

    // let jwtSecret;

    const changePassword = process.argv.includes('--changePassword');

    const handlePasswordPromptAnswer = async (
      answer: any,
      service: string,
      account: string
    ) => {
      let password;

      if (changePassword && !answer) {
        /* then both --changePassword and --autoPassword were set */
        password = generatePasswords(64, true, 1).next().value;
        console.log(
          `Automatically changing password for ${service} ${account} to ${password}`
        );
        await addToKeychain(service, account, password);
      } else if (answer) {
        /* then --changePassword was set OR new password was prompted */
        password = answer;
        await addToKeychain(service, account, password);
      } else {
        password = await retrieveFromKeychain(service, account);
        if (!password) {
          password = generatePasswords(64, true, 1).next().value;
          console.log(
            `Automatically setting password for ${service} ${account} to ${password}`
          );
        }
      }

      return password;
    };

    const jwtSecret = await handlePasswordPromptAnswer(
      newPasswordBoxVue3SupabaseJwtSecret,
      'box-vue3-supabase',
      'JWT_SECRET'
    );

    const postgresPassword = await handlePasswordPromptAnswer(
      newPasswordBoxVue3Supabasepostgres,
      'box-vue3-supabase',
      'postgres'
    );

    if (!studioPort)
      console.log(
        `Supabase Studio will run on https://localhost:${availablePorts[0]}`
      );

    const use: {
      jwtSecret: string;
      postgresPassword: string;
      studio: StudioOptions;
    } = {
      jwtSecret,
      postgresPassword,
      studio: {
        STUDIO_PORT: studioPort || availablePorts[0],
        KONG_URL,
        META_URL,
      },
    };

    const useProd = {
      s3: '',
      postgresCluster: '',
    };

    return [0, 'dev', 'development'].includes(preset)
      ? { ...use }
      : [1, 'prod', 'production'].includes(preset)
      ? { ...use, ...useProd }
      : {
          /* the answers from the CLI prompt, in the format of options */
          ...use,
          ...useProd,
        };
  }
);
export default quickstart;

type AllOptions = devDefault | prodDefault | customConfig;

/**
 * Use your computer's local filesystem as the storage location for supabase. Use a single postgres instance. Start supabase studio. Do not secure supabase. DON'T USE THIS IN PRODUCTION.
 *
 * @typeParam jwtSecret: a password that will be used to make JSON Web Tokens for authentication. This must be a minimum of 36 characters long.
 *
 * @typeParam postgresPassword: a password that will be used to authenticate to the postgres database. This password is required for direct access to the database using tools like psql, TablePlus, and Supabase Studio
 */
type devDefault = {
  jwtSecret: string;
  postgresPassword: string;
} & Partial<customConfig>;

/**
 * Use an S3 provider for storage, use a Postgres cluster as the database. Does not start supabase studio. You have to bring your own S3 storage and Postgres cluster.
 *
 * @typeParam jwtSecret: a password that will be used to make JSON Web Tokens for authentication. This must be a minimum of 36 characters long.
 *
 * @typeParam postgresPassword: a password that will be used to authenticate to the postgres database. This password is required for direct access to the database using tools like psql, TablePlus, and Supabase Studio
 */
type prodDefault = {
  jwtSecret: string;
  postgresPassword: string;
  s3: string;
  postgresCluster: string;
} & Partial<customConfig>;

/**
 * Choose all of your own options
 *
 * @typeParam jwtSecret: a password that will be used to make JSON Web Tokens for authentication. This must be a minimum of 36 characters long.
 *
 * @typeParam postgresPassword: a password that will be used to authenticate to the postgres database. This password is required for direct access to the database using tools like psql, TablePlus, and Supabase Studio
 */
type customConfig = {
  jwtSecret: string;
  postgresPassword: string;
  s3: string; // this is just a placeholder
  postgresCluster: string; // this is just a placeholder
  storageVolume: StorageVolumeOptions;
  postgres: PostgresOptions;
  realtime: RealtimeOptions;
  postgRest: PostgRestOptions;
  storage: StorageOptions;
  postgresMeta: PostgresMetaOptions;
  goTrue: GoTrueOptions;
  studio: StudioOptions;
  boxBase: BoxBaseOptions;
  kong: KongOptions;
};

interface StorageVolumeOptions {}

/**
 * Options for the "supabase/postgres:14.1.0" container
 *
 * This container starts a Postgres database. It is only used in development mode.
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L149
 */
interface PostgresOptions {
  POSTGRES_PORT: number;
  POSTGRES_PASSWORD: string;
}

/**
 * Options for the "supabase/realtime:v0.21.0" container
 *
 * This container broadcasts changes to the postgres database in realtime.
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L90
 */
interface RealtimeOptions {}

/**
 * Options for the "postgrest/postgrest:v9.0.0" container
 *
 * This container maps postgres database queries to REST API endpoints
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L77
 */
interface PostgRestOptions {}

/**
 * Options for the "supabase/storage-api:v0.10.0" container
 *
 * This container stores and retrieves files. In development mode, it it accesses a docker volume that lives in your computer's filesystem. In production mode, it accesses an S3 storage location.
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L12
 */
interface StorageOptions {
  ANON_KEY: string;
  SERVICE_ROLE_KEY: string;
}

/**
 * Options for the "supabase/postgres-meta:v0.29.0" container
 *
 * This container maps postgres metadata queries to REST API endpoints. Metadata queries are queries about the postgres database itself, rather than the data within the database.
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L138
 */
interface PostgresMetaOptions {}

/**
 * Options for the "supabase/gotrue:v2.5.8" container
 *
 * This container authenticates users
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L40
 */
interface GoTrueOptions {
  SITE_URL: string;
  ADDITIONAL_REDIRECT_URLS: string;
  DISABLE_SIGNUP: string;
  JWT_EXPIRY: string;
  ENABLE_EMAIL_SIGNUP: boolean;
  ENABLE_EMAIL_AUTOCONFIRM: boolean;
  SMTP_ADMIN_EMAIL: string;
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_USER: string;
  SMTP_PASS: string;
  SMTP_SENDER_NAME: string;
  ENABLE_PHONE_SIGNUP: boolean;
  ENABLE_PHONE_AUTOCONFIRM: boolean;
}

/**
 * Options for the "supabase/studio:latest" container
 *
 * This container runs the Supabase Studio admin user interface.
 *
 * @typeParam STUDIO_PORT - the port on which the studio admin interface should be available. Defaults to 3000. (i.e. https://localhost:3000 opens studio)
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L12
 *
 * @see https://github.com/supabase/supabase/tree/master/studio
 */
interface StudioOptions {
  STUDIO_PORT: string;
  KONG_URL: string;
  META_URL: string;
}

//todo:
interface BoxBaseOptions {}

/**
 * Options for the "kong:2.1" container
 *
 * This container proxies requests to your supabase backend, forwarding them to the correct container. It also connects each container to the postgres database.
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L24
 */
interface KongOptions {
  KONG_HTTP_PORT: string;
  KONG_HTTPS_PORT: string;
}

async function getDockerCompose() {
  return parseYaml(
    await readFile(
      resolve(__dirname, '..', 'docker', 'docker-compose.yml'),
      'utf-8'
    )
  );
}

async function getDefaultEnvironmentVariables() {
  const ds /* (d)efault(s)tring */ = await readFile(
    resolve(__dirname, '..', 'docker', '.env.example'),
    'utf-8'
  );
  const da /* (d)efault(a)rray */ = ds
    .split('\n')
    .filter((line) => line.match(/(^[^#].+?=.*$)/))
    .map((line) => {
      const splitAt = line.indexOf('=');
      return [
        line.slice(0, splitAt) as string,
        line.slice(splitAt + 1 /* +1 to get rid of the '='*/),
      ];
    })
    .map((keyValue) => {
      if (keyValue[1] === 'true') return [keyValue[0], true];
      if (keyValue[1] === 'false') return [keyValue[0], false];
      if (keyValue[1] === 'undefined') return [keyValue[0], undefined];
      if (keyValue[1] === 'null') return [keyValue[0], null];
      const valueNumber = parseFloat(keyValue[1]);
      if (valueNumber) return [keyValue[0], valueNumber];
      return keyValue;
    });
  const defaults: { [key: string]: any } = {};
  da.forEach((d) => {
    const [k, value] = d;
    const key =
      k as string; /* it will always be a string because of the previous array operators */
    defaults[key] = value;
  });
  return defaults;
}
