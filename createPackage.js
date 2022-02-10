/**
 * usage: node createPackage.js <packageName> <author> <description>
 */

const fs = require('fs');
const path = require('path');
const version = require('./lerna.json').version;

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
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  },
  "include": [
    "src/**/*"
  ]
}

const package =
{
  "main": "dist/quickstart.js",
  "repository": "https://github.com/incremental-design/dev-boxes",
  "license": "MIT",
  "private": false,
  "devDependencies": {
    "@babel/cli": "^7.17.0",
    "@babel/core": "^7.17.2",
    "@babel/preset-env": "^7.16.11",
    "@babel/preset-typescript": "^7.16.7",
    "@types/node": "^14.14.20",
    "eslint": "^7.17.0",
    "typescript": "^4.5.5",
  },
  "scripts": {
    "build": "npx babel --root-mode upward --extensions \".ts\" src --out-dir dist && tsc --emitDeclarationOnly",
  }
}

const packageName = process.argv[2];

const readme = `
# ${'`' + packageName + '`'}
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

const quickstart = `
export default ():void => {
  // your code here
}
`

function stubPackage() {
  console.log(process.argv)

  const author = process.argv[3];
  const description = process.argv[4];
  if (packageName.match(/^[^a-z0-9-]+$/)) throw new Error('package name must only contain lowercase letters, numbers, and dashes');

  const packagePath = path.resolve(__dirname, 'packages', process.argv[2])
  fs.mkdirSync(packagePath, { mode: 0o755 /* same as drwxr-xr-x */ });
  fs.writeFileSync(path.resolve(packagePath, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2), { mode: 0o644 /* same as -rw-r--r-- */ });
  const p = { ...package, name: packageName, version, author, description };
  fs.writeFileSync(path.resolve(packagePath, 'package.json'), JSON.stringify(p, null, 2), { mode: 0o644 /* same as -rw-r--r-- */ });
  fs.writeFileSync(path.resolve(packagePath, 'README.md'), readme, { mode: 0o644 /* same as -rw-r--r-- */ });
  fs.mkdirSync(path.join(packagePath, 'src'), { mode: 0o755 /* same as drwxr-xr-x */ });
  fs.writeFileSync(path.resolve(packagePath, 'src/quickstart.ts'), quickstart, { mode: 0o644 /* same as -rw-r--r-- */ });
}

stubPackage();