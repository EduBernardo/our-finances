terraform {
       backend "remote" {
         organization = "our-finances"

         workspaces {
           name = "our-finances"
         }
       }
     }

     resource "null_resource" "example" {
       triggers = {
         value = "Iniciou o provisionamento!"
       }
     }