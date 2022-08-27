import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../shared/services/location.service';
import { TimeService } from '../shared/services/time.service';
import { IUserInterface } from "../shared/interfaces/user.interface";
import { NavigationService } from '../shared/services/navigation.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  momentOfTheDay: string;
  userName: string;
  userID: any; 
  clientTime!: number;
  userLocation: any;

  menuOptions = [
    {id:1, name: "Alocação", redirectTo:'allocation' ,imgSrc: "../../assets/img/chart-round-icon.png"},
    {id:2, name: "Orçamento", redirectTo:'budget' ,imgSrc: "../../assets/img/chart-column-icon.png"},
    //{id:3, name: "Histórico", redirectTo:'history' ,imgSrc: "../../assets/img/chart-history-icon.png"},
    {id:4, name: "Investimentos", redirectTo:'dashboard' ,imgSrc: "../../assets/img/pig-investiments-logo.png"},

  ]
 
  constructor(
    private location: LocationService,
    private time: TimeService,
    private route: ActivatedRoute,
    private router: Router,
    private navigate: NavigationService
  ) { }


  ngOnInit(): void {
    this.getUserId();
    this.getUserLocationFromService();
    this.getCurrentMoment();
  }

  getUserId(){
    let user = localStorage.getItem("user-selected");
      this.setUserData(user);    
  }

  setUserData(userID: any){
    this.userID = userID
    switch(Number(userID)) { 
      case 1: { 
        this.userName = 'Edu'
         break; 
      } 
      case 2: { 
        this.userName = 'Léia'
         break; 
      } 
      default: { 
        this.userName = 'Visitante'
         break; 
      } 
   } 
  }

  getUserLocationFromService(){
    this.userLocation = this.location.getUserLocation()
  }

  getCurrentMoment(){
    this.momentOfTheDay = this.time.getCurrentMoment()
  }

  onMenuOptionClick(optionClicked: string){
    this.navigate.navigateTo(optionClicked)
  }
}
