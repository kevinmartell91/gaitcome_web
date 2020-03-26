import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { NgbActiveModal, NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

import * as moment from 'moment';
const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');


@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  @Input() name;
  @Input() medical_center_id;
  @Input() medical_center_name;
  @Output() onFinishedAdd = new  EventEmitter<any>();

  token: string;
  newPatient: any;
  model;

  public disableForm = false;
  public form: FormGroup;
  public names = new FormControl('', Validators.required);
  public lastname = new FormControl('', Validators.required);
  public id_Document_num = new FormControl('', Validators.required);
  public birth = new FormControl('');

  public address_street = new FormControl('');
  public address_city = new FormControl('');
  public address_state = new FormControl('');
  public address_zip = new FormControl('');
  public address_country = new FormControl('');

  public medic_diagostic_name = new FormControl('');
  public medic_diagostic_level = new FormControl('');
  public medic_diagostic_percentage = new FormControl('');

  public attorney_names = new FormControl('');
  public attorney_lastName = new FormControl('');
  public attorney_relationship = new FormControl('');
  public attorney_email = new FormControl('', emailValidator);
  public attorney_cellphone = new FormControl('', Validators.required);
  public attorney_phone = new FormControl('', Validators.required);


  constructor( public activeModal: NgbActiveModal,
               private fb: FormBuilder, 
               public http : Http,
               config: NgbDatepickerConfig) { 
    // customize default values of datepickers used by this component tree
    config.minDate = {year: 2000, month: 1, day: 1};
    config.maxDate = {year: 2017, month: 12, day: 31};

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';

    // weekends are disabled
    config.markDisabled = (date: NgbDateStruct) => {
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
    };
  }


  ngOnInit() {

    if (environment.production) { 

      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.token = currentUser && currentUser.token;

    } else {
      this.token = environment.token;  
    }
    
    this.form = this.fb.group({
      'names':                        this.names,
      'lastname':                     this.lastname,
      'id_Document_num':              this.id_Document_num,
      'birth':                        this.birth,

      'address_street':               this.address_street,
      'address_city':                 this.address_city,
      'address_state':                this.address_state,
      'address_zip':                  this.address_zip,
      'address_country':              this.address_country,

      'medic_diagostic_name':         this.medic_diagostic_name,
      'medic_diagostic_level':        this.medic_diagostic_level,
      'medic_diagostic_percentage' :  this.medic_diagostic_percentage,

      'attorney_names' :              this.attorney_names,
      'attorney_lastName' :           this.attorney_lastName,         
      'attorney_relationship':        this.attorney_relationship,
      'attorney_email':               this.attorney_email,
      'attorney_cellphone':           this.attorney_cellphone,
      'attorney_phone':               this.attorney_phone
    });
    
    // this.form.valueChanges
    //   .map((formValues) => {
    //     // formValues.names = formValues.names.toUpperCase();
    //     formValues.birth = this.getDateFromMomentJS();
    //     return formValues;
    //   })
    //   // .filter((formValues) => this.form.valid)
    //   .subscribe((formValues) => {
    //     console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
    //     // console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(this.form.value.medic_diagostic_name));
    //   });
  }

  getDateFromMomentJS():string {
   
    return (this.model) ? moment(this.model.year + "-" + this.model.month + "-" + this.model.day).format() : "";

  }
  
  onSubmit() {

    let jsonNewPatient = {
      names: this.form.value.names,
      lastname: this.form.value.lastname,
      gender: "-",
      id_Document_type: "DNI",
      id_Document_num: +this.form.value.id_Document_num,
      birth:  this.form.value.birth,

      address: {
        street: this.form.value.address_street,
        city: this.form.value.address_city,
        state: this.form.value.address_state,
        zip: +this.form.value.address_zip,
        country: this.form.value.address_country
      },

      medic_diagostic: [{
        name: this.form.value.medic_diagostic_name,
        level: this.form.value.medic_diagostic_level,
        percentage: this.form.value.medic_diagostic_percentage,
        //created_at: { type: Date, default: Date.now }
      }],

      attorney: {
        names: this.form.value.attorney_names,
        lastname: this.form.value.attorney_lastName,
        relationship : this.form.value.attorney_relationship,
        email: this.form.value.attorney_email,
        phone: this.form.value.attorney_phone,
        cellphone: this.form.value.attorney_cellphone
       },

      medicalCenters : {
       _id: this.medical_center_id,
       name: this.medical_center_name,
       status_request: 'pending' // pending(0 day to more), accepted 
      },

      // Will be send by email TO THE ATTORNEY
      username: this.form.value.attorney_names.concat(this.form.value.attorney_lastName),
      password: "patient",

      //created_at: { type: Date, default: Date.now },
      updated_at: moment().format(),
      is_active: true
    }

    this._postJSON(environment.URL_WEB_SERVICE_PATIENTS, jsonNewPatient, this.getHeaders())
      .subscribe(
        json => this.newPatient = json,
        error => console.log('Error',error),  
        () => this.onFinishedAdd.emit("send a msg or obj")
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

    let options = new RequestOptions();
    options.headers = headers

    return options;
  }
  
}
