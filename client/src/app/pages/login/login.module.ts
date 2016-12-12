import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { routing } from './login-routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
