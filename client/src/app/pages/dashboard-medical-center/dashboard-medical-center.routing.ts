import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardMedicalCenterComponent } from './dashboard-medical-center.component';

import { AttorneyListComponent } from './attorney-list/attorney-list.component';
import { MedicalCenterComponent } from './medical-center/medical-center.component';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { ResultListComponent} from './result-list/result-list.component'

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
          { path: 'result-list', component : ResultListComponent},
          { path: '', component: MedicalCenterComponent },
        ]
      }
    ]
  }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);
