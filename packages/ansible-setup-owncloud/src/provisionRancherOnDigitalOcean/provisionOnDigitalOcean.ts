import DigitalOcean from "do-wrapper";
import getAuthToken from "./getDigitalOceanPersonalAccessToken";

const authToken = getAuthToken();
const digitalOceanWrapper = new DigitalOcean(authToken);
/*
  authToken and digitalOceanWrapper are singletons that are going to persist for the life of the program.
*/

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
  return (
    digitalOceanWrapper.droplets
      // @ts-ignore: types for rancherInstance are not compatible
      .create(rancherInstance)
      .then((response) => {
        return response;
      })
  );
}

export function getDropletInformation(dropletID: string): Promise<any> {
  return digitalOceanWrapper.droplets.getById(dropletID);
}

export interface digitalOceanCreateDropletResponse {
  id: string;
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
  networks: {
    v4: [
      {
        ip_address: string;
        netmask: string;
        gateway: string | null;
        type: "private" | "public";
      }
    ];
    v6: [
      {
        ip_address: string;
        netmask: string;
        gateway: string | null;
        type: "private" | "public";
      }
    ];
  };
  kernel: object | null;
  next_backup_window: object | null;
  tags: Array<any>;
  volume_ids: Array<any>;
  vpc_uuid: String;
}
