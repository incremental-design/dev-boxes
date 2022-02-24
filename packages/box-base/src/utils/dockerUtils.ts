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
 * - remotePath is the mountPoint of volume in the container
 * - localPath is the path to the volume on your computer
 *
 * @returns a promise to get the {@link Docker.Container} that was created.
 *
 */
export async function startContainer(
  dockerInstance: Docker,
  image: Docker.Image,
  ports?: Array<{ remote: number; local?: number; protocol?: 'tcp' | 'udp' }>,
  volumes?: Array<{ remotePath: string; localPath: string }>
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

/**
 *
 * @param dockerInstance - the instance of the {@link Docker} class to use.
 * @param pathToDockerfile - the ABSOLUTE PATH to the dockerfile from which to build the image.
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
  dockerInstance: Docker,
  pathToDockerfile: string,
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
 * @param dockerInstance - the instance of the {@link Docker} class to use.
 * @param name - the name of the image to download (e.g. 'node')
 * @param tag - the tag of the image to download (e.g. 'current-alpine')
 *
 * @returns a promise to get the {@link Docker.Image } that was just downloaded.
 *
 * @remarks
 * this function wraps {@link Docker.image.get}
 */
export async function getFromDockerHub(
  dockerInstance: Docker,
  name: string,
  tag: string
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
  const isTTY = stdout.isTTY;
  const clear = async (clearFrom = 0) => {
    if (!isTTY) return; /* if not a TTY, nothing to clear */
    await new Promise<void>((resolve) => {
      readline.cursorTo(stdout, 0, clearFrom, resolve);
    });
    await new Promise<void>((resolve) => {
      readline.clearScreenDown(stdout, resolve);
    });
  };
  let prevCleared = 0;
  for await (const chunk of r) {
    if (
      isTTY /* don't ask stdout if it is a TTY EVERY time we receive a new chunk. The stdout isn't going to magically stop being a TTY mid-stream */
    ) {
      const width = stdout.columns;
      const height = stdout.rows;
      const s = prettyPrintJSON(chunk.toString('utf8'), width);
      const lines = s.split('\n');
      const toClear = lines.length;
      const clearFrom =
        toClear > prevCleared
          ? toClear
          : prevCleared; /* this works because the BOTTOM of the screen is 0, and the top of the screen is stdout.rows ... at least if you're using an ANSI terminal */
      await clear(clearFrom);
      // await clear();
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
