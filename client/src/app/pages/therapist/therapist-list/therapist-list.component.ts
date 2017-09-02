import { Component, OnInit, Input, Output, 
         EventEmitter} from '@angular/core';
import { HttpModule, Http, Response, Headers, 
         RequestOptions, URLSearchParams} from '@angular/http';
import { NgbModal ,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { TherapistReadComponent} from '../therapist-read/therapist-read.component'
import { TherapistUpdateComponent} from '../therapist-update/therapist-update.component'
import { TherapistDeleteComponent} from '../therapist-delete/therapist-delete.component'
import { TherapistAddComponent } from '../therapist-add/therapist-add.component'

const URL_WEB_SERVICE_THERAPISTS:string = 'http://localhost:8080/api/therapists/';

@Component({
  selector: 'app-therapist-list',
  templateUrl: './therapist-list.component.html',
  styleUrls: ['./therapist-list.component.css',
              '../../dashboard-medical-center/results/results.component.css']
})
export class TherapistListComponent implements OnInit {
 
  @Input()  medical_center_id:string ;
  @Input()  medical_center_name:string ;
  @Input()  allFields: boolean;
  @Output() onSelect = new  EventEmitter<any>();

  token: string;
  listView:boolean = true;
  photoView:boolean = false;
  t: any;
  therapists: any[] = [];
  currentTherapist:any;
  showAddForm : boolean = false;


  constructor( private modalService: NgbModal,
               private http: Http 
               ) { 
  }

  ngOnInit() {

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;


    var json =
              [
                {
                  "_id": "5851f60173dc11072a0a1a92",
                  "password": "admin",
                  "username": "terapeuta",
                  "is_active": false,
                  "num_ndta": 54534543,
                  "num_ctmp": 6542,
                  "cellphone": "999 999 999",
                  "phone": "234 54 13",
                  "email": "manuel@gmail.com",
                  "birth": "2016-11-20T04:19:13.000Z",
                  "id_Document_num": 12345678,
                  "id_Document_type": "DNI",
                  "gender": "4",
                  "names": "Hortencia",
                  "__v": 0,
                  "medicalCenters": {
                    "_id": "345678904565848fr5gr",
                    "name": "Luis Manuel",
                    "status_request": "1",
                    "accepted_at": "2016-11-20T04:19:13.000Z",
                    "requested_at": "2017-05-31T02:20:03.858Z"
                  },
                  "address": {
                    "street": "Calle Alameda Santos 344 Dpto 304",
                    "city": "Lima",
                    "state": "Lima",
                    "zip": 457645,
                    "country": "Peru"
                  }
                },
                {
                  "_id": "58bba193a148e93637c2a840",
                  "password": "admin",
                  "username": "terapeuta",
                  "is_active": false,
                  "num_ndta": 54534543,
                  "num_ctmp": 6542,
                  "cellphone": "999 999 999",
                  "phone": "234 54 13",
                  "email": "manuel@gmail.com",
                  "birth": "2016-11-20T04:19:13.000Z",
                  "id_Document_num": 12345678,
                  "id_Document_type": "DNI",
                  "gender": "4",
                  "names": "roman",
                  "__v": 0,
                  "medicalCenters": {
                    "_id": "345678904565848fr5gr",
                    "name": "Luis Manuel",
                    "status_request": "1",
                    "accepted_at": "2016-11-20T04:19:13.000Z",
                    "requested_at": "2017-05-31T02:20:03.863Z"
                  },
                  "address": {
                    "street": "Calle Alameda Santos 344 Dpto 304",
                    "city": "Lima",
                    "state": "Lima",
                    "zip": 457645,
                    "country": "Peru"
                  }
                },
                {
                  "_id": "591e7447583a7b2b751d4ec2",
                  "password": "admin",
                  "username": "Pichirilo terapeuta",
                  "is_active": false,
                  "num_ndta": 54534543,
                  "num_ctmp": 6542,
                  "cellphone": "999 999 999",
                  "phone": "234 54 13",
                  "email": "pichirilo@gmail.com",
                  "birth": "2016-11-20T04:19:13.000Z",
                  "id_Document_num": 12345678,
                  "id_Document_type": "DNI",
                  "gender": "3",
                  "names": "Pichirilo",
                  "__v": 0,
                  "medicalCenters": {
                    "_id": "345678904565848fr5gr",
                    "name": "Luis Manuel",
                    "status_request": "1",
                    "accepted_at": "2016-11-20T04:19:13.000Z",
                    "requested_at": "2017-05-31T02:20:03.867Z"
                  },
                  "address": {
                    "street": "Calle Alameda Santos 344 Dpto 304",
                    "city": "Lima",
                    "state": "Lima",
                    "zip": 457645,
                    "country": "Peru"
                  }
                },
                {
                  "_id": "591f03510a88ba3158605314",
                  "password": "admin",
                  "username": "Pichirilo terapeuta",
                  "is_active": false,
                  "num_ndta": 54534543,
                  "num_ctmp": 6542,
                  "cellphone": "999 999 999",
                  "phone": "234 54 13",
                  "email": "vanessa@gmail.com",
                  "birth": "2016-11-20T04:19:13.000Z",
                  "id_Document_num": 12345678,
                  "id_Document_type": "DNI",
                  "gender": "3",
                  "names": "Vanessa",
                  "__v": 0,
                  "medicalCenters": {
                    "_id": "345678904565848fr5gr",
                    "name": "Manuel torres",
                    "status_request": "1",
                    "accepted_at": "2016-11-20T04:19:13.000Z",
                    "requested_at": "2017-05-31T02:20:03.868Z"
                  },
                  "address": {
                    "street": "Calle Alameda Santos 344 Dpto 304",
                    "city": "Lima",
                    "state": "Lima",
                    "zip": 457645,
                    "country": "Peru"
                  }
                }
              ]
    for (var i = 0; i < json.length; i++) {
      this.t = json[i] ;
      this.therapists.push(this.t);
    }          
   

   console.log(this.therapists);

  }

  // EventEmitter -> expose to parent component
  select(therapist: any) {
    this.currentTherapist = therapist;
    this.onSelect.emit(therapist);
  }
  // Service methods
  getTherapist() {
    this._getJSON(URL_WEB_SERVICE_THERAPISTS, this.getHeaders())
      .subscribe(json => this.therapists = json)
  }
  // to move to a commun folder 
  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.token);

    // let params = new URLSearchParams();
    // params.set("patient_id", this.patient_id);
    // params.set("medical_center_id", this.medical_center_id);
    // params.set("therapist_id", this.therapist_id);

    let options = new RequestOptions();
    options.headers = headers
    // options.search = params;

    return options;
  }
  // to move to a commun folder 
  _getJSON(url: string, option: RequestOptions): Observable<any> {
    return this.http.get(url,option)
      .map((res: Response) => res.json())
  }

  switchView(view:string) {
    if( view === 'list'){
      this.listView = true;
      this.photoView = false;
    }
    if( view === 'photo'){
      this.listView = false;
      this.photoView = true;
    }
  }

  showReadTherapistComponent() {

    let options: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(TherapistReadComponent, options);
    modalRef.componentInstance.therapist = this.currentTherapist; 
  }

  showUpdateTherapistComponent() {

    let options: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(TherapistUpdateComponent, options);
    modalRef.componentInstance.therapist = this.currentTherapist; 
    // getTherapist(); // update therapoist list
  }

  showDeleteTherapistComponent() {

    const modalRef = this.modalService.open(TherapistDeleteComponent);
    modalRef.componentInstance._id = this.currentTherapist._id; 
    modalRef.componentInstance.names = this.currentTherapist.names; 
    modalRef.componentInstance.lastname = this.currentTherapist.lastname; 
    //getTherapist(); // update therapoist list
  }

  showAddTherapistComponent() {

    console.log("showAddTherapistComponent");
    let options: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(TherapistAddComponent, options);
    modalRef.componentInstance.medical_center_id = this.medical_center_id;
    modalRef.componentInstance.medical_center_name = this.medical_center_name;
    // getTherapist(); // update therapoist list
  }

}



