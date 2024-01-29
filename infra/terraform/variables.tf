variable "aws_access_key" {
  type      = string
  sensitive = true
}

variable "aws_secret_key" {
  type      = string
  sensitive = true
}

variable "region" {
  type = string
  default = "sa-east-1"
}

variable "bucket_name" {
  type = string
  default = "our-finances-s3"
}
