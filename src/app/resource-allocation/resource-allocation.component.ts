import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resource-allocation',
  templateUrl: './resource-allocation.component.html',
  styleUrls: ['./resource-allocation.component.scss']
})
export class ResourceAllocationComponent implements OnInit {
  userID: string | null;
  chartUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.chartUrl = this.userID == '1' ? '../../assets/img/chart_dark_theme.png' : '../../assets/img/chart_light_theme.png';
  }

  handleBottomBarClick(buttonClicked: string){
    switch(buttonClicked) { 
      case 'back': { 
        window.history.back()
         break; 
      } 
      case 'home': { 
        this.router.navigate(['home', this.userID])
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
