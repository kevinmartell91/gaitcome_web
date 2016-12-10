import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { routing } from './homepage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [HomepageComponent]
})
export class HomepageModule { }
