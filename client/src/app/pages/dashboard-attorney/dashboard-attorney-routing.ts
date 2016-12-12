import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAttorneyComponent } from './dashboard-attorney.component';


export const routes: Routes = [
  { path: '', component: DashboardAttorneyComponent }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);
