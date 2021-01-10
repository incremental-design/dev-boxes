export default function (): string {
  function personalAccessTokenIsUndefined(
    personalAccessToken: string | undefined
  ): personalAccessToken is undefined {
    return (personalAccessToken as string).length == undefined;
  }

  const authToken = process.env.DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN;

  if (personalAccessTokenIsUndefined(authToken)) {
    throw "Digital Ocean Personal Access Token has not been set in `.env`. Cannot access digital ocean API";
  }
  return authToken;
}
