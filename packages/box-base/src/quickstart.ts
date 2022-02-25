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
    await startContainer(dockerInstance, i);
  },
  async () => {
    const answers = await getAnswersFromCLI([
      { type: 'text', name: 'test', message: "what's your favorite color" },
      {
        type: 'number',
        name: 'test2',
        message: 'what is your favorite number',
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
