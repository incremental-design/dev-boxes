import Docker, { Container } from 'dockerode';
import { checkPortStatus, findAPortNotInUse } from 'portscanner';
import prompts from 'prompts';

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
  ports?: Array<{
    remote: number;
    local?: number;
    protocol?:
      | 'tcp'
      | 'udp'
      | 'sctp' /* see: https://docs.docker.com/engine/api/v1.37/#operation/ContainerCreate */;
  }>,
  volumes?: Array<{ mountPoint: string; volume: string | Docker.Volume }>,
  environmentVariables?: { [key: string]: string }
): Promise<Container> {
  const { Id, Config } = await image.inspect();
  const { ExposedPorts, Volumes } = Config;

  const localhost = '127.0.0.1'; // we might need to expand this later on
  const isTTY = process.stdout.isTTY;

  const localToForward = new Map<
    number,
    { remote: number; protocol: string }
  >();

  if (ports) {
    const e = Object.keys(ExposedPorts).map((port) => port.split('/'));
    const exposed = new Map<number, string>();
    e.forEach((p) => exposed.set(parseInt(p[0]), p[1]));

    for (const port of ports) {
      if (port.remote > 65535)
        throw new Error(
          `Port ${port.remote} does not exist on the container, because ports are numbered from 0 - 65535`
        );

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
      const getLocal = async () => {
        const confirmPort = async (
          portToCheck: number,
          remote: number
        ): Promise<number> => {
          if (portToCheck > 65535) {
            if (!isTTY)
              throw new Error(
                `Local port ${portToCheck} does not exist, because ports are numbered from 1 to 65535. It is impossible to forward container port to it.`
              );
            const { validPort } = await prompts({
              type: 'number',
              name: 'validPort',
              message: `Port number ${portToCheck} is out of range. Choose a port between 0 and 65535`,
              validate: (value) => {
                if (value < 0) return 'Port number must be >= 0';
                if (value > 65535) return 'Port number must be <= 65535';
                return true;
              },
            });
            return confirmPort(validPort, remote);
          }

          const status = await new Promise<boolean>((resolve, reject) => {
            checkPortStatus(portToCheck, localhost, (error, status) => {
              if (error) reject(error);
              resolve(status === 'closed');
            });
          });
          if (status) return portToCheck;
          const nextAvailablePort = await new Promise<number>(
            (resolve, reject) => {
              findAPortNotInUse(
                portToCheck === 65535 ? 0 : portToCheck + 1,
                65535,
                localhost,
                (error, port) => {
                  if (error) reject(error);
                  resolve(port);
                }
              );
            }
          );

          if (!isTTY) {
            console.warn(
              `Port ${portToCheck} on ${localhost} is in use. Forwarding ${port.remote} to port ${nextAvailablePort} instead.`
            );
            return nextAvailablePort;
          } else {
            const response = await prompts([
              {
                type: 'confirm',
                name: 'useNextAvailablePort',
                message: `Port ${portToCheck} on ${localhost} is in use. Forward port ${port.remote} on the container to port ${nextAvailablePort} on ${localhost} instead?`,
              },
              {
                type: (prev) => (prev === false ? 'number' : null),
                name: 'checkPort',
                message: 'Enter the port you want to use:',
              },
            ]);
            if (response.useNextAvailablePort) return nextAvailablePort;
            return await confirmPort(response.checkPort, port.remote);
          }
        };
        return confirmPort(port.local || port.remote, port.remote);
      };

      localToForward.set(await getLocal(), {
        remote: port.remote,
        protocol: exposedProtocol,
      });
    }
  }

  const makePortBindings = () => {
    if (!ports) return {};
    const portBindings: {
      [remote: string]: [
        {
          HostIp: string;
          HostPort: string;
        }
      ];
    } = {};
    for (const p of localToForward) {
      const local = p[0];
      const remotePort = p[1].remote;
      const remoteProtocol = p[1].protocol;
      portBindings[`${remotePort}/${remoteProtocol}`] = [
        {
          HostIp: localhost,
          HostPort: `${local}`,
        },
      ];
      return { PortBindings: portBindings };
    }
  };

  // todo: bind volumes

  const container = await dockerInstance.createContainer({
    /* pretty much ALL of the configuration happens in this object. see: https://docs.docker.com/engine/api/v1.37/#operation/ContainerCreate */
    Tty: false,
    Image: Id,
    HostConfig: {
      ...makePortBindings(),
    },
  });

  await container.start();
  return container;
}
