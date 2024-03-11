#! /bin/bash
set -e   # quit on errors
set -x   # show step by step

### This script is intended to be run /locally/, and it should deploy craftranker on the remote machine
ssh droplet "cd /var/www/CraftRanker && git pull"
ssh droplet "/var/www/CraftRanker/deploy/manual_deploy.bash"
