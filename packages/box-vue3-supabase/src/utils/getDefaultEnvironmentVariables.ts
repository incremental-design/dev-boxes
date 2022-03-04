import { readFile } from 'fs/promises';
import { resolve } from 'path';

export async function getDefaultEnvironmentVariables() {
  const ds /* (d)efault(s)tring */ = await readFile(
    resolve(__dirname, '..', '..', 'docker', '.env.example'),
    'utf-8'
  );
  const da /* (d)efault(a)rray */ = ds
    .split('\n')
    .filter((line) => line.match(/(^[^#].+?=.*$)/))
    .map((line) => {
      const splitAt = line.indexOf('=');
      return [
        line.slice(0, splitAt) as string,
        line.slice(splitAt + 1 /* +1 to get rid of the '='*/),
      ];
    })
    .map((keyValue) => {
      if (keyValue[1] === 'true') return [keyValue[0], true];
      if (keyValue[1] === 'false') return [keyValue[0], false];
      if (keyValue[1] === 'undefined') return [keyValue[0], undefined];
      if (keyValue[1] === 'null') return [keyValue[0], null];
      const valueNumber = parseFloat(keyValue[1]);
      if (valueNumber) return [keyValue[0], valueNumber];
      return keyValue;
    });
  const defaults: { [key: string]: any } = {};
  da.forEach((d) => {
    const [k, value] = d;
    const key =
      k as string; /* it will always be a string because of the previous array operators */
    defaults[key] = value;
  });
  return defaults;
}
