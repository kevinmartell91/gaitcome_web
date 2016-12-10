import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { routing } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
