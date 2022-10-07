import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleLoginRoutingModule } from './simple-login-routing.module';
import { SimpleLoginComponent } from './simple-login.component';


@NgModule({
  declarations: [
    SimpleLoginComponent
  ],
  imports: [
    CommonModule,
    SimpleLoginRoutingModule
  ]
})
export class SimpleLoginModule { }
