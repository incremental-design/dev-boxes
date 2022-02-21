import passgen from 'generate-password';
import cac from 'cac';
import prompts, { PromptObject } from 'prompts';
import keytar from 'keytar';
import { spawn } from 'child_process';
import { stat } from 'fs/promises';
import { PassThrough, Readable } from 'stream';
import { stdout } from 'process';
import * as readline from 'readline';
import Docker from 'dockerode';
import { Socket } from 'net';

/**
 *
 * @param dockerInstance - an instance of the {@link Docker} class. If an instance isn't provided, then quickstart will create one for you. The idea is that you can chain quickstarts together, sharing the same docker instance among them.
 *
 * @returns dockerInstance - the same instance of the {@link Docker} class that was passed in, or if no instance was passed in, a new instance.
 */
async function quickstart(dockerInstance?: Docker): Promise<Docker> {
  const dockerReady = await isDockerReady();
  if (!dockerReady)
    throw new Error('Docker is either not installed or not running');
  // docker run node:17-alpine node -v
  const di =
    dockerInstance || new Docker({ socketPath: '/var/run/docker.sock' });
  const i = await getImage('node', 'current-alpine', di);

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
}

/**
 * get an image, downloading it from docker hub if needed.
 * @param name - the name of the image to download (e.g. 'node')
 * @param tag - the tag of the image to download (e.g. 'current-alpine')
 * @param dockerInstance - the instance of the {@link Docker} class to use.
 */
export async function getImage(
  name: string,
  tag: string,
  dockerInstance: Docker
) {
  // const logStream = (await dockerInstance.image.create(
  //   {},
  //   { fromImage: name, tag: tag }
  // )) as Readable;

  // const I = dockerInstance.pull(
  //   `${name}:${tag}`,
  //   {},
  //   (err: any, stream: Readable) => {
  //     console.log('the stream is', stream);
  //     // await printProgress(stream);
  //   }
  // );

  // const logStream = (await dockerInstance.pull(`${name}:${tag}`)) as Readable;

  // console.log('the image is', I);

  // console.log(I);

  // await printProgress(logStream);

  // return dockerInstance.image.get(`${name}:${tag}`);
  const socket = await new Promise<Socket>((resolve, reject) => {
    dockerInstance.pull(`${name}:${tag}`, (err: any, s: Socket) => {
      resolve(s);
    });
  });
  await printProgress(socket);

  // return result;
}

/**
 * print each line of a readable stream to stdout, clearing the previous line before printing the next line.
 *
 * @param r - a readable stream that can be encoded as utf8 text.
 */
export async function printProgress(r: Readable) {
  const clear = async () => {
    await new Promise<void>((resolve) => {
      readline.clearScreenDown(stdout, resolve);
    });
    await new Promise<void>((resolve) => {
      readline.cursorTo(stdout, 0, 0, resolve);
    });
  };

  for await (const chunk of r) {
    await clear();
    const s = chunk.toString('utf8');
    await new Promise((resolve) => {
      stdout.write(`\n${prettyPrintJSON(s)}\n`, resolve);
    });
  }
  await clear();
}

/**
 * print a string or line of a readable stream to stdout, without clearing the previous line.
 *
 * @param r - a readable or string to print.
 *
 */
export async function print(r: Readable | string) {
  if (typeof r === 'string') {
    stdout.write(`\n${prettyPrintJSON(r)}\n`);
  } else {
    for await (const chunk of r) {
      await new Promise((resolve) => {
        stdout.write(`\n${prettyPrintJSON(chunk.toString('utf8'))}\n`, resolve);
      });
    }
  }
}

function prettyPrintJSON(JSONstring: string) {
  try {
    const j = JSON.parse(JSONstring);
    return JSON.stringify(j, null, 2);
  } catch (e) {
    return `\n\nfailed to parse JSON for:\n\n${JSONstring}\n\n`;
  }
}

/**
 * @returns true if docker desktop is installed and running, false otherwise.
 *
 * @remarks
 * use this function if you don't want to handle a 'docker not installed' or 'docker not running' error.
 *
 */
export async function isDockerReady() {
  try {
    checkDocker();
  } catch (error) {
    console.warn(error);
    return false;
  }
  return true;
}

/**
 * checks if docker desktop is installed and running. Errors if not.
 */
export async function checkDocker(): Promise<void> {
  const isInstalled = await new Promise((resolve) => {
    spawn('which', ['docker']).on('close', (code) => {
      resolve(code === 0);
    });
  });
  if (!isInstalled) throw new Error('Docker is not installed.');
  try {
    await stat('/var/run/docker.sock'); // todo: check if this is the right place to check for docker on win and linux
  } catch (error: any) {
    switch (error.errno) {
      case -2:
        throw new Error(
          'docker engine is not running. Check to see if docker desktop is running.'
        );
      /* assume that docker engine ungracefully quit */
      default:
        throw new Error(
          `docker engine was ungracefully stopped. Although the '/var/run/docker.sock' file exists, there is nothing listening to the socket. This always means that docker engine was stopped before it had a chance to close the socket.`
        );
    }
  }
}

/**
 * generatePasswords makes random passwords.
 *
 * @param length - number of characters in password. Defaults to 36 characters.
 * @param symbols - whether to include special characters in the password. Defaults to true.
 *
 * @param numberToGenerate - the number of passwords to generate. Defaults to 100.
 *
 * @returns an iterator that returns unique string that you can use as a password.
 */
export function* generatePasswords(
  length = 36,
  symbols = true,
  numberToGenerate = 100
): IterableIterator<string> {
  const PA = passgen.generateMultiple(numberToGenerate, {
    length,
    symbols,
    numbers: true,
    lowercase: true,
    uppercase: true,
    strict: true,
    exclude: '"$\'\\',
  });
  for (const P of PA) {
    yield P;
  }
}

/**
 * getAnswersFromCLI rolls a tiny command line interface with flags and prompts. If a user supplies a flag, the corresponding prompt will be skipped. Ergo, supply all of the flags, and none of the prompts will show up. Perfect for CI/CD.
 *
 * @param questions - an array of {@link prompts.PromptObject}s
 *
 * @returns an object in which each of the {prompts.promptObject.name}s is a key and the user input is the value.
 *
 * @example
 * ```typescript
 * const answers = await getAnswersFromCLI([
 *  {
 *    name: 'ipAddress',
 *    message: 'What is your IP address?',
 *    type: 'text',
 *  },
 * ]);
 *
 * // if the args `--ipAddress <some-ip-address>` are passed in as arguments when the process running getAnswersFromCLI starts, then no prompt will be displayed in the process's standard output.
 * ```
 *
 */
export async function getAnswersFromCLI(
  questions: Array<prompts.PromptObject>
) {
  const cli = cac();
  const { args, options } = cli.parse();
  let flags: Array<{ [key: string]: any }> = [];
  let nonInteractive = true;
  const questionsToAsk = questions.map((prompt) => {
    if (typeof prompt.name === 'string' && options[prompt.name]) {
      flags.push(options[prompt.name]);
      return {
        ...prompt,
        type: (prev: any) =>
          null /* this will cause the prompt to be skipped */,
      };
    }
    nonInteractive = false;
    return prompt;
  });
  if (nonInteractive) return flags;
  const promptAnswers = await prompts(questionsToAsk);
  return { ...promptAnswers, ...flags };
}

/**
 * addToKeychain adds a password to the keychain.
 *
 * @param service - the service that the account is associated with.
 * @param account - the account that the password unlocks.
 * @param password - the password to add to the keychain.
 *
 */
export async function addToKeychain(
  service: string,
  account: string,
  password: string
) {
  return keytar.setPassword(service, account, password);
}

/**
 * retrieveFromKeychain gets a password from the keychain.
 * @param service
 * @param account
 * @returns a password, or null if the password is not found.
 */
export async function retrieveFromKeychain(
  service: string,
  account: string
): Promise<string | null> {
  return keytar.getPassword(service, account);
}

/**
 * makePasswordPrompt returns an array of {@link PromptObject}s that ask a user to set a password.
 * @param service - the service that the account is associated with.
 * @param account - the account who's password you want to update.
 * @param newPassword - the password you want to update to.
 * @returns array of prompts that ask the user if they want to update the password, and if so, what they want to update to.
 *
 * @remarks
 * These prompts only show up if:
 *  - the user has never set a password for the given service and account, and hasn't passed the --autoPassword flag.
 *  - the user passes the --changePassword flag into the CLI.
 * Note that these prompts DON'T ACTUALLY SET THE PASSWORD. They only store the password to set in the `newPassword${service}${account}` prompts answers object. It is up to you to actually take the password and add it to the keychain, with {@link addToKeychain}.
 */
export async function makePasswordPrompt(
  service: string,
  account: string,
  newPassword?: string
): Promise<Array<PromptObject>> {
  const password = await retrieveFromKeychain(service, account);
  const np = newPassword || generatePasswords(36, true, 1).next().value;
  if (password)
    return [
      {
        name: `changePassword${service}${account}`,
        message: `Your current password for ${service}: ${account} is ${password}. Do you want to change it?`,
        type: (prev: any) =>
          process.argv.includes('--changePassword')
            ? 'confirm'
            : false /* you HAVE to pass the --changePassword flag in order to make this prompt show up */,
        initial: false,
      },
      {
        name: `newPassword${service}${account}`,
        message: 'What is your new password?',
        type: (prev) => (prev ? 'text' : false),
        initial: np,
      },
    ];
  return [
    {
      name: `newPassword${service}${account}`,
      message: `Choose a password for ${service}: ${account}`,
      type: (prev: any) =>
        process.argv.includes('--autoPassword') ? 'text' : false,
      initial: np,
    },
  ];
}

export default quickstart;
