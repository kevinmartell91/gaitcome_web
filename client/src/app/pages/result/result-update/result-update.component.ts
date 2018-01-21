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
  selector: 'app-result-update',
  templateUrl: './result-update.component.html',
  styleUrls: ['./result-update.component.css']
})
export class ResultUpdateComponent implements OnInit {

  @Input() kinematicsAnalysis;
  
  public form: FormGroup;
  public formComboBox: FormGroup;
  public token;
  @Output() currentTherapist: any;
  @Output() currentPatient: any;
  model;

  medical_center_id: string;
  medical_center_name: string;

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

  @Output() onFinishedUpdate = new EventEmitter<any>();


  constructor( public activeModal: NgbActiveModal,
               private fb : FormBuilder,
      		     public http : Http) { 
  	// this.is_parallel_bars= false;
  	this.form = this.fb.group({});
    // this.formComboBox
    this.imgPathActivated = "../../../../assets/img/activated_icons/";
    this.imgPathDeactivated = "../../../../assets/img/deactivated_icons/";
    this.initIconsSummary();

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
      patient_id:               new FormControl(this.kinematicsAnalysis.patient_id, Validators.required),
      patient_full_name:        new FormControl(this.kinematicsAnalysis.patient_full_name, Validators.required),
      medical_center_id:        new FormControl(this.kinematicsAnalysis.medical_center_id, Validators.required),
      medical_center_name:      new FormControl(this.medical_center_name, Validators.required),
      therapist_id:             new FormControl(this.kinematicsAnalysis.therapist_id, Validators.required),
      therapist_full_name:      new FormControl(this.kinematicsAnalysis.therapist_full_name, Validators.required),
      patient_descriptions:     this.kinematicsAnalysis.patient_descriptions,
      date_requested:           new FormControl(this.kinematicsAnalysis.date_requested, Validators.required),
      is_done :                 this.kinematicsAnalysis.is_done,

      status : this.fb.group({
          name: 'appointment_updated',
          created_at: moment().format()
      }),
      accesories:              this.fb.group({
        is_assited_walk:        this.kinematicsAnalysis.accesories.is_assited_walk,
        is_treadmills:          this.kinematicsAnalysis.accesories.is_treadmills,
        is_walker:              this.kinematicsAnalysis.accesories.is_walker,
        is_orthoses:            this.kinematicsAnalysis.accesories.is_orthoses,
        is_parallel_bars:       this.kinematicsAnalysis.accesories.is_parallel_bars
      }),
      accesories_descriptions: this.fb.group({
        assited_walk:           this.kinematicsAnalysis.accesories_descriptions.assited_walk,
        treadmills:             this.kinematicsAnalysis.accesories_descriptions.treadmills,
        walker:                 this.kinematicsAnalysis.accesories_descriptions.walker,
        orthoses:               this.kinematicsAnalysis.accesories_descriptions.orthoses,
        parallel_bars:          this.kinematicsAnalysis.accesories_descriptions.parallel_bars
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

        if(formValues.is_done){
          formValues.status.name ='appointment_performed';
          formValues.status.created_at =moment().format();
        } else {
          formValues.status.name ='appointment_updated';
          formValues.status.created_at =moment().format();
        }

        return formValues;
      })
      // .filter((formValues) => this.form.valid)
      .subscribe((formValues) => {
        console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
      });

    this.currentTherapist= {_id: this.kinematicsAnalysis.therapist_id};
    this.currentPatient= {_id: this.kinematicsAnalysis.patient_id};
    this.is_assited_walk = this.kinematicsAnalysis.accesories.is_assited_walk;
    this.is_treadmills = this.kinematicsAnalysis.accesories.is_treadmills;
    this.is_walker = this.kinematicsAnalysis.accesories.is_walker;
    this.is_orthoses = this.kinematicsAnalysis.accesories.is_orthoses;
    this.is_parallel_bars = this.kinematicsAnalysis.accesories.is_parallel_bars;
    this.updateGaitAnalysisIcons();

    this.model = this.getDateforModel(this.model,this.kinematicsAnalysis.date_requested);
    console.log('medical_center_name',this.form.value.medical_center_name);
  }

   getDatefromModel():string {
    return (this.model) ? this.model.year + "-" + this.model.month + "-" + this.model.day : "";
  }

  getDateforModel(model:any, birth:any){

    birth = moment(birth);
    return model = { year : +birth.format('YYYY') , month :  +birth.format('M'), day:  +birth.format('DD')};

  }

