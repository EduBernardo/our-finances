import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeModalComponent } from './components/welcome-modal/welcome-modal.component';
import { LocationService } from './services/location.service';



@NgModule({
  declarations: [
    WelcomeModalComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    LocationService
  ]
})
export class SharedModule { }
