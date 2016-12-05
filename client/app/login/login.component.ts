import {
  Component,
  ViewChild,
  HostListener,
  OnInit,
  Inject,
  OpaqueToken
} from '@angular/core';
import {
  FormGroup, 
  Validators, 
  FormControl, 
  FormBuilder 
} from '@angular/forms';
import { LoginService } from './login.service';

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {


  public disableForm = false;
  public form: FormGroup;
  public username = new FormControl('',  Validators.required);
  public password = new FormControl('', Validators.required);

  public processingLogin = false;
  public statusMessage = '';

  constructor(
    private fb: FormBuilder
    // private loginService: LoginService
    ) {
    this.form = fb.group({
      'username':  this.username,
      'password':   this.password
    });
  }

  
  public onDisableForm(formDisabled: boolean) {
    if ( formDisabled ) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  

  public login() {
    this.processingLogin = true;
    this.statusMessage = 'checking your credentials ...';

    // let obs = this.loginService.login(this.username.value, this.password.value);
    // obs.subscribe( () => {

    //   this.processingLogin = false;
    //   this.statusMessage = 'you are logged in ...';

    //   setTimeout( () => {
    //     //this.dialog.hide();
    //   }, 500);

    // });
  }

}
