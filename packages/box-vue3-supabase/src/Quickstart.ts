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

    /* see: https://supabase.com/docs/learn/auth-deep-dive/auth-deep-dive-jwts#jwts-in-supabase */
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
    }

    if (options.kong) {
      /* apply kong options */
      environmentVariables.KONG_HTTP_PORT = options.kong.KONG_HTTP_PORT;
      environmentVariables.KONG_HTTPS_PORT = options.kong.KONG_HTTPS_PORT;
      environmentVariables.KONG_URL = `http://kong:${environmentVariables.KONG_HTTP_PORT}`; /* this env var tells supabase studio what port the kong endpoint is on */
    }

    if (options.goTrue) {
      environmentVariables.SITE_URL = options.goTrue.SITE_URL;
      environmentVariables.JWT_EXPIRY = options.goTrue.JWT_EXPIRY;
      environmentVariables.DISABLE_SIGNUP = options.goTrue.DISABLE_SIGNUP;
      environmentVariables.ENABLE_EMAIL_SIGNUP =
        options.goTrue.ENABLE_EMAIL_SIGNUP;
      environmentVariables.ENABLE_EMAIL_AUTOCONFIRM =
        options.goTrue.ENABLE_EMAIL_AUTOCONFIRM;
      environmentVariables.SMTP_ADMIN_EMAIL = options.goTrue.SMTP_ADMIN_EMAIL;
      environmentVariables.SMTP_HOST = options.goTrue.SMTP_HOST;
      environmentVariables.SMTP_PORT = options.goTrue.SMTP_PORT;
      environmentVariables.SMTP_USER = options.goTrue.SMTP_USER;
      environmentVariables.SMTP_PASS = options.goTrue.SMTP_PASS;
      environmentVariables.ENABLE_PHONE_SIGNUP =
        options.goTrue.ENABLE_PHONE_SIGNUP;
      environmentVariables.ENABLE_PHONE_AUTOCONFIRM =
        options.goTrue.ENABLE_PHONE_AUTOCONFIRM;
    }

    console.log(environmentVariables);

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
      JWT_EXPIRY,
    } = await getDefaultEnvironmentVariables();

    const availablePorts = await Promise.all(
      [
        STUDIO_PORT,
        KONG_HTTP_PORT,
        KONG_HTTPS_PORT,
        POSTGRES_PORT,
        8080 /* the http port to listen on in dev */,
        80 /* the http port to listen on in prod */,
        443 /* the https port to listen on in prod */,
      ].map((port) => findAPortNotInUse(port, 65535))
    );

    const validatePort = async (port: number) => {
      if (typeof port === 'string' && port === '')
        return `Press tab + enter to accept the default port`;
      if (port < 0) return `port must be > 0. Received '${port}'.`;
      if (port > 65535) return `port must be < 65536. Received '${port}'.`;
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
      kongHttpPort,
      kongHttpsPort,
      postgresPort,
      siteUrl,
      sitePortHttp,
      sitePortHttps,
      jwtExpiry,
      allowSignup,
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
        type: (prev, values) =>
          values.preset < 2 || !values.preset ? false : 'number',
        message: `Choose the port on which Supabase Studio will run. (e.g. https://localhost:${STUDIO_PORT}`,
        initial: availablePorts[0],
        validate: validatePort,
      },
      {
        name: 'kongHttpPort',
        type: (prev, values) =>
          values.preset < 2 || !values.preset ? false : 'number',
        message: `Choose the port on which kong will listen for API requests. (e.g. http://localhost:${KONG_HTTP_PORT}`,
        initial: availablePorts[1],
        validate: validatePort,
      },
      {
        name: 'kongHttpsPort',
        type: (prev, values) =>
          values.preset < 2 || !values.preset ? false : 'number',
        message: `Choose the port on which kong will listen for API requests made with https. (e.g. https://localhost:${KONG_HTTPS_PORT}`,
        initial: availablePorts[2],
        validate: validatePort,
      },
      {
        name: 'postgresPort',
        type: (prev, values) =>
          values.preset < 2 || !values.preset ? false : 'number',
        message: `Choose the port on which postgres will listen for connections. (e.g. https://localhost:${POSTGRES_PORT}`,
        initial: availablePorts[3],
        validate: validatePort,
      },
      {
        name: 'siteUrl',
        type: (prev, values) =>
          values.preset === 0 ||
          !values.preset /* if preset is 'dev' don't bother setting a site url */
            ? false
            : 'text',
        message: 'What is the domain name of your web app?',
        initial: 'my-supa-app.com',
        validate: (url: string) => {
          /* valid domains are 'localhost', any IP address, or a domain with a generic top-level domain (gTLD) */
          if (url === 'localhost') return true;
          if (
            (() => {
              const octets = url.split('.').map((octet) => {
                const o = parseInt(octet);
                return (
                  o >= 0 &&
                  o <=
                    255 /* yes, I know that we aren't checking to make sure that an IP address isn't a broadcast address. Maybe later. I don't feel like solving the CIDRs rn. */
                );
              });
              return octets.length === 4 && octets.every((octet) => octet);
            })()
          )
            return true;
          if (
            !url.match(
              /.+?\.[a-zA-Z]+?$/
            ) /* e.g. abc.com, abc.net, abc.io, ... see: https://stackoverflow.com/questions/9071279/number-in-the-top-level-domain */
          )
            return 'Site url must be an IP address or be a domain name that ends with a generic top-level-domain (gTLD) (e.g. .com, .net, .org)';
          return true;
        },
      },
      {
        name: 'sitePortHttp',
        type: (prev, values) =>
          values.preset === 0 || !values.preset ? false : 'number',
        message: 'What port does your web app listen on for http traffic?',
        initial: (prev, values) =>
          values.preset === 0 || !values.preset
            ? availablePorts[4] /* if preset 'dev' use the first available port starting from 3000 */
            : availablePorts[5] /* else, use the first availabe port starting from 80 */,
        validate: validatePort,
      },
      {
        name: 'sitePortHttps',
        type: (prev, values) =>
          values.preset === 0 ||
          !values.preset /* if preset is 'dev' don't bother setting a site https port */
            ? false
            : 'number',
        message: 'What port does your web app listen on for https traffic?',
        initial: availablePorts[6],
        validate: validatePort,
      },
      {
        name: 'jwtExpiry',
        type: (prev, values) => {
          return values.preset < 2 || !values.preset ? false : 'number';
        },
        message:
          'How many seconds should pass before your web app automatically logs users out?',
        initial: JWT_EXPIRY,
        validate: (value) =>
          value >
          0 /* we aren't giving 'infinite' as an option because that is a VERY bad idea. This is because if a bad actor steals a user's JWT, and the JWT never expires, the bad actor will have full access to supabase until you manually reset the JWT_SECRET */,
      },
      {
        name: 'allowSignup',
        type: (prev, values) => {
          return values.preset < 2 || !values.preset ? false : 'confirm';
        },
        message:
          'Let users create accounts in your web app? If you enable this, then supabase will let users sign up for an account in your web app. Otherwise, you will have to manually create accounts for them. Disabling this does NOT prevent users from signing in to your web app, if they already have an account.',
        initial: true,
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

    if (!kongHttpPort)
      console.log(
        `Kong will listen for API requests on http://${
          siteUrl || 'localhost'
        }:${availablePorts[1]}`
      );

    if (!kongHttpsPort)
      console.log(
        `Kong will listen for API requests on https://${
          siteUrl || 'localhost'
        }:${availablePorts[2]}`
      );

    if (!postgresPort)
      console.log(
        `Postgres will listen for connections on http://${
          siteUrl || 'localhost'
        }:${availablePorts[3]}`
      ); // todo: RESTRICT CONNECTIONS TO LOCALHOST IN PROD (and also set firewall rules)

    const SITE_URL = `http://${siteUrl || 'localhost'}:${
      sitePortHttp || availablePorts[4]
    }`;
    console.log(`Your can access your web app at ${SITE_URL}`);

    if (!studioPort)
      console.log(
        `You can access Supabase Studio at https://${siteUrl || 'localhost'}:${
          availablePorts[0]
        }`
      );

    let DISABLE_SIGNUP = true;
    if ((allowSignup && allowSignup === 'true') || allowSignup === true)
      DISABLE_SIGNUP = false;

    const use: {
      jwtSecret: string;
      postgresPassword: string;
      studio: StudioOptions;
      kong: KongOptions;
      postgres: PostgresOptions;
      goTrue: GoTrueOptions;
    } = {
      jwtSecret,
      postgresPassword,
      studio: {
        STUDIO_PORT: studioPort || availablePorts[0],
      },
      kong: {
        KONG_HTTP_PORT: kongHttpPort || availablePorts[1],
        KONG_HTTPS_PORT: kongHttpsPort || availablePorts[2],
      },
      postgres: {
        POSTGRES_PORT: postgresPort || availablePorts[3],
      },
      goTrue: {
        SITE_URL,
        DISABLE_SIGNUP,
        // todo: ADDITIONAL_REDIRECT_URLS
        JWT_EXPIRY: jwtExpiry || JWT_EXPIRY,
        ENABLE_EMAIL_SIGNUP: !DISABLE_SIGNUP,
        ENABLE_EMAIL_AUTOCONFIRM: false,
        SMTP_ADMIN_EMAIL: 'hello@example.com',
        SMTP_HOST: 'smtp://my.mail.server.com',
        SMTP_PORT: 587,
        SMTP_USER: 'admin',
        SMTP_PASS: 'password',
        ENABLE_PHONE_SIGNUP: !DISABLE_SIGNUP,
        ENABLE_PHONE_AUTOCONFIRM: false,
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
 * @typeParam POSTGRES_PASSWORD - the password used to authenticate to the database.
 *
 * @typeParam POSTGRES_PORT - the port on localhost on which Postgres will listen for connections. DO NOT ENABLE THIS IN PRODUCTION.
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L149
 */
interface PostgresOptions {
  POSTGRES_PORT: number;
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
interface StorageOptions {}

/**
 * Options for the "supabase/postgres-meta:v0.29.0" container
 *
 * This container maps postgres metadata queries to REST API endpoints. Metadata queries are queries about the postgres database itself, rather than the data within the database.
 *
 * @typeParam PG_META_PORT - the port on which this container will listen for API requests.
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L138
 */
interface PostgresMetaOptions {}

/**
 * Options for the "supabase/gotrue:v2.5.8" container
 *
 * This container authenticates users
 *
 * @typeParam SITE_URL - the URL of your web app. (e.g. 'https://my-supa-app.com'). This field is required.
 *
 * @typeParam DISABLE_SIGNUP - don't let anyone create an account on your web app. Defaults to 'true' in development mode and 'false' in production mode. If you change it to 'true', then the only way to create an account on your web app is to invite someone from the supabase studio URL. Note that this doesn't stop people from signing _in_ to your web app. It just stops them from creating new accounts.
 *
 * @typeParam ADDITIONAL_REDIRECT_URLS - a list of one or more URIs that oAuth providers, such as Google, Github, and Facebook can send users to _after_ they log in. If you let people sign into your web app with Google, Github, Facebook, or any other oAuth provider, then your web app will send them to the oAuth provider's login page. Once they've logged in, the oAuth provider will send them to one of these URIs.
 *
 * @typeParam JWT_EXPIRY - the number of seconds before a user's JSON Web Token (JWT) expires. Once a user's JWT expires, they have to re-authenticate with your app. Defaults to 3600 seconds, or 1 hour. If you want to annoy your users, set this to something really small, like 600, which is 10 minutes.
 *
 * @typeParam ENABLE_EMAIL_SIGNUP - whether users can use their email to authenticate with your web app. Note that you have to build the UI for users to sign up with email. This setting only tells supabase to associate emails with user accounts.
 *
 * @typeParam ENABLE_EMAIL_AUTOCONFIRM - whether supabase should an account confirmation email to a user who signed up with email. Defaults to 'false'.
 *
 * @typeParam SMTP_ADMIN_EMAIL - the address from which all authentication-related emails are sent. (e.g. 'hello@my-supa-app.com'.) This is required.
 *
 * @typeParam SMTP_HOST - the mail server from which to send emails. (e.g. smtp.mandrillapp.com). Note that supabase doesn't have its own SMTP server. You have to provide it.
 *
 * @typeParam SMTP_PORT - the port on which the SMTP_HOST listens.
 *
 * @typeParam SMTP_USER - the username you use to authenticate to the SMTP_HOST
 *
 * @typeParam SMTP_PASS - the password you use to authenticate tothe SMTP_HOST
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/doc2ker/docker-compose.yml#L40
 *
 * @see https://supabase.com/docs/gotrue/server/about
 *
 * @see https://hub.docker.com/layers/supabase/gotrue/v2.5.8/images/sha256-ebae312adc009f0c35eaa03de51af9290afc73fab4da1a31f06a4b404858dc4b?context=explore
 */
interface GoTrueOptions {
  SITE_URL: string;
  OPERATOR_TOKEN?: string /* only used if you are using netlify to host your prod frontend. see: https://supabase.com/docs/gotrue/server/about#top-level */;
  DISABLE_SIGNUP: boolean;
  ADDITIONAL_REDIRECT_URLS?: string /* only used if you want to allow logins with google, facebook or other SSO providers. see: https://supabase.com/docs/learn/auth-deep-dive/auth-google-oauth */;
  JWT_EXPIRY: number;
  /* for all of the following options, see https://supabase.com/docs/gotrue/server/about#e-mail */
  ENABLE_EMAIL_SIGNUP: boolean;
  ENABLE_EMAIL_AUTOCONFIRM: boolean;
  SMTP_ADMIN_EMAIL: string;
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_USER: string;
  SMTP_PASS: string;
  // SMTP_SENDER_NAME: string; // todo: test if this is even necessary
  // todo: implement the rest of the env variables listed at: https://supabase.com/docs/gotrue/server/about#e-mail
  /* for all of the following options, see: */
  ENABLE_PHONE_SIGNUP: boolean;
  ENABLE_PHONE_AUTOCONFIRM: boolean;
  // todo: ENABLE_X_SIGNUP to enable 'X' oAuth provider. see: https://supabase.com/docs/gotrue/server/about#external-authentication-providers
  // EXTERNAL_BITBUCKET_ENABLED
  // EXTERNAL_BITBUCKET_CLIENT_ID
  // EXTERNAL_BITBUCKET_SECRET
  // EXTERNAL_BITBUCKET_REDIRECT_URI
  // EXTERNAL_BITBUCKET_URL
  // EXTERNAL_GITHUB_ENABLED
  // EXTERNAL_GITHUB_CLIENT_ID
  // EXTERNAL_GITHUB_SECRET
  // EXTERNAL_GITHUB_REDIRECT_URI
  // EXTERNAL_GITHUB_URL
  // EXTERNAL_GITLAB_ENABLED
  // EXTERNAL_GITLAB_CLIENT_ID
  // EXTERNAL_GITLAB_SECRET
  // EXTERNAL_GITLAB_REDIRECT_URI
  // EXTERNAL_GITLAB_URL
  // EXTERNAL_GOOGLE_ENABLED
  // EXTERNAL_GOOGLE_CLIENT_ID
  // EXTERNAL_GOOGLE_SECRET
  // EXTERNAL_GOOGLE_REDIRECT_URI
  // EXTERNAL_GOOGLE_URL
}

/**
 * Options for the "supabase/studio:latest" container
 *
 * This container runs the Supabase Studio admin user interface.
 *
 * @typeParam STUDIO_PORT - the port on which the studio admin interface should be available. Defaults to 3000. (i.e. https://localhost:3000 opens studio)
 *
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L12
 *
 * @see https://github.com/supabase/supabase/tree/master/studio
 */
interface StudioOptions {
  STUDIO_PORT: string;
}

//todo:
interface BoxBaseOptions {}

/**
 * Options for the "kong:2.1" container
 *
 * This container proxies requests to your supabase backend, forwarding them to the correct container. It also connects each container to the postgres database.
 *
 * @typeParam KONG_HTTP_PORT - the port on localhost that Kong will use to listen for API requests sent with http
 *
 * @typeParam KONG_HTTPS_PORT - the port on localhost that Kong will use to listen for API request sent with https
 *
 * @remarks
 *
 * This image might have the log4shell vulnerability.
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L24
 *
 * @see https://hub.docker.com/layers/kong/library/kong/2.1.0/images/sha256-aa6d39989058a27439807d9fc09becdcef04ca9d5c3a87fd2390f3e4fe210cf2?context=explore
 *
 * @see https://github.com/Kong/docker-kong/blob/ab4e1d8a61d80e5884e940f76622f729e751f563/alpine/Dockerfile
 *
 * @see https://docs.konghq.com/enterprise/2.3.x/deployment/default-ports/#main
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
