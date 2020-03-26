import { Component, OnInit, Input, Output, 
		     EventEmitter} from '@angular/core';
import { HttpModule, Http, Response, Headers, 
		     RequestOptions, URLSearchParams } from '@angular/http';
import { NgbModal, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { PatientReadComponent} from '../patient-read/patient-read.component'
import { PatientUpdateComponent} from '../patient-update/patient-update.component'
import { PatientDeleteComponent} from '../patient-delete/patient-delete.component'
import { PatientAddComponent } from '../patient-add/patient-add.component'

import { environment } from '../../../../environments/environment';
const  URL_WEB_SERVICE_PATIENTS:string = 	'http://localhost:8080/api/pacients/';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
          //'../../dashboard-medical-center/results/results.component.css']
})

export class PatientListComponent implements OnInit {

  
  @Input()  currentPatient ;
  
  @Input()  medical_center_id:string ;
  @Input()  medical_center_name:string ;
  @Input() allFields: boolean;
  // @Output() onSelectFromAllFields = new  EventEmitter<any>();
  @Output() onSelect = new  EventEmitter<any>();
  @Output() onSelectFromNotAllFields = new  EventEmitter<any>();

  token: string;
  listView:boolean = true;
  photoView:boolean = false;
  p: any;
  patients: any[] = [];
  // currentPatient: any;
  previousPatient: any;
  emptyPatient: any;

  isActiveUpdateModal: boolean = true;

  closeResult: string;
  
  constructor( private modalService: NgbModal,
               private http: Http 
               ) {
               this.emptyPatient = {_id:''}; 
               this.previousPatient = {_id:''};
               this.currentPatient = {_id:''};
  }

