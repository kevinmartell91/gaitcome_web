import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { routing } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    PagesComponent
  ]

})
export class PagesModule { }
