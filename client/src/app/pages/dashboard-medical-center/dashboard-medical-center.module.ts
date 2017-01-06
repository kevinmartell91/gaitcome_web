import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMedicalCenterComponent } from './dashboard-medical-center.component';
import { AttorneyListComponent } from './attorney-list/attorney-list.component';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { MedicalCenterComponent } from './medical-center/medical-center.component';
import { MdlModule } from 'angular2-mdl';
// import { MaterialModule } from '@angular/material';


import { routing } from './dashboard-medical-center.routing';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ResultListComponent } from './result-list/result-list.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    // MaterialModule,
    MdlModule,
    routing
  ],
  declarations: [
    DashboardMedicalCenterComponent,
    AttorneyListComponent, 
    TherapistListComponent, 
    MedicalCenterComponent, ResultListComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardMedicalCenterModule { }
