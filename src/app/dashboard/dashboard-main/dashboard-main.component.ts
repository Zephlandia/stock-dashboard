import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { TimePeriodAdjustedEnum } from '../models/stock-enums.model';
import { Company, GlobalQuote, Quote, SeriesData } from '../models/stock.model';
import { StockService } from '../stock-service/stock.service';
import { EChartsOption } from 'echarts';
import { GraphService } from '../graph-service/graph.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  symbol: string = '';
  company: Company = new Company();
  quote: GlobalQuote = new GlobalQuote();
  graphTitle: string = 'Daily Adjusted Time Series';
  options: EChartsOption = {};

  timeSeries:FormControl = new FormControl('');

  constructor(
    private stockService: StockService,
    private graphService: GraphService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.timeSeries.setValue('daily');

    this.route.paramMap.subscribe((params: ParamMap) => {
        this.symbol = params.get('symbol') || '';
    });

    // this.stockService.getCompanyInfo(this.symbol).subscribe({
    //   next: (result: Company) => {
    //     this.company = result;
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // });

    // this.stockService.getStockQuote(this.symbol).subscribe({
    //   next: (result: Quote) => {
    //     this.quote = result["Global Quote"];
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // });


    // this.stockService.getTimeSeriesAdjusted(this.symbol, TimePeriodAdjustedEnum.daily).subscribe({
    //   next: (result: SeriesData) => {
    //     this.options = this.graphService.getGraphData(result, TimePeriodAdjustedEnum.daily);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // });

  }


}
