import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { DeletePatientComponent } from './components/delete-patient/delete-patient.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { ViewPatientComponent } from './components/view-patient/view-patient.component';


const routes: Routes = [
  {
  	path: '',
  	component: PatientsComponent,
  	children: [
  	  {
  	  	path: '',
  	  	children: [
     		  {
     		  	path: 'add',
     		  	component: AddPatientComponent
     		  },
     		  {
     		  	path: 'delete',
     		  	component: DeletePatientComponent
     		  },
     		  {
     		  	path: 'update',
     		  	component: UpdatePatientComponent
     		  },
     		  {
     		  	path: 'view',
     		  	component: ViewPatientComponent
     		  } 		
  	  	]
  	  }
  	]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
