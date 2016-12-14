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

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  ngOnInit() {
        // reset login status
        this.authService.logout();
    }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(event, username, password) {
    event.preventDefault();
    this.message = 'Trying to log in ...';

    this.authService.login(username,password)
      .subscribe(() => {
        this.setMessage();
        console.log(`loginComponent_isLoggedIn : ${this.authService.isLoggedIn}`);
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          // let redirect = this.authService.redirectUrl ?
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard-medical-center';
          // console.log(`RESPONSE redirect : ${redirect}`);
          // Redirect the user
          this.router.navigate([redirect]);
        }
      });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
