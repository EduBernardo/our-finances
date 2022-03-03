import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeModalComponent } from './components/welcome-modal/welcome-modal.component';
import { LocationService } from './services/location.service';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { UserOptionsComponent } from '../user-options/user-options.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AccordionComponent } from '../shared/components/accordion/accordion.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';




let components = [
  WelcomeModalComponent,
  BottomBarComponent,
  UserOptionsComponent,
  HeaderComponent,
  AccordionComponent,
  DialogComponent
]

let modules = [
  CommonModule,
  CdkAccordionModule,
  MatDialogModule
]

@NgModule({
  declarations: components,
  imports: modules,
  providers:[
    LocationService
  ],
  exports: components
})
export class SharedModule { }
