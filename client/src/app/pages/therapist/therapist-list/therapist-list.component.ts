import { Component, OnInit, Input, Output, 
         EventEmitter} from '@angular/core';
import { HttpModule, Http, Response, Headers, 
         RequestOptions, URLSearchParams} from '@angular/http';
import { NgbModal ,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

import { TherapistReadComponent} from '../therapist-read/therapist-read.component'
import { TherapistUpdateComponent} from '../therapist-update/therapist-update.component'
import { TherapistDeleteComponent} from '../therapist-delete/therapist-delete.component'
import { TherapistAddComponent } from '../therapist-add/therapist-add.component'

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

    if (environment.production) { 

      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.token = currentUser && currentUser.token;
      this.getTherapist();
      
    } else {

      this.token = environment.token;      
      var json = environment.therapistList;
      for (var i = 0; i < json.length; i++) {
        this.t = json[i] ;
        this.therapists.push(this.t);
      }          
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
    this._getJSON(environment.URL_WEB_SERVICE_THERAPISTS, this.getHeaders())
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



