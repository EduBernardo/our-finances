import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  buttons = [
    {icon: "social_distance", id:'changeUser', name:'Mudar usuário'},
    {icon: "color_lens", id:'changeTheme', name:'Mudar tema'},
  ]

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  emitButtonClicked(buttonId: string){
    switch(buttonId) { 
      case 'changeUser': { 
        document.getElementById('dialogCloseButton')?.click()
        this.router.navigate(['login'])
         break; 
      } 
      case 'changeTheme': { 
        console.log(buttonId)
         break; 
      }
      default: { 
         break; 
      } 
   } 
    
  }
}
