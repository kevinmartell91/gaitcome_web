import {
  Component,
  ViewChild,
  HostListener,
  Inject,
  OpaqueToken
} from '@angular/core';
import {
  FormGroup, 
  Validators, 
  FormControl, 
  FormBuilder 
} from '@angular/forms';


// import { LoginService } from './login.service';
// const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');
const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');


@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.html']
})

export class RegisterComponent {


  public disableForm = false;
  public form: FormGroup;
  public firstName = new FormControl('');
  public lastName = new FormControl('', Validators.required);
  public email = new FormControl('', emailValidator);
  public email2 = new FormControl('', emailValidator);
  public breakfast = new FormControl('Continental');

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      'firstName': this.firstName,
      'lastName': this.lastName,
      'email': this.email,
      'email2': this.email2,
      'breakfast': this.breakfast
    });
  }

  public onSubmit() {
    console.log(this.form);
  }

  public onDisableForm(formDisabled: boolean) {
    if ( formDisabled ) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

}
