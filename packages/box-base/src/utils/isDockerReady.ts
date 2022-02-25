import { checkDocker } from '.';

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
