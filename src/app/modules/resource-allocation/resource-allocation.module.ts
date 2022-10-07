import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceAllocationRoutingModule } from './resource-allocation-routing.module';
import { ResourceAllocationComponent } from './resource-allocation.component';
import { SharedModule } from '../shared/shared.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CdkAccordionModule } from '@angular/cdk/accordion';




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
  CdkAccordionModule,
  NgxCurrencyModule

  ],
  providers: []
})
export class ResourceAllocationModule { }
