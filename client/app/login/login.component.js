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
var forms_1 = require('@angular/forms');
var emailValidator = forms_1.Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');
var LoginComponent = (function () {
    function LoginComponent(fb) {
        this.fb = fb;
        this.disableForm = false;
        this.username = new forms_1.FormControl('', forms_1.Validators.required);
        this.password = new forms_1.FormControl('', forms_1.Validators.required);
        this.processingLogin = false;
        this.statusMessage = '';
        this.form = fb.group({
            'username': this.username,
            'password': this.password
        });
    }
    LoginComponent.prototype.onDisableForm = function (formDisabled) {
        if (formDisabled) {
            this.form.disable();
        }
        else {
            this.form.enable();
        }
    };
    LoginComponent.prototype.login = function () {
        this.processingLogin = true;
        this.statusMessage = 'checking your credentials ...';
        // let obs = this.loginService.login(this.username.value, this.password.value);
        // obs.subscribe( () => {
        //   this.processingLogin = false;
        //   this.statusMessage = 'you are logged in ...';
        //   setTimeout( () => {
        //     //this.dialog.hide();
        //   }, 500);
        // });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
            styleUrls: ['./login.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map