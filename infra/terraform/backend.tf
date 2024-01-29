terraform {
  backend "remote" {
    organization = "our-finances"

    workspaces {
      name = "our-finances"
    }
  }
}
