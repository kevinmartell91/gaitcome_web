"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import { LoginComponent } from '../login/login.component';
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var HomepageComponent = (function () {
    function HomepageComponent(router, location) {
        this.router = router;
        this.location = location;
        this.title = 'Gaitcome - Homepage';
    }
    HomepageComponent.prototype.showDialog = function ($event) {
        this.title = "Title = showDialog";
    };
    HomepageComponent.prototype.gotoLogin = function () {
        this.router.navigate(['/login']);
    };
    HomepageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'homepage',
            templateUrl: "homepage.component.html",
            styleUrls: ['./homepage.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=homepage.component.js.map