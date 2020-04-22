import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { SharedModule } from '../../shared/shared.module';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  providers: [
  	AuthService
  ]
})
export class LoginModule { }
