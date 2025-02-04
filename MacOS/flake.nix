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
    arch = builtins.getEnv "ARCH";
    configuration = {pkgs, ...}: {
      # List packages installed in system profile. To search by name, run:
      # $ nix-env -qaP
      environment.systemPackages = [
        pkgs.jq
        pkgs.htop
        pkgs.nmap
        pkgs.yq-go
        pkgs.glow
        pkgs.vhs
        pkgs.fx
        pkgs.dive
        pkgs.granted
      ];

      # Configure fonts
      fonts.packages = with pkgs; [
        nerd-fonts.jetbrains-mono
      ];

      # https://nix-community.github.io/home-manager/options.xhtml#opt-programs.zsh.enableCompletion
      environment.pathsToLink = ["/share/zsh"];

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
      nixpkgs.hostPlatform = arch;

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
    darwinConfigurations."default" = nix-darwin.lib.darwinSystem {
      modules = [
        configuration
        home-manager.darwinModules.home-manager
        {
          home-manager.useGlobalPkgs = true;
          home-manager.useUserPackages = true;
          home-manager.users.${name} = {pkgs, ...}: {
            # pin home manager to version 23.11
            home.stateVersion = "23.11";
            # let home manager update itself for this user
            programs.home-manager.enable = true;

            # Configure fonts
            fonts.fontconfig.enable = true;

            # enable and configure starship
            home.file.".config/starship.toml" = {
              # copy starship.toml into ~/.config/starship.toml
              source = ./starship.toml;
            };

            # https://nix-community.github.io/home-manager/options.xhtml#opt-programs.zsh.enable
            programs.zsh = {
              enable = true;
              enableCompletion = true;
              syntaxHighlighting.enable = true;
              autosuggestion = {
                enable = true;
                highlight = "fg=black,bg=#8aa0f9,bold,underline";
              };
              shellAliases = {
                # We need to set GRANTED_ALIAS_CONFIGURED=true before sourcing .assume-wrapped
                # because the sourced script NEEDS it to be set to true, but also insists on
                # unsetting it when it runs. i.e.:
                #
                #  Terminal
                #     |
                #  assume command
                #     |
                #     |-> export GRANTED_ALIAS_CONFIGURED="true"
                #     |    |
                #     |    '-> assumego sees this is true
                #     |
                #     '-> source .assume-wrapped
                #          |
                #          '-> script can unset the var, but assumego
                #              has already seen what it needed to see
                assume = ''
                  export GRANTED_ALIAS_CONFIGURED="true" && source ${pkgs.granted}/bin/.assume-wrapped
                '';
              };
              initExtra = ''
                # match case insensitive
                zstyle ':completion:*' matcher-list 'm:{a-z}={A-Za-z}'

                # see: https://github.com/Aloxaf/fzf-tab/tree/master?tab=readme-ov-file#configure
                # disable sort when completing `git checkout`
                zstyle ':completion:*:git-checkout:*' sort false
                # set descriptions format to enable group support
                # NOTE: don't use escape sequences here, fzf-tab will ignore them
                zstyle ':completion:*:descriptions' format '[%d]'
                # set list-colors to enable filename colorizing
                zstyle ':completion:*' list-colors ''${(s.:.)LS_COLORS}
                # force zsh not to show completion menu, which allows fzf-tab to capture the unambiguous prefix
                zstyle ':completion:*' menu no
                # preview directory's content with eza when completing cd
                zstyle ':fzf-tab:complete:cd:*' fzf-preview 'eza -1 --color=always $realpath'
                # switch group using `<` and `>`
                zstyle ':fzf-tab:*' switch-group '<' '>'
              '';
              envExtra = ''
                export GRANTED_ALIAS_CONFIGURED="true"
              '';
              history = {
                ignoreAllDups = true;
                ignoreSpace = true; # put a space before a command to keep it from being entered into history
                share = true;
              };
              historySubstringSearch = {
                enable = true;
              };
              plugins = [
                {
                  name = "fzf-tab";
                  src = pkgs.fetchFromGitHub {
                    owner = "Aloxaf";
                    repo = "fzf-tab";
                    rev = "v1.1.2";
                    sha256 = "Qv8zAiMtrr67CbLRrFjGaPzFZcOiMVEFLg1Z+N6VMhg=";
                  };
                }
              ];
            };

            programs.bash = {
              enable = false;
            };
            programs.starship = {
              enable = true;
              enableZshIntegration = true;
              enableBashIntegration = false;
            };
            # see: https://github.com/ryan4yin/nix-darwin-kickstarter/blob/a458236698cd2e4e39d9e22b0874b54c9b18f98f/rich-demo/home/core.nix#L48
            programs.eza = {
              enable = true;
              git = true;
              icons = "auto";
            };
            programs.bat = {
              enable = true;
              config = {
                theme = "base16-256";
              };
            };
            programs.fzf = {
              enable = true;
              enableZshIntegration = true;
            };
            programs.zoxide = {
              enable = true;
              enableZshIntegration = true;
            };
          };
        }
      ];
    };

    # Expose the package set, including overlays, for convenience.
    darwinPackages = self.darwinConfigurations."default".pkgs;
  };
}
# to rebuild this flake, `ARCH=$(sysctl -n machdep.cpu.brand_string | grep -q "Apple M1" && echo "aarch64-darwin" || echo "x86_64-darwin") darwin-rebuild switch --impure --flake .#default`
# to clean up old generations `sudo nix-collect-garbage -d`
# to list generations `darwin-rebuild --list-generations`

