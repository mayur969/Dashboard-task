import { Component, OnInit } from "@angular/core";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html'
})

export class AppTopSectionComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: '',
      align: 'left'
    },
    xAxis: {
      title: {
        text: 'Month',
        style: {
          fontSize: '16px',
          fontWeight: '600'
        }
      },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          fontSize: '16px'

        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Security Rating',
        style: {
          fontSize: '16px',
          fontWeight: '600'
        }
      },
      stackLabels: {
        enabled: false
      },
      labels: {
        style: {
          fontSize: '16px'
        }
      }
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        borderRadius: 12,
        dataLabels: {
          enabled: false,
        }
      }
    },
    series: [{
      data: [30, 13, 17, 21, 29, 14, 28, 16, 35, 13, 38, 20],
      color: '#eaecf0',
      borderRadius: '12px'
    }, {
      data: [14, 12, 22, 27, 15, 34, 25, 13, 16, 27, 16, 14],
      color: '#9879e6',
      borderRadius: '12px'
    }, {
      data: [20, 18, 25, 30, 10, 16, 27, 12, 19, 29, 14, 25],
      color: '#6343bf',
      borderRadius: '12px'
    }]
  };

  guageChartOptions: Highcharts.Options = {
    chart: {
      type: 'solidgauge',
    },
    title: {
      text: '',
    },
    pane: {
      center: ['36%', '80%'],
      size: '160%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
        innerRadius: '80%',
        outerRadius: '100%',
        shape: 'arc',
        borderRadius: 20
      }
    },
    yAxis: {
      min: 0,
      max: 300,
      stops: [
        [1, '#6343bf'],
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      labels: {
        enabled: false
      },
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: -70,
          style: {
            fontSize: '45px'
          },
          borderWidth: 0,
          useHTML: true,
        },
        innerRadius: '80%',
        color: '#000',
        
      },
      
    },
    series: [
      {
        name: 'Speed',
        data: [240],
        borderRadius: 20
      },
    ],
  };

  constructor() {

  }


  ngOnInit(): void {

  }


}

