import crypto from 'crypto';
import { fetch } from 'undici';
import { resolve } from 'path';
import { readFile } from 'fs/promises';
import yaml from 'js-yaml';

import Docker from 'dockerode'; /* this talks to the docker API at `/var/run/docker.sock` see: https://www.npmjs.com/package/dockerode */
// import { parse as parseDockerFile } from 'docker-file-parser'; /* this parses dockerfiles. See: https://www.npmjs.com/package/docker-file-parser */
import {
  default as boxBase,
  isDockerReady,
  buildFromDockerfile,
  startContainer,
  quickstartFactory,
  getAnswersFromCLI,
  addToKeychain,
  retrieveFromKeychain,
  makePasswordPrompt,
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
 * 2. A PostgreSQL database.
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
 * The docker storage volume handles the backend's data, PostgreSQL handles its state, the middleware handles its functionality, and the proxy server exposes its functionality to the frontend.
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

    const dockerCompose = (async () => {
      const url =
        'https://raw.githubusercontent.com/supabase/supabase/master/docker/docker-compose.yml'; /* this HAS to be tested because it will always download the freshest, latest copy from github */
      const { body } = await fetch(url);
      let s = '';
      if (body)
        for await (const chunk of body) {
          s += Buffer.from(chunk).toString('utf-8');
        }
      if (
        s ===
        '' /* which means that body was null, and therefore 's' never got filled up */
      ) {
        const fallback = resolve(__dirname, 'docker-compose.yml');

        console.error(
          `Cannot find latest supabase docker-compose.yml at ${url} ... using older version at ${fallback} instead.`
        );
        s = await readFile(fallback, { encoding: 'utf-8' });
      }
      return yaml.load(s);
    })();

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
    /* write a CLI prompt to ask user for options here */
    return {
      /* the answers from the CLI prompt, in the format of options */
    };
  }
);
export default quickstart;

/**
 * 'devDefault' means use sane defaults for a self-hosted dev environment
 * 'prodDefault' means use sane defaults for a production environment
 */
type AllOptions =
  | 'devDefault'
  | 'prodDefault'
  | {
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
interface PostgresOptions {}
interface RealtimeOptions {}
interface PostgRestOptions {}
interface StorageOptions {}
interface PostgresMetaOptions {}
interface GoTrueOptions {}

/**
 *
 */
interface StudioOptions {}
interface BoxBaseOptions {}
interface KongOptions {}
