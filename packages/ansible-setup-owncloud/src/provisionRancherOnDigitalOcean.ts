import dotenv from "dotenv";
import digitalOceanAPIWrapperConstructor from "do-wrapper";

dotenv.config();

function personalAccessTokenIsString(
  personalAccessToken: string | undefined
): personalAccessToken is string {
  return (personalAccessToken as string).length !== undefined;
}

let digitalOceanAPIWrapper;

if (
  personalAccessTokenIsString(process.env.DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN)
) {
  digitalOceanAPIWrapper = new digitalOceanAPIWrapperConstructor(
    process.env.DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN
  );
} else {
  throw "Digital Ocean Personal Access Token has not been set in `.env`. Cannot access digital ocean API";
}

let rancherInstance = {
  name: "test",
  region: "nyc3",
  size: "s-1vcpu-1gb",
  image: "rancheros",
  ssh_keys: [27608986, 28496457],
  backups: false,
  ipv6: true,
  private_networking: true,
  monitoring: true,
  user_data: "",
  volumes: [""],
  tags: "",
};

digitalOceanAPIWrapper.droplets.create(rancherInstance);
