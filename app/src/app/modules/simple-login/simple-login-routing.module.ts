import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleLoginComponent } from './simple-login.component';

const routes: Routes = [{ path: '', component: SimpleLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleLoginRoutingModule { }
