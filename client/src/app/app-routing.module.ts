import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';


const routes: Routes = [
  { 
  	path: 'homepage', 
    loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule) 
  },
  { 
	path: 'medical-dashboard', 
	loadChildren: () => import('./features/medical-dashboard/medical-dashboard.module').then(m => m.MedicalDashboardModule) 
  },
  { 
  	path: 'login', 
  	loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
  	path: '**',
  	component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
