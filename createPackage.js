#!/usr/bin/env node

/**
 * usage: node createPackage.js <packageName> <author> <description>
 */

const fs = require('fs');
const path = require('path');
const { arrayBuffer } = require('stream/consumers');
const version = require('./lerna.json').version;

/**
 * the contents of tsconfig are written to `packages/<package-name>/tsconfig.json`
 */
const tsconfig = {
  "compilerOptions": {
    "target": "esnext" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    /* Modules */
    "module": "esnext" /* Specify what module code is generated. */,
    "moduleResolution": "node" /* Specify how TypeScript looks up a file from a given module specifier. */,
    "baseUrl": "./" /* Specify the base directory to resolve non-relative module names. */,
    "types": [
      "jest",
      "node"
    ] /* Specify type package names to be included without being referenced in a source file. */,
    "lib": [
      "ESNext",
    ],
    /* Emit */
    "declaration": true /* Generate .d.ts files from TypeScript and JavaScript files in your project. */,
    "declarationMap": true /* Create sourcemaps for d.ts files. */,
    "sourceMap": true /* Create source map files for emitted JavaScript files. */,
    "outDir": "./dist/" /* Specify an output folder for all emitted files. */,
    "declarationDir": "./dist/types" /* Specify the output directory for generated declaration files. */,
    /* Interop Constraints */
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
    /* Type Checking */
    "strict": true /* Enable all strict type-checking options. */,
    /* Completeness */
    "skipLibCheck": true /* Skip type checking all .d.ts files. */,
    "isolatedModules": true /* see: https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html */
  },
  "include": [
    "src/**/*"
  ]
}

/**
 * the contents of package are written to `packages/<package-name>/package.json`
 */
const package =
{
  "main": "dist/Quickstart.js",
  "repository": "https://github.com/incremental-design/dev-boxes",
  "license": "MIT",
  "private": false,
  "devDependencies": {
    "@babel/cli": "^7.17.0",
    "@babel/core": "^7.17.2",
    "@babel/preset-env": "^7.16.11",
    "@babel/preset-typescript": "^7.16.7",
    "@types/node": "^17.0.18",
    "@types/jest": "^27.4.0",
    "eslint": "^7.17.0",
    "typescript": "^4.5.5",
    "@types/dockerode": "^3.3.3",
  },
  "scripts": {
    "build": "npx babel --root-mode upward --extensions \".ts\" src --out-dir dist --source-maps && tsc --emitDeclarationOnly",
  },
  "dependencies": {
    "@incremental-design/box-base": "latest",
    "dockerode": "^3.3.1",
    "docker-file-parser": "^1.0.7",

  }
}

const packageName = process.argv[2]; /* i.e. ./createPackage.js <package-name> */


/**
 * the contents of readme are written to `packages/<package-name>/README.md`
 */
const readme = `# ${'`' + packageName + '`'}
<!-- 
Add a banner image and badges

see: https://towardsdatascience.com/how-to-write-an-awesome-readme-68bf4be91f8b
-->

<!-- link to your reader to your repository's bug page, and let them know if you're open to contributions -->

## Installation:
Add ${'`' + packageName + '`'} to your codebase.
asciicast, video or GIF of adding to your project and using it

## Usage:
[ ] Make a bulleted list of each class, method, or function that your project exports. Link each list item directly to the file that defines it. 

### How ${'`' + packageName + '`'} works:
[ ] Explain how execution works. What is the entry point for your code? Which files correspond to which functionality? What is the lifecycle of your project? Are there any singletons, side effects or shared state among instances of your project? Take extra care to explain design decisions. After all, you wrote an ENTIRE codebase around your opinions. Make sure that your repository's contributors understand them.

## Roadmap:

[ ] List the releases that you have added to each project, and any future releases you would like to do. If there is a date for future release, put it here. If not, let people know that there is no defined timeframe for future releases.

## Contribute to ${'`' + packageName + '`'}:
See [${'`' + 'dev-boxes/README.md' + '`'}](../../README.md#contribute-to-dev-boxes).
`
/**
 * the contents of quickstart are written to `packages/<package-name>/src/quickstart.ts`
 */
const quickstart = `import { Docker } from 'node-docker-api';
/**
 * 
 * @param dockerInstance - an instance of the {@link Docker} class. If an instance isn't provided, then quickstart will create one for you. The idea is that you can chain quickstarts together, sharing the same docker instance among them.
 * 
 * @returns dockerInstance - the same instance of the {@link Docker} class that was passed in, or if no instance was passed in, a new instance.
 */
async function quickstart(dockerInstance?: Docker):Promise<Docker> {
  const di = dockerInstance || new Docker({ socketPath: '/var/run/docker.sock' });
  // your code here
  return di;
}
export default quickstart;
`

/**
 * the contents of runQuickstart are written to `packages/<package-name>/runQuickstart.js`
 */
const runQuickstart =
  `#!/usr/bin/env node

const quickstart = require('@incremental.design/${packageName}').default;
quickstart();
`

/**
 * the contents of test are written to `packages/<package-name>/<packageName>.test.ts`
 */
const test = `
// describe('your test here', () => {
//  it('should do something', async () => {
//    
//  }) 
// })
`

/**
 * the contents of dockerignore are written to `packages/<package-name>/.dockerignore`
 */
const dockerignore = `
node_modules
`

function stubPackage() {

  const author = process.argv[3];
  const description = process.argv[4];
  if (packageName.match(/^[^a-z0-9-]+$/)) throw new Error('package name must only contain lowercase letters, numbers, and dashes');
  if (!packageName.match(/^box/)) throw new Error(`package name must start with "box-" i.e. box-${packageName}`);

  const packagePath = path.resolve(__dirname, 'packages', process.argv[2])
  fs.mkdirSync(packagePath, { mode: 0o755 /* same as drwxr-xr-x */ });
  fs.writeFileSync(path.resolve(packagePath, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2), { mode: 0o644 /* same as -rw-r--r-- */ });
  const p = { ...package, name: `@incremental.design/${packageName}`, version, author, description };
  const bin = { [packageName]: './runQuickstart.js' };
  fs.writeFileSync(path.resolve(packagePath, 'package.json'), JSON.stringify({ ...p, bin }, null, 2), { mode: 0o644 /* same as -rw-r--r-- */ });
  fs.writeFileSync(path.resolve(packagePath, 'README.md'), readme, { mode: 0o644 /* same as -rw-r--r-- */ });
  fs.mkdirSync(path.join(packagePath, 'src'), { mode: 0o755 /* same as drwxr-xr-x */ });
  fs.writeFileSync(path.resolve(packagePath, 'src/Quickstart.ts'), quickstart, { mode: 0o644 /* same as -rw-r--r-- */ });
  fs.writeFileSync(path.resolve(packagePath, 'runQuickstart.js'), runQuickstart, { mode: 0o644 /* same as -rw-r--r-- */ });

  const testBasename = packageName.toLowerCase().split('-').map(word => (`${word.slice(0, 1).toUpperCase()}${word.slice(1)}`)).join('');
  const testPath = path.join(packagePath, `${testBasename}.test.ts`)

  fs.writeFileSync(testPath, test, { mode: 0o644 /* same as -rw-r--r-- */ })
  fs.writeFileSync(path.resolve(packagePath, '.dockerignore'), dockerignore, { mode: 0o644 /* same as -rw-r--r-- */ })
}

stubPackage();