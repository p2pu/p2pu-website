# Live reload tools - it is making my development faster

# Run bundle

source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']

gem 'guard', '=2.8.0'
gem 'guard-jekyll-plus'
gem 'guard-livereload'

gem 'jekyll'
gem 'jekyll-redirect-from'
gem 's3_website'