import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
	
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  loginUrl: string;
  redirectUrl: string;

  // login(): Observable<boolean> {
  //   return Observable.of(true).delay(1000)
  //                    .do(val => this.isLoggedIn = true);
  // =====================================================================
	public token: string;

	constructor(private http: Http,
				private router: Router) {
	    // set token if saved in local storage
	    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
	    this.token = currentUser && currentUser.token;

	    if (environment.production) { 
	    	this.loginUrl = environment.URL_WEB_SERVICE + '/authenticate';
	    } else {
	    	this.loginUrl = environment.URL_WEB_SERVICE + '/authenticate';
	    }

	}

	login(username: string, password: string, login_type: string): Observable<boolean> {

		// add authorization header with jwt token
		// candidate to be a added to share folder
        let headers = new Headers();
        headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify({ username: username,
        							password: password,
        							login_type: login_type });

	    return this.http.post(this.loginUrl, body, options)
	        .map((response: Response) => {

	            // login successful if there's a jwt token in the response
	            let token = response.json() && response.json().token;
	            if (token) {
	                // set token property
	                this.token = token;

       				// store username login_type and jwt token in local storage to keep user logged in between page refreshes
	                localStorage.setItem('currentUser', 
	                					  JSON.stringify({ username: username, 
	                					  				   login_type: login_type,
	                					  				   token: token,
	                					  				   entity: response.json().entity
	                					  				})
	                					);

       				this.isLoggedIn = true;
	                // return true to indicate successful login
	                return true;

	            } else {
	                // return false to indicate failed login
	                return false;

	            }
	        });
	}

	logout(): void {
		this.isLoggedIn = false;
		// clear token remove user from local storage to log user out
		this.token = null;
		localStorage.removeItem('currentUser');

		// Navigate to the login page with extras
   	    this.router.navigate(['/login']);
	}
}

