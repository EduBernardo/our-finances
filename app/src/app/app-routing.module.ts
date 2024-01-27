import { WelcomeModalComponent } from './modules/shared/components/welcome-modal/welcome-modal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: WelcomeModalComponent},
  {path:'home', component: HomeComponent}, 
  { path: 'budget', loadChildren: () => import('./modules/budget/budget.module').then(m => m.BudgetModule) },
  { path: 'history', loadChildren: () => import('./modules/history/history.module').then(m => m.HistoryModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/investiments-dashboard/investiments-dashboard.module').then(m => m.InvestimentsDashboardModule) },
  { path: 'allocation', loadChildren: () => import('./modules/resource-allocation/resource-allocation.module').then(m => m.ResourceAllocationModule) },
  { path: 'login', loadChildren: () => import('./modules/simple-login/simple-login.module').then(m => m.SimpleLoginModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
