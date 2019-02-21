#!/usr/bin/env bash
set -e # halt script on error

echo "mapbox_access_token: '$MAPBOX_ACCESS_TOKEN'" > ./_production.yml
docker run --rm -it --volume `pwd`:/opt/app --workdir /opt/app node:carbon-alpine /bin/sh -c "npm install && npm run build"
bundle exec jekyll build --config _config.yml,_production.yml
docker run --name=site -d --volume `pwd`/_site:/var/www node:carbon-alpine /bin/sh -c "npm i serve && npx serve /var/www"
docker run --rm -it --link site --volume `pwd`:/opt/app --workdir /opt/app -e TEST_SERVER_URL=http://site:5000 p2pu/puppeteer-docker /bin/sh -c "npm install --only=dev && npm run test"
