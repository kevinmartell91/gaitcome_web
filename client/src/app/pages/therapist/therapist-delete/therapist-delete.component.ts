import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-therapist-delete',
  templateUrl: './therapist-delete.component.html',
  styleUrls: ['./therapist-delete.component.css']
})
export class TherapistDeleteComponent implements OnInit {


  @Input() _id: string;
  @Input() names: string;
  @Input() lastnames: string;
  @Output() onFinishedDelete = new EventEmitter<any>();
  
  token: string;
  response: any;

  constructor(public activeModal: NgbActiveModal,
  			  public http : Http) { 
    this.names='';
    this.lastnames='';      
  	
  }

  ngOnInit() {
    if (environment.production) { 

      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.token = currentUser && currentUser.token;

    } else {
      this.token = environment.token;      
    }
  }

  deleteTherapist(){
  	this._deleteJSON(environment.URL_WEB_SERVICE_THERAPISTS + this._id, 
  					         this.getHeaders() )
      .subscribe(
        json => this.response = json,
        error => console.log('Error', error),
        () => this.onFinishedDelete.emit('Send a msg or obj')
      );

	this.activeModal.close();

  }

  _deleteJSON(url: string, option: RequestOptions): Observable<any> {
    return this.http.delete(url,option)
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
