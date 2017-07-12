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
        transform: 'translate3d(8%, -5%, 0)'
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
        transform: 'translate3d(-100%, 0, 0)'
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
  baseUrl:string = 'https://www.youtube.com/embed/';
  URL_WEB_SERVICE:string = 'http://localhost:8080/api/kinematics_analysis/';
  URL_WEB_SERVICE_TEMP:string = 'http://localhost:8080/api/kinematics_analysis/596ee50efe45650b9d013c50';
  hard_id : any; 
  headers: any;
  options: Object;
  public token: string;
  public kinematicsAnalysiss: KinematicsAnalysis [] = [];
  public kinematicsAnalysis : KinematicsAnalysis;
  splKne: SplKne;


  people: Person[] = [];
  displayedPeople: Person[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) { 

      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);    
  }

  ngOnInit() {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    // this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Im1lZGljYWxDZW50ZXJzLnJlcXVlc3RlZF9hdCI6ImRlZmF1bHQiLCJfX3YiOiJpbml0IiwiYWRkcmVzcy5jb3VudHJ5IjoiaW5pdCIsImFkZHJlc3MuemlwIjoiaW5pdCIsImFkZHJlc3Muc3RhdGUiOiJpbml0IiwiYWRkcmVzcy5jaXR5IjoiaW5pdCIsImFkZHJlc3Muc3RyZWV0IjoiaW5pdCIsIm1lZGljYWxDZW50ZXJzLmFjY2VwdGVkX2F0IjoiaW5pdCIsIm1lZGljYWxDZW50ZXJzLnN0YXR1c19yZXF1ZXN0IjoiaW5pdCIsIm1lZGljYWxDZW50ZXJzLm5hbWUiOiJpbml0IiwibWVkaWNhbENlbnRlcnMuX2lkIjoiaW5pdCIsIm5hbWVzIjoiaW5pdCIsImdlbmRlciI6ImluaXQiLCJpZF9Eb2N1bWVudF90eXBlIjoiaW5pdCIsImlkX0RvY3VtZW50X251bSI6ImluaXQiLCJiaXJ0aCI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJwaG9uZSI6ImluaXQiLCJjZWxscGhvbmUiOiJpbml0IiwibnVtX2N0bXAiOiJpbml0IiwibnVtX25kdGEiOiJpbml0IiwiaXNfYWN0aXZlIjoiaW5pdCIsInVzZXJuYW1lIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnsibWVkaWNhbENlbnRlcnMucmVxdWVzdGVkX2F0Ijp0cnVlfSwiaW5pdCI6eyJfX3YiOnRydWUsImFkZHJlc3MuY291bnRyeSI6dHJ1ZSwiYWRkcmVzcy56aXAiOnRydWUsImFkZHJlc3Muc3RhdGUiOnRydWUsImFkZHJlc3MuY2l0eSI6dHJ1ZSwiYWRkcmVzcy5zdHJlZXQiOnRydWUsIm1lZGljYWxDZW50ZXJzLmFjY2VwdGVkX2F0Ijp0cnVlLCJtZWRpY2FsQ2VudGVycy5zdGF0dXNfcmVxdWVzdCI6dHJ1ZSwibWVkaWNhbENlbnRlcnMubmFtZSI6dHJ1ZSwibWVkaWNhbENlbnRlcnMuX2lkIjp0cnVlLCJuYW1lcyI6dHJ1ZSwiZ2VuZGVyIjp0cnVlLCJpZF9Eb2N1bWVudF90eXBlIjp0cnVlLCJpZF9Eb2N1bWVudF9udW0iOnRydWUsImJpcnRoIjp0cnVlLCJlbWFpbCI6dHJ1ZSwicGhvbmUiOnRydWUsImNlbGxwaG9uZSI6dHJ1ZSwibnVtX2N0bXAiOnRydWUsIm51bV9uZHRhIjp0cnVlLCJpc19hY3RpdmUiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7ImFkZHJlc3MiOnsiY291bnRyeSI6IlBlcnUiLCJ6aXAiOjQ1NzY0NSwic3RhdGUiOiJMaW1hIiwiY2l0eSI6IkxpbWEiLCJzdHJlZXQiOiJDYWxsZSBBbGFtZWRhIFNhbnRvcyAzNDQgRHB0byAzMDQifSwibWVkaWNhbENlbnRlcnMiOnsicmVxdWVzdGVkX2F0IjoiMjAxNi0xMi0xNVQwMTo1Mzo0Mi4xMzJaIiwiYWNjZXB0ZWRfYXQiOiIyMDE2LTExLTIwVDA0OjE5OjEzLjAwMFoiLCJzdGF0dXNfcmVxdWVzdCI6IjEiLCJuYW1lIjoiTHVpcyBNYW51ZWwiLCJfaWQiOiIzNDU2Nzg5MDQ1NjU4NDhmcjVnciJ9LCJfX3YiOjAsIm5hbWVzIjoiSG9ydGVuY2lhIiwiZ2VuZGVyIjoiNCIsImlkX0RvY3VtZW50X3R5cGUiOiJETkkiLCJpZF9Eb2N1bWVudF9udW0iOjEyMzQ1Njc4LCJiaXJ0aCI6IjIwMTYtMTEtMjBUMDQ6MTk6MTMuMDAwWiIsImVtYWlsIjoibWFudWVsQGdtYWlsLmNvbSIsInBob25lIjoiMjM0IDU0IDEzIiwiY2VsbHBob25lIjoiOTk5IDk5OSA5OTkiLCJudW1fY3RtcCI6NjU0MiwibnVtX25kdGEiOjU0NTM0NTQzLCJpc19hY3RpdmUiOmZhbHNlLCJ1c2VybmFtZSI6InRlcmFwZXV0YSIsInBhc3N3b3JkIjoiYWRtaW4iLCJfaWQiOiI1ODUxZjYwMTczZGMxMTA3MmEwYTFhOTIifSwiX3ByZXMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W251bGwsbnVsbF0sIiRfX29yaWdpbmFsX3ZhbGlkYXRlIjpbbnVsbF0sIiRfX29yaWdpbmFsX3JlbW92ZSI6W251bGxdfSwiX3Bvc3RzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltdLCIkX19vcmlnaW5hbF92YWxpZGF0ZSI6W10sIiRfX29yaWdpbmFsX3JlbW92ZSI6W119LCJpYXQiOjE0ODE3NjY4MjJ9.xDNN-rILCYc5vqVJzpLn3DIqOqMMPTEBuYHgvISoHPw';
    //console.log('init : ' + this.token);

    this.route.params
      .subscribe( params =>
        this.hard_id = params['id']
    );


    //this.getAnalysis();

    var json = {"_id":"5917e445512fd60c985238fe","therapist_id":"Julia Santa Ana","medical_center_id":"Cerene SAC","patient_id":"Camila Sedano","__v":0,"created_at":"2017-05-14T04:59:49.547Z","tp_hip":[],"tp_plv":[],"tp_ank":[],"tp_kne":[],"fp_hip":[],"fp_plv":[],"fp_ank":[],"fp_kne":[],"spr_hip":[],"spr_plv":[],"spr_ank":[],"spr_kne":[],"spl_hip":[],"spl_plv":[],"spl_ank":[],"spl_kne":{"normal_ranges":[[0,14.72677596,3.825136612],[3.03030303,15.10928962,3.825136612],[6.060606061,15.30054645,3.825136612],[9.090909091,15.30054645,4.016393443],[12.12121212,14.72677596,4.207650273],[15.15151515,14.53551913,4.398907104],[18.18181818,14.3442623,4.590163934],[21.21212121,13.96174863,4.781420765],[24.24242424,13.96174863,5.163934426],[27.27272727,14.15300546,5.546448087],[30.3030303,13.96174863,5.737704918],[33.33333333,13.7704918,5.928961749],[36.36363636,13.7704918,6.120218579],[39.39393939,13.57923497,6.120218579],[42.42424242,13.57923497,5.928961749],[45.45454545,13.96174863,5.546448087],[48.48484848,14.3442623,5.163934426],[51.51515152,14.3442623,4.972677596],[54.54545455,14.15300546,4.781420765],[57.57575758,13.96174863,4.590163934],[60.60606061,13.19672131,4.207650273],[63.63636364,12.81420765,4.016393443],[66.66666667,13.00546448,4.016393443],[69.6969697,13.00546448,4.016393443],[72.72727273,13.38797814,4.207650273],[75.75757576,13.7704918,4.590163934],[78.78787879,14.15300546,4.781420765],[81.81818182,14.15300546,4.972677596],[84.84848485,24.15300546,20.163934426],[87.87878788,34.3442623,25.355191257],[90.90909091,24.3442623,20.163934426],[93.93939394,24.15300546,18.972677596],[96.96969697,14.15300546,4.781420765],[100,14.53551913,4.207650273]],"patient_angles":[[0,0],[4.545454545,0.25],[9.090909091,7.41],[13.63636364,11.64],[18.18181818,3.6],[22.72727273,19.55],[27.27272727,15.62],[31.81818182,12.5],[36.36363636,22.42],[40.90909091,20.74],[45.45454545,32.62],[50,2.69],[54.54545455,2.81],[59.09090909,32.63],[63.63636364,22.77],[68.18181818,12.68],[72.72727273,6.56],[77.27272727,2.39],[81.81818182,2.3],[86.36363636,2],[90.90909091,1.85],[95.45454545,1.49],[100,2.08]]},"rtrc":[],"ltrc":[],"rbwt":[],"lbwt":[],"rfwt":[],"lfwt":[],"rhee":[],"lhee":[],"rtoe":[],"ltoe":[],"rank":[],"lank":[],"rkne":[],"lkne":[{"x":123.31,"y":543.4,"z":54.54},{"x":123.31,"y":543.4,"z":54.54},{"x":123.31,"y":543.4,"z":54.54},{"x":123.31,"y":543.4,"z":54.54},{"x":123.31,"y":543.4,"z":54.54}],"accesories_descriptions":{"assited_walk":"No se necesito","treadmills":"Solo para precalentamiento","walker":"Si se utlizÃ³","orthoses":"No se necesito","parallel_bars":""},"accesories":{"is_assited_walk":true,"is_treadmills":true,"is_walker":true,"is_orthoses":true,"is_parallel_bars":false}};
    this.kinematicsAnalysis = json;
    // this.hardShowGraph(this.kinematicsAnalysis);
    // this.hardShowGraphAsJson(this.kinematicsAnalysis);

    this.getDataFromDB();
  }

  getAnalysis() {

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.token);
    let options = new RequestOptions({ headers: headers });

    this._getJSON(this.URL_WEB_SERVICE + this.hard_id, options)
      .subscribe(json => {
        // this.kinematicsAnalysis = json;
        this.showGraph(this.kinematicsAnalysis);
      })
  }

  _getJSON(url: string, options: RequestOptions): Observable<any> {
    return this.http.get(url, options)
      .map((res: Response) => res.json())
  }
  
  private handleError(error: Response) {
        // just logging to the console for now...
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
  }

  public showGraph(kinematicsAnalysis: KinematicsAnalysis){

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

  public hardShowGraph(kinematicsAnalysis: KinematicsAnalysis){

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
          // text: 'kinematic analysis'
          text: ''
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
          // pointFormat: '{point.x:%Y}: {point.y:.2f} m',
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
          data: kinematicsAnalysis.spl_kne.normal_ranges,
          // data: [
          //   [0, 14.72677596, 3.825136612],
          //   [3.03030303, 15.10928962, 3.825136612],
          //   [6.060606061, 15.30054645, 3.825136612],
          //   [9.090909091, 15.30054645, 4.016393443],
          //   [12.12121212, 14.72677596, 4.207650273],
          //   [15.15151515, 14.53551913, 4.398907104],
          //   [18.18181818, 14.3442623, 4.590163934],
          //   [21.21212121, 13.96174863, 4.781420765],
          //   [24.24242424, 13.96174863, 5.163934426],
          //   [27.27272727, 14.15300546, 5.546448087],
          //   [30.3030303, 13.96174863, 5.737704918],
          //   [33.33333333, 13.7704918, 5.928961749],
          //   [36.36363636, 13.7704918, 6.120218579],
          //   [39.39393939, 13.57923497, 6.120218579],
          //   [42.42424242, 13.57923497, 5.928961749],
          //   [45.45454545, 13.96174863, 5.546448087],
          //   [48.48484848, 14.3442623, 5.163934426],
          //   [51.51515152, 14.3442623, 4.972677596],
          //   [54.54545455, 14.15300546, 4.781420765],
          //   [57.57575758, 13.96174863, 4.590163934],
          //   [60.60606061, 13.19672131, 4.207650273],
          //   [63.63636364, 12.81420765, 4.016393443],
          //   [66.66666667, 13.00546448, 4.016393443],
          //   [69.6969697, 13.00546448, 4.016393443],
          //   [72.72727273, 13.38797814, 4.207650273],
          //   [75.75757576, 13.7704918, 4.590163934],
          //   [78.78787879, 14.15300546, 4.781420765],
          //   [81.81818182, 14.15300546, 4.972677596],
          //   [84.84848485, 14.15300546, 5.163934426],
          //   [87.87878788, 14.3442623, 5.355191257],
          //   [90.90909091, 14.3442623, 5.163934426],
          //   [93.93939394, 14.15300546, 4.972677596],
          //   [96.96969697, 14.15300546, 4.781420765],
          //   [100, 14.53551913, 4.207650273]
          // ],
          type: 'arearange',
          lineWidth: 0,
          linkedTo: ':previous',
          fillOpacity: 0.3,
          zIndex: 0
        },
        {
          name: 'Izquierda',
          data : kinematicsAnalysis.spl_kne.patient_angles,
          // data: [
          //     [0, 0],
          //     [4.545454545, 0.25],
          //     [9.090909091, 1.41],
          //     [13.63636364, 1.64],
          //     [18.18181818, 1.6],
          //     [22.72727273, 2.55],
          //     [27.27272727, 2.62],
          //     [31.81818182, 2.5],
          //     [36.36363636, 2.42],
          //     [40.90909091, 2.74],
          //     [45.45454545, 2.62],
          //     [50, 2.69],
          //     [54.54545455, 2.81],
          //     [59.09090909, 2.63],
          //     [63.63636364, 2.77],
          //     [68.18181818, 2.68],
          //     [72.72727273, 2.56],
          //     [77.27272727, 2.39],
          //     [81.81818182, 2.3],
          //     [86.36363636, 2],
          //     [90.90909091, 1.85],
          //     [95.45454545, 1.49],
          //     [100, 2.08]
          // ],
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
        // , 
        // {
        //   navigation: {
        //     menuItemStyle: {
        //         fontSize: '10px'
        //     }
        //   }
        // }
      ],
    };
    
  } 

  getDataFromDB(){
     let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('x-access-token', this.token);
      let options = new RequestOptions({ headers: headers });

      this._getJSON(this.URL_WEB_SERVICE_TEMP, options)
        .subscribe(json => {
            // this.kinematicsAnalysis = json;
            this.hardShowGraphAsJson(json);
        })
      
  }
  public hardShowGraphAsJson(kinematicsAnalysis: any){

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
          // text: 'kinematic analysis'
          text: ''
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
          // pointFormat: '{point.x:%Y}: {point.y:.2f} m',
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
          data: kinematicsAnalysis.spl_kne.normal_ranges,
          type: 'arearange',
          lineWidth: 0,
          linkedTo: ':previous',
          fillOpacity: 0.3,
          zIndex: 0
        },
        {
          name: 'Izquierda',
          data : kinematicsAnalysis.spl_kne.patient_angles,
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
        // , 
        // {
        //   navigation: {
        //     menuItemStyle: {
        //         fontSize: '10px'
        //     }
        //   }
        // }
      ],
    };
    
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
  }
 
}


@Component({
  selector: 'app-details-drawer',
  styles: [`
      :host {
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        position: fixed;
        left: 0;
        right: auto;
        bottom: 0;
        top: 10%;
        width: 100%;
        min-width: 250px;
        z-index: 0;
        overflow-y: auto;
      }
      .division_line_multiple_value{
            border-bottom: 1px solid #e0e0e0;
            border-top: 0;
            margin: 0 0 15px;
            padding: 0 0 16px;
        }

        .division_line_single_value {
            border-bottom: 1px solid #e0e0e0;
            border-top: 0;
            margin: 0 0 5px;
            padding: 0 0 3px;
        }
       
      
  `],
  template: `
        <div class="margin-container col-md-12">
                      <div id="accordion" role="tablist" aria-multiselectable="true">
                      <div>
                        <div class="header" role="tab" id="headingOne">
                          <!-- <h4 class="title">  -->
                            <a *ngIf="kinematicsAnalysis" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              {{kinematicsAnalysis.patient_id}}
                            </a>
                          <!-- </h4> -->
                        </div>

                        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                          <div class="card-block">
                            
                            <div class="row">
                              <div class="category division_line_single_value">
                                <div class="col-md-11">
                                  <p>Centro medico: {{kinematicsAnalysis.medical_center_id}}</p>
                                </div>

                                <div class="col-md-1">

                                    <p class="rigth">23</p>
                                </div>   
                              </div>
                            </div>

                            <p class="category division_line_single_value">Terapeuta: {{kinematicsAnalysis.therapist_id}}</p>
                            <p class="category division_line_single_value" *ngIf="kinematicsAnalysis.accesories.is_assited_walk">
                                Caminata asistida: {{kinematicsAnalysis.accesories_descriptions.assited_walk}}</p>
                            <p class="category division_line_single_value" *ngIf="kinematicsAnalysis.accesories.is_treadmills">
                                Caminadora: {{kinematicsAnalysis.accesories_descriptions.treadmills}}</p>
                            <p class="category division_line_single_value" *ngIf="kinematicsAnalysis.accesories.is_walker">

                                Andador: {{kinematicsAnalysis.accesories_descriptions.walker}}</p>
                            <p class="category division_line_single_value" *ngIf="kinematicsAnalysis.accesories.is_orthoses">
                                Órtesis: {{kinematicsAnalysis.accesories_descriptions.orthoses}}</p>
                            <p class="category division_line_single_value" *ngIf="kinematicsAnalysis.accesories.is_parallel_bars">
                                Barras paralelas: {{kinematicsAnalysis.accesories_descriptions.parallel_bars}}</p>


                          </div>
                        </div>
                      </div>


                      <div>
                        <div class="header" role="tab" id="headingTwo">
                          <!-- <h6 class="mb-0"> -->
                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Videos
                            </a>
                          <!-- </h6> -->
                        </div>
                        
                      </div>


                      <div>
                        <div class="header" role="tab" id="headingThree">
                          <!-- <h5 class="mb-0"> -->
                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Collapsible Group Item #3
                            </a>
                          <!-- </h5> -->
                        </div>
                        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
                          <div class="card-block">
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                          </div>
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
          left: 0;
          right: auto;
          bottom: 0;
          width: 40%;
          min-width: 250px;
          z-index: 8000;
        
      }

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







