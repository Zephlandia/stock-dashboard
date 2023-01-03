import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable()
export class StockKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addStockKeyParam(request));
  }

  addStockKeyParam(request: HttpRequest<any>) {
    return request.clone({
      params: (request.params ? request.params : new HttpParams())
                 .set('apikey', environment.apiKey)
    });
  }


}
