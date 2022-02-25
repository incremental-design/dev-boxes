import Docker from 'dockerode';

/**
 *
 * @param the docker instance to use.
 * @param image - the {@link Docker.Image} you want to run.
 * - The image you want to run MUST be locally available.
 *    - If the image isn't already available, you can use {@link getFromDockerHub} to get an image from the registry. Use {@link buildFromDockerfile} to build an image from a Dockerfile.
 *
 * @param ports - an array of remote ports to forward to your computer, where:
 * - remote is the port on the image
 * - local is the port on your computer.
 *  - Note that if you don't define local port, it will be default to the same port number as the remote port. If that port isn't available, then it will be assigned to the next available port. e.g. if the remote port is 8080, and your computer's port 8080 is in use, then the local port will be 8081.
 *  - If you define a remote port that isn't exposed in the image, then it will be ignored.
 * - protocol is either 'tcp' or 'udp'. If you don't know what this setting means, just leave it blank, and it will default to whatever protocol the image exposed.
 *
 * @param volumes: an array of volumes to mount, where:
 * - mountPoint is the location in which to mount the volume in the container
 * - volume {@link Docker.Volume} object. or a path to a directory on your computer that you would like to bind mount
 *
 * @returns a promise to get the {@link Docker.Container} that was created.
 *
 */
export async function startContainer(
  dockerInstance: Docker,
  image: Docker.Image,
  ports?: Array<{ remote: number; local?: number; protocol?: 'tcp' | 'udp' }>,
  volumes?: Array<{ mountPoint: string; volume: string | Docker.Volume }>,
  environmentVariables?: { [key: string]: string }
): Promise<void> /* Promise<Docker.Container> */ {
  const { Id, Config } = await image.inspect();
  const { ExposedPorts, Volumes } = Config;
  // if port in use, offer to use next available port in interactive mode, if non interactive mode, just console warn and use next available port. be sure to remap ports accordingly.
  // need to return the newly created container

  const localToForward = new Map<
    number,
    { remote: number; protocol: string }
  >();

  if (ports) {
    const e = Object.keys(ExposedPorts).map((port) => port.split('/'));
    const exposed = new Map<number, string>();
    e.forEach((p) => exposed.set(parseInt(p[0]), p[1]));

    for (const port of ports) {
      const exposedProtocol = exposed.get(port.remote);
      if (!exposedProtocol)
        throw new Error(
          `Port ${port.remote} is not exposed in the image.${
            port.local ? "You can't forward it to localhost/" + port.local : '.'
          }`
        );
      if (port.protocol && port.protocol !== exposedProtocol) {
        throw new Error(
          `port ${port.remote} is exposed as ${exposedProtocol}, but you specified ${port.protocol}.`
        );
      }
      localToForward.set(port.remote, {
        remote: port.remote,
        protocol: exposedProtocol,
      });
    }

    // todo: bind volumes
  }

  /* now local has all the ports to bind */
  console.log(Id);

  // https://github.com/apocas/dockerode#creating-a-container
  // const c = await dockerInstance.createContainer({
  //   Image: Id,
  // });
  // console.log(c);
  // const response = await c.start();
  // console.log(response);
  const runData = await dockerInstance.run(
    Id,
    ['./testExec.js'],
    process.stdout
  );
  console.log(runData); // how to stream the stdout instead of waiting around for it?
}
