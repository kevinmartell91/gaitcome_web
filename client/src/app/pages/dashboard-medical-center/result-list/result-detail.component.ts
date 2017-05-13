import { Component, OnInit } from '@angular/core';
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
  selector: 'app-medical-center',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})

// @Component({
//   selector: 'my-component',
//   styles: [`
//       chart {
//         display: block;
//       }
//       button {
//         display: block;
//         width: 100%;
//         height: 25px;
//       }
//   `],
//   template: `
//   <chart [options]="options" (load)="saveChart($event.context)">
//           <series (hide)="onSeriesHide($event.context)">
//             <point (select)="onPointSelect($event.context)"></point>
//           </series>
//         </chart>
//         <button (click)="addPoint()">Click to add random points</button>
//     `
// })
export class ResultDetailComponent implements OnInit {

  url: any; 
  name:string;
  video: any = {id: 'wzrnuUOoFNM'};
  baseUrl:string = 'https://www.youtube.com/embed/';
  URL_WEB_SERVICE:string = 'http://localhost:8080/api/kinematics_analysis/';
  hard_id : any; 
  headers: any;
  options: Object;
  public token: string;
  public kinematicsAnalysiss: KinematicsAnalysis [] = [];
  public kinematicsAnalysis : KinematicsAnalysis;
  splKne: SplKne


  people: Person[] = [];
  displayedPeople: Person[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) { 

  }

