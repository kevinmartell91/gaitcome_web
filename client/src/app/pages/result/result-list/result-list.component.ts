import { Component, OnInit, Input, Output, OnChanges, SimpleChange, EventEmitter} from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';


export class Person {
  firstName: string;
  lastName: string;
  email: string;
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

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css',
              '../../dashboard-medical-center/results/results.component.css'],
  providers: [
  ]
})
export class ResultListComponent implements OnInit, OnChanges{
  
  people: Person[] = [];
  displayedPeople: Person[] = [];
  URL_WEB_SERVICE_ANALYSIS:string = 'http://localhost:8080/api/kinematics_analysis/';
  URL_WEB_SERVICE_PATIENTS:string = 'http://localhost:8080/api/pacients/';
  URL_WEB_SERVICE_THERAPISTS:string = 'http://localhost:8080/api/therapists/';

  kinematicsAnalysiss: any[] = [];
  selectedKinematicsAnalysis: any;
  d:KinematicsAnalysis;


  constructor ( private http: Http,
                private route: ActivatedRoute,
                private router: Router )  {}

  @Input() medical_center_id: string;
  @Input() therapist_id: string;
  @Input() patient_id: string ;
  @Input() token: string;
  @Input() headersOptions: RequestOptions;

  @Output() onSelect = new  EventEmitter<KinematicsAnalysis>();

