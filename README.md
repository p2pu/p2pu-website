# P2PU Website

Staging status: [![](https://travis-ci.org/p2pu/p2pu-website.svg)](https://travis-ci.org/p2pu/p2pu-website)

Deploy status: [![](https://travis-ci.org/p2pu/p2pu-website.svg?branch=release)](https://travis-ci.org/p2pu/p2pu-website)

Built using Jekyll and deployed to AWS Cloudfront using TravisCI

gh-pages branch is staging and is deployed to [http://p2pu-staging.s3-website-us-east-1.amazonaws.com/en/](http://p2pu-staging.s3-website-us-east-1.amazonaws.com/en/)

Live website is deployed to [p2pu.org](https://p2pu.org/en/)

## Editing content

#### Site Data

The following content items are stored in YML files in the `_data` directory: FAQs, facilitator profiles, facilitator resources, funders, partners, people, presentations, projects, and the navigation items.


#### Facilitator profiles
To change the facilitor profiles, edit the text in the file `/_data/facilitators.yml`.

The corresponding images are in `assets/images/facilitate`. The images should have a *maximum width of 2160px and a minimum width of 660px*.

The number of facilitator profiles available in the rotation should be updated in `assets/js/facilitate.js`.




