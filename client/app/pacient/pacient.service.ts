// Imports
import { Injectable ,ChangeDetectorRef}     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Pacient }           from './pacient.model';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PacientService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {} 

     // private instance variable to hold base url
     private pacientUrl = 'http://localhost:8080/api/pacients';

     getPacients() : Observable<Pacient[]>{
         // ...using get request
         //return this.pts;
        return this.http.get(this.pacientUrl)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

     

    // function mapPacients(response:Response): Pacient[]{
    //    // The response of the API has a results
    //    // property with the actual results
    //    return response.json().results.map(toPacient);
    // }

    // function toPacient(r:any): Pacient{
    //   let pacient = <Pacient>({
    //     date: r.date,
    //     milliseconds_since_epoch: r.milliseconds_since_epoch,
    //     time: r.time,
    //   });
    //   console.log('Parsed pacient:', pacient);
    //   return pacient; 
    // }

    // // to avoid breaking the rest of our app
    // // I extract the id from the pacient url
    // function extractId(pacientData:any){
    //  let extractedId = pacientData.url.replace('http://swapi.co/api/people/','').replace('/','');
    //  return parseInt(extractedId);
    // }

    // function mapPacient(response:Response): Pacient{
    //   // toPacient looks just like in the previous example
    //   return toPacient(response.json());
    // }


    //  // Add a new comment
    // addComment (body: Object): Observable<Comment[]> {
    //     let bodyString = JSON.stringify(body); // Stringify payload
    //     let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //     let options = new RequestOptions({ headers: headers }); // Create a request option

    //     return this.http.post(this.commentsUrl, body, options) // ...using post request
    //                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }   

    // // Update a comment
    // updateComment (body: Object): Observable<Comment[]> {
    //     let bodyString = JSON.stringify(body); // Stringify payload
    //     let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //     let options = new RequestOptions({ headers: headers }); // Create a request option

    //     return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
    //                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }   
    // // Delete a comment
    // removeComment (id:string): Observable<Comment[]> {
    //     return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
    //                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // } 
}


