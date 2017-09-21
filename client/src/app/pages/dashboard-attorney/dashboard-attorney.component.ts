import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-attorney',
  templateUrl: './dashboard-attorney.component.html',
  styleUrls: ['./dashboard-attorney.component.css']
})
export class DashboardAttorneyComponent implements OnInit {

  medical_center_id: string;
  
  constructor() { }

  ngOnInit() {
  }

}
