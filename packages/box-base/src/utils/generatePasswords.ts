import passgen from 'generate-password';

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
