import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { HomepageComponent } from './homepage/homepage.component';
// import { LoginModule } from './login/login.module';

import { PagesComponent } from './pages.component';

export const routes : Routes = [
	{ path: 'login',
	  loadChildren: 'app/pages/login/login.module#LoginModule',
	},
	{
      path: 'register',
	  loadChildren: 'app/pages/register/register.module#RegisterModule',
	},
	{ path: '',
	  component: PagesComponent,
	  children: [
	    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
	    { path: 'homepage', loadChildren: 'app/pages/homepage/homepage.module#HomepageModule', }
	  ]
	}

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
