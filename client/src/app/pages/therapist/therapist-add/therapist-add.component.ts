import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { NgbActiveModal, NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');
const URL_WEB_SERVICE_THERAPISTS:string = 'http://localhost:8080/api/therapists/';

@Component({
  selector: 'add-therapist',
  templateUrl: './therapist-add.component.html',
  styleUrls: ['./therapist-add.component.css']
})
export class TherapistAddComponent implements OnInit {

  @Input() medical_center_id: string;
  @Input() medical_center_name: string;

  public disableForm = false;
  public form: FormGroup;
  public names = new FormControl('', Validators.required);
  public lastName = new FormControl('', Validators.required);
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
    config.minDate = {year: 1970, month: 1, day: 1};
    config.maxDate = {year: 2000, month: 12, day: 31};

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';

    // weekends are disabled
    config.markDisabled = (date: NgbDateStruct) => {
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
    };

  }

   public ngOnInit() {

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        // this.token = currentUser && currentUser.token;
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Il9fdiI6ImluaXQiLCJuYW1lIjoiaW5pdCIsInR5cGUiOiJpbml0IiwicXVhbnRpdHkiOiJpbml0IiwidXNlcklkIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwibmFtZSI6dHJ1ZSwidHlwZSI6dHJ1ZSwicXVhbnRpdHkiOnRydWUsInVzZXJJZCI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsIm5hbWUiOiJhZG1pbiIsInR5cGUiOiJwaGQrKyIsInF1YW50aXR5IjoxNjAsInVzZXJJZCI6IndlbmR5c3BhcnRhIiwicGFzc3dvcmQiOiJhZG1pbiIsIl9pZCI6IjU4NTA4OTljM2U0NGJjMGMzOTc0MjM0MCJ9LCJfcHJlcyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbbnVsbCxudWxsXSwiJF9fb3JpZ2luYWxfdmFsaWRhdGUiOltudWxsXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbbnVsbF19LCJfcG9zdHMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W10sIiRfX29yaWdpbmFsX3ZhbGlkYXRlIjpbXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbXX0sImlhdCI6MTQ4MTY3OTkyMX0.ZsSLSYUod916Gmtc6J5HjaCbF4-24cFKQ_qnc4cXDMQ';

    // test nested formGroup
    this.form = this.fb.group({
      names:              this.names,
      lastName:           this.lastName,
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
        formValues.names = formValues.names.toUpperCase();
        formValues.birth = this.getYear();
        return formValues;
      })
      // .filter((formValues) => this.form.valid)
      .subscribe((formValues) => {
        console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
      });

  }

  getYear():string {
    return (this.model) ? this.model.year + "-" + this.model.month + "-" + this.model.day : "";
  }

  onSubmit() {
    this._postJSON(URL_WEB_SERVICE_THERAPISTS, this.form.value, this.getHeaders())
      .subscribe(json => this.newTherapist = json);

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
