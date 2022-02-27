import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimpleLoginComponent } from './simple-login/simple-login.component';

const routes: Routes = [
  {path:'', component: SimpleLoginComponent},
  {path:'home/:id', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
