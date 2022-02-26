import Docker, { Volume } from 'dockerode';
import { text } from 'stream/consumers';
import prompts from 'prompts';
import { isDockerReady, isLabelValid } from '.';

export async function createLocalVolume(
  name?: string,
  labels?: { [key: string]: string },
  dockerInstance?: Docker
): Promise<Volume> {
  const driver = 'local';
  const isTTY = process.stdout.isTTY;

  const di =
    dockerInstance ||
    (() => {
      if (!isDockerReady)
        throw new Error(
          `cannot create local volume '${name}' because docker is either not running or not installed.`
        );
      return new Docker({ socketPath: '/var/run/docker.sock' }); // do we have to destroy this later on?
    })();

  const nameToUse = await (async () => {
    if (!name) return;

    const validateName = async (n: string): Promise<string> => {
      if (n.match(/^[a-zA-Z0-9]+[a-zA-Z0-9_.-]*$/)) return n;
      if (isTTY) {
        const { alternateName } = await prompts([
          {
            name: 'alternateName',
            message: `volume name '${n}' is not valid. Volume names can only contain alphanumeric characters, '_', '-', and '.'. They must start with an alphanumeric character. Please choose a different name:`,
            type: 'text',
          },
        ]);
        return validateName(alternateName);
      } else {
        throw new Error(
          `volume name '${n}' is not valid. Volume names can only contain alphanumeric characters, '_', '-', and '.'. They must start with an alphanumeric character.`
        );
      }
    };

    const { Volumes } = await di.listVolumes();
    console.log(Volumes);
    const allVolumes: { [volumeName: string]: string } = {};
    Volumes.map((v) => ({ name: v.Name, driver: v.Driver })).forEach((v) => {
      allVolumes[v.name] = v.driver;
    });

    const dedupeName = async (n: string): Promise<string> => {
      if (!allVolumes[n]) return n; /* assume n has already been validated */
      if (allVolumes[n] === driver) {
        if (isTTY) {
          const { reuseExisting, newName } = await prompts([
            {
              name: 'reuseExisting',
              type: 'confirm',
              message: `Volume ${n} already exists. Reuse it?`,
            },
            {
              type: (prev) => (prev ? null : 'text'),
              name: 'newName',
              message: `Choose a different name for the volume. It must start with an alphanumeric character. It can only contain alphanumeric characters, '_', '-', and '.'`,
            },
          ]);
          if (reuseExisting) return n;
          const v = await validateName(n);
          return dedupeName(v);
        } else {
          return n; /* docker's default behavior is to reuse a volume if it exists. This is because volumes typically have hashes for names, and are meant to be reused */
        }
      }
      if (isTTY) {
        const { newName } = await prompts([
          {
            name: 'newName',
            type: 'text',
            message: `Volume '${n}' already exists. Choose a different name for the volume. It must start with an alphanumeric character. It can only contain alphanumeric characters, '_', '-', and '.'`,
          },
        ]);
        const v = await validateName(newName);
        return dedupeName(v);
      } else {
        throw new Error(
          `Cannot create a new volume with name '${n}', because there is an existing volume, using driver '${allVolumes[n]}'. For more information, see: https://docs.docker.com/engine/reference/commandline/volume_create/#examples`
        );
      }
    };

    const validated = await validateName(name);
    return dedupeName(validated);
  })();

  const labelsToUse = await (async () => {
    if (!labels) return {};
    const labelObjects = Object.keys(labels).map((label) => ({
      key: label,
      value: labels[label],
    }));

    const validateLabel = async (label: {
      key: string;
      value: string;
    }): Promise<{ key: string; value: string }> => {
      const { valid, message } = isLabelValid(label);

      if (!valid && isTTY) {
        const { alternateLabel } = await prompts([
          {
            name: 'alternateLabel',
            message: `${message}. Please choose a different label.`,
            type: 'text',
          },
        ]);
        return validateLabel({ key: alternateLabel, value: label.value });
      }

      if (!valid /* and isn't a TTY */) {
        throw new Error(message);
      }
      return label;
    };
    const l: { [key: string]: string } = {};
    for (const o of labelObjects) {
      const validated = await validateLabel(
        o
      ); /* we HAVE to use await inside this for loop to sequence the prompts in the CLI */
      l[validated.key] = validated.value;
    }
    return l;
  })();

  const volume = await di.createVolume({
    Name: nameToUse,
    Driver: driver,
    Labels: labelsToUse,
    /* for DriverOpts, see https://stackoverflow.com/questions/62232676/docker-local-volume-driver-options */
  });
  return volume;
}