  changeLog: string[] = [];
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
    console.log(this.headersOptions);
  }

  ngOnInit() {
    this.medical_center_id = '591e7542583a7b2b751d4ec3';
    this.therapist_id = '';
    this.patient_id = ''; 
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // this.token = currentUser && currentUser.token;
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Im1lZGljYWxDZW50ZXJzLnJlcXVlc3RlZF9hdCI6ImRlZmF1bHQiLCJfX3YiOiJpbml0IiwiYWRkcmVzcy5jb3VudHJ5IjoiaW5pdCIsImFkZHJlc3MuemlwIjoiaW5pdCIsImFkZHJlc3Muc3RhdGUiOiJpbml0IiwiYWRkcmVzcy5jaXR5IjoiaW5pdCIsImFkZHJlc3Muc3RyZWV0IjoiaW5pdCIsIm1lZGljYWxDZW50ZXJzLmFjY2VwdGVkX2F0IjoiaW5pdCIsIm1lZGljYWxDZW50ZXJzLnN0YXR1c19yZXF1ZXN0IjoiaW5pdCIsIm1lZGljYWxDZW50ZXJzLm5hbWUiOiJpbml0IiwibWVkaWNhbENlbnRlcnMuX2lkIjoiaW5pdCIsIm5hbWVzIjoiaW5pdCIsImdlbmRlciI6ImluaXQiLCJpZF9Eb2N1bWVudF90eXBlIjoiaW5pdCIsImlkX0RvY3VtZW50X251bSI6ImluaXQiLCJiaXJ0aCI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJwaG9uZSI6ImluaXQiLCJjZWxscGhvbmUiOiJpbml0IiwibnVtX2N0bXAiOiJpbml0IiwibnVtX25kdGEiOiJpbml0IiwiaXNfYWN0aXZlIjoiaW5pdCIsInVzZXJuYW1lIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnsibWVkaWNhbENlbnRlcnMucmVxdWVzdGVkX2F0Ijp0cnVlfSwiaW5pdCI6eyJfX3YiOnRydWUsImFkZHJlc3MuY291bnRyeSI6dHJ1ZSwiYWRkcmVzcy56aXAiOnRydWUsImFkZHJlc3Muc3RhdGUiOnRydWUsImFkZHJlc3MuY2l0eSI6dHJ1ZSwiYWRkcmVzcy5zdHJlZXQiOnRydWUsIm1lZGljYWxDZW50ZXJzLmFjY2VwdGVkX2F0Ijp0cnVlLCJtZWRpY2FsQ2VudGVycy5zdGF0dXNfcmVxdWVzdCI6dHJ1ZSwibWVkaWNhbENlbnRlcnMubmFtZSI6dHJ1ZSwibWVkaWNhbENlbnRlcnMuX2lkIjp0cnVlLCJuYW1lcyI6dHJ1ZSwiZ2VuZGVyIjp0cnVlLCJpZF9Eb2N1bWVudF90eXBlIjp0cnVlLCJpZF9Eb2N1bWVudF9udW0iOnRydWUsImJpcnRoIjp0cnVlLCJlbWFpbCI6dHJ1ZSwicGhvbmUiOnRydWUsImNlbGxwaG9uZSI6dHJ1ZSwibnVtX2N0bXAiOnRydWUsIm51bV9uZHRhIjp0cnVlLCJpc19hY3RpdmUiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7ImFkZHJlc3MiOnsiY291bnRyeSI6IlBlcnUiLCJ6aXAiOjQ1NzY0NSwic3RhdGUiOiJMaW1hIiwiY2l0eSI6IkxpbWEiLCJzdHJlZXQiOiJDYWxsZSBBbGFtZWRhIFNhbnRvcyAzNDQgRHB0byAzMDQifSwibWVkaWNhbENlbnRlcnMiOnsicmVxdWVzdGVkX2F0IjoiMjAxNi0xMi0xNVQwMTo1Mzo0Mi4xMzJaIiwiYWNjZXB0ZWRfYXQiOiIyMDE2LTExLTIwVDA0OjE5OjEzLjAwMFoiLCJzdGF0dXNfcmVxdWVzdCI6IjEiLCJuYW1lIjoiTHVpcyBNYW51ZWwiLCJfaWQiOiIzNDU2Nzg5MDQ1NjU4NDhmcjVnciJ9LCJfX3YiOjAsIm5hbWVzIjoiSG9ydGVuY2lhIiwiZ2VuZGVyIjoiNCIsImlkX0RvY3VtZW50X3R5cGUiOiJETkkiLCJpZF9Eb2N1bWVudF9udW0iOjEyMzQ1Njc4LCJiaXJ0aCI6IjIwMTYtMTEtMjBUMDQ6MTk6MTMuMDAwWiIsImVtYWlsIjoibWFudWVsQGdtYWlsLmNvbSIsInBob25lIjoiMjM0IDU0IDEzIiwiY2VsbHBob25lIjoiOTk5IDk5OSA5OTkiLCJudW1fY3RtcCI6NjU0MiwibnVtX25kdGEiOjU0NTM0NTQzLCJpc19hY3RpdmUiOmZhbHNlLCJ1c2VybmFtZSI6InRlcmFwZXV0YSIsInBhc3N3b3JkIjoiYWRtaW4iLCJfaWQiOiI1ODUxZjYwMTczZGMxMTA3MmEwYTFhOTIifSwiX3ByZXMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W251bGwsbnVsbF0sIiRfX29yaWdpbmFsX3ZhbGlkYXRlIjpbbnVsbF0sIiRfX29yaWdpbmFsX3JlbW92ZSI6W251bGxdfSwiX3Bvc3RzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltdLCIkX19vcmlnaW5hbF92YWxpZGF0ZSI6W10sIiRfX29yaWdpbmFsX3JlbW92ZSI6W119LCJpYXQiOjE0ODE3NjY4MjJ9.xDNN-rILCYc5vqVJzpLn3DIqOqMMPTEBuYHgvISoHPw';

    // this.getKinematicAnalysiss();
    
    var json = 
    [
      {
        "_id": "58327eea9d4fe93d2943525f",
        "__v": 0,
        "created_at": "2016-11-21T04:58:18.495Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58327f939d4fe93d29435260",
        "__v": 0,
        "created_at": "2016-11-21T05:01:07.351Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58327fa19d4fe93d29435261",
        "__v": 0,
        "created_at": "2016-11-21T05:01:21.950Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "583281e39d4fe93d29435263",
        "__v": 0,
        "created_at": "2016-11-21T05:10:59.666Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "583281f99d4fe93d29435264",
        "__v": 0,
        "created_at": "2016-11-21T05:11:21.149Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "583283069d4fe93d29435265",
        "__v": 0,
        "created_at": "2016-11-21T05:15:50.601Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "5832831b008f403e1fb8cc4d",
        "__v": 0,
        "created_at": "2016-11-21T05:16:11.868Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "583283689eaa9f3e37bfde35",
        "__v": 0,
        "created_at": "2016-11-21T05:17:28.249Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58328394cc4d0b3e448259ce",
        "__v": 0,
        "created_at": "2016-11-21T05:18:12.305Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "583283b4b615d23e52854b81",
        "__v": 0,
        "created_at": "2016-11-21T05:18:44.331Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "583283ceb615d23e52854b82",
        "__v": 0,
        "created_at": "2016-11-21T05:19:10.813Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "583284230215ad3e70b3d420",
        "__v": 0,
        "created_at": "2016-11-21T05:20:35.040Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "5832842f0215ad3e70b3d421",
        "__v": 0,
        "created_at": "2016-11-21T05:20:47.569Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58332bdb218d043fd79869a5",
        "__v": 0,
        "created_at": "2016-11-21T17:16:11.440Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58332c09218d043fd79869a6",
        "__v": 0,
        "created_at": "2016-11-21T17:16:57.297Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58332c21218d043fd79869a7",
        "__v": 0,
        "created_at": "2016-11-21T17:17:21.571Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58332c9bfd028e400b9419bf",
        "__v": 0,
        "created_at": "2016-11-21T17:19:23.050Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58332d1bfd028e400b9419c0",
        "__v": 0,
        "created_at": "2016-11-21T17:21:31.997Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58332d55c994df4028711f5a",
        "__v": 0,
        "created_at": "2016-11-21T17:22:29.681Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58332e0cc994df4028711f5b",
        "__v": 0,
        "created_at": "2016-11-21T17:25:32.735Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58332e8dc994df4028711f5c",
        "__v": 0,
        "created_at": "2016-11-21T17:27:41.173Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "5833337a06325641504b1d1c",
        "__v": 0,
        "created_at": "2016-11-21T17:48:42.861Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "5833341f41b73a41773535d3",
        "__v": 0,
        "created_at": "2016-11-21T17:51:27.822Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "5833345d8fd2e8418717ed9e",
        "__v": 0,
        "created_at": "2016-11-21T17:52:29.080Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "5833376d38143e42253c129b",
        "__v": 0,
        "created_at": "2016-11-21T18:05:33.874Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "5833378dfb2c93423140315e",
        "__v": 0,
        "created_at": "2016-11-21T18:06:05.852Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "583337d1a4786c42454a7786",
        "__v": 0,
        "created_at": "2016-11-21T18:07:13.521Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "5833aefc949ff0432cc5a2d6",
        "__v": 0,
        "created_at": "2016-11-22T02:35:40.382Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [
          12.323,
          34.3434
        ],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "5833afbd2ec02c4372951bdc",
        "__v": 0,
        "created_at": "2016-11-22T02:38:53.073Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [
          12.123456789,
          14.123456789012346
        ],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54,
            "_id": "5833afbd2ec02c4372951bde"
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54,
            "_id": "5833afbd2ec02c4372951bdd"
          }
        ]
      },
      {
        "_id": "5833b1c095bb2343cd30f492",
        "__v": 4,
        "medical_center_id": "43214732140783014",
        "patient_id": "666666666666666666",
        "therapist_id": "87489074830178409321",
        "created_at": "2016-11-22T02:47:28.211Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [
          12.123456789,
          14.123456789,
          16.123456789,
          12.123456789,
          17.123456789,
          14.123456789012346
        ],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ],
        "accesories_descriptions": {
          "assited_walk": null,
          "treadmills": null,
          "walker": null,
          "orthoses": null,
          "parallel_bars": null
        },
        "accesories": {
          "is_assited_walk": null,
          "is_treadmills": null,
          "is_walker": null,
          "is_orthoses": null,
          "is_parallel_bars": null
        }
      },
      {
        "_id": "5833b22e46d69c43dc8d6011",
        "__v": 0,
        "created_at": "2016-11-22T02:49:18.444Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [
          12.123456789,
          14.123456789012346
        ],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ]
      },
      {
        "_id": "5833b5db46d69c43dc8d6012",
        "__v": 0,
        "created_at": "2016-11-22T03:04:59.785Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [
          12.123456789,
          14.123456789,
          16.123456789,
          12.123456789,
          17.123456789,
          14.123456789012346
        ],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ]
      },
      {
        "_id": "5833b6a88d4033446de0c071",
        "therapist_id": "87489074830178409321",
        "medical_center_id": "43214732140783014",
        "patient_id": "748910274832019",
        "__v": 0,
        "created_at": "2016-11-22T03:08:24.280Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [
          12.123456789,
          14.123456789,
          16.123456789,
          12.123456789,
          17.123456789,
          14.123456789012346
        ],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ]
      },
      {
        "_id": "5833b7a88d4033446de0c072",
        "therapist_id": "87489074830178409321",
        "medical_center_id": "43214732140783014",
        "patient_id": "748910274832019",
        "__v": 0,
        "created_at": "2016-11-22T03:12:40.609Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [
          12.123456789,
          14.123456789,
          16.123456789,
          12.123456789,
          17.123456789,
          14.123456789012346
        ],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ]
      },
      {
        "_id": "5833b88580ffcb44a8d5aa35",
        "therapist_id": "87489074830178409321",
        "medical_center_id": "43214732140783014",
        "patient_id": "748910274832019",
        "__v": 0,
        "created_at": "2016-11-22T03:16:21.776Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [
          12.123456789,
          14.123456789,
          16.123456789,
          12.123456789,
          17.123456789,
          14.123456789012346
        ],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ],
        "accesories_descriptions": {
          "assited_walk": "String",
          "treadmills": "String",
          "walker": "String",
          "orthoses": "String",
          "parallel_bars": "String"
        },
        "accesories": {
          "is_assited_walk": false,
          "is_treadmills": false,
          "is_walker": false,
          "is_orthoses": false,
          "is_parallel_bars": false
        }
      },
      {
        "_id": "5833bc4a80ffcb44a8d5aa36",
        "therapist_id": "87489074830178409321",
        "medical_center_id": "43214732140783014",
        "patient_id": "748910274832019",
        "__v": 0,
        "created_at": "2016-11-22T03:32:26.782Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [
          12.123456789,
          14.123456789,
          16.123456789,
          12.123456789,
          17.123456789,
          14.123456789012346
        ],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ],
        "accesories_descriptions": {
          "assited_walk": "String",
          "treadmills": "String",
          "walker": "String",
          "orthoses": "String",
          "parallel_bars": "String"
        },
        "accesories": {
          "is_assited_walk": false,
          "is_treadmills": false,
          "is_walker": false,
          "is_orthoses": false,
          "is_parallel_bars": false
        }
      },
      {
        "_id": "5833bc6080ffcb44a8d5aa37",
        "therapist_id": "87489074830178409321",
        "medical_center_id": "43214732140783014",
        "patient_id": "748910274832019",
        "__v": 0,
        "created_at": "2016-11-22T03:32:48.423Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [
          12.123456789,
          14.123456789,
          16.123456789,
          12.123456789,
          17.123456789,
          14.123456789012346
        ],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ],
        "accesories_descriptions": {
          "assited_walk": "String",
          "treadmills": "String",
          "walker": "String",
          "orthoses": "String",
          "parallel_bars": "String"
        },
        "accesories": {
          "is_assited_walk": false,
          "is_treadmills": false,
          "is_walker": false,
          "is_orthoses": false,
          "is_parallel_bars": false
        }
      },
      {
        "_id": "58bb9738f3ce50347b9d9b5a",
        "__v": 0,
        "created_at": "2017-03-05T04:42:32.742Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bb989e52b5ca34c3f80acf",
        "__v": 0,
        "created_at": "2017-03-05T04:48:30.242Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bb9b019e844c354dccc1dc",
        "__v": 0,
        "created_at": "2017-03-05T04:58:41.428Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bb9bbe9e844c354dccc1dd",
        "__v": 0,
        "created_at": "2017-03-05T05:01:50.414Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bb9c3f1160dc35825d1194",
        "__v": 0,
        "created_at": "2017-03-05T05:03:59.902Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bb9d921160dc35825d1196",
        "__v": 0,
        "created_at": "2017-03-05T05:09:38.660Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bb9db01160dc35825d1197",
        "__v": 0,
        "created_at": "2017-03-05T05:10:08.464Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bba04da148e93637c2a83e",
        "__v": 0,
        "created_at": "2017-03-05T05:21:17.453Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bba259a148e93637c2a841",
        "__v": 0,
        "created_at": "2017-03-05T05:30:01.891Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bba3f8a148e93637c2a842",
        "__v": 0,
        "created_at": "2017-03-05T05:36:56.800Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bba44a10f23a36d876e84f",
        "__v": 0,
        "created_at": "2017-03-05T05:38:18.640Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bba46f12e61036e46bbfae",
        "__v": 0,
        "created_at": "2017-03-05T05:38:55.085Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bba5223fa747370d4fb789",
        "__v": 0,
        "created_at": "2017-03-05T05:41:54.774Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bba616f6be7d371dfa9bd2",
        "__v": 0,
        "created_at": "2017-03-05T05:45:58.983Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bba6b2f6be7d371dfa9bd3",
        "__v": 0,
        "created_at": "2017-03-05T05:48:34.694Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bba6baf6be7d371dfa9bd4",
        "__v": 0,
        "created_at": "2017-03-05T05:48:42.288Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "58bba811ef5308378c452a95",
        "__v": 0,
        "created_at": "2017-03-05T05:54:25.208Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "590cadbe6ed0710700e0ab7a",
        "__v": 0,
        "created_at": "2017-05-05T16:52:14.013Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "590cae7b1d1f510b138f56a8",
        "__v": 0,
        "created_at": "2017-05-05T16:55:23.891Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "590caff21d1f510b138f56a9",
        "__v": 0,
        "created_at": "2017-05-05T17:01:38.518Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": []
      },
      {
        "_id": "590cb14d1d1f510b138f56aa",
        "therapist_id": "87489074830178409321",
        "medical_center_id": "43214732140783014",
        "patient_id": "748910274832019",
        "__v": 0,
        "created_at": "2017-05-05T17:07:25.793Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [],
        "accesories_descriptions": {
          "assited_walk": "String",
          "treadmills": "String",
          "walker": "String",
          "orthoses": "String",
          "parallel_bars": "String"
        },
        "accesories": {
          "is_assited_walk": false,
          "is_treadmills": false,
          "is_walker": false,
          "is_orthoses": false,
          "is_parallel_bars": false
        }
      },
      {
        "_id": "590cb87aaf1cad0e36e8c920",
        "medical_center_id": "43214732140783014",
        "patient_id": "748910274832019",
        "__v": 0,
        "created_at": "2017-05-05T17:38:02.614Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ]
      },
      {
        "_id": "590cb890af1cad0e36e8c921",
        "medical_center_id": "43214732140783014",
        "patient_id": "748910274832019",
        "__v": 0,
        "created_at": "2017-05-05T17:38:24.212Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ]
      },
      {
        "_id": "590cb8eca4b8050e63626f00",
        "therapist_id": "87489074830178409321",
        "medical_center_id": "43214732140783014",
        "patient_id": "748910274832019",
        "__v": 0,
        "created_at": "2017-05-05T17:39:56.877Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": [],
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ],
        "accesories_descriptions": {
          "assited_walk": "String",
          "treadmills": "String",
          "walker": "String",
          "orthoses": "String",
          "parallel_bars": "String"
        },
        "accesories": {
          "is_assited_walk": false,
          "is_treadmills": false,
          "is_walker": false,
          "is_orthoses": false,
          "is_parallel_bars": false
        }
      },
      {
        "_id": "590cb9bacfe2470e8c97dbfa",
        "therapist_id": "87489074830178409321",
        "medical_center_id": "43214732140783014",
        "patient_id": "748910274832019",
        "__v": 0,
        "created_at": "2017-05-05T17:43:22.698Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [],
          "patient_angles": []
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ],
        "accesories_descriptions": {
          "assited_walk": "String",
          "treadmills": "String",
          "walker": "String",
          "orthoses": "String",
          "parallel_bars": "String"
        },
        "accesories": {
          "is_assited_walk": false,
          "is_treadmills": false,
          "is_walker": false,
          "is_orthoses": false,
          "is_parallel_bars": false
        }
      },
      {
        "_id": "590cba5df22d1d0eccc4ca18",
        "therapist_id": "87489074830178409321",
        "medical_center_id": "43214732140783014",
        "patient_id": "748910274832019",
        "__v": 0,
        "created_at": "2017-05-05T17:46:05.093Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [
            [
              0,
              14.72677596,
              3.825136612
            ],
            [
              3.03030303,
              15.10928962,
              3.825136612
            ],
            [
              6.060606061,
              15.30054645,
              3.825136612
            ],
            [
              9.090909091,
              15.30054645,
              4.016393443
            ],
            [
              12.12121212,
              14.72677596,
              4.207650273
            ],
            [
              15.15151515,
              14.53551913,
              4.398907104
            ],
            [
              18.18181818,
              14.3442623,
              4.590163934
            ],
            [
              21.21212121,
              13.96174863,
              4.781420765
            ],
            [
              24.24242424,
              13.96174863,
              5.163934426
            ],
            [
              27.27272727,
              14.15300546,
              5.546448087
            ],
            [
              30.3030303,
              13.96174863,
              5.737704918
            ],
            [
              33.33333333,
              13.7704918,
              5.928961749
            ],
            [
              36.36363636,
              13.7704918,
              6.120218579
            ],
            [
              39.39393939,
              13.57923497,
              6.120218579
            ],
            [
              42.42424242,
              13.57923497,
              5.928961749
            ],
            [
              45.45454545,
              13.96174863,
              5.546448087
            ],
            [
              48.48484848,
              14.3442623,
              5.163934426
            ],
            [
              51.51515152,
              14.3442623,
              4.972677596
            ],
            [
              54.54545455,
              14.15300546,
              4.781420765
            ],
            [
              57.57575758,
              13.96174863,
              4.590163934
            ],
            [
              60.60606061,
              13.19672131,
              4.207650273
            ],
            [
              63.63636364,
              12.81420765,
              4.016393443
            ],
            [
              66.66666667,
              13.00546448,
              4.016393443
            ],
            [
              69.6969697,
              13.00546448,
              4.016393443
            ],
            [
              72.72727273,
              13.38797814,
              4.207650273
            ],
            [
              75.75757576,
              13.7704918,
              4.590163934
            ],
            [
              78.78787879,
              14.15300546,
              4.781420765
            ],
            [
              81.81818182,
              14.15300546,
              4.972677596
            ],
            [
              84.84848485,
              14.15300546,
              5.163934426
            ],
            [
              87.87878788,
              14.3442623,
              5.355191257
            ],
            [
              90.90909091,
              14.3442623,
              5.163934426
            ],
            [
              93.93939394,
              14.15300546,
              4.972677596
            ],
            [
              96.96969697,
              14.15300546,
              4.781420765
            ],
            [
              100,
              14.53551913,
              4.207650273
            ]
          ],
          "patient_angles": [
            [
              0,
              0
            ],
            [
              4.545454545,
              0.25
            ],
            [
              9.090909091,
              1.41
            ],
            [
              13.63636364,
              1.64
            ],
            [
              18.18181818,
              1.6
            ],
            [
              22.72727273,
              2.55
            ],
            [
              27.27272727,
              2.62
            ],
            [
              31.81818182,
              2.5
            ],
            [
              36.36363636,
              2.42
            ],
            [
              40.90909091,
              2.74
            ],
            [
              45.45454545,
              2.62
            ],
            [
              50,
              2.69
            ],
            [
              54.54545455,
              2.81
            ],
            [
              59.09090909,
              2.63
            ],
            [
              63.63636364,
              2.77
            ],
            [
              68.18181818,
              2.68
            ],
            [
              72.72727273,
              2.56
            ],
            [
              77.27272727,
              2.39
            ],
            [
              81.81818182,
              2.3
            ],
            [
              86.36363636,
              2
            ],
            [
              90.90909091,
              1.85
            ],
            [
              95.45454545,
              1.49
            ],
            [
              100,
              2.08
            ]
          ]
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ],
        "accesories_descriptions": {
          "assited_walk": "String",
          "treadmills": "String",
          "walker": "String",
          "orthoses": "String",
          "parallel_bars": "String"
        },
        "accesories": {
          "is_assited_walk": false,
          "is_treadmills": false,
          "is_walker": false,
          "is_orthoses": false,
          "is_parallel_bars": false
        }
      },
      {
        "_id": "590cc0a8f22d1d0eccc4ca19",
        "therapist_id": "87489074830178409321",
        "medical_center_id": "43214732140783014",
        "patient_id": "748910274832019",
        "__v": 0,
        "created_at": "2017-05-05T18:12:56.991Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [
            [
              0,
              14.72677596,
              3.825136612
            ],
            [
              3.03030303,
              15.10928962,
              3.825136612
            ],
            [
              6.060606061,
              15.30054645,
              3.825136612
            ],
            [
              9.090909091,
              15.30054645,
              4.016393443
            ],
            [
              12.12121212,
              14.72677596,
              4.207650273
            ],
            [
              15.15151515,
              14.53551913,
              4.398907104
            ],
            [
              18.18181818,
              14.3442623,
              4.590163934
            ],
            [
              21.21212121,
              13.96174863,
              4.781420765
            ],
            [
              24.24242424,
              13.96174863,
              5.163934426
            ],
            [
              27.27272727,
              14.15300546,
              5.546448087
            ],
            [
              30.3030303,
              13.96174863,
              5.737704918
            ],
            [
              33.33333333,
              13.7704918,
              5.928961749
            ],
            [
              36.36363636,
              13.7704918,
              6.120218579
            ],
            [
              39.39393939,
              13.57923497,
              6.120218579
            ],
            [
              42.42424242,
              13.57923497,
              5.928961749
            ],
            [
              45.45454545,
              13.96174863,
              5.546448087
            ],
            [
              48.48484848,
              14.3442623,
              5.163934426
            ],
            [
              51.51515152,
              14.3442623,
              4.972677596
            ],
            [
              54.54545455,
              14.15300546,
              4.781420765
            ],
            [
              57.57575758,
              13.96174863,
              4.590163934
            ],
            [
              60.60606061,
              13.19672131,
              4.207650273
            ],
            [
              63.63636364,
              12.81420765,
              4.016393443
            ],
            [
              66.66666667,
              13.00546448,
              4.016393443
            ],
            [
              69.6969697,
              13.00546448,
              4.016393443
            ],
            [
              72.72727273,
              13.38797814,
              4.207650273
            ],
            [
              75.75757576,
              13.7704918,
              4.590163934
            ],
            [
              78.78787879,
              14.15300546,
              4.781420765
            ],
            [
              81.81818182,
              14.15300546,
              4.972677596
            ],
            [
              84.84848485,
              14.15300546,
              5.163934426
            ],
            [
              87.87878788,
              14.3442623,
              5.355191257
            ],
            [
              90.90909091,
              14.3442623,
              5.163934426
            ],
            [
              93.93939394,
              14.15300546,
              4.972677596
            ],
            [
              96.96969697,
              14.15300546,
              4.781420765
            ],
            [
              100,
              14.53551913,
              4.207650273
            ]
          ],
          "patient_angles": [
            [
              0,
              0
            ],
            [
              4.545454545,
              0.25
            ],
            [
              9.090909091,
              1.41
            ],
            [
              13.63636364,
              1.64
            ],
            [
              18.18181818,
              1.6
            ],
            [
              22.72727273,
              2.55
            ],
            [
              27.27272727,
              2.62
            ],
            [
              31.81818182,
              2.5
            ],
            [
              36.36363636,
              2.42
            ],
            [
              40.90909091,
              2.74
            ],
            [
              45.45454545,
              2.62
            ],
            [
              50,
              2.69
            ],
            [
              54.54545455,
              2.81
            ],
            [
              59.09090909,
              2.63
            ],
            [
              63.63636364,
              2.77
            ],
            [
              68.18181818,
              2.68
            ],
            [
              72.72727273,
              2.56
            ],
            [
              77.27272727,
              2.39
            ],
            [
              81.81818182,
              2.3
            ],
            [
              86.36363636,
              2
            ],
            [
              90.90909091,
              1.85
            ],
            [
              95.45454545,
              1.49
            ],
            [
              100,
              2.08
            ]
          ]
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ],
        "accesories_descriptions": {
          "assited_walk": "String",
          "treadmills": "String",
          "walker": "String",
          "orthoses": "String",
          "parallel_bars": "String"
        },
        "accesories": {
          "is_assited_walk": false,
          "is_treadmills": false,
          "is_walker": false,
          "is_orthoses": false,
          "is_parallel_bars": false
        }
      },
      {
        "_id": "5917e445512fd60c985238fe",
        "therapist_id": "Julia Santa Ana",
        "medical_center_id": "Cerene SAC",
        "patient_id": "Camila Sedano",
        "__v": 0,
        "created_at": "2017-05-14T04:59:49.547Z",
        "tp_hip": [],
        "tp_plv": [],
        "tp_ank": [],
        "tp_kne": [],
        "fp_hip": [],
        "fp_plv": [],
        "fp_ank": [],
        "fp_kne": [],
        "spr_hip": [],
        "spr_plv": [],
        "spr_ank": [],
        "spr_kne": [],
        "spl_hip": [],
        "spl_plv": [],
        "spl_ank": [],
        "spl_kne": {
          "normal_ranges": [
            [
              0,
              14.72677596,
              3.825136612
            ],
            [
              3.03030303,
              15.10928962,
              3.825136612
            ],
            [
              6.060606061,
              15.30054645,
              3.825136612
            ],
            [
              9.090909091,
              15.30054645,
              4.016393443
            ],
            [
              12.12121212,
              14.72677596,
              4.207650273
            ],
            [
              15.15151515,
              14.53551913,
              4.398907104
            ],
            [
              18.18181818,
              14.3442623,
              4.590163934
            ],
            [
              21.21212121,
              13.96174863,
              4.781420765
            ],
            [
              24.24242424,
              13.96174863,
              5.163934426
            ],
            [
              27.27272727,
              14.15300546,
              5.546448087
            ],
            [
              30.3030303,
              13.96174863,
              5.737704918
            ],
            [
              33.33333333,
              13.7704918,
              5.928961749
            ],
            [
              36.36363636,
              13.7704918,
              6.120218579
            ],
            [
              39.39393939,
              13.57923497,
              6.120218579
            ],
            [
              42.42424242,
              13.57923497,
              5.928961749
            ],
            [
              45.45454545,
              13.96174863,
              5.546448087
            ],
            [
              48.48484848,
              14.3442623,
              5.163934426
            ],
            [
              51.51515152,
              14.3442623,
              4.972677596
            ],
            [
              54.54545455,
              14.15300546,
              4.781420765
            ],
            [
              57.57575758,
              13.96174863,
              4.590163934
            ],
            [
              60.60606061,
              13.19672131,
              4.207650273
            ],
            [
              63.63636364,
              12.81420765,
              4.016393443
            ],
            [
              66.66666667,
              13.00546448,
              4.016393443
            ],
            [
              69.6969697,
              13.00546448,
              4.016393443
            ],
            [
              72.72727273,
              13.38797814,
              4.207650273
            ],
            [
              75.75757576,
              13.7704918,
              4.590163934
            ],
            [
              78.78787879,
              14.15300546,
              4.781420765
            ],
            [
              81.81818182,
              14.15300546,
              4.972677596
            ],
            [
              84.84848485,
              24.15300546,
              20.163934426
            ],
            [
              87.87878788,
              34.3442623,
              25.355191257
            ],
            [
              90.90909091,
              24.3442623,
              20.163934426
            ],
            [
              93.93939394,
              24.15300546,
              18.972677596
            ],
            [
              96.96969697,
              14.15300546,
              4.781420765
            ],
            [
              100,
              14.53551913,
              4.207650273
            ]
          ],
          "patient_angles": [
            [
              0,
              0
            ],
            [
              4.545454545,
              0.25
            ],
            [
              9.090909091,
              7.41
            ],
            [
              13.63636364,
              11.64
            ],
            [
              18.18181818,
              3.6
            ],
            [
              22.72727273,
              19.55
            ],
            [
              27.27272727,
              15.62
            ],
            [
              31.81818182,
              12.5
            ],
            [
              36.36363636,
              22.42
            ],
            [
              40.90909091,
              20.74
            ],
            [
              45.45454545,
              32.62
            ],
            [
              50,
              2.69
            ],
            [
              54.54545455,
              2.81
            ],
            [
              59.09090909,
              32.63
            ],
            [
              63.63636364,
              22.77
            ],
            [
              68.18181818,
              12.68
            ],
            [
              72.72727273,
              6.56
            ],
            [
              77.27272727,
              2.39
            ],
            [
              81.81818182,
              2.3
            ],
            [
              86.36363636,
              2
            ],
            [
              90.90909091,
              1.85
            ],
            [
              95.45454545,
              1.49
            ],
            [
              100,
              2.08
            ]
          ]
        },
        "rtrc": [],
        "ltrc": [],
        "rbwt": [],
        "lbwt": [],
        "rfwt": [],
        "lfwt": [],
        "rhee": [],
        "lhee": [],
        "rtoe": [],
        "ltoe": [],
        "rank": [],
        "lank": [],
        "rkne": [],
        "lkne": [
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          },
          {
            "x": 123.31,
            "y": 543.4,
            "z": 54.54
          }
        ],
        "accesories_descriptions": {
          "assited_walk": "No se necesito",
          "treadmills": "Solo para precalentamiento",
          "walker": "Si se utlizó",
          "orthoses": "No se necesito",
          "parallel_bars": ""
        },
        "accesories": {
          "is_assited_walk": true,
          "is_treadmills": true,
          "is_walker": true,
          "is_orthoses": true,
          "is_parallel_bars": false
        }
      }
    ] 

    for (var i = 0; i < json.length; i++) {
      this.d = json[i] as KinematicsAnalysis;
      this.kinematicsAnalysiss.push(this.d);
    }
  }

  filterPeople(event: any) {
    const filterText: string = (<HTMLInputElement>event.target).value.toLowerCase();
    this.displayedPeople = this.people.filter((person: Person) =>
      !filterText || person.firstName.toLowerCase().indexOf(filterText) > -1
    );
  }

  sortPeople(event: any) {
    const grid = event.target;
    const sortOrder = grid.sortOrder[0];
    const sortProperty = grid.columns[sortOrder.column].name;
    const sortDirection = sortOrder.direction;
    this.displayedPeople.sort((a, b) => {
      let res: number;
      let valueA: string = grid.get(sortProperty, a),
          valueB: string = grid.get(sortProperty, b);
      if (!+(valueA)) {
        res = parseInt(valueA, 10) - parseInt(valueB, 10);
      } else {
        res = valueA.localeCompare(valueB);
      }
      if (sortDirection === 'desc') {
        res *= -1;
      }
      return res;
    });
  }

  getKinematicAnalysiss() {
    this._getJSON(this.URL_WEB_SERVICE_ANALYSIS, this.headersOptions)
      .subscribe(json => this.kinematicsAnalysiss = json)
      // .subscribe(json => this.displayedPeople = this.people = json.result)
  }

  select(kinematicsAnalysis: KinematicsAnalysis): void {
    this.onSelect.emit(kinematicsAnalysis);
  }

  // doFilter(type:string) {
  //   //let hard_id: string = '5917e445512fd60c985238fe';
  //   // Relative navigation back to the crises
  //   switch (type) {
  //     case "therapist":

  //       if(this.therapist_id === this.selectedTherapist._id) {
  //         this.therapist_id = '';
  //       } else {
  //         this.therapist_id = this.selectedTherapist._id;
  //       }
  //       break;

  //     case "patient":

  //       if(this.patient_id === this.selectedPatient._id) {
  //         this.patient_id = '';
  //       } else {
  //         this.patient_id = this.selectedPatient._id;
  //       }
  //       break;  
      
  //     default:
  //       // more filters ..
  //       break;
  //   }

  //   // clear the array for new data
  //   this.kinematicsAnalysiss = [];
  //   this.getKinematicAnalysiss();
  // }  

  // getHeaders() {
  //   let headers = new Headers();
  //   headers.append('Accept', 'application/json');
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('x-access-token', this.token);

  //   let params = new URLSearchParams();
  //   params.set("patient_id", this.patient_id);
  //   params.set("medical_center_id", this.medical_center_id);
  //   params.set("therapist_id", this.therapist_id);

  //   let options = new RequestOptions();
  //   options.headers = headers
  //   options.search = params;

  //   return options;
  // }

  _getJSON(url: string, option: RequestOptions): Observable<any> {
    return this.http.get(url,option)
      .map((res: Response) => res.json())
  }

}
// import { Component, OnInit } from '@angular/core';
// import {
//   IMdlTableModelItem,
//   MdlDefaultTableModel,
// } from 'angular2-mdl';


