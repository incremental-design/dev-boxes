`dev-boxes` contains all of the building blocks for the kubernetes clusters we use at incremental.design. It includes the helm charts, dockerfiles, packer scripts, vagrantfiles, and shell scripts that you will need to develop in kubernetes.

Developing in kubernetes helps us build microservices that actually work in production. It lets us test the interactions between the code and the infrastructure that will surround it. However, we cannot develop in an exact replica of a production environment because:

- we have to fake production data in a development environment.
- we have to add [capabilities](https://dockerlabs.collabnix.com/advanced/security/capabilities/), agents and command line utilities to containers in a development environment, so that we can change the code that is running within them.
- we have to add services to a development cluster to facilitate monitoring, profiling and testing.

We don't strictly need to develop in an exact replica of a production environment. However, we need to standardize the differences between them. This repository contains both production environments and their development analogues. This gives us a way to test the differences between each. The repository is also connected to Github CI/CD, github container registry. Every time we push updates to the main branch, it rebuilds the containers so that production clusters can automatically pull the latest updates.

%%

## How does the code work?

## how can the reader use the code?

where is the code deployed? (The answer should always be a precompiled binary or web shell (e.g. runkit). Don't make your reader set up an environment and build from source.

note that when the reader is modifying the code, they will compare the behavior of their modified code to the behavior of the deployed version. Your deploy is their reference.

## how can the reader modify to the code?

what are the prerequisites for developing the code?
the answer should always be either docker container, virtual machine, or if an embedded system, a pre-built image. Don't make your reader set up an entire environment just to get started.
how can the reader start the code?
what are the inputs to the code?
what are the outputs of the code?
how can the reader tell if the code is functioning as expected?
if there are failure cases, how can the reader tell that the code is failing?

%%
