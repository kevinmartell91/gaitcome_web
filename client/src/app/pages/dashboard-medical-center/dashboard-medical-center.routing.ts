import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardMedicalCenterComponent } from './dashboard-medical-center.component';

import { AttorneyListComponent } from './attorney-list/attorney-list.component';
import { MedicalCenterComponent } from '../medicalCenter/medical-center.component';
import { TherapistListComponent } from '../therapist/therapist-list/therapist-list.component';
import { ResultsComponent} from './results/results.component'
import { ResultDetailComponent } from '../result/result-detail/result-detail.component';

import { AuthGuard }                from '../login/auth-guard.service';

export const routes: Routes = [
  { 
  	path: '', 
  	component: DashboardMedicalCenterComponent ,
  	// canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: 'attorney-list', component: AttorneyListComponent },
          { path: 'therapist-list', component: TherapistListComponent },
          { path: 'result-list', component : ResultsComponent},
          { path: 'result/:id', component : ResultDetailComponent},
          { path: '', component: MedicalCenterComponent }
        ]
      }
    ]
  }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);