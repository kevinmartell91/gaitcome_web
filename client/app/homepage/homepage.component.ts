import { Component }  from '@angular/core';

// import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { Location }       from '@angular/common';



@Component ({
	moduleId: module.id,
	selector: 'homepage',
	templateUrl: "homepage.component.html",
	styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
	constructor(
	  private router: Router,
	  private location: Location
	) {}

	title = 'Gaitcome - Homepage';

	public showDialog($event: MouseEvent) {

	    this.title = "Title = showDialog";

	}

	public gotoLogin(): void {
	  this.router.navigate(['/login']);
    }

}