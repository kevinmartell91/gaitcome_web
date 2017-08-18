import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardMedicalCenterComponent } from './dashboard-medical-center.component';
import { AttorneyListComponent } from './attorney-list/attorney-list.component';
import { MedicalCenterComponent } from '../medicalCenter/medical-center.component';
import { TherapistListComponent } from '../therapist/therapist-list/therapist-list.component';
import { ResultsComponent} from './results/results.component'
import { ResultListComponent} from '../result/result-list/result-list.component'
import { ResultDetailComponent } from '../result/result-detail/result-detail.component';
import { ResultPreviewComponent } from '../result/result-preview/result-preview.component';

import { MdlModule } from 'angular2-mdl';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './dashboard-medical-center.routing';
import { ChartModule } from 'angular2-highcharts';

//reused code
import { TherapistAddComponent } from '../therapist/therapist-add/therapist-add.component';
import { PatientListComponent } from '../patient/patient-list/patient-list.component';
import { PatientAddComponent } from '../patient/patient-add/patient-add.component';
import { PatientUpdateComponent } from '../patient/patient-update/patient-update.component';
import { PatientReadComponent } from '../patient/patient-read/patient-read.component';
import { PatientDeleteComponent } from '../patient/patient-delete/patient-delete.component';


import { ResultDrawerComponent } from '../result/result-detail/result-detail.component';
import { VideoDrawerComponent } from '../result/result-detail/result-detail.component';

//
import { TherapistListDashboardComponent, NgbdModalContent} from './therapist-list/therapist-list.component'
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    ChartModule,
    CommonModule,
    FormsModule,
    NgbModule,
    MdlModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    TherapistAddComponent, 
    TherapistListDashboardComponent, NgbdModalContent,
    AttorneyListComponent, 
    DashboardMedicalCenterComponent,
    MedicalCenterComponent, 
    PatientListComponent,
    PatientAddComponent,
    PatientUpdateComponent,
    PatientReadComponent,
    PatientDeleteComponent,
    ResultListComponent,
    ResultDetailComponent,
    ResultsComponent,
    ResultDrawerComponent,
    ResultPreviewComponent,
    TherapistListComponent,
    VideoDrawerComponent
  ],
  entryComponents: [
    TherapistAddComponent, 
    TherapistListDashboardComponent, NgbdModalContent,
    PatientListComponent,
    PatientAddComponent,
    PatientUpdateComponent,
    PatientReadComponent,
    PatientDeleteComponent,
    ResultsComponent,
    ResultPreviewComponent
  ],
  providers: [
  TherapistAddComponent,
    NgbActiveModal
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardMedicalCenterModule { }
