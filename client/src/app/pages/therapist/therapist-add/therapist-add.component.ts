import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { NgbActiveModal, NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';

import * as moment from 'moment';



const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');

@Component({
  selector: 'add-therapist',
  templateUrl: './therapist-add.component.html',
  styleUrls: ['./therapist-add.component.css']
})
export class TherapistAddComponent implements OnInit {

  @Input() medical_center_id: string;
  @Input() medical_center_name: string;
  @Output() onFinishedAdd = new EventEmitter<any>();

  public disableForm = false;
  public form: FormGroup;
  public names = new FormControl('', Validators.required);
  public lastname = new FormControl('', Validators.required);
  public num_ctmp = new FormControl('');
  public num_ndta = new FormControl('');
  public email = new FormControl('', emailValidator);
  public id_Document_num = new FormControl('', Validators.required);
  public cellphone = new FormControl('', Validators.required);
  public phone = new FormControl('', Validators.required);
  token: string;
  newTherapist: any;

  model;

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

   public ngOnInit() {

    if (environment.production) { 

      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.token = currentUser && currentUser.token;

    } else {
      this.token = environment.token;      
    }

    // test nested formGroup
    this.form = this.fb.group({
      names:              this.names,
      lastname:           this.lastname,
      num_ctmp:           this.num_ctmp,
      num_ndta:           this.num_ndta,
      email:              this.email,
      id_Document_num:    this.id_Document_num,
      cellphone:          this.cellphone,
      phone:              this.phone,
      birth:              '',
      address:            this.fb.group({
        street:             '',
        city:               '',
        state:              '',
        zip:                '',
        country:            ''   
      }),
      medicalCenters:     this.fb.group({
        _id:                this.medical_center_id,
        name:               this.medical_center_name,
        status_request:     "pending" // pending(0 day to more), accepted 
      })
    });
    
    this.form.valueChanges
      .map((formValues) => {
        // formValues.names = formValues.names.toUpperCase();
        formValues.birth = this.getDateFromMomentJS();
        return formValues;
      })
      // .filter((formValues) => this.form.valid)
      .subscribe((formValues) => {
        console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
      });

  }

  getDateFromMomentJS():string {
   
    return (this.model) ? moment(this.model.year + "-" + this.model.month + "-" + this.model.day).format() : "";

  }

  onSubmit() {
    let jsonAdd = this.form.value;

    // jsonAdd.birth =  new Date(this.model.year,this.model.month,this.model.day);

    console.log(jsonAdd);

    this._postJSON(environment.URL_WEB_SERVICE_THERAPISTS, this.form.value, this.getHeaders())
      .subscribe(
        json => this.newTherapist = json,
        error => console.log('Error', error),
        () => this.onFinishedAdd.emit('Send a msg or obj')
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

  testPrintCapturedValue() {

    console.log(this.form.value);
  }
  
}
