import Docker from 'dockerode';
import { Socket } from 'net';
import { printProgress } from '.';

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
