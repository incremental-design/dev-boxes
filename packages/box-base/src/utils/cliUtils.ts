import passgen from 'generate-password';
import cac from 'cac';
import prompts, { PromptObject } from 'prompts';
import keytar from 'keytar';

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

/**
 * addToKeychain adds a password to the keychain.
 *
 * @param service - the service that the account is associated with.
 * @param account - the account that the password unlocks.
 * @param password - the password to add to the keychain.
 *
 */
export async function addToKeychain(
  service: string,
  account: string,
  password: string
) {
  return keytar.setPassword(service, account, password);
}

/**
 * retrieveFromKeychain gets a password from the keychain.
 * @param service
 * @param account
 * @returns a password, or null if the password is not found.
 */
export async function retrieveFromKeychain(
  service: string,
  account: string
): Promise<string | null> {
  return keytar.getPassword(service, account);
}

/**
 * makePasswordPrompt returns an array of {@link PromptObject}s that ask a user to set a password.
 * @param service - the service that the account is associated with.
 * @param account - the account who's password you want to update.
 * @param newPassword - the password you want to update to.
 * @returns array of prompts that ask the user if they want to update the password, and if so, what they want to update to.
 *
 * @remarks
 * These prompts only show up if:
 *  - the user has never set a password for the given service and account, and hasn't passed the --autoPassword flag.
 *  - the user passes the --changePassword flag into the CLI.
 * Note that these prompts DON'T ACTUALLY SET THE PASSWORD. They only store the password to set in the `newPassword${service}${account}` prompts answers object. It is up to you to actually take the password and add it to the keychain, with {@link addToKeychain}.
 */
export async function makePasswordPrompt(
  service: string,
  account: string,
  newPassword?: string
): Promise<Array<PromptObject>> {
  const password = await retrieveFromKeychain(service, account);
  const np = newPassword || generatePasswords(36, true, 1).next().value;
  if (password)
    return [
      {
        name: `changePassword${service}${account}`,
        message: `Your current password for ${service}: ${account} is ${password}. Do you want to change it?`,
        type: (prev: any) =>
          process.argv.includes('--changePassword')
            ? 'confirm'
            : false /* you HAVE to pass the --changePassword flag in order to make this prompt show up */,
        initial: false,
      },
      {
        name: `newPassword${service}${account}`,
        message: 'What is your new password?',
        type: (prev) => (prev ? 'text' : false),
        initial: np,
      },
    ];
  return [
    {
      name: `newPassword${service}${account}`,
      message: `Choose a password for ${service}: ${account}`,
      type: (prev: any) =>
        process.argv.includes('--autoPassword') ? 'text' : false,
      initial: np,
    },
  ];
}

/**
 * generatePasswords makes random passwords.
 *
 * @param length - number of characters in password. Defaults to 36 characters.
 * @param symbols - whether to include special characters in the password. Defaults to true.
 *
 * @param numberToGenerate - the number of passwords to generate. Defaults to 100.
 *
 * @returns an iterator that returns unique string that you can use as a password.
 */
export function* generatePasswords(
  length = 36,
  symbols = true,
  numberToGenerate = 100
): IterableIterator<string> {
  const PA = passgen.generateMultiple(numberToGenerate, {
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
