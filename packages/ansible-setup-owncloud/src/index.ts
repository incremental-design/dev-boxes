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
import chalk from "chalk";
import terminalLink from "terminal-link";
import { execSync } from "child_process";
import { resolve, relative } from "path";
import passwordGenerator from "generate-password";

const cli = cac();
const parsed = cli.parse();
function makeRandomPasswords(): {
  adminPassword: string;
  mariaDBRootPassword: string;
  mariaDBPassword: string;
} {
  const passwordArray = passwordGenerator.generateMultiple(3, {
    length: 16,
    symbols: true,
    numbers: true,
    lowercase: true,
    uppercase: true,
    strict: true,
    exclude: "\"$'\\",
  });
  return {
    adminPassword: passwordArray[0],
    mariaDBRootPassword: passwordArray[1],
    mariaDBPassword: passwordArray[2],
  };
}

let DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN: string = "";

function getQuestions(
  token: string,
  passwords: {
    adminPassword: string;
    mariaDBRootPassword: string;
    mariaDBPassword: string;
  }
): Array<prompts.PromptObject> {
  return [
    {
      type: token ? "confirm" : false,
      name: "resetToken",
      message:
        "Your Digital Ocean Personal Access Token has been retrieved from your keychain. Would you like to change it?",
      initial: false,
    },
    {
      type:
        // @ts-ignore 'prev' is the value of the previous prompt. See: https://github.com/terkelg/prompts#-prompt-objects
        (prev) => {
          return token === "" || prev ? "password" : false;
        },
      name: "newToken",
      message: `Set your Digital Ocean Personal Access Token. It will be stored in your keychain, and nowhere else. You can generate a personal access token at ${chalk.underline.blueBright(
        terminalLink(
          "DigitalOcean > Account > API",
          "https://cloud.digitalocean.com/account/api/tokens/new"
        )
      )}`,
      initial: "",
    },
    {
      type: "text",
      name: "dropletName",
      message: "What do you want to name your droplet?",
      initial: "owncloud",
    },
    {
      type: "text",
      name: "adminPassword",
      message: "What password do you want to use to log into owncloud?",
      initial: passwords.adminPassword,
    },
    {
      type: "text",
      name: "mariaDBRootPassword",
      message: "What password do you want the MariaDB root user to have?",
      initial: passwords.mariaDBRootPassword,
    },
    {
      type: "text",
      name: "mariaDBPassword",
      message: "What password do you want the MariaDB owncloud user to have?",
      initial: passwords.mariaDBPassword,
    },
  ];
}

const rancherConfig = new RancherOSConfig();

function ansibleSetupRancher(
  ipAddress: string,
  pathToInventory: string,
  pathToPlaybook: string,
  pathToDockerCompose: string,
  pathToEnv: string,
  adminPassword: string,
  mariaDBRootPassword: string,
  mariaDBPassword: string
) {
  return execSync(
    `ansible-playbook '${pathToPlaybook}' --extra-vars='rancher_ip=${ipAddress} docker_compose=${pathToDockerCompose} env=${pathToEnv} admin_password=${adminPassword} maria_db_root_password=${mariaDBRootPassword} maria_db_password=${mariaDBPassword}' --inventory='${pathToInventory}'`,
    { stdio: "inherit" }
  );
}
const inventory = relative(
  process.cwd(),
  resolve(__dirname, require("../inventory.yml"))
);
const env = relative(
  process.cwd(),
  resolve(__dirname, require("../utils/owncloud-docker/.env"))
);
const dockerCompose = relative(
  process.cwd(),
  resolve(__dirname, require("../utils/owncloud-docker/docker-compose.yml"))
);
const playbook = relative(
  process.cwd(),
  resolve(__dirname, require("../install-owncloud-on-rancher.yml"))
);

(async () => {
  DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN = await getDigitalOceanPersonalAccessToken();
  const passwords = makeRandomPasswords();
  const answers = await prompts(
    getQuestions(DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN, passwords)
  );
  if (answers.newToken ?? undefined) {
    console.log(answers.newToken);
    await setDigitalOceanPersonalAccessToken(answers.newToken);
  }
  await initializeDigitalOceanAPI();
  const droplet = await rancherConfig
    .setName(answers.dropletName)
    .provisionOn(cloudProviders.digitalOcean);
  const ipAddress = droplet.ipv4Addresses.slice(-1)[0];
  ansibleSetupRancher(
    ipAddress,
    inventory,
    playbook,
    dockerCompose,
    env,
    answers.adminPassword,
    answers.mariaDBRootPassword,
    answers.mariaDBPassword
  );
})();
