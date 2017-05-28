import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardMedicalCenterComponent } from './dashboard-medical-center.component';
import { AttorneyListComponent } from './attorney-list/attorney-list.component';
import { TherapistListComponent, NgbdModalContent } from './therapist-list/therapist-list.component';
import { MedicalCenterComponent } from './medical-center/medical-center.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultDetailComponent } from './result-list/result-detail.component';

import { MdlModule } from 'angular2-mdl';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MaterialModule } from '@angular/material';
//import { PolymerElement } from '@vaadin/angular2-polymer';

import { routing } from './dashboard-medical-center.routing';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartModule } from 'angular2-highcharts';

//reused code
import { AddTherapistComponent } from '../therapist/add-therapist/add-therapist.component';




@NgModule({
  imports: [
    ChartModule,
    ChartsModule,
    CommonModule,
    // MaterialModule,
    FormsModule,
    NgbModule,
    MdlModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AddTherapistComponent,
    AttorneyListComponent, 
    DashboardMedicalCenterComponent,
    MedicalCenterComponent, 
    NgbdModalContent,
    ResultListComponent,
    ResultDetailComponent,
    TherapistListComponent
  ],
  entryComponents: [
    AddTherapistComponent,
    NgbdModalContent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardMedicalCenterModule { }
