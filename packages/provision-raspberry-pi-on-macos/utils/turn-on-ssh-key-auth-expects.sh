#!/usr/bin/expect

set timeout 8

spawn ./turn-on-ssh-key-auth.sh

expect "*password: "

send raspberry\n

expect 'pi@raspberrypi:~ $ '

send "sudo su\n"

expect "root@raspberrypi:*"

send "/boot/enable-ssh-key-auth-in-raspbian.sh\n"

expect "root@raspberrypi:*"