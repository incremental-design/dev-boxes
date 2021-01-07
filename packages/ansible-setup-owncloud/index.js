// TODO: kick off the CLI that installs the server from here
const cli = require("cac")();

const parsed = cli.parse();

console.log(JSON.stringify(parsed, null, 2));
