import DigitalOcean from "do-wrapper";
import getAuthToken from "./getDigitalOceanPersonalAccessToken";

export function provisionOnDigitalOcean(
  configObject: object
): Promise<digitalOceanCreateDropletResponse> {
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
  return (
    digitalOceanWrapper.droplets
      // @ts-ignore: types for rancherInstance are not compatible
      .create(rancherInstance)
      .then((response) => {
        return response;
      })
  );
}

export interface digitalOceanCreateDropletResponse {
  id: bigint;
  name: string;
  memoryInMegabytes: bigint;
  vcpus: bigint;
  disk: bigint;
  locked: boolean;
  created_at: string;
  status: string;
  backup_ids: Array<any>;
  snapshot_ids: Array<any>;
  features: Array<any>;
  region: object;
  image: object;
  size: object;
  size_slug: string;
  networks: object;
  kernel: object | null;
  next_backup_window: object | null;
  tags: Array<any>;
  volume_ids: Array<any>;
  vpc_uuid: String;
}
