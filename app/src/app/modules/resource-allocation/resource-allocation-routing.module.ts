import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceAllocationComponent } from './resource-allocation.component';

const routes: Routes = [{ path: '', component: ResourceAllocationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceAllocationRoutingModule { }
