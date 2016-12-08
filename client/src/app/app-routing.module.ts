import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  // { path: '**', redirectTo: 'pages', pathMatch: 'full' },
  // { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
