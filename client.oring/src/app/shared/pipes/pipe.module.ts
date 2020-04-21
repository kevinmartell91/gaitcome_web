import { NgModule } from '@angular/core';
// import {CommonModule} from "@angular/common";

import {DateFormatPipe} from "./date-format.pipe";
import { CaptialLetterNamesPipe } from './captial-letter-names.pipe';

@NgModule({
  declarations:[
  	DateFormatPipe, 
	CaptialLetterNamesPipe
  ],
  // imports:[CommonModule],
  exports:[
  	DateFormatPipe,
  	CaptialLetterNamesPipe
  ]
})

export class PipeModule{
	static forRoot() {
      return {
          ngModule: PipeModule,
          providers: [],
      };
   }
}