# P2PU Website

This is the P2PU website, life at [www.p2pu.org](https://www.p2pu.org/en/). The master branch is a persistent staging environment and deployed to [http://p2pu-staging.s3-website-us-east-1.amazonaws.com/en/](http://p2pu-staging.s3-website-us-east-1.amazonaws.com/en/)

To make any changes, 
1. create a branch of master, 
1. make your changes in that branch and then 
1. submit a PR to merge your branch into master. 

## Updating content

### Site Data
The following content items are stored in YML files in the `_data` directory: FAQs, facilitator profiles, facilitator resources, funders, partners, people, presentations, projects, and the navigation items.

### Facilitator profiles
To change the facilitor profiles, edit the text in the file `/_data/facilitators.yml`.

The corresponding images are in `assets/images/facilitate`. The images should have a *maximum width of 2160px and a minimum width of 660px*.

The number of facilitator profiles available in the rotation should be updated in `assets/js/facilitate.js`.

## Development

### Overview

- Jekyll static site
- CSS generated from customized bootstrap SCSS files
- React components for user interaction
- Live data pulled from API: learningcircles.p2pu.org
- Data also pulled from API during static website build

## Dynamic staging environments

- To setup a dynamic staging environment, create a new branch off master and submit a PR to master. There is a GitHub Action that will create a temporary staging environment. Once the environment is set up, the action will add the URL to the description of the PR.

## Deploying changes to production

- To deploy changes to production, create a PR from the master branch to the release branch. Once all checks passed, you can merge the PR and a GitHub Action will deploy the site.
