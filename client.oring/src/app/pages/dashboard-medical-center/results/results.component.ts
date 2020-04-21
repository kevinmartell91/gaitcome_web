import { Component, OnInit} from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-results-component',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [
    HttpModule
  ]
})
export class ResultsComponent implements OnInit {

  token: string = '';

  medical_center_id:string='';
  medical_center_name:string='';
  therapist_id:string='';
  patient_id:string='';
  type_request = 'results';

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

  gotoDetail() {
      this.router.navigate(['../result', this.currentKinematicsAnalysis._id ], { relativeTo: this.route });
  }

  doFilter(type:string, entityObject: any) {
    //let hard_id: string = '5917e445512fd60c985238fe';
    // Relative navigation back to the crises
    switch (type) {
      
      case 'therapist':
        if(entityObject !== null) {
          if(this.therapist_id !== this.currentTherapist._id) {
            this.therapist_id = this.currentTherapist._id;
          } else {
            this.therapist_id = '';
          }
        } else {
          this.therapist_id = '';
        }
        break;

      case 'patient':

        if(entityObject !== null) {
          if(this.patient_id !== this.currentPatient._id) {
            this.patient_id = this.currentPatient._id;
          } else {
            this.patient_id = '';
          }
        } else {
          this.patient_id = '';
        }

        break;  
      
      default:
        // more filters ..
        break;
    }

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
    params.set("type_request", this.type_request);

    let options = new RequestOptions();
    options.headers = headers
    options.search = params;

    return options;
  }

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
  }

  // this method is always listening to the selected  
  // therapist from child component 
  // updating the currentTherapist in this 
  // component 
  therapistSelected(therapist: any) {
    this.currentTherapist = therapist;
    this.doFilter("therapist", therapist);
    // set the currentKinematicsAnalysis null when
    // a new thearpist is selected
    this.currentKinematicsAnalysis = null;
  }

  // this method is always listening to the selected  
  // patient from child component 
  // updating the currentPatient in this 
  // component 
  patientSelected(patient: any) {
    this.currentPatient= patient;
    this.doFilter("patient",patient);
    // set the currentKinematicsAnalysis null when
    // a new patient is selected
    this.currentKinematicsAnalysis = null;
  }

}

// }
