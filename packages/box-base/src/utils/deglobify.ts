import { PicomatchOptions, isMatch } from 'picomatch';
import { fdir } from 'fdir';

/**
 * Use this function to turn globs that follow golang's filepath.Match syntax into a list of matching files.
 * @param glob - a glob pattern to match files to include in the build.
 * @param context - the directory in which to search for entries that match the glob
 * @returns a list of relative paths to files to include in the build.
 *
 * @remarks
 * Dockerfiles can include globs that have the following characters:
 *  - `*` - matches zero or more characters
 *  - `?` - matches exactly one character
 *  - `\\` - escapes the next character
 *  - `[` - starts a character class
 *  - `]` - ends a character class
 *  - `-` - matches a range of characters within a character class
 *  - `^` - negates a character class
 *
 * This function uses {@link fast-glob} to turn globs into an array of absolute paths to matching files.
 * @see https://pkg.go.dev/path/filepath#example-Match
 */
export async function deglobify(
  glob: string,
  context: string
): Promise<Array<string>> {
  if (!glob.match(/(\?|\*|\[|\]|\^|\-|\\\\)/)) return [glob];

  const g = glob.replace(
    /(\[\^)(?=.*\])/g, // todo: test this
    '[!'
  ); /* convert golang-style negated character range to js-style character negated range e.g. [^a-z] -> [!a-z] */

  const golangFilepathMatch: PicomatchOptions = {
    /*
        keep in mind that picomatch already supports:
        '*' - matches zero or more characters
        '?' - matches exactly one character
        '[` - open character class
        ']' - close character class
        '-' - range of characters within a character class
       */
    dot: true /* treat . as a regular character */,
    nobrace: true /* treat { and } as regular characters */,
    noext: true /* treat +(a|b) as a sequence of regular characters */,
    noglobstar: true /* treat ** (glob directories) as * (wildcard) */,
    noquantifiers: true /* treat {n} as regular characters */,
    unescape:
      true /* treat `\\` as escape sequence, rather than as regular characters */,
  }; // todo: test support for quoted strings: e.g. ADD "foo bar" "baz" "qux" since dockerfile requires string literals to be quoted if they contain spaces

  const crawler = new fdir();
  const matchingFiles = (await crawler
    .withRelativePaths()
    .filter((path) => isMatch(path, g, golangFilepathMatch))
    .crawl(context)
    .withPromise()) as Array<string>; /* all of the files that match are held in memory! This can result in very high memory usage! */
  return matchingFiles;
}
