import { Component, OnInit} from '@angular/core';
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
  selector: 'app-results-component',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [
    HttpModule
  ]
})
export class ResultsComponent implements OnInit {
  people: Person[] = [];
  displayedPeople: Person[] = [];
  

  token: string = '';

  medical_center_id:string='';
  medical_center_name:string='';
  therapist_id:string='';
  patient_id:string='';

  optionsHeader: RequestOptions;


  kinematicsAnalysiss: any[] = [];
  currentKinematicsAnalysis: any;

  patients:any[]=[];
  currentPatient:any;

  therapists:any[] =[];
  currentTherapist:any;


  currentMultipleKinematicsAnalysisSelected: any[] =[];

  
  constructor(  private http: Http,
                private route: ActivatedRoute,
                private router: Router )  {
    this.currentKinematicsAnalysis = null;
  }

  ngOnInit() {

    if (environment.production) { 

        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser && currentUser.token;
        this.medical_center_id = currentUser && currentUser.entity._id;
        this.medical_center_name = currentUser && currentUser.entity.name;

    } else {
        this.token = environment.token;      
        this.medical_center_id = environment.medical_center_id;
        this.medical_center_name = environment.medical_center_name;
    }
    
  }

  // filterPeople(event: any) {
  //   const filterText: string = (<HTMLInputElement>event.target).value.toLowerCase();
  //   this.displayedPeople = this.people.filter((person: Person) =>
  //     !filterText || person.firstName.toLowerCase().indexOf(filterText) > -1
  //   );

  // }

  // sortPeople(event: any) {
  //   const grid = event.target;
  //   const sortOrder = grid.sortOrder[0];
  //   const sortProperty = grid.columns[sortOrder.column].name;
  //   const sortDirection = sortOrder.direction;
  //   this.displayedPeople.sort((a, b) => {
  //     let res: number;
  //     let valueA: string = grid.get(sortProperty, a),
  //         valueB: string = grid.get(sortProperty, b);
  //     if (!+(valueA)) {
  //       res = parseInt(valueA, 10) - parseInt(valueB, 10);
  //     } else {
  //       res = valueA.localeCompare(valueB);
  //     }
  //     if (sortDirection === 'desc') {
  //       res *= -1;
  //     }
  //     return res;
  //   });
  // }

  // getKinematicAnalysiss() {
  //   this._getJSON(this.URL_WEB_SERVICE_ANALYSIS, this.getHeaders())
  //     .subscribe(json => this.kinematicsAnalysiss = json)
  //     // .subscribe(json => this.displayedPeople = this.people = json.result)
  // }

  // getPatientes() {
  //   this._getJSON(this.URL_WEB_SERVICE_PATIENTS, this.getHeaders())
  //     .subscribe(json => this.patients = json)
  // }

  // getTherapist() {
  //   this._getJSON(this.URL_WEB_SERVICE_THERAPISTS, this.getHeaders())
  //     .subscribe(json => this.therapists = json)
  // }
 
  

  // onSelectPaciente(patient:any) {
  //   console.log("selected patient");
  //   this.currentPatient = patient;
  //   this.doFilter('patient');
  // }

  // onSelectTherapist(therapist: any) {
  //   console.log("selected therapist");
  //   this.currentTherapist = therapist;
  //   this.doFilter('therapist');
  // }

  gotoDetail() {
      this.router.navigate(['../result', this.currentKinematicsAnalysis._id ], { relativeTo: this.route });

  }

  doFilter(type:string) {
    //let hard_id: string = '5917e445512fd60c985238fe';
    // Relative navigation back to the crises
    switch (type) {
      case 'therapist':

        if(this.therapist_id === this.currentTherapist._id) {
          this.therapist_id = '';
        } else {
          this.therapist_id = this.currentTherapist._id;
        }
        break;

      case 'patient':

        if(this.patient_id === this.currentPatient._id) {
          this.patient_id = '';
        } else {
          this.patient_id = this.currentPatient._id;
        }
        break;  
      
      default:
        // more filters ..
        break;
    }

    // clear the array for new data
    // this.kinematicsAnalysiss = [];
    // this.getKinematicAnalysiss();
    this.optionsHeader = this.getHeaders();

  }  

  getHeaders() {

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.token);

    let params = new URLSearchParams();
    params.set("patient_id", this.patient_id);
    params.set("medical_center_id", this.medical_center_id);
    params.set("therapist_id", this.therapist_id);

    let options = new RequestOptions();
    options.headers = headers
    options.search = params;
    console.log("Parent - getHeaders()", options);

    return options;
  }

  // _getJSON(url: string, option: RequestOptions): Observable<any> {
  //   return this.http.get(url,option)
  //     .map((res: Response) => res.json())
  // }


  // --------------------------------------------------
  // METHODS THAT ALLOW COMUNICATION BETWEEN CHILD 
  // COMPONENTS THROUGH THE PARENT COMPONENT
  // --------------------------------------------------

  // this method is always listening to the selected  
  // KinematicAnalisys from child component 
  // updating the currentKinematicsAnalysis in this 
  // component 
  kinematicAnalysisSelected (kinematicsAnalysis: any) {
    this.currentKinematicsAnalysis = kinematicsAnalysis;
  }
  
  // this method is always listening to multiselection  
  // KinematicAnalisys from child component 
  // updating the currentMultipleKinematicsAnalysisSelected  
  // in this component 
  multipleKinematicAnalysisSelected (multipleKinematicsAnalysis: any[]) {
    this.currentMultipleKinematicsAnalysisSelected = multipleKinematicsAnalysis;
      console.log(this.currentMultipleKinematicsAnalysisSelected);
  }

  // this method is always listening to the selected  
  // therapist from child component 
  // updating the currentTherapist in this 
  // component 
  therapistSelected(therapist: any) {
    this.currentTherapist = therapist;
    this.doFilter("therapist");
    console.log("therapistSelected() from doFilter");
  }

  // this method is always listening to the selected  
  // patient from child component 
  // updating the currentPatient in this 
  // component 
  patientSelected(patient: any) {
    console.log("patientSelected" , patient )  
    this.currentPatient= patient;
    this.doFilter("patient");
    console.log("patientSelected() from doFilter");
  }

}

// }
