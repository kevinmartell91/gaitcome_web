import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardMedicalCenterComponent } from './dashboard-medical-center.component';
import { AttorneyListComponent } from './attorney-list/attorney-list.component';
import { MedicalCenterComponent_out } from '../medicalCenter/medical-center.component';
import { TherapistListDashboardComponent } from './therapist-list/therapist-list.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';

import { ResultsComponent} from './results/results.component'
import { ResultDetailComponent } from '../result/result-detail/result-detail.component';
// import { ResultAddComponent } from '../result/result-add/result-add.component';


import { AuthGuard }                from '../login/auth-guard.service';

export const routes: Routes = [
  { 
  	path: '', 
  	component: DashboardMedicalCenterComponent ,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'patient-list', component: AttorneyListComponent },
          { path: 'therapist-list', component: TherapistListDashboardComponent },
          { path: 'new-appointment', component: NewAppointmentComponent },
          { path: 'result-list', component : ResultsComponent},
          { path: 'result/:id', component : ResultDetailComponent},
          { path: '', component: MedicalCenterComponent_out }
        ]
      }
    ]
  }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);