import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  // Todo:
  // [ ] Create actual account for alphavantage
  // [ ] Add interceptor to add apikey to the end of each api call
  // [ ] Add the rest of the api calls to this service

  // [ ] Create a basic Firebase auth system
  // [ ] Host app in firebase
  // [ ] Create a generic guest user to use the service with
  // [ ] Create basic login page that will reroute to the dashboard page once successfull

  // [ ] Find a relatively simple layout and design for the dashboard view

  // [ ] Create a header that allows login, logout, and to change between dark and light theme
  // [ ] Make page responsive and look good on mobile
  // [ ] Add loading icons while waiting for api calls to finish
  // [ ] Handle the failed api calls in the UI (i.e. when you use up the 5 calls/minutes)

  // https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
  getStockQuote(symbol: string): Subscription {

    return this.http.get<any>(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`)
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
