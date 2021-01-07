# Install OwnCloud on Rancher

This project automates the installation of owncloud on a rancherOS

First, it automatically spins up an instance of rancherOS on digitalOcean, using the digitalOcean API.
Then, it runs an ansible script to spin up the owncloud container within rancherOS.

And that's it!

# How to use it

1. Install node.
2. Install [homebrew](https://brew.sh).
3. Install ansible with `brew install ansible`,
4. `git clone` this repository (TODO: make it so that you can just curl the repo and execute the CLI)
5. run `install.sh` and answer the prompts.
