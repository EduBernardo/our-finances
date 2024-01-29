locals {
  s3_origin_id   = "${var.bucket_name}-origin"
  s3_domain_name = aws_s3_bucket.our-finances-s3.bucket_domain_name
}

resource "aws_cloudfront_origin_access_identity" "this" {
  comment = "OAI to allow connection between CF and bucket S3"
}

resource "aws_cloudfront_distribution" "this" {
  enabled = true

  origin {
    origin_id   = local.s3_origin_id
    domain_name = local.s3_domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.this.cloudfront_access_identity_path
    }
  }


  default_cache_behavior {

    target_origin_id = local.s3_origin_id
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]

    forwarded_values {
      query_string = true

      cookies {
        forward = "all"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  price_class = "PriceClass_200"

}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.our-finances-s3.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.this.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "this" {
  bucket = aws_s3_bucket.our-finances-s3.id
  policy = data.aws_iam_policy_document.s3_policy.json
}
