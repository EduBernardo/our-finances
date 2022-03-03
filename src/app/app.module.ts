import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleLoginComponent } from './simple-login/simple-login.component';
import { ResourceAllocationComponent } from './resource-allocation/resource-allocation.component';
import { BudgetComponent } from './budget/budget.component';
import { HistoryComponent } from './history/history.component';
import { InvestimentsDashboardComponent } from './investiments-dashboard/investiments-dashboard.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleLoginComponent,
    ResourceAllocationComponent,
    BudgetComponent,
    HistoryComponent,
    InvestimentsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkAccordionModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
