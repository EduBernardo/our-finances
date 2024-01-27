import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  caller: any;

  constructor(
    private router: Router,
  ) { }

  navigateTo(destiny: string ,caller?: any) {
    this.caller = caller;
    this.router.navigate([destiny]); 
  }
  
}
