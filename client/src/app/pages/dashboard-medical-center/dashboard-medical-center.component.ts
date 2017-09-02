import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-medical-center',
  templateUrl: './dashboard-medical-center.componentBOOSTRAP.html',
  // templateUrl: './dashboard-medical-center.component.html',
  styleUrls: [
  	'./dashboard-medical-center.component.css'
  ]  
})
export class DashboardMedicalCenterComponent implements OnInit {

  medical_center_id:string;
  medical_center_name:string;

  constructor() { }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.medical_center_id = currentUser && currentUser.entity._id;
    this.medical_center_name = currentUser && currentUser.entity.name;

  }

}
