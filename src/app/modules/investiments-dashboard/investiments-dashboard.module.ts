import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestimentsDashboardRoutingModule } from './investiments-dashboard-routing.module';
import { InvestimentsDashboardComponent } from './investiments-dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InvestimentsDashboardComponent
  ],
  imports: [
    CommonModule,
    InvestimentsDashboardRoutingModule,
    SharedModule
  ]
})
export class InvestimentsDashboardModule { }
