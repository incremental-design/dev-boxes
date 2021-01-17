import {
  provisionOnDigitalOcean,
  digitalOceanCreateDropletResponse,
  getDropletInformation,
} from "./provisionOnDigitalOcean";
import { provisionOnAWS } from "./provisionOnAWS";
import { inspect } from "util";

export class RancherOSConfig {
  // !Private Members
  private _name: string = "";
  private _ipv4Addresses: Set<string> = new Set();
  private _ipv6Addresses: Set<string> = new Set();
  private _dropletID: string = "";

  // !Constructor
  constructor() {} //I'm leaving the constructor blank because we'll initialize all variables with chainable setters

  // !Getters and Setters
  get name(): string {
    return this._name;
  }
  set name(newName: string) {
    this._name = newName;
    // TODO: sanitize characters that don't belong in digital ocean droplet names
    // TODO: if droplet has already been provisioned with a name, see if the droplet's name can actually be updated. If it can, then update it. If not, throw an error.
  }

  get ipv4Addresses(): Array<string> {
    return Array.from(this._ipv4Addresses);
  }

  set ipv4Addresses(ipv4Addresses: Array<string>) {
    this._ipv6Addresses = new Set(ipv4Addresses);
    //TODO: iterate through the set and remove any ip addresses that are not valid.
  }

  get ipv6Addresses(): Array<string> {
    return Array.from(this._ipv6Addresses);
  }

  set ipv6Addresses(ipv4Addresses: Array<string>) {
    this._ipv6Addresses = new Set(ipv4Addresses);
    //TODO: iterate through the set and remove any ip addresses that are not valid.
  }

  get dropletID(): string {
    return this._dropletID;
  }
  /*
    note that there is no setter for dropletID, and the _dropletID property is private. This is because we do NOT want the dropletID to be set by any code outside of this class.
  */

  // !Accessor Methods
  setName(newName: string): this {
    this.name = newName;
    return this;
  }

  addIpv4Address(ipv4Address: string): this {
    let addressArray = this.ipv4Addresses;
    addressArray.push(ipv4Address);
    return this;
  }

  removeIpv4Address(ipv4Address: string): this {
    this.ipv4Addresses = this.ipv4Addresses.filter(
      (address) => address !== ipv4Address
    );
    return this;
  }

  addIpv6Address(ipv6Address: string): this {
    let addressArray = this.ipv6Addresses;
    addressArray.push(ipv6Address);
    return this;
  }

  removeIpv6Address(ipv6Address: string): this {
    this.ipv6Addresses = this.ipv6Addresses.filter(
      (address) => address !== ipv6Address
    );
    return this;
  }

  // !Subroutines (these should be private)
  private parseDigitalOceanDropletResponse(
    response: digitalOceanCreateDropletResponse
  ): void {
    try {
      response.droplet.networks.v4.forEach((item) => {
        if (item.type === "public") {
          this.addIpv4Address(item.ip_address);
          console.log(item, "logged");
        }
      });
    } catch (error) {
      console.error(error);
    }
    this._dropletID = response.droplet.id;
  }

  private pollForIPAddresses(maximumNumberOfSecondsToPoll: number = 15): void {
    /*
      This function really should not be necessary. Polling is generally a bad idea. However, provisionOnDigitalOcean.droplets.create() doesn't actually return the droplet's IP address. This is because it takes ~5-10 seconds for the droplet to actually acquire an IP address. So, in this particular case, we need to poll until we get an IP address.
      
      In the first poll, we check response.features to see if it contains "ipv6". If so, we continue to poll until we have received at least 1 ipv4 and 1 ipv6 address, or until the number of seconds to poll is up.
      
      If the number of seconds to poll is less than zero, then we will poll indefinitely until we get at least 1 ipv4 address, and if ipv6 is enabled, 1 ipv6 address
    */
    const pollIndefinitely: boolean =
      maximumNumberOfSecondsToPoll < 0 ? true : false;
    let shouldPoll: boolean = true;
    let dropletHasIpv6: boolean;
    let ipv4Addresses: Array<any> = [];
    let ipv6Addresses: Array<any> = [];

    if (!pollIndefinitely) {
      setTimeout(() => {
        shouldPoll = false;
      }, maximumNumberOfSecondsToPoll * 1000);
    }

    const pollDigitalOceanForIPAddresses = async () => {
      while (shouldPoll) {
        console.log(`polling ${this.dropletID} for IP addresses`);
        let response: digitalOceanCreateDropletResponse = await getDropletInformation(
          this.dropletID
        );
        if (dropletHasIpv6 === undefined) {
          console.log(inspect(response, false, null, true));
          if (response.droplet.features.includes("ipv6")) {
            dropletHasIpv6 = true;
          } else {
            dropletHasIpv6 = false;
          }
        }
        if (ipv4Addresses.length == 0) {
          ipv4Addresses = response.droplet.networks.v4;
        }
        if (dropletHasIpv6 && ipv6Addresses.length == 0) {
          ipv6Addresses = response.droplet.networks.v6;
        }
        if (ipv4Addresses.length > 0) {
          if (ipv6Addresses.length > 0 || !dropletHasIpv6) {
            break;
          }
        }
      }
    };
    pollDigitalOceanForIPAddresses();

    if (ipv4Addresses.length > 0) {
      ipv4Addresses.forEach((address) => {
        if (address.type === "public") {
          this.addIpv4Address(address.ip_address);
        }
      });
    }
    if (ipv6Addresses.length > 0) {
      ipv6Addresses.forEach((address) => {
        if (address.type === "public") {
          this.addIpv6Address(address.ip_address);
        }
      });
    }
  }

  async provisionOn(cloud: cloudProviders): Promise<this> {
    switch (+cloud) {
      /*
        argument 'cloud' has to be cast to a number in order to be comparable in a switch statement.
        This works because enums are actually a type of number ... the name of each enumerable value is just syntactic sugar.
        for more info see: https://stackoverflow.com/questions/27747437/typescript-enum-switch-not-working
      */
      case cloudProviders.digitalOcean:
        let config = { name: this.name };
        const response: digitalOceanCreateDropletResponse = await provisionOnDigitalOcean(
          config
        );
        this.parseDigitalOceanDropletResponse(response);
        this.pollForIPAddresses(); //note that we need to poll for ip addresses until we receive them because response does not actually contain IP addresses.
        return this;
      case cloudProviders.aws:
        await provisionOnAWS();
        return this;
      default:
        throw new Error(
          '${cloud} isn\'t a supported cloud provider. You must specify either "aws" or "digitalOcean".'
        );
    }
  }
}

export enum cloudProviders {
  digitalOcean,
  aws,
}
