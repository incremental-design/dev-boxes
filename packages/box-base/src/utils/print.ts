import { Readable } from 'stream';
import { stdout } from 'process';
import { prettyPrintJSON } from './';

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
