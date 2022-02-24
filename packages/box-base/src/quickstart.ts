import Docker from 'dockerode';
import { isDockerReady, buildFromDockerfile, startContainer } from './utils';
import { resolve } from 'path';

/**
 *
 * @param dockerInstance - an instance of the {@link Docker} class. If an instance isn't provided, then quickstart will create one for you. The idea is that you can chain quickstarts together, sharing the same docker instance among them.
 *
 * @returns dockerInstance - the same instance of the {@link Docker} class that was passed in, or if no instance was passed in, a new instance.
 */
const quickstart: QuickstartFunction = async (dockerInstance?: Docker) => {
  const dockerReady = await isDockerReady();
  if (!dockerReady)
    throw new Error('Docker is either not installed or not running');
  // docker run node:17-alpine node -v
  const di =
    dockerInstance || new Docker({ socketPath: '/var/run/docker.sock' });
  // const i = await getImage('node', 'current-alpine', di);

  const i = await buildFromDockerfile(
    di,
    resolve(__dirname, '../Dockerfile'),
    'box-base',
    'incrementaldesign'
  );

  await startContainer(di, i);

  // const imageStatus = await di.image.get('node:current-alpine').status();

  // await print(
  //   JSON.stringify(i)
  // ); /* this is inefficient because we are stringifying JSON, then parsing it, then stringifying it again */
  // const boxBase = await di.container.create({
  //   Image: 'node',
  //   name: 'box-base',
  // });
  // await boxBase.start();
  // await boxBase.stop();
  // await boxBase.restart();
  // await boxBase.delete({ force: true });
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
