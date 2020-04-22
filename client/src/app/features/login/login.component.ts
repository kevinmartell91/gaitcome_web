import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup,
		 FormControl,
		 Validators,
		 FormBuilder } from '@angular/forms';
import { trigger,
		 state,
		 style,
		 animate,
		 transition } from '@angular/animations';
import { LoginUser } from './models/login-user.model';
import { AuthService } from './services/auth.service';

@Component({
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('0.1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('slideInOutDetails', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0, +300%, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],	
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor( private fb: FormBuilder,
  			   private auth: AuthService ) { }

  isOpen = true;
  menuState:string = 'in';
  dynamicColDetail:string= '';
  Roles: any = ['Paciente', 'Therapist', 'Centro médico'];


  loginForm = this.fb.group({
  	username: ['', Validators.required],
  	password: ['',Validators.required],
  	login_type: ['', Validators.required]
  })


  ngOnInit(): void {

  }
  
  toggle() {
    this.isOpen = !this.isOpen;
  }

  toggleDetails() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.dynamicColDetail= this.dynamicColDetail === '' ? 'col-md-1' : '';
  }

  private prepareAuthentication(): LoginUser {
  	return new LoginUser().deserialize(this.loginForm.value);
  }
  onSubmit() {
  	console.warn(this.prepareAuthentication());
    this.auth.postAuthentication(this.prepareAuthentication())
      .subscribe(
        res => {
          console.log(res);
        }
      );

  }

  

}

