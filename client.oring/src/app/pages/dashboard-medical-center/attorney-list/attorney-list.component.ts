import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';


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
  medical_center_name : string;
  
  constructor() { }

  ngOnInit() {

    if (environment.production) { 

      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      
      this.medical_center_id = currentUser && currentUser.entity._id;    
      this.medical_center_name = currentUser && currentUser.entity.name;    

    } else {
      this.medical_center_id = environment.medical_center_id;    
      this.medical_center_name = environment.medical_center_name;    
    }
  }

}
