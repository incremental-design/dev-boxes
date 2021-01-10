import DigitalOcean from "do-wrapper";
import getAuthToken from "./getDigitalOceanPersonalAccessToken";

export default function createRancherInstance(): void {
  let rancherInstance = {
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
    tags: ["web"],
  };

  const authToken = getAuthToken();
  const digitalOceanWrapper = new DigitalOcean(authToken);
  digitalOceanWrapper.droplets
    // @ts-ignore: types for rancherInstance are not compatible
    .create(rancherInstance)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
