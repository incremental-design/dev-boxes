import Docker, { Container } from 'dockerode';
import { Stats } from 'fs';
import { stat } from 'fs/promises';
import path from 'path/posix';
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
 * - mountPoint is the absolute path to the location in which to mount the volume in the container. This path must be a posix path (i.e. it uses '/' as the directory separator). It cannot be '/', because that would clobber the root file system.
 * - volume {@link Docker.Volume} object. or the absolute path to a directory on your computer that you would like to bind mount
 * - readonly is a boolean that determines whether the volume should be read-only or writable. Set it to 'true' for read only. Defaults to 'false' for writable.
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
  volumes?: Array<{
    mountPoint: string;
    volume: string | Docker.Volume;
    readonly?: boolean;
  }>,
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

  const makeMounts = async () => {
    if (!volumes) return {};

    const va: /* (v)olume(a)rray */ Array<{
      mountPoint: string;
      volume: string | Docker.Volume;
      readonly?: boolean;
    }> = [];

    const promptForAlternateMount = async (
      message: string,
      mountPoint: string,
      volume: string | Docker.Volume,
      readonly?: boolean
    ) => {
      const { alternateMountPoint } = await prompts({
        type: 'text',
        name: 'alternateMountPoint',
        message,
        validate: (value) => {
          const { root, dir, base } = path.posix.parse(value);
          if (!root)
            return `you must choose an absolute path (i.e. something that starts with '/')`;
          if (root === dir && base === '')
            return `you must choose a location that is a subdirectory of '/'`;
          return true;
        },
      });
      return validateMountPoint(alternateMountPoint, volume, readonly);
    };

    const validateMountPoint = async (
      mountPoint: string,
      volume: string | Docker.Volume,
      readonly?: boolean
    ): Promise<{
      mountPoint: string;
      volume: string | Docker.Volume;
      readonly?: boolean;
    }> => {
      if (mountPoint === '/') {
        if (isTTY) {
          return promptForAlternateMount(
            `Cannot mount ${
              typeof volume === 'string' ? 'local directory' : 'docker volume'
            } '${
              typeof volume === 'string' ? volume : volume.name
            }' to container's '/' because it would clobber the entire container filesystem. Choose a different absolute path on the container:`,
            mountPoint,
            volume,
            readonly
          );
        } else
          throw new Error(
            `Cannot mount ${
              typeof volume === 'string' ? 'local directory' : 'docker volume'
            } '${
              typeof volume === 'string' ? volume : volume.name
            }' to container's '/' because it would clobber the entire container filesystem.`
          );
      }

      if (mountPoint.slice(0, 1) !== '/') {
        if (isTTY) {
          return promptForAlternateMount(
            `Cannot mount ${
              typeof volume === 'string' ? 'local directory' : 'docker volume'
            } '${
              typeof volume === 'string' ? volume : volume.name
            }' to container because '${mountPoint}' is a relative path. Choose an absolute path on the container:`,
            mountPoint,
            volume,
            readonly
          );
        } else
          throw new Error(
            `Cannot mount ${
              typeof volume === 'string' ? 'local directory' : 'docker volume'
            } '${
              typeof volume === 'string' ? volume : volume.name
            }' to container because '${mountPoint}' is not an absolute path.`
          );
      }
      return { mountPoint, volume, readonly };
    };

    const dedupeMountPoint = async (
      mountPoint: string,
      volume: string | Docker.Volume,
      readonly?: boolean
    ): Promise<{
      mountPoint: string;
      volume: string | Docker.Volume;
      readonly?: boolean;
    }> => {
      const mountPoints = new Map<string, string | Docker.Volume>();
      va.forEach((v) => mountPoints.set(v.mountPoint, v.volume));
      if (mountPoints.has(mountPoint)) {
        if (isTTY) {
          return promptForAlternateMount(
            `Cannot mount ${
              typeof volume === 'string' ? 'local directory' : 'docker volume'
            } '${
              typeof volume === 'string' ? volume : volume.name
            }' to container's '${mountPoint}' because ${
              typeof mountPoints.get(mountPoint) === 'string'
                ? 'local directory'
                : 'docker volume'
            } '${
              typeof mountPoints.get(mountPoint) === 'string'
                ? mountPoints.get(mountPoint)
                : (mountPoints.get(mountPoint) as Docker.Volume).name
            }' is already mounted there. Choose a different absolute path on the container:`,
            mountPoint,
            volume,
            readonly
          );
        } else
          throw new Error(
            `Cannot mount ${
              typeof volume === 'string' ? 'local directory' : 'docker volume'
            } '${
              typeof volume === 'string' ? volume : volume.name
            }' to container's '/' because it would clobber the entire container filesystem.`
          );
      }
      return { mountPoint, volume, readonly };
    };

    for (const volume of volumes) {
      const validated = await validateMountPoint(
        volume.mountPoint,
        volume.volume,
        volume.readonly
      ); /* we NEED to await inside the for loop in order to sequence the prompts correctly */
      const deduped = await dedupeMountPoint(
        validated.mountPoint,
        validated.volume,
        validated.readonly
      );
      va.push(deduped);
    }

    const bm /* (b)ind(m)ounts */ = va.filter(
      (v) => typeof v.volume === 'string'
    ) as Array<{
      mountPoint: string;
      volume: string;
      readonly?: boolean;
    }>;
    const vm /* (v)olume(m)ounts */ = va.filter(
      (v) => typeof v.volume !== 'string'
    ) as Array<{
      mountPoint: string;
      volume: Docker.Volume;
      readonly?: boolean;
    }>;

    const validateBindMount = async (
      mountPoint: string,
      volume: string,
      readonly?: boolean
    ): Promise<{
      mountPoint: string;
      volume: string;
      readonly?: boolean;
    }> => {
      const chooseAlternateDir = async (message: string) => {
        const { alternateVolume } = await prompts({
          name: 'alternateVolume',
          type: 'text',
          message,
          validate: (value) => {
            const { root, dir } = path.parse(value);
            if (!root)
              return `Path must be absolute. (i.e. it must start with '${path.sep}')`;
            if (root === dir)
              return `Don't bind mount the root of your filesystem. That's a recipe for disaster.`;
            return value;
          },
        });
        return validateBindMount(mountPoint, alternateVolume, readonly);
      };

      const { root, dir, base } = path.parse(volume);
      if (!root) {
        if (isTTY) {
          return chooseAlternateDir(
            `'${volume}' isn't an absolute path. Cannot bind it to container's '${mountPoint}'. Choose an absolute path to a folder on your computer:`
          );
        } else
          throw new Error(
            `'${volume}' isn't an absolute path. Cannot bind it to container's '${mountPoint}'`
          );
      }
      if (root === dir && base === '') {
        if (isTTY) {
          return chooseAlternateDir(
            `'${volume}' is the root of your filesystem. Do not mount your ENTIRE filesystem into a container. That's a VERY bad idea. Choose an absolute path to a folder instead:`
          );
        }
      }
      let stats: Stats;
      try {
        stats = await stat(volume);
      } catch (e) {
        return chooseAlternateDir(
          `'${volume}' either doesn't exist on your local filesystem, or cannot be accessed. Please choose a folder that actually exists:`
        );
      }
      if (!stats.isDirectory()) {
        return chooseAlternateDir(
          `'${volume}' is not a directory. It cannot be bound to the container. Please choose a folder on your filesystem:`
        );
      }
      return {
        mountPoint,
        volume,
        readonly,
      };
    };

    const mounts: Array<{
      Target: string;
      Source: string;
      Type: 'bind' | 'volume' | 'tmpfs';
      ReadOnly: boolean;
      Consistency:
        | 'default'
        | 'consistent'
        | 'cached'
        | 'delegated' /* we are going to use 'default' because it sounds like a sane default */;
    }> = [];

    for (const m of bm) {
      const { mountPoint, volume, readonly } = await validateBindMount(
        m.mountPoint,
        m.volume,
        m.readonly
      );
      mounts.push({
        Target: mountPoint,
        Source: volume,
        Type: 'bind',
        ReadOnly: readonly || false,
        Consistency: 'default',
      });
    }

    for (const m of vm) {
      const { mountPoint, volume, readonly } = m;
      const ro = readonly || false;
      mounts.push({
        Target: mountPoint,
        Source: volume.name,
        Type: 'volume',
        ReadOnly: readonly || false,
        Consistency: 'default',
      });
    }

    return { Mounts: mounts };
  };

  // todo: bind volumes

  const container = await dockerInstance.createContainer({
    /* pretty much ALL of the configuration happens in this object. see: https://docs.docker.com/engine/api/v1.37/#operation/ContainerCreate */
    Tty: false,
    Image: Id,
    HostConfig: {
      ...makePortBindings(),
      ...(await makeMounts()),
    },
  });

  await container.start();
  return container;
}
