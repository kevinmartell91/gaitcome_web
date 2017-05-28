import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Request, RequestMethod } from '@angular/http';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');


@Component({
  selector: 'add-therapist',
  templateUrl: './therapist-add.component.html',
  styleUrls: ['./therapist-add.component.css']
})
export class TherapistAddComponent implements OnInit {

  public disableForm = false;
  public form: FormGroup;
  public names = new FormControl('', Validators.required);
  public lastName = new FormControl('', Validators.required);
  public num_ctmp = new FormControl('');
  public num_ndta = new FormControl('');
  public email = new FormControl('', emailValidator);
  public id_Document_num = new FormControl('', Validators.required);
   @Input() name;

  constructor( private fb: FormBuilder, 
               public http : Http,
               public activeModal: NgbActiveModal) { 
    // this.complexForm = fb.group ({
    // 	 // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
    //   'firstName' : [null, Validators.required],
    //   // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
    //   'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    //   'gender' : [null, Validators.required],
    //   'hiking' : false,
    //   'running' :false,
    //   'swimming' :false
    // })

  }

   public ngOnInit() {

    this.form = this.fb.group({
      'names':              this.names,
      'lastName':           this.lastName,
      'num_ctmp':           this.num_ctmp,
      'num_ndta':           this.num_ndta,
      'email':              this.email,
      'id_Document_num':    this.id_Document_num,
    });
    
    this.form.valueChanges
      .map((formValues) => {
        formValues.names = formValues.names.toUpperCase();
        return formValues;
      })
      // .filter((formValues) => this.form.valid)
      .subscribe((formValues) => {
        console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
      });
  }

}