  ngOnInit() {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.token = currentUser && currentUser.token;
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Im1lZGljYWxDZW50ZXJzLnJlcXVlc3RlZF9hdCI6ImRlZmF1bHQiLCJfX3YiOiJpbml0IiwiYWRkcmVzcy5jb3VudHJ5IjoiaW5pdCIsImFkZHJlc3MuemlwIjoiaW5pdCIsImFkZHJlc3Muc3RhdGUiOiJpbml0IiwiYWRkcmVzcy5jaXR5IjoiaW5pdCIsImFkZHJlc3Muc3RyZWV0IjoiaW5pdCIsIm1lZGljYWxDZW50ZXJzLmFjY2VwdGVkX2F0IjoiaW5pdCIsIm1lZGljYWxDZW50ZXJzLnN0YXR1c19yZXF1ZXN0IjoiaW5pdCIsIm1lZGljYWxDZW50ZXJzLm5hbWUiOiJpbml0IiwibWVkaWNhbENlbnRlcnMuX2lkIjoiaW5pdCIsIm5hbWVzIjoiaW5pdCIsImdlbmRlciI6ImluaXQiLCJpZF9Eb2N1bWVudF90eXBlIjoiaW5pdCIsImlkX0RvY3VtZW50X251bSI6ImluaXQiLCJiaXJ0aCI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJwaG9uZSI6ImluaXQiLCJjZWxscGhvbmUiOiJpbml0IiwibnVtX2N0bXAiOiJpbml0IiwibnVtX25kdGEiOiJpbml0IiwiaXNfYWN0aXZlIjoiaW5pdCIsInVzZXJuYW1lIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnsibWVkaWNhbENlbnRlcnMucmVxdWVzdGVkX2F0Ijp0cnVlfSwiaW5pdCI6eyJfX3YiOnRydWUsImFkZHJlc3MuY291bnRyeSI6dHJ1ZSwiYWRkcmVzcy56aXAiOnRydWUsImFkZHJlc3Muc3RhdGUiOnRydWUsImFkZHJlc3MuY2l0eSI6dHJ1ZSwiYWRkcmVzcy5zdHJlZXQiOnRydWUsIm1lZGljYWxDZW50ZXJzLmFjY2VwdGVkX2F0Ijp0cnVlLCJtZWRpY2FsQ2VudGVycy5zdGF0dXNfcmVxdWVzdCI6dHJ1ZSwibWVkaWNhbENlbnRlcnMubmFtZSI6dHJ1ZSwibWVkaWNhbENlbnRlcnMuX2lkIjp0cnVlLCJuYW1lcyI6dHJ1ZSwiZ2VuZGVyIjp0cnVlLCJpZF9Eb2N1bWVudF90eXBlIjp0cnVlLCJpZF9Eb2N1bWVudF9udW0iOnRydWUsImJpcnRoIjp0cnVlLCJlbWFpbCI6dHJ1ZSwicGhvbmUiOnRydWUsImNlbGxwaG9uZSI6dHJ1ZSwibnVtX2N0bXAiOnRydWUsIm51bV9uZHRhIjp0cnVlLCJpc19hY3RpdmUiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7ImFkZHJlc3MiOnsiY291bnRyeSI6IlBlcnUiLCJ6aXAiOjQ1NzY0NSwic3RhdGUiOiJMaW1hIiwiY2l0eSI6IkxpbWEiLCJzdHJlZXQiOiJDYWxsZSBBbGFtZWRhIFNhbnRvcyAzNDQgRHB0byAzMDQifSwibWVkaWNhbENlbnRlcnMiOnsicmVxdWVzdGVkX2F0IjoiMjAxNi0xMi0xNVQwMTo1Mzo0Mi4xMzJaIiwiYWNjZXB0ZWRfYXQiOiIyMDE2LTExLTIwVDA0OjE5OjEzLjAwMFoiLCJzdGF0dXNfcmVxdWVzdCI6IjEiLCJuYW1lIjoiTHVpcyBNYW51ZWwiLCJfaWQiOiIzNDU2Nzg5MDQ1NjU4NDhmcjVnciJ9LCJfX3YiOjAsIm5hbWVzIjoiSG9ydGVuY2lhIiwiZ2VuZGVyIjoiNCIsImlkX0RvY3VtZW50X3R5cGUiOiJETkkiLCJpZF9Eb2N1bWVudF9udW0iOjEyMzQ1Njc4LCJiaXJ0aCI6IjIwMTYtMTEtMjBUMDQ6MTk6MTMuMDAwWiIsImVtYWlsIjoibWFudWVsQGdtYWlsLmNvbSIsInBob25lIjoiMjM0IDU0IDEzIiwiY2VsbHBob25lIjoiOTk5IDk5OSA5OTkiLCJudW1fY3RtcCI6NjU0MiwibnVtX25kdGEiOjU0NTM0NTQzLCJpc19hY3RpdmUiOmZhbHNlLCJ1c2VybmFtZSI6InRlcmFwZXV0YSIsInBhc3N3b3JkIjoiYWRtaW4iLCJfaWQiOiI1ODUxZjYwMTczZGMxMTA3MmEwYTFhOTIifSwiX3ByZXMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W251bGwsbnVsbF0sIiRfX29yaWdpbmFsX3ZhbGlkYXRlIjpbbnVsbF0sIiRfX29yaWdpbmFsX3JlbW92ZSI6W251bGxdfSwiX3Bvc3RzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltdLCIkX19vcmlnaW5hbF92YWxpZGF0ZSI6W10sIiRfX29yaWdpbmFsX3JlbW92ZSI6W119LCJpYXQiOjE0ODE3NjY4MjJ9.xDNN-rILCYc5vqVJzpLn3DIqOqMMPTEBuYHgvISoHPw';
    //console.log('init : ' + this.token);

    this.route.params
      .subscribe( params =>
        this.hard_id = params['id']
    );


    this.getAnalysis();

  }

  getAnalysis() {

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.token);
    let options = new RequestOptions({ headers: headers });

    this._getJSON(this.URL_WEB_SERVICE + this.hard_id, options)
      .subscribe(json => {
        this.kinematicsAnalysis = json;
        this.cookDataTest(this.kinematicsAnalysis);
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

  public cookDataTest(kinematicsAnalysis: KinematicsAnalysis){

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
          name: 'Left side',
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
 
}






