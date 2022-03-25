import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { themes, UserThemeService } from '../../services/user-theme.service'

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

  get activeTheme(){
    return this.themeService.theme;
  }

  constructor(
    private router : Router,
    private themeService: UserThemeService
  ) { }

  ngOnInit(): void {
  }

  emitButtonClicked(buttonId: string){
    switch(buttonId) { 
      case 'changeUser': { 
        this.navigateToLogin()
        break; 
      } 
      case 'changeTheme': 
        this.changeUserTheme()
        break; 
      default: { 
         break; 
      } 
   } 
  }

  navigateToLogin(){
    document.getElementById('dialogCloseButton')?.click()
    this.router.navigate(['login'])
  }

  changeUserTheme(){
    switch(this.themeService.theme.name){
      case 'Dark theme':{
        this.themeService.theme = themes[1];
        break;
      }
      case 'Light theme':{
        this.themeService.theme = themes[0];
        break;
      }
    }
    console.log(this.themeService.theme)
  }
}
