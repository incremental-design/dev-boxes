import passgen from 'generate-password';
import cac from 'cac';
import prompts, { PromptObject } from 'prompts';
import keytar from 'keytar';
import { spawn } from 'child_process';
import { stat } from 'fs/promises';
import { Readable, Transform } from 'stream';
import { stdout } from 'process';
import * as readline from 'readline';
import Docker from 'dockerode';
import { Socket } from 'net';
import { readFileSync } from 'fs';
import { parse, resolve, sep } from 'path';
import { parse as parseDockerfile } from 'docker-file-parser';
import { PicomatchOptions, isMatch } from 'picomatch';
import { fdir } from 'fdir';

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
  // const i = await getImage('node', 'current-alpine', di);

  const i = await buildFromDockerfile(
    resolve(__dirname, '../Dockerfile'),
    di,
    'box-base',
    'incrementaldesign'
  );

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
 *
 * @param pathToDockerfile - the ABSOLUTE PATH to the dockerfile from which to build the image.
 * @param dockerInstance - the instance of the {@link Docker} class to use.
 * @param imageName - the name of the image to build. This name must be:
 * - between 2 and 255 characters long
 * - contain only lowercase letters, numbers, hypens and underscores
 * @param username - the dockerhub username under which you want to publish the image.
 *
 * @remarks
 * this function assumes that everything file referenced within the dockerfile is in the same directory as the dockerfile itself, or in a subdirectory of the dockerfile's directory. It WILL break if this isn't the case. In docker parlance, the dockerfile is the "context" of the image.
 *
 *
 * @see https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#understand-build-context
 *
 */
