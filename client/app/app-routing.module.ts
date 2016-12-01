import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent }	from './homepage/homepage.component';
import { PacientComponent }   from './pacient/pacient.component';
import { LoginComponent }	from './login/login.component';
import { RegisterComponent }	from './register/register.component';
import { ResultDashboardComponent }  from './result-dashboard/result-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'result-dashboard', pathMatch: 'full' },
  { path: 'homepage'		, component: HomepageComponent },
  { path: 'register'		, component: RegisterComponent},
  { path: 'login'			, component: LoginComponent },
  { path: 'pacients'		, component: PacientComponent },
  { path: 'result-dashboard', component: ResultDashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/