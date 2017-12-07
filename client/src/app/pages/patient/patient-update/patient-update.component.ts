import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

import * as moment from 'moment';

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {


  @Input() patient:any;
  @Output() onFinishedUpdate = new EventEmitter<any>();

  token: string;
  updatedPatient: any;


  public disableForm = false;
  public form: FormGroup;
  public names;
  public lastname;
  public id_Document_num;
  public birth;

  public address_street;
  public address_city;
  public address_state;
  public address_zip;
  public address_country;

  public medic_diagostic_name;
  public medic_diagostic_level;
  public medic_diagostic_percentage;

  public attorney_names;
  public attorney_lastName;
  public attorney_relationship;
  public attorney_email;
  public attorney_cellphone;
  public attorney_phone;

  model;

  constructor( public activeModal: NgbActiveModal,
               private fb: FormBuilder, 
               public http : Http) { 
  	
    this.form = this.fb.group({  });

  }

  ngOnInit() {

    if (environment.production) { 

      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.token = currentUser && currentUser.token;

    } else {
      this.token = environment.token;      
    }
    
    this.model = this.getDateforModel(this.model,this.patient.birth);

    this.names = new FormControl(this.patient.names, Validators.required);
    this.lastname = new FormControl(this.patient.lastname, Validators.required);
    this.id_Document_num = new FormControl(this.patient.id_Document_num, Validators.required);
    this.birth = new FormControl(this.patient.birth);

    this.address_street = new FormControl(this.patient.address.street);
    this.address_city = new FormControl(this.patient.address.city);
    this.address_state = new FormControl(this.patient.address.state);
    this.address_zip = new FormControl(this.patient.address.zip);
    this.address_country = new FormControl(this.patient.address.country);

    this.medic_diagostic_name = new FormControl(this.patient.medic_diagostic[0].name, Validators.required);
    this.medic_diagostic_level = new FormControl(this.patient.medic_diagostic[0].level, Validators.required);
    this.medic_diagostic_percentage = new FormControl(this.patient.medic_diagostic[0].percentage, Validators.required);

    this.attorney_names = new FormControl(this.patient.attorney.names, Validators.required);
    this.attorney_lastName = new FormControl(this.patient.attorney.lastname, Validators.required);
    this.attorney_relationship = new FormControl(this.patient.attorney.relationship, Validators.required);
    this.attorney_email = new FormControl(this.patient.attorney.email, emailValidator);
    this.attorney_cellphone = new FormControl(this.patient.attorney.cellphone, Validators.required);
    this.attorney_phone = new FormControl(this.patient.attorney.phone);


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
    
    
    this.form.valueChanges
      .map((formValues) => {
        formValues.names = formValues.names.toUpperCase();
        formValues.birth = this.getDatefromModel();
        return formValues;
      })
      // .filter((formValues) => this.form.valid)
      .subscribe((formValues) => {
        console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
        // console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(this.form.value.medic_diagostic_name));
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

    console.log(this.updatedPatient);
    let jsonUpdatedPatient = {
      names: this.form.value.names,
      lastname: this.form.value.lastname,
      gender: "-",
      id_Document_type: "DNI",
      id_Document_num: +this.form.value.id_Document_num,
      birth:  new Date(this.form.value.birth),

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

      // Will be send by email TO THE ATTORNEY
      username: this.form.value.attorney_names.concat(this.form.value.attorney_lastName) ,
      password: "patient",

      //created_at: { type: Date, default: Date.now },
      updated_at: new Date(),
      is_active: true
    }

    console.log(JSON.stringify(jsonUpdatedPatient));

    this._putJSON(environment.URL_WEB_SERVICE_PATIENTS + this.patient._id, JSON.stringify(jsonUpdatedPatient), this.getHeaders())
      .subscribe(
        json => this.updatedPatient = json,
        error => console.log('Error: ', error),
        () => this.onFinishedUpdate.emit("You can send the update list retrieved from db , to avoid hittig the db for second time.")
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


    let options = new RequestOptions();
    options.headers = headers

    return options;
  }

  testPrintCapturedValue() {

    console.log(this.form.value);
  }
  
}