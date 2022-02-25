import { spawn } from 'child_process';
import { stat } from 'fs/promises';
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
