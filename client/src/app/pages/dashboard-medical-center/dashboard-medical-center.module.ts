import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './dashboard-medical-center.routing';

import { MedicalCenterComponent } from './medical-center/medical-center.component';
import { MedicalCenterComponent_out } from '../medicalCenter/medical-center.component';


// Pipes
import { PipeModule } from '../../shared/pipes/pipe.module';



import { DashboardMedicalCenterComponent } from './dashboard-medical-center.component';

// Therapist components
import { TherapistListDashboardComponent, NgbdModalContent} from './therapist-list/therapist-list.component'
import { TherapistListComponent } from '../therapist/therapist-list/therapist-list.component';
import { TherapistAddComponent } from '../therapist/therapist-add/therapist-add.component';
import { TherapistDeleteComponent } from '../therapist/therapist-delete/therapist-delete.component';
import { TherapistUpdateComponent } from '../therapist/therapist-update/therapist-update.component';
import { TherapistReadComponent } from '../therapist/therapist-read/therapist-read.component';

// Patient components
import { AttorneyListComponent } from './attorney-list/attorney-list.component';
import { PatientListComponent } from '../patient/patient-list/patient-list.component';
import { PatientAddComponent } from '../patient/patient-add/patient-add.component';
import { PatientUpdateComponent } from '../patient/patient-update/patient-update.component';
import { PatientReadComponent } from '../patient/patient-read/patient-read.component';
import { PatientDeleteComponent } from '../patient/patient-delete/patient-delete.component';

// Result components
import { ResultsComponent} from './results/results.component'
import { ResultListComponent} from '../result/result-list/result-list.component'
import { ResultDetailComponent } from '../result/result-detail/result-detail.component';
import { ResultPreviewComponent } from '../result/result-preview/result-preview.component';
import { ResultDrawerComponent } from '../result/result-detail/result-detail.component';
import { VideoDrawerComponent } from '../result/result-detail/result-detail.component';
import { ChartModule } from 'angular2-highcharts';


@NgModule({
  declarations: [
    TherapistAddComponent,
    TherapistDeleteComponent,
    TherapistUpdateComponent,
    TherapistReadComponent,
    TherapistListDashboardComponent, NgbdModalContent,
    AttorneyListComponent, 
    DashboardMedicalCenterComponent,
    MedicalCenterComponent, 
    MedicalCenterComponent_out,
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
  imports: [
    PipeModule.forRoot(),                 
    ChartModule,
    CommonModule,
    FormsModule,
    NgbModule,
    MdlModule,
    ReactiveFormsModule,
    routing
  ],
  entryComponents: [
    TherapistAddComponent,
    TherapistDeleteComponent,
    TherapistUpdateComponent,
    TherapistReadComponent, 
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
