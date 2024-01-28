terraform {
  backend "remote" {
    organization = "our-finances"

    workspaces {
      name = "our-finances"
    }
  }
}

resource "aws_s3_bucket" "example" {
  bucket = "our-finances-s3"
}


