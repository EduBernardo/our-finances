terraform {
  backend "remote" {
    organization = "our-finances"

    workspaces {
      name = "our-finances"
    }
  }
}

resource "aws_s3_bucket" "our-finances-s3" {
  bucket = "our-finances-s3"
}

resource "aws_s3_bucket_website_configuration" "our-finances-s3" {
  bucket = aws_s3_bucket.our-finances-s3.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_versioning" "our-finances-s3" {
  bucket = aws_s3_bucket.our-finances-s3.id
  versioning_configuration {
    status = "Enabled"
  }
}

# S3 bucket ACL access

resource "aws_s3_bucket_ownership_controls" "our-finances-s3" {
  bucket = aws_s3_bucket.our-finances-s3.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "our-finances-s3" {
  bucket = aws_s3_bucket.our-finances-s3.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "our-finances-s3" {
  depends_on = [
    aws_s3_bucket_ownership_controls.our-finances-s3,
    aws_s3_bucket_public_access_block.our-finances-s3,
  ]

  bucket = aws_s3_bucket.our-finances-s3.id
  acl    = "public-read"
}




# s3 static website url

output "website_url" {
  value = "http://${aws_s3_bucket.our-finances-s3.bucket}.s3-website.sa-east-1.amazonaws.com"
}


