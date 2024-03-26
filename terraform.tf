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

resource "aws_s3_bucket_public_access_block" "public_access_block" {
  bucket = "p2pu-website-${random_pet.bucket.id}"
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "public_read" {
  bucket = "p2pu-website-${random_pet.bucket.id}"
  policy = data.aws_iam_policy_document.allow_public_access.json
}

data "aws_iam_policy_document" "allow_public_access" {
  statement {
    principals {
      type        = "*"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${random_pet.bucket.arn}/*",
    ]
  }
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
