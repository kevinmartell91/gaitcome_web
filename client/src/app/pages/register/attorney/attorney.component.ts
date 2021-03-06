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
  selector: 'app-attorney',
  templateUrl: './attorney.component.html',
  styleUrls: ['./attorney.component.css']
})
export class AttorneyComponent implements OnInit {

  public disableForm = false;
  public form: FormGroup;
  public names = new FormControl('', Validators.required);
  public lastName = new FormControl('', Validators.required);
  public email = new FormControl('', emailValidator);
  public id_Document_num = new FormControl('', Validators.required);

  constructor( private fb: FormBuilder) {
  }

  public ngOnInit() {

    this.form = this.fb.group({
      'names':              this.names,
      'lastName':           this.lastName,
      'email':              this.email,
      'id_Document_num':    this.id_Document_num,
    });
    
//     this.form.valueChanges
//       .map((formValues) => {
// //        formValues.names = formValues.names.toUpperCase();
//         return formValues;
//       })
//       // .filter((formValues) => this.form.valid)
//       .subscribe((formValues) => {
//         console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
//       });
  }

  public onSubmit() {
    console.log(this.form);
  }


}