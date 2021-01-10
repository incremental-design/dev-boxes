import DigitalOcean from "do-wrapper";
import getAuthToken from "./getDigitalOceanPersonalAccessToken";

export default function createRancherInstance(): void {
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

  const authToken = getAuthToken();
  const digitalOceanWrapper = new DigitalOcean(authToken);
  digitalOceanWrapper.droplets
    .create(rancherInstance)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
