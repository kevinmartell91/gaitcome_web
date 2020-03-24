import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { routing } from './pages-routing.module';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    PagesComponent,
    // PageNotFoundComponent
  ]

})
export class PagesModule { }
