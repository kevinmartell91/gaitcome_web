import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule }  from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';


import { AuthGuard }            from './pages/login/auth-guard.service';
import { AuthService }          from './pages/login/auth.service';

import { routing } from './app-routing.module';

import { MdlModule } from 'angular2-mdl'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// import { PipeModule } from './shared/pipes/pipe.module';


declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
  declarations: [
    AppComponent, 
    PageNotFoundComponent,
  ],
  imports: [
  // PipeModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    MdlModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
