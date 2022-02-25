import keytar from 'keytar';

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
