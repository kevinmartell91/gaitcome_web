import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalDashboardRoutingModule } from './medical-dashboard-routing.module';
import { MedicalDashboardComponent } from './medical-dashboard.component';


@NgModule({
  declarations: [MedicalDashboardComponent],
  imports: [
    CommonModule,
    MedicalDashboardRoutingModule
  ]
})
export class MedicalDashboardModule { }
