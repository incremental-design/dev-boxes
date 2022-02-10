import passgen from 'generate-password';

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
