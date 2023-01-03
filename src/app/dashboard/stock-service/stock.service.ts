import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subscription } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { TimePeriodAdjustedEnum } from '../models/stock-enums.model';
import { Company, Match, Quote, SeriesData, Stock } from '../models/stock.model';

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
  getStockQuote(symbol: string): Observable<Quote> {
    return this.http.get<Quote>(`${environment.baseStockUrl}/query?function=GLOBAL_QUOTE&symbol=${symbol}`)
    .pipe(
      catchError(this.handleError<Quote>('getStockQuote'))
    );
  }

  getTimeSeriesAdjusted(symbol: string, timePeriod: TimePeriodAdjustedEnum): Observable<SeriesData> {
    return this.http.get<SeriesData>(`${environment.baseStockUrl}/query?function=${timePeriod}&symbol=${symbol}`)
      .pipe(
        catchError(this.handleError<SeriesData>('getTimeSeriesAdjusted'))
      );
  }

  getCompanyInfo(symbol: string): Observable<Company> {
    return this.http.get<Company>(`${environment.baseStockUrl}/query?function=OVERVIEW&symbol=${symbol}`)
    .pipe(
      catchError(this.handleError<Company>('getCompanyInfo'))
    );
  }

  // https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo
  getStockSearch(searchTerm: string): Observable<Match> {
    return this.http.get<Match>(`${environment.baseStockUrl}/query?function=SYMBOL_SEARCH&keywords=${searchTerm}`)
    .pipe(
      catchError(this.handleError<Match>('getStockSearch'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


}
