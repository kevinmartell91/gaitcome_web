import { Component, OnInit, Input, Output, OnChanges, SimpleChange, EventEmitter,ViewChild,ViewEncapsulation} from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';




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
  styleUrls: [
      './result-list.component.css'
      // '../../dashboard-medical-center/results/results.component.css'
  ],
  providers: [
  ],
})
export class ResultListComponent implements OnInit, OnChanges{

  
  people: Person[] = [];
  displayedPeople: Person[] = [];
  

  kinematicsAnalysiss: any[] = [];
  selectedKinematicsAnalysis: any;
  d:KinematicsAnalysis;
  multipleKinematicsAnalysiss: any[] = [];

  constructor ( private http: Http,
                private route: ActivatedRoute,
                private router: Router )  {

  }

  @Input() medical_center_id: string;
  @Input() therapist_id: string;
  @Input() patient_id: string ;
  @Input() token: string;
  @Input() headersOptions: RequestOptions;

  @Output() onSelect = new  EventEmitter<KinematicsAnalysis>();
  @Output() onMultipleSelect = new  EventEmitter<any>();

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
        console.log(this.changeLog);




        this.getKinematicAnalysiss();   

  }

  ngOnInit() {

    // this.medical_center_id = '591e7542583a7b2b751d4ec3';
    this.medical_center_id = '';
    this.therapist_id = '';
    this.patient_id = ''; 

    if (environment.production) { 

        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser && currentUser.token;
        this.getKinematicAnalysiss();   

    } else {
        this.token = environment.token;      
        var json = environment.resultList;

        for (var i = 0; i < json.length; i++) {
            this.d = json[i] as KinematicsAnalysis;
            this.kinematicsAnalysiss.push(this.d);
        }
    }    
        

    console.log("ResultListComponent - headersOptions",this.headersOptions);

      
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
        console.log("getKinematicAnalysiss- header",this.headersOptions);
        this._getJSON(environment.URL_WEB_SERVICE_ANALYSIS, this.headersOptions)
          .subscribe(json => this.kinematicsAnalysiss = json)
          // .subscribe(json => this.displayedPeople = this.people = json.result)
  }

  select(kinematicsAnalysis: KinematicsAnalysis): void {
     
        this.onSelect.emit(kinematicsAnalysis);

  }

  multipleSelect(idSelected: string) {
      // look for remove is selected already
      this.updateMultipleSelection(idSelected);
      // console.log(this.multipleKinematicsAnalysiss);
      this.onMultipleSelect.emit(this.multipleKinematicsAnalysiss);
  }

  updateMultipleSelection(idSelected: string) {
      let tempSelected : any[] = [];
      let exist: boolean = false
      
      for (var i = 0; i < this.multipleKinematicsAnalysiss.length; i++) {
          if(this.multipleKinematicsAnalysiss[i] === idSelected)
              exist = true;    
      }

      if (!exist) {
          this.multipleKinematicsAnalysiss.push(idSelected);
       } else { //delete previously selected
          for (var i = 0; i < this.multipleKinematicsAnalysiss.length; i++) {
              if(this.multipleKinematicsAnalysiss[i] !== idSelected)
                  tempSelected.push(this.multipleKinematicsAnalysiss[i]);
          }

          this.multipleKinematicsAnalysiss = [];
          this.multipleKinematicsAnalysiss = tempSelected;
           
       }

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


// (mouseover)="changeStyle($event)" (mouseout)="changeStyle($event)"
  color:string = 'red';
  over:boolean = false;
  kinematicOver:any = null;

    changeStyle($event,kinematicsAnalysis:string){
      console.log("changeStyle",this.over)
      this.color = $event.type == 'mouseover' ? 'yellow' : 'red';
      this.over = $event.type = false ? true : false;
      this.kinematicOver = kinematicsAnalysis;
    }


}
