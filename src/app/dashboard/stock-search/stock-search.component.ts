import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, finalize, Observable, Subscription, switchMap, tap } from 'rxjs';
import { Match, Quote, Stock } from '../models/stock.model';
import { StockService } from '../stock-service/stock.service';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss']
})
export class StockSearchComponent {

  stocks$: Observable<Match> = new Observable<Match>();
  quote$: Observable<Quote> | undefined;

  filteredStocks: Stock[] = [];

  searchMoviesCtrl = new FormControl();
  isLoading = false;
  errorMsg!: string;
  minLengthTerm = 3;
  spinnerDiameter = 25;
  selectedSymbol!: string;
  showClearBtn = false;
  notSelected = false;

  constructor(private stockService: StockService, private router: Router) {

    this.searchMoviesCtrl.valueChanges
    .pipe(
      filter(result => {

        this.notSelected = false;

        if(result != null && result.length > 0) {
          this.showClearBtn = true;

          if(result.length > 2) {
            this.errorMsg = "";
            this.filteredStocks = [];
            this.isLoading = true;
            this.selectedSymbol = '';
          }
        }
        return result !== null && result.length >= this.minLengthTerm
      }),
      distinctUntilChanged(),
      debounceTime(1000),
      switchMap(value => this.stockService.getStockSearch(value as string)
        .pipe(
          finalize(() => {
            this.isLoading = false
          }),
        )
      )
    )
    .subscribe((result: any) => {
      if (result == undefined) {
        this.errorMsg = result['Error'];
        this.filteredStocks = [];
      } else {
        this.errorMsg = "";
        this.filteredStocks = result.bestMatches;
      }
    });
  }

  ngOnInit(): void { }

  submit() {
    if(this.selectedSymbol) {
      this.router.navigate(['dashboard', this.searchMoviesCtrl.value]);
    }
    else{
      this.notSelected = true;
    }
  }

  onSelected() {
    this.selectedSymbol = this.searchMoviesCtrl.value;
  }

  clear() {
    this.filteredStocks = [];
    this.searchMoviesCtrl.setValue(null);
  }



}