  onSubmit() {

    this._putJSON(environment.URL_WEB_SERVICE + '/kinematics_analysis/' + this.kinematicsAnalysis._id , this.form.value, this.getHeaders())
      .subscribe(
        json => console.log(json),
        error => console.log('Error: ', error),
        // () => console.log('Finished')
        () => this.onFinishedUpdate.emit("You can send the update list retrieved from db to avoid hittig the db for second time.")
        // console.log("call emitter") 
      );
      
    this.activeModal.close();
  }

  _putJSON(url: string, body:any, option: RequestOptions): Observable<any> {
    return this.http.put(url,body, option)
      .map((res: Response) => res.json())
  }


  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.token);

    let params = new URLSearchParams();
    params.set("medical_center_id", this.medical_center_id);

    let options = new RequestOptions();
    options.headers = headers;
    options.search = params;

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
    // console.log("patientSelected notified" , patient )  
    this.currentPatient= patient;
    
    this.form.controls['patient_id'].setValue(patient._id);
    this.form.controls['patient_full_name'].setValue(patient.names + " " + patient.lastname);
    // console.log("this.form.patient_full_name",this.form.controls['patient_full_name']);
  }

  onChange(change:any){
    console.log("Change dtectedd");
    this.form.controls['date_requested'].setValue(this.getDatefromModel());
  }

  initIconsSummary() {
    this.assited_walk_icon_path = this.imgPathDeactivated + 'icons8-Walker-Filled.png';
    this.treadmills_icon_path = this.imgPathDeactivated + 'icons8-Treadmill-Filled.png';
    this.walker_icon_path = this.imgPathDeactivated + 'icons8-Crutch-Filled.png';
    this.orthoses_icon_path = this.imgPathDeactivated + 'icons8-Armored-Boot.png';
    this.parallel_bars_icon_path = this.imgPathDeactivated + 'icons8-Equivalent.png';

    this.assited_walk_icon_title = 'No andador'; 
    this.treadmills_icon_title = 'No caminadora'; 
    this.walker_icon_title = 'No muletas'; 
    this.orthoses_icon_title = 'No órtesis'; 
    this.parallel_bars_icon_title = 'No barras paralelas'; 
  }
  updateGaitAnalysisIcons() {
    
    let tempImgPath : String;
    let tempPathTitle : String;

    if(!this.is_assited_walk) {
      tempImgPath = this.imgPathDeactivated; 
      tempPathTitle = 'No andador';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Si andador';
    }
    this.assited_walk_icon_path = tempImgPath + 'icons8-Walker-Filled.png';
    this.assited_walk_icon_title = tempPathTitle;


    if(!this.is_treadmills) {
      tempImgPath = this.imgPathDeactivated;
      tempPathTitle = 'No caminadora';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Si caminadora';
    }
    this.treadmills_icon_path = tempImgPath + 'icons8-Treadmill-Filled.png';
    this.treadmills_icon_title = tempPathTitle;


    if(!this.is_walker) {
      tempImgPath = this.imgPathDeactivated;
      tempPathTitle = 'No muletas';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Si muleatas';
    }
    this.walker_icon_path = tempImgPath + 'icons8-Crutch-Filled.png';
    this.walker_icon_title = tempPathTitle;


    if(!this.is_orthoses) {
      tempImgPath = this.imgPathDeactivated;
      tempPathTitle = 'No órtesis';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Si órtesis';
    }
    this.orthoses_icon_path = tempImgPath + 'icons8-Armored-Boot.png';
    this.orthoses_icon_title = tempPathTitle;


    if(!this.is_parallel_bars) {
      tempImgPath = this.imgPathDeactivated;
      tempPathTitle = 'No barras paralelas';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Si barras paralelas';
    }
    this.parallel_bars_icon_path = tempImgPath + 'icons8-Equivalent.png';
    this.parallel_bars_icon_title = tempPathTitle;

    console.log("parallel_bars_icon_path",this.parallel_bars_icon_path);
    console.log("this.treadmills_icon_title",this.treadmills_icon_title);

  }

  clearFields() {
    this.form.reset();
    this.currentPatient = {_id: ''};
    this.currentTherapist = {_id: ''};
    this.form.controls['patient_full_name'].setValue('Seleccione un paciente, un terapueta y la fecha del análisis.');
    this.form.controls['date_requested'].setValue('');
    this.model = 'yyyy-mm-dd';

    console.log(this.form.value);
  }

}
