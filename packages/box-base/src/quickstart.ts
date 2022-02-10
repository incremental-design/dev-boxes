import passgen from 'generate-password';
import cac from 'cac';
import prompts from 'prompts';

export default (): void => {
  // your code here
};

/**
 * generatePasswords makes 100 random passwords.
 *
 * @param length - number of characters in password. Defaults to 36 characters.
 * @param symbols - whether to include special characters in the password. Defaults to true.
 *
 * @returns an iterator that returns 100 uniques string that you can use as a password.
 */
export function* generatePasswords(length = 36, symbols = true) {
  const PA = passgen.generateMultiple(100, {
    length,
    symbols,
    numbers: true,
    lowercase: true,
    uppercase: true,
    strict: true,
    exclude: '"$\'\\',
  });
  for (const P of PA) {
    yield P;
  }
}

/**
 * getAnswersFromCLI rolls a tiny command line interface with flags and prompts. If a user supplies a flag, the corresponding prompt will be skipped. Ergo, supply all of the flags, and none of the prompts will show up. Perfect for CI/CD.
 *
 * @param questions - an array of {@link prompts.PromptObject}s
 *
 * @returns an object in which each of the {prompts.promptObject.name}s is a key and the user input is the value.
 *
 * @example
 * ```typescript
 * const answers = await getAnswersFromCLI([
 *  {
 *    name: 'ipAddress',
 *    message: 'What is your IP address?',
 *    type: 'text',
 *  },
 * ]);
 *
 * // if the args `--ipAddress <some-ip-address>` are passed in as arguments when the process running getAnswersFromCLI starts, then no prompt will be displayed in the process's standard output.
 * ```
 *
 */
export async function getAnswersFromCLI(
  questions: Array<prompts.PromptObject>
) {
  const cli = cac();
  const { args, options } = cli.parse();
  let flags: Array<{ [key: string]: any }> = [];
  let nonInteractive = true;
  const questionsToAsk = questions.map((prompt) => {
    if (typeof prompt.name === 'string' && options[prompt.name]) {
      flags.push(options[prompt.name]);
      return {
        ...prompt,
        type: (prev: any) =>
          null /* this will cause the prompt to be skipped */,
      };
    }
    nonInteractive = false;
    return prompt;
  });
  if (nonInteractive) return flags;
  const promptAnswers = await prompts(questionsToAsk);
  return { ...promptAnswers, ...flags };
}
