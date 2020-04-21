import {Pipe, PipeTransform} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Pipe({
  name: 'captialLetterNames'
})
// export class CaptialLetterNamesPipe extends UpperCasePipe implements PipeTransform {
export class CaptialLetterNamesPipe implements PipeTransform {

	transform(val_names: string, val_type: number, val_lastnames: string): string {
		
		let strnames = (val_lastnames == null ? val_names.split(" ") : [] );
		let type = (val_type == null ? 0 : val_type);


		let res = 	(type == 2 ? 
						(val_names.slice(0,1) +  val_lastnames.slice(0, 1)).toUpperCase()
				  	:
				   		(strnames[0].slice(0,1) +  strnames[1].slice(0, 1)).toUpperCase()
				 	);

	    return res
	}
} 
