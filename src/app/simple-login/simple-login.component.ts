import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.scss']
})
export class SimpleLoginComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }

 users = [
   {id:1, name: "Edu", imgSrc: "../../assets/img/edu.jpg"},
   {id:2, name: "Léia", imgSrc: "../../assets/img/leia.jpg"},
 ]

 isLoaded = false;

  ngOnInit(): void {
  }

  verifyUser(userId: number,event: MouseEvent){
this.route.navigate(['home', userId])}

}
