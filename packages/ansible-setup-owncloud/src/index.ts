import cac from "cac";
import prompts from "prompts";
import dotenv from "dotenv";
import {
  RancherOSConfig,
  cloudProviders,
} from "./provisionRancherOnDigitalOcean/RancherOSConfig";

dotenv.config(); // we want to initialize our environment variables at the very beginning of the program. Right now they are needed in provisionRancherOnDigitalOcean/getDigitalOceanPersonalAccessToken.ts

const cli = cac();
const parsed = cli.parse();

// const promptsConfig: PromptObject = {
//   type: "number",
//   name: "value",
//   message: "how old are you",
//   validate: (value: number) => (value < 18 ? `Nightclub is 18+ only` : true),
// };

const questions: Array<prompts.PromptObject> = [
  {
    type: "text",
    name: "dropletName",
    message: "What do you want to name your droplet?",
    initial: "rancher",
  },
];

const rancherConfig = new RancherOSConfig();

(async () => {
  const answers = await prompts(questions);
  const droplet = await rancherConfig
    .setName(answers.dropletName)
    .provisionOn(cloudProviders.digitalOcean);
})();
