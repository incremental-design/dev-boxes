import Docker from 'dockerode';
import { readFileSync } from 'fs';
import { parse, resolve, sep } from 'path';
import { parse as parseDockerfile } from 'docker-file-parser';
import { Readable, Transform } from 'stream';

import { deglobify, printProgress } from '.';
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
