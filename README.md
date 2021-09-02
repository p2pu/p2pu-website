# P2PU Website

This is the code for the home of P2PU, you can see it in action at [www.p2pu.org](https://www.p2pu.org/en/). The master branch is deployed to a persistent staging environment at [http://p2pu-staging.s3-website-us-east-1.amazonaws.com/en/](http://p2pu-staging.s3-website-us-east-1.amazonaws.com/en/).

## Updating content

Small changes are probably safe to do directly on the master branch, ex. updating the copy for a bio. But for most changes, you should

1. create a branch of master, 
1. make your changes in that branch and then 
1. submit a PR to merge your branch into master. 

This will setup a dynamic staging environment where you can preview your changes.

### Site Data
The following content items are stored in YML files in the `_data` directory: FAQs, facilitator profiles, facilitator resources, funders, partners, people, presentations, projects, and the navigation items.

### Facilitator profiles
To change the facilitor profiles, edit the text in the file `/_data/facilitators.yml`.

The corresponding images are in `assets/images/facilitate`. The images should have a *maximum width of 2160px and a minimum width of 660px*.

The number of facilitator profiles available in the rotation should be updated in `assets/js/facilitate.js`.

## Development

All development should happen on a branch forked from master.

For development on your local workstation, you need [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)

### Building the site

Run the following command to get the needed data from the site:
```
curl https://learningcircles.p2pu.org/api/teams/ -o ./_data/teams.json
cat _data/teams.json | docker run -i --rm -v `pwd`:/opt/app -w /opt/app python:3-slim python3 _deploy/team_pages.py
```

Install node deps:

```
docker-compose run --rm node npm i
```

Install ruby deps:

```
mkdir .bundler
chown 1000:1000 .bundler
docker-compose run --rm jekyll bundle install
```

Start the server and webpack
```
docker-compose up
```

### Overview

This is a static website that uses a few different APIs to provide user interaction with live data.

- Jekyll static site
- Uses [p2pu-theme](https://github.com/p2pu/p2pu-theme) based on bootstrap 4 for styling
- Live users interaction using [p2pu-components](https://github.com/p2pu/p2pu-components/) for finding learning circles and courses.
- Live data pulled from API: https://learningcircles.p2pu.org
- Data also pulled from API during static website build
- GitHub action to build and deploy site
- Hosted on AWS S3, behind a CloudFront CDN

### Dynamic staging environments

- To setup a dynamic staging environment, create a new branch off master and submit a PR to master. There is a GitHub Action that will create a temporary staging environment. Once the environment is set up, the action will add the URL to the description of the PR.

### Deploying changes to production

- To deploy changes to production, create a PR from the master branch to the release branch. Once all checks passed, you can merge the PR and a GitHub Action will deploy the site.


.
