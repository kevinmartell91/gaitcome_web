import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { DeletePatientComponent } from './components/delete-patient/delete-patient.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { ViewPatientComponent } from './components/view-patient/view-patient.component';


import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    PatientsComponent,
    AddPatientComponent,
    DeletePatientComponent,
    UpdatePatientComponent,
    ViewPatientComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    SharedModule
  ]
})
export class PatientsModule { }
