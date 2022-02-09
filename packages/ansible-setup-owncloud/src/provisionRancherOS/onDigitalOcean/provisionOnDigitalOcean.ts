import DigitalOcean from "do-wrapper";
// import getAuthToken from "./getDigitalOceanPersonalAccessToken";
import { getDigitalOceanPersonalAccessToken } from "./accessDigitalOceanPersonalAccessToken";
import fs from "fs";
import { relative, resolve } from "path";

let authToken: string;
let digitalOceanWrapper: DigitalOcean;
/*
authToken and digitalOceanWrapper are singletons that are going to persist for the life of the program. That's why they are in the module scope
*/

const cloudConfigPath = relative(
  process.cwd(),
  resolve(__dirname, require("./cloud-config.yml"))
);
/*
We are asking webpack to keep track of the file path for `./cloud-config.yml`
*/
const cloudConfig = fs.readFileSync(cloudConfigPath, "utf8");

export async function initializeDigitalOceanAPI(): Promise<void> {
  authToken = await getDigitalOceanPersonalAccessToken();
  digitalOceanWrapper = new DigitalOcean(authToken);
}

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
    user_data: cloudConfig,
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
  droplet: {
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
  };
}
