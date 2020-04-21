import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  date = new FormControl(new Date());
   serializedDate = new FormControl((new Date()).toISOString());

   foods: Food[] = [
       {value: 'steak-0', viewValue: 'Steak'},
       {value: 'pizza-1', viewValue: 'Pizza'},
       {value: 'tacos-2', viewValue: 'Tacos'}
     ];
}
