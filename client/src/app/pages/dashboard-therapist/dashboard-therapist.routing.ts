import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardTherapistComponent } from './dashboard-therapist.component';


export const routes: Routes = [
  { path: '', component: DashboardTherapistComponent }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);
