import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-therapist-read',
  templateUrl: './therapist-read.component.html',
  styleUrls: ['./therapist-read.component.css']
})
export class TherapistReadComponent implements OnInit {

  @Input() therapist;
  public form: FormGroup;

  constructor( public activeModal: NgbActiveModal,
  			   private fb: FormBuilder ) {

  	this.form = this.fb.group({});
  }

  ngOnInit() {

  	this.form = this.fb.group({
      names:              this.therapist.names,
      lastName:           this.therapist.lastName,
      num_ctmp:           this.therapist.num_ctmp,
      num_ndta:           this.therapist.num_ndta,
      email:              this.therapist.email,
      id_Document_num:    this.therapist.id_Document_num,
      cellphone:          this.therapist.cellphone,
      phone:              this.therapist.phone,
      birth:              this.therapist.birth,
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

   this.form.disable();

  }

}
