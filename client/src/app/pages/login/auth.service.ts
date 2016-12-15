import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
	
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  // login(): Observable<boolean> {
  //   return Observable.of(true).delay(1000)
  //                    .do(val => this.isLoggedIn = true);
  // =====================================================================
	public token: string;

	constructor(private http: Http) {
	    // set token if saved in local storage
	    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
	    this.token = currentUser && currentUser.token;
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
        
// console.log(`AuthService_login()_body : ${body}` );

	    return this.http.post('/api/authenticate', body, options)
	        .map((response: Response) => {

	            // login successful if there's a jwt token in the response
	            let token = response.json() && response.json().token;

	            if (token) {
	                // set token property
	                this.token = token;

// console.log(`AuthService_Token : ${token}`);

       				// store username login_type and jwt token in local storage to keep user logged in between page refreshes
	                localStorage.setItem('currentUser', 
	                					  JSON.stringify({ username: username, 
	                					  				   login_type: login_type,
	                					  				   token: token 
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
  }
}

