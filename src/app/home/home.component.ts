import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/services/location.service';
import { TimeService } from '../shared/services/time.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
 

  constructor(
    private location: LocationService,
    private time: TimeService
  ) { }

 user = {
    name:"Eduardo Bernardo",
    location:"",
  };
  
  serverTime!: number;


  ngOnInit(): void {
    this.getUserLocationFromService();
    this.getCurrentTimeDate()
  }

  getUserLocationFromService(){
    this.user.location = this.location.getUserLocation()
  }

  getCurrentTimeDate(){
    this.serverTime = this.time.getCurrentTime()
  }
}
