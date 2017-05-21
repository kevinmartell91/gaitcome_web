import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTherapistComponent } from './dashboard-therapist.component';
import { routing } from './dashboard-therapist.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
  	DashboardTherapistComponent
  ]
})
export class DashboardTherapistModule { }
