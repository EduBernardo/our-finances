terraform {
      backend "remote" {
        organization = "dedronlabdevopscloud"

        workspaces {
          name = "devopslab-infra"
        }
      }
    }

    resource "null_resource" "example" {
      triggers = {
        value = "A example resource that does nothing!"
      }
    }