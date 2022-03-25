import { Component, OnInit } from '@angular/core';
import { themes, UserThemeService } from '../../services/user-theme.service';
import { NavigationService } from '../../services/navigation.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  buttons = [
    {icon: "social_distance", id:'changeUser', name:'Trocar usuário'},
    {icon: "color_lens", id:'changeTheme', name:'Trocar tema'},
  ]

  get activeTheme(){
    return this.themeService.theme;
  }

  constructor(
    private themeService: UserThemeService,
    private navigate: NavigationService
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
    this.navigate.navigateTo('login', this);
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
  }
}
