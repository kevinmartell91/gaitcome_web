import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdlModule } from 'angular2-mdl';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './homepage-routing';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MdlModule,
    routing
  ],
  declarations: [
  	HomepageComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomepageModule { }
