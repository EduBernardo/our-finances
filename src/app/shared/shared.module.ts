import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeModalComponent } from './components/welcome-modal/welcome-modal.component';
import { LocationService } from './services/location.service';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';

let components = [
  WelcomeModalComponent,
  BottomBarComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  providers:[
    LocationService
  ],
  exports: components
})
export class SharedModule { }
