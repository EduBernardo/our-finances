import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { NavigationService } from '../shared/services/navigation.service';

@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.scss']
})
export class SimpleLoginComponent implements OnInit {

  constructor(
    private route: Router,
    private navigate: NavigationService
  ) { }

 users = [
   {id:1, name: "Edu", imgSrc: "../../assets/img/edu.jpg"},
   {id:2, name: "Léia", imgSrc: "../../assets/img/leia.jpg"},
 ]

 isLoaded = false;

  ngOnInit(): void {
      this.verifyPreviousUserSelection()
  }

  verifyPreviousUserSelection(){
    let user = localStorage.getItem("user-selected");
    let cameFromDialog = this.navigate.caller instanceof DialogComponent
    if (user !== '' && !cameFromDialog){
      this.navigateToHome()
    } else {
      return
    }
  }

  setUser(userId: number){
    localStorage.setItem("user-selected",String(userId))
    this.navigateToHome()
  }

  navigateToHome(){
    this.navigate.navigateTo('home');
  }

}
