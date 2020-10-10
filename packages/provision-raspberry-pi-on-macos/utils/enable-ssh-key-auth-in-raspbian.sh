#!/bin/bash

sed -i 's/#PubkeyAuthentication yes/PubkeyAuthenication yes/' /etc/ssh/sshd_config
sed -i 's/#ListenAddress 0.0.0.0/ListenAddress 0.0.0.0/' /etc/ssh/sshd_config
sed -i 's/#Port 22/Port 22/' /etc/ssh/sshd_config
sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config 

mkdir /home/pi/.ssh
chmod 700 /home/pi/.ssh
chown pi /home/pi/.ssh

mv /boot/authorized_keys /home/pi/.ssh/authorized_keys
chmod 644 /home/pi/.ssh/authorized_keys
chown pi /home/pi/.ssh/authorized_keys

service ssh restart