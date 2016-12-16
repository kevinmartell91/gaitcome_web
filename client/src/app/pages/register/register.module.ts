import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { routing } from './register-routing';
import { MdlModule } from 'angular2-mdl';

import { MedicalCenterComponent } from './medical-center/medical-center.component';
import { TherapistComponent } from './therapist/therapist.component';
import { AttorneyComponent } from './attorney/attorney.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdlModule,
    routing
  ],
  declarations: [
    RegisterComponent, 
    MedicalCenterComponent,
    TherapistComponent, 
    AttorneyComponent
   ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class RegisterModule { }
