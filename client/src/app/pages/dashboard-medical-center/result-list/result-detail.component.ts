import { Component, OnInit } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

declare var require: any;
// You can load Highcharts static if you need its API
import * as Highcharts from 'highcharts';
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

// If you want you can also load any Highcharts module here: 'highcharts/highcharts-more', 'highcharts/modules/map' and etc.
// See the node_modules/highcharts folders to find a necessary module
//import * as Highcharts3d from 'highcharts/highcharts-3d';

// Any Highcharts static API is available throw the Highcharts variable
Highcharts.setOptions({
  colors: ['#058DC7', '#50B432', '#ED561B']
});

// Plug the highcharts-3d module
//Highcharts3d(Highcharts);


// @Component({
//   selector: 'app-medical-center',
//   templateUrl: './result-detail.component.html',
//   styleUrls: ['./result-detail.component.css']
// })

@Component({
  selector: 'my-component',
  template: `
  <div class="margin-container">
    <chart [options]="options"></chart>
   </div>
    `
})
export class ResultDetailComponent implements OnInit {

  url: any;
  name:string;
  video: any = {id: 'wzrnuUOoFNM'};
  baseUrl:string = 'https://www.youtube.com/embed/';

  options:Object;

  constructor(
    private sanitizer: DomSanitizer,
    private http: Http
    // private route: ActivatedRoute,
    // private router: Router
  ) { 

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);    

    this.cookDataTest();
  }

  ngOnInit() {
  }

  
  public cookDataTest(){



    this.options = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Keen - Flex/Ext [deg]'
        },
        subtitle: {
            text: 'kinematic analysis'
        },
        xAxis: {
            type: 'float',
            // dateTimeLabelFormats: { // don't display the dummy year
            //     month: '%e. %b',
            //     year: '%Y'
            // },
            title: {
                text: 'Gait cicle'
            }
        },
        yAxis: {
            title: {
                text: 'Ext / Flex'
            },
            min: -15,
            max: 55
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%Y}: {point.y:.2f} m',
            crosshairs: true,
            shared: false,
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: false
                }
            }
        },

        series: [
          {
            name: 'Winter 2012-2013',
            data: [
                [0, 3],
                [5.0, 0.28],
                [11.0, 0.25],
                [17.64705882, 0.2],
                [23.52941176, 0.28],
                [29.41176471, 0.28],
                [35.29411765, 0.47],
                [41.17647059, 0.79],
                [47.05882353, 0.72],
                [52.94117647, 1.02],
                [58.82352941, 1.12],
                [64.70588235, 1.2],
                [70.58823529, 1.18],
                [76.47058824, 1.19],
                [82.35294118, 1.85],
                [88.23529412, 2.22],
                [94.11764706, 1.15],
                [100, 3,]
            ],
            dashStyle: 'longdash'
          }, 
          {
            name: 'Winter 2013-2014',
            data: [
                [0,20],
                [9.090909091, 10.4],
                [18.18181818, 10.25],
                [27.27272727, 11.66],
                [36.36363636, 11.8],
                [45.45454545, 21.76],
                [54.54545455, 12.62],
                [63.63636364, 12.41],
                [72.72727273, 12.05],
                [81.81818182, 31.7],
                [90.90909091, 41.1],
                [100, 2,]
            ]
          }, 
          {
            name: 'Left side',
            data: [
                [0, 0],
                [4.545454545, 0.25],
                [9.090909091, 1.41],
                [13.63636364, 1.64],
                [18.18181818, 1.6],
                [22.72727273, 2.55],
                [27.27272727, 2.62],
                [31.81818182, 2.5],
                [36.36363636, 2.42],
                [40.90909091, 2.74],
                [45.45454545, 2.62],
                [50, 2.69],
                [54.54545455, 2.81],
                [59.09090909, 2.63],
                [63.63636364, 2.77],
                [68.18181818, 2.68],
                [72.72727273, 2.56],
                [77.27272727, 2.39],
                [81.81818182, 2.3],
                [86.36363636, 2],
                [90.90909091, 1.85],
                [95.45454545, 1.49],
                [100, 2.08]
            ],
            dashStyle: 'longdash'
          }, 
          {
            name: 'Norma range',
            data: [
              [0, 14.3, 27.7],
              [5.882352941, 14.5, 27.8],
              [11.76470588, 15.5, 29.6],
              [17.64705882, 16.7, 30.7],
              [23.52941176, 16.5, 25.0],
              [29.41176471, 17.8, 25.7],
              [35.29411765, 13.5, 24.8],
              [41.17647059, 10.5, 21.4],
              [47.05882353, 9.2, 23.8],
              [52.94117647, 11.6, 21.8],
              [58.82352941, 10.7, 23.7],
              [64.70588235, 11.0, 23.3],
              [70.58823529, 11.6, 23.7],
              [76.47058824, 11.8, 20.7],
              [82.35294118, 12.6, 22.4],
              [88.23529412, 13.6, 19.6],
              [94.11764706, 11.4, 22.6],
              [100, 13.2, 25.0]
            ],
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            fillOpacity: 0.3,
            zIndex: 0
        }
        ,
        {
          navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
          }
        }

        ]
    };
  }


}
