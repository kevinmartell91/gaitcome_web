import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/observable';
import { NgbActiveModal, NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

import * as moment from 'moment';

@Component({
  selector: 'app-result-add',
  templateUrl: './result-add.component.html',
  styleUrls: ['./result-add.component.css']
})
export class ResultAddComponent implements OnInit {

  public form: FormGroup;
  public formComboBox: FormGroup;
  public token;
  currentTherapist: any;
  currentPatient: any;
  model;

  medical_center_id: string;
  medical_center_name: string;
  instructions: String;


  is_assited_walk: boolean;      
  is_treadmills: boolean;        
  is_walker: boolean;       
  is_orthoses: boolean;         
  is_parallel_bars: boolean; 

  imgPathActivated : String;
  imgPathDeactivated : String;
  
  assited_walk_icon_path: String;      
  treadmills_icon_path: String;        
  walker_icon_path: String;       
  orthoses_icon_path: String;         
  parallel_bars_icon_path: String;   

  assited_walk_icon_title: String;      
  treadmills_icon_title: String;        
  walker_icon_title: String;       
  orthoses_icon_title: String;         
  parallel_bars_icon_title: String;   

  @Output() onFinishedAdd = new EventEmitter<any>();



  constructor( public activeModal: NgbActiveModal,
               private fb : FormBuilder,
      		     public http : Http) { 
  	// this.is_parallel_bars= false;
  	this.form = this.fb.group({});
    // this.formComboBox
    this.imgPathActivated = "../../../../assets/img/activated_icons/";
    this.imgPathDeactivated = "../../../../assets/img/deactivated_icons/";
    this.initIconsSummary();
    this.currentTherapist = null;
    this.currentPatient= null;
    this.instructions = "Pick the analysis date and the name of the pacient and therapist.";

  }

  ngOnInit() {


    if (environment.production) { 
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.token = currentUser && currentUser.token;
      this.medical_center_id = currentUser && currentUser.entity._id;    
      this.medical_center_name = currentUser && currentUser.username; 


    } else {  
      this.token = environment.token;   
      this.medical_center_id = environment.medical_center_id;    
      this.medical_center_name = environment.medical_center_name;  
    }


  	this.form = this.fb.group({
      patient_id:               new FormControl('', Validators.required),
      patient_full_name:        new FormControl('', Validators.required),
      medical_center_id:        new FormControl(this.medical_center_id, Validators.required),
      medical_center_name:      new FormControl(this.medical_center_name, Validators.required),
      therapist_id:             new FormControl('', Validators.required),
      therapist_full_name:      new FormControl('', Validators.required),
      patient_descriptions:     '',
      date_requested:           new FormControl('', Validators.required),
      is_done :                 false,
      status : [{
        name: 'appointment_created',
        created_at: moment().format()
      }],

      accesories: this.fb.group({
        is_assited_walk:        '',
        is_treadmills:          '',
        is_walker:              '',
        is_orthoses:            '',
        is_parallel_bars:       ''
      }),
      accesories_descriptions: this.fb.group({
        assited_walk:           '',
        treadmills:             '',
        walker:                 '',
        orthoses:               '',
        parallel_bars:          ''
      })
    });	

    this.form.valueChanges
      .map((formValues) => {
        // formValues.names = formValues.names.toUpperCase();

        this.is_assited_walk = formValues.accesories.is_assited_walk;
        this.is_treadmills = formValues.accesories.is_treadmills;
        this.is_walker = formValues.accesories.is_walker;
        this.is_orthoses = formValues.accesories.is_orthoses;
        this.is_parallel_bars = formValues.accesories.is_parallel_bars;

        
        this.updateGaitAnalysisIcons();

        return formValues;
      })
      // .filter((formValues) => this.form.valid)
      .subscribe((formValues) => {
        // console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
      });

    

  }

   getDatefromModel():string {
    return (this.model) ? this.model.year + "-" + this.model.month + "-" + this.model.day : "";
  }

  getDateforModel(model:any, birth:any){

    birth = moment(birth);
    return model = { year : +birth.format('YYYY') , month :  +birth.format('M'), day:  +birth.format('DD')};

  }

  onSubmit() {



    this._postJSON(environment.URL_WEB_SERVICE + '/kinematics_analysis/' , this.form.value, this.getHeaders())
      .subscribe(
        // json => console.log(json),
        error => console.log('Error: ', error),
        // () => console.log('Finished')
        () => this.onFinishedAdd.emit("appointment_created")
        // console.log("call emitter") 
      );
      
   

    this.activeModal.close();
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

    // let params = new URLSearchParams();
    // params.set("medical_center_id", this.medical_center_id);

    let options = new RequestOptions();
    options.headers = headers;
    // options.search = params;

    return options;
  }

  // this method is always listening to the selected  
  // therapist from child component 
  // updating the currentTherapist in this 
  // component 
  therapistSelected(therapist: any) {
    this.currentTherapist = therapist;
    this.form.controls['therapist_id'].setValue(therapist._id);
    this.form.controls['therapist_full_name'].setValue(therapist.names + " " + therapist.lastname);
  }

  // this method is always listening to the selected  
  // patient from child component 
  // updating the currentPatient in this 
  // component 
  patientSelected(patient: any) {
    this.currentPatient= patient;
    this.form.controls['patient_id'].setValue(patient._id);
    this.form.controls['patient_full_name'].setValue(patient.names + " " + patient.lastname);
  }

  onChange(change:any){
    this.form.controls['date_requested'].setValue(this.getDatefromModel());
  }

  initIconsSummary() {
    this.assited_walk_icon_path = this.imgPathDeactivated + 'icons8-Walker-Filled.png';
    this.treadmills_icon_path = this.imgPathDeactivated + 'icons8-Treadmill-Filled.png';
    this.walker_icon_path = this.imgPathDeactivated + 'icons8-Crutch-Filled.png';
    this.orthoses_icon_path = this.imgPathDeactivated + 'icons8-Armored-Boot.png';
    this.parallel_bars_icon_path = this.imgPathDeactivated + 'icons8-Equivalent.png';

    this.assited_walk_icon_title = 'Asisted walk: not used'; 
    this.treadmills_icon_title = 'Treadmills: not used'; 
    this.walker_icon_title = 'Walker: not used'; 
    this.orthoses_icon_title = 'Orthoses: not used'; 
    this.parallel_bars_icon_title = 'Parallel bars: not used'; 
  }
  updateGaitAnalysisIcons() {
    
    let tempImgPath : String;
    let tempPathTitle : String;

    if(!this.is_assited_walk) {
      tempImgPath = this.imgPathDeactivated; 
      tempPathTitle = 'Asisted walk: not used';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Asisted walk: used';
    }
    this.assited_walk_icon_path = tempImgPath + 'icons8-Walker-Filled.png';
    this.assited_walk_icon_title = tempPathTitle;


    if(!this.is_treadmills) {
      tempImgPath = this.imgPathDeactivated;
      tempPathTitle = 'Treadmills: not used';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Treadmills: used';
    }
    this.treadmills_icon_path = tempImgPath + 'icons8-Treadmill-Filled.png';
    this.treadmills_icon_title = tempPathTitle;


    if(!this.is_walker) {
      tempImgPath = this.imgPathDeactivated;
      tempPathTitle = 'Walker: not used';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Walker: used';
    }
    this.walker_icon_path = tempImgPath + 'icons8-Crutch-Filled.png';
    this.walker_icon_title = tempPathTitle;


    if(!this.is_orthoses) {
      tempImgPath = this.imgPathDeactivated;
      tempPathTitle = 'Orthoses: not used';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Orthoses: used';
    }
    this.orthoses_icon_path = tempImgPath + 'icons8-Armored-Boot.png';
    this.orthoses_icon_title = tempPathTitle;


    if(!this.is_parallel_bars) {
      tempImgPath = this.imgPathDeactivated;
      tempPathTitle = 'Parallel bars: not used';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Parallel: bars used';
    }
    this.parallel_bars_icon_path = tempImgPath + 'icons8-Equivalent.png';
    this.parallel_bars_icon_title = tempPathTitle;

    console.log("parallel_bars_icon_path",this.parallel_bars_icon_path);
    console.log("this.treadmills_icon_title",this.treadmills_icon_title);

  }

}
