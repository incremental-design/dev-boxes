import keytar from 'keytar';

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
