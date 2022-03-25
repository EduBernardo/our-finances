import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceAllocationRoutingModule } from './resource-allocation-routing.module';
import { ResourceAllocationComponent } from './resource-allocation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ResourceAllocationComponent
  ],
  imports: [
    CommonModule,
    ResourceAllocationRoutingModule,
    SharedModule
  ]
})
export class ResourceAllocationModule { }
