import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attorney-list',
  templateUrl: './attorney-list.component.html',
  styleUrls: [
  	'./attorney-list.component.css',
  	'../../../theme/theme.component.css'
  ]
})
export class AttorneyListComponent implements OnInit {

  medical_center_id: string;
  
  constructor() { }

  ngOnInit() {
  }

}
