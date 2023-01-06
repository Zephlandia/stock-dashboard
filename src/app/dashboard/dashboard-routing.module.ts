import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { StockSearchComponent } from './stock-search/stock-search.component';

const routes: Routes = [
  {
    path: '',
    component: StockSearchComponent
  },
  {
    path: 'dashboard/:symbol',
    component: DashboardMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
