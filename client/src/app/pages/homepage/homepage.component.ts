import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/observable';
import { environment } from '../../../environments/environment';
const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');


const now = new Date();

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  // templateUrl: './index6.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  send_form_message: String;

  newConctact: any;

  loginUrl : String;
  loginUrlnoParams : String;


  public disableForm = false;
  public form: FormGroup;
  public name = new FormControl('', Validators.required);
  public email = new FormControl('', emailValidator);
  public message = new FormControl('', Validators.required);
  public number = new FormControl('', Validators.required);
  

  constructor( private fb: FormBuilder, 
               public http : Http) { 

    this.send_form_message = '';
    this.loginUrlnoParams = environment.URL_WEB_SERVICE_LOGIN;

    if (environment.production) { 
      this.loginUrl = environment.URL_WEB_SERVICE_LOGIN + 
                    '?isDemo=true&username=demo&password=demo&login_type=medical_center';
    } else {
      this.loginUrl = environment.URL_WEB_SERVICE_LOGIN + 
                    '?isDemo=true&username=demo&password=demo&login_type=medical_center';
    }
  
  }

  ngOnInit() {

    this.form = this.fb.group({
      'name': this.name,
      'email': this.email,
      'message' : this.message,
      'number' : this.number
    });

    this.form.valueChanges
      .map((formValues) => {
        // formValues.names = formValues.names.toUpperCase();
        return formValues;
      })
      // .filter((formValues) => this.form.valid)
      .subscribe((formValues) => {
        console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
        // console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(this.form.value.medic_diagostic_name));
      });
    
  }
  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  onSubmit(){

    console.log('send_contact_form()');
    console.log(environment.URL_WEB_SERVICE_CONTACTS);
    console.log(this.form.value)

    this._postJSON(environment.URL_WEB_SERVICE_CONTACTS,
                   this.form.value,
                   this.getHeaders())
      .subscribe(
        json => this.newConctact = json,
        error => console.log('Error message',error),
        () => {this.form.reset() , this.send_form_message = 'Mensaje enviado' },
      );
  }

  _postJSON(url: string, body:any, option: RequestOptions): Observable<any> {
    return this.http.post(url,body, option)
      .map((res: Response) => res.json())
  }

  getHeaders() {

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions();
    options.headers = headers

    return options;

  }


}