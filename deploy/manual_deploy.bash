#! /bin/bash
set -e
set -x

SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

# Go to top level directory
cd ${SCRIPTPATH}/..

# Grab the latest changes
git pull

# rebuild client
( cd reunion-ticketing && npm i && npm run build )
#npm run build


# You only need to do this once, so it is commented!
#cd reunion-server
#npm i
#pm2 start .
#pm2 save

( cd reunion-server && npm i && pm2 restart . )

