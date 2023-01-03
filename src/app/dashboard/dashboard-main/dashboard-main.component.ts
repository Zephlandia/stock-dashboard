import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { TimePeriodAdjustedEnum } from '../models/stock-enums.model';
import { Company, SeriesData } from '../models/stock.model';
import { StockService } from '../stock-service/stock.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  company$: Observable<Company> | undefined;
  timeSeries$: Observable<SeriesData> | undefined;


  constructor(private stockService: StockService) {}

  ngOnInit(): void {
      console.log('on init');

      // this.stockService.getStockQuote('IBM');
      // this.stockService.getTimeSeriesAdjusted('IBM', TimePeriodAdjustedEnum.daily);
      // this.stockService.getCompanyInfo('IBM');

      // this.company$ = this.stockService.getCompanyInfo('IBM');
      // this.company$.subscribe({
      //   next: (result: Company) => {
      //     console.log(result);
      //   },
      //   error: (error) => {
      //     console.log(error);
      //   }
      // });

      this.timeSeries$ = this.stockService.getTimeSeriesAdjusted('IBM', TimePeriodAdjustedEnum.daily);
      this.timeSeries$.subscribe({
        next: (result: SeriesData) => {
          console.log(result);
        },
        error: (error) => {
          console.log(error);
        }
      });

  }


}
