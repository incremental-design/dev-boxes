# `box-base`

<!--
Add a banner image and badges

see: https://towardsdatascience.com/how-to-write-an-awesome-readme-68bf4be91f8b
-->

<!-- link to your reader to your repository's bug page, and let them know if you're open to contributions -->

Run node in a docker container, using javascript, rather than the docker CLI.

## Installation:

`yarn add --dev @incremental.design/box-base` or `npm install @incremental.design/box-base`

## Usage:

There are THREE ways to use this package:

1. Run the `box-base` script, with `npx box-base`. This will use docker to build an [`incrementaldesign/box-base` image](./Dockerfile), and then run it. _You have to install and start [docker desktop](https://www.docker.com/products/docker-desktop) before you run this script._

   - This script accepts the following flags:

     - `my-flag-here`: name of flag

     _If you don't provide all of the aformentioned flags, the script will prompt you to provide them._

2. import `box-base` into your own typescript project:

   ```typescript
   import boxBase from '@incremental.design/box-base`


   const {
     dockerInstance,        // instance of the docker API
     destroy,               // a function that undoes everything that `boxBase` did
                            //  (with the exception of writing to bind mounts)
     items                  // an object that contains all of the images, containers,
                            //  volumes and docker networks that `boxBase` created, used, or started
     } = await boxBase({
     option1: "abcd" // explain the option here
   })
   ```

3. import any of the utilities in the `@incremental.design/box-base` package into your own typescript project.

```typescript

import {
  addToKeychain,
  buildFromDockerfile,
  checkDocker,
  createLocalVolume,
  deglobify,
  generatePasswords,
  getAnswersFromCLI,
  getFromDockerHub,
  isDockerReady,
  isLabelValid,
  makePasswordPrompt,
  prettyPrintJSON,
  print,
  printProgress,
  quickstartFactory,
  retreiveFromKeychain,
  startContainer,
  streamContainerOutput,
} from '@incremental.design/box-base`
```

- [`addToKeychain`](./src/utils/addToKeychain.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`buildFromDockerfile`](./src/utils/buildFromDockerfile.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`checkDocker`](./src/utils/checkDocker.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`createLocalVolume`](./src/utils/createLocalVolume.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`deglobify`](./src/utils/deglobify.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`generatePasswords`](./src/utils/generatePasswords.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`getAnswersFromCLI`](./src/utils/getAnswersFromCLI.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`getFromDockerHub`](./src/utils/getFromDockerHub.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`isDockerReady`](./src/utils/isDockerReady.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`isLabelValid`](./src/utils/isLabelValid.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`makePasswordPrompt`](./src/utils/makePasswordPrompt.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`prettyPrintJSON`](./src/utils/prettyPrintJSON.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`print`](./src/utils/print.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`printProgress`](./src/utils/printProgress.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`quickstartFactory`](./src/utils/quickstartFactory.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`retrieveFromKeychain`](./src/utils/retrieveFromKeychain.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`startContainer`](./src/utils/startContainer.ts) <!-- what does it do ? -->

  ```typescript
  //show how to use
  ```

- [`streamContainerOutput`](./src/utils/streamContainerOutput.ts) <!-- what does it do ? -->
  ```typescript
  //show how to use
  ```

### How `box-base` works:

[ ] Explain how execution works. What is the entry point for your code? Which files correspond to which functionality? What is the lifecycle of your project? Are there any singletons, side effects or shared state among instances of your project? Take extra care to explain design decisions. After all, you wrote an ENTIRE codebase around your opinions. Make sure that your repository's contributors understand them.

## Contribute to `box-base`:

See [`dev-boxes/README.md`](../../README.md#contribute-to-dev-boxes).
