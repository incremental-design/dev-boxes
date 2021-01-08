// TODO: kick off the CLI that installs the server from here
const cli = require("cac")();

const parsed = cli.parse();

console.log(JSON.stringify(parsed, null, 2));

const prompts = require("prompts");

const promptsConfig = {
  type: "number",
  name: "value",
  message: "how old are you",
  validate: (value: number) => (value < 18 ? `Nightclub is 18+ only` : true),
};

(async () => {
  const response = await prompts(promptsConfig);
})();
