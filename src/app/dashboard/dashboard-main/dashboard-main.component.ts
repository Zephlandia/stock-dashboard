import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TimePeriodAdjustedEnum } from '../models/stock-enums.model';
import { StockService } from '../stock-service/stock.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {


  constructor(private stockService: StockService) {}

  ngOnInit(): void {
      console.log('on init');
      this.stockService.getStockQuote('IBM');

      this.stockService.getTimeSeriesAdjusted('IBM', TimePeriodAdjustedEnum.daily);

      this.stockService.getCompanyInfo('IBM');

  }


}
