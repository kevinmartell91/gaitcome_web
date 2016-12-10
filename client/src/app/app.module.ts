import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule }  from '@angular/common';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

import { routing } from './app-routing.module';
  

@NgModule({
  declarations: [
    AppComponent
    // PagesComponent, not necessary because lazy loading was implemented
    // ThemeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
