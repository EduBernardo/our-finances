import { WelcomeModalComponent } from './shared/components/welcome-modal/welcome-modal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: WelcomeModalComponent},
  {path:'home/:id', component: HomeComponent}, 
  { path: 'budget/:id', loadChildren: () => import('./budget/budget.module').then(m => m.BudgetModule) },
  { path: 'history/:id', loadChildren: () => import('./history/history.module').then(m => m.HistoryModule) },
  { path: 'dashboard/:id', loadChildren: () => import('./investiments-dashboard/investiments-dashboard.module').then(m => m.InvestimentsDashboardModule) },
  { path: 'allocation/:id', loadChildren: () => import('./resource-allocation/resource-allocation.module').then(m => m.ResourceAllocationModule) },
  { path: 'login', loadChildren: () => import('./simple-login/simple-login.module').then(m => m.SimpleLoginModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
