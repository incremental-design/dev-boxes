import Docker from 'dockerode';
import { isDockerReady } from '.';
/**
 * quickstartFactory checks to make sure docker is ready, checks to see if it running in a shell, and then makes a new quickstart function.
 *
 * @typeParam options - an options object that the {@link dockerActions} parameter will use to interact with {@link dockerInstance}.
 *
 * @param name - the name of the quickstart. Set this to the name of the package that the quickstart is in.
 *
 * @param dockerActions - an object containing functions that will be used to interact with docker.
 * @param d - a docker instance on which to act.
 * @param o - an object containing options that affect how dockerActions runs.
 * @param prompts - a function that prompts the user for information, and returns an object of type {@link options}
 * @param dockerInstance - an instance of the {@link Docker} class. If an instance isn't provided, then quickstart will create one for you. The idea is that you can combine quickstarts together, sharing the same docker instance among them.
 *
 * @returns A quickstart function. This is a function that:
 *  - optionally receives a {@link Docker} instance.
 *    - if you don't provide a docker instance, the quickstart will create one for you. The idea is that if you combine quickstarts together, you can share the same docker instance among them and improve performance.
 *  - optionally recieves an object of type {@link Options}
 *    - if you don't provide the quickstart function with an options object, it will run in interactive mode. This means that it will run the {@link prompts} function. Keep in mind that if you run a quickstart in interactive mode, you MUST run it in a shell. Otherwise, it will hang forever, because it will listen for user input on stdin, and won't receive it.
 *  - checks to make sure that docker is running, and if so, runs {@link dockerActions}, handling any errors that occur.
 *
 *
 * @example
 * ```typescript
 * import {buildFromDockerfile, startContainer} from 'box-base';
 *
 * const quickstartName
 *  = __dirname     // '/path/to/packages/box-base/src/quickstart.ts'
 *   .split('/')    // ['','path','to','packages','box-base','src','quickstart.ts']
 *   .slice(0, -2)  // ['','path','to','packages','box-base']
 *   .pop() as string;  // 'box-base'
 *
 *
 * const quickstart = quickstartFactory<{
 *  username: string;         // e.g. bob
 *  password: string;         // e.g. 'correct-horse-battery-staple'
 *  databaseAddress: string;  // e.g. '127.0.0.1:3306'
 * }>
 * (quickstartName,
 *  async (dockerInstance, options) => {
 *
 *    // do things with the docker API here
 *    // i.e. buildFromDockerfile, startContainer, etc.
 *
 *   return {
 *    destroy: async () => {
 *      // destroy all the containers you made, prune all volumes, images, networks
 *      return {destroyed: true}
 *
 *      // if your teardown code doesn't work, you can:
 *      // return {destroyed: false, message: `destroy failed because <<reason>>`}
 *    },
 *    items: {
 *      // include everything that you created or used here.
 *      images: [],
 *      containers: [],
 *      volumes: [],
 *      binds: [],
 *      networks: []
 *    }
 *   };
 *
 *  },
 *  async () => {
 *
 *    // prompt user to enter username, password, and database address.
 *
 * }
 * );
 * ```
 */
export function quickstartFactory<options>(
  name: string,
  dockerActions: DockerActions<options>,
  prompts: Prompts<options>
): Quickstart<options> {
  const quickstart: Quickstart<options> = async (
    o?: options,
    dockerInstance?: Docker
  ) => {
    if (!(await isDockerReady()))
      throw new Error('Docker is either not installed or not running');

    const di = new Docker({ socketPath: '/var/run/docker.sock' });
    try {
      const checkPrompts = async () => {
        if (!process.stdin.isTTY && !process.stdout.isTTY)
          throw new Error(
            `${name} was not provided with an options object, and is not running in a shell. There is no way to prompt for missing options.`
          );
        return prompts();
      };
      const optionsObject =
        o ||
        (await prompts()); /* only run prompts if options object not provided */
      const { destroy, items } = await dockerActions(optionsObject, di);
      return { dockerInstance: di, destroy, items };
    } catch (e) {
      console.error(e);
      console.error(name + ' failed.');
      process.exitCode = 1; /* we do this so that in the case that dockerActions fails, we can continue with any subsequent quickstarts */
      const message = `Cannot destroy '${name}' because of error during start: ${e}`;
      return {
        dockerInstance: di,
        destroy: async () => ({
          destroyed: false,
          message,
        }),
        items: {
          images: [],
          containers: [],
          volumes: [],
          binds: [],
          networks: [],
        },
      };
    }
  };

  return quickstart;
}

