webpackJsonp([7,11],{

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoggedIn = false;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthService.prototype.login = function (username, password, login_type) {
        var _this = this;
        // add authorization header with jwt token
        // candidate to be a added to share folder
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ username: username,
            password: password,
            login_type: login_type });
        // console.log(`AuthService_login()_body : ${body}` );
        return this.http.post('/api/authenticate', body, options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                // console.log(`AuthService_Token : ${token}`);
                // store username login_type and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username,
                    login_type: login_type,
                    token: token,
                    entity: response.json().entity
                }));
                _this.isLoggedIn = true;
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        // console.log(`auth-guard.service.url : ${url}`);
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        var localStorage_login_type = JSON.parse(localStorage.getItem('currentUser')).login_type;
        console.log("auth-guard.service isLoggedIn : " + this.authService.isLoggedIn);
        if (this.authService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // console.log(`this.authService.redirectUrl : ${this.authService.redirectUrl}`);
        // Create a dummy session id
        var sessionId = 123456789;
        // Set our navigation extras object
        // that contains our global query params and fragment
        var navigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };
        // Navigate to the login page with extras
        // this.router.navigate(['/login'], navigationExtras);
        this.router.navigate(['/login'], navigationExtras);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagesComponent = (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    return PagesComponent;
}());
PagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pages',
        template: __webpack_require__(324),
        styles: [__webpack_require__(315)]
    }),
    __metadata("design:paramtypes", [])
], PagesComponent);

