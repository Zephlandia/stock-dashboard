import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardMainComponent,
    StockSearchComponent
  ],
  imports: [
    // CommonModule,
    SharedModule,
    AngularMaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
