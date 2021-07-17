#!/bin/bash

#download node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/ .nvm/nvm.sh
nvm install node


#creating directory
DIR="/home/ec2-user/exam_alter_webapp"
if [-d "$DIR"]; then
    echo "${DIR} exists"

else 
    echo "creating dir"
    mkdir ${DIR}

fi