#!/bin/bash
sudo chmod -R 777 /home/ec2-user/exam_alter_webapp
#navigate into our working directory where we have all our files

cd /home/ec2-user/exam_alter_webapp

#add npm and node
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[-s "$NVM_DIR/bash_completion"] && \. "$NVM_DIR/bash_completion"

npm install
node app.js > app.out.log 2> app.err.log < /dev/null &