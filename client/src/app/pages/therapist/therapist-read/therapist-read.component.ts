import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import * as momentz from 'moment-timezone';

@Component({
  selector: 'app-therapist-read',
  templateUrl: './therapist-read.component.html',
  styleUrls: ['./therapist-read.component.css']
})
export class TherapistReadComponent implements OnInit {

  @Input() therapist;
  public form: FormGroup;
  model;

  constructor( public activeModal: NgbActiveModal,
  			   private fb: FormBuilder ) {

  	this.form = this.fb.group({});
  }

  ngOnInit() {

    // console.log('this.therapist', this.therapist);
    console.log ('moment().format();', moment().format());    
    let a = moment('2016-01-01'); 
    console.log ('created from model', a.format());    

   

        let jun = momentz("2016-01-01T00:00:00-05:00");
        // var dec = moment("2014-12-01T12:00:00Z");

        console.log(jun.tz('America/Los_Angeles').format('ha z'));  
       

    this.form = this.fb.group({
      names:              this.therapist.names,
      lastname:           this.therapist.lastname,
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

    this.form.valueChanges
      .map((formValues) => {
//        formValues.names = formValues.names.toUpperCase();
        this.model = this.getDateforModel(this.model,this.therapist.birth);
        return formValues;
      })
      // .filter((formValues) => this.form.valid)
      .subscribe((formValues) => {
        console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
      });

   this.form.disable();

  }

  getDateforModel(model:any, birth:any){

    birth = moment(birth);
    return model = { year : +birth.format('YYYY') , month :  +birth.format('M'), day:  +birth.format('DD')};

  }

}
