import Docker from 'dockerode';
import {
  isDockerReady,
  buildFromDockerfile,
  startContainer,
  getAnswersFromCLI,
  addToKeychain,
  retrieveFromKeychain,
  makePasswordPrompt,
  generatePasswords,
} from './utils';
import { resolve } from 'path';

/**
 *
 * @param dockerInstance - an instance of the {@link Docker} class. If an instance isn't provided, then quickstart will create one for you. The idea is that you can chain quickstarts together, sharing the same docker instance among them.
 *
 * @returns dockerInstance - the same instance of the {@link Docker} class that was passed in, or if no instance was passed in, a new instance.
 */
const quickstart: QuickstartFunction = async (dockerInstance, options) => {
  const quickstartName = __dirname
    .split('/')
    .slice(0, -2)
    .pop(); /* i.e. '/path/to/packages/box-base/src/quickstart.ts' -> ['','path','to','packages','box-base','src','quickstart.ts'] -> ['','path','to','packages','box-base'] -> 'box-base' */
  if (!(await isDockerReady()))
    throw new Error('Docker is either not installed or not running');

  const di =
    dockerInstance || new Docker({ socketPath: '/var/run/docker.sock' });

  try {
    const i = await buildFromDockerfile(
      di,
      resolve(__dirname, '../Dockerfile'),
      'box-base',
      'incrementaldesign'
    );
    await startContainer(di, i);
  } catch (e) {
    console.error(e);
    console.error(quickstartName + ' failed.');
    process.exitCode = 1;
    return di;
  }
  return di;
};

/**
 * a quickstartFunction is any function that takes in a @link Docker} instance and promises to return a {@link Docker} instance. Ideally, this function should return the same docker instance it received. This lets quickstarts share the same docker instance.
 */
export type QuickstartFunction = (
  dockerInstance?: Docker,
  options?: { [key: string]: any }
) => Promise<Docker>;

export default quickstart;
export * from './utils'; /* this lets us re-use everything in utils ... without making an entirely separate package for it. */
