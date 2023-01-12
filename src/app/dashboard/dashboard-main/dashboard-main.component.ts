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
  company: Company | undefined;
  quote: GlobalQuote | undefined;
  graphTitle: string = 'Daily Adjusted Time Series';
  options: EChartsOption = {};
  timeSeries:FormControl = new FormControl('');
  graphLoading: boolean = false;
  companyLoading: boolean = false;
  quoteLoading: boolean = false;
  spinnerDiameter: number = 25;

  constructor(
    private stockService: StockService,
    private graphService: GraphService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
        this.symbol = params.get('symbol') || '';
    });

    this.companyLoading = true;
    this.stockService.getCompanyInfo(this.symbol).subscribe({
      next: (result: Company) => {
        this.company = result;
        this.companyLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.companyLoading = false;
      }
    });

    this.quoteLoading = true;
    this.stockService.getStockQuote(this.symbol).subscribe({
      next: (result: Quote) => {
        this.quote = result["Global Quote"];
        this.quoteLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.quoteLoading = false;
      }
    });

    this.timeSeries.setValue('daily');
    this.getTimeSeriesData(TimePeriodAdjustedEnum.daily);
  }

  updateTimeSeries() {
    if(this.timeSeries.value === 'daily')
      this.getTimeSeriesData(TimePeriodAdjustedEnum.daily);
    else if(this.timeSeries.value === 'weekly')
      this.getTimeSeriesData(TimePeriodAdjustedEnum.weekly);
    else
      this.getTimeSeriesData(TimePeriodAdjustedEnum.monthly);
  }

  getTimeSeriesData(timeSeries: TimePeriodAdjustedEnum) {
    this.graphLoading = true;
      this.stockService.getTimeSeriesAdjusted(this.symbol, timeSeries).subscribe({
      next: (result: SeriesData) => {
        this.options = this.graphService.getGraphData(result, timeSeries);
        this.graphLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.graphLoading = false;
      }
    });
  }


}
