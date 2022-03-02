import { WelcomeModalComponent } from './shared/components/welcome-modal/welcome-modal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimpleLoginComponent } from './simple-login/simple-login.component';
import { ResourceAllocationComponent } from './resource-allocation/resource-allocation.component';
import { BudgetComponent } from './budget/budget.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {path:'', component: WelcomeModalComponent},
  {path:'login', component:SimpleLoginComponent},
  {path:'home/:id', component: HomeComponent},
  {path:'allocation/:id', component:ResourceAllocationComponent},
  {path:'budget/:id', component:BudgetComponent},
  {path:'history/:id', component:HistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
