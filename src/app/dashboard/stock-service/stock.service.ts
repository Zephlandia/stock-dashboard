import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { TimePeriodAdjustedEnum } from '../models/stock-enums.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  // Todo:
  // [ ] Add a note in the repo of GitHub that this is where the api key goes. I didn't want to add a key vault to this.
  // Then when publishing this to firebase, just manually put it during the build and then remove it.

  // [ ] Host app in firebase
  // [ ] Create a generic guest user to use the service with
  // [ ] Create basic login page that will reroute to the dashboard page once successfull

  // [ ] Create a header that allows login, logout, and to change between dark and light theme
  // [ ] Make page responsive and look good on mobile
  // [ ] Add loading icons while waiting for api calls to finish
  // [ ] Handle the failed api calls in the UI (i.e. when you use up the 5 calls/minutes)

  // https://www.alphavantage.co/documentation/
  // https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
  getStockQuote(symbol: string): Subscription {
    return this.http.get<any>(
      `${environment.baseStockUrl}/query?function=GLOBAL_QUOTE&symbol=${symbol}`)
    .subscribe({
      next: (result: any) => {
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getTimeSeriesAdjusted(symbol: string, timePeriod: TimePeriodAdjustedEnum): Subscription {
    return this.http.get<any>(`${environment.baseStockUrl}/query?function=${timePeriod}&symbol=${symbol}`)
    .subscribe({
      next: (result: any) => {
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

  getCompanyInfo(symbol: string): Subscription {
    return this.http.get<any>(`${environment.baseStockUrl}/query?function=OVERVIEW&symbol=${symbol}`)
    .subscribe({
      next: (result: any) => {
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
