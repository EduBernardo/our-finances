import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxCurrencyModule } from 'ngx-currency';


@NgModule({
  declarations: [
    BudgetComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    SharedModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxCurrencyModule
  ]
})
export class BudgetModule { }
