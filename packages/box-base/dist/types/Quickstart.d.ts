import prompts from 'prompts';
declare function quickstart(): void;
/**
 * generatePasswords makes 100 random passwords.
 *
 * @param length - number of characters in password. Defaults to 36 characters.
 * @param symbols - whether to include special characters in the password. Defaults to true.
 *
 * @returns an iterator that returns 100 uniques string that you can use as a password.
 */
export declare function generatePasswords(length?: number, symbols?: boolean): Generator<string, void, unknown>;
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
export declare function getAnswersFromCLI(questions: Array<prompts.PromptObject>): Promise<{
    [key: string]: any;
}[]>;
export default quickstart;
//# sourceMappingURL=Quickstart.d.ts.map