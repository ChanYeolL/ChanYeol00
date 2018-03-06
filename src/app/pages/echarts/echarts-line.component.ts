import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {NgxEchartsService} from 'ngx-echarts';

@Component({
  selector: 'ngx-echarts-line',
  template: `
    <div class="row">
      <div class="col-md-6">
        <div id="chart1" echarts [options]="options" theme="macarons"
             class="demo-chart" (click)="onChartInit($event)"></div>
      </div>
      <div class="col-md-6">
        <div id="chart2" echarts [options]="option" theme="macarons" class="demo-chart"></div>
      </div>
    </div>
  `,
})
export class EchartsLineComponent implements AfterViewInit {
  options: any;
  option: any;
  dataMap: any = {};

  dataFormatter(obj: Object) {
    const pList = ['巴西', '印尼', '美国', '印度', '中国', '世界人口'];
    let temp;
    for (let year = 2002; year <= 2009; year++) {
      let max = 0;
      let sum = 0;
      temp = obj[year];
      for (let i = 0, l = temp.length; i < l; i++) {
        max = Math.max(max, temp[i]);
        sum += temp[i];
        obj[year][i] = {
          name: pList[i],
          value: temp[i],
        };
      }
      obj[year + 'max'] = Math.floor(max / 100) * 100;
      obj[year + 'sum'] = sum;
    }
    return obj;
  }

  constructor(private nes: NgxEchartsService) {
    this.dataMap.dataNum = this.dataFormatter({
      //max : 60000,
      2009: [12153.03, 7521.85, 17235.48, 7358.31, 9740.25, 15212.49, 7278.75, 8587, 15046.45, 34457.3, 22990.35, 10062.82, 12236.53, 7655.18, 33896.65, 19480.46, 12961.1, 13059.69, 39482.56, 7759.16, 1654.21, 6530.01, 14151.28, 3912.68, 6169.75, 441.36, 8169.8, 3387.56, 1081.27, 1353.31, 4277.05],
      2008: [11115, 6719.01, 16011.97, 7315.4, 8496.2, 13668.58, 6426.1, 8314.37, 14069.87, 30981.98, 21462.69, 8851.66, 10823.01, 6971.05, 30933.28, 18018.53, 11328.92, 11555, 36796.71, 7021, 1503.06, 5793.66, 12601.23, 3561.56, 5692.12, 394.85, 7314.58, 3166.82, 1018.62, 1203.92, 4183.21],
      2007: [9846.81, 5252.76, 13607.32, 6024.45, 6423.18, 11164.3, 5284.69, 7104, 12494.01, 26018.48, 18753.73, 7360.92, 9248.53, 5800.25, 25776.91, 15012.46, 9333.4, 9439.6, 31777.01, 5823.41, 1254.17, 4676.13, 10562.39, 2884.11, 4772.52, 341.43, 5757.29, 2703.98, 797.35, 919.11, 3523.16],
      2006: [8117.78, 4462.74, 11467.6, 4878.61, 4944.25, 9304.52, 4275.12, 6211.8, 10572.24, 21742.05, 15718.47, 6112.5, 7583.85, 4820.53, 21900.19, 12362.79, 7617.47, 7688.67, 26587.76, 4746.16, 1065.67, 3907.23, 8690.24, 2338.98, 3988.14, 290.76, 4743.61, 2277.35, 648.5, 725.9, 3045.26],
      2005: [6969.52, 3905.64, 10012.11, 4230.53, 3905.03, 8047.26, 3620.27, 5513.7, 9247.66, 18598.69, 13417.68, 5350.17, 6554.69, 4056.76, 18366.87, 10587.42, 6590.19, 6596.1, 22557.37, 3984.1, 918.75, 3467.72, 7385.1, 2005.42, 3462.73, 248.8, 3933.72, 1933.98, 543.32, 612.61, 2604.19],
      2004: [6033.21, 3110.97, 8477.63, 3571.37, 3041.07, 6672, 3122.01, 4750.6, 8072.83, 15003.6, 11648.7, 4759.3, 5763.35, 3456.7, 15021.84, 8553.79, 5633.24, 5641.94, 18864.62, 3433.5, 819.66, 3034.58, 6379.63, 1677.8, 3081.91, 220.34, 3175.58, 1688.49, 466.1, 537.11, 2209.09],
      2003: [5007.21, 2578.03, 6921.29, 2855.23, 2388.38, 6002.54, 2662.08, 4057.4, 6694.23, 12442.87, 9705.02, 3923.11, 4983.67, 2807.41, 12078.15, 6867.7, 4757.45, 4659.99, 15844.64, 2821.11, 713.96, 2555.72, 5333.09, 1426.34, 2556.02, 185.09, 2587.72, 1399.83, 390.2, 445.36, 1886.35],
      2002: [4315, 2150.76, 6018.28, 2324.8, 1940.94, 5458.22, 2348.54, 3637.2, 5741.03, 10606.85, 8003.67, 3519.72, 4467.55, 2450.48, 10275.5, 6035.48, 4212.82, 4151.54, 13502.42, 2523.73, 642.73, 2232.86, 4725.01, 1243.43, 2312.82, 162.04, 2253.39, 1232.03, 340.65, 377.16, 1612.6],
    });
  }

  ngAfterViewInit() {
    const data1 = [19325, 23438, 31000, 121594, 134141, 681807];
    const data2 = [820, 932, 901, 934, 1290, 1330, 1320];
    const dataLN = ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'];
    const dataRN = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.options = {
      title: {
        text: '世界人口总量',
        subtext: '数据来自网络',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['2018年'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: 'category',
        data: dataLN,
      },
      series: [
        {
          name: '2018年',
          type: 'bar',
          data: data1,
        },
      ],
    };
    this.option = {
      xAxis: {
        type: 'category',
        data: dataRN,
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        data: data2,
        type: 'line',
      }],
    };
    setTimeout(() => {
      // Method 1: Use global echarts object:
      const echarts = this.nes.echarts;
      const chartElement1 = document.getElementById('chart1');
      const chartElement2 = document.getElementById('chart2');
      const chart1 = echarts.getInstanceByDom(chartElement1);
      const chart2 = echarts.getInstanceByDom(chartElement2);
      echarts.connect([chart1, chart2]);
    });

  }

  onChartInit(ec) {
  }

  resizeChart() {
  }
}



