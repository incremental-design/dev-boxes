{
  config,
  pkgs,
  ...
}: {
  imports = [
    ./samba.nix
    # Add other service configurations here
  ];
}
