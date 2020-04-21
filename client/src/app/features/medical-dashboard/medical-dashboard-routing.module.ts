import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalDashboardComponent } from './medical-dashboard.component';

const routes: Routes = [
  { 
  	path: '', 
  	component: MedicalDashboardComponent,
    children: [
      // { 
    	 // path: '', redirectTo: 'patients'
      // },
      { 
    	 path: 'patients', 
    	 loadChildren: () => import('../patients/patients.module').then(m => m.PatientsModule)  
      },
      { 
    	 path: 'therapists', 
    	 loadChildren: () => import('../therapists/therapists.module').then(m => m.TherapistsModule)  
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalDashboardRoutingModule { }
