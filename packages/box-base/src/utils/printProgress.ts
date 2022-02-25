import { Readable, Transform } from 'stream';
import { stdout } from 'process';
import * as readline from 'readline';
import { print, prettyPrintJSON } from '.';

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
