import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceAllocationRoutingModule } from './resource-allocation-routing.module';
import { ResourceAllocationComponent } from './resource-allocation.component';
import { SharedModule } from '../shared/shared.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from "ng2-currency-mask";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: false,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};


@NgModule({
  declarations: [
    ResourceAllocationComponent
  ],
  imports: [
    CommonModule,
    ResourceAllocationRoutingModule,
    SharedModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
  { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})
export class ResourceAllocationModule { }
