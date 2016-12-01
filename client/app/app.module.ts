import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';


import { MDL } from './MaterialDesignLiteUpgradeElement';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { PacientComponent } from './pacient/pacient.component';
import { PacientService } from './pacient/pacient.service';


@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    JsonpModule,
  	AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
  	PacientComponent,
  	MDL 
  ],
  bootstrap:    [ AppComponent ],
  providers:   	[PacientService],
  schemas:      [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