export async function buildFromDockerfile(
  pathToDockerfile: string,
  dockerInstance: Docker,
  imageName: string,
  username?: string
) {
  const { root } = parse(pathToDockerfile);
  if (root === '') throw new Error('dockerfile must be an absolute path');
  const abs = resolve(sep, ...pathToDockerfile.split(sep).slice(1));
  const { dir, base } = parse(abs);
  const context = dir;
  const srcGlobs = [base];

  if (imageName.match(/[^a-z0-9-_]/))
    throw new Error(
      'image name must be lowercase alphanumeric with dashes and underscores. Received ' +
        imageName
    );

  if (username && username.match(/[^a-z0-9-_]/))
    throw new Error(
      'username must be lowercase alphanumeric with dashes and underscores. Received ' +
        username
    );
  if (
    imageName.length +
      (username
        ? username.length +
          1 /* +1 accommodates the / character between username and imageName */
        : 0) >
    245
  )
    throw new Error(
      `${
        username ? 'combined length of image name and username' : 'image name'
      } must less than 245 characters. Received ${
        (username ? username + '/' : '') + imageName
      } which is ${
        imageName.length + (username ? username.length + 1 : 0)
      } characters long.`
    );

  const grabSourceFiles = async () => {
    // todo: support git repo as context. see: https://docs.docker.com/engine/reference/builder/#usage
    const commands = parseDockerfile(readFileSync(abs, 'utf8'));
    const addCopy = commands.filter(
      (command) => command.name === 'ADD' || command.name === 'COPY'
    );
    const pushIfNotURL = (s: string) => {
      if (!s.match(/(http|https|ftp|smb):\/\//)) srcGlobs.push(s);
    };
    addCopy.forEach((command) => {
      const args =
        command.args as Array<string>; /* according to https://github.com/joyent/node-docker-file-parser/blob/7605b2df63fe7342efb03ba16acd878d570d39fd/parser.js#L267 the args for a `COPY` or an `ADD` will always be an array of arguments ... unfortunately, this library does not handle globbing for us */
      switch (args.length) {
        case 0:
          throw new Error(
            `${command.name} command must have at least 2 arguments. Received no arguments.`
          );
        case 1:
          throw new Error(
            `${command.name} command must have at least 2 arguments. Only received '${args[0]}'.`
          );
        case 2:
          if (args[0].startsWith('--chown'))
            throw new Error(`${command.name} command must have a destination.`);
          pushIfNotURL(args[0]);
        default:
          const sources = args[0].startsWith('--chown')
            ? args.slice(1, -1)
            : args.slice(0, -1); /* the last arg is always the destination */
          sources.forEach((source) => pushIfNotURL(source));
      }
    });

    const deduped = [
      ...new Set(srcGlobs),
    ]; /* sometimes, the same file or glob might be included in more than one COPY or ADD directive */
    const deglobbed = await Promise.all(
      deduped.map((maybeGlob) => deglobify(maybeGlob, context))
    ); /* turn globs into the matching absolute paths */
    return [
      ...new Set(deglobbed.flat()),
    ]; /* flatten the deglobbed array, and then in the case that two globs match the same file, only list the file once */
  };

  const src = await grabSourceFiles();

  const n = username ? username + '/' + imageName : imageName;

  const progress = await dockerInstance.buildImage(
    {
      context,
      src,
    },
    { t: n }
  );

  const p = Readable.from(progress);

  let lastChunk = '';

  const t = new Transform({
    transform(chunk, encoding, callback) {
      const removeNewlines = (b: Buffer) => {
        let indices: Array<number> = [];
        do {
          const i = b.indexOf(
            Buffer.from([0x5c, 0x6e]),
            indices.length > 0 ? indices[indices.length - 1] + 1 : 0
          );
          if (i === -1) break;
          indices.push(i);
        } while (true);
        indices.unshift(-2 /* because 0x5c 0x6e is two bytes */);
        indices.push(b.length);
        const slices: Array<Buffer> = [];
        for (let i = 0; i < indices.length - 1; i++) {
          slices.push(
            b.slice(
              indices[i] + 2 /* it's +2 because 0x5c 0x6e is two bytes */,
              indices[i + 1]
            )
          );
        }
        return Buffer.concat(slices);
      };
      const s = removeNewlines(chunk).toString('utf-8');
      lastChunk = s;
      callback(null, s);
    },
  });

  p.on('error', (err) => {
    t.end();
  });

  await printProgress(p.pipe(t));

  return dockerInstance.getImage(n);
}

/**
 * Use this function to turn globs that follow golang's filepath.Match syntax into a list of matching files.
 * @param glob - a glob pattern to match files to include in the build.
 * @param context - the directory in which to search for entries that match the glob
 * @returns a list of relative paths to files to include in the build.
 *
 * @remarks
 * Dockerfiles can include globs that have the following characters:
 *  - `*` - matches zero or more characters
 *  - `?` - matches exactly one character
 *  - `\\` - escapes the next character
 *  - `[` - starts a character class
 *  - `]` - ends a character class
 *  - `-` - matches a range of characters within a character class
 *  - `^` - negates a character class
 *
 * This function uses {@link fast-glob} to turn globs into an array of absolute paths to matching files.
 * @see https://pkg.go.dev/path/filepath#example-Match
 */
async function deglobify(
  glob: string,
  context: string
): Promise<Array<string>> {
  if (!glob.match(/(\?|\*|\[|\]|\^|\-|\\\\)/)) return [glob];

  const g = glob.replace(
    /(\[\^)(?=.*\])/g, // todo: test this
    '[!'
  ); /* convert golang-style negated character range to js-style character negated range e.g. [^a-z] -> [!a-z] */

  const golangFilepathMatch: PicomatchOptions = {
    /*
        keep in mind that picomatch already supports:
        '*' - matches zero or more characters
        '?' - matches exactly one character
        '[` - open character class
        ']' - close character class
        '-' - range of characters within a character class
       */
    dot: true /* treat . as a regular character */,
    nobrace: true /* treat { and } as regular characters */,
    noext: true /* treat +(a|b) as a sequence of regular characters */,
    noglobstar: true /* treat ** (glob directories) as * (wildcard) */,
    noquantifiers: true /* treat {n} as regular characters */,
    unescape:
      true /* treat `\\` as escape sequence, rather than as regular characters */,
  }; // todo: test support for quoted strings: e.g. ADD "foo bar" "baz" "qux" since dockerfile requires string literals to be quoted if they contain spaces

  const crawler = new fdir();
  const matchingFiles = (await crawler
    .withRelativePaths()
    .filter((path) => isMatch(path, g, golangFilepathMatch))
    .crawl(context)
    .withPromise()) as Array<string>; /* all of the files that match are held in memory! This can result in very high memory usage! */
  return matchingFiles;
}

/**
 * download an image from docker hub. If the image is already downloaded, then it will load from your local cache.
 * @param name - the name of the image to download (e.g. 'node')
 * @param tag - the tag of the image to download (e.g. 'current-alpine')
 * @param dockerInstance - the instance of the {@link Docker} class to use.
 *
 * @returns a promise to get the {@link Docker.Image } that was just downloaded.
 *
 * @remarks
 * this function wraps {@link Docker.image.get}
 */
export async function getFromDockerHub(
  name: string,
  tag: string,
  dockerInstance: Docker
): Promise<Docker.Image> {
  const socket = await new Promise<Socket>((resolve, reject) => {
    dockerInstance.pull(`${name}:${tag}`, (err: any, s: Socket) => {
      resolve(s);
    });
  });
  await printProgress(
    socket
  ); /* assume that socket is correctly sending null byte at end of stream. */

  return dockerInstance.getImage(`${name}:${tag}`);
}

/**
 * print each line of a readable stream to stdout, clearing the previous line before printing the next line.
 *
 * @param r - a readable stream that can be encoded as utf8 text.
 */
export async function printProgress(r: Readable) {
  const clear = async (clearFrom: number) => {
    await new Promise<void>((resolve) => {
      readline.cursorTo(stdout, 0, clearFrom, resolve);
    });
    await new Promise<void>((resolve) => {
      readline.clearScreenDown(stdout, resolve);
    });
  };
  let prevCleared = 0;
  const isTTY = stdout.isTTY;
  for await (const chunk of r) {
    if (isTTY) {
      const width = stdout.columns;
      const height = stdout.rows;
      const s = prettyPrintJSON(chunk.toString('utf8'), width);
      const lines = s.split('\n');
      const toClear = lines.length;
      const clearFrom =
        height - (toClear > prevCleared ? toClear : prevCleared);
      await clear(clearFrom);
      await new Promise((resolve) => {
        readline.cursorTo(stdout, 0, clearFrom, () => {
          prevCleared = toClear;
          stdout.write(s, resolve);
        });
      });
    } else {
      print(chunk.toString('utf8'));
    }
  }
  await clear(prevCleared);
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
      const lines = chunk.toString('utf8').split('\n');
      for (const line of lines) {
        await new Promise((resolve) => {
          if (line !== '')
            stdout.write(`\n${prettyPrintJSON(line)}\n`, resolve);
        });
      }
    }
  }
}

function prettyPrintJSON(JSONstring: string, truncateAt?: number) {
  function truncate(line: string, ta: number) {
    if (line.length > ta) {
      return line.slice(0, ta - 3) + '...';
    }
    return line;
  }

  if (truncateAt && truncateAt < 4) throw new Error('truncateAt must be >= 4');
  const trimmed = JSONstring.trim();
  try {
    const j = JSON.parse(trimmed);
    const toPrint = JSON.stringify(j, null, 2);
    if (truncateAt)
      return toPrint
        .split('\n')
        .map((line) => truncate(line, truncateAt))
        .join('\n');
    return toPrint;
  } catch (e) {
    const printErr = `failed to parse JSON for:\n${trimmed}\n`;
    if (truncateAt) {
      return printErr
        .split('\n')
        .map((line) => truncate(line, truncateAt))
        .join('\n');
    }
    return printErr;
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
