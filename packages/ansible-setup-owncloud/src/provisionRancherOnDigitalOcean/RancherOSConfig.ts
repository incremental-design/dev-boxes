import {
  provisionOnDigitalOcean,
  digitalOceanCreateDropletResponse,
} from "./provisionOnDigitalOcean";
import { provisionOnAWS } from "./provisionOnAWS";

export class RancherOSConfig {
  private _name: string = "";
  private _ipv4Addresses: Set<string> = new Set();

  constructor() {} //I'm leaving the constructor blank because we'll initialize all variables with chainable setters

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
    this._ipv4Addresses = new Set(ipv4Addresses);
    //TODO: iterate through the set and remove any ip addresses that are not valid.
  }

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

  private parseDigitalOceanDropletResponse(
    response: digitalOceanCreateDropletResponse
  ): void {
    // TODO: grab all relevant values and use them to set rancherOS config
    response.networks.v4.forEach((item) => {
      if (item.type === "public") {
        this.addIpv4Address(item.ip_address);
        console.log(item, "logged");
      }
    });
    return;
  }

  provisionOn(cloud: cloudProviders): this {
    switch (+cloud) {
      /*
        argument 'cloud' has to be cast to a number in order to be comparable in a switch statement.
        This works because enums are actually a type of number ... the name of each enumerable value is just syntactic sugar.
        for more info see: https://stackoverflow.com/questions/27747437/typescript-enum-switch-not-working
      */
      case cloudProviders.digitalOcean:
        let config = { name: this.name };
        // return provisionOnDigitalOcean(config);
        provisionOnDigitalOcean(config)
          .then((response) => {
            this.parseDigitalOceanDropletResponse(response);
          })
          .catch((error) => {
            console.error(error);
          });
        return this;
      case cloudProviders.aws:
        throw new Error(
          "Sorry, I haven't written any code to provision rancher on AWS. If you want to add the code in, check out this project and go to src/provisionRancherOnDigitalOcean/RancherOSConfig.ts and modify the code."
        );
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
