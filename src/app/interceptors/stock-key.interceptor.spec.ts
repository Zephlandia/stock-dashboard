import { TestBed } from '@angular/core/testing';

import { StockKeyInterceptor } from './stock-key.interceptor';

describe('StockKeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StockKeyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StockKeyInterceptor = TestBed.inject(StockKeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
