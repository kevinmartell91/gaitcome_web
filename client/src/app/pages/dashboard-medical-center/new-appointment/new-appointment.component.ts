import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  token: string;
  optionsHeader: RequestOptions;
  medical_center_id: string;
  type_request = 'appointments';



  constructor() { }

  ngOnInit() {

  	if (environment.production) { 

  	    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  	    this.token = currentUser && currentUser.token;
  	    this.medical_center_id = currentUser && currentUser.entity._id;

  	} else {
  	    this.token = environment.token;      
        this.medical_center_id = environment.medical_center_id;
  	}    
    this.optionsHeader = this.getHeaders();
  }

  getHeaders() {

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.token);

    let params = new URLSearchParams();
    params.set("medical_center_id", this.medical_center_id);
    params.set("type_request", this.type_request);

    let options = new RequestOptions();
    options.headers = headers;
    options.search = params;
    console.log("Parent - getHeaders()", options);

    return options;
  }

}
