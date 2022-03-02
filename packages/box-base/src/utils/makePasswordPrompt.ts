import prompts, { PromptObject } from 'prompts';
import camelCase from 'camelcase';

import { retrieveFromKeychain, generatePasswords } from '.';

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
 *
 * `${service}` and `${account}` in `newPassword${service}${account}` will be camel-cased.
 */
export async function makePasswordPrompt(
  service: string,
  account: string,
  newPassword?: string
): Promise<Array<PromptObject>> {
  const password = await retrieveFromKeychain(service, account);
  const np = newPassword || generatePasswords(64, true, 1).next().value;
  if (password)
    return [
      {
        name: camelCase(`changePassword${service}${account}`),
        message: `Your current password for ${service}: ${account} is ${password}. Do you want to change it?`,
        type: (prev: any) =>
          process.argv.includes('--changePassword')
            ? 'confirm'
            : false /* you HAVE to pass the --changePassword flag in order to make this prompt show up */,
        initial: false,
      },
      {
        name: camelCase(`newPassword${service}${account}`),
        message: 'What is your new password?',
        type: (prev) => (prev ? 'text' : false),
        initial: np,
        validate,
      },
    ];
  return [
    {
      name: camelCase(`newPassword${service}${account}`),
      message: `Choose a password for ${service}: ${account}`,
      type: (prev: any) =>
        process.argv.includes('--autoPassword') ? false : 'text',
      initial: np,
      validate,
    },
  ];
}

function validate(password: string) {
  if (password.length >= 64) return true;
  return 'Your password must be at least 64 characters long.';
}
