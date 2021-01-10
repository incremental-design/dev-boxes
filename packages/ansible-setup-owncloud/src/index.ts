import CAC from "cac";
import { prompts, PromptObject } from "prompts";
import dotenv from "dotenv";
import createRancherInstance from "./provisionRancherOnDigitalOcean/index";

dotenv.config(); // we want to initialize our environment variables at the very beginning of the program. Right now they are needed in provisionRancherOnDigitalOcean/getDigitalOceanPersonalAccessToken.ts

const cli = CAC();

const parsed = cli.parse();

console.log(JSON.stringify(parsed, null, 2));

const promptsConfig: PromptObject = {
  type: "number",
  name: "value",
  message: "how old are you",
  validate: (value: number) => (value < 18 ? `Nightclub is 18+ only` : true),
};

(async () => {
  const response = await prompts.number(promptsConfig);
  await createRancherInstance();
})();
