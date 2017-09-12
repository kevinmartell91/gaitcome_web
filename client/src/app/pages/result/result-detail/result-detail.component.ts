import { Component, OnInit, Input,
         trigger, state, style, transition, animate } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

declare var require: any;


// You can load Highcharts static if you need its API
import * as Highcharts from 'highcharts';
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);

// If you want you can also load any Highcharts module here: 'highcharts/highcharts-more', 'highcharts/modules/map' and etc.
// See the node_modules/highcharts folders to find a necessary module
//import * as Highcharts3d from 'highcharts/highcharts-3d';

// Any Highcharts static API is available throw the Highcharts variable
Highcharts.setOptions({
  colors: [ '#058DC7', '#ED561B']
});

// Plug the highcharts-3d module
//Highcharts3d(Highcharts); 

export class PatientAngles {
    interval: number;
    angle: number;
}
export class NormalAngles{
    interval: number;
    limInf: number;
    limSup: number;
}
export class SeriesAngles{
     patient_angles: PatientAngles[];
     normal_ranges: NormalAngles[];
}
export class SplKne {
        // normal_ranges: number[][];
         normal_ranges: Array<Array<number>>;
        // patient_angles: number[][];
         patient_angles: Array<Array<number>>;
}
export class KinematicsAnalysis {
    _id: string;
    therapist_id: string;
    medical_center_id: string;
    created_at: string;
    patient_id: string;
    accesories_descriptions: {  
      assited_walk: string,
      treadmills: string,
      walker: string,
      orthoses: string,
      parallel_bars: string
    }
    spl_kne: SplKne;
    // spl_kne: SeriesAngles;
    sp_kne_high_chart_data: Object ;
}
export class Person {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: [
    './result-detail.component.css'
    // '../../../theme/theme.component.css'
  ],
  animations: [
    trigger('slideInOutVideo', [
      state('in', style({
        transform: 'translate3d(0%, -5%, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-130%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('slideInOutDetails', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-110%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('slideInOutGraphis', [
      state('in', style({
        transform: 'translate3d(20%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('in_graph_video', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out_graph_video', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('in_graph_video => out_graph_video', animate('400ms ease-in-out')),
      transition('out_graph_video => in_graph_video', animate('400ms ease-in-out')),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})


export class ResultDetailComponent implements OnInit {

  url: any; 
  name:string;
  video: any = {id: '0qLblUty41c'};
  baseUrl:string 
    = 'https://www.youtube.com/embed/';
  URL_WEB_SERVICE:string 
    = 'http://localhost:8080/api/kinematics_analysis/';
  URL_WEB_SERVICE_TEMP:string 
    = 'http://localhost:8080/api/kinematics_analysis/596ee50efe45650b9d013c50';
  hard_id : String; 
  headers: any;
  options: Object;
  public token: string;
  public kinematicsAnalysiss: KinematicsAnalysis [] = [];
  public kinematicsAnalysis : any;
  splKne: SplKne;

  postObjReturn: any;

  people: Person[] = [];
  displayedPeople: Person[] = [];


  sp_plv_high_chart_data : Object;
  sp_hip_high_chart_data : Object;
  sp_kne_high_chart_data : Object;
  sp_ank_high_chart_data : Object;

  fp_plv_high_chart_data : Object;
  fp_hip_high_chart_data : Object;
  fp_kne_high_chart_data : Object;
  fp_ank_high_chart_data : Object;

  tp_plv_high_chart_data : Object;
  tp_hip_high_chart_data : Object;
  tp_kne_high_chart_data : Object;
  tp_ank_high_chart_data : Object;


  constructor( private sanitizer: DomSanitizer,
               private http: Http,
               private route: ActivatedRoute,
               private router: Router
             ) 
  { 
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);    
      this.kinematicsAnalysis = '';
  }

  ngOnInit() {

    if (environment.production) { 

      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.token = currentUser && currentUser.token;

      this.route.params
        .subscribe( params =>
          this.hard_id = params['id']
      );
      
      this.getGaitAnalysis();

    } else {

      this.token = environment.token;      
      this.kinematicsAnalysis = environment.resultDetail;

    // this.hardShowGraph(this.kinematicsAnalysis);
      // this.hardCodeAllNormalRanges();


      this.populateHighCharts(this.kinematicsAnalysis);

    }

  }

  _getJSON(url: string, options: RequestOptions): Observable<any> {
    return this.http.get(url, options)
      .map((res: Response) => res.json())
  }

  _postJSON(url: string, body:any, option: RequestOptions): Observable<any> {
    return this.http.post(url,body, option)
      .map((res: Response) => res.json())
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.token);


    let options = new RequestOptions();
    options.headers = headers

    return options;
  }
  
  private handleError(error: Response) {
        // just logging to the console for now...
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
  }


  getGaitAnalysis(){

     let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('x-access-token', this.token);
      let options = new RequestOptions({ headers: headers });

      // this._getJSON(this.URL_WEB_SERVICE_TEMP, options)
      this._getJSON(environment.URL_WEB_SERVICE + this.hard_id, options)
        .subscribe(json => {
            this.kinematicsAnalysis = json;
            this.populateHighCharts(json);
        })
      
  }
  
  public populateHighCharts(kinematicsAnalysis: any){

      this.sp_kne_high_chart_data = kinematicsAnalysis.sp_kne_high_chart_data;
      this.sp_ank_high_chart_data = kinematicsAnalysis.sp_ank_high_chart_data;
      this.sp_plv_high_chart_data = kinematicsAnalysis.sp_plv_high_chart_data;
      this.sp_hip_high_chart_data = kinematicsAnalysis.sp_hip_high_chart_data;
      this.fp_kne_high_chart_data = kinematicsAnalysis.fp_kne_high_chart_data;
      this.fp_ank_high_chart_data = kinematicsAnalysis.fp_ank_high_chart_data;
      this.fp_plv_high_chart_data = kinematicsAnalysis.fp_plv_high_chart_data;
      this.fp_hip_high_chart_data = kinematicsAnalysis.fp_hip_high_chart_data;
      this.tp_kne_high_chart_data = kinematicsAnalysis.tp_kne_high_chart_data;
      this.tp_ank_high_chart_data = kinematicsAnalysis.tp_ank_high_chart_data;
      this.tp_plv_high_chart_data = kinematicsAnalysis.tp_plv_high_chart_data;
      this.tp_hip_high_chart_data = kinematicsAnalysis.tp_hip_high_chart_data;
            console.log("tp_hip_high_chart_data",this.tp_hip_high_chart_data);
    
  }

    // saveChart(chart) {
    //   this.chart = chart;
    // }
    // addPoint() {
    //   // this.chart.series[0].addPoint(Math.random() * 10);
    //   // this.chart.series[1].addPoint(Math.random() * -10);
    // }
    // onPointSelect(point) {
    //   alert(`${point.y} is selected`);
    // }
    // onSeriesHide(series) {
    //   alert(`${series.name} is selected`);
    // }

    menuState:string = 'out';
    videoState:string = 'out';
    graphState:string = 'out_graph_video';
    dynamicColDetail:string= '';
    dynamicColGraph:string= 'col-md-12';

 
  toggleDetails() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.dynamicColDetail= this.dynamicColDetail === '' ? 'col-md-1' : '';
    this.dynamicColGraph= this.dynamicColGraph === 'col-md-12' ? 'col-md-11' : 'col-md-12';
  }

  toggleVideo() {
    // 1-line if statement that toggles the value:
    this.videoState = this.videoState === 'out' ? 'in' : 'out';
    this.graphState = this.graphState === 'out_graph_video' ? 'in_graph_video' : 'out_graph_video';
    // this.postKinematicAnalysisAsJson_thisShouldBeDoneByThe3DSystem();
  }


  public showGraphWithCommentedAttributes(kinematicsAnalysis: KinematicsAnalysis){
    this.options = {
      chart: {
          type: 'spline',
          height: 350
          // width: 300
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
          max: 30,
          min: -5
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
          name: 'Norma range',
          //data: kinematicsAnalysis.spl_kne.normal_ranges,
          data: [
            [0, 14.72677596, 3.825136612],
            [3.03030303, 15.10928962, 3.825136612],
            [6.060606061, 15.30054645, 3.825136612],
            [9.090909091, 15.30054645, 4.016393443],
            [12.12121212, 14.72677596, 4.207650273],
            [15.15151515, 14.53551913, 4.398907104],
            [18.18181818, 14.3442623, 4.590163934],
            [21.21212121, 13.96174863, 4.781420765],
            [24.24242424, 13.96174863, 5.163934426],
            [27.27272727, 14.15300546, 5.546448087],
            [30.3030303, 13.96174863, 5.737704918],
            [33.33333333, 13.7704918, 5.928961749],
            [36.36363636, 13.7704918, 6.120218579],
            [39.39393939, 13.57923497, 6.120218579],
            [42.42424242, 13.57923497, 5.928961749],
            [45.45454545, 13.96174863, 5.546448087],
            [48.48484848, 14.3442623, 5.163934426],
            [51.51515152, 14.3442623, 4.972677596],
            [54.54545455, 14.15300546, 4.781420765],
            [57.57575758, 13.96174863, 4.590163934],
            [60.60606061, 13.19672131, 4.207650273],
            [63.63636364, 12.81420765, 4.016393443],
            [66.66666667, 13.00546448, 4.016393443],
            [69.6969697, 13.00546448, 4.016393443],
            [72.72727273, 13.38797814, 4.207650273],
            [75.75757576, 13.7704918, 4.590163934],
            [78.78787879, 14.15300546, 4.781420765],
            [81.81818182, 14.15300546, 4.972677596],
            [84.84848485, 14.15300546, 5.163934426],
            [87.87878788, 14.3442623, 5.355191257],
            [90.90909091, 14.3442623, 5.163934426],
            [93.93939394, 14.15300546, 4.972677596],
            [96.96969697, 14.15300546, 4.781420765],
            [100, 14.53551913, 4.207650273]
          ],
          type: 'arearange',
          lineWidth: 0,
          linkedTo: ':previous',
          fillOpacity: 0.3,
          zIndex: 0
        },
        {
          name: 'Left side',
          //data : kinematicsAnalysis.spl_kne.patient_angles,
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
          name: 'Rigth side',
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
          navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
          }
        }
      ],
    };
    
  }

  public hardCodeAllNormalRanges() {


    this.sp_plv_high_chart_data = {
            
            chart: {
                type: "spline",
                height: 350
            },
            title: {

                text: 'Pelvic Tilt [deg]'
            },
            subtitle: {

                text: ''
            },
            xAxis: {
                type: 'float',
                title: {
                    text: 'Gait cicle'
                }
            },
            yAxis: {
                title: {
                    text: 'Post / Ant'
                },
                max: 30,
                min: -5
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Ang: {point.y:.2f}°',
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
                name: 'Rangos Normales',
                data: [
                    [0.0,   14.72677596,    3.825136612],
                    [3.03030303,    15.10928962,    3.825136612],
                    [6.060606061,   15.30054645,    3.825136612],
                    [9.090909091,   15.30054645,    4.016393443],
                    [12.12121212,   14.72677596,    4.207650273],
                    [15.15151515,   14.53551913,    4.398907104],
                    [18.18181818,   14.3442623, 4.590163934],
                    [21.21212121,   13.96174863,    4.781420765],
                    [24.24242424,   13.96174863,    5.163934426],
                    [27.27272727,   14.15300546,    5.546448087],
                    [30.3030303,    13.96174863,    5.737704918],
                    [33.33333333,   13.7704918, 5.928961749],
                    [36.36363636,   13.7704918, 6.120218579],
                    [39.39393939,   13.57923497,    6.120218579],
                    [42.42424242,   13.57923497,    5.928961749],
                    [45.45454545,   13.96174863,    5.546448087],
                    [48.48484848,   14.3442623, 5.163934426],
                    [51.51515152,   14.3442623, 4.972677596],
                    [54.54545455,   14.15300546,    4.781420765],
                    [57.57575758,   13.96174863,    4.590163934],
                    [60.60606061,   13.19672131,    4.207650273],
                    [63.63636364,   12.81420765,    4.016393443],
                    [66.66666667,   13.00546448,    4.016393443],
                    [69.6969697,    13.00546448,    4.016393443],
                    [72.72727273,   13.38797814,    4.207650273],
                    [75.75757576,   13.7704918, 4.590163934],
                    [78.78787879,   14.15300546,    4.781420765],
                    [81.81818182,   14.15300546,    4.972677596],
                    [84.84848485,   14.15300546,    5.163934426],
                    [87.87878788,   14.3442623, 5.355191257],
                    [90.90909091,   14.3442623, 5.163934426],
                    [93.93939394,   14.15300546,    4.972677596],
                    [96.96969697,   14.15300546,    4.781420765],
                    [100.0, 14.53551913,    4.207650273]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
              },
              {
                name: 'Izquierda',
                data : [
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
                name: 'Derecha',
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
              }
            ]
    };
    this.sp_hip_high_chart_data = {
            
            chart: {
                type: "spline",
                height: 350
            },
            title: {

                text: 'Hip Flex/Ext [deg]'
            },
            subtitle: {

                text: ''
            },
            xAxis: {
                type: 'float',
                title: {
                    text: 'Gait cicle'
                }
            },
            yAxis: {
                title: {
                    text: 'Ext / Flex'
                },
                max: 60,
                min: -20
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Ang: {point.y:.2f}°',
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
                name: 'Rangos Normales',
                data: [
                    [0.0,   42.40437158,    27.97814208],
                    [2.941176471,   43.27868852,    27.54098361],
                    [5.882352941,   44.15300546,    27.54098361],
                    [8.823529412,   42.84153005,    26.66666667],
                    [11.76470588,   39.78142077,    24.91803279],
                    [14.70588235,   36.72131148,    22.73224044],
                    [17.64705882,   31.91256831,    20.10928962],
                    [20.58823529,   27.54098361,    15.73770492],
                    [23.52941176,   22.73224044,    12.24043716],
                    [26.47058824,   18.36065574,    7.868852459],
                    [29.41176471,   13.55191257,    3.93442623],
                    [32.35294118,   8.743169399,    0.4371584699],
                    [35.29411765,   4.371584699,    -3.93442623],
                    [38.23529412,   0.8743169399,   -7.431693989],
                    [41.17647059,   -2.62295082,    -10.49180328],
                    [44.11764706,   -5.245901639,   -13.98907104],
                    [47.05882353,   -6.994535519,   -16.61202186],
                    [50.0,  -8.306010929,   -17.92349727],
                    [52.94117647,   -8.743169399,   -17.92349727],
                    [55.88235294,   -8.306010929,   -17.4863388],
                    [58.82352941,   -4.808743169,   -14.86338798],
                    [61.76470588,   -0.8743169399,  -10.49180328],
                    [64.70588235,   5.245901639,    -4.371584699],
                    [67.64705882,   11.80327869,    3.49726776],
                    [70.58823529,   19.23497268,    10.05464481],
                    [73.52941176,   26.2295082, 15.73770492],
                    [76.47058824,   33.22404372,    20.98360656],
                    [79.41176471,   38.90710383,    24.91803279],
                    [82.35294118,   43.27868852,    28.41530055],
                    [85.29411765,   45.46448087,    30.16393443],
                    [88.23529412,   46.33879781,    30.6010929],
                    [91.17647059,   45.0273224, 29.28961749],
                    [94.11764706,   44.15300546,    28.41530055],
                    [97.05882353,   42.40437158,    27.97814208],
                    [100.0, 41.96721311,    27.97814208]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
              },
              {
                name: 'Izquierda',
                data : [
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
                name: 'Derecha',
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
              }
            ]
    };
    this.sp_kne_high_chart_data = {
            
            chart: {
                type: "spline",
                height: 350
            },
            title: {

                text: 'Keen Flex/Ext [deg]'
            },
            subtitle: {

                text: ''
            },
            xAxis: {
                type: 'float',
                title: {
                    text: 'Gait cicle'
                }
            },
            yAxis: {
                title: {
                    text: 'Ext / Flex'
                },
                max: 90,
                min: -20
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Ang: {point.y:.2f}°',
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
                name: 'Rangos Normales',
                data: [
                    [0.0,   10.21857923,    5.409836066],
                    [2.941176471,   13.22404372,    9.016393443],
                    [5.882352941,   18.63387978,    12.62295082],
                    [8.823529412,   23.44262295,    15.6284153],
                    [11.76470588,   25.84699454,    18.03278689],
                    [14.70588235,   26.44808743,    19.23497268],
                    [17.64705882,   24.64480874,    18.03278689],
                    [20.58823529,   22.24043716,    14.42622951],
                    [23.52941176,   19.23497268,    13.22404372],
                    [26.47058824,   16.83060109,    10.81967213],
                    [29.41176471,   12.62295082,    7.213114754],
                    [32.35294118,   9.617486339,    4.207650273],
                    [35.29411765,   7.81420765, 1.803278689],
                    [38.23529412,   6.612021858,    0.6010928962],
                    [41.17647059,   6.612021858,    0.6010928962],
                    [44.11764706,   7.213114754,    0.6010928962],
                    [47.05882353,   9.016393443,    1.202185792],
                    [50.0,  12.02185792,    3.606557377],
                    [52.94117647,   16.2295082, 7.81420765],
                    [55.88235294,   23.44262295,    14.42622951],
                    [58.82352941,   31.8579235, 22.24043716],
                    [61.76470588,   41.47540984,    33.66120219],
                    [64.70588235,   51.09289617,    45.68306011],
                    [67.64705882,   60.10928962,    54.09836066],
                    [70.58823529,   67.92349727,    58.90710383],
                    [73.52941176,   71.53005464,    60.10928962],
                    [76.47058824,   72.13114754,    57.70491803],
                    [79.41176471,   69.12568306,    53.49726776],
                    [82.35294118,   63.71584699,    46.28415301],
                    [85.29411765,   55.30054645,    37.86885246],
                    [88.23529412,   43.87978142,    25.84699454],
                    [91.17647059,   30.6557377, 13.82513661],
                    [94.11764706,   19.23497268,    6.010928962],
                    [97.05882353,   10.81967213,    3.606557377],
                    [100.0, 11.42076503,    5.409836066]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
              },
              {
                name: 'Izquierda',
                data : [
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
                name: 'Derecha',
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
              }
            ]
    };
    this.sp_ank_high_chart_data = {
            
            chart: {
                type: "spline",
                height: 350
            },
            title: {

                text: 'Ankle Plant/DorsiFlex [deg]'
            },
            subtitle: {

                text: ''
            },
            xAxis: {
                type: 'float',
                title: {
                    text: 'Gait cicle'
                }
            },
            yAxis: {
                title: {
                    text: 'Plant / Dors'
                },
                max: 35,
                min: -30
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Ang: {point.y:.2f}°',
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
                name: 'Rangos Normales',
                data: [
                    [0.0,   6.639784946,    0.3494623656],
                    [2.941176471,   4.193548387,    -2.446236559],
                    [5.882352941,   1.397849462,    -4.193548387],
                    [8.823529412,   -0.3494623656,  -4.193548387],
                    [11.76470588,   1.048387097,    -1.747311828],
                    [14.70588235,   3.494623656,    1.048387097],
                    [17.64705882,   6.290322581,    3.14516129],
                    [20.58823529,   8.037634409,    4.892473118],
                    [23.52941176,   9.784946237,    5.940860215],
                    [26.47058824,   10.83333333,    6.989247312],
                    [29.41176471,   11.88172043,    6.989247312],
                    [32.35294118,   12.2311828, 7.338709677],
                    [35.29411765,   12.58064516,    7.338709677],
                    [38.23529412,   13.97849462,    7.688172043],
                    [41.17647059,   15.37634409,    8.037634409],
                    [44.11764706,   16.77419355,    7.688172043],
                    [47.05882353,   17.12365591,    6.989247312],
                    [50.0,  16.77419355,    5.241935484],
                    [52.94117647,   14.32795699,    2.446236559],
                    [55.88235294,   9.435483871,    -2.096774194],
                    [58.82352941,   2.096774194,    -8.387096774],
                    [61.76470588,   -5.940860215,   -15.37634409],
                    [64.70588235,   -9.086021505,   -20.2688172],
                    [67.64705882,   -6.989247312,   -20.61827957],
                    [70.58823529,   -3.14516129,    -16.42473118],
                    [73.52941176,   1.397849462,    -9.086021505],
                    [76.47058824,   5.591397849,    -3.844086022],
                    [79.41176471,   8.73655914, 1.048387097],
                    [82.35294118,   10.48387097,    4.193548387],
                    [85.29411765,   11.1827957, 5.591397849],
                    [88.23529412,   10.83333333,    5.940860215],
                    [91.17647059,   9.435483871,    4.543010753],
                    [94.11764706,   8.037634409,    1.747311828],
                    [97.05882353,   7.338709677,    0.6989247312],
                    [100.0, 5.940860215,    0.6989247312]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
              },
              {
                name: 'Izquierda',
                data : [
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
                name: 'Derecha',
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
              }
            ]
    };

    this.fp_plv_high_chart_data = {
            
            chart: {
                type: "spline",
                height: 350
            },
            title: {

                text: 'Pelvic Obliquity [deg]'
            },
            subtitle: {

                text: ''
            },
            xAxis: {
                type: 'float',
                title: {
                    text: 'Gait cicle'
                }
            },
            yAxis: {
                title: {
                    text: 'Down / Up'
                },
                max: 15,
                min: -15
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Ang: {point.y:.2f}°',
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
                name: 'Rangos Normales',
                data: [
                    [0.0,   2.295081967,    0.4918032787],
                    [2.941176471,   2.786885246,    0.8196721311],
                    [5.882352941,   3.770491803,    1.475409836],
                    [8.823529412,   5.245901639,    2.459016393],
                    [11.76470588,   6.557377049,    3.606557377],
                    [14.70588235,   7.37704918, 4.590163934],
                    [17.64705882,   7.049180328,    4.426229508],
                    [20.58823529,   6.229508197,    3.442622951],
                    [23.52941176,   5.409836066,    2.295081967],
                    [26.47058824,   4.262295082,    1.147540984],
                    [29.41176471,   2.950819672,    0.3278688525],
                    [32.35294118,   1.803278689,    -0.3278688525],
                    [35.29411765,   0.8196721311,   -0.9836065574],
                    [38.23529412,   0.1639344262,   -1.147540984],
                    [41.17647059,   -0.1639344262,  -1.147540984],
                    [44.11764706,   -0.1639344262,  -1.147540984],
                    [47.05882353,   -0.1639344262,  -0.9836065574],
                    [50.0,  -0.3278688525,  -1.147540984],
                    [52.94117647,   -0.8196721311,  -1.967213115],
                    [55.88235294,   -1.31147541,    -3.278688525],
                    [58.82352941,   -2.131147541,   -4.918032787],
                    [61.76470588,   -2.950819672,   -6.393442623],
                    [64.70588235,   -3.770491803,   -7.049180328],
                    [67.64705882,   -3.442622951,   -6.885245902],
                    [70.58823529,   -2.62295082,    -6.229508197],
                    [73.52941176,   -1.475409836,   -5.081967213],
                    [76.47058824,   -0.4918032787,  -3.770491803],
                    [79.41176471,   0.1639344262,   -2.62295082],
                    [82.35294118,   0.4918032787,   -1.639344262],
                    [85.29411765,   1.147540984,    -0.9836065574],
                    [88.23529412,   1.639344262,    -0.6557377049],
                    [91.17647059,   1.639344262,    -0.3278688525],
                    [94.11764706,   1.475409836,    -0.1639344262],
                    [97.05882353,   1.475409836,    0.1639344262],
                    [100.0, 2.295081967,    0.6557377049]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
              },
              {
                name: 'Izquierda',
                data : [
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
                name: 'Derecha',
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
              }
            ]
    };
    this.fp_hip_high_chart_data = {
            
            chart: {
                type: "spline",
                height: 350
            },
            title: {

                text: 'Hip Ad/Abduktion [deg]'
            },
            subtitle: {

                text: ''
            },
            xAxis: {
                type: 'float',
                title: {
                    text: 'Gait cicle'
                }
            },
            yAxis: {
                title: {
                    text: 'Abd / Add'
                },
                max: 30,
                min: -30
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Ang: {point.y:.2f}°',
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
                name: 'Rangos Normales',
                data: [
                    [0.0,   6.885245902,    2.950819672],
                    [2.941176471,   7.868852459,    4.262295082],
                    [5.882352941,   9.836065574,    6.557377049],
                    [8.823529412,   12.45901639,    8.852459016],
                    [11.76470588,   14.75409836,    10.81967213],
                    [14.70588235,   16.39344262,    12.13114754],
                    [17.64705882,   16.39344262,    11.80327869],
                    [20.58823529,   15.40983607,    10.49180328],
                    [23.52941176,   14.75409836,    9.508196721],
                    [26.47058824,   14.09836066,    8.852459016],
                    [29.41176471,   13.44262295,    8.196721311],
                    [32.35294118,   12.78688525,    8.196721311],
                    [35.29411765,   12.13114754,    8.196721311],
                    [38.23529412,   11.47540984,    8.196721311],
                    [41.17647059,   11.47540984,    8.196721311],
                    [44.11764706,   11.14754098,    7.540983607],
                    [47.05882353,   11.47540984,    6.885245902],
                    [50.0,  10.49180328,    5.901639344],
                    [52.94117647,   9.508196721,    4.262295082],
                    [55.88235294,   8.524590164,    1.967213115],
                    [58.82352941,   5.901639344,    -1.31147541],
                    [61.76470588,   3.606557377,    -3.93442623],
                    [64.70588235,   1.31147541, -5.901639344],
                    [67.64705882,   0.9836065574,   -4.918032787],
                    [70.58823529,   1.639344262,    -3.93442623],
                    [73.52941176,   2.950819672,    -2.62295082],
                    [76.47058824,   3.93442623, -1.639344262],
                    [79.41176471,   4.262295082,    -1.31147541],
                    [82.35294118,   4.590163934,    -0.6557377049],
                    [85.29411765,   5.245901639,    0.6557377049],
                    [88.23529412,   5.573770492,    0.9836065574],
                    [91.17647059,   5.901639344,    0.9836065574],
                    [94.11764706,   5.901639344,    0.6557377049],
                    [97.05882353,   6.229508197,    0.6557377049],
                    [100.0, 7.540983607,    1.639344262]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
              },
              {
                name: 'Izquierda',
                data : [
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
                name: 'Derecha',
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
              }
            ]
    };
    this.fp_kne_high_chart_data = {
            
            chart: {
                type: "spline",
                height: 350
            },
            title: {

                text: 'Keen Varus/Valgus [deg]'
            },
            subtitle: {

                text: ''
            },
            xAxis: {
                type: 'float',
                title: {
                    text: 'Gait cicle'
                }
            },
            yAxis: {
                title: {
                    text: 'Valg / Var'
                },
                max: 15,
                min: -15
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Ang: {point.y:.2f}°',
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
                name: 'Rangos Normales',
                data: [
                    [0.0,   -1.967213115,   -8.852459016],
                    [2.941176471,   -2.295081967,   -9.508196721],
                    [5.882352941,   -2.131147541,   -10],
                    [8.823529412,   -1.475409836,   -9.180327869],
                    [11.76470588,   -0.6557377049,  -8.032786885],
                    [14.70588235,   0.1639344262,   -6.557377049],
                    [17.64705882,   -0.3278688525,  -5.901639344],
                    [20.58823529,   -0.8196721311,  -5.409836066],
                    [23.52941176,   -0.8196721311,  -6.06557377],
                    [26.47058824,   -1.147540984,   -6.885245902],
                    [29.41176471,   -1.639344262,   -8.032786885],
                    [32.35294118,   -2.131147541,   -8.68852459],
                    [35.29411765,   -2.786885246,   -9.180327869],
                    [38.23529412,   -3.114754098,   -9.344262295],
                    [41.17647059,   -3.114754098,   -9.344262295],
                    [44.11764706,   -3.278688525,   -9.508196721],
                    [47.05882353,   -3.278688525,   -9.672131148],
                    [50.0,  -3.114754098,   -9.672131148],
                    [52.94117647,   -2.295081967,   -9.672131148],
                    [55.88235294,   -1.31147541,    -8.68852459],
                    [58.82352941,   -0.1639344262,  -7.049180328],
                    [61.76470588,   1.31147541, -5.737704918],
                    [64.70588235,   2.295081967,    -5.573770492],
                    [67.64705882,   1.803278689,    -7.213114754],
                    [70.58823529,   1.147540984,    -9.016393443],
                    [73.52941176,   0.8196721311,   -9.672131148],
                    [76.47058824,   1.31147541, -8.852459016],
                    [79.41176471,   1.967213115,    -7.213114754],
                    [82.35294118,   1.967213115,    -5.409836066],
                    [85.29411765,   1.639344262,    -4.098360656],
                    [88.23529412,   0.9836065574,   -3.93442623],
                    [91.17647059,   -0.1639344262,  -5.573770492],
                    [94.11764706,   -0.9836065574,  -8.032786885],
                    [97.05882353,   -1.147540984,   -10.32786885],
                    [100.0, -1.147540984,   -11.14754098]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
              },
              {
                name: 'Izquierda',
                data : [
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
                name: 'Derecha',
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
              }
            ]
    };
    this.fp_ank_high_chart_data = {
            
            chart: {
                type: "spline",
                height: 350
            },
            title: {

                text: 'Foot Varus/Valgous [deg]'
            },
            subtitle: {

                text: ''
            },
            xAxis: {
                type: 'float',
                title: {
                    text: 'Gait cicle'
                }
            },
            yAxis: {
                title: {
                    text: 'Valg / Var'
                },
                max: 30,
                min: -5
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Ang: {point.y:.2f}°',
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
                name: 'Rangos Normales',
                data: [
                    [0.0,   3.387096774,    -1.451612903],
                    [2.857142857,   3.064516129,    -1.774193548],
                    [5.714285714,   2.580645161,    -2.419354839],
                    [8.571428571,   2.258064516,    -2.741935484],
                    [11.42857143,   2.096774194,    -2.903225806],
                    [14.28571429,   2.096774194,    -3.064516129],
                    [17.14285714,   2.258064516,    -3.064516129],
                    [20.0,  2.741935484,    -3.064516129],
                    [22.85714286,   2.903225806,    -3.225806452],
                    [25.71428571,   3.064516129,    -3.225806452],
                    [28.57142857,   3.064516129,    -3.548387097],
                    [31.42857143,   2.903225806,    -3.387096774],
                    [34.28571429,   3.064516129,    -3.709677419],
                    [37.14285714,   3.225806452,    -3.709677419],
                    [40.0,  3.225806452,    -4.032258065],
                    [42.85714286,   3.548387097,    -4.193548387],
                    [45.71428571,   3.870967742,    -3.870967742],
                    [48.57142857,   4.35483871, -3.709677419],
                    [51.42857143,   4.516129032,    -3.709677419],
                    [54.28571429,   3.870967742,    -3.548387097],
                    [57.14285714,   2.580645161,    -3.064516129],
                    [60.0,  1.129032258,    -4.193548387],
                    [62.85714286,   0.3225806452,   -5.806451613],
                    [65.71428571,   0.8064516129,   -5.967741935],
                    [68.57142857,   1.451612903,    -4.193548387],
                    [71.42857143,   2.096774194,    -3.064516129],
                    [74.28571429,   2.580645161,    -2.419354839],
                    [77.14285714,   3.225806452,    -2.258064516],
                    [80.0,  3.548387097,    -1.774193548],
                    [82.85714286,   3.225806452,    -1.290322581],
                    [85.71428571,   2.741935484,    -1.129032258],
                    [88.57142857,   2.903225806,    -1.290322581],
                    [91.42857143,   3.870967742,    -1.451612903],
                    [94.28571429,   4.35483871, -1.290322581],
                    [97.14285714,   4.35483871, -0.9677419355],
                    [100.0, 4.032258065,    -0.8064516129]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
              },
              {
                name: 'Izquierda',
                data : [
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
                name: 'Derecha',
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
              }
            ]
    };

    this.tp_plv_high_chart_data = {
            
            chart: {
                type: "spline",
                height: 350
            },
            title: {

                text: 'Pelvic Rotation [deg]'
            },
            subtitle: {

                text: ''
            },
            xAxis: {
                type: 'float',
                title: {
                    text: 'Gait cicle'
                }
            },
            yAxis: {
                title: {
                    text: 'Ext / Int'
                },
                max: 30,
                min: -30
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Ang: {point.y:.2f}°',
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
                name: 'Rangos Normales',
                data: [
                    [0.0,   7.252747253,    0.3296703297],
                    [2.941176471,   6.923076923,    0.3296703297],
                    [5.882352941,   5.934065934,    0.3296703297],
                    [8.823529412,   4.945054945,    -0.6593406593],
                    [11.76470588,   3.956043956,    -1.318681319],
                    [14.70588235,   3.956043956,    -0.989010989],
                    [17.64705882,   4.285714286,    -0.3296703297],
                    [20.58823529,   4.615384615,    0.3296703297],
                    [23.52941176,   4.945054945,    0.3296703297],
                    [26.47058824,   4.945054945,    0.3296703297],
                    [29.41176471,   4.615384615,    -0.3296703297],
                    [32.35294118,   3.956043956,    -0.989010989],
                    [35.29411765,   3.296703297,    -1.318681319],
                    [38.23529412,   2.307692308,    -2.637362637],
                    [41.17647059,   0.6593406593,   -2.967032967],
                    [44.11764706,   -1.318681319,   -4.285714286],
                    [47.05882353,   -1.978021978,   -4.945054945],
                    [50.0,  -2.307692308,   -5.274725275],
                    [52.94117647,   -1.978021978,   -5.274725275],
                    [55.88235294,   -0.989010989,   -4.945054945],
                    [58.82352941,   0.3296703297,   -4.615384615],
                    [61.76470588,   1.648351648,    -4.615384615],
                    [64.70588235,   2.307692308,    -4.615384615],
                    [67.64705882,   1.318681319,    -4.945054945],
                    [70.58823529,   0.989010989,    -4.945054945],
                    [73.52941176,   1.318681319,    -5.274725275],
                    [76.47058824,   1.318681319,    -4.615384615],
                    [79.41176471,   1.648351648,    -3.956043956],
                    [82.35294118,   1.978021978,    -3.626373626],
                    [85.29411765,   2.637362637,    -3.296703297],
                    [88.23529412,   3.626373626,    -2.967032967],
                    [91.17647059,   4.615384615,    -2.307692308],
                    [94.11764706,   5.934065934,    -1.318681319],
                    [97.05882353,   6.923076923,    -0.3296703297],
                    [100.0, 7.252747253,    0.3296703297]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
              },
              {
                name: 'Izquierda',
                data : [
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
                name: 'Derecha',
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
              }
            ]
    };
    this.tp_hip_high_chart_data = {
            
            chart: {
                type: "spline",
                height: 350
            },
            title: {

                text: 'Hip Rotation [deg]'
            },
            subtitle: {

                text: ''
            },
            xAxis: {
                type: 'float',
                title: {
                    text: 'Gait cicle'
                }
            },
            yAxis: {
                title: {
                    text: 'Ext / Int'
                },
                max: 30,
                min: -30
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Ang: {point.y:.2f}°',
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
                name: 'Rangos Normales',
                data: [
                    [0.0,   3.606557377,    -8.852459016],
                    [2.941176471,   2.62295082, -7.540983607],
                    [5.882352941,   2.62295082, -5.901639344],
                    [8.823529412,   4.918032787,    -4.590163934],
                    [11.76470588,   7.540983607,    -2.950819672],
                    [14.70588235,   8.852459016,    -2.950819672],
                    [17.64705882,   9.180327869,    -2.62295082],
                    [20.58823529,   8.852459016,    -2.295081967],
                    [23.52941176,   8.852459016,    -1.31147541],
                    [26.47058824,   9.180327869,    -0.9836065574],
                    [29.41176471,   10.16393443,    -1.31147541],
                    [32.35294118,   11.14754098,    -0.6557377049],
                    [35.29411765,   12.13114754,    0.9836065574],
                    [38.23529412,   14.09836066,    1.967213115],
                    [41.17647059,   15.40983607,    2.295081967],
                    [44.11764706,   15.73770492,    1.967213115],
                    [47.05882353,   14.42622951,    1.31147541],
                    [50.0,  13.7704918, 0.3278688525],
                    [52.94117647,   13.1147541, -0.9836065574],
                    [55.88235294,   11.80327869,    -2.950819672],
                    [58.82352941,   9.508196721,    -4.918032787],
                    [61.76470588,   7.868852459,    -6.557377049],
                    [64.70588235,   6.229508197,    -7.540983607],
                    [67.64705882,   4.262295082,    -8.196721311],
                    [70.58823529,   2.62295082, -8.196721311],
                    [73.52941176,   0.6557377049,   -7.868852459],
                    [76.47058824,   0.3278688525,   -7.540983607],
                    [79.41176471,   -0.3278688525,  -6.885245902],
                    [82.35294118,   0.3278688525,   -5.245901639],
                    [85.29411765,   0.6557377049,   -4.262295082],
                    [88.23529412,   2.295081967,    -4.262295082],
                    [91.17647059,   3.278688525,    -5.573770492],
                    [94.11764706,   4.262295082,    -6.885245902],
                    [97.05882353,   4.918032787,    -8.196721311],
                    [100.0, 4.590163934,    -7.540983607]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
              },
              {
                name: 'Izquierda',
                data : [
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
                name: 'Derecha',
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
              }
            ]
    };
    this.tp_kne_high_chart_data = {
            
            chart: {
                type: "spline",
                height: 350
            },
            title: {

                text: 'Keen Rotation [deg]'
            },
            subtitle: {

                text: ''
            },
            xAxis: {
                type: 'float',
                title: {
                    text: 'Gait cicle'
                }
            },
            yAxis: {
                title: {
                    text: 'Ext / Int'
                },
                max: 40,
                min: -40
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Ang: {point.y:.2f}°',
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
                name: 'Rangos Normales',
                data: [
                    [0.0,   -16.61202186,   -27.54098361],
                    [2.941176471,   -15.73770492,   -28.41530055],
                    [5.882352941,   -14.86338798,   -28.85245902],
                    [8.823529412,   -13.1147541,    -28.41530055],
                    [11.76470588,   -10.92896175,   -26.66666667],
                    [14.70588235,   -10.92896175,   -26.2295082],
                    [17.64705882,   -11.80327869,   -27.97814208],
                    [20.58823529,   -12.24043716,   -29.28961749],
                    [23.52941176,   -11.80327869,   -29.28961749],
                    [26.47058824,   -10.49180328,   -28.41530055],
                    [29.41176471,   -10.92896175,   -28.85245902],
                    [32.35294118,   -11.80327869,   -28.85245902],
                    [35.29411765,   -12.24043716,   -28.85245902],
                    [38.23529412,   -13.1147541,    -28.85245902],
                    [41.17647059,   -13.1147541,    -29.28961749],
                    [44.11764706,   -12.67759563,   -29.28961749],
                    [47.05882353,   -11.80327869,   -28.41530055],
                    [50.0,  -10.49180328,   -27.54098361],
                    [52.94117647,   -10.05464481,   -27.10382514],
                    [55.88235294,   -10.92896175,   -28.41530055],
                    [58.82352941,   -13.55191257,   -31.03825137],
                    [61.76470588,   -14.42622951,   -32.34972678],
                    [64.70588235,   -13.1147541,    -32.34972678],
                    [67.64705882,   -9.180327869,   -31.47540984],
                    [70.58823529,   -6.120218579,   -31.03825137],
                    [73.52941176,   -5.245901639,   -30.16393443],
                    [76.47058824,   -6.994535519,   -29.28961749],
                    [79.41176471,   -8.743169399,   -28.85245902],
                    [82.35294118,   -10.92896175,   -30.16393443],
                    [85.29411765,   -14.86338798,   -32.34972678],
                    [88.23529412,   -17.92349727,   -32.78688525],
                    [91.17647059,   -21.42076503,   -31.91256831],
                    [94.11764706,   -20.98360656,   -28.85245902],
                    [97.05882353,   -19.67213115,   -27.10382514],
                    [100.0, -19.23497268,   -27.10382514]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
              },
              {
                name: 'Izquierda',
                data : [
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
                name: 'Derecha',
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
              }
            ]
    };
    this.tp_ank_high_chart_data = {
            
            chart: {
                type: "spline",
                height: 350
            },
            title: {

                text: 'Foot Progression Angle [deg]'
            },
            subtitle: {

                text: ''
            },
            xAxis: {
                type: 'float',
                title: {
                    text: 'Gait cicle'
                }
            },
            yAxis: {
                title: {
                    text: 'Ext / Int'
                },
                max: 40,
                min: -30
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Ang: {point.y:.2f}°',
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
                name: 'Rangos Normales',
                data: [
                    [0.0,   -9.065934066,   -20.6043956],
                    [2.941176471,   -9.065934066,   -20.19230769],
                    [5.882352941,   -9.478021978,   -19.78021978],
                    [8.823529412,   -10.3021978,    -19.78021978],
                    [11.76470588,   -11.53846154,   -19.36813187],
                    [14.70588235,   -11.95054945,   -18.95604396],
                    [17.64705882,   -11.53846154,   -18.54395604],
                    [20.58823529,   -11.12637363,   -17.71978022],
                    [23.52941176,   -10.3021978,    -17.30769231],
                    [26.47058824,   -9.89010989,    -16.48351648],
                    [29.41176471,   -9.065934066,   -16.07142857],
                    [32.35294118,   -8.653846154,   -15.65934066],
                    [35.29411765,   -8.241758242,   -16.07142857],
                    [38.23529412,   -9.478021978,   -16.48351648],
                    [41.17647059,   -10.3021978,    -17.30769231],
                    [44.11764706,   -10.3021978,    -17.71978022],
                    [47.05882353,   -9.89010989,    -18.13186813],
                    [50.0,  -9.065934066,   -18.13186813],
                    [52.94117647,   -8.241758242,   -17.30769231],
                    [55.88235294,   -7.417582418,   -16.48351648],
                    [58.82352941,   -6.593406593,   -17.30769231],
                    [61.76470588,   -4.532967033,   -20.19230769],
                    [64.70588235,   -2.884615385,   -25.13736264],
                    [67.64705882,   -4.532967033,   -28.84615385],
                    [70.58823529,   -6.181318681,   -30.08241758],
                    [73.52941176,   -7.005494505,   -30.08241758],
                    [76.47058824,   -7.82967033,    -30.08241758],
                    [79.41176471,   -9.065934066,   -30.08241758],
                    [82.35294118,   -11.95054945,   -30.08241758],
                    [85.29411765,   -14.42307692,   -30.08241758],
                    [88.23529412,   -14.83516484,   -28.43406593],
                    [91.17647059,   -11.53846154,   -25.54945055],
                    [94.11764706,   -9.065934066,   -22.66483516],
                    [97.05882353,   -8.241758242,   -20.6043956],
                    [100.0, -8.241758242,   -20.6043956]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
              },
              {
                name: 'Izquierda',
                data : [
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
                name: 'Derecha',
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
              }
            ]
    };

  }

  public postKinematicAnalysisAsJson_thisShouldBeDoneByThe3DSystem()
  {

    let json =      
    {
      "patient_id": "5851f5c773dc11072a0a1a90",
      "medical_center_id" : "5851f65673dc11072a0a1a93",
      "therapist_id" : "599cae293a2b30157b11a18a",
      "accesories": {
        "is_assited_walk": true,
        "is_treadmills": true,
        "is_walker": true,
        "is_orthoses": true,
        "is_parallel_bars": false
      },
      "accesories_descriptions": {  
        "assited_walk": "No se necesito",
        "treadmills": "Solo para precalentamiento",
        "walker": "Si se utlizó",
        "orthoses": "No se necesito",
        "parallel_bars": ""
      },
      "lkne": [{
          "x": 123.31,
          "y": 543.4,
          "z": 54.54
      }, {
          "x": 123.31,
          "y": 543.4,
          "z": 54.54
      },{
          "x": 123.31,
          "y": 543.4,
          "z": 54.54
      },{
          "x": 123.31,
          "y": 543.4,
          "z": 54.54
      },{
          "x": 123.31,
          "y": 543.4,
          "z": 54.54
      }],

        "spl_hip": [
            12.1234567890,
            14.1234567890,
            16.1234567890,
            12.1234567890,
            17.1234567890,
            14.12345678901234567890
        ],
        
      "spl_kne": {
        "patient_angles": [
          [0, 0],
              [4.545454545, 0.25],
              [9.090909091, 7.41],
              [13.63636364, 11.64],
              [18.18181818, 3.6],
              [22.72727273, 19.55],
              [27.27272727, 15.62],
              [31.81818182, 12.5],
              [36.36363636, 22.42],
              [40.90909091, 20.74],
              [45.45454545, 32.62],
              [50, 2.69],
              [54.54545455, 2.81],
              [59.09090909, 32.63],
              [63.63636364, 22.77],
              [68.18181818, 12.68],
              [72.72727273, 6.56],
              [77.27272727, 2.39],
              [81.81818182, 2.3],
              [86.36363636, 2],
              [90.90909091, 1.85],
              [95.45454545, 1.49],
              [100, 2.08]
        ],
        "normal_ranges": [
          [0, 14.72677596, 3.825136612],
                [3.03030303, 15.10928962, 3.825136612],
                [6.060606061, 15.30054645, 3.825136612],
                [9.090909091, 15.30054645, 4.016393443],
                [12.12121212, 14.72677596, 4.207650273],
                [15.15151515, 14.53551913, 4.398907104],
                [18.18181818, 14.3442623, 4.590163934],
                [21.21212121, 13.96174863, 4.781420765],
                [24.24242424, 13.96174863, 5.163934426],
                [27.27272727, 14.15300546, 5.546448087],
                [30.3030303, 13.96174863, 5.737704918],
                [33.33333333, 13.7704918, 5.928961749],
                [36.36363636, 13.7704918, 6.120218579],
                [39.39393939, 13.57923497, 6.120218579],
                [42.42424242, 13.57923497, 5.928961749],
                [45.45454545, 13.96174863, 5.546448087],
                [48.48484848, 14.3442623, 5.163934426],
                [51.51515152, 14.3442623, 4.972677596],
                [54.54545455, 14.15300546, 4.781420765],
                [57.57575758, 13.96174863, 4.590163934],
                [60.60606061, 13.19672131, 4.207650273],
                [63.63636364, 12.81420765, 4.016393443],
                [66.66666667, 13.00546448, 4.016393443],
                [69.6969697, 13.00546448, 4.016393443],
                [72.72727273, 13.38797814, 4.207650273],
                [75.75757576, 13.7704918, 4.590163934],
                [78.78787879, 14.15300546, 4.781420765],
                [81.81818182, 14.15300546, 4.972677596],
                [84.84848485, 24.15300546, 20.163934426],
                [87.87878788, 34.3442623, 25.355191257],
                [90.90909091, 24.3442623, 20.163934426],
                [93.93939394, 24.15300546, 18.972677596],
                [96.96969697, 14.15300546, 4.781420765],
                [100, 14.53551913, 4.207650273]
        ]
      },
      
      //  attribute :  Object ;
      "sp_kne_high_chart_data" : {"chart":{"type":"spline","height":350},"title":{"text":"Keen Flex/Ext [deg]"},"subtitle":{"text":""},"xAxis":{"type":"float","title":{"text":"Gait cicle"}},"yAxis":{"title":{"text":"Ext / Flex"},"max":90,"min":-20},"tooltip":{"headerFormat":"<b>{series.name}</b><br>","pointFormat":"Ang: {point.y:.2f}°","crosshairs":true,"shared":false},"plotOptions":{"spline":{"marker":{"enabled":false}}},"series":[{"name":"Rangos Normales","data":[[0,10.21857923,5.409836066],[2.941176471,13.22404372,9.016393443],[5.882352941,18.63387978,12.62295082],[8.823529412,23.44262295,15.6284153],[11.76470588,25.84699454,18.03278689],[14.70588235,26.44808743,19.23497268],[17.64705882,24.64480874,18.03278689],[20.58823529,22.24043716,14.42622951],[23.52941176,19.23497268,13.22404372],[26.47058824,16.83060109,10.81967213],[29.41176471,12.62295082,7.213114754],[32.35294118,9.617486339,4.207650273],[35.29411765,7.81420765,1.803278689],[38.23529412,6.612021858,0.6010928962],[41.17647059,6.612021858,0.6010928962],[44.11764706,7.213114754,0.6010928962],[47.05882353,9.016393443,1.202185792],[50,12.02185792,3.606557377],[52.94117647,16.2295082,7.81420765],[55.88235294,23.44262295,14.42622951],[58.82352941,31.8579235,22.24043716],[61.76470588,41.47540984,33.66120219],[64.70588235,51.09289617,45.68306011],[67.64705882,60.10928962,54.09836066],[70.58823529,67.92349727,58.90710383],[73.52941176,71.53005464,60.10928962],[76.47058824,72.13114754,57.70491803],[79.41176471,69.12568306,53.49726776],[82.35294118,63.71584699,46.28415301],[85.29411765,55.30054645,37.86885246],[88.23529412,43.87978142,25.84699454],[91.17647059,30.6557377,13.82513661],[94.11764706,19.23497268,6.010928962],[97.05882353,10.81967213,3.606557377],[100,11.42076503,5.409836066]],"type":"arearange","lineWidth":0,"linkedTo":":previous","fillOpacity":0.3,"zIndex":0},{"name":"Izquierda","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"},{"name":"Derecha","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"}]},
      "sp_ank_high_chart_data" : {"chart":{"type":"spline","height":350},"title":{"text":"Ankle Plant/DorsiFlex [deg]"},"subtitle":{"text":""},"xAxis":{"type":"float","title":{"text":"Gait cicle"}},"yAxis":{"title":{"text":"Plant / Dors"},"max":35,"min":-30},"tooltip":{"headerFormat":"<b>{series.name}</b><br>","pointFormat":"Ang: {point.y:.2f}°","crosshairs":true,"shared":false},"plotOptions":{"spline":{"marker":{"enabled":false}}},"series":[{"name":"Rangos Normales","data":[[0,6.639784946,0.3494623656],[2.941176471,4.193548387,-2.446236559],[5.882352941,1.397849462,-4.193548387],[8.823529412,-0.3494623656,-4.193548387],[11.76470588,1.048387097,-1.747311828],[14.70588235,3.494623656,1.048387097],[17.64705882,6.290322581,3.14516129],[20.58823529,8.037634409,4.892473118],[23.52941176,9.784946237,5.940860215],[26.47058824,10.83333333,6.989247312],[29.41176471,11.88172043,6.989247312],[32.35294118,12.2311828,7.338709677],[35.29411765,12.58064516,7.338709677],[38.23529412,13.97849462,7.688172043],[41.17647059,15.37634409,8.037634409],[44.11764706,16.77419355,7.688172043],[47.05882353,17.12365591,6.989247312],[50,16.77419355,5.241935484],[52.94117647,14.32795699,2.446236559],[55.88235294,9.435483871,-2.096774194],[58.82352941,2.096774194,-8.387096774],[61.76470588,-5.940860215,-15.37634409],[64.70588235,-9.086021505,-20.2688172],[67.64705882,-6.989247312,-20.61827957],[70.58823529,-3.14516129,-16.42473118],[73.52941176,1.397849462,-9.086021505],[76.47058824,5.591397849,-3.844086022],[79.41176471,8.73655914,1.048387097],[82.35294118,10.48387097,4.193548387],[85.29411765,11.1827957,5.591397849],[88.23529412,10.83333333,5.940860215],[91.17647059,9.435483871,4.543010753],[94.11764706,8.037634409,1.747311828],[97.05882353,7.338709677,0.6989247312],[100,5.940860215,0.6989247312]],"type":"arearange","lineWidth":0,"linkedTo":":previous","fillOpacity":0.3,"zIndex":0},{"name":"Izquierda","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"},{"name":"Derecha","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"}]},
      "sp_plv_high_chart_data" : {"chart":{"type":"spline","height":350},"title":{"text":"Pelvic Tilt [deg]"},"subtitle":{"text":""},"xAxis":{"type":"float","title":{"text":"Gait cicle"}},"yAxis":{"title":{"text":"Post / Ant"},"max":30,"min":-5},"tooltip":{"headerFormat":"<b>{series.name}</b><br>","pointFormat":"Ang: {point.y:.2f}°","crosshairs":true,"shared":false},"plotOptions":{"spline":{"marker":{"enabled":false}}},"series":[{"name":"Rangos Normales","data":[[0,14.72677596,3.825136612],[3.03030303,15.10928962,3.825136612],[6.060606061,15.30054645,3.825136612],[9.090909091,15.30054645,4.016393443],[12.12121212,14.72677596,4.207650273],[15.15151515,14.53551913,4.398907104],[18.18181818,14.3442623,4.590163934],[21.21212121,13.96174863,4.781420765],[24.24242424,13.96174863,5.163934426],[27.27272727,14.15300546,5.546448087],[30.3030303,13.96174863,5.737704918],[33.33333333,13.7704918,5.928961749],[36.36363636,13.7704918,6.120218579],[39.39393939,13.57923497,6.120218579],[42.42424242,13.57923497,5.928961749],[45.45454545,13.96174863,5.546448087],[48.48484848,14.3442623,5.163934426],[51.51515152,14.3442623,4.972677596],[54.54545455,14.15300546,4.781420765],[57.57575758,13.96174863,4.590163934],[60.60606061,13.19672131,4.207650273],[63.63636364,12.81420765,4.016393443],[66.66666667,13.00546448,4.016393443],[69.6969697,13.00546448,4.016393443],[72.72727273,13.38797814,4.207650273],[75.75757576,13.7704918,4.590163934],[78.78787879,14.15300546,4.781420765],[81.81818182,14.15300546,4.972677596],[84.84848485,14.15300546,5.163934426],[87.87878788,14.3442623,5.355191257],[90.90909091,14.3442623,5.163934426],[93.93939394,14.15300546,4.972677596],[96.96969697,14.15300546,4.781420765],[100,14.53551913,4.207650273]],"type":"arearange","lineWidth":0,"linkedTo":":previous","fillOpacity":0.3,"zIndex":0},{"name":"Izquierda","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"},{"name":"Derecha","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"}]},
      "sp_hip_high_chart_data" : {"chart":{"type":"spline","height":350},"title":{"text":"Hip Flex/Ext [deg]"},"subtitle":{"text":""},"xAxis":{"type":"float","title":{"text":"Gait cicle"}},"yAxis":{"title":{"text":"Ext / Flex"},"max":60,"min":-20},"tooltip":{"headerFormat":"<b>{series.name}</b><br>","pointFormat":"Ang: {point.y:.2f}°","crosshairs":true,"shared":false},"plotOptions":{"spline":{"marker":{"enabled":false}}},"series":[{"name":"Rangos Normales","data":[[0,42.40437158,27.97814208],[2.941176471,43.27868852,27.54098361],[5.882352941,44.15300546,27.54098361],[8.823529412,42.84153005,26.66666667],[11.76470588,39.78142077,24.91803279],[14.70588235,36.72131148,22.73224044],[17.64705882,31.91256831,20.10928962],[20.58823529,27.54098361,15.73770492],[23.52941176,22.73224044,12.24043716],[26.47058824,18.36065574,7.868852459],[29.41176471,13.55191257,3.93442623],[32.35294118,8.743169399,0.4371584699],[35.29411765,4.371584699,-3.93442623],[38.23529412,0.8743169399,-7.431693989],[41.17647059,-2.62295082,-10.49180328],[44.11764706,-5.245901639,-13.98907104],[47.05882353,-6.994535519,-16.61202186],[50,-8.306010929,-17.92349727],[52.94117647,-8.743169399,-17.92349727],[55.88235294,-8.306010929,-17.4863388],[58.82352941,-4.808743169,-14.86338798],[61.76470588,-0.8743169399,-10.49180328],[64.70588235,5.245901639,-4.371584699],[67.64705882,11.80327869,3.49726776],[70.58823529,19.23497268,10.05464481],[73.52941176,26.2295082,15.73770492],[76.47058824,33.22404372,20.98360656],[79.41176471,38.90710383,24.91803279],[82.35294118,43.27868852,28.41530055],[85.29411765,45.46448087,30.16393443],[88.23529412,46.33879781,30.6010929],[91.17647059,45.0273224,29.28961749],[94.11764706,44.15300546,28.41530055],[97.05882353,42.40437158,27.97814208],[100,41.96721311,27.97814208]],"type":"arearange","lineWidth":0,"linkedTo":":previous","fillOpacity":0.3,"zIndex":0},{"name":"Izquierda","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"},{"name":"Derecha","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"}]},
      "fp_kne_high_chart_data" : {"chart":{"type":"spline","height":350},"title":{"text":"Keen Varus/Valgus [deg]"},"subtitle":{"text":""},"xAxis":{"type":"float","title":{"text":"Gait cicle"}},"yAxis":{"title":{"text":"Valg / Var"},"max":15,"min":-15},"tooltip":{"headerFormat":"<b>{series.name}</b><br>","pointFormat":"Ang: {point.y:.2f}°","crosshairs":true,"shared":false},"plotOptions":{"spline":{"marker":{"enabled":false}}},"series":[{"name":"Rangos Normales","data":[[0,-1.967213115,-8.852459016],[2.941176471,-2.295081967,-9.508196721],[5.882352941,-2.131147541,-10],[8.823529412,-1.475409836,-9.180327869],[11.76470588,-0.6557377049,-8.032786885],[14.70588235,0.1639344262,-6.557377049],[17.64705882,-0.3278688525,-5.901639344],[20.58823529,-0.8196721311,-5.409836066],[23.52941176,-0.8196721311,-6.06557377],[26.47058824,-1.147540984,-6.885245902],[29.41176471,-1.639344262,-8.032786885],[32.35294118,-2.131147541,-8.68852459],[35.29411765,-2.786885246,-9.180327869],[38.23529412,-3.114754098,-9.344262295],[41.17647059,-3.114754098,-9.344262295],[44.11764706,-3.278688525,-9.508196721],[47.05882353,-3.278688525,-9.672131148],[50,-3.114754098,-9.672131148],[52.94117647,-2.295081967,-9.672131148],[55.88235294,-1.31147541,-8.68852459],[58.82352941,-0.1639344262,-7.049180328],[61.76470588,1.31147541,-5.737704918],[64.70588235,2.295081967,-5.573770492],[67.64705882,1.803278689,-7.213114754],[70.58823529,1.147540984,-9.016393443],[73.52941176,0.8196721311,-9.672131148],[76.47058824,1.31147541,-8.852459016],[79.41176471,1.967213115,-7.213114754],[82.35294118,1.967213115,-5.409836066],[85.29411765,1.639344262,-4.098360656],[88.23529412,0.9836065574,-3.93442623],[91.17647059,-0.1639344262,-5.573770492],[94.11764706,-0.9836065574,-8.032786885],[97.05882353,-1.147540984,-10.32786885],[100,-1.147540984,-11.14754098]],"type":"arearange","lineWidth":0,"linkedTo":":previous","fillOpacity":0.3,"zIndex":0},{"name":"Izquierda","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"},{"name":"Derecha","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"}]},
      "fp_ank_high_chart_data" : {"chart":{"type":"spline","height":350},"title":{"text":"Fo0t Varus/Valgous [deg]"},"subtitle":{"text":""},"xAxis":{"type":"float","title":{"text":"Gait cicle"}},"yAxis":{"title":{"text":"Valg / Var"},"max":30,"min":-5},"tooltip":{"headerFormat":"<b>{series.name}</b><br>","pointFormat":"Ang: {point.y:.2f}°","crosshairs":true,"shared":false},"plotOptions":{"spline":{"marker":{"enabled":false}}},"series":[{"name":"Rangos Normales","data":[[0,3.387096774,-1.451612903],[2.857142857,3.064516129,-1.774193548],[5.714285714,2.580645161,-2.419354839],[8.571428571,2.258064516,-2.741935484],[11.42857143,2.096774194,-2.903225806],[14.28571429,2.096774194,-3.064516129],[17.14285714,2.258064516,-3.064516129],[20,2.741935484,-3.064516129],[22.85714286,2.903225806,-3.225806452],[25.71428571,3.064516129,-3.225806452],[28.57142857,3.064516129,-3.548387097],[31.42857143,2.903225806,-3.387096774],[34.28571429,3.064516129,-3.709677419],[37.14285714,3.225806452,-3.709677419],[40,3.225806452,-4.032258065],[42.85714286,3.548387097,-4.193548387],[45.71428571,3.870967742,-3.870967742],[48.57142857,4.35483871,-3.709677419],[51.42857143,4.516129032,-3.709677419],[54.28571429,3.870967742,-3.548387097],[57.14285714,2.580645161,-3.064516129],[60,1.129032258,-4.193548387],[62.85714286,0.3225806452,-5.806451613],[65.71428571,0.8064516129,-5.967741935],[68.57142857,1.451612903,-4.193548387],[71.42857143,2.096774194,-3.064516129],[74.28571429,2.580645161,-2.419354839],[77.14285714,3.225806452,-2.258064516],[80,3.548387097,-1.774193548],[82.85714286,3.225806452,-1.290322581],[85.71428571,2.741935484,-1.129032258],[88.57142857,2.903225806,-1.290322581],[91.42857143,3.870967742,-1.451612903],[94.28571429,4.35483871,-1.290322581],[97.14285714,4.35483871,-0.9677419355],[100,4.032258065,-0.8064516129]],"type":"arearange","lineWidth":0,"linkedTo":":previous","fillOpacity":0.3,"zIndex":0},{"name":"Izquierda","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"},{"name":"Derecha","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"}]},
      "fp_plv_high_chart_data" : {"chart":{"type":"spline","height":350},"title":{"text":"Pelvic Obliquity [deg]"},"subtitle":{"text":""},"xAxis":{"type":"float","title":{"text":"Gait cicle"}},"yAxis":{"title":{"text":"Down / Up"},"max":15,"min":-15},"tooltip":{"headerFormat":"<b>{series.name}</b><br>","pointFormat":"Ang: {point.y:.2f}°","crosshairs":true,"shared":false},"plotOptions":{"spline":{"marker":{"enabled":false}}},"series":[{"name":"Rangos Normales","data":[[0,2.295081967,0.4918032787],[2.941176471,2.786885246,0.8196721311],[5.882352941,3.770491803,1.475409836],[8.823529412,5.245901639,2.459016393],[11.76470588,6.557377049,3.606557377],[14.70588235,7.37704918,4.590163934],[17.64705882,7.049180328,4.426229508],[20.58823529,6.229508197,3.442622951],[23.52941176,5.409836066,2.295081967],[26.47058824,4.262295082,1.147540984],[29.41176471,2.950819672,0.3278688525],[32.35294118,1.803278689,-0.3278688525],[35.29411765,0.8196721311,-0.9836065574],[38.23529412,0.1639344262,-1.147540984],[41.17647059,-0.1639344262,-1.147540984],[44.11764706,-0.1639344262,-1.147540984],[47.05882353,-0.1639344262,-0.9836065574],[50,-0.3278688525,-1.147540984],[52.94117647,-0.8196721311,-1.967213115],[55.88235294,-1.31147541,-3.278688525],[58.82352941,-2.131147541,-4.918032787],[61.76470588,-2.950819672,-6.393442623],[64.70588235,-3.770491803,-7.049180328],[67.64705882,-3.442622951,-6.885245902],[70.58823529,-2.62295082,-6.229508197],[73.52941176,-1.475409836,-5.081967213],[76.47058824,-0.4918032787,-3.770491803],[79.41176471,0.1639344262,-2.62295082],[82.35294118,0.4918032787,-1.639344262],[85.29411765,1.147540984,-0.9836065574],[88.23529412,1.639344262,-0.6557377049],[91.17647059,1.639344262,-0.3278688525],[94.11764706,1.475409836,-0.1639344262],[97.05882353,1.475409836,0.1639344262],[100,2.295081967,0.6557377049]],"type":"arearange","lineWidth":0,"linkedTo":":previous","fillOpacity":0.3,"zIndex":0},{"name":"Izquierda","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"},{"name":"Derecha","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"}]},
      "fp_hip_high_chart_data" : {"chart":{"type":"spline","height":350},"title":{"text":"Hip Ad/Abduktion [deg]"},"subtitle":{"text":""},"xAxis":{"type":"float","title":{"text":"Gait cicle"}},"yAxis":{"title":{"text":"Abd / Add"},"max":30,"min":-30},"tooltip":{"headerFormat":"<b>{series.name}</b><br>","pointFormat":"Ang: {point.y:.2f}°","crosshairs":true,"shared":false},"plotOptions":{"spline":{"marker":{"enabled":false}}},"series":[{"name":"Rangos Normales","data":[[0,6.885245902,2.950819672],[2.941176471,7.868852459,4.262295082],[5.882352941,9.836065574,6.557377049],[8.823529412,12.45901639,8.852459016],[11.76470588,14.75409836,10.81967213],[14.70588235,16.39344262,12.13114754],[17.64705882,16.39344262,11.80327869],[20.58823529,15.40983607,10.49180328],[23.52941176,14.75409836,9.508196721],[26.47058824,14.09836066,8.852459016],[29.41176471,13.44262295,8.196721311],[32.35294118,12.78688525,8.196721311],[35.29411765,12.13114754,8.196721311],[38.23529412,11.47540984,8.196721311],[41.17647059,11.47540984,8.196721311],[44.11764706,11.14754098,7.540983607],[47.05882353,11.47540984,6.885245902],[50,10.49180328,5.901639344],[52.94117647,9.508196721,4.262295082],[55.88235294,8.524590164,1.967213115],[58.82352941,5.901639344,-1.31147541],[61.76470588,3.606557377,-3.93442623],[64.70588235,1.31147541,-5.901639344],[67.64705882,0.9836065574,-4.918032787],[70.58823529,1.639344262,-3.93442623],[73.52941176,2.950819672,-2.62295082],[76.47058824,3.93442623,-1.639344262],[79.41176471,4.262295082,-1.31147541],[82.35294118,4.590163934,-0.6557377049],[85.29411765,5.245901639,0.6557377049],[88.23529412,5.573770492,0.9836065574],[91.17647059,5.901639344,0.9836065574],[94.11764706,5.901639344,0.6557377049],[97.05882353,6.229508197,0.6557377049],[100,7.540983607,1.639344262]],"type":"arearange","lineWidth":0,"linkedTo":":previous","fillOpacity":0.3,"zIndex":0},{"name":"Izquierda","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"},{"name":"Derecha","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"}]},
      "tp_kne_high_chart_data" : {"chart":{"type":"spline","height":350},"title":{"text":"Keen Rotation [deg]"},"subtitle":{"text":""},"xAxis":{"type":"float","title":{"text":"Gait cicle"}},"yAxis":{"title":{"text":"Ext / Int"},"max":40,"min":-40},"tooltip":{"headerFormat":"<b>{series.name}</b><br>","pointFormat":"Ang: {point.y:.2f}°","crosshairs":true,"shared":false},"plotOptions":{"spline":{"marker":{"enabled":false}}},"series":[{"name":"Rangos Normales","data":[[0,-16.61202186,-27.54098361],[2.941176471,-15.73770492,-28.41530055],[5.882352941,-14.86338798,-28.85245902],[8.823529412,-13.1147541,-28.41530055],[11.76470588,-10.92896175,-26.66666667],[14.70588235,-10.92896175,-26.2295082],[17.64705882,-11.80327869,-27.97814208],[20.58823529,-12.24043716,-29.28961749],[23.52941176,-11.80327869,-29.28961749],[26.47058824,-10.49180328,-28.41530055],[29.41176471,-10.92896175,-28.85245902],[32.35294118,-11.80327869,-28.85245902],[35.29411765,-12.24043716,-28.85245902],[38.23529412,-13.1147541,-28.85245902],[41.17647059,-13.1147541,-29.28961749],[44.11764706,-12.67759563,-29.28961749],[47.05882353,-11.80327869,-28.41530055],[50,-10.49180328,-27.54098361],[52.94117647,-10.05464481,-27.10382514],[55.88235294,-10.92896175,-28.41530055],[58.82352941,-13.55191257,-31.03825137],[61.76470588,-14.42622951,-32.34972678],[64.70588235,-13.1147541,-32.34972678],[67.64705882,-9.180327869,-31.47540984],[70.58823529,-6.120218579,-31.03825137],[73.52941176,-5.245901639,-30.16393443],[76.47058824,-6.994535519,-29.28961749],[79.41176471,-8.743169399,-28.85245902],[82.35294118,-10.92896175,-30.16393443],[85.29411765,-14.86338798,-32.34972678],[88.23529412,-17.92349727,-32.78688525],[91.17647059,-21.42076503,-31.91256831],[94.11764706,-20.98360656,-28.85245902],[97.05882353,-19.67213115,-27.10382514],[100,-19.23497268,-27.10382514]],"type":"arearange","lineWidth":0,"linkedTo":":previous","fillOpacity":0.3,"zIndex":0},{"name":"Izquierda","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"},{"name":"Derecha","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"}]},
      "tp_ank_high_chart_data" : {"chart":{"type":"spline","height":350},"title":{"text":"Foot Progression Angle [deg]"},"subtitle":{"text":""},"xAxis":{"type":"float","title":{"text":"Gait cicle"}},"yAxis":{"title":{"text":"Ext / Int"},"max":40,"min":-30},"tooltip":{"headerFormat":"<b>{series.name}</b><br>","pointFormat":"Ang: {point.y:.2f}°","crosshairs":true,"shared":false},"plotOptions":{"spline":{"marker":{"enabled":false}}},"series":[{"name":"Rangos Normales","data":[[0,-9.065934066,-20.6043956],[2.941176471,-9.065934066,-20.19230769],[5.882352941,-9.478021978,-19.78021978],[8.823529412,-10.3021978,-19.78021978],[11.76470588,-11.53846154,-19.36813187],[14.70588235,-11.95054945,-18.95604396],[17.64705882,-11.53846154,-18.54395604],[20.58823529,-11.12637363,-17.71978022],[23.52941176,-10.3021978,-17.30769231],[26.47058824,-9.89010989,-16.48351648],[29.41176471,-9.065934066,-16.07142857],[32.35294118,-8.653846154,-15.65934066],[35.29411765,-8.241758242,-16.07142857],[38.23529412,-9.478021978,-16.48351648],[41.17647059,-10.3021978,-17.30769231],[44.11764706,-10.3021978,-17.71978022],[47.05882353,-9.89010989,-18.13186813],[50,-9.065934066,-18.13186813],[52.94117647,-8.241758242,-17.30769231],[55.88235294,-7.417582418,-16.48351648],[58.82352941,-6.593406593,-17.30769231],[61.76470588,-4.532967033,-20.19230769],[64.70588235,-2.884615385,-25.13736264],[67.64705882,-4.532967033,-28.84615385],[70.58823529,-6.181318681,-30.08241758],[73.52941176,-7.005494505,-30.08241758],[76.47058824,-7.82967033,-30.08241758],[79.41176471,-9.065934066,-30.08241758],[82.35294118,-11.95054945,-30.08241758],[85.29411765,-14.42307692,-30.08241758],[88.23529412,-14.83516484,-28.43406593],[91.17647059,-11.53846154,-25.54945055],[94.11764706,-9.065934066,-22.66483516],[97.05882353,-8.241758242,-20.6043956],[100,-8.241758242,-20.6043956]],"type":"arearange","lineWidth":0,"linkedTo":":previous","fillOpacity":0.3,"zIndex":0},{"name":"Izquierda","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"},{"name":"Derecha","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"}]},
      "tp_plv_high_chart_data" : {"chart":{"type":"spline","height":350},"title":{"text":"Pelvic Rotation [deg]"},"subtitle":{"text":""},"xAxis":{"type":"float","title":{"text":"Gait cicle"}},"yAxis":{"title":{"text":"Ext / Int"},"max":30,"min":-30},"tooltip":{"headerFormat":"<b>{series.name}</b><br>","pointFormat":"Ang: {point.y:.2f}°","crosshairs":true,"shared":false},"plotOptions":{"spline":{"marker":{"enabled":false}}},"series":[{"name":"Rangos Normales","data":[[0,7.252747253,0.3296703297],[2.941176471,6.923076923,0.3296703297],[5.882352941,5.934065934,0.3296703297],[8.823529412,4.945054945,-0.6593406593],[11.76470588,3.956043956,-1.318681319],[14.70588235,3.956043956,-0.989010989],[17.64705882,4.285714286,-0.3296703297],[20.58823529,4.615384615,0.3296703297],[23.52941176,4.945054945,0.3296703297],[26.47058824,4.945054945,0.3296703297],[29.41176471,4.615384615,-0.3296703297],[32.35294118,3.956043956,-0.989010989],[35.29411765,3.296703297,-1.318681319],[38.23529412,2.307692308,-2.637362637],[41.17647059,0.6593406593,-2.967032967],[44.11764706,-1.318681319,-4.285714286],[47.05882353,-1.978021978,-4.945054945],[50,-2.307692308,-5.274725275],[52.94117647,-1.978021978,-5.274725275],[55.88235294,-0.989010989,-4.945054945],[58.82352941,0.3296703297,-4.615384615],[61.76470588,1.648351648,-4.615384615],[64.70588235,2.307692308,-4.615384615],[67.64705882,1.318681319,-4.945054945],[70.58823529,0.989010989,-4.945054945],[73.52941176,1.318681319,-5.274725275],[76.47058824,1.318681319,-4.615384615],[79.41176471,1.648351648,-3.956043956],[82.35294118,1.978021978,-3.626373626],[85.29411765,2.637362637,-3.296703297],[88.23529412,3.626373626,-2.967032967],[91.17647059,4.615384615,-2.307692308],[94.11764706,5.934065934,-1.318681319],[97.05882353,6.923076923,-0.3296703297],[100,7.252747253,0.3296703297]],"type":"arearange","lineWidth":0,"linkedTo":":previous","fillOpacity":0.3,"zIndex":0},{"name":"Izquierda","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"},{"name":"Derecha","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"}]},
      "tp_hip_high_chart_data" : {"chart":{"type":"spline","height":350},"title":{"text":"Hip Rotation [deg]"},"subtitle":{"text":""},"xAxis":{"type":"float","title":{"text":"Gait cicle"}},"yAxis":{"title":{"text":"Ext / Int"},"max":30,"min":-30},"tooltip":{"headerFormat":"<b>{series.name}</b><br>","pointFormat":"Ang: {point.y:.2f}°","crosshairs":true,"shared":false},"plotOptions":{"spline":{"marker":{"enabled":false}}},"series":[{"name":"Rangos Normales","data":[[0,3.606557377,-8.852459016],[2.941176471,2.62295082,-7.540983607],[5.882352941,2.62295082,-5.901639344],[8.823529412,4.918032787,-4.590163934],[11.76470588,7.540983607,-2.950819672],[14.70588235,8.852459016,-2.950819672],[17.64705882,9.180327869,-2.62295082],[20.58823529,8.852459016,-2.295081967],[23.52941176,8.852459016,-1.31147541],[26.47058824,9.180327869,-0.9836065574],[29.41176471,10.16393443,-1.31147541],[32.35294118,11.14754098,-0.6557377049],[35.29411765,12.13114754,0.9836065574],[38.23529412,14.09836066,1.967213115],[41.17647059,15.40983607,2.295081967],[44.11764706,15.73770492,1.967213115],[47.05882353,14.42622951,1.31147541],[50,13.7704918,0.3278688525],[52.94117647,13.1147541,-0.9836065574],[55.88235294,11.80327869,-2.950819672],[58.82352941,9.508196721,-4.918032787],[61.76470588,7.868852459,-6.557377049],[64.70588235,6.229508197,-7.540983607],[67.64705882,4.262295082,-8.196721311],[70.58823529,2.62295082,-8.196721311],[73.52941176,0.6557377049,-7.868852459],[76.47058824,0.3278688525,-7.540983607],[79.41176471,-0.3278688525,-6.885245902],[82.35294118,0.3278688525,-5.245901639],[85.29411765,0.6557377049,-4.262295082],[88.23529412,2.295081967,-4.262295082],[91.17647059,3.278688525,-5.573770492],[94.11764706,4.262295082,-6.885245902],[97.05882353,4.918032787,-8.196721311],[100,4.590163934,-7.540983607]],"type":"arearange","lineWidth":0,"linkedTo":":previous","fillOpacity":0.3,"zIndex":0},{"name":"Izquierda","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"},{"name":"Derecha","data":[[0,3],[5,0.28],[11,0.25],[17.64705882,0.2],[23.52941176,0.28],[29.41176471,0.28],[35.29411765,0.47],[41.17647059,0.79],[47.05882353,0.72],[52.94117647,1.02],[58.82352941,1.12],[64.70588235,1.2],[70.58823529,1.18],[76.47058824,1.19],[82.35294118,1.85],[88.23529412,2.22],[94.11764706,1.15],[100,3]],"dashStyle":"longdash"}]}
      
    }

    this._postJSON(environment.URL_WEB_SERVICE, json, this.getHeaders())
      .subscribe(json => this.postObjReturn = json);

  }
 
}


@Component({
  selector: 'app-details-drawer',
  styles: [`
      :host {
            
            background-color: rgba(255, 255, 255, 0.9);
            position: fixed;
            left: 1.5rem;
            bottom: 1rem;
            top: 50%;
            width: 0%;
            min-width: 250px;
            z-index: 150;
            overflow-y: auto;
            border-radius: 0.5rem;

      }

      .division_line{
          border-bottom: 1px solid #e0e0e0;
          border-top: 0;
          margin: 0 0 5px;
          padding: 0 0 3px;
      }

      .detail-result-header h2{
        padding: 2rem 0rem 0rem 1rem;
      }
      .name_position{
        position: static;
        text-align: center;
        background-color: rgb(0, 0, 0);
      }
      .margin_container_details {
          padding: 0.5rem; 
      }
      .card-block {
        padding: 0.25rem;
      }
      .card-block p {
        color: #969093;
      }

    
       
      
  `],
  template: `
      <div class="name_position">
       <h2 class="card-title">Details</h2>
      </div>               


      <div id="accordion" class="margin_container_details" role="tablist" aria-multiselectable="true">
        <div>
           <div class="header" role="tab" id="headingOne">
               <h4 *ngIf="kinematicsAnalysis" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
              >
                 Accesories
               </h4>
           </div>

          <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
            <div *ngIf="kinematicsAnalysis" class="card-block">
               
             <p>
                Terapeuta: 
                <code>{{kinematicsAnalysis.therapist_id}}</code>
             </p>
             <p *ngIf="kinematicsAnalysis.accesories.is_assited_walk">
                 Caminata asistida:
                 <code>{{kinematicsAnalysis.accesories_descriptions.assited_walk}}</code>
             </p>
             <p *ngIf="kinematicsAnalysis.accesories.is_treadmills">
                 Caminadora:
                 <code>{{kinematicsAnalysis.accesories_descriptions.treadmills}}</code>
             </p>
             <p *ngIf="kinematicsAnalysis.accesories.is_walker">
                 Andador:
                 <code>{{kinematicsAnalysis.accesories_descriptions.walker}}</code>
             </p>
             <p *ngIf="kinematicsAnalysis.accesories.is_orthoses">
                 Órtesis:
                 <code>{{kinematicsAnalysis.accesories_descriptions.orthoses}}</code>
             </p>
             <p *ngIf="kinematicsAnalysis.accesories.is_parallel_bars">
                 Barras paralelas: <code>{{kinematicsAnalysis.accesories_descriptions.parallel_bars}}</code>
             </p>

            </div>
          </div>
        </div>

        <div>
         <div class="header" role="tab" id="headingThree">
             <h4 class="collapsed" data-toggle="collapse"
              data-parent="#accordion" href="#collapseFour" 
              aria-expanded="false" aria-controls="collapseTwo">
                Gait Parameters
             </h4>
         </div>
         <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingThree">
           <div class="card-block">
               <p class="card-text">
                 Use card groups to render equal height cards without gutters between the cards. 
                 Use <code>.card-deck</code> for cards that aren’t attached to each another.</p>
           </div>
         </div>
        </div>

        <div>
         <div class="header" role="tab" id="headingThree">
             <h4 class="collapsed" data-toggle="collapse"
              data-parent="#accordion" href="#collapseTwo" 
              aria-expanded="false" aria-controls="collapseTwo">
                Observations
             </h4>
         </div>
         <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingThree">
           <div class="card-block">
               <p class="card-text">
                 Use card groups to render equal height cards without gutters between the cards. 
                 Use <code>.card-deck</code> for cards that aren’t attached to each another.</p>
           </div>
         </div>
        </div>

        <div>
         <div class="header" role="tab" id="headingThree">
             <h4 class="collapsed" data-toggle="collapse"
              data-parent="#accordion" href="#collapseThree" 
              aria-expanded="false" aria-controls="collapseThree">
                Additoinal comments
             </h4>
         </div>
         <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
           <div class="card-block">
               <p class="card-text">
                 Use card groups to render equal height cards without gutters between the cards. 
                 Use <code>.card-deck</code> for cards that aren’t attached to each another.</p>
           </div>
         </div>
        </div>

      </div>


          
    `
})

export class ResultDrawerComponent {

  @Input() kinematicsAnalysis: any;
  constructor(){}

 
}

@Component({
  selector: 'app-video-drawer',
  styles: [`
      :host {
          opacity: 0.6;
          background: black;
          color: #fff;
          position: fixed;
          bottom: 0;
          width: 100%;
          min-width: 250px;
          z-index: 8000;
        
      }
/#
      #mask {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: auto;
        background-color: black;
        opacity: 0.7;

        filter: blur(0px);
        -webkit-filter: blur(0px);
        -moz-filter: blur(0px);
        -o-filter: blur(0px);
        -ms-filter: blur(0px);
      }
 #/     
    `
  ],
  template: `
    <div >
      <div class="row justify-content-center">
         <div class="col align-items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0qLblUty41c?
            fs=1&amp;wmode=transparent" frameborder="0" allowfullscreen></iframe>
         </div>
      </div>
    </div>  
        
    `
})
  // <div class="margin-container ccontainer">
  //   <div class="row">
  //     <div class="col align-self-start">
  //     </div>
  //   </div>
  // </div>

export class VideoDrawerComponent {


  
  constructor(){}

 
}







