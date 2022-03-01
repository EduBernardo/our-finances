import { WelcomeModalComponent } from './shared/components/welcome-modal/welcome-modal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimpleLoginComponent } from './simple-login/simple-login.component';
import { ResourceAllocationComponent } from './resource-allocation/resource-allocation.component';

const routes: Routes = [
  {path:'', component: WelcomeModalComponent},
  {path:'login', component:SimpleLoginComponent},
  {path:'home/:id', component: HomeComponent},
  {path:'allocation', component:ResourceAllocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
