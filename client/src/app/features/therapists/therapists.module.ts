import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TherapistsRoutingModule } from './therapists-routing.module';
import { TherapistsComponent } from './therapists.component';
import { AddTherapistComponent } from './components/add-therapist/add-therapist.component';
import { DeleteTherapistComponent } from './components/delete-therapist/delete-therapist.component';
import { UpdateTherapistComponent } from './components/update-therapist/update-therapist.component';
import { ViewTherapistComponent } from './components/view-therapist/view-therapist.component';

import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    TherapistsComponent,
    AddTherapistComponent,
    DeleteTherapistComponent,
    UpdateTherapistComponent,
    ViewTherapistComponent
  ],
  imports: [
    CommonModule,
    TherapistsRoutingModule,
    SharedModule
  ]
})
export class TherapistsModule { }
