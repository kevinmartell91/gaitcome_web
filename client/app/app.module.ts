import '../node_modules/chart.js/dist/Chart.bundle.min.js';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';


// import { MDL } from './MaterialDesignLiteUpgradeElement';
import { MdlModule } from 'angular2-mdl';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { PacientComponent } from './pacient/pacient.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResultDashboardComponent }  from './result-dashboard/result-dashboard.component';



// import { LoginService } from './login/login.service';
import { PacientService } from './pacient/pacient.service';


import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
  	AppRoutingModule,
    MdlModule,
    ChartsModule
  ],
  declarations: [ 
  	AppComponent,
  	PacientComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    ResultDashboardComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:   	[ PacientService]//, LoginService ],
})
export class AppModule { }
