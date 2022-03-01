import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../shared/services/location.service';
import { TimeService } from '../shared/services/time.service';
import { IUserInterface } from "../shared/interfaces/user.interface"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
 

  constructor(
    private location: LocationService,
    private time: TimeService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  userName: string;
  userID: any; 
  clientTime!: number;
  userLocation: any;


  ngOnInit(): void {
    this.getUserId();
    this.getUserLocationFromService();
    this.getCurrentTimeDate()
  }

  getUserId(){
      this.setUserData(this.route.snapshot.paramMap.get('id'));    
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

  getCurrentTimeDate(){
    this.clientTime = this.time.getCurrentTime()
  }

  handleBottomBarClick(buttonClicked: string){
    switch(buttonClicked) { 
      case 'back': { 
        window.history.back()
         break; 
      } 
      case 'home': { 
        window.location.reload()
         break; 
      }
      case 'account': { 
        this.router.navigate(['login'])
         break; 
      } 
      default: { 
         break; 
      } 
   } 
  }
}
