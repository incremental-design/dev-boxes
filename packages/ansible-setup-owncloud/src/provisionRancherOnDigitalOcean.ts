import dotenv from "dotenv";
import digitalOceanAPIWrapperConstructor from 'do-wrapper';

dotenv.config();

function personalAccessTokenIsString(personalAccessToken: string | undefined): personalAccessToken is string {
  return (personalAccessToken as string).length !== undefined;
}

let digitalOceanAPIWrapper;

if(personalAccessTokenIsString(process.env.DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN)){
  digitalOceanAPIWrapper = new digitalOceanAPIWrapperConstructor(process.env.DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN);
} else {
  throw 'Digital Ocean Personal Access Token has not been set in `.env`. Cannot access digital ocean API';
}
