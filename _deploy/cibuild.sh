#!/usr/bin/env bash
set -e # halt script on error

echo "mapbox_access_token: '$MAPBOX_ACCESS_TOKEN'" > ./_production.yml
docker run --rm -it --volume `pwd`:/opt/app --workdir /opt/app node:12-buster-slim /bin/sh -c "npm install && npm run build"
curl https://learningcircles.p2pu.org/api/teams/ -o ./_data/teams.json
cat ./_data/teams.json | python3 script/team_pages.py
bundle exec jekyll build --config _config.yml,_production.yml
docker run --name=site -d --volume `pwd`/_site:/var/www node:12-buster-slim /bin/sh -c "npm i serve && npx serve /var/www"
docker run --rm -it --link site --volume `pwd`:/opt/app --workdir /opt/app -e TEST_SERVER_URL=http://site:5000 p2pu/puppeteer-docker /bin/sh -c "npm install --only=dev && npm run test"

