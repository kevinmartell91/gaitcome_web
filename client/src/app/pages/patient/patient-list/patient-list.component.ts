import { Component, OnInit, Input, Output, 
		 EventEmitter} from '@angular/core';
import { HttpModule, Http, Response, Headers, 
		 RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css',
  			  '../../dashboard-medical-center/results/results.component.css']
})

export class PatientListComponent implements OnInit {

  
  
  constructor( private http: Http 
               ) { }

  listView:boolean = true;
  photoView:boolean = false;
  p: any;
  patients: any[] = [];
  currentPatient: any;
  @Input()  medical_center_id:string ;
  @Input() token: string;
  @Output() onSelect = new  EventEmitter<any>();

  URL_WEB_SERVICE_PATIENTS:string = 
  	'http://localhost:8080/api/pacients/';

  ngOnInit() {

    var json =
	[
	  {
	    "_id": "5851f5c773dc11072a0a1a90",
	    "is_active": false,
	    "password": "admin",
	    "username": "paciente",
	    "birth": "2016-11-20T04:19:13.000Z",
	    "id_Document_num": 12345678,
	    "id_Document_type": "DNI",
	    "gender": "4",
	    "names": "Hortencia",
	    "__v": 0,
	    "created_at": "2016-12-15T01:45:43.589Z",
	    "medic_diagostic": [
	      {
	        "name": "Luis Manuel",
	        "level": "III",
	        "percentage": "56",
	        "_id": "5851f5c773dc11072a0a1a91",
	        "created_at": "2016-12-15T01:45:43.590Z"
	      }
	    ],
	    "attorney": {
	      "names": "Hortencia",
	      "email": "manuel@gmail.com",
	      "phone": "234 54 13",
	      "cellphone": "999 999 999"
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
	    "_id": "591e7932204d862e178a4461",
	    "is_active": false,
	    "birth": "2012-11-20T04:19:13.000Z",
	    "id_Document_num": 12345678,
	    "id_Document_type": "DNI",
	    "gender": "3",
	    "names": "Camila",
	    "__v": 0,
	    "created_at": "2017-05-19T04:48:50.357Z",
	    "medic_diagostic": [
	      {
	        "name": "Luis Manuel",
	        "level": "III",
	        "percentage": "56",
	        "_id": "591e7932204d862e178a4462",
	        "created_at": "2017-05-19T04:48:50.366Z"
	      }
	    ],
	    "attorney": {
	      "names": "Camila",
	      "email": "camilal@gmail.com",
	      "phone": "234 54 13",
	      "cellphone": "999 999 999"
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
      this.p = json[i] ;
      this.patients.push(this.p);
    }          

  }

  // EventEmitter -> expose to parent component
  select(patietnt: any) {
  	this.currentPatient  = patietnt;
    this.onSelect.emit(patietnt);
  }
  // Service methods
  getTherapist() {
    this._getJSON(this.URL_WEB_SERVICE_PATIENTS, 
    			  this.getHeaders())
      .subscribe(json => this.patients = json)
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

}
