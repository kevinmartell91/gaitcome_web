import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Router }      from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
  	'./register.component.css'
    // '../../theme/theme.component.css'
    ]
})

export class RegisterComponent  {

 public form: FormGroup;


}