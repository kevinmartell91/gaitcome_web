import { Component }          from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  // template: `
  //   <h1>{{title}}</h1>
  //   <nav>
  //     <a routerLink="/homepage" routerLinkActive="active">Homepage</a>
  //     <a routerLink="/pacients" routerLinkActive="active">Pacientes</a>
  //     <a routerLink="/login" routerLinkActive="active">Login</a>
  //   </nav>
  //   <router-outlet></router-outlet>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/