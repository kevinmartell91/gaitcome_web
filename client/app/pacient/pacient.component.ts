import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { Pacient } from './pacient.model';
import { PacientService } from './pacient.service';
// import { EmitterService } from '../../emitter.service';

// Component decorator
@Component({
    selector: 'pacient-module',
    template: `

    <style>
    mdl-radio, mdl-checkbox, mdl-switch {
      display: inline;
    }
  </style>

    <a *ngFor="let pacient of pacients"  [routerLink]="['/pacient', pacient._id]"  class="col-1-4">



<mdl-list>
  <mdl-list-item mdl-ripple>
    <mdl-list-item-primary-content>
      <mdl-icon mdl-list-item-avatar>person</mdl-icon>
      {{pacient.names}}
    </mdl-list-item-primary-content>
    <mdl-list-item-secondary-action>
      <mdl-checkbox mdl-ripple></mdl-checkbox>
    </mdl-list-item-secondary-action>
  </mdl-list-item>
  
</mdl-list>

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