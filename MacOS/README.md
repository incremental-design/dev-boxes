# Use nix-darwin to set up an intel or arm Mac

see: [intall nix-darwin](https://github.com/LnL7/nix-darwin)

1. Set up nix.

```bash {"id":"01HXD2VRM11RWRR1S6ERSGPVVH"}
#!/usr/bin/env bash
type nix || curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install
```

2. Add nix-darwin channel.

```bash {"id":"01HXD2VRM11RWRR1S6EW07HZSS"}
#!/usr/bin/env bash

nix-channel --add https://github.com/LnL7/nix-darwin/archive/master.tar.gz
nix-channel --update
```

3. Bootstrap nix-darwin.

   You might have to enter your password to complete this installation.

> [!TIP]
> a nix flake doesn't have to be on your local machine to be run. If you point nix to a flake anywhere on the internet, it will download and try to run it.

> [!WARNING]
> If this script finds a `flake.nix` in its current working directory, it will try to bootstrap nix darwin from that flake. MAKE SURE THAT the [`flake.nix`](flake.nix) is a valid nix-darwin flake.This script is for MacOS only. Do NOT run this on windows or linux!

```bash {"id":"01HXD2VRM11RWRR1S6EXYD2JV0"}
#!/usr/bin/env bash

if [ -e /etc/zshrc ]; then
    sudo mv /etc/zshrc /etc/zshrc.before-nix-darwin
fi

if [ -e /etc/bashrc ]; then
    sudo mv /etc/bashrc /etc/bashrc.before-nix-darwin
fi

# Set the flake address to the specific subfolder
FLAKE_ADDRESS="github:incremental-design/dev-boxes?dir=MacOS"

if [ -f flake.nix ]; then
    # Use flake in the current working directory
    FLAKE_ADDRESS='.'
fi

export ARCH=$(sysctl -n machdep.cpu.brand_string | grep -q "Apple M" && echo "aarch64-darwin" || echo "x86_64-darwin")

nix run --extra-experimental-features nix-command --extra-experimental-features flakes --extra-experimental-features configurable-impure-env nix-darwin -- switch --impure --flake "$FLAKE_ADDRESS#default"
```

4. Reboot your computer.
5. Rebuild the configuration, to make sure that nix-darwin has been properly installed.

You might need to provide your password to complete this step.

```bash {"id":"01HXD2VRM11RWRR1S6F1PHAHSJ"}
#!/usr/bin/env bash
ARM=$(sysctl -n machdep.cpu.brand_string | grep -q "Apple M1" && echo True || echo False)

set -e
type darwin-rebuild

# Set the flake address to the specific subfolder
FLAKE_ADDRESS="github:incremental-design/dev-boxes?dir=MacOS"

if [ -f flake.nix ]; then
    # Use flake in the current working directory
    FLAKE_ADDRESS='.'
fi

export ARCH=$(sysctl -n machdep.cpu.brand_string | grep -q "Apple M1" && echo "aarch64-darwin" || echo "x86_64-darwin")

darwin-rebuild switch --impure --flake $FLAKE_ADDRESS.#default
```

## Uninstall nix-darwin

1. Ensure that `nixpkgs` channel and `nix-darwin` channel are set. If not, set them.

```bash {"id":"01HXD2VRM11RWRR1S6F4ZSTWZ4"}
#!/usr/bin/env bash
NIXPKGS=False
NIX_DARWIN=False

while read -r line
do
    if [ $NIXPKGS = False ]; then
        grep -q "nixpkgs" <<< "$line" && NIXPKGS=True && echo "nixpkgs channel: $line"
    fi
    if [ $NIX_DARWIN = False ]; then
        grep -q "nix-darwin" <<< "$line" && NIX_DARWIN=True && echo "nix-darwin channel: $line"
    fi
done <<< $(nix-channel --list 2>&1)

set -e

if [ $NIXPKGS = False ]; then
    nix-channel add https://nixos.org/channels/nixpkgs-unstable
fi

if [ $NIX_DARWIN = False ]; then
    nix-channel add https://github.com/LnL7/nix-darwin/archive/master.tar.gz
fi
```

2. Run the nix-darwin uninstaller script.

You may need to provide your password for this.

```bash {"id":"01HXD2VRM11RWRR1S6F6VEZ85D"}
#!/usr/bin/env bash
set -e


nix-build https://github.com/LnL7/nix-darwin/archive/master.tar.gz -A uninstaller
./result/bin/darwin-uninstaller

unlink ./result

```

3. Reboot your computer.
