import { provisionOnDigitalOcean } from "./provisionOnDigitalOcean";
export class RancherOSConfig {
  private _name: string = "";

  constructor() {} //I'm leaving the constructor blank because we'll initialize all variables with chainable setters

  get name(): string {
    return this._name;
  }
  set name(newName: string) {
    this._name = newName;
    // TODO: sanitize characters that don't belong in digital ocean droplet names
  }

  setName(newName: string) {
    this.name = newName;
    return this;
  }

  provisionOn(cloud: cloudProviders) {
    switch (+cloud) {
      /*
        argument 'cloud' has to be cast to a number in order to be comparable in a switch statement.
        This works because enums are actually a type of number ... the name of each enumerable value is just syntactic sugar.
        for more info see: https://stackoverflow.com/questions/27747437/typescript-enum-switch-not-working
      */
      case cloudProviders.digitalOcean:
        let config = { name: this.name };
        provisionOnDigitalOcean(config);
        break;
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
