import Docker, { Container } from 'dockerode';
import { PassThrough, Readable } from 'stream';

/**
 * returns a stdout and stderr stream for the current process in the supplied container.
 *
 * @param container - the container from which to get output
 * @param streamFromContainerStart - print everything the process printed to stdout and stderr from the moment the container was started. If false, only print from the moment that this function is called.
 *
 * @returns a standard output stream, a standard error stream, and a function that disconnects these streams from the container.
 */
export async function streamContainerOutput(
  container: Container,
  streamFromContainerStart = false
): Promise<{
  stdout: Readable;
  stderr: Readable;
  detach: () => Promise<void>;
}> {
  const outStream = await container.attach({
    stream: true,
    logs: streamFromContainerStart,
    stdin: true,
    stdout: true,
    stderr: true,
    detachKeys:
      'c' /* this should be OK because we aren't ever going to interact with a container's stdin.*/,
  });
  const stdout = new PassThrough();
  const stderr = new PassThrough();
  container.modem.demuxStream(outStream, stdout, stderr);
  const detach = async () => {
    await new Promise((resolve) => outStream.write(Buffer.from('c'), resolve));
    const endStdout = new Promise<void>((resolve) => stdout.end(resolve));
    const endStderr = new Promise<void>((resolve) => stderr.end(resolve));
  };
  return { stdout, stderr, detach };
}
