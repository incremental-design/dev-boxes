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
 *  async () => {
 *    // prompt user to enter username, password, and database address.
 * },
 *  async (dockerInstance, options) => {
 *
 *    // do things with the docker API here
 *    // i.e. buildFromDockerfile, startContainer, etc.
 *
 *  }
 * );
 * ```
 */
export function quickstartFactory<options>(
  name: string,
  dockerActions: (o: options, d: Docker) => Promise<void>,
  prompts: () => Promise<options>
): (o?: options, d?: Docker) => Promise<void> {
  return async function quickstart(
    o?: options,
    dockerInstance?: Docker
  ): Promise<void> {
    if (await !isDockerReady())
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
      await dockerActions(optionsObject, di);
    } catch (e) {
      console.error(e);
      console.error(name + ' failed.');
      process.exitCode = 1; /* we do this so that in the case that dockerActions fails, we can continue with any subsequent quickstarts */
    }
  };
}
