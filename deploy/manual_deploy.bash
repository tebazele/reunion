#! /bin/bash
set -e
set -x

SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

# Go to top level directory
cd ${SCRIPTPATH}/..

# Grab the latest changes
git pull

# rebuild client
cd frontend
npm run build

# rerun uwsgi (from systemd)
cd ${SCRIPTPATH}
cp craftranker.service /etc/systemd/system/
systemctl daemon-reload
systemctl restart craftranker

# Not sure I really want to manually update nginx, not sure how that will play
# with certbot automatically renewing our nginx certificates.
#cp nginx.jeanneallen.us /etc/nginx/sites-available/jeanneallen.us

chown www-data:www-data /var/www/CraftRanker/backend/instance/db.sqlite
