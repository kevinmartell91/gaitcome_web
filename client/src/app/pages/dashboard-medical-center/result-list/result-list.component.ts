import {Component, OnInit} from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

// import { PolymerElement } from '@vaadin/angular2-polymer'; not needed in this part, just in the loader(lazy)

export class Person {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'my-grid-columns-component',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  providers: [
    HttpModule
  ]
})
export class ResultListComponent implements OnInit {
  people: Person[] = [];
  displayedPeople: Person[] = [];

  constructor (private http: Http) {}

  ngOnInit() {
    this.getPeople();
  }

  filterPeople(event: any) {
    const filterText: string = (<HTMLInputElement>event.target).value.toLowerCase();
    this.displayedPeople = this.people.filter((person: Person) =>
      !filterText || person.firstName.toLowerCase().indexOf(filterText) > -1
    );
  }

  sortPeople(event: any) {
    const grid = event.target;
    const sortOrder = grid.sortOrder[0];
    const sortProperty = grid.columns[sortOrder.column].name;
    const sortDirection = sortOrder.direction;
    this.displayedPeople.sort((a, b) => {
      let res: number;
      let valueA: string = grid.get(sortProperty, a),
          valueB: string = grid.get(sortProperty, b);
      if (!+(valueA)) {
        res = parseInt(valueA, 10) - parseInt(valueB, 10);
      } else {
        res = valueA.localeCompare(valueB);
      }
      if (sortDirection === 'desc') {
        res *= -1;
      }
      return res;
    });
  }

  getPeople() {
    this._getJSON('https://demo.vaadin.com/demo-data/1.0/people')
      .subscribe(json => this.displayedPeople = this.people = json.result)
  }

  _getJSON(url: string): Observable<any> {
    return this.http.get(url)
      .map((res: Response) => res.json())
  }
}
// import { Component, OnInit } from '@angular/core';
// import {
//   IMdlTableModelItem,
//   MdlDefaultTableModel,
// } from 'angular2-mdl';


// export interface ITableItem extends IMdlTableModelItem {
//   material: string;
//   quantity: number;
//   unitPrice: number;
// }

// @Component({
//   selector: 'app-result-list',
//   templateUrl: './result-list.component.html',
//   styleUrls: ['./result-list.component.css']
// })
// export class ResultListComponent implements OnInit {

//     private tableData: [ITableItem] = [
//     {material: 'Acrylic (Transparent)', quantity: 25, unitPrice: 2.90, selected: true},
//     {material: 'Plywood (Birch)', quantity: 50, unitPrice: 1.25, selected: false},
//     {material: 'Laminate (Gold on Blue)', quantity: 10, unitPrice: 2.35, selected: false}
//   ];

//   protected selected: Array<ITableItem> = new Array<ITableItem>();

//   public tableModel = new MdlDefaultTableModel([
//     {key: 'material', name: 'Material', sortable: true},
//     {key: 'quantity', name: 'Quantity', sortable: true, numeric: true},
//     {key: 'unitPrice', name: 'Unit price', numeric: true}
//   ]);


//   public ngOnInit() {
//     this.tableModel.addAll(this.tableData);
//     this.selected = this.tableData.filter( data => data.selected);
//   }

//   protected selectionChanged($event) {
//     this.selected = $event.value;
//   }

// }
