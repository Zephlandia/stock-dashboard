import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Match, Quote, Stock } from '../models/stock.model';
import { StockService } from '../stock-service/stock.service';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss']
})
export class StockSearchComponent {

  stocks$: Observable<Match> | undefined;
  quote$: Observable<Quote> | undefined;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
      console.log('on init');

      // this.quote$ = this.stockService.getStockQuote('IBM');
      // this.quote$.subscribe({
      //   next: (result: Quote) => {
      //     console.log(result);
      //     console.log(result['Global Quote']['01. symbol']);
      //   },
      //   error: (error) => {
      //     console.log(error);
      //   }
      // });

      this.stocks$ = this.stockService.getStockSearch('tesco');
      this.stocks$.subscribe({
        next: (result: Match) => {
          console.log(result);
          console.log(result.bestMatches[0]);
        },
        error: (error) => {
          console.log(error);
        }
      });

      // this.stockService.getTimeSeriesAdjusted('IBM', TimePeriodAdjustedEnum.daily);
      // this.stockService.getCompanyInfo('IBM');
      // console.log(this.stockService.getStockSearch('tesco'));

      // console.log(this.stocks$);
  }



}
