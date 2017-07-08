import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');


@Component({
  selector: 'add-therapist',
  templateUrl: './therapist-add.component.html',
  styleUrls: ['./therapist-add.component.css']
})
export class TherapistAddComponent implements OnInit {

  URL_WEB_SERVICE_THERAPISTS:string = 'http://localhost:8080/api/therapists/';

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
  @Input() name;
  token: string;
  newTherapist: any;


  constructor( private fb: FormBuilder, 
               public http : Http,
               public activeModal: NgbActiveModal) { 
    // this.complexForm = fb.group ({
    // 	 // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
    //   'firstName' : [null, Validators.required],
    //   // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
    //   'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    //   'gender' : [null, Validators.required],
    //   'hiking' : false,
    //   'running' :false,
    //   'swimming' :false
    // })

  }

   public ngOnInit() {

     let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        // this.token = currentUser && currentUser.token;
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Il9fdiI6ImluaXQiLCJuYW1lIjoiaW5pdCIsInR5cGUiOiJpbml0IiwicXVhbnRpdHkiOiJpbml0IiwidXNlcklkIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwibmFtZSI6dHJ1ZSwidHlwZSI6dHJ1ZSwicXVhbnRpdHkiOnRydWUsInVzZXJJZCI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsIm5hbWUiOiJhZG1pbiIsInR5cGUiOiJwaGQrKyIsInF1YW50aXR5IjoxNjAsInVzZXJJZCI6IndlbmR5c3BhcnRhIiwicGFzc3dvcmQiOiJhZG1pbiIsIl9pZCI6IjU4NTA4OTljM2U0NGJjMGMzOTc0MjM0MCJ9LCJfcHJlcyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbbnVsbCxudWxsXSwiJF9fb3JpZ2luYWxfdmFsaWRhdGUiOltudWxsXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbbnVsbF19LCJfcG9zdHMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W10sIiRfX29yaWdpbmFsX3ZhbGlkYXRlIjpbXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbXX0sImlhdCI6MTQ4MTY3OTkyMX0.ZsSLSYUod916Gmtc6J5HjaCbF4-24cFKQ_qnc4cXDMQ';


    this.form = this.fb.group({
      'names':              this.names,
      'lastName':           this.lastName,
      'num_ctmp':           this.num_ctmp,
      'num_ndta':           this.num_ndta,
      'email':              this.email,
      'id_Document_num':    this.id_Document_num,
      'cellphone':          this.cellphone,
      'phone':              this.phone
    });
    
    this.form.valueChanges
      .map((formValues) => {
        formValues.names = formValues.names.toUpperCase();
        return formValues;
      })
      // .filter((formValues) => this.form.valid)
      .subscribe((formValues) => {
        console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
      });
  }

  onSubmit() {
    this._postJSON(this.URL_WEB_SERVICE_THERAPISTS, this.form.value, this.getHeaders())
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
