import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { HomepageComponent } from './homepage/homepage.component';
// import { LoginModule } from './login/login.module';

import { AuthGuard }          from './login/auth-guard.service';

import { PagesComponent } from './pages.component';

export const routes : Routes = [
	{ 
	  path: 'login',
	  loadChildren: 'app/pages/login/login.module#LoginModule',
	},
	{
      path: 'register',
	  loadChildren: 'app/pages/register/register.module#RegisterModule',
	},
	{ 
	  path: 'dashboard-attorney',
	  loadChildren: 'app/pages/dashboard-attorney/dashboard-attorney.module#DashboardAttorneyModule',
      canLoad: [AuthGuard]
	},
	{
      path: 'dashboard-medical-center',
	  loadChildren: 'app/pages/dashboard-medical-center/dashboard-medical-center.module#DashboardMedicalCenterModule',
      // canLoad: [AuthGuard]
	},
	{
      path: 'dashboard-therapist',
	  loadChildren: 'app/pages/dashboard-therapist/dashboard-therapist.module#DashboardTherapistModule',
      canLoad: [AuthGuard]
	},
	{ 
	  path: '',
	  component: PagesComponent,
	  children: [
	    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
	    { path: 'homepage', loadChildren: 'app/pages/homepage/homepage.module#HomepageModule', }
	  ]
	}

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);


// @NgModule({
//   imports: [
//     RouterModule.forChild( routes )
//   ],
//   exports: [
//     RouterModule
//   ],
//   providers: [
//     // CanDeactivateGuard
//   ]
// })
// export class AppRoutingModule {}

