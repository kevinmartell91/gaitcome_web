import { Component, OnInit } from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero.service';
import { Observable } from 'rxjs/Observable';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  dataTest :string;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    // this.heroService.getHeroes()
    //   .then(heroes => this.heroes = heroes.slice(1, 5));
    // this.heroService.getApiTest2()
    //     .then(data => this.dataTest = data);
    //     //.catch(this.handleError);
    this.heroService.getHeroes()
                           .subscribe(
                               heroes => this.heroes = heroes.slice(1,5), //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });

  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/