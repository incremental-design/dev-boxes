import crypto from 'crypto';
import { resolve } from 'path';
import { readFile } from 'fs/promises';
import {
  makeJWT,
  prompts,
  getDefaultEnvironmentVariables,
  AllOptions,
} from './utils';
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
  prompts
);
export default quickstart;

async function getDockerCompose() {
  return parseYaml(
    await readFile(
      resolve(__dirname, '..', 'docker', 'docker-compose.yml'),
      'utf-8'
    )
  );
}
