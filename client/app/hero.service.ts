import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

//import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

// Import RxJs required methods
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'app/heroees';  // URL to web api
  private apiUrl = 'http://date.jsontest.com';  // URL to web api
  private apiUrlLocal = "http://localhost:8080/api/users";  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.apiUrlLocal)
               .map((res:Response) => res.json() as Hero[])
               //.then(response => response.json().data as Hero[])
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
               //.catch(this.handleError);

  }

  // getHero(id: number): Promise<Hero> {
  //   return this.getHeroes()
  //              .then(heroes => heroes.find(hero => hero.id === id));
  // }

  // delete(id: number): Promise<void> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

  // create(name: string): Promise<Hero> {
  //   return this.http
  //     .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

  // update(hero: Hero): Promise<Hero> {
  //   const url = `${this.heroesUrl}/${hero.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(hero), {headers: this.headers})
  //     .toPromise()
  //     .then(() => hero)
  //     .catch(this.handleError);
  // }

  // getApiTest1(): Promise<String> {
  //   return this.http.get(this.apiUrl)
  //              .toPromise()
  //              .then(res => res.json().data);
  // }

  // Fetch all existing comments
     getApiTest2() : Observable<String>{
         // ...using get request
         return this.http.get(this.apiUrlLocal)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/