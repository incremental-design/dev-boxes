import { resolve } from 'path';
import {
  buildFromDockerfile,
  startContainer,
  getAnswersFromCLI,
  streamContainerOutput,
  print,
  createLocalVolume,
} from './utils';
import { quickstartFactory } from './utils/quickstartFactory';

const quickstartName = __dirname
  .split('/')
  .slice(0, -2)
  .pop() as string; /* i.e. '/path/to/packages/box-base/src/quickstart.ts' -> ['','path','to','packages','box-base','src','quickstart.ts'] -> ['','path','to','packages','box-base'] -> 'box-base' */
const quickstart = quickstartFactory<{
  test: string;
  test2: number;
  test3: boolean;
}>(
  quickstartName,
  async (dockerInstance, options) => {
    const i = await buildFromDockerfile(
      dockerInstance,
      resolve(__dirname, '../Dockerfile'),
      'box-base',
      'incrementaldesign'
    );
    const v = await createLocalVolume(options.test, {
      MyInValIdKeY: 'abc123',
      myValidkey: 'abc123',
      'design.incremental': 'abc123',
    });
    const c = await startContainer(dockerInstance, i, [
      { remote: 8080, local: options.test2 },
    ]);
    await new Promise<void>((resolve) => setTimeout(resolve, 5000));
    const { stdout, stderr, detach } = await streamContainerOutput(c, true);

    let count = 0;
    for await (const chunk of stdout) {
      count += 1;
      print(`{"stdout": "${chunk.toString().trim()}"}`);
      if (count > 10) await detach();
    }
    console.log('stream closed!');
  },
  async () => {
    const answers = await getAnswersFromCLI([
      {
        type: 'text',
        name: 'test',
        message: 'name the volume this container should use to store data',
      },
      {
        type: 'number',
        name: 'test2',
        message: 'which port should container listen on?',
      },
      {
        type: 'confirm',
        name: 'test3',
        message: 'yes or no',
      },
    ]);
    console.log(answers);
    return answers as unknown as {
      test: string;
      test2: number;
      test3: boolean;
    };
  }
);

export default quickstart;
export * from './utils'; /* this lets us re-use everything in utils ... without making an entirely separate package for it. */
