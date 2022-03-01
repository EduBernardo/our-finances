import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resource-allocation',
  templateUrl: './resource-allocation.component.html',
  styleUrls: ['./resource-allocation.component.scss']
})
export class ResourceAllocationComponent implements OnInit {
  userID: string | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id')
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
