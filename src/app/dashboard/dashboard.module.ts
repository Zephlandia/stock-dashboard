import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgxEchartsModule } from 'ngx-echarts';



@NgModule({
  declarations: [
    DashboardMainComponent,
    StockSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    DashboardRoutingModule,
    MatIconModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ]
})
export class DashboardModule { }
