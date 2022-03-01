import cac from 'cac';
import prompts, { PromptObject } from 'prompts';

/**
 * getAnswersFromCLI rolls a tiny command line interface with flags and prompts. If a user supplies a flag, the corresponding prompt will be skipped. Ergo, supply all of the flags, and none of the prompts will show up. Perfect for CI/CD.
 *
 * @param questions - an array of {@link prompts.PromptObject}s
 *
 * @returns an object in which each of the {prompts.promptObject.name}s is a key and either the flag or user response to the prompt is the value.
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
  const flags: { [key: string]: any } = {};
  let nonInteractive = true;
  const questionsToAsk = questions.map((prompt) => {
    if (typeof prompt.name === 'string' && options[prompt.name]) {
      flags[prompt.name] =
        options[
          prompt.name
        ]; /* if you have two prompts with the same name, then the second prompt will overwrite the first */
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
  return { ...flags, ...promptAnswers };
}
