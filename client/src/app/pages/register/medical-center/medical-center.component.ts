import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');

@Component({
  selector: 'app-medical-center',
  templateUrl: './medical-center.component.html',
  styleUrls: ['./medical-center.component.css']
})
export class MedicalCenterComponent implements OnInit {

  public disableForm = false;
  public form: FormGroup;
  public name = new FormControl('', Validators.required);
  public tax_identification = new FormControl('', Validators.required);
  public email = new FormControl('', emailValidator);
  public email2 = new FormControl('', emailValidator);
 

  constructor( private fb: FormBuilder) {
  }

  public ngOnInit() {
    this.form = this.fb.group({
      'name':  this.name,
      'tax_identification':   this.tax_identification,
      'email':      this.email,
      'email2':     this.email2
    });
    this.form.valueChanges
      .map((formValues) => {
//        formValues.name = formValues.name.toUpperCase();
        return formValues;
      })
      // .filter((formValues) => this.form.valid)
      .subscribe((formValues) => {
        console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
      });

    // testform radio buttons inside groups
    // this.testForm = new FormGroup({
    //   group1: new FormGroup({
    //     type: new FormControl('')
    //   }),
    //   group2: new FormGroup({
    //     type: new FormControl('')
    //   })
    // });
  }

  public onSubmit() {
    console.log(this.form);
  }

  // public onDisableForm(formDisabled: boolean) {
  //   if ( formDisabled ) {
  //     this.form.disable();
  //   } else {
  //     this.form.enable();
  //   }
  // }

}
