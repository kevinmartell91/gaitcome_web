import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

import { MedicalCenterComponent } from './medical-center/medical-center.component';
import { TherapistComponent } from './therapist/therapist.component';
import { AttorneyComponent } from './attorney/attorney.component';



export const routes: Routes = [
  { path: '', 
    component: RegisterComponent,
    children: [
      { 
      	path: '',
      	children: [
          { path: 'attorney', component: AttorneyComponent },
          { path: 'therapist', component: TherapistComponent },
          { path: '', component: MedicalCenterComponent}
        ]
      }  
    ]
  }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);
