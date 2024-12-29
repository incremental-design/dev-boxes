{
  config,
  pkgs,
  ...
}: let
  home = builtins.getEnv "HOME";
  smbConfigDir = builtins.toPath "${home}/.config/smb/";
  smbConfigFile = builtins.toPath "${smbConfigDir}/smb.conf";

  smbConfigExample = pkgs.writeText "smb.conf.example" ''
    # To use this file, copy it to ~/.config/smb/smb.conf

    [global]
    # Basic Settings
    workgroup = WORKGROUP
    server string = %h SMB Server
    security = user
    passdb backend = pam

    # Make samba discoverable on the network
    multicast dns register = yes

    # SMB Protocol Settings
    server min protocol = SMB3
    server max protocol = SMB3_11
    smb encrypt = required
    server signing = mandatory

    # macOS Optimizations (fruit)
    fruit:metadata = stream
    fruit:model = MacSamba
    fruit:posix_rename = yes
    fruit:veto_appledouble = no
    fruit:wipe_intentionally_left_blank_rfork = yes
    fruit:delete_empty_adfiles = yes
    fruit:zero_file_id = yes

    # Performance Tuning
    use sendfile = yes
    aio read size = 1
    aio write size = 1
    min receivefile size = 16384

    # Authentication
    map to guest = never

    # File System
    unix extensions = yes
    store dos attributes = yes
    ea support = yes
    vfs objects = catia fruit streams_xattr

    # Directory settings
    lock directory = ${smbConfigDir}/run/lock
    state directory = ${smbConfigDir}/run/state
    cache directory = ${smbConfigDir}/run/cache
    pid directory = ${smbConfigDir}/run/pid

    # Shares
    [%U]
    path = %H
    valid users = %U
    writable = yes
    browseable = yes
    read only = no
    create mask = 0644
    directory mask = 0755
    fruit:resource = file
    fruit:time machine = no
  '';

  onLogin = pkgs.writeShellApplication {
    name = "samba-on-login";
    runtimeInputs = with pkgs; [
      samba
      coreutils
      lsof
    ];
    text = ''
      # This script launches samba on login, and
      # gracefully shuts down samba on logout.
      #
      # to use it, add an smb.conf file to
      # ~/.config/smb. Specify the folders
      # you want to share in the smb.conf file.
      #
      # ~/
      #  '-- smb/
      #     |-- smb.conf         <--- your config
      #     '-- smb.conf.example <--- template
      #
      #   Tip: Use the smb.conf.example as a
      #        template for your smb.conf file.
      #
      # If you do not supply a smb.conf file,
      # then smb will not start.
      #
      # The samba server doesn't start until
      # you log in. If you don't log in, clients
      # will not be able to access your files.
      #
      # The samba server stops as soon as you
      # log out. It will kick off any clients
      # that are connected.
      #
      #  ______     ______     ______     ______
      # | User |   | Agent|   | Samba|   |Remote|
      # |__,___|   |__,___|   |__,___|   |___,__|
      #    |          |          |           |
      #    | login    |          |           |
      #    +--------->|          |           |
      #    |          |          |           |
      #    |          | run      |           |
      #    |          | on-login |           |
      #    |          +--------->|           |
      #    |          |          |           |
      #    |          | start    |           |
      #    |          | service  |           |
      #    |          +--------->|           |
      #    |          |          |           |
      #    |          |          |           |
      #    |          |          |<----------+
      #    |          |          |  connect  |
      #    |          |          |           |
      #    | logout   |          |           |
      #    +--------->|          |           |
      #    |          |          |           |
      #    |          | stop     |           |
      #    |          | service  |           |
      #    |          +--------->|           |
      #    |          |          |           |
      #    |          |          +---------->|
      #    |          |          |close-share|
      #    |          |          |           |
      #    |          |          |<----------+
      #    |          |          |   end     |
      #    |          |          |connection |
      #    |          |          |           |
      #    |          |          | wait 30s  |
      #    |          |          |           |
      #    |          |          +---------->|
      #    |          |          | drop      |
      #    |          |          |connection |
      #
      #
      # On shutdown, this script will:
      #  _______             ______
      # |Server |           |client|
      # |       +--close---->      |
      # |___,___|  share    |__,___|
      #     |                  |
      #   __|__                |
      #  |Wait |               |
      #  |30s  |               |
      #  |     <------response-'
      #  |__,__|
      #     |
      #     |
      #     V
      #   kill
      #
      #
      # THE SCRIPT WILL NOT WAIT FOR MORE
      # THAN 30s
      #  _______             ______
      # |Server |           |client|
      # |       +--close---->      |
      # |___,___|  share    |__,___|
      #     |                  |
      #   __|__                |
      #  |Wait |               |
      #  |30s  |               |
      #  |     |               |
      #  |__,__|               |
      #     |                  |
      #     |  X------response-'
      #     |      ---^------------
      #     V      Too late! Client
      #   kill     has to handle
      #            loss of connection
      #
      #
      # Therefore, you need to use a samba client that
      # can handle intermittent connectivity: i.e.
      #
      # Server     Mountain
      # Shutdown   Duck        Share
      #   |          |           |
      #   | Dis-     |           |
      #   | connect  |           |
      #   +--------->|           |
      #   |          | Switch    |
      #   |          | Offline   |
      #   |          +---------->|
      #   |          |           |
      #   |          | Queue     |
      #   |          | Changes   |
      #   |          +---------->|
      #   |          |           |
      #   | Next     |           |
      #   | Login    |           |
      #   +--------->|           |
      #   |          | Auto      |
      #   |          | Reconnect |
      #   |          +---------->|
      #   |          |           |
      #   |          | Sync      |
      #   |          | Changes   |
      #   |          +---------->|

      # FINDER ON MACOS DOES NOT DO THIS. Use mountain duck
      # or other clients that can handle this.
      #
      #

      log_info() {
        syslog -s -l notice "$1"
      }

      log_error() {
        syslog -s -l error "$1"
      }

      # make_smb_dirs_files creates this directory structure:
      #
      # ~/.config/smb
      # |-- smb.conf.example
      # |
      # '-- run
      #     |-- lock
      #     |
      #     |-- state
      #     |
      #     |-- cache
      #     |
      #     |-- pid
      #     |
      #     |-- private
      #     |
      #     |-- cores
      #     |
      #     '-- log
      #
      make_smb_dirs_files() {
        # Create config directory if it doesn't exist
        log_info "Creating config directory if needed"
        mkdir -p "$(dirname "${smbConfigDir}/run")" || {
          log_error "Failed to create config directory"
          return 1
        }

        cp -f ${smbConfigExample} "${smbConfigFile}.example"

        # Create runtime directories
        for dir in lock state cache pid private cores log; do
          mkdir -p "${smbConfigDir}/run/$dir" || {
            log_error "Failed to create runtime directory: $dir"
            return 1
          }
        done
      }

      continue_if_smb_conf_exists() {
        if [ ! -f "${smbConfigFile}" ]; then
          log_info "smb.conf does not exist, will not start samba"
          return 1
        fi
      }

      validate_smb_conf() {
        testparm -s --suppress-prompt "${smbConfigFile}"
      }

      continue_if_smb_ports_are_free() {
        # Get ports as space-separated list
        local ports="445"
        ports=$(testparm -s --parameter-name="ports" "${smbConfigFile}" 2> >(while IFS= read -r line; do
          log_info "$line"
        done))

        # Check each port
        for port in $ports; do
          if lsof -i ":$port" >/dev/null 2>&1; then
            log_error "Port $port is already in use"
            return 1
          fi
          log_info "Port $port is available"
        done

        return 0
      }

      validate_shares() {
        local share_no_exist=()
        local share_no_access=()

        # Get all share paths directly from testparm
        local paths
        if ! paths=$(testparm -s --suppress-prompt --parameter-name="path" "${smbConfigFile}"); then
          log_error "Failed to get share paths"
          return 1
        fi

        for path in $paths; do

          # Check if path exists
          if [ ! -e "$path" ]; then
            share_no_exist+=("$path")
            continue
          fi

          # Check if we have read/write access
          if [ ! -r "$path" ] || [ ! -w "$path" ]; then
            share_no_access+=("$path")
          fi
        done

        if [ ''${#share_no_exist[@]} -eq 0 ] && [ ''${#share_no_access[@]} -eq 0 ]; then
          return 0
        fi

        if [ ''${#share_no_exist[@]} -gt 0 ]; then
          log_error "The following shares do not exist: ''${share_no_exist[*]}"
        fi

        if [ ''${#share_no_access[@]} -gt 0 ]; then
          log_error "The following shares cannot be accessed: ''${share_no_access[*]}"
        fi

        return 1
      }

      make_smb_dirs_files || exit 1
      continue_if_smb_conf_exists || exit 0 # <- if no smb.conf, don't start samba, but don't error out either
      validate_smb_conf || exit 1
      continue_if_smb_ports_are_free || exit 1
      validate_shares || exit 1

      # Process smbd logs and redirect to appropriate log function
      process_smbd_logs() {
        while IFS= read -r line; do
          if [[ "$line" =~ ^.*error.*$ ]] || [[ "$line" =~ ^.*Error.*$ ]] || [[ "$line" =~ ^.*ERROR.*$ ]] || [[ "$line" =~ ^.*PANIC.*$ ]] || [[ "$line" =~ ^.*FATAL.*$ ]]; then
            log_error "$line"
          else
            log_info "$line"
          fi
        done
      }

      echo "Starting Samba server - requires authentication"
      sudo "${pkgs.samba}/bin/smbd" \
        --foreground \
        --no-process-group \
        --debug-stdout \
        --debuglevel=3 \
        -s "${smbConfigFile}" | process_smbd_logs
    '';
  };
in {
  environment.systemPackages = with pkgs; [
    samba
  ];
  launchd.agents.samba = {
    serviceConfig = {
      Label = "org.nixos.samba";
      ProgramArguments = ["${onLogin}/bin/samba-on-login"];
      RunAtLoad = true;
      KeepAlive = true;
      ProcessType = "Interactive";
      LimitLoadToSessionType = "Aqua";
    };
  };
}
# launchctl runs the samba user agent in the background
# of your login session
#
# launchctl lifecycle:
#
#  load
#   |
#   |  registers the service with launchd
#   |  but does not start it
#   |
#   V
# start
#   |
#   |  starts the service and runs
#   |  ProgramArguments
#   |
#   V
#  stop
#   |
#   |  stops the service but leaves
#   |  it registered with launchd
#   |
#   V
# unload
#   |
#   |  completely removes the service
#   |  from launchd
#   '
#
# to see agent status:
# `launchctl print user/$UID/org.nixos.samba | less`
#
# nix darwin loads and starts the agent on login.
#
# You can manually stop and unload the agent
# `launchctl stop user/$UID/org.nixos.samba && launchctl unload user/$UID/org.nixos.samba`
#
# Once you have unloaded the agend, you can manually reload and start it
# `launchctl load user/$UID/org.nixos.samba && launchctl start user/$UID/org.nixos.samba`

