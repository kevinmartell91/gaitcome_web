import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAttorneyComponent } from './dashboard-attorney.component';
import { routing } from './dashboard-attorney-routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DashboardAttorneyComponent]
})
export class DashboardAttorneyModule { }
