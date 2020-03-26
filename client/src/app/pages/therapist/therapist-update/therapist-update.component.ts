import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  selector: 'app-therapist-update',
  templateUrl: './therapist-update.component.html',
  styleUrls: ['./therapist-update.component.css']
})
export class TherapistUpdateComponent implements OnInit {

  @Input() therapist;
  @Output() onFinishedUpdate = new EventEmitter<any>();

  public form: FormGroup;
  public updatedTherapist;
  public token;
  
  model;

  constructor( public activeModal : NgbActiveModal,
      			   private fb : FormBuilder,
      			   public http : Http ) {

  	this.form = this.fb.group({});
  }

  ngOnInit() {

  	if (environment.production) { 

      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.token = currentUser && currentUser.token;

    } else {
      this.token = environment.token;      
    }
  	
    this.model = this.getDateforModel(this.model,this.therapist.birth);

  	this.form = this.fb.group({
      names:              this.therapist.names,
      lastname:           this.therapist.lastname,
      num_ctmp:           this.therapist.num_ctmp,
      num_ndta:           this.therapist.num_ndta,
      email:              this.therapist.email,
      id_Document_num:    this.therapist.id_Document_num,
      cellphone:          this.therapist.cellphone,
      phone:              this.therapist.phone,
      birth:              '',
      address:            this.fb.group({
        street:             this.therapist.address.street,
        city:               this.therapist.address.city,
        state:              this.therapist.address.state,
        zip:                this.therapist.address.zip,
        country:            this.therapist.address.country   
      }),
      medicalCenters:     this.fb.group({
        _id:                this.therapist.medical_center_id,
        name:               this.therapist.medical_center_name,
        status_request:     this.therapist.medicalCenters.status_request 
      })
    });	


    this.form.valueChanges
      .map((formValues) => {
//        formValues.names = formValues.names.toUpperCase();
        formValues.birth = this.getDatefromModel();
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


    this._putJSON(environment.URL_WEB_SERVICE_THERAPISTS + this.therapist._id, this.form.value, this.getHeaders())
      .subscribe(
        json => this.updatedTherapist = json,
        error => console.log('Error: ', error),
        () => this.onFinishedUpdate.emit("You can send the update list retrieved from db to avoid hittig the db for second time.")
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


}
