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
var pacient_service_1 = require('./pacient.service');
// import { EmitterService } from '../../emitter.service';
// Component decorator
var PacientComponent = (function () {
    // Constructor with injected service
    function PacientComponent(pacientservice) {
        this.pacientservice = pacientservice;
    }
    // Input properties
    // @Input() listId: string;
    // @Input() editId: string;
    PacientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pacientservice.getPacients()
            .subscribe(function (data) { _this.pacients = data; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    PacientComponent = __decorate([
        core_1.Component({
            selector: 'comment-list',
            template: "\n    <a *ngFor=\"let pacient of pacients\"  [routerLink]=\"['/pacient', pacient._id]\"  class=\"col-1-4\">\n        <div class=\"mdl-typography--display-1-color-contrast\">{{pacient.names}}\n        </div>\n\n\n            <button class=\"mdl-button mdl-button--raised mdl-js-button dialog-button\" data-upgraded=\",MaterialButton\">{{pacient.names}}</button>\n\n      </a>\n    ",
        }), 
        __metadata('design:paramtypes', [pacient_service_1.PacientService])
    ], PacientComponent);
    return PacientComponent;
}());
exports.PacientComponent = PacientComponent;
//# sourceMappingURL=pacient.component.js.map