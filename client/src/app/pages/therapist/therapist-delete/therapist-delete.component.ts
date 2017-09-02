import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

const URL_WEB_SERVICE_THERAPIST:string = 'http://localhost:8080/api/therapist/';


@Component({
  selector: 'app-therapist-delete',
  templateUrl: './therapist-delete.component.html',
  styleUrls: ['./therapist-delete.component.css']
})
export class TherapistDeleteComponent implements OnInit {


  @Input() _id: string;
  @Input() names: string;
  @Input() lastnames: string;
  token: string;
  response: any;

  constructor(public activeModal: NgbActiveModal,
  			  public http : Http) { 

  	let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;
  }

  ngOnInit() {
  }

  deleteTherapist(){
  	this._deleteJSON( URL_WEB_SERVICE_THERAPIST + this._id, 
  					  this.getHeaders() )
      .subscribe(json => this.response = json);

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