// export interface ITableItem extends IMdlTableModelItem {
//   material: string;
//   quantity: number;
//   unitPrice: number;
// }

// @Component({
//   selector: 'app-result-list',
//   templateUrl: './result-list.component.html',
//   styleUrls: ['./result-list.component.css']
// })
// export class ResultListComponent implements OnInit {

//     private tablepaciente: [ITableItem] = [
//     {material: 'Acrylic (Transparent)', quantity: 25, unitPrice: 2.90, selected: true},
//     {material: 'Plywood (Birch)', quantity: 50, unitPrice: 1.25, selected: false},
//     {material: 'Laminate (Gold on Blue)', quantity: 10, unitPrice: 2.35, selected: false}
//   ];

//   protected selected: Array<ITableItem> = new Array<ITableItem>();

//   public tableModel = new MdlDefaultTableModel([
//     {key: 'material', name: 'Material', sortable: true},
//     {key: 'quantity', name: 'Quantity', sortable: true, numeric: true},
//     {key: 'unitPrice', name: 'Unit price', numeric: true}
//   ]);


//   public ngOnInit() {
//     this.tableModel.addAll(this.tablepaciente);
//     this.selected = this.tablepaciente.filter( paciente => paciente.selected);
//   }

//   protected selectionChanged($event) {
//     this.selected = $event.value;
//   }

// }
