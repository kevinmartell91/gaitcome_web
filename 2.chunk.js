webpackJsonp([2,11],{

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_mdl__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_routing__ = __webpack_require__(403);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { MaterialModule } from '@angular/material';

var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            // MaterialModule,
            __WEBPACK_IMPORTED_MODULE_4_angular2_mdl__["MdlModule"],
            __WEBPACK_IMPORTED_MODULE_5__login_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(6);
var filter_1 = __webpack_require__(181);
Observable_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//let moduleID: string;
var LoginComponent = (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        /* standing data goes here*/
        this.login_types = [
            { value: 'user', display: 'Usuario' },
            { value: 'pacient', display: 'Patient' },
            { value: 'therapist', display: 'Terapeuta' },
            { value: 'medical_center', display: 'Centro Medico' }
        ];
        this.genders = [
            { value: 'F', display: 'Female' },
            { value: 'M', display: 'Male' }
        ];
        this.roles = [
            { value: 'admin', display: 'Administrator' },
            { value: 'guest', display: 'Guest' },
            { value: 'custom', display: 'Custom' }
        ];
        this.themes = [
            { backgroundColor: 'black', fontColor: 'white', display: 'Dark' },
            { backgroundColor: 'white', fontColor: 'black', display: 'Light' },
            { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
        ];
        this.topics = [
            { value: 'game', display: 'Gaming' },
            { value: 'tech', display: 'Technology' },
            { value: 'life', display: 'Lifestyle' },
        ];
        this.toggles = [
            { value: 'toggled', display: 'Toggled' },
            { value: 'untoggled', display: 'UnToggled' },
        ];
        /* end standing data */
        this.disableForm = false;
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.login_type = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('login type');
        this.setMessage();
        this.processingLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authService.logout();
        this.form = this.fb.group({
            'username': this.username,
            'password': this.password,
            'login_type': this.login_type,
        });
        // this.form.valueChanges
        //   .map((formValues) => {
        //     formValues.username = formValues.username.toUpperCase();
        //     return formValues;
        //   })
        //   // .filter((formValues) => this.form.valid)
        //   .subscribe((formValues) => {
        //     console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
        //   });
    };
    LoginComponent.prototype.setMessage = function () {
        // this.statusMessage = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    //login(event, username, password) {
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.statusMessage = 'Comprobando credenciales ...';
        this.processingLogin = true;
        console.log("this.form.value.login_type");
        console.log(this.form.value.username);
        console.log(this.form.value.password);
        console.log(this.form.value.login_type);
        this.authService.login(this.form.value.username, this.form.value.password, this.form.value.login_type)
            .subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                var defaultUrl = '';
                switch (_this.form.value.login_type) {
                    case 'user':
                        defaultUrl = '/dashboard-medical-center';
                        break;
                    case 'pacient':
                        defaultUrl = '/dashboard-attorney';
                        break;
                    case 'therapist':
                        defaultUrl = '/dashboard-therapist';
                        break;
                    case 'medical_center': defaultUrl = '/dashboard-medical-center';
                }
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                var redirect = (_this.authService.redirectUrl && (_this.authService.redirectUrl === defaultUrl)) ?
                    _this.authService.redirectUrl : defaultUrl;
                // Redirect the user
                _this.router.navigate([redirect]);
            }
        });
    };
    LoginComponent.prototype.save = function (isValid, f) {
        console.log(f);
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: moduleID,
        selector: 'app-login',
        template: __webpack_require__(455),
        styles: [__webpack_require__(425)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
// import { Component, OnInit } from '@angular/core';
// import { Router }      from '@angular/router';
// import { AuthService } from './auth.service';
// let moduleID: string;
// @Component({
//   moduleId: moduleID,
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit{
//   message: string;
//   // model: any = {};
//   // loading = false;
//   // error = '';
//   public user: User;
//   /* standing data goes here*/
//   public login_types = [
//       { value: 'user', display: 'Usuario' },
//       { value: 'pacient', display: 'Patient' },
//       { value: 'therapist', display: 'Terapeuta' },
//       { value: 'medical_center', display: 'Centro Medico'}
//   ];
//   public genders = [
//       { value: 'F', display: 'Female' },
//       { value: 'M', display: 'Male' }
//   ];
//   public roles = [
//       { value: 'admin', display: 'Administrator' },
//       { value: 'guest', display: 'Guest' },
//       { value: 'custom', display: 'Custom' }
//   ];
//   public themes: Theme[] = [
//       { backgroundColor: 'black', fontColor: 'white', display: 'Dark' },
//       { backgroundColor: 'white', fontColor: 'black', display: 'Light' },
//       { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
//   ];
//   public topics = [
//       { value: 'game', display: 'Gaming' },
//       { value: 'tech', display: 'Technology' },
//       { value: 'life', display: 'Lifestyle' },
//   ];
//   public toggles = [
//       { value: 'toggled', display: 'Toggled' },
//       { value: 'untoggled', display: 'UnToggled' },
//   ];
//   /* end standing data */
//   constructor(public authService: AuthService, public router: Router) {
//     this.setMessage();
//     // initialize user model here
//     this.user = {
//         username: '',
//         password: '',
//         login_type: this.login_types[0].value, // default to Female
//         gender: this.genders[0].value, // default to Female
//         role: null,
//         theme: this.themes[0], // default to dark theme
//         isActive: false,
//         toggle: this.toggles[1].value, // default to untoggled
//         topics: [this.topics[1].value] // default to Technology
//     }
//   }
//   ngOnInit() {
//       // reset login status
//       this.authService.logout();
//   }
//   setMessage() {
//     // this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
//     this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
//   }
//   //login(event, username, password) {
//   login(f: User, isValid: boolean) {
//     this.message = 'Trying to log in ...';
//     this.authService.login(f.username, f.password, f.login_type)
//       .subscribe(() => {
//         this.setMessage();
//         if (this.authService.isLoggedIn) {
//           var defaultUrl = '';
//           switch (f.login_type){
//             case 'user':           defaultUrl = '/dashboard-medical-center'; break;
//             case 'pacient':        defaultUrl = '/dashboard-attorney'; break;
//             case 'therapist':      defaultUrl = '/dashboard-therapist'; break;
//             case 'medical_center': defaultUrl = '/dashboard-medical-center';
//           }
//           // Get the redirect URL from our auth service
//           // If no redirect has been set, use the default
//           let redirect = 
//             (this.authService.redirectUrl && (this.authService.redirectUrl === defaultUrl) ) ? 
//              this.authService.redirectUrl : defaultUrl;
//           // Redirect the user
//           this.router.navigate([redirect]);
//         }
//       });
//   }
//   public save(isValid: boolean, f: User) {
//         console.log(f);
//     }
//   logout() {
//     this.authService.logout();
//     this.setMessage();
//   }
// }
// export interface User {
//     username: string; // text
//     password: string; // password
//     login_type?: string; // radio
//     age?: number; // number
//     gender?: string; // radio
//     role?: string; // select (primitive)
//     theme?: Theme; // select (object)
//     topics?: string[]; // multiple select 
//     isActive?: boolean; // checkbox
//     toggle?: string; // checkbox toggle either 'toggled' or 'untoggled'
// }
// // theme.interface.ts
// export interface Theme {
//     display: string;
//     backgroundColor: string;
//     fontColor: string;
// }
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_component__ = __webpack_require__(379);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__login_component__["a" /* LoginComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=login-routing.js.map

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, "/*\n\nh2 {\n  color: #ffffff;\n}\n\n.tems-and-conditions {\n  font-size: 9px;\n}*/\n.form-login {\n    max-width: 420px;\n    padding: 25px;\n    margin: 0 auto;\n}\n.margin-container {\n    margin-top: 80px;\n}\n/*\n.card {\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n    border-radius: 3px;\n    color: rgba(0,0,0, 0.87);\n    background: #fff;\n}\n\n.card .card-header {\n    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n    margin: -20px 15px 0;\n    border-radius: 3px;\n    padding: 15px;\n    background-color: #00BCD4;\n}\n\n.card .card-content {\n    padding: 15px 20px;\n}\n\n.card [data-background-color] {\n    color: #FFFFFF;\n}\n\n.card [data-background-color=\"purple\"] {\n    background: linear-gradient(60deg, #ab47bc, #8e24aa);\n    box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}*/\n\n\n.styles__main {\n    background: #1488c6;\n}\n\n.styles__container {\n    \n}\n\n.styles__wrapper {\n    width: 360px;\n    margin: 0 auto;\n    padding-top: 120px;\n    height: 100%;\n    position: relative;\n}\n\n.styles__banner {\n    text-align: center;\n    margin-bottom: 48px;\n}\n\n.styles__form {\n    margin-bottom: 48px;\n}\n\n.loginForm__main {\n    content: \" \";\n    display: table;\n}\n\n.styles__more {\n    width: 100%;\n}\n\n\n\n\n\n.form-signin {\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n.form-signin .form-signin-heading, .form-signin .checkbox {\n    margin-bottom: 10px;\n}\n\n\n\n.form-signin input[type=\"email\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.login_container_style {\n    margin-top: 6rem;\n}\n\n.login_title_style{\n    text-align: center;\n    color: #f15b6d;\n    margin-bottom: 2rem;\n}\n.login_submit_style {\n    text-align:right;\n}\n\n.login_process_style {\n    text-align:center;\n    color: #f15b6d;\n}\n\n.radio_button_roles_style {\n    color: #bdbdc7;\n    margin: 10px;\n}\n\n.login_type_rol_style {\n    color: #e91f63;\n    \n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

module.exports = "<!-- <nav id=\"topNav\" class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n      <button class=\"navbar-toggler hidden-md-up pull-right\"\n        type=\"button\" data-toggle=\"collapse\"\n        data-target=\"#collapsingNavbar\">\n            ☰\n      </button>\n      <a class=\"navbar-brand page-scroll\" routerLink=\"./\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Gaitcome</a>\n    </div>\n</nav> -->\n\n<!-- \n<div class=\"margin-container\">\n  <div class=\"container wow fadeInUp\" style=\"visibility: hidden; animation-name: none;\">\n    <div class=\"form-login text-xs-center\">\n      <div class=\"card col-xs-12 col-sm-6 col-md-8\">\n\n        <div class=\"card-header\" data-background-color=\"red\">\n          <h5 class=\"title\">Ingrese</h5>\n          <p class=\"category\">Gaitcome</p>\n        </div>\n\n        <div class=\"card-content\">\n          <form [formGroup]=\"form\" class=\"card-group\">\n            <p>\n              <mdl-textfield label=\"Usuario\" name=\"username\"\n                type=\"text\" formControlName=\"username\"\n                floating-label></mdl-textfield>\n            </p>\n\n            <p>\n              <mdl-textfield  label=\"Contraseña\" \n                              name=\"password\"\n                type=\"password\" formControlName=\"password\"\n                floating-label></mdl-textfield>\n            </p>\n\n\n\n            <p >\n\n              <mdl-radio \n                  *ngFor=\"let login_type of login_types\"  \n                                      name=\"login_type\" value={{login_type.value}}\n                                      formControlName=\"login_type\"\n                                      mdl-ripple>{{login_type.display}}</mdl-radio>\n\n            </p>\n\n              <p class=\"mdl-color-text--primary\">{{statusMessage}}</p>\n              <mdl-spinner single-color [active]=\"processingLogin\"></mdl-spinner>\n\n\n            <p>\n              <button mdl-button (click)=\"login()\" [disabled]=\"!form.valid\"\n                mdl-button-type=\"raised\" mdl-ripple\n                mdl-colored=\"primary\">Ingresar</button>\n            </p>\n          </form>\n\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n -->\n<div class=\"container wow fadeInUp\" style=\"visibility: hidden; animation-name: none;\">\n  <div class=\"login_container_style\">\n    <form [formGroup]=\"form\" class=\"form-signin\">\n      <div class=\"mdl-color-text--primary login_title_style\">Gaitcome</div>\n\n      <!-- <h4>Sign in</h4> -->\n\n      <div>\n        <mdl-textfield label=\"Usuario\" name=\"username\"\n          type=\"text\" formControlName=\"username\"\n          floating-label></mdl-textfield>\n      </div>\n\n      <div>\n        <mdl-textfield  label=\"Contraseña\" \n                        name=\"password\"\n          type=\"password\" formControlName=\"password\"\n          floating-label></mdl-textfield>\n      </div>\n\n      <h6 class=\"login_type_rol_style\">Sing in as: </h6>\n\n      <div>\n        <mdl-radio  *ngFor=\"let login_type of login_types\"  \n                    name=\"login_type\" value={{login_type.value}}\n                    formControlName=\"login_type\"\n                    mdl-ripple\n                    class=\"radio_button_roles_style\">{{login_type.display}}</mdl-radio>\n      </div>\n\n      <div class=\"login_process_style\">\n        <mdl-spinner single-color [active]=\"processingLogin\"></mdl-spinner>\n        <h6>{{statusMessage}}</h6>\n      </div>\n\n      <div class=\"login_submit_style\">\n        <button  mdl-button (click)=\"login()\" [disabled]=\"!form.valid\"\n          mdl-button-type=\"raised\" mdl-ripple\n          mdl-colored=\"primary\">Ingresar</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n\n\n"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map