/**
 * Contains the actions that the quickstart will perform with the docker API. Returns a function that undoes all of these actions and returns an object with all of the containers, volumes, images, binds, and networks that were created or used.
 *
 * @typeParam T - the type signature of the options object that the 'o' parameter will use to interact with {@link dockerInstance}.
 *
 * @param o - the options passed to the quickstart function.
 * @param d - a docker instance on which to act.
 * @returns an object that contains:
 * - a {@link Destroy} function, which undoes everything that the quickstart function did. This includes stopping and removing all containers, deleting all volumes, and pruning all networks and images. Note that if a network or image is in use by another container, it will not be pruned.
 * - an object of type {@link Items} that contains all of the items that the quickstart function created or otherwise interacted with.
 */
export type DockerActions<T> = (
  o: T,
  d: Docker
) => Promise<{ destroy: Destroy; items: Items }>;

type Prompts<T> = () => Promise<T>;

/**
 * A function that runs a {@link DockerActions} function after it:
 * 1. checks whether docker is installed and ready,
 * 2. checks whether it is running in a shell, and if so, checks for flags that match the keys in 'T'.
 *  - If it is running in a shell, it will use the {@ link Prompts} function to prompt the user for missing flags.
 *  - If it is not running in a shell, it will skip the {@link Prompts} function and pass the 'o' parameter to the {@link DockerActions} function instead.
 *
 * @typeParam T - the type signature of the options object that the 'o' parameter will use to interact with {@link dockerInstance}.
 *
 * @param o - the options passed to the quickstart function. If this isn't provided, and this function is running in a shell (i.e. stdin and stdout are both TTYs), then the {@link Prompts} function will be called to prompt the user for missing options. If this isn't provided, and this function is NOT running in a shell, it will error.
 *
 * @param d - the docker instance on which to act. If this is not provided, this function will create one for you.
 *
 * @returns an object that contains:
 * - a dockerInstance of type {@link Docker}. This is the docker instance upon which the function acted.
 * - a {@link Destroy} function, which undoes everything that the quickstart function did. This includes stopping and removing all containers, deleting all volumes, and pruning all networks and images. Note that if a network or image is in use by another container, it will not be pruned. Note that if this function errors when it runs, the {@link Destroy} function will not actually destroy anything.
 * - a {@link Items} object, which contains all of the items that the quickstart function created or otherwise interacted with.
 */
export type Quickstart<T> = (
  o?: T,
  d?: Docker
) => Promise<{
  dockerInstance: Docker;
  destroy: Destroy;
  items: Items;
}>;

/**
 * A function that undoes all of the actions that the quickstart function did. This includes stopping and removing all containers, deleting all volumes, and pruning all networks and images. Note that if a network or image is in use by another container, it will not be pruned.
 *
 * @returns an object that contains:
 * - a boolean indicating whether the destroy function was successful.
 * - a string indicating the reason for failure, if the destroy function failed.
 */
export type Destroy = () => Promise<{ destroyed: boolean; message?: string }>;

/**
 * An object that contains all of the items that the quickstart function created or otherwise interacted with.
 */
export interface Items {
  images: Array<Docker.Image>;
  containers: Array<Docker.Container>;
  volumes: Array<Docker.Volume>;
  binds: Array<string>;
  networks: Array<Docker.Network>;
}
