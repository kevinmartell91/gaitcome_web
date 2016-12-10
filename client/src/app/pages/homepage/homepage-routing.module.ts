import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);
