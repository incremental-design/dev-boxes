"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _boxBase = require("@incremental.design/box-base");

/* this talks to the docker API at `/var/run/docker.sock` see: https://www.npmjs.com/package/dockerode */
// import { parse as parseDockerFile } from 'docker-file-parser'; /* this parses dockerfiles. See: https://www.npmjs.com/package/docker-file-parser */

/**
 *
 * @param dockerInstance - an instance of the {@link Docker} class. If an instance isn't provided, then quickstart will create one for you. The idea is that you can chain quickstarts together, sharing the same docker instance among them.
 *
 * @returns dockerInstance - the same instance of the {@link Docker} class that was passed in, or if no instance was passed in, a new instance.
 */
const quickstartName = __dirname.split('/').slice(0, -2).pop();
/* i.e. '/path/to/packages/box-vue3-supabase/src/quickstart.ts' -> ['','path','to','packages','box-vue3-supabase','src','quickstart.ts'] -> ['','path','to','packages','box-vue3-supabase'] -> 'box-vue3-supabase' */


const quickstart = (0, _boxBase.quickstartFactory)(quickstartName, async (dockerInstance, options) => {
  /* do something with dockerInstance and options here */
}, async () => {
  /* write a CLI prompt to ask user for options here */
  return {
    /* the answers from the CLI prompt, in the format of options */
  };
});
var _default = quickstart;
exports.default = _default;
//# sourceMappingURL=Quickstart.js.map