  ngOnInit() {

    if (environment.production){
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.token = currentUser && currentUser.token;
      this.getPatients(); 

    } else {
      
      this.token = environment.token;
      var json = environment.patientList; 
      // [{"_id":"5851f5c773dc11072a0a1a90","is_active":false,"password":"admin","username":"paciente","birth":"2016-11-20T04:19:13.000Z","id_Document_num":12345678,"id_Document_type":"DNI","gender":"4","names":"Hortencia","__v":0,"created_at":"2016-12-15T01:45:43.589Z","attorney":{"names":"Hortencia","email":"manuel@gmail.com","phone":"234 54 13","cellphone":"999 999 999"},"medic_diagostic":[{"name":"Luis Manuel","level":"III","percentage":"56","_id":"5851f5c773dc11072a0a1a91","created_at":"2016-12-15T01:45:43.590Z"}],"address":{"street":"Calle Alameda Santos 344 Dpto 304","city":"Lima","state":"Lima","zip":457645,"country":"Peru"}},{"_id":"591e7932204d862e178a4461","is_active":false,"birth":"2012-11-20T04:19:13.000Z","id_Document_num":12345678,"id_Document_type":"DNI","gender":"3","names":"Camila","__v":0,"created_at":"2017-05-19T04:48:50.357Z","attorney":{"names":"Camila","email":"camilal@gmail.com","phone":"234 54 13","cellphone":"999 999 999"},"medic_diagostic":[{"name":"Luis Manuel","level":"III","percentage":"56","_id":"591e7932204d862e178a4462","created_at":"2017-05-19T04:48:50.366Z"}],"address":{"street":"Calle Alameda Santos 344 Dpto 304","city":"Lima","state":"Lima","zip":457645,"country":"Peru"}},{"_id":"598a4bc134781634db1d5509","is_active":false,"birth":"2012-11-20T04:19:13.000Z","id_Document_num":12345678,"id_Document_type":"DNI","gender":"3","names":"Camila","__v":0,"created_at":"2017-08-08T23:39:45.293Z","attorney":{"names":"Camila","email":"camilal@gmail.com","phone":"234 54 13","cellphone":"999 999 999"},"medic_diagostic":[{"name":"Luis Manuel","level":"III","percentage":"56","_id":"598a4bc134781634db1d550a","created_at":"2017-08-08T23:39:45.298Z"}],"address":{"street":"Calle Alameda Santos 344 Dpto 304","city":"Lima","state":"Lima","zip":457645,"country":"Peru"}},{"_id":"598a4f7c3390ba34fb8018ed","is_active":true,"password":"patient","username":"aa","birth":"2017-08-08T23:55:40.945Z","id_Document_num":2,"id_Document_type":"DNI","gender":"-","lastname":"a","names":"A","__v":0,"created_at":"2017-08-08T23:55:40.956Z","attorney":{"names":"A","lastname":"a"},"medic_diagostic":[{"_id":"598a4f7c3390ba34fb8018ee","created_at":"2017-08-08T23:55:40.961Z"}]},{"_id":"598a507c3390ba34fb8018ef","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-08T23:59:56.823Z","attorney":{"names":"MANOLITO","lastname":"Martel"},"medic_diagostic":[{"_id":"598a507c3390ba34fb8018f0","created_at":"2017-08-08T23:59:56.827Z"}]},{"_id":"598a52773390ba34fb8018f1","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T00:08:23.990Z","attorney":{"names":"MANOLITO","lastname":"Martel"},"medic_diagostic":[{"_id":"598a52773390ba34fb8018f2","created_at":"2017-08-09T00:08:23.990Z"}]},{"_id":"598a54df27209e350ea0b785","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T00:18:39.133Z","attorney":{"names":"MANOLITO","lastname":"Martel"},"medic_diagostic":[{"_id":"598a54df27209e350ea0b786","created_at":"2017-08-09T00:18:39.139Z"}]},{"_id":"598a5a4a44192c3536269a2c","names":"MANOLITO","lastname":"Martel","gender":"-","id_Document_type":"DNI","id_Document_num":6533987,"birth":"2017-08-08T23:59:56.809Z","username":"Luis ManuelMartel Lindo","password":"patient","updated_at":"2017-08-08T23:59:56.809Z","is_active":true,"__v":0,"created_at":"2017-08-09T00:41:46.096Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"name":"PCI","level":"4","percentage":"40","_id":"598a5a4a44192c3536269a2d","created_at":"2017-08-09T00:41:46.099Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a5c8830de8a354b90ab6f","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T00:51:20.374Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a5c8830de8a354b90ab70","created_at":"2017-08-09T00:51:20.379Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a5cccb8ddb7354d005ffc","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T00:52:28.804Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a5cccb8ddb7354d005ffd","created_at":"2017-08-09T00:52:28.810Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a5ead409a82355b9c5e2e","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:00:29.030Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a5ead409a82355b9c5e2f","created_at":"2017-08-09T01:00:29.035Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a5ffb0b5a333562d6a49d","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:06:03.901Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a5ffb0b5a333562d6a49e","created_at":"2017-08-09T01:06:03.906Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a603bd14d893565388690","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:07:07.594Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a603bd14d893565388691","created_at":"2017-08-09T01:07:07.599Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a604ad14d893565388692","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:07:22.224Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a604ad14d893565388693","created_at":"2017-08-09T01:07:22.226Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a608f79f62c3569833c0a","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:08:31.908Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a608f79f62c3569833c0b","created_at":"2017-08-09T01:08:31.912Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a60cf1699b0356e8884f0","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:09:35.249Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a60cf1699b0356e8884f1","created_at":"2017-08-09T01:09:35.253Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a617ff67a2235748e3a3f","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:12:31.690Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a617ff67a2235748e3a40","created_at":"2017-08-09T01:12:31.695Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a63498dc4823585badf25","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:20:09.075Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a6380fae4ba3589c2a145","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:21:04.975Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a63ae56e9de358d0564c1","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:21:50.662Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a63ae56e9de358d0564c2","created_at":"2017-08-09T01:21:50.667Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a63b156e9de358d0564c3","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:21:53.514Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a63b156e9de358d0564c4","created_at":"2017-08-09T01:21:53.515Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a646c4b6e333597725bc3","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:25:00.658Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a646c4b6e333597725bc4","created_at":"2017-08-09T01:25:00.666Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a64fa20a338359a73987a","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:27:22.638Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a64fa20a338359a73987b","created_at":"2017-08-09T01:27:22.645Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a6550ac1a42359dd3692d","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:28:48.467Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a6550ac1a42359dd3692e","created_at":"2017-08-09T01:28:48.473Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a655c9632ec35a0488586","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:29:00.550Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a655c9632ec35a0488587","created_at":"2017-08-09T01:29:00.555Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a659c182cde35a791c36d","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:30:04.766Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"name":"PCI","level":"4","percentage":"40","_id":"598a659c182cde35a791c36e","created_at":"2017-08-09T01:30:04.771Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598d1dd91b946d3804d56c95","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2000-12-12T00:00:00.000Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-11T03:00:41.108Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"name":"PCI","level":"4","percentage":"40","_id":"598d1dd91b946d3804d56c96","created_at":"2017-08-11T03:00:41.113Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}}];    
      
      for (var i = 0; i < json.length; i++) {
        this.p = json[i] ;
        this.patients.push(this.p);
      } 
    }       
  }

