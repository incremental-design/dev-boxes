import { stat, access, readdir } from 'fs/promises'
import { constants } from 'fs'
import { resolve } from 'path'
import process from 'process'

// const { stat, access, readdir } = require('fs/promises');
// const { constants } = require('fs');
// const { resolve } = require('path');

/**
 * this is essentially the $PATH environment variable
 */
const PATH = (async () => {
  if (!process.env.PATH) throw new Error('process.env.PATH not found. Please run this in nodejs. Are you running this in the browser?')
  const promisePaths = process.env.PATH.split(':').map(async (path) => {
    try {
      await stat(path) /* get rid of paths that point to nothing */
      return path
    } catch (e) {
      return false
    }
  })
  return (await Promise.all(promisePaths)).filter(path => !!path) as Array<string>
})()

/**
* list of all of the executables in each directory in PATH. The idea is to calculate this once and re-use several times in {@link which}
*/
const directoryFilenames = PATH.then(paths => {
  const directoryContents = Promise.all(paths.map(p /* (p)ath */ => readdir(p, { withFileTypes: true })))
  return directoryContents.then(dc /* (d)irectory(C)ontents */ => dc.map(pc /* (p)ath(c)ontents */ => pc.filter(d /* (d)irent */ => (d.isFile() || d.isSymbolicLink()))).map(dc /* (d)irectory(c)ontents */ => dc.map(d => d.name)))
})

/**
 * find the path to an executable - if it exists
 *
 * @param programName - the executable to find
 *
 * @returns the path to the executable, if it exists. Otherwise, returns false
*/
export default async function which(programName: string) {
  const paths = await PATH;
  const df = await directoryFilenames;

  for (let i = 0; i < df.length; i++) {
    const dir /* (dir)ectory */ = df[i];
    const ep /* (e)xecutable(p)ath */ = resolve(paths[i], programName)
    if (dir.includes(programName)) {
      const isExecutable = await access(ep, constants.X_OK)
        .then(() => true)
        .catch(() => false)
      if (isExecutable) return ep; /* return the first match */
    }
  }
  return false;
}

module.exports = which;