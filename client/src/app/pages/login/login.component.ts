import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';

let moduleID: string;



@Component({
  moduleId: moduleID,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  message: string;
  // model: any = {};
  // loading = false;
  // error = '';


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


  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
    // initialize user model here
    this.user = {
        username: '',
        password: '',
        login_type: this.login_types[0].value, // default to Female
        gender: this.genders[0].value, // default to Female
        role: null,
        theme: this.themes[0], // default to dark theme
        isActive: false,
        toggle: this.toggles[1].value, // default to untoggled
        topics: [this.topics[1].value] // default to Technology
    }
  }

  ngOnInit() {
      // reset login status
      this.authService.logout();
  }

  setMessage() {
    // this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  //login(event, username, password) {
  login(f: User, isValid: boolean) {

    this.message = 'Trying to log in ...';

    this.authService.login(f.username, f.password, f.login_type)
      .subscribe(() => {

        this.setMessage();

        if (this.authService.isLoggedIn) {
         
          var defaultUrl = '';
          switch (f.login_type){
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
