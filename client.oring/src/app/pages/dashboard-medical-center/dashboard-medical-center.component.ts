import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-dashboard-medical-center',
  // templateUrl: './dashboard-medical-center.componentBOOSTRAP.html',
  templateUrl: './dashboard-medical-center.component.html',
  styleUrls: [
  	'./dashboard-medical-center.component.css'
  ]  
})
export class DashboardMedicalCenterComponent implements OnInit {

  medical_center_id:string;
  medical_center_name:string;
  appVersion:string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    
    this.appVersion = environment.version;
    
    if (environment.production) { 

      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.medical_center_id = currentUser && currentUser.entity._id;
      this.medical_center_name = currentUser && currentUser.entity.name;

    } else {  
      this.medical_center_id = environment.medical_center_id;
      this.medical_center_name = environment.medical_center_name;
      
    }
  }

  logOut(){
    this.authService.logout();
  }

}
