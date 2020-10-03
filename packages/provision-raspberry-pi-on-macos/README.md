# Provision Rasbperry Pi on MacOS

Utility for provisioning an image of raspbian, without using a raspberry pi.

This script works on macOS 10.15. It installs brew, QEMU, and Ansible. Then it downloads raspbian, boots it with QEMU, and provisions it with Ansible.

The script installs the following tools onto the Raspberry Pi:

1. k3s
2. termshark
3. tmux
4. htop
5. iperf
6. nmap
7. ssh
8. nginx
9. tailscale

It also provisions a user that you can log into the Pi with.