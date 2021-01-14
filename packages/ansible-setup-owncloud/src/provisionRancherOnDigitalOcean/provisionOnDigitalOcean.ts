import DigitalOcean from "do-wrapper";
import getAuthToken from "./getDigitalOceanPersonalAccessToken";

export default function provisionOnDigitalOcean(configObject: object): void {
  let rancherInstance: object = {
    name: "another",
    region: "nyc3",
    size: "s-1vcpu-1gb",
    image: "rancheros",
    ssh_keys: [27608986, 28496457],
    backups: false,
    ipv6: true,
    private_networking: null,
    user_data: null,
    volumes: null,
    tags: [],
  };

  rancherInstance = Object.assign(rancherInstance, configObject);

  const authToken = getAuthToken();
  const digitalOceanWrapper = new DigitalOcean(authToken);
  (async () => {
    try {
      await digitalOceanWrapper.droplets
        // @ts-ignore: types for rancherInstance are not compatible
        .create(rancherInstance);
    } catch (error: any) {
      throw error; //FIXME: either do something with the error or don't bother catching it.
    }
  })();
}
