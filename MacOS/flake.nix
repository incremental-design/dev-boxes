{
  description = "Ajay's Darwin system flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    nix-darwin.url = "github:LnL7/nix-darwin";
    nix-darwin.inputs.nixpkgs.follows = "nixpkgs";
    home-manager.url = "github:nix-community/home-manager";
    home-manager.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = inputs @ {
    self,
    nix-darwin,
    nixpkgs,
    home-manager,
  }: let
    name = builtins.getEnv "USER";
    home = builtins.getEnv "HOME";
    configuration = {pkgs, ...}: {
      # List packages installed in system profile. To search by name, run:
      # $ nix-env -qaP
      environment.systemPackages = [
      ];

      # Auto upgrade nix package and the daemon service.
      services.nix-daemon.enable = true;

      # Necessary for using flakes on this system.
      nix.settings.experimental-features = "nix-command flakes";
      nix.settings.extra-experimental-features = "";

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

      # let nix-darwin pilot home manager for these users
      users.users.${name} = {
        name = name;
        home = home;
      };
    };
  in {
    # Build darwin flake using:
    # $ darwin-rebuild build --flake .#arm
    darwinConfigurations."arm" = nix-darwin.lib.darwinSystem {
      modules = [
        configuration
        home-manager.darwinModules.home-manager
        {
          home-manager.useGlobalPkgs = true;
          home-manager.useUserPackages = true;
          home-manager.users.${name} = {
            # pin home manager to version 23.11
            home.stateVersion = "23.11";
            # let home manager update itself for this user
            programs.home-manager.enable = true;
            # enable and configure starship
            home.file.".config/starship.toml" = {
              # copy starship.toml into ~/.config/starship.toml
              source = ./starship.toml;
            };
            programs.zsh = {
              enable = true;
            };
            programs.bash = {
              enable = false;
            };
            programs.starship = {
              enable = true;
              enableZshIntegration = true;
              enableBashIntegration = false;
            };
          };
        }
      ];
    };

    # TODO: darwin-rebuild --flake .#x86

    # Expose the package set, including overlays, for convenience.
    darwinPackages = self.darwinConfigurations."arm".pkgs;
  };
}
# to rebuild this flake, `darwin-rebuild switch --impure --flake .#arm` on an aarch64-darwin mac, `darwin-rebuild switch --impure --flake .#x86` on an x86_64-darwin mac

