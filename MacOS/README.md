# Use nix-darwin to set up an intel or arm Mac

1. Set up nix.
   `curl --proto '=https' --tlsv1.2 -sSf -L https://raw.githubusercontent.com/incremental-design/dev-boxes/refs/heads/main/MacOS/install.sh | sh -s -- install`

```bash {"id":"01HXD2VRM11RWRR1S6EW07HZSS"}
#!/usr/bin/env bash

nix-channel --add https://github.com/LnL7/nix-darwin/archive/master.tar.gz
nix-channel --update
```

2. Reboot your computer.
3. Rebuild the configuration, to make sure that nix-darwin has been properly installed.

You might need to provide your password to complete this step.

`curl --proto '=https' --tlsv1.2 -sSf -L https://raw.githubusercontent.com/incremental-design/dev-boxes/refs/heads/main/MacOS/install.sh | sh -s -- install`

## Uninstall nix-darwin

1. Ensure that `nixpkgs` channel and `nix-darwin` channel are set. If not, set them.

`curl --proto '=https' --tlsv1.2 -sSf -L https://raw.githubusercontent.com/incremental-design/dev-boxes/refs/heads/main/MacOS/install.sh | sh -s -- uninstall`

2. Reboot your computer.
