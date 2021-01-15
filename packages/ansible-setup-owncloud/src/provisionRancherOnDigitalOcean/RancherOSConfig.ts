import provisionOnDigitalOcean from "./provisionOnDigitalOcean";
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
    if (cloud === cloudProviders.digitalOcean) {
      let config = { name: this.name };
      provisionOnDigitalOcean(config);
    } else if (cloud === cloudProviders.aws) {
      throw new Error(
        "aws isn't supported yet. But feel free to submit a pull request if you want to add support for it!"
      );
    } else {
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
