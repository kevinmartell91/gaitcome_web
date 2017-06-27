import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');


@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  URL_WEB_SERVICE_THERAPISTS:string = 'http://localhost:8080/api/patients/';

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
               public activeModal: NgbActiveModal) { }


  ngOnInit() {

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
