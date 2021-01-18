import cac from "cac";
import prompts from "prompts";
import {
  RancherOSConfig,
  cloudProviders,
} from "./provisionRancherOnDigitalOcean/RancherOSConfig";

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
  console.log(droplet.ipv4Addresses);
  console.log(droplet.ipv6Addresses);
})();
