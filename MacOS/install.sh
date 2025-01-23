#!/usr/bin/env bash

set -e

# run locally with:
# FLAKE_ADDRESS="." ./install.sh [install|rebuild|uninstall]
#
# run from the repo with:
# ./install.sh [install|rebuild|uninstall]
FLAKE_ADDRESS="${FLAKE_ADDRESS:-github:incremental-design/dev-boxes/main?dir=MacOS}"

export ARCH=$(sysctl -n machdep.cpu.brand_string | grep -q "Apple M" && echo "aarch64-darwin" || echo "x86_64-darwin")

function install() {
    echo "Starting installation..."

    # Step 1: Set up nix
    type nix || curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install && . /nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh

    # Step 2: Add nix-darwin channel
    nix-channel --add https://github.com/LnL7/nix-darwin/archive/master.tar.gz
    nix-channel --update

    # Step 3: Bootstrap nix-darwin. You might have to enter your password to complete this installation
    if [ -e /etc/zshrc ]; then
        sudo mv /etc/zshrc /etc/zshrc.before-nix-darwin
    fi

    if [ -e /etc/bashrc ]; then
        sudo mv /etc/bashrc /etc/bashrc.before-nix-darwin
    fi

    if [ -e /etc/nix/nix.conf ]; then
        sudo mv /etc/nix/nix.conf /etc/nix/nix.conf.before-nix-darwin
    fi

    nix run --extra-experimental-features nix-command --extra-experimental-features flakes --extra-experimental-features configurable-impure-env nix-darwin -- switch --impure --flake "$FLAKE_ADDRESS#default"

    # Step 4: Reboot your computer
    echo "Installation complete. Please reboot your computer."
}

function rebuild(){

if ! type darwin-rebuild &> /dev/null; then
    echo "Error: nix-darwin is not installed. The darwin-rebuild command is missing."
else
    type darwin-rebuild
fi
darwin-rebuild switch --impure --flake $FLAKE_ADDRESS#default

}

function uninstall() {
    echo "Starting uninstallation..."

    type darwin-uninstaller && darwin-uninstaller

    if type /nix/nix-installer &> /dev/null; then


        if [ -e /etc/zshrc.before-nix-darwin ]; then
        sudo mv /etc/zshrc.before-nix-darwin /etc/zshrc
        fi

        if [ -e /etc/bashrc.before-nix-darwin ]; then
            sudo mv /etc/bashrc.before-nix-darwin /etc/bashrc
        fi

        if [ -e /etc/nix/nix.conf.before-nix-darwin ]; then
            sudo mv /etc/nix/nix.conf.before-nix-darwin /etc/nix/nix.conf
        fi

        /nix/nix-installer uninstall
    else
        echo "Please follow these instructions to uninstall: https://nix.dev/manual/nix/2.18/installation/uninstall#macos"
    fi
    
    # Step 3: Reboot your computer
    echo "Uninstallation complete. Please reboot your computer."
}

if [ "$1" == "uninstall" ]; then
    uninstall
elif [ "$1" == "install" ]; then
    install
elif [ "$1" == "rebuild" ]; then
    rebuild
else
    echo "Invalid option. Please use install, rebuild, or uninstall."
fi

# see: https://github.com/LnL7/nix-darwin
