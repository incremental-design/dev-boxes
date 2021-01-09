import CAC from "cac";
import { prompts, PromptObject } from "prompts";

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
})();
