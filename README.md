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

## Roadmap:

- 0.1: make a `base-box` package.
- 0.2: make a `vue3-supabase` package.
- 0.3: make a `vue3-strapi` package.

## Contribute to Dev Boxes:

Dev Boxes is a monorepo. Each folder in `packages` is its own npm package. You need to [install lerna](https://lerna.js.org) before you can build, run or test packages.

<!-- at some point link over to incremental.design article on lerna bootstrap -->

All packages use [docker](https://www.docker.com/products/docker-desktop), [QEMU](https://formulae.brew.sh/formula/qemu) or some combination of both to build and run containrs and VMs. Install both before you get started.

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

### Build:

Use `lerna run build` to build each package for production. This command grabs everything in each package's `src` folder, bundles it, and places it in each bundle's `dist` folder.

### Run:

`lerna bootstrap` to run each package.

### Test:

- `npx jest` to test ALL packages.
- `npx jest --watch` to watch for changes as you develop within package in this monorepo.

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
