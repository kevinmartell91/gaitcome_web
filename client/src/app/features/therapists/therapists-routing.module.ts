import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapistsComponent } from './therapists.component';
import { AddTherapistComponent } from './components/add-therapist/add-therapist.component';
import { DeleteTherapistComponent } from './components/delete-therapist/delete-therapist.component';
import { ViewTherapistComponent } from './components/view-therapist/view-therapist.component';
import { UpdateTherapistComponent } from './components/update-therapist/update-therapist.component';



const routes: Routes = [
  { 
  	path: '',
  	component: TherapistsComponent,
  	children: [
  	  {
  	  	path: '',
  	  	children: [
	  	  {
	  	  	path: 'add',
	  	  	component: AddTherapistComponent
	  	  },
	  	  {
	  	  	path: 'delete',
	  	  	component: DeleteTherapistComponent
	  	  },
	  	  {
	  	  	path: 'update',
	  	  	component: UpdateTherapistComponent
	  	  },
	  	  {
	  	  	path: 'view',
	  	  	component: ViewTherapistComponent
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
export class TherapistsRoutingModule { }
