import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestimentsDashboardComponent } from './investiments-dashboard.component';

const routes: Routes = [{ path: '', component: InvestimentsDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestimentsDashboardRoutingModule { }
