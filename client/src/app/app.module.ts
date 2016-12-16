import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule }  from '@angular/common';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

import { MdlModule } from 'angular2-mdl'


import { AuthGuard }            from './pages/login/auth-guard.service';
import { AuthService }          from './pages/login/auth.service';


import { routing } from './app-routing.module';
  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    MdlModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
