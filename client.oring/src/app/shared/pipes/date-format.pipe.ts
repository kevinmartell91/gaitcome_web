import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string): string {
	// return value.charAt(0).toUpperCase() + value.substr(1);
	return value.slice(0,-14);
  }

}
