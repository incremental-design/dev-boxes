import cac from "cac";
import prompts from "prompts";
import { initializeDigitalOceanAPI } from "./provisionRancherOS/onDigitalOcean/provisionOnDigitalOcean";
import {
  RancherOSConfig,
  cloudProviders,
} from "./provisionRancherOS/RancherOS";
import {
  setDigitalOceanPersonalAccessToken,
  getDigitalOceanPersonalAccessToken,
} from "./provisionRancherOS/onDigitalOcean/accessDigitalOceanPersonalAccessToken";

const cli = cac();
const parsed = cli.parse();

let DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN: string = "";

const questions: Array<prompts.PromptObject> = [
  {
    type: DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN !== "" ? "confirm" : false,
    name: "resetToken",
    message:
      "Your Digital Ocean Personal Access Token has been retrieved from your keychain. Would you like to change it?",
    initial: false,
  },
  {
    type:
      // @ts-ignore 'prev' is the value of the previous prompt. See: https://github.com/terkelg/prompts#-prompt-objects
      DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN === "" || prev ? "password" : false,
    name: "newToken",
    message:
      "Set your Digital Ocean Personal Access Token. It will be stored in your keychain, and nowhere else.",
    initial: "",
  },
  {
    type: "text",
    name: "dropletName",
    message: "What do you want to name your droplet?",
    initial: "rancher",
  },
];

const rancherConfig = new RancherOSConfig();

(async () => {
  DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN = await getDigitalOceanPersonalAccessToken();
  const answers = await prompts(questions);
  if (answers.newToken !== "") {
    await setDigitalOceanPersonalAccessToken(answers.newToken);
  }
  await initializeDigitalOceanAPI();
  const droplet = await rancherConfig
    .setName(answers.dropletName)
    .provisionOn(cloudProviders.digitalOcean);
  console.log(droplet.ipv4Addresses);
  console.log(droplet.ipv6Addresses);
})();
