import { Injectable } from '@angular/core';
import { HttpClient,
  		 HttpResponse,
  		 HttpHeaders,
  		 HttpRequest } from "@angular/common/http";
import { LoginUser } from '../models/login-user.model';

@Injectable()
export class AuthService {
  
  constructor( private httpClient: HttpClient) {}

  public postAuthentication( loginUser: LoginUser) {
  	return this.httpClient
  		.post('http://localhost:8080/api/authenticate',
  		       loginUser,
  		       this.getHeaders());
  }

  private getHeaders() {
  	let headers = new HttpHeaders();
	headers.append('Content-Type', 'application/json');
  	let options = { headers: headers }
  	return options;
  }
}

