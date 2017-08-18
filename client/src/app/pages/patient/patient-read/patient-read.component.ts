import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-read',
  templateUrl: './patient-read.component.html',
  styleUrls: ['./patient-read.component.css']
})
export class PatientReadComponent implements OnInit {

  @Input() patient;

  public form: FormGroup;
  public names;
  public lastName;
  public id_Document_num;
  public birth;

  public address_street;
  public address_city;
  public address_state;
  public address_zip;
  public address_country;

  public medic_diagostic_name;
  public medic_diagostic_level;
  public medic_diagostic_percentage;

  public attorney_names;
  public attorney_lastName;
  public attorney_relationship;
  public attorney_email;
  public attorney_cellphone;
  public attorney_phone;
  
  constructor(public activeModal: NgbActiveModal,
  			  private fb: FormBuilder) { 


  		   this.form = this.fb.group({  });

  }

  ngOnInit() {

  		console.log(" yeeeee ",this.patient);

	   this.names = new FormControl(this.patient.names);
	   this.lastName = new FormControl(this.patient.lastname);
	   this.id_Document_num = new FormControl(this.patient.id_Document_num);
	   this.birth = new FormControl(this.patient.birth);

	   this.address_street = new FormControl(this.patient.address.street);
	   this.address_city = new FormControl(this.patient.address.city);
	   this.address_state = new FormControl(this.patient.address.state);
	   this.address_zip = new FormControl(this.patient.address.zip);
	   this.address_country = new FormControl(this.patient.address.country);

	   this.medic_diagostic_name = new FormControl(this.patient.medic_diagostic[0].name);
	   this.medic_diagostic_level = new FormControl(this.patient.medic_diagostic[0].level);
	   this.medic_diagostic_percentage = new FormControl(this.patient.medic_diagostic[0].percentage);

	   this.attorney_names = new FormControl(this.patient.attorney.names);
	   this.attorney_lastName = new FormControl(this.patient.attorney.lastname);
	   this.attorney_relationship = new FormControl(this.patient.attorney.relationship);
	   this.attorney_email = new FormControl(this.patient.attorney.email);
	   this.attorney_cellphone = new FormControl(this.patient.attorney.cellphone);
	   this.attorney_phone = new FormControl(this.patient.attorney.phone);


	   this.form = this.fb.group({
	      'names':                        this.names,
	      'lastName':                     this.lastName,
	      'id_Document_num':              this.id_Document_num,
	      'birth':                        this.birth,

	      'address_street':               this.address_street,
	      'address_city':                 this.address_city,
	      'address_state':                this.address_state,
	      'address_zip':                  this.address_zip,
	      'address_country':              this.address_country,

	      'medic_diagostic_name':         this.medic_diagostic_name,
	      'medic_diagostic_level':        this.medic_diagostic_level,
	      'medic_diagostic_percentage' :  this.medic_diagostic_percentage,

	      'attorney_names' :              this.attorney_names,
	      'attorney_lastName' :           this.attorney_lastName,         
	      'attorney_relationship':        this.attorney_relationship,
	      'attorney_email':               this.attorney_email,
	      'attorney_cellphone':           this.attorney_cellphone,
	      'attorney_phone':               this.attorney_phone
	    });
	   this.form.disable();
  }

}
