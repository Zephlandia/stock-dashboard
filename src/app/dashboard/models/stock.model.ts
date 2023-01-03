export class Match {
  "bestMatches": Stock[];
}

export class Stock {
  "1. symbol": string;
  "2. name": string;
  "3. type": string;
  "4. region": string;
  "5. marketOpen": string;
  "6. marketClose": string;
  "7. timezone": string;
  "8. currency": string;
  "9. matchScore": number;
}

export class Quote {
  "Global Quote": GlobalQuote;
}

export class GlobalQuote {
  "01. symbol": string;
  "02. open": number;
  "03. high": number;
  "04. low": number;
  "05. price": number;
  "06. volume": number;
  "07. latest trading day": string;
  "08. previous close": number;
  "09. change": number;
  "10. change percent": string;
}

export class Company {
  "Symbol": string;
  "AssetType": string;
  "Name": string;
  "Description": string;
  "CIK": string;
  "Exchange": string;
  "Currency": string;
  "Country": string;
  "Sector": string;
  "Industry": string;
  "Address": string;
  "FiscalYearEnd": string;
  "LatestQuarter": string;
  "MarketCapitalization": string;
  "EBITDA": string;
  "PERatio": number;
  "PEGRatio": number;
  "BookValue": number;
  "DividendPerShare": number;
  "DividendYield": number;
  "EPS": number;
  "RevenuePerShareTTM": number;
  "ProfitMargin": number;
  "OperatingMarginTTM": number;
  "ReturnOnAssetsTTM": number;
  "ReturnOnEquityTTM": number;
  "RevenueTTM": number;
  "GrossProfitTTM": number;
  "DilutedEPSTTM": number;
  "QuarterlyEarningsGrowthYOY": number;
  "QuarterlyRevenueGrowthYOY": number;
  "AnalystTargetPrice": number;
  "TrailingPE": number;
  "ForwardPE": number;
  "PriceToSalesRatioTTM": number;
  "PriceToBookRatio": number;
  "EVToRevenue": number;
  "EVToEBITDA": number;
  "Beta": number;
  "52WeekHigh": number;
  "52WeekLow": number;
  "50DayMovingAverage": number;
  "200DayMovingAverage": number;
  "SharesOutstanding": number;
  "DividendDate": string;
  "ExDividendDate": string;
}

export class SeriesData {
  "Meta Data": MetaData;
  "Time Series (Daily)": any | null;
  "Weekly Adjusted Time Series": any | null;
  "Monthly Adjusted Time Series": any | null;
}

export class MetaData {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string;
  "4. Output Size": string;
  "5. Time Zone": string;
}


