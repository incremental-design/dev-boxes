import yaml from 'js-yaml';
import { inspect } from 'util';

/**
 * Convert a YAML-formatted string into a javascript object and a list of environment variables referenced in the string.
 * @returns a reactive javascript object that matches the YAML passed into this function, and an object that can be used to set the values of the environment variables.
 *
 *
 * @example
 * ```typescript
 *
 * const yamlString = `
 * a:
 * - b
 * - c
 * - d
 * e:
 *   f:
 *     ${SOME_ENV_VAR}
 * `
 *
 * const { environmentVariables, yamlObject } = parseYaml(yamlString)
 * console.log(environmentVariables);
 *    // {'SOME_ENV_VAR': undefined}
 *
 * console.log(yamlObject);
 *    // {
 *    //  a: [ 'b', 'c', 'd' ],
 *    //  e: {
 *    //      f: [Getter]
 *    //     }
 *    // }
 *
 * environmentVariables.SOME_ENV_VAR = 'foo'
 *
 * console.log(yamlObject.e.f)
 *    // 'foo'
 * ```
 */
export function parseYaml(yamlString: string): {
  environmentVariables: { [key: string]: any };
  yamlObject: { [key: string]: any };
} /* {
  environmentVariables: { [envVar: string]: string };
  yamlObject: { [key: string]: any };
} */ {
  const toParse = yaml.load(yamlString) as { [key: string]: any };

  const environmentVariables: { [key: string]: any } = {};

  const addToEnvironmentVariables = (key: string) => {
    if (!environmentVariables.hasOwnProperty(key))
      environmentVariables[key] = key;
  };

  const traversed = new WeakMap();

  const replace = (branch: { [key: string]: any }): { [key: string]: any } => {
    const entries = Object.entries(branch);

    const c: { [key: string]: any } = {};

    for (const entry of entries) {
      const [key, value] = entry;

      if (traversed.has(value)) c[key] = traversed.get(value);
      /* don't re-traverse cyclic references, when we can literally grab the references out of traversed */ else if (
        Array.isArray(value)
      ) {
        const r = replace(value);
        Object.defineProperty(c, key, {
          get: function () {
            const a: Array<any> = [];
            for (let i = 0; i < Object.keys(r).length; i++) {
              a[i] = r[i.toString()];
            }
            return a;
          },
          enumerable: true,
        });
      } else if (typeof value === 'object') {
        const r /* (r)eplaced */ = replace(value);
        // const replaced = Array.isArray(value)
        //   ? Object.entries(r)
        //       .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
        //       .map((entry) => entry[1])
        //   : r; /* Object.entries turns array into objects where the keys are the array indices. So, we have to convert from object back to array if the value was originally an array */
        traversed.set(
          value,
          r
        ); /* once we've replaced an object or array value */
        c[key] = r;
      } else if (typeof value !== 'string') c[key] = value;
      /* if this part of the function is executing, it means that we've hit a string, number or boolean value. Booleans and numbers can be left alone, but strings have to be replaced */ else if (
        value.match(/^\$\{.+?\}$/)
      ) {
        const envVar = value.slice(2, -1);
        c[key] = envVar;
        addToEnvironmentVariables(envVar);
        Object.defineProperty(c, key, {
          get: function () {
            return environmentVariables[envVar];
          },
          enumerable:
            true /* VERY important. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description */,
        });
      } else {
        const search = (
          from: number
        ): false | { matched: string; at: number } => {
          const m = value.slice(from).match(/\$\{.+?\}/);

          if (!m || m.index === undefined) return false;
          return { matched: m[0], at: m.index };
        };

        let matchFrom = 0;

        let nextMatch;

        const segments: Array<any> = [];
        const envVarIndices: Array<number> = [];

        do {
          nextMatch = search(matchFrom);
          if (nextMatch) {
            const { matched, at } = nextMatch;
            if (at > 0)
              /* it will NEVER be less than 0 */ segments.push(
                value.slice(matchFrom, matchFrom + at)
              );
            const envVar = matched.slice(
              2,
              -1
            ); /* we slice to remove the '${' and '}' bookends */
            addToEnvironmentVariables(envVar);
            segments.push(envVar);
            envVarIndices.push(segments.length - 1);
            matchFrom += matched.length + at;
          } else {
            segments.push(value.slice(matchFrom));
            matchFrom =
              value.length; /* this works because this branch only occurs when there are no matches remaining */
          }
        } while (matchFrom < value.length);

        if (
          segments.length >
          1 /* if there was no match, then the entire string ends up getting put into segment 1 */
        ) {
          Object.defineProperty(c, key, {
            get: function () {
              const s = segments;
              for (const i of envVarIndices) {
                const k = segments[i];
                s[i] = environmentVariables[k];
              }
              return s.join('');
            },
            enumerable: true,
          });
        } else {
          c[key] = value; /* just a regular string */
        }
      }
    }
    return c;
  };

  const yamlObject = replace(toParse);
  return { environmentVariables, yamlObject };
}
