import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.scss']
})
export class WelcomeModalComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(()=>{
    // this.route.navigate(['login'])
    }, 2500)
  }

}
