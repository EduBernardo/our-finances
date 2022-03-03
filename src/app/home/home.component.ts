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
  momentOfTheDay: string;
  userName: string;
  userID: any; 
  clientTime!: number;
  userLocation: any;

  menuOptions = [
    {id:1, name: "Alocação", imgSrc: "../../assets/img/chart-round-icon.png"},
    {id:2, name: "Orçamento", imgSrc: "../../assets/img/chart-column-icon.png"},
    {id:3, name: "Histórico", imgSrc: "../../assets/img/chart-history-icon.png"},
    {id:4, name: "Investimentos", imgSrc: "../../assets/img/chart-investments-logo.png"},

  ]
 
  constructor(
    private location: LocationService,
    private time: TimeService,
    private route: ActivatedRoute,
    private router: Router

  ) { }


  ngOnInit(): void {
    this.getUserId();
    this.getUserLocationFromService();
    this.getCurrentMoment();
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

  getCurrentMoment(){
    this.momentOfTheDay = this.time.getCurrentMoment()
  }

  onMenuOptionClick(optionClicked: number){
    switch(optionClicked) { 
      case 1: { 
        this.router.navigate(['allocation', this.userID])
         break; 
      } 
      case 2: { 
        this.router.navigate(['budget', this.userID])
         break; 
      }
      case 3: { 
        this.router.navigate(['history', this.userID])
         break; 
      }
      case 4: { 
        this.router.navigate(['dashboard', this.userID])
         break; 
      }
      default: { 
         break; 
      } 
   } 
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
