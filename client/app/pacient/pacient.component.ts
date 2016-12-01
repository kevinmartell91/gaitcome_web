import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { Pacient } from './pacient.model';
import { PacientService } from './pacient.service';
// import { EmitterService } from '../../emitter.service';

// Component decorator
@Component({
    selector: 'comment-list',
    template: `
    <a *ngFor="let pacient of pacients"  [routerLink]="['/pacient', pacient._id]"  class="col-1-4">
        <div class="mdl-typography--display-1-color-contrast">{{pacient.names}}
        </div>


            <button class="mdl-button mdl-button--raised mdl-js-button dialog-button" data-upgraded=",MaterialButton">{{pacient.names}}</button>

      </a>
    `,
    
})
// Component class
export class PacientComponent implements OnInit{
    // Constructor with injected service
    constructor(private pacientservice: PacientService) {}
    // Local properties
    public pacients;

    // Input properties
    // @Input() listId: string;
    // @Input() editId: string;


    ngOnInit(){
        this.pacientservice.getPacients()
             .subscribe(
                data => { this.pacients = data},
                err => console.error(err),
                () => console.log('done')
              );

    }
    
    // ngOnChanges(changes:any) {
    //     // Listen to the 'list'emitted event so as populate the model
    //     // with the event payload
    //     EmitterService.get(this.listId).subscribe((pacients:Pacient[]) => {this.pacients = pacients});
    // }
    
 }