//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/pages/dashboard-attorney/dashboard-attorney.module": [
		363,
		5
	],
	"app/pages/dashboard-medical-center/dashboard-medical-center.module": [
		364,
		0
	],
	"app/pages/dashboard-therapist/dashboard-therapist.module": [
		365,
		4
	],
	"app/pages/homepage/homepage.module": [
		366,
		3
	],
	"app/pages/login/login.module": [
		367,
		2
	],
	"app/pages/register/register.module": [
		368,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 276;


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(306);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    URL_WEB_SERVICE_ANALYSIS: 'http://localhost:8080/api/kinematics_analysis/',
    URL_WEB_SERVICE_THERAPISTS: 'http://localhost:8080/api/therapists/',
    URL_WEB_SERVICE_PATIENTS: 'http://localhost:8080/api/pacients/',
    URL_WEB_SERVICE_KINEMATIC_ANALYSIS: 'http://localhost:8080/api/kinematics_analysis/',
    URL_WEB_SERVICE_KINEMATIC_ANALYSIS_MATLAB: 'http://localhost:8080/api/kinematics_analysis_matlab/',
    medical_center_id: '591e7542583a7b2b751d4ec3',
    medical_center_name: 'Cerene',
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Im1lZGljYWxDZW50ZXJzLnJlcXVlc3RlZF9hdCI6ImRlZmF1bHQiLCJfX3YiOiJpbml0IiwiYWRkcmVzcy5jb3VudHJ5IjoiaW5pdCIsImFkZHJlc3MuemlwIjoiaW5pdCIsImFkZHJlc3Muc3RhdGUiOiJpbml0IiwiYWRkcmVzcy5jaXR5IjoiaW5pdCIsImFkZHJlc3Muc3RyZWV0IjoiaW5pdCIsIm1lZGljYWxDZW50ZXJzLmFjY2VwdGVkX2F0IjoiaW5pdCIsIm1lZGljYWxDZW50ZXJzLnN0YXR1c19yZXF1ZXN0IjoiaW5pdCIsIm1lZGljYWxDZW50ZXJzLm5hbWUiOiJpbml0IiwibWVkaWNhbENlbnRlcnMuX2lkIjoiaW5pdCIsIm5hbWVzIjoiaW5pdCIsImdlbmRlciI6ImluaXQiLCJpZF9Eb2N1bWVudF90eXBlIjoiaW5pdCIsImlkX0RvY3VtZW50X251bSI6ImluaXQiLCJiaXJ0aCI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJwaG9uZSI6ImluaXQiLCJjZWxscGhvbmUiOiJpbml0IiwibnVtX2N0bXAiOiJpbml0IiwibnVtX25kdGEiOiJpbml0IiwiaXNfYWN0aXZlIjoiaW5pdCIsInVzZXJuYW1lIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnsibWVkaWNhbENlbnRlcnMucmVxdWVzdGVkX2F0Ijp0cnVlfSwiaW5pdCI6eyJfX3YiOnRydWUsImFkZHJlc3MuY291bnRyeSI6dHJ1ZSwiYWRkcmVzcy56aXAiOnRydWUsImFkZHJlc3Muc3RhdGUiOnRydWUsImFkZHJlc3MuY2l0eSI6dHJ1ZSwiYWRkcmVzcy5zdHJlZXQiOnRydWUsIm1lZGljYWxDZW50ZXJzLmFjY2VwdGVkX2F0Ijp0cnVlLCJtZWRpY2FsQ2VudGVycy5zdGF0dXNfcmVxdWVzdCI6dHJ1ZSwibWVkaWNhbENlbnRlcnMubmFtZSI6dHJ1ZSwibWVkaWNhbENlbnRlcnMuX2lkIjp0cnVlLCJuYW1lcyI6dHJ1ZSwiZ2VuZGVyIjp0cnVlLCJpZF9Eb2N1bWVudF90eXBlIjp0cnVlLCJpZF9Eb2N1bWVudF9udW0iOnRydWUsImJpcnRoIjp0cnVlLCJlbWFpbCI6dHJ1ZSwicGhvbmUiOnRydWUsImNlbGxwaG9uZSI6dHJ1ZSwibnVtX2N0bXAiOnRydWUsIm51bV9uZHRhIjp0cnVlLCJpc19hY3RpdmUiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7ImFkZHJlc3MiOnsiY291bnRyeSI6IlBlcnUiLCJ6aXAiOjQ1NzY0NSwic3RhdGUiOiJMaW1hIiwiY2l0eSI6IkxpbWEiLCJzdHJlZXQiOiJDYWxsZSBBbGFtZWRhIFNhbnRvcyAzNDQgRHB0byAzMDQifSwibWVkaWNhbENlbnRlcnMiOnsicmVxdWVzdGVkX2F0IjoiMjAxNi0xMi0xNVQwMTo1Mzo0Mi4xMzJaIiwiYWNjZXB0ZWRfYXQiOiIyMDE2LTExLTIwVDA0OjE5OjEzLjAwMFoiLCJzdGF0dXNfcmVxdWVzdCI6IjEiLCJuYW1lIjoiTHVpcyBNYW51ZWwiLCJfaWQiOiIzNDU2Nzg5MDQ1NjU4NDhmcjVnciJ9LCJfX3YiOjAsIm5hbWVzIjoiSG9ydGVuY2lhIiwiZ2VuZGVyIjoiNCIsImlkX0RvY3VtZW50X3R5cGUiOiJETkkiLCJpZF9Eb2N1bWVudF9udW0iOjEyMzQ1Njc4LCJiaXJ0aCI6IjIwMTYtMTEtMjBUMDQ6MTk6MTMuMDAwWiIsImVtYWlsIjoibWFudWVsQGdtYWlsLmNvbSIsInBob25lIjoiMjM0IDU0IDEzIiwiY2VsbHBob25lIjoiOTk5IDk5OSA5OTkiLCJudW1fY3RtcCI6NjU0MiwibnVtX25kdGEiOjU0NTM0NTQzLCJpc19hY3RpdmUiOmZhbHNlLCJ1c2VybmFtZSI6InRlcmFwZXV0YSIsInBhc3N3b3JkIjoiYWRtaW4iLCJfaWQiOiI1ODUxZjYwMTczZGMxMTA3MmEwYTFhOTIifSwiX3ByZXMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W251bGwsbnVsbF0sIiRfX29yaWdpbmFsX3ZhbGlkYXRlIjpbbnVsbF0sIiRfX29yaWdpbmFsX3JlbW92ZSI6W251bGxdfSwiX3Bvc3RzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltdLCIkX19vcmlnaW5hbF92YWxpZGF0ZSI6W10sIiRfX29yaWdpbmFsX3JlbW92ZSI6W119LCJpYXQiOjE0ODE3NjY4MjJ9.xDNN-rILCYc5vqVJzpLn3DIqOqMMPTEBuYHgvISoHPw",
    therapistList: [
        {
            "_id": "5851f60173dc11072a0a1a92",
            "password": "admin",
            "username": "terapeuta",
            "is_active": false,
            "num_ndta": 54534543,
            "num_ctmp": 6542,
            "cellphone": "999 999 999",
            "phone": "234 54 13",
            "email": "manuel@gmail.com",
            "birth": "2016-11-20T04:19:13.000Z",
            "id_Document_num": 12345678,
            "id_Document_type": "DNI",
            "gender": "4",
            "names": "Hortencia",
            "__v": 0,
            "medicalCenters": {
                "_id": "345678904565848fr5gr",
                "name": "Luis Manuel",
                "status_request": "1",
                "accepted_at": "2016-11-20T04:19:13.000Z",
                "requested_at": "2017-05-31T02:20:03.858Z"
            },
            "address": {
                "street": "Calle Alameda Santos 344 Dpto 304",
                "city": "Lima",
                "state": "Lima",
                "zip": 457645,
                "country": "Peru"
            }
        },
        {
            "_id": "58bba193a148e93637c2a840",
            "password": "admin",
            "username": "terapeuta",
            "is_active": false,
            "num_ndta": 54534543,
            "num_ctmp": 6542,
            "cellphone": "999 999 999",
            "phone": "234 54 13",
            "email": "manuel@gmail.com",
            "birth": "2016-11-20T04:19:13.000Z",
            "id_Document_num": 12345678,
            "id_Document_type": "DNI",
            "gender": "4",
            "names": "roman",
            "__v": 0,
            "medicalCenters": {
                "_id": "345678904565848fr5gr",
                "name": "Luis Manuel",
                "status_request": "1",
                "accepted_at": "2016-11-20T04:19:13.000Z",
                "requested_at": "2017-05-31T02:20:03.863Z"
            },
            "address": {
                "street": "Calle Alameda Santos 344 Dpto 304",
                "city": "Lima",
                "state": "Lima",
                "zip": 457645,
                "country": "Peru"
            }
        },
        {
            "_id": "591e7447583a7b2b751d4ec2",
            "password": "admin",
            "username": "Pichirilo terapeuta",
            "is_active": false,
            "num_ndta": 54534543,
            "num_ctmp": 6542,
            "cellphone": "999 999 999",
            "phone": "234 54 13",
            "email": "pichirilo@gmail.com",
            "birth": "2016-11-20T04:19:13.000Z",
            "id_Document_num": 12345678,
            "id_Document_type": "DNI",
            "gender": "3",
            "names": "Pichirilo",
            "__v": 0,
            "medicalCenters": {
                "_id": "345678904565848fr5gr",
                "name": "Luis Manuel",
                "status_request": "1",
                "accepted_at": "2016-11-20T04:19:13.000Z",
                "requested_at": "2017-05-31T02:20:03.867Z"
            },
            "address": {
                "street": "Calle Alameda Santos 344 Dpto 304",
                "city": "Lima",
                "state": "Lima",
                "zip": 457645,
                "country": "Peru"
            }
        },
        {
            "_id": "591f03510a88ba3158605314",
            "password": "admin",
            "username": "Pichirilo terapeuta",
            "is_active": false,
            "num_ndta": 54534543,
            "num_ctmp": 6542,
            "cellphone": "999 999 999",
            "phone": "234 54 13",
            "email": "vanessa@gmail.com",
            "birth": "2016-11-20T04:19:13.000Z",
            "id_Document_num": 12345678,
            "id_Document_type": "DNI",
            "gender": "3",
            "names": "Vanessa",
            "__v": 0,
            "medicalCenters": {
                "_id": "345678904565848fr5gr",
                "name": "Manuel torres",
                "status_request": "1",
                "accepted_at": "2016-11-20T04:19:13.000Z",
                "requested_at": "2017-05-31T02:20:03.868Z"
            },
            "address": {
                "street": "Calle Alameda Santos 344 Dpto 304",
                "city": "Lima",
                "state": "Lima",
                "zip": 457645,
                "country": "Peru"
            }
        }
    ],
    resultList: [
        { "_id": "59ac8a13238ae337300fcc1f", "tp_hip_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Hip Rotation [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Int" }, "max": 30, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 3.606557377, -8.852459016], [2.941176471, 2.62295082, -7.540983607], [5.882352941, 2.62295082, -5.901639344], [8.823529412, 4.918032787, -4.590163934], [11.76470588, 7.540983607, -2.950819672], [14.70588235, 8.852459016, -2.950819672], [17.64705882, 9.180327869, -2.62295082], [20.58823529, 8.852459016, -2.295081967], [23.52941176, 8.852459016, -1.31147541], [26.47058824, 9.180327869, -0.9836065574], [29.41176471, 10.16393443, -1.31147541], [32.35294118, 11.14754098, -0.6557377049], [35.29411765, 12.13114754, 0.9836065574], [38.23529412, 14.09836066, 1.967213115], [41.17647059, 15.40983607, 2.295081967], [44.11764706, 15.73770492, 1.967213115], [47.05882353, 14.42622951, 1.31147541], [50, 13.7704918, 0.3278688525], [52.94117647, 13.1147541, -0.9836065574], [55.88235294, 11.80327869, -2.950819672], [58.82352941, 9.508196721, -4.918032787], [61.76470588, 7.868852459, -6.557377049], [64.70588235, 6.229508197, -7.540983607], [67.64705882, 4.262295082, -8.196721311], [70.58823529, 2.62295082, -8.196721311], [73.52941176, 0.6557377049, -7.868852459], [76.47058824, 0.3278688525, -7.540983607], [79.41176471, -0.3278688525, -6.885245902], [82.35294118, 0.3278688525, -5.245901639], [85.29411765, 0.6557377049, -4.262295082], [88.23529412, 2.295081967, -4.262295082], [91.17647059, 3.278688525, -5.573770492], [94.11764706, 4.262295082, -6.885245902], [97.05882353, 4.918032787, -8.196721311], [100, 4.590163934, -7.540983607]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "tp_plv_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Pelvic Rotation [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Int" }, "max": 30, "min": 30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 7.252747253, 0.3296703297], [2.941176471, 6.923076923, 0.3296703297], [5.882352941, 5.934065934, 0.3296703297], [8.823529412, 4.945054945, -0.6593406593], [11.76470588, 3.956043956, -1.318681319], [14.70588235, 3.956043956, -0.989010989], [17.64705882, 4.285714286, -0.3296703297], [20.58823529, 4.615384615, 0.3296703297], [23.52941176, 4.945054945, 0.3296703297], [26.47058824, 4.945054945, 0.3296703297], [29.41176471, 4.615384615, -0.3296703297], [32.35294118, 3.956043956, -0.989010989], [35.29411765, 3.296703297, -1.318681319], [38.23529412, 2.307692308, -2.637362637], [41.17647059, 0.6593406593, -2.967032967], [44.11764706, -1.318681319, -4.285714286], [47.05882353, -1.978021978, -4.945054945], [50, -2.307692308, -5.274725275], [52.94117647, -1.978021978, -5.274725275], [55.88235294, -0.989010989, -4.945054945], [58.82352941, 0.3296703297, -4.615384615], [61.76470588, 1.648351648, -4.615384615], [64.70588235, 2.307692308, -4.615384615], [67.64705882, 1.318681319, -4.945054945], [70.58823529, 0.989010989, -4.945054945], [73.52941176, 1.318681319, -5.274725275], [76.47058824, 1.318681319, -4.615384615], [79.41176471, 1.648351648, -3.956043956], [82.35294118, 1.978021978, -3.626373626], [85.29411765, 2.637362637, -3.296703297], [88.23529412, 3.626373626, -2.967032967], [91.17647059, 4.615384615, -2.307692308], [94.11764706, 5.934065934, -1.318681319], [97.05882353, 6.923076923, -0.3296703297], [100, 7.252747253, 0.3296703297]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "tp_ank_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Foot Progression Angle [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Int" }, "max": 40, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, -9.065934066, -20.6043956], [2.941176471, -9.065934066, -20.19230769], [5.882352941, -9.478021978, -19.78021978], [8.823529412, -10.3021978, -19.78021978], [11.76470588, -11.53846154, -19.36813187], [14.70588235, -11.95054945, -18.95604396], [17.64705882, -11.53846154, -18.54395604], [20.58823529, -11.12637363, -17.71978022], [23.52941176, -10.3021978, -17.30769231], [26.47058824, -9.89010989, -16.48351648], [29.41176471, -9.065934066, -16.07142857], [32.35294118, -8.653846154, -15.65934066], [35.29411765, -8.241758242, -16.07142857], [38.23529412, -9.478021978, -16.48351648], [41.17647059, -10.3021978, -17.30769231], [44.11764706, -10.3021978, -17.71978022], [47.05882353, -9.89010989, -18.13186813], [50, -9.065934066, -18.13186813], [52.94117647, -8.241758242, -17.30769231], [55.88235294, -7.417582418, -16.48351648], [58.82352941, -6.593406593, -17.30769231], [61.76470588, -4.532967033, -20.19230769], [64.70588235, -2.884615385, -25.13736264], [67.64705882, -4.532967033, -28.84615385], [70.58823529, -6.181318681, -30.08241758], [73.52941176, -7.005494505, -30.08241758], [76.47058824, -7.82967033, -30.08241758], [79.41176471, -9.065934066, -30.08241758], [82.35294118, -11.95054945, -30.08241758], [85.29411765, -14.42307692, -30.08241758], [88.23529412, -14.83516484, -28.43406593], [91.17647059, -11.53846154, -25.54945055], [94.11764706, -9.065934066, -22.66483516], [97.05882353, -8.241758242, -20.6043956], [100, -8.241758242, -20.6043956]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "tp_kne_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Keen Rotation [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Int" }, "max": 40, "min": -40 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, -16.61202186, -27.54098361], [2.941176471, -15.73770492, -28.41530055], [5.882352941, -14.86338798, -28.85245902], [8.823529412, -13.1147541, -28.41530055], [11.76470588, -10.92896175, -26.66666667], [14.70588235, -10.92896175, -26.2295082], [17.64705882, -11.80327869, -27.97814208], [20.58823529, -12.24043716, -29.28961749], [23.52941176, -11.80327869, -29.28961749], [26.47058824, -10.49180328, -28.41530055], [29.41176471, -10.92896175, -28.85245902], [32.35294118, -11.80327869, -28.85245902], [35.29411765, -12.24043716, -28.85245902], [38.23529412, -13.1147541, -28.85245902], [41.17647059, -13.1147541, -29.28961749], [44.11764706, -12.67759563, -29.28961749], [47.05882353, -11.80327869, -28.41530055], [50, -10.49180328, -27.54098361], [52.94117647, -10.05464481, -27.10382514], [55.88235294, -10.92896175, -28.41530055], [58.82352941, -13.55191257, -31.03825137], [61.76470588, -14.42622951, -32.34972678], [64.70588235, -13.1147541, -32.34972678], [67.64705882, -9.180327869, -31.47540984], [70.58823529, -6.120218579, -31.03825137], [73.52941176, -5.245901639, -30.16393443], [76.47058824, -6.994535519, -29.28961749], [79.41176471, -8.743169399, -28.85245902], [82.35294118, -10.92896175, -30.16393443], [85.29411765, -14.86338798, -32.34972678], [88.23529412, -17.92349727, -32.78688525], [91.17647059, -21.42076503, -31.91256831], [94.11764706, -20.98360656, -28.85245902], [97.05882353, -19.67213115, -27.10382514], [100, -19.23497268, -27.10382514]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "fp_hip_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Hip Ad/Abduktion [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Abd / Add" }, "max": 30, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 6.885245902, 2.950819672], [2.941176471, 7.868852459, 4.262295082], [5.882352941, 9.836065574, 6.557377049], [8.823529412, 12.45901639, 8.852459016], [11.76470588, 14.75409836, 10.81967213], [14.70588235, 16.39344262, 12.13114754], [17.64705882, 16.39344262, 11.80327869], [20.58823529, 15.40983607, 10.49180328], [23.52941176, 14.75409836, 9.508196721], [26.47058824, 14.09836066, 8.852459016], [29.41176471, 13.44262295, 8.196721311], [32.35294118, 12.78688525, 8.196721311], [35.29411765, 12.13114754, 8.196721311], [38.23529412, 11.47540984, 8.196721311], [41.17647059, 11.47540984, 8.196721311], [44.11764706, 11.14754098, 7.540983607], [47.05882353, 11.47540984, 6.885245902], [50, 10.49180328, 5.901639344], [52.94117647, 9.508196721, 4.262295082], [55.88235294, 8.524590164, 1.967213115], [58.82352941, 5.901639344, -1.31147541], [61.76470588, 3.606557377, -3.93442623], [64.70588235, 1.31147541, -5.901639344], [67.64705882, 0.9836065574, -4.918032787], [70.58823529, 1.639344262, -3.93442623], [73.52941176, 2.950819672, -2.62295082], [76.47058824, 3.93442623, -1.639344262], [79.41176471, 4.262295082, -1.31147541], [82.35294118, 4.590163934, -0.6557377049], [85.29411765, 5.245901639, 0.6557377049], [88.23529412, 5.573770492, 0.9836065574], [91.17647059, 5.901639344, 0.9836065574], [94.11764706, 5.901639344, 0.6557377049], [97.05882353, 6.229508197, 0.6557377049], [100, 7.540983607, 1.639344262]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "fp_plv_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Pelvic Obliquity [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Down / Up" }, "max": 15, "min": -15 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 2.295081967, 0.4918032787], [2.941176471, 2.786885246, 0.8196721311], [5.882352941, 3.770491803, 1.475409836], [8.823529412, 5.245901639, 2.459016393], [11.76470588, 6.557377049, 3.606557377], [14.70588235, 7.37704918, 4.590163934], [17.64705882, 7.049180328, 4.426229508], [20.58823529, 6.229508197, 3.442622951], [23.52941176, 5.409836066, 2.295081967], [26.47058824, 4.262295082, 1.147540984], [29.41176471, 2.950819672, 0.3278688525], [32.35294118, 1.803278689, -0.3278688525], [35.29411765, 0.8196721311, -0.9836065574], [38.23529412, 0.1639344262, -1.147540984], [41.17647059, -0.1639344262, -1.147540984], [44.11764706, -0.1639344262, -1.147540984], [47.05882353, -0.1639344262, -0.9836065574], [50, -0.3278688525, -1.147540984], [52.94117647, -0.8196721311, -1.967213115], [55.88235294, -1.31147541, -3.278688525], [58.82352941, -2.131147541, -4.918032787], [61.76470588, -2.950819672, -6.393442623], [64.70588235, -3.770491803, -7.049180328], [67.64705882, -3.442622951, -6.885245902], [70.58823529, -2.62295082, -6.229508197], [73.52941176, -1.475409836, -5.081967213], [76.47058824, -0.4918032787, -3.770491803], [79.41176471, 0.1639344262, -2.62295082], [82.35294118, 0.4918032787, -1.639344262], [85.29411765, 1.147540984, -0.9836065574], [88.23529412, 1.639344262, -0.6557377049], [91.17647059, 1.639344262, -0.3278688525], [94.11764706, 1.475409836, -0.1639344262], [97.05882353, 1.475409836, 0.1639344262], [100, 2.295081967, 0.6557377049]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "fp_ank_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Fo0t Varus/Valgous [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Valg / Var" }, "max": 30, "min": -5 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 3.387096774, -1.451612903], [2.857142857, 3.064516129, -1.774193548], [5.714285714, 2.580645161, -2.419354839], [8.571428571, 2.258064516, -2.741935484], [11.42857143, 2.096774194, -2.903225806], [14.28571429, 2.096774194, -3.064516129], [17.14285714, 2.258064516, -3.064516129], [20, 2.741935484, -3.064516129], [22.85714286, 2.903225806, -3.225806452], [25.71428571, 3.064516129, -3.225806452], [28.57142857, 3.064516129, -3.548387097], [31.42857143, 2.903225806, -3.387096774], [34.28571429, 3.064516129, -3.709677419], [37.14285714, 3.225806452, -3.709677419], [40, 3.225806452, -4.032258065], [42.85714286, 3.548387097, -4.193548387], [45.71428571, 3.870967742, -3.870967742], [48.57142857, 4.35483871, -3.709677419], [51.42857143, 4.516129032, -3.709677419], [54.28571429, 3.870967742, -3.548387097], [57.14285714, 2.580645161, -3.064516129], [60, 1.129032258, -4.193548387], [62.85714286, 0.3225806452, -5.806451613], [65.71428571, 0.8064516129, -5.967741935], [68.57142857, 1.451612903, -4.193548387], [71.42857143, 2.096774194, -3.064516129], [74.28571429, 2.580645161, -2.419354839], [77.14285714, 3.225806452, -2.258064516], [80, 3.548387097, -1.774193548], [82.85714286, 3.225806452, -1.290322581], [85.71428571, 2.741935484, -1.129032258], [88.57142857, 2.903225806, -1.290322581], [91.42857143, 3.870967742, -1.451612903], [94.28571429, 4.35483871, -1.290322581], [97.14285714, 4.35483871, -0.9677419355], [100, 4.032258065, -0.8064516129]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "fp_kne_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Keen Varus/Valgus [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Valg / Var" }, "max": 15, "min": -15 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, -1.967213115, -8.852459016], [2.941176471, -2.295081967, -9.508196721], [5.882352941, -2.131147541, -10], [8.823529412, -1.475409836, -9.180327869], [11.76470588, -0.6557377049, -8.032786885], [14.70588235, 0.1639344262, -6.557377049], [17.64705882, -0.3278688525, -5.901639344], [20.58823529, -0.8196721311, -5.409836066], [23.52941176, -0.8196721311, -6.06557377], [26.47058824, -1.147540984, -6.885245902], [29.41176471, -1.639344262, -8.032786885], [32.35294118, -2.131147541, -8.68852459], [35.29411765, -2.786885246, -9.180327869], [38.23529412, -3.114754098, -9.344262295], [41.17647059, -3.114754098, -9.344262295], [44.11764706, -3.278688525, -9.508196721], [47.05882353, -3.278688525, -9.672131148], [50, -3.114754098, -9.672131148], [52.94117647, -2.295081967, -9.672131148], [55.88235294, -1.31147541, -8.68852459], [58.82352941, -0.1639344262, -7.049180328], [61.76470588, 1.31147541, -5.737704918], [64.70588235, 2.295081967, -5.573770492], [67.64705882, 1.803278689, -7.213114754], [70.58823529, 1.147540984, -9.016393443], [73.52941176, 0.8196721311, -9.672131148], [76.47058824, 1.31147541, -8.852459016], [79.41176471, 1.967213115, -7.213114754], [82.35294118, 1.967213115, -5.409836066], [85.29411765, 1.639344262, -4.098360656], [88.23529412, 0.9836065574, -3.93442623], [91.17647059, -0.1639344262, -5.573770492], [94.11764706, -0.9836065574, -8.032786885], [97.05882353, -1.147540984, -10.32786885], [100, -1.147540984, -11.14754098]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "sp_hip_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Hip Flex/Ext [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Flex" }, "max": 60, "min": -20 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 42.40437158, 27.97814208], [2.941176471, 43.27868852, 27.54098361], [5.882352941, 44.15300546, 27.54098361], [8.823529412, 42.84153005, 26.66666667], [11.76470588, 39.78142077, 24.91803279], [14.70588235, 36.72131148, 22.73224044], [17.64705882, 31.91256831, 20.10928962], [20.58823529, 27.54098361, 15.73770492], [23.52941176, 22.73224044, 12.24043716], [26.47058824, 18.36065574, 7.868852459], [29.41176471, 13.55191257, 3.93442623], [32.35294118, 8.743169399, 0.4371584699], [35.29411765, 4.371584699, -3.93442623], [38.23529412, 0.8743169399, -7.431693989], [41.17647059, -2.62295082, -10.49180328], [44.11764706, -5.245901639, -13.98907104], [47.05882353, -6.994535519, -16.61202186], [50, -8.306010929, -17.92349727], [52.94117647, -8.743169399, -17.92349727], [55.88235294, -8.306010929, -17.4863388], [58.82352941, -4.808743169, -14.86338798], [61.76470588, -0.8743169399, -10.49180328], [64.70588235, 5.245901639, -4.371584699], [67.64705882, 11.80327869, 3.49726776], [70.58823529, 19.23497268, 10.05464481], [73.52941176, 26.2295082, 15.73770492], [76.47058824, 33.22404372, 20.98360656], [79.41176471, 38.90710383, 24.91803279], [82.35294118, 43.27868852, 28.41530055], [85.29411765, 45.46448087, 30.16393443], [88.23529412, 46.33879781, 30.6010929], [91.17647059, 45.0273224, 29.28961749], [94.11764706, 44.15300546, 28.41530055], [97.05882353, 42.40437158, 27.97814208], [100, 41.96721311, 27.97814208]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "sp_plv_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Pelvic Tilt [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Post / Ant" }, "max": 30, "min": -5 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 14.72677596, 3.825136612], [3.03030303, 15.10928962, 3.825136612], [6.060606061, 15.30054645, 3.825136612], [9.090909091, 15.30054645, 4.016393443], [12.12121212, 14.72677596, 4.207650273], [15.15151515, 14.53551913, 4.398907104], [18.18181818, 14.3442623, 4.590163934], [21.21212121, 13.96174863, 4.781420765], [24.24242424, 13.96174863, 5.163934426], [27.27272727, 14.15300546, 5.546448087], [30.3030303, 13.96174863, 5.737704918], [33.33333333, 13.7704918, 5.928961749], [36.36363636, 13.7704918, 6.120218579], [39.39393939, 13.57923497, 6.120218579], [42.42424242, 13.57923497, 5.928961749], [45.45454545, 13.96174863, 5.546448087], [48.48484848, 14.3442623, 5.163934426], [51.51515152, 14.3442623, 4.972677596], [54.54545455, 14.15300546, 4.781420765], [57.57575758, 13.96174863, 4.590163934], [60.60606061, 13.19672131, 4.207650273], [63.63636364, 12.81420765, 4.016393443], [66.66666667, 13.00546448, 4.016393443], [69.6969697, 13.00546448, 4.016393443], [72.72727273, 13.38797814, 4.207650273], [75.75757576, 13.7704918, 4.590163934], [78.78787879, 14.15300546, 4.781420765], [81.81818182, 14.15300546, 4.972677596], [84.84848485, 14.15300546, 5.163934426], [87.87878788, 14.3442623, 5.355191257], [90.90909091, 14.3442623, 5.163934426], [93.93939394, 14.15300546, 4.972677596], [96.96969697, 14.15300546, 4.781420765], [100, 14.53551913, 4.207650273]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "sp_ank_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Ankle Plant/DorsiFlex [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Plant / Dors" }, "max": 35, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 6.639784946, 0.3494623656], [2.941176471, 4.193548387, -2.446236559], [5.882352941, 1.397849462, -4.193548387], [8.823529412, -0.3494623656, -4.193548387], [11.76470588, 1.048387097, -1.747311828], [14.70588235, 3.494623656, 1.048387097], [17.64705882, 6.290322581, 3.14516129], [20.58823529, 8.037634409, 4.892473118], [23.52941176, 9.784946237, 5.940860215], [26.47058824, 10.83333333, 6.989247312], [29.41176471, 11.88172043, 6.989247312], [32.35294118, 12.2311828, 7.338709677], [35.29411765, 12.58064516, 7.338709677], [38.23529412, 13.97849462, 7.688172043], [41.17647059, 15.37634409, 8.037634409], [44.11764706, 16.77419355, 7.688172043], [47.05882353, 17.12365591, 6.989247312], [50, 16.77419355, 5.241935484], [52.94117647, 14.32795699, 2.446236559], [55.88235294, 9.435483871, -2.096774194], [58.82352941, 2.096774194, -8.387096774], [61.76470588, -5.940860215, -15.37634409], [64.70588235, -9.086021505, -20.2688172], [67.64705882, -6.989247312, -20.61827957], [70.58823529, -3.14516129, -16.42473118], [73.52941176, 1.397849462, -9.086021505], [76.47058824, 5.591397849, -3.844086022], [79.41176471, 8.73655914, 1.048387097], [82.35294118, 10.48387097, 4.193548387], [85.29411765, 11.1827957, 5.591397849], [88.23529412, 10.83333333, 5.940860215], [91.17647059, 9.435483871, 4.543010753], [94.11764706, 8.037634409, 1.747311828], [97.05882353, 7.338709677, 0.6989247312], [100, 5.940860215, 0.6989247312]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "sp_kne_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Keen Flex/Ext [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Flex" }, "max": 90, "min": -20 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 10.21857923, 5.409836066], [2.941176471, 13.22404372, 9.016393443], [5.882352941, 18.63387978, 12.62295082], [8.823529412, 23.44262295, 15.6284153], [11.76470588, 25.84699454, 18.03278689], [14.70588235, 26.44808743, 19.23497268], [17.64705882, 24.64480874, 18.03278689], [20.58823529, 22.24043716, 14.42622951], [23.52941176, 19.23497268, 13.22404372], [26.47058824, 16.83060109, 10.81967213], [29.41176471, 12.62295082, 7.213114754], [32.35294118, 9.617486339, 4.207650273], [35.29411765, 7.81420765, 1.803278689], [38.23529412, 6.612021858, 0.6010928962], [41.17647059, 6.612021858, 0.6010928962], [44.11764706, 7.213114754, 0.6010928962], [47.05882353, 9.016393443, 1.202185792], [50, 12.02185792, 3.606557377], [52.94117647, 16.2295082, 7.81420765], [55.88235294, 23.44262295, 14.42622951], [58.82352941, 31.8579235, 22.24043716], [61.76470588, 41.47540984, 33.66120219], [64.70588235, 51.09289617, 45.68306011], [67.64705882, 60.10928962, 54.09836066], [70.58823529, 67.92349727, 58.90710383], [73.52941176, 71.53005464, 60.10928962], [76.47058824, 72.13114754, 57.70491803], [79.41176471, 69.12568306, 53.49726776], [82.35294118, 63.71584699, 46.28415301], [85.29411765, 55.30054645, 37.86885246], [88.23529412, 43.87978142, 25.84699454], [91.17647059, 30.6557377, 13.82513661], [94.11764706, 19.23497268, 6.010928962], [97.05882353, 10.81967213, 3.606557377], [100, 11.42076503, 5.409836066]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "therapist_id": "599cae293a2b30157b11a18a", "medical_center_id": "5851f65673dc11072a0a1a93", "patient_id": "5851f5c773dc11072a0a1a90", "__v": 0, "created_at": "2017-09-03T23:02:43.410Z", "tp_hip": { "normal_ranges": [], "patient_angles": [] }, "tp_plv": { "normal_ranges": [], "patient_angles": [] }, "tp_ank": { "normal_ranges": [], "patient_angles": [] }, "tp_kne": { "normal_ranges": [], "patient_angles": [] }, "fp_hip": { "normal_ranges": [], "patient_angles": [] }, "fp_plv": { "normal_ranges": [], "patient_angles": [] }, "fp_ank": { "normal_ranges": [], "patient_angles": [] }, "fp_kne": { "normal_ranges": [], "patient_angles": [] }, "spl_hip": { "normal_ranges": [], "patient_angles": [] }, "spl_plv": { "normal_ranges": [], "patient_angles": [] }, "spl_ank": { "normal_ranges": [], "patient_angles": [] }, "spl_kne": { "normal_ranges": [[0, 14.72677596, 3.825136612], [3.03030303, 15.10928962, 3.825136612], [6.060606061, 15.30054645, 3.825136612], [9.090909091, 15.30054645, 4.016393443], [12.12121212, 14.72677596, 4.207650273], [15.15151515, 14.53551913, 4.398907104], [18.18181818, 14.3442623, 4.590163934], [21.21212121, 13.96174863, 4.781420765], [24.24242424, 13.96174863, 5.163934426], [27.27272727, 14.15300546, 5.546448087], [30.3030303, 13.96174863, 5.737704918], [33.33333333, 13.7704918, 5.928961749], [36.36363636, 13.7704918, 6.120218579], [39.39393939, 13.57923497, 6.120218579], [42.42424242, 13.57923497, 5.928961749], [45.45454545, 13.96174863, 5.546448087], [48.48484848, 14.3442623, 5.163934426], [51.51515152, 14.3442623, 4.972677596], [54.54545455, 14.15300546, 4.781420765], [57.57575758, 13.96174863, 4.590163934], [60.60606061, 13.19672131, 4.207650273], [63.63636364, 12.81420765, 4.016393443], [66.66666667, 13.00546448, 4.016393443], [69.6969697, 13.00546448, 4.016393443], [72.72727273, 13.38797814, 4.207650273], [75.75757576, 13.7704918, 4.590163934], [78.78787879, 14.15300546, 4.781420765], [81.81818182, 14.15300546, 4.972677596], [84.84848485, 24.15300546, 20.163934426], [87.87878788, 34.3442623, 25.355191257], [90.90909091, 24.3442623, 20.163934426], [93.93939394, 24.15300546, 18.972677596], [96.96969697, 14.15300546, 4.781420765], [100, 14.53551913, 4.207650273]], "patient_angles": [[0, 0], [4.545454545, 0.25], [9.090909091, 7.41], [13.63636364, 11.64], [18.18181818, 3.6], [22.72727273, 19.55], [27.27272727, 15.62], [31.81818182, 12.5], [36.36363636, 22.42], [40.90909091, 20.74], [45.45454545, 32.62], [50, 2.69], [54.54545455, 2.81], [59.09090909, 32.63], [63.63636364, 22.77], [68.18181818, 12.68], [72.72727273, 6.56], [77.27272727, 2.39], [81.81818182, 2.3], [86.36363636, 2], [90.90909091, 1.85], [95.45454545, 1.49], [100, 2.08]] }, "rtrc": [], "ltrc": [], "rbwt": [], "lbwt": [], "rfwt": [], "lfwt": [], "rhee": [], "lhee": [], "rtoe": [], "ltoe": [], "rank": [], "lank": [], "rkne": [], "lkne": [{ "x": 123.31, "y": 543.4, "z": 54.54 }, { "x": 123.31, "y": 543.4, "z": 54.54 }, { "x": 123.31, "y": 543.4, "z": 54.54 }, { "x": 123.31, "y": 543.4, "z": 54.54 }, { "x": 123.31, "y": 543.4, "z": 54.54 }], "accesories_descriptions": { "assited_walk": "No se necesito", "treadmills": "Solo para precalentamiento", "walker": "Si se utlizó", "orthoses": "No se necesito", "parallel_bars": "" }, "accesories": { "is_assited_walk": true, "is_treadmills": true, "is_walker": true, "is_orthoses": true, "is_parallel_bars": false } }
    ],
    resultDetail: { "_id": "59ac8840238ae337300fcc1d", "tp_hip_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Hip Rotation [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Int" }, "max": 30, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 3.606557377, -8.852459016], [2.941176471, 2.62295082, -7.540983607], [5.882352941, 2.62295082, -5.901639344], [8.823529412, 4.918032787, -4.590163934], [11.76470588, 7.540983607, -2.950819672], [14.70588235, 8.852459016, -2.950819672], [17.64705882, 9.180327869, -2.62295082], [20.58823529, 8.852459016, -2.295081967], [23.52941176, 8.852459016, -1.31147541], [26.47058824, 9.180327869, -0.9836065574], [29.41176471, 10.16393443, -1.31147541], [32.35294118, 11.14754098, -0.6557377049], [35.29411765, 12.13114754, 0.9836065574], [38.23529412, 14.09836066, 1.967213115], [41.17647059, 15.40983607, 2.295081967], [44.11764706, 15.73770492, 1.967213115], [47.05882353, 14.42622951, 1.31147541], [50, 13.7704918, 0.3278688525], [52.94117647, 13.1147541, -0.9836065574], [55.88235294, 11.80327869, -2.950819672], [58.82352941, 9.508196721, -4.918032787], [61.76470588, 7.868852459, -6.557377049], [64.70588235, 6.229508197, -7.540983607], [67.64705882, 4.262295082, -8.196721311], [70.58823529, 2.62295082, -8.196721311], [73.52941176, 0.6557377049, -7.868852459], [76.47058824, 0.3278688525, -7.540983607], [79.41176471, -0.3278688525, -6.885245902], [82.35294118, 0.3278688525, -5.245901639], [85.29411765, 0.6557377049, -4.262295082], [88.23529412, 2.295081967, -4.262295082], [91.17647059, 3.278688525, -5.573770492], [94.11764706, 4.262295082, -6.885245902], [97.05882353, 4.918032787, -8.196721311], [100, 4.590163934, -7.540983607]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "tp_plv_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Pelvic Rotation [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Int" }, "max": 30, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 7.252747253, 0.3296703297], [2.941176471, 6.923076923, 0.3296703297], [5.882352941, 5.934065934, 0.3296703297], [8.823529412, 4.945054945, -0.6593406593], [11.76470588, 3.956043956, -1.318681319], [14.70588235, 3.956043956, -0.989010989], [17.64705882, 4.285714286, -0.3296703297], [20.58823529, 4.615384615, 0.3296703297], [23.52941176, 4.945054945, 0.3296703297], [26.47058824, 4.945054945, 0.3296703297], [29.41176471, 4.615384615, -0.3296703297], [32.35294118, 3.956043956, -0.989010989], [35.29411765, 3.296703297, -1.318681319], [38.23529412, 2.307692308, -2.637362637], [41.17647059, 0.6593406593, -2.967032967], [44.11764706, -1.318681319, -4.285714286], [47.05882353, -1.978021978, -4.945054945], [50, -2.307692308, -5.274725275], [52.94117647, -1.978021978, -5.274725275], [55.88235294, -0.989010989, -4.945054945], [58.82352941, 0.3296703297, -4.615384615], [61.76470588, 1.648351648, -4.615384615], [64.70588235, 2.307692308, -4.615384615], [67.64705882, 1.318681319, -4.945054945], [70.58823529, 0.989010989, -4.945054945], [73.52941176, 1.318681319, -5.274725275], [76.47058824, 1.318681319, -4.615384615], [79.41176471, 1.648351648, -3.956043956], [82.35294118, 1.978021978, -3.626373626], [85.29411765, 2.637362637, -3.296703297], [88.23529412, 3.626373626, -2.967032967], [91.17647059, 4.615384615, -2.307692308], [94.11764706, 5.934065934, -1.318681319], [97.05882353, 6.923076923, -0.3296703297], [100, 7.252747253, 0.3296703297]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "tp_ank_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Foot Progression Angle [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Int" }, "max": 40, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, -9.065934066, -20.6043956], [2.941176471, -9.065934066, -20.19230769], [5.882352941, -9.478021978, -19.78021978], [8.823529412, -10.3021978, -19.78021978], [11.76470588, -11.53846154, -19.36813187], [14.70588235, -11.95054945, -18.95604396], [17.64705882, -11.53846154, -18.54395604], [20.58823529, -11.12637363, -17.71978022], [23.52941176, -10.3021978, -17.30769231], [26.47058824, -9.89010989, -16.48351648], [29.41176471, -9.065934066, -16.07142857], [32.35294118, -8.653846154, -15.65934066], [35.29411765, -8.241758242, -16.07142857], [38.23529412, -9.478021978, -16.48351648], [41.17647059, -10.3021978, -17.30769231], [44.11764706, -10.3021978, -17.71978022], [47.05882353, -9.89010989, -18.13186813], [50, -9.065934066, -18.13186813], [52.94117647, -8.241758242, -17.30769231], [55.88235294, -7.417582418, -16.48351648], [58.82352941, -6.593406593, -17.30769231], [61.76470588, -4.532967033, -20.19230769], [64.70588235, -2.884615385, -25.13736264], [67.64705882, -4.532967033, -28.84615385], [70.58823529, -6.181318681, -30.08241758], [73.52941176, -7.005494505, -30.08241758], [76.47058824, -7.82967033, -30.08241758], [79.41176471, -9.065934066, -30.08241758], [82.35294118, -11.95054945, -30.08241758], [85.29411765, -14.42307692, -30.08241758], [88.23529412, -14.83516484, -28.43406593], [91.17647059, -11.53846154, -25.54945055], [94.11764706, -9.065934066, -22.66483516], [97.05882353, -8.241758242, -20.6043956], [100, -8.241758242, -20.6043956]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "tp_kne_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Keen Rotation [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Int" }, "max": 40, "min": -40 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, -16.61202186, -27.54098361], [2.941176471, -15.73770492, -28.41530055], [5.882352941, -14.86338798, -28.85245902], [8.823529412, -13.1147541, -28.41530055], [11.76470588, -10.92896175, -26.66666667], [14.70588235, -10.92896175, -26.2295082], [17.64705882, -11.80327869, -27.97814208], [20.58823529, -12.24043716, -29.28961749], [23.52941176, -11.80327869, -29.28961749], [26.47058824, -10.49180328, -28.41530055], [29.41176471, -10.92896175, -28.85245902], [32.35294118, -11.80327869, -28.85245902], [35.29411765, -12.24043716, -28.85245902], [38.23529412, -13.1147541, -28.85245902], [41.17647059, -13.1147541, -29.28961749], [44.11764706, -12.67759563, -29.28961749], [47.05882353, -11.80327869, -28.41530055], [50, -10.49180328, -27.54098361], [52.94117647, -10.05464481, -27.10382514], [55.88235294, -10.92896175, -28.41530055], [58.82352941, -13.55191257, -31.03825137], [61.76470588, -14.42622951, -32.34972678], [64.70588235, -13.1147541, -32.34972678], [67.64705882, -9.180327869, -31.47540984], [70.58823529, -6.120218579, -31.03825137], [73.52941176, -5.245901639, -30.16393443], [76.47058824, -6.994535519, -29.28961749], [79.41176471, -8.743169399, -28.85245902], [82.35294118, -10.92896175, -30.16393443], [85.29411765, -14.86338798, -32.34972678], [88.23529412, -17.92349727, -32.78688525], [91.17647059, -21.42076503, -31.91256831], [94.11764706, -20.98360656, -28.85245902], [97.05882353, -19.67213115, -27.10382514], [100, -19.23497268, -27.10382514]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "fp_hip_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Hip Ad/Abduktion [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Abd / Add" }, "max": 30, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 6.885245902, 2.950819672], [2.941176471, 7.868852459, 4.262295082], [5.882352941, 9.836065574, 6.557377049], [8.823529412, 12.45901639, 8.852459016], [11.76470588, 14.75409836, 10.81967213], [14.70588235, 16.39344262, 12.13114754], [17.64705882, 16.39344262, 11.80327869], [20.58823529, 15.40983607, 10.49180328], [23.52941176, 14.75409836, 9.508196721], [26.47058824, 14.09836066, 8.852459016], [29.41176471, 13.44262295, 8.196721311], [32.35294118, 12.78688525, 8.196721311], [35.29411765, 12.13114754, 8.196721311], [38.23529412, 11.47540984, 8.196721311], [41.17647059, 11.47540984, 8.196721311], [44.11764706, 11.14754098, 7.540983607], [47.05882353, 11.47540984, 6.885245902], [50, 10.49180328, 5.901639344], [52.94117647, 9.508196721, 4.262295082], [55.88235294, 8.524590164, 1.967213115], [58.82352941, 5.901639344, -1.31147541], [61.76470588, 3.606557377, -3.93442623], [64.70588235, 1.31147541, -5.901639344], [67.64705882, 0.9836065574, -4.918032787], [70.58823529, 1.639344262, -3.93442623], [73.52941176, 2.950819672, -2.62295082], [76.47058824, 3.93442623, -1.639344262], [79.41176471, 4.262295082, -1.31147541], [82.35294118, 4.590163934, -0.6557377049], [85.29411765, 5.245901639, 0.6557377049], [88.23529412, 5.573770492, 0.9836065574], [91.17647059, 5.901639344, 0.9836065574], [94.11764706, 5.901639344, 0.6557377049], [97.05882353, 6.229508197, 0.6557377049], [100, 7.540983607, 1.639344262]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "fp_plv_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Pelvic Obliquity [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Down / Up" }, "max": 15, "min": -15 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 2.295081967, 0.4918032787], [2.941176471, 2.786885246, 0.8196721311], [5.882352941, 3.770491803, 1.475409836], [8.823529412, 5.245901639, 2.459016393], [11.76470588, 6.557377049, 3.606557377], [14.70588235, 7.37704918, 4.590163934], [17.64705882, 7.049180328, 4.426229508], [20.58823529, 6.229508197, 3.442622951], [23.52941176, 5.409836066, 2.295081967], [26.47058824, 4.262295082, 1.147540984], [29.41176471, 2.950819672, 0.3278688525], [32.35294118, 1.803278689, -0.3278688525], [35.29411765, 0.8196721311, -0.9836065574], [38.23529412, 0.1639344262, -1.147540984], [41.17647059, -0.1639344262, -1.147540984], [44.11764706, -0.1639344262, -1.147540984], [47.05882353, -0.1639344262, -0.9836065574], [50, -0.3278688525, -1.147540984], [52.94117647, -0.8196721311, -1.967213115], [55.88235294, -1.31147541, -3.278688525], [58.82352941, -2.131147541, -4.918032787], [61.76470588, -2.950819672, -6.393442623], [64.70588235, -3.770491803, -7.049180328], [67.64705882, -3.442622951, -6.885245902], [70.58823529, -2.62295082, -6.229508197], [73.52941176, -1.475409836, -5.081967213], [76.47058824, -0.4918032787, -3.770491803], [79.41176471, 0.1639344262, -2.62295082], [82.35294118, 0.4918032787, -1.639344262], [85.29411765, 1.147540984, -0.9836065574], [88.23529412, 1.639344262, -0.6557377049], [91.17647059, 1.639344262, -0.3278688525], [94.11764706, 1.475409836, -0.1639344262], [97.05882353, 1.475409836, 0.1639344262], [100, 2.295081967, 0.6557377049]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "fp_ank_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Fo0t Varus/Valgous [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Valg / Var" }, "max": 30, "min": -5 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 3.387096774, -1.451612903], [2.857142857, 3.064516129, -1.774193548], [5.714285714, 2.580645161, -2.419354839], [8.571428571, 2.258064516, -2.741935484], [11.42857143, 2.096774194, -2.903225806], [14.28571429, 2.096774194, -3.064516129], [17.14285714, 2.258064516, -3.064516129], [20, 2.741935484, -3.064516129], [22.85714286, 2.903225806, -3.225806452], [25.71428571, 3.064516129, -3.225806452], [28.57142857, 3.064516129, -3.548387097], [31.42857143, 2.903225806, -3.387096774], [34.28571429, 3.064516129, -3.709677419], [37.14285714, 3.225806452, -3.709677419], [40, 3.225806452, -4.032258065], [42.85714286, 3.548387097, -4.193548387], [45.71428571, 3.870967742, -3.870967742], [48.57142857, 4.35483871, -3.709677419], [51.42857143, 4.516129032, -3.709677419], [54.28571429, 3.870967742, -3.548387097], [57.14285714, 2.580645161, -3.064516129], [60, 1.129032258, -4.193548387], [62.85714286, 0.3225806452, -5.806451613], [65.71428571, 0.8064516129, -5.967741935], [68.57142857, 1.451612903, -4.193548387], [71.42857143, 2.096774194, -3.064516129], [74.28571429, 2.580645161, -2.419354839], [77.14285714, 3.225806452, -2.258064516], [80, 3.548387097, -1.774193548], [82.85714286, 3.225806452, -1.290322581], [85.71428571, 2.741935484, -1.129032258], [88.57142857, 2.903225806, -1.290322581], [91.42857143, 3.870967742, -1.451612903], [94.28571429, 4.35483871, -1.290322581], [97.14285714, 4.35483871, -0.9677419355], [100, 4.032258065, -0.8064516129]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "fp_kne_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Keen Varus/Valgus [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Valg / Var" }, "max": 15, "min": -15 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, -1.967213115, -8.852459016], [2.941176471, -2.295081967, -9.508196721], [5.882352941, -2.131147541, -10], [8.823529412, -1.475409836, -9.180327869], [11.76470588, -0.6557377049, -8.032786885], [14.70588235, 0.1639344262, -6.557377049], [17.64705882, -0.3278688525, -5.901639344], [20.58823529, -0.8196721311, -5.409836066], [23.52941176, -0.8196721311, -6.06557377], [26.47058824, -1.147540984, -6.885245902], [29.41176471, -1.639344262, -8.032786885], [32.35294118, -2.131147541, -8.68852459], [35.29411765, -2.786885246, -9.180327869], [38.23529412, -3.114754098, -9.344262295], [41.17647059, -3.114754098, -9.344262295], [44.11764706, -3.278688525, -9.508196721], [47.05882353, -3.278688525, -9.672131148], [50, -3.114754098, -9.672131148], [52.94117647, -2.295081967, -9.672131148], [55.88235294, -1.31147541, -8.68852459], [58.82352941, -0.1639344262, -7.049180328], [61.76470588, 1.31147541, -5.737704918], [64.70588235, 2.295081967, -5.573770492], [67.64705882, 1.803278689, -7.213114754], [70.58823529, 1.147540984, -9.016393443], [73.52941176, 0.8196721311, -9.672131148], [76.47058824, 1.31147541, -8.852459016], [79.41176471, 1.967213115, -7.213114754], [82.35294118, 1.967213115, -5.409836066], [85.29411765, 1.639344262, -4.098360656], [88.23529412, 0.9836065574, -3.93442623], [91.17647059, -0.1639344262, -5.573770492], [94.11764706, -0.9836065574, -8.032786885], [97.05882353, -1.147540984, -10.32786885], [100, -1.147540984, -11.14754098]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "sp_hip_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Hip Flex/Ext [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Flex" }, "max": 60, "min": -20 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 42.40437158, 27.97814208], [2.941176471, 43.27868852, 27.54098361], [5.882352941, 44.15300546, 27.54098361], [8.823529412, 42.84153005, 26.66666667], [11.76470588, 39.78142077, 24.91803279], [14.70588235, 36.72131148, 22.73224044], [17.64705882, 31.91256831, 20.10928962], [20.58823529, 27.54098361, 15.73770492], [23.52941176, 22.73224044, 12.24043716], [26.47058824, 18.36065574, 7.868852459], [29.41176471, 13.55191257, 3.93442623], [32.35294118, 8.743169399, 0.4371584699], [35.29411765, 4.371584699, -3.93442623], [38.23529412, 0.8743169399, -7.431693989], [41.17647059, -2.62295082, -10.49180328], [44.11764706, -5.245901639, -13.98907104], [47.05882353, -6.994535519, -16.61202186], [50, -8.306010929, -17.92349727], [52.94117647, -8.743169399, -17.92349727], [55.88235294, -8.306010929, -17.4863388], [58.82352941, -4.808743169, -14.86338798], [61.76470588, -0.8743169399, -10.49180328], [64.70588235, 5.245901639, -4.371584699], [67.64705882, 11.80327869, 3.49726776], [70.58823529, 19.23497268, 10.05464481], [73.52941176, 26.2295082, 15.73770492], [76.47058824, 33.22404372, 20.98360656], [79.41176471, 38.90710383, 24.91803279], [82.35294118, 43.27868852, 28.41530055], [85.29411765, 45.46448087, 30.16393443], [88.23529412, 46.33879781, 30.6010929], [91.17647059, 45.0273224, 29.28961749], [94.11764706, 44.15300546, 28.41530055], [97.05882353, 42.40437158, 27.97814208], [100, 41.96721311, 27.97814208]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "sp_plv_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Pelvic Tilt [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Post / Ant" }, "max": 30, "min": -5 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 14.72677596, 3.825136612], [3.03030303, 15.10928962, 3.825136612], [6.060606061, 15.30054645, 3.825136612], [9.090909091, 15.30054645, 4.016393443], [12.12121212, 14.72677596, 4.207650273], [15.15151515, 14.53551913, 4.398907104], [18.18181818, 14.3442623, 4.590163934], [21.21212121, 13.96174863, 4.781420765], [24.24242424, 13.96174863, 5.163934426], [27.27272727, 14.15300546, 5.546448087], [30.3030303, 13.96174863, 5.737704918], [33.33333333, 13.7704918, 5.928961749], [36.36363636, 13.7704918, 6.120218579], [39.39393939, 13.57923497, 6.120218579], [42.42424242, 13.57923497, 5.928961749], [45.45454545, 13.96174863, 5.546448087], [48.48484848, 14.3442623, 5.163934426], [51.51515152, 14.3442623, 4.972677596], [54.54545455, 14.15300546, 4.781420765], [57.57575758, 13.96174863, 4.590163934], [60.60606061, 13.19672131, 4.207650273], [63.63636364, 12.81420765, 4.016393443], [66.66666667, 13.00546448, 4.016393443], [69.6969697, 13.00546448, 4.016393443], [72.72727273, 13.38797814, 4.207650273], [75.75757576, 13.7704918, 4.590163934], [78.78787879, 14.15300546, 4.781420765], [81.81818182, 14.15300546, 4.972677596], [84.84848485, 14.15300546, 5.163934426], [87.87878788, 14.3442623, 5.355191257], [90.90909091, 14.3442623, 5.163934426], [93.93939394, 14.15300546, 4.972677596], [96.96969697, 14.15300546, 4.781420765], [100, 14.53551913, 4.207650273]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "sp_ank_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Ankle Plant/DorsiFlex [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Plant / Dors" }, "max": 35, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 6.639784946, 0.3494623656], [2.941176471, 4.193548387, -2.446236559], [5.882352941, 1.397849462, -4.193548387], [8.823529412, -0.3494623656, -4.193548387], [11.76470588, 1.048387097, -1.747311828], [14.70588235, 3.494623656, 1.048387097], [17.64705882, 6.290322581, 3.14516129], [20.58823529, 8.037634409, 4.892473118], [23.52941176, 9.784946237, 5.940860215], [26.47058824, 10.83333333, 6.989247312], [29.41176471, 11.88172043, 6.989247312], [32.35294118, 12.2311828, 7.338709677], [35.29411765, 12.58064516, 7.338709677], [38.23529412, 13.97849462, 7.688172043], [41.17647059, 15.37634409, 8.037634409], [44.11764706, 16.77419355, 7.688172043], [47.05882353, 17.12365591, 6.989247312], [50, 16.77419355, 5.241935484], [52.94117647, 14.32795699, 2.446236559], [55.88235294, 9.435483871, -2.096774194], [58.82352941, 2.096774194, -8.387096774], [61.76470588, -5.940860215, -15.37634409], [64.70588235, -9.086021505, -20.2688172], [67.64705882, -6.989247312, -20.61827957], [70.58823529, -3.14516129, -16.42473118], [73.52941176, 1.397849462, -9.086021505], [76.47058824, 5.591397849, -3.844086022], [79.41176471, 8.73655914, 1.048387097], [82.35294118, 10.48387097, 4.193548387], [85.29411765, 11.1827957, 5.591397849], [88.23529412, 10.83333333, 5.940860215], [91.17647059, 9.435483871, 4.543010753], [94.11764706, 8.037634409, 1.747311828], [97.05882353, 7.338709677, 0.6989247312], [100, 5.940860215, 0.6989247312]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "sp_kne_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Keen Flex/Ext [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Flex" }, "max": 90, "min": -20 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 10.21857923, 5.409836066], [2.941176471, 13.22404372, 9.016393443], [5.882352941, 18.63387978, 12.62295082], [8.823529412, 23.44262295, 15.6284153], [11.76470588, 25.84699454, 18.03278689], [14.70588235, 26.44808743, 19.23497268], [17.64705882, 24.64480874, 18.03278689], [20.58823529, 22.24043716, 14.42622951], [23.52941176, 19.23497268, 13.22404372], [26.47058824, 16.83060109, 10.81967213], [29.41176471, 12.62295082, 7.213114754], [32.35294118, 9.617486339, 4.207650273], [35.29411765, 7.81420765, 1.803278689], [38.23529412, 6.612021858, 0.6010928962], [41.17647059, 6.612021858, 0.6010928962], [44.11764706, 7.213114754, 0.6010928962], [47.05882353, 9.016393443, 1.202185792], [50, 12.02185792, 3.606557377], [52.94117647, 16.2295082, 7.81420765], [55.88235294, 23.44262295, 14.42622951], [58.82352941, 31.8579235, 22.24043716], [61.76470588, 41.47540984, 33.66120219], [64.70588235, 51.09289617, 45.68306011], [67.64705882, 60.10928962, 54.09836066], [70.58823529, 67.92349727, 58.90710383], [73.52941176, 71.53005464, 60.10928962], [76.47058824, 72.13114754, 57.70491803], [79.41176471, 69.12568306, 53.49726776], [82.35294118, 63.71584699, 46.28415301], [85.29411765, 55.30054645, 37.86885246], [88.23529412, 43.87978142, 25.84699454], [91.17647059, 30.6557377, 13.82513661], [94.11764706, 19.23497268, 6.010928962], [97.05882353, 10.81967213, 3.606557377], [100, 11.42076503, 5.409836066]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }, "therapist_id": "599cae293a2b30157b11a18a", "medical_center_id": "5851f65673dc11072a0a1a93", "patient_id": "5851f5c773dc11072a0a1a90", "__v": 0, "created_at": "2017-09-03T22:54:56.130Z", "tp_hip": { "normal_ranges": [], "patient_angles": [] }, "tp_plv": { "normal_ranges": [], "patient_angles": [] }, "tp_ank": { "normal_ranges": [], "patient_angles": [] }, "tp_kne": { "normal_ranges": [], "patient_angles": [] }, "fp_hip": { "normal_ranges": [], "patient_angles": [] }, "fp_plv": { "normal_ranges": [], "patient_angles": [] }, "fp_ank": { "normal_ranges": [], "patient_angles": [] }, "fp_kne": { "normal_ranges": [], "patient_angles": [] }, "spl_hip": { "normal_ranges": [], "patient_angles": [] }, "spl_plv": { "normal_ranges": [], "patient_angles": [] }, "spl_ank": { "normal_ranges": [], "patient_angles": [] }, "spl_kne": { "normal_ranges": [[0, 14.72677596, 3.825136612], [3.03030303, 15.10928962, 3.825136612], [6.060606061, 15.30054645, 3.825136612], [9.090909091, 15.30054645, 4.016393443], [12.12121212, 14.72677596, 4.207650273], [15.15151515, 14.53551913, 4.398907104], [18.18181818, 14.3442623, 4.590163934], [21.21212121, 13.96174863, 4.781420765], [24.24242424, 13.96174863, 5.163934426], [27.27272727, 14.15300546, 5.546448087], [30.3030303, 13.96174863, 5.737704918], [33.33333333, 13.7704918, 5.928961749], [36.36363636, 13.7704918, 6.120218579], [39.39393939, 13.57923497, 6.120218579], [42.42424242, 13.57923497, 5.928961749], [45.45454545, 13.96174863, 5.546448087], [48.48484848, 14.3442623, 5.163934426], [51.51515152, 14.3442623, 4.972677596], [54.54545455, 14.15300546, 4.781420765], [57.57575758, 13.96174863, 4.590163934], [60.60606061, 13.19672131, 4.207650273], [63.63636364, 12.81420765, 4.016393443], [66.66666667, 13.00546448, 4.016393443], [69.6969697, 13.00546448, 4.016393443], [72.72727273, 13.38797814, 4.207650273], [75.75757576, 13.7704918, 4.590163934], [78.78787879, 14.15300546, 4.781420765], [81.81818182, 14.15300546, 4.972677596], [84.84848485, 24.15300546, 20.163934426], [87.87878788, 34.3442623, 25.355191257], [90.90909091, 24.3442623, 20.163934426], [93.93939394, 24.15300546, 18.972677596], [96.96969697, 14.15300546, 4.781420765], [100, 14.53551913, 4.207650273]], "patient_angles": [[0, 0], [4.545454545, 0.25], [9.090909091, 7.41], [13.63636364, 11.64], [18.18181818, 3.6], [22.72727273, 19.55], [27.27272727, 15.62], [31.81818182, 12.5], [36.36363636, 22.42], [40.90909091, 20.74], [45.45454545, 32.62], [50, 2.69], [54.54545455, 2.81], [59.09090909, 32.63], [63.63636364, 22.77], [68.18181818, 12.68], [72.72727273, 6.56], [77.27272727, 2.39], [81.81818182, 2.3], [86.36363636, 2], [90.90909091, 1.85], [95.45454545, 1.49], [100, 2.08]] }, "rtrc": [], "ltrc": [], "rbwt": [], "lbwt": [], "rfwt": [], "lfwt": [], "rhee": [], "lhee": [], "rtoe": [], "ltoe": [], "rank": [], "lank": [], "rkne": [], "lkne": [{ "x": 123.31, "y": 543.4, "z": 54.54 }, { "x": 123.31, "y": 543.4, "z": 54.54 }, { "x": 123.31, "y": 543.4, "z": 54.54 }, { "x": 123.31, "y": 543.4, "z": 54.54 }, { "x": 123.31, "y": 543.4, "z": 54.54 }], "accesories_descriptions": { "assited_walk": "No se necesito", "treadmills": "Solo para precalentamiento", "walker": "Si se utlizó", "orthoses": "No se necesito", "parallel_bars": "" }, "accesories": { "is_assited_walk": true, "is_treadmills": true, "is_walker": true, "is_orthoses": true, "is_parallel_bars": false } },
    patientList: [
        { "_id": "5851f5c773dc11072a0a1a90", "is_active": false, "password": "admin", "username": "paciente", "birth": "2016-11-20T04:19:13.000Z", "id_Document_num": 12345678, "id_Document_type": "DNI", "gender": "4", "names": "Hortencia", "__v": 0, "created_at": "2016-12-15T01:45:43.589Z", "attorney": { "names": "Hortencia", "email": "manuel@gmail.com", "phone": "234 54 13", "cellphone": "999 999 999" }, "medic_diagostic": [{ "name": "Luis Manuel", "level": "III", "percentage": "56", "_id": "5851f5c773dc11072a0a1a91", "created_at": "2016-12-15T01:45:43.590Z" }], "address": { "street": "Calle Alameda Santos 344 Dpto 304", "city": "Lima", "state": "Lima", "zip": 457645, "country": "Peru" } }, { "_id": "591e7932204d862e178a4461", "is_active": false, "birth": "2012-11-20T04:19:13.000Z", "id_Document_num": 12345678, "id_Document_type": "DNI", "gender": "3", "names": "Camila", "__v": 0, "created_at": "2017-05-19T04:48:50.357Z", "attorney": { "names": "Camila", "email": "camilal@gmail.com", "phone": "234 54 13", "cellphone": "999 999 999" }, "medic_diagostic": [{ "name": "Luis Manuel", "level": "III", "percentage": "56", "_id": "591e7932204d862e178a4462", "created_at": "2017-05-19T04:48:50.366Z" }], "address": { "street": "Calle Alameda Santos 344 Dpto 304", "city": "Lima", "state": "Lima", "zip": 457645, "country": "Peru" } }, { "_id": "598a4bc134781634db1d5509", "is_active": false, "birth": "2012-11-20T04:19:13.000Z", "id_Document_num": 12345678, "id_Document_type": "DNI", "gender": "3", "names": "Camila", "__v": 0, "created_at": "2017-08-08T23:39:45.293Z", "attorney": { "names": "Camila", "email": "camilal@gmail.com", "phone": "234 54 13", "cellphone": "999 999 999" }, "medic_diagostic": [{ "name": "Luis Manuel", "level": "III", "percentage": "56", "_id": "598a4bc134781634db1d550a", "created_at": "2017-08-08T23:39:45.298Z" }], "address": { "street": "Calle Alameda Santos 344 Dpto 304", "city": "Lima", "state": "Lima", "zip": 457645, "country": "Peru" } }, { "_id": "598a4f7c3390ba34fb8018ed", "is_active": true, "password": "patient", "username": "aa", "birth": "2017-08-08T23:55:40.945Z", "id_Document_num": 2, "id_Document_type": "DNI", "gender": "-", "lastname": "a", "names": "A", "__v": 0, "created_at": "2017-08-08T23:55:40.956Z", "attorney": { "names": "A", "lastname": "a" }, "medic_diagostic": [{ "_id": "598a4f7c3390ba34fb8018ee", "created_at": "2017-08-08T23:55:40.961Z" }] }, { "_id": "598a507c3390ba34fb8018ef", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-08T23:59:56.823Z", "attorney": { "names": "MANOLITO", "lastname": "Martel" }, "medic_diagostic": [{ "_id": "598a507c3390ba34fb8018f0", "created_at": "2017-08-08T23:59:56.827Z" }] }, { "_id": "598a52773390ba34fb8018f1", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T00:08:23.990Z", "attorney": { "names": "MANOLITO", "lastname": "Martel" }, "medic_diagostic": [{ "_id": "598a52773390ba34fb8018f2", "created_at": "2017-08-09T00:08:23.990Z" }] }, { "_id": "598a54df27209e350ea0b785", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T00:18:39.133Z", "attorney": { "names": "MANOLITO", "lastname": "Martel" }, "medic_diagostic": [{ "_id": "598a54df27209e350ea0b786", "created_at": "2017-08-09T00:18:39.139Z" }] }, { "_id": "598a5a4a44192c3536269a2c", "names": "MANOLITO", "lastname": "Martel", "gender": "-", "id_Document_type": "DNI", "id_Document_num": 6533987, "birth": "2017-08-08T23:59:56.809Z", "username": "Luis ManuelMartel Lindo", "password": "patient", "updated_at": "2017-08-08T23:59:56.809Z", "is_active": true, "__v": 0, "created_at": "2017-08-09T00:41:46.096Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "name": "PCI", "level": "4", "percentage": "40", "_id": "598a5a4a44192c3536269a2d", "created_at": "2017-08-09T00:41:46.099Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a5c8830de8a354b90ab6f", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T00:51:20.374Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a5c8830de8a354b90ab70", "created_at": "2017-08-09T00:51:20.379Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a5cccb8ddb7354d005ffc", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T00:52:28.804Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a5cccb8ddb7354d005ffd", "created_at": "2017-08-09T00:52:28.810Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a5ead409a82355b9c5e2e", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:00:29.030Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a5ead409a82355b9c5e2f", "created_at": "2017-08-09T01:00:29.035Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a5ffb0b5a333562d6a49d", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:06:03.901Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a5ffb0b5a333562d6a49e", "created_at": "2017-08-09T01:06:03.906Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a603bd14d893565388690", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:07:07.594Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a603bd14d893565388691", "created_at": "2017-08-09T01:07:07.599Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a604ad14d893565388692", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:07:22.224Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a604ad14d893565388693", "created_at": "2017-08-09T01:07:22.226Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a608f79f62c3569833c0a", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:08:31.908Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a608f79f62c3569833c0b", "created_at": "2017-08-09T01:08:31.912Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a60cf1699b0356e8884f0", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:09:35.249Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a60cf1699b0356e8884f1", "created_at": "2017-08-09T01:09:35.253Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a617ff67a2235748e3a3f", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:12:31.690Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a617ff67a2235748e3a40", "created_at": "2017-08-09T01:12:31.695Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a63498dc4823585badf25", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:20:09.075Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a6380fae4ba3589c2a145", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:21:04.975Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a63ae56e9de358d0564c1", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:21:50.662Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a63ae56e9de358d0564c2", "created_at": "2017-08-09T01:21:50.667Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a63b156e9de358d0564c3", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:21:53.514Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a63b156e9de358d0564c4", "created_at": "2017-08-09T01:21:53.515Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a646c4b6e333597725bc3", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:25:00.658Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a646c4b6e333597725bc4", "created_at": "2017-08-09T01:25:00.666Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a64fa20a338359a73987a", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:27:22.638Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a64fa20a338359a73987b", "created_at": "2017-08-09T01:27:22.645Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a6550ac1a42359dd3692d", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:28:48.467Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a6550ac1a42359dd3692e", "created_at": "2017-08-09T01:28:48.473Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a655c9632ec35a0488586", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:29:00.550Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "_id": "598a655c9632ec35a0488587", "created_at": "2017-08-09T01:29:00.555Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598a659c182cde35a791c36d", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2017-08-08T23:59:56.809Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-09T01:30:04.766Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "name": "PCI", "level": "4", "percentage": "40", "_id": "598a659c182cde35a791c36e", "created_at": "2017-08-09T01:30:04.771Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }, { "_id": "598d1dd91b946d3804d56c95", "is_active": true, "password": "patient", "username": "Luis ManuelMartel Lindo", "birth": "2000-12-12T00:00:00.000Z", "id_Document_num": 6533987, "id_Document_type": "DNI", "gender": "-", "lastname": "Martel", "names": "MANOLITO", "__v": 0, "created_at": "2017-08-11T03:00:41.108Z", "attorney": { "names": "Luis Manuel", "lastname": "Martel Lindo", "relationship": "Padre", "email": "manuel083@gmail.com", "phone": "0154353", "cellphone": "9432542378" }, "medic_diagostic": [{ "name": "PCI", "level": "4", "percentage": "40", "_id": "598d1dd91b946d3804d56c96", "created_at": "2017-08-11T03:00:41.113Z" }], "address": { "street": "Calle Varela 1200, Breña", "city": "Lima", "state": "Lima", "zip": 15004, "country": "Peru" } }
    ],
    sp_plv_high_chart_data: {
        chart: {
            type: "spline",
            height: 350
        },
        title: {
            text: 'Pelvic Tilt [deg]'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'float',
            title: {
                text: 'Gait cicle'
            }
        },
        yAxis: {
            title: {
                text: 'Post / Ant'
            },
            max: 30,
            min: -5
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Ang: {point.y:.2f}°',
            crosshairs: true,
            shared: false,
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                name: 'Rangos Normales',
                data: [
                    [0.0, 14.72677596, 3.825136612],
                    [3.03030303, 15.10928962, 3.825136612],
                    [6.060606061, 15.30054645, 3.825136612],
                    [9.090909091, 15.30054645, 4.016393443],
                    [12.12121212, 14.72677596, 4.207650273],
                    [15.15151515, 14.53551913, 4.398907104],
                    [18.18181818, 14.3442623, 4.590163934],
                    [21.21212121, 13.96174863, 4.781420765],
                    [24.24242424, 13.96174863, 5.163934426],
                    [27.27272727, 14.15300546, 5.546448087],
                    [30.3030303, 13.96174863, 5.737704918],
                    [33.33333333, 13.7704918, 5.928961749],
                    [36.36363636, 13.7704918, 6.120218579],
                    [39.39393939, 13.57923497, 6.120218579],
                    [42.42424242, 13.57923497, 5.928961749],
                    [45.45454545, 13.96174863, 5.546448087],
                    [48.48484848, 14.3442623, 5.163934426],
                    [51.51515152, 14.3442623, 4.972677596],
                    [54.54545455, 14.15300546, 4.781420765],
                    [57.57575758, 13.96174863, 4.590163934],
                    [60.60606061, 13.19672131, 4.207650273],
                    [63.63636364, 12.81420765, 4.016393443],
                    [66.66666667, 13.00546448, 4.016393443],
                    [69.6969697, 13.00546448, 4.016393443],
                    [72.72727273, 13.38797814, 4.207650273],
                    [75.75757576, 13.7704918, 4.590163934],
                    [78.78787879, 14.15300546, 4.781420765],
                    [81.81818182, 14.15300546, 4.972677596],
                    [84.84848485, 14.15300546, 5.163934426],
                    [87.87878788, 14.3442623, 5.355191257],
                    [90.90909091, 14.3442623, 5.163934426],
                    [93.93939394, 14.15300546, 4.972677596],
                    [96.96969697, 14.15300546, 4.781420765],
                    [100.0, 14.53551913, 4.207650273]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
            },
            {
                name: 'Izquierda',
                data: [],
                dashStyle: 'longdash'
            },
            {
                name: 'Derecha',
                data: [],
                dashStyle: 'longdash'
            }
        ]
    },
    sp_hip_high_chart_data: {
        chart: {
            type: "spline",
            height: 350
        },
        title: {
            text: 'Hip Flex/Ext [deg]'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'float',
            title: {
                text: 'Gait cicle'
            }
        },
        yAxis: {
            title: {
                text: 'Ext / Flex'
            },
            max: 60,
            min: -20
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Ang: {point.y:.2f}°',
            crosshairs: true,
            shared: false,
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                name: 'Rangos Normales',
                data: [
                    [0.0, 42.40437158, 27.97814208],
                    [2.941176471, 43.27868852, 27.54098361],
                    [5.882352941, 44.15300546, 27.54098361],
                    [8.823529412, 42.84153005, 26.66666667],
                    [11.76470588, 39.78142077, 24.91803279],
                    [14.70588235, 36.72131148, 22.73224044],
                    [17.64705882, 31.91256831, 20.10928962],
                    [20.58823529, 27.54098361, 15.73770492],
                    [23.52941176, 22.73224044, 12.24043716],
                    [26.47058824, 18.36065574, 7.868852459],
                    [29.41176471, 13.55191257, 3.93442623],
                    [32.35294118, 8.743169399, 0.4371584699],
                    [35.29411765, 4.371584699, -3.93442623],
                    [38.23529412, 0.8743169399, -7.431693989],
                    [41.17647059, -2.62295082, -10.49180328],
                    [44.11764706, -5.245901639, -13.98907104],
                    [47.05882353, -6.994535519, -16.61202186],
                    [50.0, -8.306010929, -17.92349727],
                    [52.94117647, -8.743169399, -17.92349727],
                    [55.88235294, -8.306010929, -17.4863388],
                    [58.82352941, -4.808743169, -14.86338798],
                    [61.76470588, -0.8743169399, -10.49180328],
                    [64.70588235, 5.245901639, -4.371584699],
                    [67.64705882, 11.80327869, 3.49726776],
                    [70.58823529, 19.23497268, 10.05464481],
                    [73.52941176, 26.2295082, 15.73770492],
                    [76.47058824, 33.22404372, 20.98360656],
                    [79.41176471, 38.90710383, 24.91803279],
                    [82.35294118, 43.27868852, 28.41530055],
                    [85.29411765, 45.46448087, 30.16393443],
                    [88.23529412, 46.33879781, 30.6010929],
                    [91.17647059, 45.0273224, 29.28961749],
                    [94.11764706, 44.15300546, 28.41530055],
                    [97.05882353, 42.40437158, 27.97814208],
                    [100.0, 41.96721311, 27.97814208]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
            },
            {
                name: 'Izquierda',
                data: [],
                dashStyle: 'longdash'
            },
            {
                name: 'Derecha',
                data: [],
                dashStyle: 'longdash'
            }
        ]
    },
    sp_kne_high_chart_data: {
        chart: {
            type: "spline",
            height: 350
        },
        title: {
            text: 'Keen Flex/Ext [deg]'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'float',
            title: {
                text: 'Gait cicle'
            }
        },
        yAxis: {
            title: {
                text: 'Ext / Flex'
            },
            max: 90,
            min: -20
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Ang: {point.y:.2f}°',
            crosshairs: true,
            shared: false,
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                name: 'Rangos Normales',
                data: [
                    [0.0, 10.21857923, 5.409836066],
                    [2.941176471, 13.22404372, 9.016393443],
                    [5.882352941, 18.63387978, 12.62295082],
                    [8.823529412, 23.44262295, 15.6284153],
                    [11.76470588, 25.84699454, 18.03278689],
                    [14.70588235, 26.44808743, 19.23497268],
                    [17.64705882, 24.64480874, 18.03278689],
                    [20.58823529, 22.24043716, 14.42622951],
                    [23.52941176, 19.23497268, 13.22404372],
                    [26.47058824, 16.83060109, 10.81967213],
                    [29.41176471, 12.62295082, 7.213114754],
                    [32.35294118, 9.617486339, 4.207650273],
                    [35.29411765, 7.81420765, 1.803278689],
                    [38.23529412, 6.612021858, 0.6010928962],
                    [41.17647059, 6.612021858, 0.6010928962],
                    [44.11764706, 7.213114754, 0.6010928962],
                    [47.05882353, 9.016393443, 1.202185792],
                    [50.0, 12.02185792, 3.606557377],
                    [52.94117647, 16.2295082, 7.81420765],
                    [55.88235294, 23.44262295, 14.42622951],
                    [58.82352941, 31.8579235, 22.24043716],
                    [61.76470588, 41.47540984, 33.66120219],
                    [64.70588235, 51.09289617, 45.68306011],
                    [67.64705882, 60.10928962, 54.09836066],
                    [70.58823529, 67.92349727, 58.90710383],
                    [73.52941176, 71.53005464, 60.10928962],
                    [76.47058824, 72.13114754, 57.70491803],
                    [79.41176471, 69.12568306, 53.49726776],
                    [82.35294118, 63.71584699, 46.28415301],
                    [85.29411765, 55.30054645, 37.86885246],
                    [88.23529412, 43.87978142, 25.84699454],
                    [91.17647059, 30.6557377, 13.82513661],
                    [94.11764706, 19.23497268, 6.010928962],
                    [97.05882353, 10.81967213, 3.606557377],
                    [100.0, 11.42076503, 5.409836066]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
            },
            {
                name: 'Izquierda',
                data: [],
                dashStyle: 'longdash'
            },
            {
                name: 'Derecha',
                data: [],
                dashStyle: 'longdash'
            }
        ]
    },
    sp_ank_high_chart_data: {
        chart: {
            type: "spline",
            height: 350
        },
        title: {
            text: 'Ankle Plant/DorsiFlex [deg]'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'float',
            title: {
                text: 'Gait cicle'
            }
        },
        yAxis: {
            title: {
                text: 'Plant / Dors'
            },
            max: 35,
            min: -30
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Ang: {point.y:.2f}°',
            crosshairs: true,
            shared: false,
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                name: 'Rangos Normales',
                data: [
                    [0.0, 6.639784946, 0.3494623656],
                    [2.941176471, 4.193548387, -2.446236559],
                    [5.882352941, 1.397849462, -4.193548387],
                    [8.823529412, -0.3494623656, -4.193548387],
                    [11.76470588, 1.048387097, -1.747311828],
                    [14.70588235, 3.494623656, 1.048387097],
                    [17.64705882, 6.290322581, 3.14516129],
                    [20.58823529, 8.037634409, 4.892473118],
                    [23.52941176, 9.784946237, 5.940860215],
                    [26.47058824, 10.83333333, 6.989247312],
                    [29.41176471, 11.88172043, 6.989247312],
                    [32.35294118, 12.2311828, 7.338709677],
                    [35.29411765, 12.58064516, 7.338709677],
                    [38.23529412, 13.97849462, 7.688172043],
                    [41.17647059, 15.37634409, 8.037634409],
                    [44.11764706, 16.77419355, 7.688172043],
                    [47.05882353, 17.12365591, 6.989247312],
                    [50.0, 16.77419355, 5.241935484],
                    [52.94117647, 14.32795699, 2.446236559],
                    [55.88235294, 9.435483871, -2.096774194],
                    [58.82352941, 2.096774194, -8.387096774],
                    [61.76470588, -5.940860215, -15.37634409],
                    [64.70588235, -9.086021505, -20.2688172],
                    [67.64705882, -6.989247312, -20.61827957],
                    [70.58823529, -3.14516129, -16.42473118],
                    [73.52941176, 1.397849462, -9.086021505],
                    [76.47058824, 5.591397849, -3.844086022],
                    [79.41176471, 8.73655914, 1.048387097],
                    [82.35294118, 10.48387097, 4.193548387],
                    [85.29411765, 11.1827957, 5.591397849],
                    [88.23529412, 10.83333333, 5.940860215],
                    [91.17647059, 9.435483871, 4.543010753],
                    [94.11764706, 8.037634409, 1.747311828],
                    [97.05882353, 7.338709677, 0.6989247312],
                    [100.0, 5.940860215, 0.6989247312]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
            },
            {
                name: 'Izquierda',
                data: [],
                dashStyle: 'longdash'
            },
            {
                name: 'Derecha',
                data: [],
                dashStyle: 'longdash'
            }
        ]
    },
    fp_plv_high_chart_data: {
        chart: {
            type: "spline",
            height: 350
        },
        title: {
            text: 'Pelvic Obliquity [deg]'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'float',
            title: {
                text: 'Gait cicle'
            }
        },
        yAxis: {
            title: {
                text: 'Down / Up'
            },
            max: 15,
            min: -15
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Ang: {point.y:.2f}°',
            crosshairs: true,
            shared: false,
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                name: 'Rangos Normales',
                data: [
                    [0.0, 2.295081967, 0.4918032787],
                    [2.941176471, 2.786885246, 0.8196721311],
                    [5.882352941, 3.770491803, 1.475409836],
                    [8.823529412, 5.245901639, 2.459016393],
                    [11.76470588, 6.557377049, 3.606557377],
                    [14.70588235, 7.37704918, 4.590163934],
                    [17.64705882, 7.049180328, 4.426229508],
                    [20.58823529, 6.229508197, 3.442622951],
                    [23.52941176, 5.409836066, 2.295081967],
                    [26.47058824, 4.262295082, 1.147540984],
                    [29.41176471, 2.950819672, 0.3278688525],
                    [32.35294118, 1.803278689, -0.3278688525],
                    [35.29411765, 0.8196721311, -0.9836065574],
                    [38.23529412, 0.1639344262, -1.147540984],
                    [41.17647059, -0.1639344262, -1.147540984],
                    [44.11764706, -0.1639344262, -1.147540984],
                    [47.05882353, -0.1639344262, -0.9836065574],
                    [50.0, -0.3278688525, -1.147540984],
                    [52.94117647, -0.8196721311, -1.967213115],
                    [55.88235294, -1.31147541, -3.278688525],
                    [58.82352941, -2.131147541, -4.918032787],
                    [61.76470588, -2.950819672, -6.393442623],
                    [64.70588235, -3.770491803, -7.049180328],
                    [67.64705882, -3.442622951, -6.885245902],
                    [70.58823529, -2.62295082, -6.229508197],
                    [73.52941176, -1.475409836, -5.081967213],
                    [76.47058824, -0.4918032787, -3.770491803],
                    [79.41176471, 0.1639344262, -2.62295082],
                    [82.35294118, 0.4918032787, -1.639344262],
                    [85.29411765, 1.147540984, -0.9836065574],
                    [88.23529412, 1.639344262, -0.6557377049],
                    [91.17647059, 1.639344262, -0.3278688525],
                    [94.11764706, 1.475409836, -0.1639344262],
                    [97.05882353, 1.475409836, 0.1639344262],
                    [100.0, 2.295081967, 0.6557377049]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
            },
            {
                name: 'Izquierda',
                data: [],
                dashStyle: 'longdash'
            },
            {
                name: 'Derecha',
                data: [],
                dashStyle: 'longdash'
            }
        ]
    },
    fp_hip_high_chart_data: {
        chart: {
            type: "spline",
            height: 350
        },
        title: {
            text: 'Hip Ad/Abduktion [deg]'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'float',
            title: {
                text: 'Gait cicle'
            }
        },
        yAxis: {
            title: {
                text: 'Abd / Add'
            },
            max: 30,
            min: -30
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Ang: {point.y:.2f}°',
            crosshairs: true,
            shared: false,
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                name: 'Rangos Normales',
                data: [
                    [0.0, 6.885245902, 2.950819672],
                    [2.941176471, 7.868852459, 4.262295082],
                    [5.882352941, 9.836065574, 6.557377049],
                    [8.823529412, 12.45901639, 8.852459016],
                    [11.76470588, 14.75409836, 10.81967213],
                    [14.70588235, 16.39344262, 12.13114754],
                    [17.64705882, 16.39344262, 11.80327869],
                    [20.58823529, 15.40983607, 10.49180328],
                    [23.52941176, 14.75409836, 9.508196721],
                    [26.47058824, 14.09836066, 8.852459016],
                    [29.41176471, 13.44262295, 8.196721311],
                    [32.35294118, 12.78688525, 8.196721311],
                    [35.29411765, 12.13114754, 8.196721311],
                    [38.23529412, 11.47540984, 8.196721311],
                    [41.17647059, 11.47540984, 8.196721311],
                    [44.11764706, 11.14754098, 7.540983607],
                    [47.05882353, 11.47540984, 6.885245902],
                    [50.0, 10.49180328, 5.901639344],
                    [52.94117647, 9.508196721, 4.262295082],
                    [55.88235294, 8.524590164, 1.967213115],
                    [58.82352941, 5.901639344, -1.31147541],
                    [61.76470588, 3.606557377, -3.93442623],
                    [64.70588235, 1.31147541, -5.901639344],
                    [67.64705882, 0.9836065574, -4.918032787],
                    [70.58823529, 1.639344262, -3.93442623],
                    [73.52941176, 2.950819672, -2.62295082],
                    [76.47058824, 3.93442623, -1.639344262],
                    [79.41176471, 4.262295082, -1.31147541],
                    [82.35294118, 4.590163934, -0.6557377049],
                    [85.29411765, 5.245901639, 0.6557377049],
                    [88.23529412, 5.573770492, 0.9836065574],
                    [91.17647059, 5.901639344, 0.9836065574],
                    [94.11764706, 5.901639344, 0.6557377049],
                    [97.05882353, 6.229508197, 0.6557377049],
                    [100.0, 7.540983607, 1.639344262]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
            },
            {
                name: 'Izquierda',
                data: [],
                dashStyle: 'longdash'
            },
            {
                name: 'Derecha',
                data: [],
                dashStyle: 'longdash'
            }
        ]
    },
    fp_kne_high_chart_data: {
        chart: {
            type: "spline",
            height: 350
        },
        title: {
            text: 'Keen Varus/Valgus [deg]'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'float',
            title: {
                text: 'Gait cicle'
            }
        },
        yAxis: {
            title: {
                text: 'Valg / Var'
            },
            max: 15,
            min: -15
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Ang: {point.y:.2f}°',
            crosshairs: true,
            shared: false,
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                name: 'Rangos Normales',
                data: [
                    [0.0, -1.967213115, -8.852459016],
                    [2.941176471, -2.295081967, -9.508196721],
                    [5.882352941, -2.131147541, -10],
                    [8.823529412, -1.475409836, -9.180327869],
                    [11.76470588, -0.6557377049, -8.032786885],
                    [14.70588235, 0.1639344262, -6.557377049],
                    [17.64705882, -0.3278688525, -5.901639344],
                    [20.58823529, -0.8196721311, -5.409836066],
                    [23.52941176, -0.8196721311, -6.06557377],
                    [26.47058824, -1.147540984, -6.885245902],
                    [29.41176471, -1.639344262, -8.032786885],
                    [32.35294118, -2.131147541, -8.68852459],
                    [35.29411765, -2.786885246, -9.180327869],
                    [38.23529412, -3.114754098, -9.344262295],
                    [41.17647059, -3.114754098, -9.344262295],
                    [44.11764706, -3.278688525, -9.508196721],
                    [47.05882353, -3.278688525, -9.672131148],
                    [50.0, -3.114754098, -9.672131148],
                    [52.94117647, -2.295081967, -9.672131148],
                    [55.88235294, -1.31147541, -8.68852459],
                    [58.82352941, -0.1639344262, -7.049180328],
                    [61.76470588, 1.31147541, -5.737704918],
                    [64.70588235, 2.295081967, -5.573770492],
                    [67.64705882, 1.803278689, -7.213114754],
                    [70.58823529, 1.147540984, -9.016393443],
                    [73.52941176, 0.8196721311, -9.672131148],
                    [76.47058824, 1.31147541, -8.852459016],
                    [79.41176471, 1.967213115, -7.213114754],
                    [82.35294118, 1.967213115, -5.409836066],
                    [85.29411765, 1.639344262, -4.098360656],
                    [88.23529412, 0.9836065574, -3.93442623],
                    [91.17647059, -0.1639344262, -5.573770492],
                    [94.11764706, -0.9836065574, -8.032786885],
                    [97.05882353, -1.147540984, -10.32786885],
                    [100.0, -1.147540984, -11.14754098]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
            },
            {
                name: 'Izquierda',
                data: [],
                dashStyle: 'longdash'
            },
            {
                name: 'Derecha',
                data: [],
                dashStyle: 'longdash'
            }
        ]
    },
    fp_ank_high_chart_data: {
        chart: {
            type: "spline",
            height: 350
        },
        title: {
            text: 'Foot Varus/Valgous [deg]'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'float',
            title: {
                text: 'Gait cicle'
            }
        },
        yAxis: {
            title: {
                text: 'Valg / Var'
            },
            max: 30,
            min: -5
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Ang: {point.y:.2f}°',
            crosshairs: true,
            shared: false,
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                name: 'Rangos Normales',
                data: [
                    [0.0, 3.387096774, -1.451612903],
                    [2.857142857, 3.064516129, -1.774193548],
                    [5.714285714, 2.580645161, -2.419354839],
                    [8.571428571, 2.258064516, -2.741935484],
                    [11.42857143, 2.096774194, -2.903225806],
                    [14.28571429, 2.096774194, -3.064516129],
                    [17.14285714, 2.258064516, -3.064516129],
                    [20.0, 2.741935484, -3.064516129],
                    [22.85714286, 2.903225806, -3.225806452],
                    [25.71428571, 3.064516129, -3.225806452],
                    [28.57142857, 3.064516129, -3.548387097],
                    [31.42857143, 2.903225806, -3.387096774],
                    [34.28571429, 3.064516129, -3.709677419],
                    [37.14285714, 3.225806452, -3.709677419],
                    [40.0, 3.225806452, -4.032258065],
                    [42.85714286, 3.548387097, -4.193548387],
                    [45.71428571, 3.870967742, -3.870967742],
                    [48.57142857, 4.35483871, -3.709677419],
                    [51.42857143, 4.516129032, -3.709677419],
                    [54.28571429, 3.870967742, -3.548387097],
                    [57.14285714, 2.580645161, -3.064516129],
                    [60.0, 1.129032258, -4.193548387],
                    [62.85714286, 0.3225806452, -5.806451613],
                    [65.71428571, 0.8064516129, -5.967741935],
                    [68.57142857, 1.451612903, -4.193548387],
                    [71.42857143, 2.096774194, -3.064516129],
                    [74.28571429, 2.580645161, -2.419354839],
                    [77.14285714, 3.225806452, -2.258064516],
                    [80.0, 3.548387097, -1.774193548],
                    [82.85714286, 3.225806452, -1.290322581],
                    [85.71428571, 2.741935484, -1.129032258],
                    [88.57142857, 2.903225806, -1.290322581],
                    [91.42857143, 3.870967742, -1.451612903],
                    [94.28571429, 4.35483871, -1.290322581],
                    [97.14285714, 4.35483871, -0.9677419355],
                    [100.0, 4.032258065, -0.8064516129]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
            },
            {
                name: 'Izquierda',
                data: [],
                dashStyle: 'longdash'
            },
            {
                name: 'Derecha',
                data: [],
                dashStyle: 'longdash'
            }
        ]
    },
    tp_plv_high_chart_data: {
        chart: {
            type: "spline",
            height: 350
        },
        title: {
            text: 'Pelvic Rotation [deg]'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'float',
            title: {
                text: 'Gait cicle'
            }
        },
        yAxis: {
            title: {
                text: 'Ext / Int'
            },
            max: 30,
            min: -30
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Ang: {point.y:.2f}°',
            crosshairs: true,
            shared: false,
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                name: 'Rangos Normales',
                data: [
                    [0.0, 7.252747253, 0.3296703297],
                    [2.941176471, 6.923076923, 0.3296703297],
                    [5.882352941, 5.934065934, 0.3296703297],
                    [8.823529412, 4.945054945, -0.6593406593],
                    [11.76470588, 3.956043956, -1.318681319],
                    [14.70588235, 3.956043956, -0.989010989],
                    [17.64705882, 4.285714286, -0.3296703297],
                    [20.58823529, 4.615384615, 0.3296703297],
                    [23.52941176, 4.945054945, 0.3296703297],
                    [26.47058824, 4.945054945, 0.3296703297],
                    [29.41176471, 4.615384615, -0.3296703297],
                    [32.35294118, 3.956043956, -0.989010989],
                    [35.29411765, 3.296703297, -1.318681319],
                    [38.23529412, 2.307692308, -2.637362637],
                    [41.17647059, 0.6593406593, -2.967032967],
                    [44.11764706, -1.318681319, -4.285714286],
                    [47.05882353, -1.978021978, -4.945054945],
                    [50.0, -2.307692308, -5.274725275],
                    [52.94117647, -1.978021978, -5.274725275],
                    [55.88235294, -0.989010989, -4.945054945],
                    [58.82352941, 0.3296703297, -4.615384615],
                    [61.76470588, 1.648351648, -4.615384615],
                    [64.70588235, 2.307692308, -4.615384615],
                    [67.64705882, 1.318681319, -4.945054945],
                    [70.58823529, 0.989010989, -4.945054945],
                    [73.52941176, 1.318681319, -5.274725275],
                    [76.47058824, 1.318681319, -4.615384615],
                    [79.41176471, 1.648351648, -3.956043956],
                    [82.35294118, 1.978021978, -3.626373626],
                    [85.29411765, 2.637362637, -3.296703297],
                    [88.23529412, 3.626373626, -2.967032967],
                    [91.17647059, 4.615384615, -2.307692308],
                    [94.11764706, 5.934065934, -1.318681319],
                    [97.05882353, 6.923076923, -0.3296703297],
                    [100.0, 7.252747253, 0.3296703297]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
            },
            {
                name: 'Izquierda',
                data: [],
                dashStyle: 'longdash'
            },
            {
                name: 'Derecha',
                data: [],
                dashStyle: 'longdash'
            }
        ]
    },
    tp_hip_high_chart_data: {
        chart: {
            type: "spline",
            height: 350
        },
        title: {
            text: 'Hip Rotation [deg]'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'float',
            title: {
                text: 'Gait cicle'
            }
        },
        yAxis: {
            title: {
                text: 'Ext / Int'
            },
            max: 30,
            min: -30
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Ang: {point.y:.2f}°',
            crosshairs: true,
            shared: false,
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                name: 'Rangos Normales',
                data: [
                    [0.0, 3.606557377, -8.852459016],
                    [2.941176471, 2.62295082, -7.540983607],
                    [5.882352941, 2.62295082, -5.901639344],
                    [8.823529412, 4.918032787, -4.590163934],
                    [11.76470588, 7.540983607, -2.950819672],
                    [14.70588235, 8.852459016, -2.950819672],
                    [17.64705882, 9.180327869, -2.62295082],
                    [20.58823529, 8.852459016, -2.295081967],
                    [23.52941176, 8.852459016, -1.31147541],
                    [26.47058824, 9.180327869, -0.9836065574],
                    [29.41176471, 10.16393443, -1.31147541],
                    [32.35294118, 11.14754098, -0.6557377049],
                    [35.29411765, 12.13114754, 0.9836065574],
                    [38.23529412, 14.09836066, 1.967213115],
                    [41.17647059, 15.40983607, 2.295081967],
                    [44.11764706, 15.73770492, 1.967213115],
                    [47.05882353, 14.42622951, 1.31147541],
                    [50.0, 13.7704918, 0.3278688525],
                    [52.94117647, 13.1147541, -0.9836065574],
                    [55.88235294, 11.80327869, -2.950819672],
                    [58.82352941, 9.508196721, -4.918032787],
                    [61.76470588, 7.868852459, -6.557377049],
                    [64.70588235, 6.229508197, -7.540983607],
                    [67.64705882, 4.262295082, -8.196721311],
                    [70.58823529, 2.62295082, -8.196721311],
                    [73.52941176, 0.6557377049, -7.868852459],
                    [76.47058824, 0.3278688525, -7.540983607],
                    [79.41176471, -0.3278688525, -6.885245902],
                    [82.35294118, 0.3278688525, -5.245901639],
                    [85.29411765, 0.6557377049, -4.262295082],
                    [88.23529412, 2.295081967, -4.262295082],
                    [91.17647059, 3.278688525, -5.573770492],
                    [94.11764706, 4.262295082, -6.885245902],
                    [97.05882353, 4.918032787, -8.196721311],
                    [100.0, 4.590163934, -7.540983607]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
            },
            {
                name: 'Izquierda',
                data: [],
                dashStyle: 'longdash'
            },
            {
                name: 'Derecha',
                data: [],
                dashStyle: 'longdash'
            }
        ]
    },
    tp_kne_high_chart_data: {
        chart: {
            type: "spline",
            height: 350
        },
        title: {
            text: 'Keen Rotation [deg]'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'float',
            title: {
                text: 'Gait cicle'
            }
        },
        yAxis: {
            title: {
                text: 'Ext / Int'
            },
            max: 40,
            min: -40
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Ang: {point.y:.2f}°',
            crosshairs: true,
            shared: false,
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                name: 'Rangos Normales',
                data: [
                    [0.0, -16.61202186, -27.54098361],
                    [2.941176471, -15.73770492, -28.41530055],
                    [5.882352941, -14.86338798, -28.85245902],
                    [8.823529412, -13.1147541, -28.41530055],
                    [11.76470588, -10.92896175, -26.66666667],
                    [14.70588235, -10.92896175, -26.2295082],
                    [17.64705882, -11.80327869, -27.97814208],
                    [20.58823529, -12.24043716, -29.28961749],
                    [23.52941176, -11.80327869, -29.28961749],
                    [26.47058824, -10.49180328, -28.41530055],
                    [29.41176471, -10.92896175, -28.85245902],
                    [32.35294118, -11.80327869, -28.85245902],
                    [35.29411765, -12.24043716, -28.85245902],
                    [38.23529412, -13.1147541, -28.85245902],
                    [41.17647059, -13.1147541, -29.28961749],
                    [44.11764706, -12.67759563, -29.28961749],
                    [47.05882353, -11.80327869, -28.41530055],
                    [50.0, -10.49180328, -27.54098361],
                    [52.94117647, -10.05464481, -27.10382514],
                    [55.88235294, -10.92896175, -28.41530055],
                    [58.82352941, -13.55191257, -31.03825137],
                    [61.76470588, -14.42622951, -32.34972678],
                    [64.70588235, -13.1147541, -32.34972678],
                    [67.64705882, -9.180327869, -31.47540984],
                    [70.58823529, -6.120218579, -31.03825137],
                    [73.52941176, -5.245901639, -30.16393443],
                    [76.47058824, -6.994535519, -29.28961749],
                    [79.41176471, -8.743169399, -28.85245902],
                    [82.35294118, -10.92896175, -30.16393443],
                    [85.29411765, -14.86338798, -32.34972678],
                    [88.23529412, -17.92349727, -32.78688525],
                    [91.17647059, -21.42076503, -31.91256831],
                    [94.11764706, -20.98360656, -28.85245902],
                    [97.05882353, -19.67213115, -27.10382514],
                    [100.0, -19.23497268, -27.10382514]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
            },
            {
                name: 'Izquierda',
                data: [],
                dashStyle: 'longdash'
            },
            {
                name: 'Derecha',
                data: [],
                dashStyle: 'longdash'
            }
        ]
    },
    tp_ank_high_chart_data: {
        chart: {
            type: "spline",
            height: 350
        },
        title: {
            text: 'Foot Progression Angle [deg]'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'float',
            title: {
                text: 'Gait cicle'
            }
        },
        yAxis: {
            title: {
                text: 'Ext / Int'
            },
            max: 40,
            min: -30
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Ang: {point.y:.2f}°',
            crosshairs: true,
            shared: false,
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                name: 'Rangos Normales',
                data: [
                    [0.0, -9.065934066, -20.6043956],
                    [2.941176471, -9.065934066, -20.19230769],
                    [5.882352941, -9.478021978, -19.78021978],
                    [8.823529412, -10.3021978, -19.78021978],
                    [11.76470588, -11.53846154, -19.36813187],
                    [14.70588235, -11.95054945, -18.95604396],
                    [17.64705882, -11.53846154, -18.54395604],
                    [20.58823529, -11.12637363, -17.71978022],
                    [23.52941176, -10.3021978, -17.30769231],
                    [26.47058824, -9.89010989, -16.48351648],
                    [29.41176471, -9.065934066, -16.07142857],
                    [32.35294118, -8.653846154, -15.65934066],
                    [35.29411765, -8.241758242, -16.07142857],
                    [38.23529412, -9.478021978, -16.48351648],
                    [41.17647059, -10.3021978, -17.30769231],
                    [44.11764706, -10.3021978, -17.71978022],
                    [47.05882353, -9.89010989, -18.13186813],
                    [50.0, -9.065934066, -18.13186813],
                    [52.94117647, -8.241758242, -17.30769231],
                    [55.88235294, -7.417582418, -16.48351648],
                    [58.82352941, -6.593406593, -17.30769231],
                    [61.76470588, -4.532967033, -20.19230769],
                    [64.70588235, -2.884615385, -25.13736264],
                    [67.64705882, -4.532967033, -28.84615385],
                    [70.58823529, -6.181318681, -30.08241758],
                    [73.52941176, -7.005494505, -30.08241758],
                    [76.47058824, -7.82967033, -30.08241758],
                    [79.41176471, -9.065934066, -30.08241758],
                    [82.35294118, -11.95054945, -30.08241758],
                    [85.29411765, -14.42307692, -30.08241758],
                    [88.23529412, -14.83516484, -28.43406593],
                    [91.17647059, -11.53846154, -25.54945055],
                    [94.11764706, -9.065934066, -22.66483516],
                    [97.05882353, -8.241758242, -20.6043956],
                    [100.0, -8.241758242, -20.6043956]
                ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                fillOpacity: 0.3,
                zIndex: 0
            },
            {
                name: 'Izquierda',
                data: [],
                dashStyle: 'longdash'
            },
            {
                name: 'Derecha',
                data: [],
                dashStyle: 'longdash'
            }
        ]
    }
};
// Tutorial
// https://medium.com/beautiful-angular/angular-2-and-environment-variables-59c57ba643be 
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(75);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

var routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(323),
        styles: [__webpack_require__(314)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pages_module__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_auth_guard_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_auth_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_mdl__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_highcharts_dist_HighchartsService__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_highcharts_dist_HighchartsService__);
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














function highchartsFactory() {
    return __webpack_require__(291);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            // PipeModule.forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_mdl__["MdlModule"],
            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__pages_login_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_auth_service__["a" /* AuthService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_13_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                useFactory: highchartsFactory
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(305);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
//export * from './app.component';

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_auth_guard_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__(230);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { HomepageComponent } from './homepage/homepage.component';
// import { LoginModule } from './login/login.module';


var routes = [
    {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule',
    },
    {
        path: 'register',
        loadChildren: 'app/pages/register/register.module#RegisterModule',
    },
    {
        path: 'dashboard-attorney',
        loadChildren: 'app/pages/dashboard-attorney/dashboard-attorney.module#DashboardAttorneyModule',
        canLoad: [__WEBPACK_IMPORTED_MODULE_1__login_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'dashboard-medical-center',
        loadChildren: 'app/pages/dashboard-medical-center/dashboard-medical-center.module#DashboardMedicalCenterModule',
    },
    {
        path: 'dashboard-therapist',
        loadChildren: 'app/pages/dashboard-therapist/dashboard-therapist.module#DashboardTherapistModule',
        canLoad: [__WEBPACK_IMPORTED_MODULE_1__login_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */],
        children: [
            { path: '', redirectTo: 'homepage', pathMatch: 'full' },
            { path: 'homepage', loadChildren: 'app/pages/homepage/homepage.module#HomepageModule', }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
// @NgModule({
//   imports: [
//     RouterModule.forChild( routes )
//   ],
//   exports: [
//     RouterModule
//   ],
//   providers: [
//     // CanDeactivateGuard
//   ]
// })
// export class AppRoutingModule {}
//# sourceMappingURL=pages-routing.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__ = __webpack_require__(307);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */]
        ]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "<h1>\n  <router-outlet></router-outlet>\n</h1>\n"

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "<p>\n  <router-outlet></router-outlet>\n</p>\n"

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(277);


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.bundle.js.map