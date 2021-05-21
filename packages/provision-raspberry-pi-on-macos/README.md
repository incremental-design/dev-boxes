# Provision Rasbperry Pi on MacOS

Utility for provisioning an image of raspbian, without using a raspberry pi.

# How to use:

1. Make sure this directory is on a volume that has at least 450MB of space.
2. Go to your terminal, then `cd` into this project, and then `chmod +x *.sh && chmod -x enable-ssh-key-auth-in-raspbian.sh`.
3. Run `utils/install-brew-qemu-ansible.sh`.
4. Run `ansible-playbook utils/download-and-boot-raspbian.yml -i utils/inventory.yml`

If there is enough space to download an image of Raspberry Pi OS, then the ansible playbook will download it, boot it, provision it, and then tell you where to access it. Now is a good time to get lunch, because this will take up to an hour to complete.

# What this script does:

The script installs the following tools onto the Raspberry Pi:

1. tshark
2. tmux
3. mosh
4. nmap
5. iperf
6. htop

It also provisions a user that you can log into the Pi with.

# Compatibility:

This script works on an intel macOS 10.15 and intel macOS 11. It installs brew, QEMU, and Ansible. Then it downloads raspbian, boots it with QEMU, and provisions it with Ansible.

I have no idea if this works on an M-series Mac. I might use a CI tool to spin it up on an M1 mac and see if it runs at some point.
