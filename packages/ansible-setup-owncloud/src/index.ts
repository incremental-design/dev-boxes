import cac from "cac";
import prompts from "prompts";
import dotenv from "dotenv";
import createRancherInstance from "./provisionRancherOnDigitalOcean/index";

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
    name: "Droplet Name",
    message: "What do you want to name your droplet?",
    initial: "rancher",
  },
];

(async () => {
  const response = await prompts(questions);
  console.log(response);
  // await createRancherInstance();
})();
