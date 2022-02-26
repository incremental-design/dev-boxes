import Docker, { Volume } from 'dockerode';
import { getAnswersFromCLI, isDockerReady, isLabelValid } from '.';

export async function createLocalVolume(
  name?: string,
  labels?: { [key: string]: string },
  dockerInstance?: Docker
): Promise<Volume> {
  const isTTY = process.stdout.isTTY;

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
        const { alternateLabel } = await getAnswersFromCLI([
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

  const di =
    dockerInstance ||
    (() => {
      if (!isDockerReady)
        throw new Error(
          `cannot create local volume '${name}' because docker is either not running or not installed.`
        );
      return new Docker({ socketPath: '/var/run/docker.sock' }); // do we have to destroy this later on?
    })();

  const volume = await di.createVolume({
    Name: name,
    Driver: 'local',
    Labels: labelsToUse,
    /* for DriverOpts, see https://stackoverflow.com/questions/62232676/docker-local-volume-driver-options */
  });
  return volume;
}
