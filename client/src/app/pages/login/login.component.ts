import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';



//let moduleID: string;

@Component({
  // moduleId: moduleID,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../../theme/theme.component.css'
  ]
})
export class LoginComponent implements OnInit{

  statusMessage: string;
  processingLogin : boolean;
  // model: any = {};
  // loading = false;
  // error = '';

favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  public user: User;
  /* standing data goes here*/
  public login_types = [
      { value: 'user', display: 'Usuario' },
      { value: 'pacient', display: 'Patient' },
      { value: 'therapist', display: 'Terapeuta' },
      { value: 'medical_center', display: 'Centro Medico'}
  ];
  public genders = [
      { value: 'F', display: 'Female' },
      { value: 'M', display: 'Male' }
  ];
  public roles = [
      { value: 'admin', display: 'Administrator' },
      { value: 'guest', display: 'Guest' },
      { value: 'custom', display: 'Custom' }
  ];
  public themes: Theme[] = [
      { backgroundColor: 'black', fontColor: 'white', display: 'Dark' },
      { backgroundColor: 'white', fontColor: 'black', display: 'Light' },
      { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
  ];
  public topics = [
      { value: 'game', display: 'Gaming' },
      { value: 'tech', display: 'Technology' },
      { value: 'life', display: 'Lifestyle' },
  ];
  public toggles = [
      { value: 'toggled', display: 'Toggled' },
      { value: 'untoggled', display: 'UnToggled' },
  ];
  /* end standing data */


  public disableForm = false;
  public form: FormGroup;
  public username = new FormControl('', Validators.required);
  public password = new FormControl('', Validators.required);
  public login_type = new FormControl('login type');

  constructor(public authService: AuthService, public router: Router, private fb: FormBuilder) {
    this.setMessage();
    this.processingLogin = false;

  }

  ngOnInit() {
      // reset login status
      this.authService.logout();

    this.form = this.fb.group({
      'username':              this.username,
      'password':           this.password,
      'login_type':              this.login_type,
    });
    
    // this.form.valueChanges
    //   .map((formValues) => {
    //     formValues.username = formValues.username.toUpperCase();
    //     return formValues;
    //   })
    //   // .filter((formValues) => this.form.valid)
    //   .subscribe((formValues) => {
    //     console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
    //   });
  }

  setMessage() {
    // this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    this.statusMessage = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  //login(event, username, password) {
  login() {

    this.statusMessage = 'Comprobando credenciales ...';
    this.processingLogin = true;

    console.log(`this.form.value.login_type`);
    console.log(this.form.value.username);
    console.log(this.form.value.password);
    console.log(this.form.value.login_type);

    this.authService.login(this.form.value.username, this.form.value.password, this.form.value.login_type)
      .subscribe(() => {

        this.setMessage();

        if (this.authService.isLoggedIn) {
         
          var defaultUrl = '';
          switch (this.form.value.login_type){
            case 'user':           defaultUrl = '/dashboard-medical-center'; break;
            case 'pacient':        defaultUrl = '/dashboard-attorney'; break;
            case 'therapist':      defaultUrl = '/dashboard-therapist'; break;
            case 'medical_center': defaultUrl = '/dashboard-medical-center';
          }
         
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = 
            (this.authService.redirectUrl && (this.authService.redirectUrl === defaultUrl) ) ? 
             this.authService.redirectUrl : defaultUrl;

          // Redirect the user
          this.router.navigate([redirect]);
        }
      });
  }

  public save(isValid: boolean, f: User) {
        console.log(f);
    }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}

export interface User {
    username: string; // text
    password: string; // password
    login_type?: string; // radio
    age?: number; // number
    gender?: string; // radio
    role?: string; // select (primitive)
    theme?: Theme; // select (object)
    topics?: string[]; // multiple select 
    isActive?: boolean; // checkbox
    toggle?: string; // checkbox toggle either 'toggled' or 'untoggled'
}

// theme.interface.ts

export interface Theme {
    display: string;
    backgroundColor: string;
    fontColor: string;
}


// import { Component, OnInit } from '@angular/core';
// import { Router }      from '@angular/router';
// import { AuthService } from './auth.service';

// let moduleID: string;



// @Component({
//   moduleId: moduleID,
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit{

//   message: string;
//   // model: any = {};
//   // loading = false;
//   // error = '';


//   public user: User;
//   /* standing data goes here*/
//   public login_types = [
//       { value: 'user', display: 'Usuario' },
//       { value: 'pacient', display: 'Patient' },
//       { value: 'therapist', display: 'Terapeuta' },
//       { value: 'medical_center', display: 'Centro Medico'}
//   ];
//   public genders = [
//       { value: 'F', display: 'Female' },
//       { value: 'M', display: 'Male' }
//   ];
//   public roles = [
//       { value: 'admin', display: 'Administrator' },
//       { value: 'guest', display: 'Guest' },
//       { value: 'custom', display: 'Custom' }
//   ];
//   public themes: Theme[] = [
//       { backgroundColor: 'black', fontColor: 'white', display: 'Dark' },
//       { backgroundColor: 'white', fontColor: 'black', display: 'Light' },
//       { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
//   ];
//   public topics = [
//       { value: 'game', display: 'Gaming' },
//       { value: 'tech', display: 'Technology' },
//       { value: 'life', display: 'Lifestyle' },
//   ];
//   public toggles = [
//       { value: 'toggled', display: 'Toggled' },
//       { value: 'untoggled', display: 'UnToggled' },
//   ];
//   /* end standing data */


//   constructor(public authService: AuthService, public router: Router) {
//     this.setMessage();
//     // initialize user model here
//     this.user = {
//         username: '',
//         password: '',
//         login_type: this.login_types[0].value, // default to Female
//         gender: this.genders[0].value, // default to Female
//         role: null,
//         theme: this.themes[0], // default to dark theme
//         isActive: false,
//         toggle: this.toggles[1].value, // default to untoggled
//         topics: [this.topics[1].value] // default to Technology
//     }
//   }

//   ngOnInit() {
//       // reset login status
//       this.authService.logout();
//   }

//   setMessage() {
//     // this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
//     this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
//   }

//   //login(event, username, password) {
//   login(f: User, isValid: boolean) {

//     this.message = 'Trying to log in ...';

//     this.authService.login(f.username, f.password, f.login_type)
//       .subscribe(() => {

//         this.setMessage();

//         if (this.authService.isLoggedIn) {
         
//           var defaultUrl = '';
//           switch (f.login_type){
//             case 'user':           defaultUrl = '/dashboard-medical-center'; break;
//             case 'pacient':        defaultUrl = '/dashboard-attorney'; break;
//             case 'therapist':      defaultUrl = '/dashboard-therapist'; break;
//             case 'medical_center': defaultUrl = '/dashboard-medical-center';
//           }
         
//           // Get the redirect URL from our auth service
//           // If no redirect has been set, use the default
//           let redirect = 
//             (this.authService.redirectUrl && (this.authService.redirectUrl === defaultUrl) ) ? 
//              this.authService.redirectUrl : defaultUrl;

//           // Redirect the user
//           this.router.navigate([redirect]);
//         }
//       });
//   }

//   public save(isValid: boolean, f: User) {
//         console.log(f);
//     }

//   logout() {
//     this.authService.logout();
//     this.setMessage();
//   }

// }

// export interface User {
//     username: string; // text
//     password: string; // password
//     login_type?: string; // radio
//     age?: number; // number
//     gender?: string; // radio
//     role?: string; // select (primitive)
//     theme?: Theme; // select (object)
//     topics?: string[]; // multiple select 
//     isActive?: boolean; // checkbox
//     toggle?: string; // checkbox toggle either 'toggled' or 'untoggled'
// }

// // theme.interface.ts

// export interface Theme {
//     display: string;
//     backgroundColor: string;
//     fontColor: string;
// }


