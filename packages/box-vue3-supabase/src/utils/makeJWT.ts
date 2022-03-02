import { KJUR } from 'jsrsasign';

const JWT_HEADER = { alg: 'HS256', typ: 'JWT' };
const now = new Date();
const today = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate()
) as unknown as number;
const fiveYears = new Date(
  now.getFullYear() + 5,
  now.getMonth(),
  now.getDate()
) as unknown as number;

const anonToken = `
{
  "role": "anon",
  "iss": "supabase",
  "iat": ${Math.floor(today / 1000)},
  "exp": ${Math.floor(fiveYears / 1000)}
}
`.trim();

const serviceToken = `
{
  "role": "service_role",
  "iss": "supabase",
  "iat": ${Math.floor(today / 1000)},
  "exp": ${Math.floor(fiveYears / 1000)}
}
`.trim();

/**
 * makes a JWT (JSON Web Token) for either the 'anon' database access or the 'service' database access
 *
 * @param role - whether to make a token for 'anon' access or for 'service' access.
 *
 * @param jwtSecret - the password to use when making the token. Must be at least 32 characters long.
 *
 * @returns a JWT
 *
 * @see https://supabase.com/docs/guides/hosting/overview#api-keys
 */
export function makeJWT(role: 'anon' | 'service', jwtSecret: string) {
  if (jwtSecret)
    return KJUR.jws.JWS.sign(
      null,
      JWT_HEADER,
      role === 'anon' ? anonToken : serviceToken,
      jwtSecret
    );
}
