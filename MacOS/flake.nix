{
  description = "Ajay's Darwin system flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    nix-darwin.url = "github:LnL7/nix-darwin";
    nix-darwin.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = inputs @ {
    self,
    nix-darwin,
    nixpkgs,
  }: let
    configuration = {pkgs, ...}: {
      # List packages installed in system profile. To search by name, run:
      # $ nix-env -qaP
      environment.systemPackages = [
      ];

      # Auto upgrade nix package and the daemon service.
      services.nix-daemon.enable = true;

      # Necessary for using flakes on this system.
      nix.settings.experimental-features = "nix-command flakes";

      # Create /etc/zshrc that loads the nix-darwin environment.
      programs.zsh.enable = true; # default shell on MacOS

      # Set Git commit hash for darwin-version.
      system.configurationRevision = self.rev or self.dirtyRev or null;

      # Used for backwards compatibility, please read the changelog before changing.
      # $ darwin-rebuild changelog
      system.stateVersion = 1;

      # The platform the configuration will be used on.
      nixpkgs.hostPlatform = "aarch64-darwin";

      # use touch ID for sudo
      security.pam.enableSudoTouchIdAuth = true;

      # use direnv to launch development environments. see: https://daiderd.com/nix-darwin/manual/index.html#opt-programs.direnv.enable
      programs.direnv.enable = true;
    };
  in {
    # Build darwin flake using:
    # $ darwin-rebuild build --flake .#arm
    darwinConfigurations."arm" = nix-darwin.lib.darwinSystem {
      modules = [configuration];
    };

    # TODO: darwin-rebuild --flake .#x86

    # Expose the package set, including overlays, for convenience.
    darwinPackages = self.darwinConfigurations."arm".pkgs;
  };
}
# to rebuild this flake, `darwin-rebuild switch --flake .#arm` on an aarch64-darwin mac, `darwin-rebuild switch --flake .#x86` on an x86_64-darwin mac