  // EventEmitter -> expose to parent component
  selectFromNotAllFields(patient: any) {
    if (this.previousPatient._id === patient._id) {
      this.currentPatient = this.emptyPatient;
    } else {
      this.previousPatient =  patient;
      this.currentPatient  = patient;
    }
    this.onSelectFromNotAllFields.emit(this.currentPatient);
  }

  select(patient: any) {
    this.currentPatient =  patient;
    this.onSelect.emit(this.currentPatient);
  }

  // Service methods
  getPatients() {
    this._getJSON(environment.URL_WEB_SERVICE_PATIENTS, 
    			  this.getHeaders())
      .subscribe(json => this.patients = json)
  }
  // to move to a commun folder 
  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.token);

    let params = new URLSearchParams();
    // params.set("patient_id", this.patient_id);
    params.set("medical_center_id", this.medical_center_id);
    // params.set("therapist_id", this.therapist_id);

    let options = new RequestOptions();
    options.headers = headers
    options.search = params;

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

  askActiveUpdateModal(){
  	if(!this.isActiveUpdateModal)
  		this.isActiveUpdateModal =true;
  	else
  		this.isActiveUpdateModal =false;

  }

  showReadPatientComponent() {

    let options: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(PatientReadComponent, options);
    modalRef.componentInstance.patient = this.currentPatient; 
  }

  showUpdatePatientComponent() {

    let options: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(PatientUpdateComponent, options);
    modalRef.componentInstance.patient = this.currentPatient; 
    modalRef.componentInstance.onFinishedUpdate.subscribe(($e) => {
      this.getPatients();
    });


    // modalRef.result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    //   // this.getPatients();
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  showDeletePatientComponent() {

    const modalRef = this.modalService.open(PatientDeleteComponent);
    modalRef.componentInstance._id = this.currentPatient._id; 
    modalRef.componentInstance.names = this.currentPatient.names; 
    modalRef.componentInstance.lastname = this.currentPatient.lastname; 
    modalRef.componentInstance.onFinishedDelete.subscribe(($e) => {
      this.getPatients();
    });

    // modalRef.result.then((result) => {
    //   // this.closeResult = `Closed with: ${result}`;
    //   this.getPatients();
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  showAddPatientComponent() {

    let options: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(PatientAddComponent, options);
    modalRef.componentInstance.medical_center_id = this.medical_center_id;
    modalRef.componentInstance.medical_center_name = this.medical_center_name;
    modalRef.componentInstance.onFinishedAdd.subscribe(($e) => {
      this.getPatients();
    });

    // modalRef.result.then((result) => {
    //   // this.closeResult = `Closed with: ${result}`;
    //   this.getPatients();
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
