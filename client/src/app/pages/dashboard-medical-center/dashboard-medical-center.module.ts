import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMedicalCenterComponent } from './dashboard-medical-center.component';
import { routing } from './dashboard-medical-center.routing';
import { AttorneyListComponent } from './attorney-list/attorney-list.component';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { MedicalCenterComponent } from './medical-center/medical-center.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    DashboardMedicalCenterComponent,
    AttorneyListComponent, 
    TherapistListComponent, 
    MedicalCenterComponent
  ]
})
export class DashboardMedicalCenterModule { }
