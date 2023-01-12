import { Injectable } from '@angular/core';
import { EChartsOption } from 'echarts';
import { TimePeriodAdjustedEnum } from '../models/stock-enums.model';
import { SeriesData } from '../models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() { }

  getGraphData(seriesData: SeriesData, timePeriod: TimePeriodAdjustedEnum) : EChartsOption {

    let data: any;
    if(timePeriod === TimePeriodAdjustedEnum.daily) {
      data = seriesData['Time Series (Daily)'];
    }
    else if (timePeriod === TimePeriodAdjustedEnum.weekly) {
      data = seriesData['Weekly Adjusted Time Series'];
    }
    else if (timePeriod === TimePeriodAdjustedEnum.monthly) {
      data = seriesData['Monthly Adjusted Time Series'];
    }

    const xAxisData: string[] = [];
    const yAxisData: number[] = [];
    Object.keys(data).forEach(function(key, index) {
      xAxisData.unshift(key.toString());
      yAxisData.unshift(data[key]["4. close"]);
    });

    const options: EChartsOption = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxisData
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {},
      series: [{
        data: yAxisData,
        type: 'line',
        areaStyle: {}
      }]
    }

    return options;
  }




}
