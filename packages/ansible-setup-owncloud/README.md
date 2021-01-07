# Install OwnCloud on Rancher

This project automates the installation of owncloud on a rancherOS

First, it automatically spin up an instance of rancherOS on digitalOcean, using the digitalOcean API.
Then, it runs an ansible script to spin up the owncloud container within rancherOS.

And that's it!

# Before you develop:

1. Install [homebrew](https://brew.sh).
2. Install ansible with `brew install ansible`.
