import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.scss']
})
export class WelcomeModalComponent implements OnInit {

  constructor(
    private navigate: NavigationService
  ) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.navigate.navigateTo('login');
    }, 2500)
  }

}
