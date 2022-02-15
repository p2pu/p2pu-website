terraform {
  backend "s3" {
    bucket = "sysadmin"
    region = "us-east-1"
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "random_pet" "bucket" {}

resource "aws_s3_bucket" "website_bucket" {
  bucket = "p2pu-website-${random_pet.bucket.id}"
  force_destroy = true
}

resource "aws_s3_bucket_acl" "website_bucket_acl" {
  bucket = "p2pu-website-${random_pet.bucket.id}"
  acl    = "public-read"
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = "p2pu-website-${random_pet.bucket.id}"

  index_document {
    suffix = "index.html"
  }
}

output "site_url" {
  value = aws_s3_bucket_website_configuration.website.website_endpoint
}

output "bucket" {
  value = aws_s3_bucket_website_configuration.website.bucket
}
