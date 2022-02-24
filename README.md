# Dev Boxes

<!--
Add a banner image and badges

see: https://towardsdatascience.com/how-to-write-an-awesome-readme-68bf4be91f8b
-->

<!-- link to your reader to your repository's bug page, and let them know if you're open to contributions -->

## Installation:

To install a given package in your own codebase, you can either `npm install @incremental.design/<dev-boxes>/<name-of-package>` or `yarn add @incremental.design/dev-boxes/<name-of-package>`.

## Usage:

To set up and use the docker containers and/or virtual machines within a package, `npx @incremental.design/dev-boxes/name-of-package` to launch the package's CLI. The CLI will guide you through setup and usage for the particular package.

<!-- not sure if @incremental.design/dev-boxes/name-of-package is a valid npx binary name but w/e -->

### How Dev Boxes works:

Every package in Dev Boxes contains one or more virtual machines or docker containers. Each also contains a `dist/quickstart.js` script. This script launches a command line interface (CLI) that walks you through the package setup. Answer each of the script's prompts to start the package's virtual machines or docker containers.

Every package in Dev Boxes inherits from the `src/base-box` package. This package contains a CLI that installs an [`alpine linux`](https://hub.docker.com/_/alpine) container. It doesn't do anything else. It is the bare minimum needed to launch a container with a CLI. This package is the starting point for every other package in this monorepo. If you are trying to figure out how a package is organized, start by comparing its contents to those of `base-box`.

<!-- need to explain the idea of quickstarts and chaining -->

## Roadmap:

- 0.1: make a `box-base` package.
- 0.2: make a `box-vue3-supabase` package.
- 0.3: make a `box-vue3-strapi` package.

## Contribute to Dev Boxes:

Dev Boxes is a monorepo. Each folder in `packages` is its own npm package. You need to [install lerna](https://lerna.js.org) before you can build, run or test packages.

Lerna uses yarn workspaces to link packages together. You have install [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable), and then run `yarn config set workspaces-experimental true` before you can use Lerna.

**MAKE SURE YOU INSTALL YARN v1.22.7** not version 2. Use `yarn -v` to check the version of yarn that you have installed.

<!-- at some point link over to incremental.design article on lerna bootstrap -->

All packages use [docker](https://www.docker.com/products/docker-desktop), [QEMU](https://formulae.brew.sh/formula/qemu) or some combination of both to build and run containers and VMs. Install both before you get started.

Dev Boxes requires node v17 or higher. You can check your node version with `node -v`. If the version number is <17, the executables in this monorepo will probably fail.

All packages use [dockerode](https://www.npmjs.com/package/dockerode) to communicate with the docker API. The docker API is a REST API that runs on `/var/run/docker.sock`. When you start docker desktop, it starts the API. For dockerode to work: docker must be running. Make sure you start docker desktop. If you are running this code on a mac, you ALSO have to make sure that:

1. the xcode command line utilities are installed. That's because dockerode installs [`cpu-features`](https://www.npmjs.com/package/cpu-features), which is a native module that has to be built with the xcode LLVM compiler every time you `lerna bootstrap`. Download the Xcode command line tools [here](https://developer.apple.com/download/all/?q=command%20line%20tools), or run `xcode-select -install` to download and install them.

2. `cmake` is installed. `cmake` is a makefile interpreter. It helps the xcode LLVM compiler build `cpu-features`. If you have installed [homebrew](https://brew.sh), you can [`brew install cmake`](https://stackoverflow.com/questions/59825564/how-to-run-cmake-in-mac).

3. If you are running this project on an M1 Mac, then `cpu-features` will still fail after you do the previous two steps. As of 2/21/22 it is unclear if there is a fix that doesn't involve dark magic. But don't worry, you don't actually NEED `cpu-features` to use this project. You will just have to ignore the error it generates.

### Setup:

<!-- asciicast or GIF of install prerequisites -->

Once you install lerna, docker and QEMU, clone this repository. Then run `[lerna bootstrap](https://github.com/lerna/lerna/tree/main/commands/bootstrap#readme) && [lerna run](https://github.com/lerna/lerna/tree/main/commands/run#readme)lerna build` to install

#### Repository Structure:

- `.readme`
- `packages`
  - [`ansible-setup-owncloud`](./packages/ansible-setup-owncloud/README.md)
  - [`provision-raspberry-pi-on-macos`](./packages/provision-raspberry-pi-on-macos/README.md)
- [`.gitignore`](https://git-scm.com/docs/gitignore)
- [`lerna.json`](https://github.com/lerna/lerna/blob/main/lerna.json)
- [`LICENSE`](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository)
- [`package.json`](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
- `README.md` - **you are here**

### Create a new package:

Run `node createPackage.js <name-of-package> <your-email> '<description>'` from the root of this monorepo.

- `<name-of-package>` should be kebab-cased and MUST start with `box-` e.g. `box-base`
- `<your-email>` should be the email you use for your Github login.
- `<description>` should list the contents of the package. Make sure you enclose description in quotes, or the script will fail.

### Install dependencies:

`lerna add <name of package>` to install a [dependency](https://classic.yarnpkg.com/en/docs/dependency-types#toc-dependencies) for EVERY package in this monorepo.

`lerna add --dev <name of package>` to install a [dev dependency](https://classic.yarnpkg.com/en/docs/dependency-types#toc-devdependencies) for EVERY package in this monorepo.

`lerna add <name-of-package> --scope @incremental.design/dev-boxes/<name-of-package>` to install a [dependency](https://classic.yarnpkg.com/en/docs/dependency-types#toc-dependencies) in a single package in this monorepo.

`lerna add --dev <name of package> --scope @incremental.design/dev-boxes/<name-of-package>` to install a [dev dependency](https://classic.yarnpkg.com/en/docs/dependency-types#toc-devdependencies) for EVERY package in this monorepo.

### Build:

Use `lerna run build` to build each package for production. This command grabs everything in each package's `src` folder, bundles it, and places it in each bundle's `dist` folder.

### Run:

Many of the packages in Dev Boxes launch some sort of web GUI. Use `lerna run serve` to set up each package's containers and VMs and then launch their respective GUIs.

Note that not ALL of the packages in Dev Boxes can be run.

### Test:

- `npx jest` to test ALL packages.
- `npx jest --watch` to watch for changes as you develop within package in this monorepo.

Every package contains a single `<nameOfPackage.test.ts>` file in its root. Place all of your tests in this file. Jest won't look anywhere else for tests.

### Document:

This repository contains THREE levels of documentation:

- Monorepo-level README.md (you are here).
- Package-level README.md
- Inline documentation

The monorepo-level README.md describes how Dev Boxes is organized, and how you can contribute to it.

Each package-level README.md describes how its respective package is organized, and how you can contribute to it.

Inline documentation describes how the code within a given file works, and how you can use it.

### Deploy:

<!-- Deployment is handled by Github actions. It automatically builds and uploads everything in [`packages`](./packages/) every time a new commit is made.  -->
