#!/bin/bash

#This script checks to see if you have brew installed. If not, it installs it. After that, it uses brew to install ansible and QEMU.

#TODO: check this script in a MacOS VM

#------------- Cleanup -------------

# This section contains all of the logic needed to return the environment to its previous state upon exiting. The reason the cleanup function is first in this script is because it needs to run, even if the script is killed before the shell has a chance to execute each line.

clean-up () {

    if [ "$SCRIPT_IS_DONE" -eq 0 ] # If unclean exit, run all commands in SCRIPT_UNDO ↓ in the reverse order that they were added to the array in.
    then
        for (( i=${#SCRIPT_UNDO[@]} ; i>0 ; i-- ))
        do
            INDEX=$(( $i-1 ))
            ${SCRIPT_UNDO[$INDEX]}
        done
    fi

        # ← unset your variables here.

}

trap clean-up EXIT

#------------ Variables -------------

SCRIPT_IS_DONE=0
SCRIPT_UNDO=()

#--------- Helper Functions ---------

# This section contains all of repeated pieces of logic needed to run the "Main Script" ↓. Helper functions abstract away repeated subroutines and frequently-used branches of execution. If you find yourself copying-and-pasting one or more instructions, put them in a function so that your code doesn't turn into copypasta.

check-os () {

    which sw_vers &>/dev/null
    if [ $? -eq 0 ]; then
        #this is a macOS, check which version
        sw_vers -productVersion | grep "10.15\|11" &>/dev/null
        if [ $? -ne 0 ]; then
            #this is not macOS 10.15
            printf "\nSorry, this script only works on \e[1mMacOS 10.15\e[0m." | fold -w $(tput cols) 1>&2
            exit 1 #catchall
        fi
    else
        #this is not macOS
        printf "\nSorry, this script only works on \e[1mMacOS\e[0m.\n" | fold -w $(tput cols) 1>&2
        exit 1 #catchall
    fi

}


install-brew () {

    which brew &>/dev/null
    if [ $? -ne 0 ]; then
        #brew not installed, install it
        printf "\n\e[1mBrew\e[0m is not installed. Installing it now." | fold -w $(tput cols) 1>&2
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    fi

}


install-qemu () {

    brew list qemu &>/dev/null
    if [ $? -ne 0 ]; then
        #qemu is not installed, install it
        brew install qemu
    fi

}

install-ansible () {

    which ansible &>/dev/null
    if [ $? -ne 0 ]; then
        brew install ansible
    fi

}

install-ansible-collections () {
    ansible-galaxy collection install community.general
}

#----------- Main Script -----------
check-os
install-brew
install-qemu
install-ansible
install-ansible-collections
SCRIPT_IS_DONE=1 # DO NOT DELETE THIS LINE ... the "clean-up" function ↑ needs it in order to know whether or not it should undo changes made by this script.