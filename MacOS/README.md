# Use nix-darwin to set up an intel or arm Mac

1. Set up nix.

   ```bash
   curl --proto '=https' --tlsv1.2 -sSf -L https://raw.githubusercontent.com/incremental-design/dev-boxes/refs/heads/main/MacOS/install.sh | sh -s -- install
   ```

2. Reboot your computer.
3. Rebuild the configuration, to make sure that nix-darwin has been properly installed.

You might need to provide your password to complete this step.

```bash
curl --proto '=https' --tlsv1.2 -sSf -L https://raw.githubusercontent.com/incremental-design/dev-boxes/refs/heads/main/MacOS/install.sh | sh -s -- rebuild
```

## Uninstall nix-darwin

1. Ensure that `nixpkgs` channel and `nix-darwin` channel are set. If not, set them.

```bash
curl --proto '=https' --tlsv1.2 -sSf -L https://raw.githubusercontent.com/incremental-design/dev-boxes/refs/heads/main/MacOS/install.sh | sh -s -- uninstall
```

2. Reboot your computer.

## project structure

```
MacOS
|-- flake.lock
|
|-- flake.nix
|   --^-------------------
|   sets up launchd and
|   and starship user shell
|
|-- install.sh
|   --^--------------------
|   installs nix, nix-darwin
|   and flake.nix
|
|-- README.md
|
|-- starship.toml
|  --^------------------
|  configures the shell
|  prompt
|
'-- launchd
    |  ---^--------------
    |  For user agents that
    |  run on login, and
    |  daemons that run on
    |  start up
    |
    |-- default.nix
    |  ----^------------
    |  imports all other
    |  services
    |
    '-- samba.nix

```
