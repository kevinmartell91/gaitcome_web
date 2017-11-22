webpackJsonp([0,11],{

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_mdl__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_medical_center_routing__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__medical_center_medical_center_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__medicalCenter_medical_center_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_pipes_pipe_module__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_medical_center_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__therapist_list_therapist_list_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__therapist_therapist_list_therapist_list_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__therapist_therapist_add_therapist_add_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__therapist_therapist_delete_therapist_delete_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__therapist_therapist_update_therapist_update_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__therapist_therapist_read_therapist_read_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__attorney_list_attorney_list_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__patient_patient_list_patient_list_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__patient_patient_add_patient_add_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__patient_patient_update_patient_update_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__patient_patient_read_patient_read_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__patient_patient_delete_patient_delete_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__results_results_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__result_result_list_result_list_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__result_result_detail_result_detail_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__result_result_preview_result_preview_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_highcharts__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_highcharts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMedicalCenterModule", function() { return DashboardMedicalCenterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Pipes


// Therapist components






// Patient components






// Result components







var DashboardMedicalCenterModule = (function () {
    function DashboardMedicalCenterModule() {
    }
    return DashboardMedicalCenterModule;
}());
DashboardMedicalCenterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__therapist_therapist_add_therapist_add_component__["a" /* TherapistAddComponent */],
            __WEBPACK_IMPORTED_MODULE_13__therapist_therapist_delete_therapist_delete_component__["a" /* TherapistDeleteComponent */],
            __WEBPACK_IMPORTED_MODULE_14__therapist_therapist_update_therapist_update_component__["a" /* TherapistUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_15__therapist_therapist_read_therapist_read_component__["a" /* TherapistReadComponent */],
            __WEBPACK_IMPORTED_MODULE_10__therapist_list_therapist_list_component__["a" /* TherapistListDashboardComponent */], __WEBPACK_IMPORTED_MODULE_10__therapist_list_therapist_list_component__["b" /* NgbdModalContent */],
            __WEBPACK_IMPORTED_MODULE_16__attorney_list_attorney_list_component__["a" /* AttorneyListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_medical_center_component__["a" /* DashboardMedicalCenterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__medical_center_medical_center_component__["a" /* MedicalCenterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__medicalCenter_medical_center_component__["a" /* MedicalCenterComponent_out */],
            __WEBPACK_IMPORTED_MODULE_17__patient_patient_list_patient_list_component__["a" /* PatientListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__patient_patient_add_patient_add_component__["a" /* PatientAddComponent */],
            __WEBPACK_IMPORTED_MODULE_19__patient_patient_update_patient_update_component__["a" /* PatientUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_20__patient_patient_read_patient_read_component__["a" /* PatientReadComponent */],
            __WEBPACK_IMPORTED_MODULE_21__patient_patient_delete_patient_delete_component__["a" /* PatientDeleteComponent */],
            __WEBPACK_IMPORTED_MODULE_23__result_result_list_result_list_component__["a" /* ResultListComponent */],
            __WEBPACK_IMPORTED_MODULE_24__result_result_detail_result_detail_component__["a" /* ResultDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_22__results_results_component__["a" /* ResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__result_result_detail_result_detail_component__["b" /* ResultDrawerComponent */],
            __WEBPACK_IMPORTED_MODULE_25__result_result_preview_result_preview_component__["a" /* ResultPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__therapist_therapist_list_therapist_list_component__["a" /* TherapistListComponent */],
            __WEBPACK_IMPORTED_MODULE_24__result_result_detail_result_detail_component__["c" /* VideoDrawerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__shared_pipes_pipe_module__["a" /* PipeModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_26_angular2_highcharts__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_mdl__["MdlModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_medical_center_routing__["a" /* routing */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__therapist_therapist_add_therapist_add_component__["a" /* TherapistAddComponent */],
            __WEBPACK_IMPORTED_MODULE_13__therapist_therapist_delete_therapist_delete_component__["a" /* TherapistDeleteComponent */],
            __WEBPACK_IMPORTED_MODULE_14__therapist_therapist_update_therapist_update_component__["a" /* TherapistUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_15__therapist_therapist_read_therapist_read_component__["a" /* TherapistReadComponent */],
            __WEBPACK_IMPORTED_MODULE_10__therapist_list_therapist_list_component__["a" /* TherapistListDashboardComponent */], __WEBPACK_IMPORTED_MODULE_10__therapist_list_therapist_list_component__["b" /* NgbdModalContent */],
            __WEBPACK_IMPORTED_MODULE_17__patient_patient_list_patient_list_component__["a" /* PatientListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__patient_patient_add_patient_add_component__["a" /* PatientAddComponent */],
            __WEBPACK_IMPORTED_MODULE_19__patient_patient_update_patient_update_component__["a" /* PatientUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_20__patient_patient_read_patient_read_component__["a" /* PatientReadComponent */],
            __WEBPACK_IMPORTED_MODULE_21__patient_patient_delete_patient_delete_component__["a" /* PatientDeleteComponent */],
            __WEBPACK_IMPORTED_MODULE_22__results_results_component__["a" /* ResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__result_result_preview_result_preview_component__["a" /* ResultPreviewComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__therapist_therapist_add_therapist_add_component__["a" /* TherapistAddComponent */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
        ]
    })
], DashboardMedicalCenterModule);

//# sourceMappingURL=dashboard-medical-center.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(6);
var filter_1 = __webpack_require__(181);
Observable_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_highcharts__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_highcharts__);
/* unused harmony export PatientAngles */
/* unused harmony export NormalAngles */
/* unused harmony export SeriesAngles */
/* unused harmony export SplKne */
/* unused harmony export KinematicsAnalysis */
/* unused harmony export Person */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResultDrawerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VideoDrawerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// You can load Highcharts static if you need its API

__webpack_require__(444)(__WEBPACK_IMPORTED_MODULE_10_highcharts__);
__webpack_require__(446)(__WEBPACK_IMPORTED_MODULE_10_highcharts__);
__webpack_require__(445)(__WEBPACK_IMPORTED_MODULE_10_highcharts__);
// If you want you can also load any Highcharts module here: 'highcharts/highcharts-more', 'highcharts/modules/map' and etc.
// See the node_modules/highcharts folders to find a necessary module
//import * as Highcharts3d from 'highcharts/highcharts-3d';
// Any Highcharts static API is available throw the Highcharts variable
__WEBPACK_IMPORTED_MODULE_10_highcharts__["setOptions"]({
    colors: ['#058DC7', '#ED561B']
});
// Plug the highcharts-3d module
//Highcharts3d(Highcharts); 
var PatientAngles = (function () {
    function PatientAngles() {
    }
    return PatientAngles;
}());

var NormalAngles = (function () {
    function NormalAngles() {
    }
    return NormalAngles;
}());

var SeriesAngles = (function () {
    function SeriesAngles() {
    }
    return SeriesAngles;
}());

var SplKne = (function () {
    function SplKne() {
    }
    return SplKne;
}());

var KinematicsAnalysis = (function () {
    function KinematicsAnalysis() {
    }
    return KinematicsAnalysis;
}());

var Person = (function () {
    function Person() {
    }
    return Person;
}());

var ResultDetailComponent = (function () {
    function ResultDetailComponent(sanitizer, http, route, router) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.route = route;
        this.router = router;
        this.video = { id: '0qLblUty41c' };
        this.baseUrl = 'https://www.youtube.com/embed/';
        this.URL_WEB_SERVICE = 'http://localhost:8080/api/kinematics_analysis/';
        this.URL_WEB_SERVICE_TEMP = 'http://localhost:8080/api/kinematics_analysis/596ee50efe45650b9d013c50';
        this.kinematicsAnalysiss = [];
        this.people = [];
        this.displayedPeople = [];
        // saveChart(chart) {
        //   this.chart = chart;
        // }
        // addPoint() {
        //   // this.chart.series[0].addPoint(Math.random() * 10);
        //   // this.chart.series[1].addPoint(Math.random() * -10);
        // }
        // onPointSelect(point) {
        //   alert(`${point.y} is selected`);
        // }
        // onSeriesHide(series) {
        //   alert(`${series.name} is selected`);
        // }
        this.menuState = 'out';
        this.videoState = 'out';
        this.graphState = 'out';
        this.dynamicColDetail = '';
        this.dynamicColGraph = 'scrollable';
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);
        this.kinematicsAnalysis = '';
    }
    ResultDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].production) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            this.token = currentUser && currentUser.token;
            this.route.params
                .subscribe(function (params) {
                return _this.hard_id = params['id'];
            });
            this.getGaitAnalysis();
        }
        else {
            this.token = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].token;
            this.kinematicsAnalysis = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].resultDetail;
            // this.hardShowGraph(this.kinematicsAnalysis);
            // this.hardCodeAllNormalRanges();
            this.populateHighCharts(this.kinematicsAnalysis);
        }
    };
    ResultDetailComponent.prototype._getJSON = function (url, options) {
        return this.http.get(url, options)
            .map(function (res) { return res.json(); });
    };
    ResultDetailComponent.prototype._postJSON = function (url, body, option) {
        return this.http.post(url, body, option)
            .map(function (res) { return res.json(); });
    };
    ResultDetailComponent.prototype._putJSON = function (url, body, option) {
        return this.http.put(url, body, option)
            .map(function (res) { return res.json(); });
    };
    ResultDetailComponent.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return options;
    };
    ResultDetailComponent.prototype.handleError = function (error) {
        // just logging to the console for now...
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    ResultDetailComponent.prototype.getGaitAnalysis = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // this._getJSON(this.URL_WEB_SERVICE_TEMP, options)
        this._getJSON(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].URL_WEB_SERVICE_KINEMATIC_ANALYSIS + this.hard_id, options)
            .subscribe(function (json) {
            _this.kinematicsAnalysis = json;
            _this.populateHighCharts(json);
        });
    };
    ResultDetailComponent.prototype.populateHighCharts = function (kinematicsAnalysis) {
        this.sp_kne_high_chart_data = kinematicsAnalysis.sp_kne_high_chart_data;
        this.sp_ank_high_chart_data = kinematicsAnalysis.sp_ank_high_chart_data;
        this.sp_plv_high_chart_data = kinematicsAnalysis.sp_plv_high_chart_data;
        this.sp_hip_high_chart_data = kinematicsAnalysis.sp_hip_high_chart_data;
        this.fp_kne_high_chart_data = kinematicsAnalysis.fp_kne_high_chart_data;
        this.fp_ank_high_chart_data = kinematicsAnalysis.fp_ank_high_chart_data;
        this.fp_plv_high_chart_data = kinematicsAnalysis.fp_plv_high_chart_data;
        this.fp_hip_high_chart_data = kinematicsAnalysis.fp_hip_high_chart_data;
        this.tp_kne_high_chart_data = kinematicsAnalysis.tp_kne_high_chart_data;
        this.tp_ank_high_chart_data = kinematicsAnalysis.tp_ank_high_chart_data;
        this.tp_plv_high_chart_data = kinematicsAnalysis.tp_plv_high_chart_data;
        this.tp_hip_high_chart_data = kinematicsAnalysis.tp_hip_high_chart_data;
        console.log("tp_hip_high_chart_data", this.tp_hip_high_chart_data);
    };
    ResultDetailComponent.prototype.toggleDetails = function () {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
        this.dynamicColDetail = this.dynamicColDetail === '' ? 'col-md-1' : '';
    };
    ResultDetailComponent.prototype.toggleVideo = function () {
        // 1-line if statement that toggles the value:
        this.videoState = this.videoState === 'out' ? 'in' : 'out';
        this.graphState = this.graphState === 'out' ? 'in' : 'out';
        this.dynamicColGraph = this.dynamicColGraph === 'scrollable' ? 'scrollable_video' : 'scrollable';
    };
    ResultDetailComponent.prototype.testRetriveHighChartFromEnvionmentFile = function () {
        console.log("environment.sp_plv_high_chart_data", __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].sp_plv_high_chart_data.series[1].name);
        console.log("environment.sp_plv_high_chart_data_JSOM.stringfy", JSON.stringify(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].sp_plv_high_chart_data));
    };
    ResultDetailComponent.prototype.postManual = function () {
        this.postKinematicAnalysisAsJson_thisShouldBeDoneByThe3DSystem();
        console.log("postManual()", JSON.stringify(this.postObjReturn));
    };
    ResultDetailComponent.prototype.putMatLab_manual = function () {
        this.putMatLabData_manual();
        console.log("putMatLabData_manual()");
    };
    ResultDetailComponent.prototype.putManual = function () {
        this.putData_manual();
        console.log("putManual()");
    };
    ResultDetailComponent.prototype.showGraphWithCommentedAttributes = function (kinematicsAnalysis) {
        this.options = {
            chart: {
                type: 'spline',
                height: 350
                // width: 300
            },
            title: {
                text: 'Keen - Flex/Ext [deg]'
            },
            subtitle: {
                text: 'kinematic analysis'
            },
            xAxis: {
                type: 'float',
                // dateTimeLabelFormats: { // don't display the dummy year
                //     month: '%e. %b',
                //     year: '%Y'
                // },
                title: {
                    text: 'Gait cicle'
                }
            },
            yAxis: {
                title: {
                    text: 'Ext / Flex'
                },
                max: 30,
                min: -5
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%Y}: {point.y:.2f} m',
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
                    name: 'Norma range',
                    //data: kinematicsAnalysis.spl_kne.normal_ranges,
                    data: [
                        [0, 14.72677596, 3.825136612],
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
                        [100, 14.53551913, 4.207650273]
                    ],
                    type: 'arearange',
                    lineWidth: 0,
                    linkedTo: ':previous',
                    fillOpacity: 0.3,
                    zIndex: 0
                },
                {
                    name: 'Left side',
                    //data : kinematicsAnalysis.spl_kne.patient_angles,
                    data: [
                        [0, 0],
                        [4.545454545, 0.25],
                        [9.090909091, 1.41],
                        [13.63636364, 1.64],
                        [18.18181818, 1.6],
                        [22.72727273, 2.55],
                        [27.27272727, 2.62],
                        [31.81818182, 2.5],
                        [36.36363636, 2.42],
                        [40.90909091, 2.74],
                        [45.45454545, 2.62],
                        [50, 2.69],
                        [54.54545455, 2.81],
                        [59.09090909, 2.63],
                        [63.63636364, 2.77],
                        [68.18181818, 2.68],
                        [72.72727273, 2.56],
                        [77.27272727, 2.39],
                        [81.81818182, 2.3],
                        [86.36363636, 2],
                        [90.90909091, 1.85],
                        [95.45454545, 1.49],
                        [100, 2.08]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    name: 'Rigth side',
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    navigation: {
                        menuItemStyle: {
                            fontSize: '10px'
                        }
                    }
                }
            ],
        };
    };
    ResultDetailComponent.prototype.hardCodeAllNormalRanges = function () {
        this.sp_plv_high_chart_data = {
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
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    name: 'Derecha',
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                }
            ]
        };
        this.sp_hip_high_chart_data = {
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
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    name: 'Derecha',
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                }
            ]
        };
        this.sp_kne_high_chart_data = {
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
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    name: 'Derecha',
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                }
            ]
        };
        this.sp_ank_high_chart_data = {
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
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    name: 'Derecha',
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                }
            ]
        };
        this.fp_plv_high_chart_data = {
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
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    name: 'Derecha',
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                }
            ]
        };
        this.fp_hip_high_chart_data = {
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
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    name: 'Derecha',
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                }
            ]
        };
        this.fp_kne_high_chart_data = {
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
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    name: 'Derecha',
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                }
            ]
        };
        this.fp_ank_high_chart_data = {
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
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    name: 'Derecha',
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                }
            ]
        };
        this.tp_plv_high_chart_data = {
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
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    name: 'Derecha',
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                }
            ]
        };
        this.tp_hip_high_chart_data = {
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
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    name: 'Derecha',
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                }
            ]
        };
        this.tp_kne_high_chart_data = {
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
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    name: 'Derecha',
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                }
            ]
        };
        this.tp_ank_high_chart_data = {
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
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                },
                {
                    name: 'Derecha',
                    data: [
                        [0, 3],
                        [5.0, 0.28],
                        [11.0, 0.25],
                        [17.64705882, 0.2],
                        [23.52941176, 0.28],
                        [29.41176471, 0.28],
                        [35.29411765, 0.47],
                        [41.17647059, 0.79],
                        [47.05882353, 0.72],
                        [52.94117647, 1.02],
                        [58.82352941, 1.12],
                        [64.70588235, 1.2],
                        [70.58823529, 1.18],
                        [76.47058824, 1.19],
                        [82.35294118, 1.85],
                        [88.23529412, 2.22],
                        [94.11764706, 1.15],
                        [100, 3,]
                    ],
                    dashStyle: 'longdash'
                }
            ]
        };
    };
    ResultDetailComponent.prototype.postKinematicAnalysisAsJson_thisShouldBeDoneByThe3DSystem = function () {
        var _this = this;
        var json = {
            "patient_id": "5851f5c773dc11072a0a1a90",
            "medical_center_id": "5851f65673dc11072a0a1a93",
            "therapist_id": "599cae293a2b30157b11a18a",
            "accesories": {
                "is_assited_walk": true,
                "is_treadmills": true,
                "is_walker": true,
                "is_orthoses": true,
                "is_parallel_bars": false
            },
            "accesories_descriptions": {
                "assited_walk": "No se necesito",
                "treadmills": "Solo para precalentamiento",
                "walker": "Si se utlizó",
                "orthoses": "No se necesito",
                "parallel_bars": ""
            },
            // "lkne": [{
            //     "x": 123.31,
            //     "y": 543.4,
            //     "z": 54.54
            // }, {
            //     "x": 123.31,
            //     "y": 543.4,
            //     "z": 54.54
            // },{
            //     "x": 123.31,
            //     "y": 543.4,
            //     "z": 54.54
            // },{
            //     "x": 123.31,
            //     "y": 543.4,
            //     "z": 54.54
            // },{
            //     "x": 123.31,
            //     "y": 543.4,
            //     "z": 54.54
            // }],
            //   "spl_hip": [
            //       12.1234567890,
            //       14.1234567890,
            //       16.1234567890,
            //       12.1234567890,
            //       17.1234567890,
            //       14.12345678901234567890
            //   ],
            "spl_kne": {
                "patient_angles": [
                    [0, 0],
                    [4.545454545, 0.25],
                    [9.090909091, 7.41],
                    [13.63636364, 11.64],
                    [18.18181818, 3.6],
                    [22.72727273, 19.55],
                    [27.27272727, 15.62],
                    [31.81818182, 12.5],
                    [36.36363636, 22.42],
                    [40.90909091, 20.74],
                    [45.45454545, 32.62],
                    [50, 2.69],
                    [54.54545455, 2.81],
                    [59.09090909, 32.63],
                    [63.63636364, 22.77],
                    [68.18181818, 12.68],
                    [72.72727273, 6.56],
                    [77.27272727, 2.39],
                    [81.81818182, 2.3],
                    [86.36363636, 2],
                    [90.90909091, 1.85],
                    [95.45454545, 1.49],
                    [100, 2.08]
                ],
                "normal_ranges": [
                    [0, 14.72677596, 3.825136612],
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
                    [84.84848485, 24.15300546, 20.163934426],
                    [87.87878788, 34.3442623, 25.355191257],
                    [90.90909091, 24.3442623, 20.163934426],
                    [93.93939394, 24.15300546, 18.972677596],
                    [96.96969697, 14.15300546, 4.781420765],
                    [100, 14.53551913, 4.207650273]
                ]
            },
            //  attribute :  Object ;
            "sp_kne_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Keen Flex/Ext [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Flex" }, "max": 90, "min": -20 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 10.21857923, 5.409836066], [2.941176471, 13.22404372, 9.016393443], [5.882352941, 18.63387978, 12.62295082], [8.823529412, 23.44262295, 15.6284153], [11.76470588, 25.84699454, 18.03278689], [14.70588235, 26.44808743, 19.23497268], [17.64705882, 24.64480874, 18.03278689], [20.58823529, 22.24043716, 14.42622951], [23.52941176, 19.23497268, 13.22404372], [26.47058824, 16.83060109, 10.81967213], [29.41176471, 12.62295082, 7.213114754], [32.35294118, 9.617486339, 4.207650273], [35.29411765, 7.81420765, 1.803278689], [38.23529412, 6.612021858, 0.6010928962], [41.17647059, 6.612021858, 0.6010928962], [44.11764706, 7.213114754, 0.6010928962], [47.05882353, 9.016393443, 1.202185792], [50, 12.02185792, 3.606557377], [52.94117647, 16.2295082, 7.81420765], [55.88235294, 23.44262295, 14.42622951], [58.82352941, 31.8579235, 22.24043716], [61.76470588, 41.47540984, 33.66120219], [64.70588235, 51.09289617, 45.68306011], [67.64705882, 60.10928962, 54.09836066], [70.58823529, 67.92349727, 58.90710383], [73.52941176, 71.53005464, 60.10928962], [76.47058824, 72.13114754, 57.70491803], [79.41176471, 69.12568306, 53.49726776], [82.35294118, 63.71584699, 46.28415301], [85.29411765, 55.30054645, 37.86885246], [88.23529412, 43.87978142, 25.84699454], [91.17647059, 30.6557377, 13.82513661], [94.11764706, 19.23497268, 6.010928962], [97.05882353, 10.81967213, 3.606557377], [100, 11.42076503, 5.409836066]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] },
            "sp_ank_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Ankle Plant/DorsiFlex [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Plant / Dors" }, "max": 35, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 6.639784946, 0.3494623656], [2.941176471, 4.193548387, -2.446236559], [5.882352941, 1.397849462, -4.193548387], [8.823529412, -0.3494623656, -4.193548387], [11.76470588, 1.048387097, -1.747311828], [14.70588235, 3.494623656, 1.048387097], [17.64705882, 6.290322581, 3.14516129], [20.58823529, 8.037634409, 4.892473118], [23.52941176, 9.784946237, 5.940860215], [26.47058824, 10.83333333, 6.989247312], [29.41176471, 11.88172043, 6.989247312], [32.35294118, 12.2311828, 7.338709677], [35.29411765, 12.58064516, 7.338709677], [38.23529412, 13.97849462, 7.688172043], [41.17647059, 15.37634409, 8.037634409], [44.11764706, 16.77419355, 7.688172043], [47.05882353, 17.12365591, 6.989247312], [50, 16.77419355, 5.241935484], [52.94117647, 14.32795699, 2.446236559], [55.88235294, 9.435483871, -2.096774194], [58.82352941, 2.096774194, -8.387096774], [61.76470588, -5.940860215, -15.37634409], [64.70588235, -9.086021505, -20.2688172], [67.64705882, -6.989247312, -20.61827957], [70.58823529, -3.14516129, -16.42473118], [73.52941176, 1.397849462, -9.086021505], [76.47058824, 5.591397849, -3.844086022], [79.41176471, 8.73655914, 1.048387097], [82.35294118, 10.48387097, 4.193548387], [85.29411765, 11.1827957, 5.591397849], [88.23529412, 10.83333333, 5.940860215], [91.17647059, 9.435483871, 4.543010753], [94.11764706, 8.037634409, 1.747311828], [97.05882353, 7.338709677, 0.6989247312], [100, 5.940860215, 0.6989247312]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] },
            "sp_plv_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Pelvic Tilt [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Post / Ant" }, "max": 30, "min": -5 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 14.72677596, 3.825136612], [3.03030303, 15.10928962, 3.825136612], [6.060606061, 15.30054645, 3.825136612], [9.090909091, 15.30054645, 4.016393443], [12.12121212, 14.72677596, 4.207650273], [15.15151515, 14.53551913, 4.398907104], [18.18181818, 14.3442623, 4.590163934], [21.21212121, 13.96174863, 4.781420765], [24.24242424, 13.96174863, 5.163934426], [27.27272727, 14.15300546, 5.546448087], [30.3030303, 13.96174863, 5.737704918], [33.33333333, 13.7704918, 5.928961749], [36.36363636, 13.7704918, 6.120218579], [39.39393939, 13.57923497, 6.120218579], [42.42424242, 13.57923497, 5.928961749], [45.45454545, 13.96174863, 5.546448087], [48.48484848, 14.3442623, 5.163934426], [51.51515152, 14.3442623, 4.972677596], [54.54545455, 14.15300546, 4.781420765], [57.57575758, 13.96174863, 4.590163934], [60.60606061, 13.19672131, 4.207650273], [63.63636364, 12.81420765, 4.016393443], [66.66666667, 13.00546448, 4.016393443], [69.6969697, 13.00546448, 4.016393443], [72.72727273, 13.38797814, 4.207650273], [75.75757576, 13.7704918, 4.590163934], [78.78787879, 14.15300546, 4.781420765], [81.81818182, 14.15300546, 4.972677596], [84.84848485, 14.15300546, 5.163934426], [87.87878788, 14.3442623, 5.355191257], [90.90909091, 14.3442623, 5.163934426], [93.93939394, 14.15300546, 4.972677596], [96.96969697, 14.15300546, 4.781420765], [100, 14.53551913, 4.207650273]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] },
            "sp_hip_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Hip Flex/Ext [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Flex" }, "max": 60, "min": -20 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 42.40437158, 27.97814208], [2.941176471, 43.27868852, 27.54098361], [5.882352941, 44.15300546, 27.54098361], [8.823529412, 42.84153005, 26.66666667], [11.76470588, 39.78142077, 24.91803279], [14.70588235, 36.72131148, 22.73224044], [17.64705882, 31.91256831, 20.10928962], [20.58823529, 27.54098361, 15.73770492], [23.52941176, 22.73224044, 12.24043716], [26.47058824, 18.36065574, 7.868852459], [29.41176471, 13.55191257, 3.93442623], [32.35294118, 8.743169399, 0.4371584699], [35.29411765, 4.371584699, -3.93442623], [38.23529412, 0.8743169399, -7.431693989], [41.17647059, -2.62295082, -10.49180328], [44.11764706, -5.245901639, -13.98907104], [47.05882353, -6.994535519, -16.61202186], [50, -8.306010929, -17.92349727], [52.94117647, -8.743169399, -17.92349727], [55.88235294, -8.306010929, -17.4863388], [58.82352941, -4.808743169, -14.86338798], [61.76470588, -0.8743169399, -10.49180328], [64.70588235, 5.245901639, -4.371584699], [67.64705882, 11.80327869, 3.49726776], [70.58823529, 19.23497268, 10.05464481], [73.52941176, 26.2295082, 15.73770492], [76.47058824, 33.22404372, 20.98360656], [79.41176471, 38.90710383, 24.91803279], [82.35294118, 43.27868852, 28.41530055], [85.29411765, 45.46448087, 30.16393443], [88.23529412, 46.33879781, 30.6010929], [91.17647059, 45.0273224, 29.28961749], [94.11764706, 44.15300546, 28.41530055], [97.05882353, 42.40437158, 27.97814208], [100, 41.96721311, 27.97814208]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] },
            "fp_kne_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Keen Varus/Valgus [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Valg / Var" }, "max": 15, "min": -15 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, -1.967213115, -8.852459016], [2.941176471, -2.295081967, -9.508196721], [5.882352941, -2.131147541, -10], [8.823529412, -1.475409836, -9.180327869], [11.76470588, -0.6557377049, -8.032786885], [14.70588235, 0.1639344262, -6.557377049], [17.64705882, -0.3278688525, -5.901639344], [20.58823529, -0.8196721311, -5.409836066], [23.52941176, -0.8196721311, -6.06557377], [26.47058824, -1.147540984, -6.885245902], [29.41176471, -1.639344262, -8.032786885], [32.35294118, -2.131147541, -8.68852459], [35.29411765, -2.786885246, -9.180327869], [38.23529412, -3.114754098, -9.344262295], [41.17647059, -3.114754098, -9.344262295], [44.11764706, -3.278688525, -9.508196721], [47.05882353, -3.278688525, -9.672131148], [50, -3.114754098, -9.672131148], [52.94117647, -2.295081967, -9.672131148], [55.88235294, -1.31147541, -8.68852459], [58.82352941, -0.1639344262, -7.049180328], [61.76470588, 1.31147541, -5.737704918], [64.70588235, 2.295081967, -5.573770492], [67.64705882, 1.803278689, -7.213114754], [70.58823529, 1.147540984, -9.016393443], [73.52941176, 0.8196721311, -9.672131148], [76.47058824, 1.31147541, -8.852459016], [79.41176471, 1.967213115, -7.213114754], [82.35294118, 1.967213115, -5.409836066], [85.29411765, 1.639344262, -4.098360656], [88.23529412, 0.9836065574, -3.93442623], [91.17647059, -0.1639344262, -5.573770492], [94.11764706, -0.9836065574, -8.032786885], [97.05882353, -1.147540984, -10.32786885], [100, -1.147540984, -11.14754098]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] },
            "fp_ank_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Fo0t Varus/Valgous [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Valg / Var" }, "max": 30, "min": -5 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 3.387096774, -1.451612903], [2.857142857, 3.064516129, -1.774193548], [5.714285714, 2.580645161, -2.419354839], [8.571428571, 2.258064516, -2.741935484], [11.42857143, 2.096774194, -2.903225806], [14.28571429, 2.096774194, -3.064516129], [17.14285714, 2.258064516, -3.064516129], [20, 2.741935484, -3.064516129], [22.85714286, 2.903225806, -3.225806452], [25.71428571, 3.064516129, -3.225806452], [28.57142857, 3.064516129, -3.548387097], [31.42857143, 2.903225806, -3.387096774], [34.28571429, 3.064516129, -3.709677419], [37.14285714, 3.225806452, -3.709677419], [40, 3.225806452, -4.032258065], [42.85714286, 3.548387097, -4.193548387], [45.71428571, 3.870967742, -3.870967742], [48.57142857, 4.35483871, -3.709677419], [51.42857143, 4.516129032, -3.709677419], [54.28571429, 3.870967742, -3.548387097], [57.14285714, 2.580645161, -3.064516129], [60, 1.129032258, -4.193548387], [62.85714286, 0.3225806452, -5.806451613], [65.71428571, 0.8064516129, -5.967741935], [68.57142857, 1.451612903, -4.193548387], [71.42857143, 2.096774194, -3.064516129], [74.28571429, 2.580645161, -2.419354839], [77.14285714, 3.225806452, -2.258064516], [80, 3.548387097, -1.774193548], [82.85714286, 3.225806452, -1.290322581], [85.71428571, 2.741935484, -1.129032258], [88.57142857, 2.903225806, -1.290322581], [91.42857143, 3.870967742, -1.451612903], [94.28571429, 4.35483871, -1.290322581], [97.14285714, 4.35483871, -0.9677419355], [100, 4.032258065, -0.8064516129]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] },
            "fp_plv_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Pelvic Obliquity [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Down / Up" }, "max": 15, "min": -15 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 2.295081967, 0.4918032787], [2.941176471, 2.786885246, 0.8196721311], [5.882352941, 3.770491803, 1.475409836], [8.823529412, 5.245901639, 2.459016393], [11.76470588, 6.557377049, 3.606557377], [14.70588235, 7.37704918, 4.590163934], [17.64705882, 7.049180328, 4.426229508], [20.58823529, 6.229508197, 3.442622951], [23.52941176, 5.409836066, 2.295081967], [26.47058824, 4.262295082, 1.147540984], [29.41176471, 2.950819672, 0.3278688525], [32.35294118, 1.803278689, -0.3278688525], [35.29411765, 0.8196721311, -0.9836065574], [38.23529412, 0.1639344262, -1.147540984], [41.17647059, -0.1639344262, -1.147540984], [44.11764706, -0.1639344262, -1.147540984], [47.05882353, -0.1639344262, -0.9836065574], [50, -0.3278688525, -1.147540984], [52.94117647, -0.8196721311, -1.967213115], [55.88235294, -1.31147541, -3.278688525], [58.82352941, -2.131147541, -4.918032787], [61.76470588, -2.950819672, -6.393442623], [64.70588235, -3.770491803, -7.049180328], [67.64705882, -3.442622951, -6.885245902], [70.58823529, -2.62295082, -6.229508197], [73.52941176, -1.475409836, -5.081967213], [76.47058824, -0.4918032787, -3.770491803], [79.41176471, 0.1639344262, -2.62295082], [82.35294118, 0.4918032787, -1.639344262], [85.29411765, 1.147540984, -0.9836065574], [88.23529412, 1.639344262, -0.6557377049], [91.17647059, 1.639344262, -0.3278688525], [94.11764706, 1.475409836, -0.1639344262], [97.05882353, 1.475409836, 0.1639344262], [100, 2.295081967, 0.6557377049]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] },
            "fp_hip_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Hip Ad/Abduktion [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Abd / Add" }, "max": 30, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 6.885245902, 2.950819672], [2.941176471, 7.868852459, 4.262295082], [5.882352941, 9.836065574, 6.557377049], [8.823529412, 12.45901639, 8.852459016], [11.76470588, 14.75409836, 10.81967213], [14.70588235, 16.39344262, 12.13114754], [17.64705882, 16.39344262, 11.80327869], [20.58823529, 15.40983607, 10.49180328], [23.52941176, 14.75409836, 9.508196721], [26.47058824, 14.09836066, 8.852459016], [29.41176471, 13.44262295, 8.196721311], [32.35294118, 12.78688525, 8.196721311], [35.29411765, 12.13114754, 8.196721311], [38.23529412, 11.47540984, 8.196721311], [41.17647059, 11.47540984, 8.196721311], [44.11764706, 11.14754098, 7.540983607], [47.05882353, 11.47540984, 6.885245902], [50, 10.49180328, 5.901639344], [52.94117647, 9.508196721, 4.262295082], [55.88235294, 8.524590164, 1.967213115], [58.82352941, 5.901639344, -1.31147541], [61.76470588, 3.606557377, -3.93442623], [64.70588235, 1.31147541, -5.901639344], [67.64705882, 0.9836065574, -4.918032787], [70.58823529, 1.639344262, -3.93442623], [73.52941176, 2.950819672, -2.62295082], [76.47058824, 3.93442623, -1.639344262], [79.41176471, 4.262295082, -1.31147541], [82.35294118, 4.590163934, -0.6557377049], [85.29411765, 5.245901639, 0.6557377049], [88.23529412, 5.573770492, 0.9836065574], [91.17647059, 5.901639344, 0.9836065574], [94.11764706, 5.901639344, 0.6557377049], [97.05882353, 6.229508197, 0.6557377049], [100, 7.540983607, 1.639344262]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] },
            "tp_kne_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Keen Rotation [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Int" }, "max": 40, "min": -40 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, -16.61202186, -27.54098361], [2.941176471, -15.73770492, -28.41530055], [5.882352941, -14.86338798, -28.85245902], [8.823529412, -13.1147541, -28.41530055], [11.76470588, -10.92896175, -26.66666667], [14.70588235, -10.92896175, -26.2295082], [17.64705882, -11.80327869, -27.97814208], [20.58823529, -12.24043716, -29.28961749], [23.52941176, -11.80327869, -29.28961749], [26.47058824, -10.49180328, -28.41530055], [29.41176471, -10.92896175, -28.85245902], [32.35294118, -11.80327869, -28.85245902], [35.29411765, -12.24043716, -28.85245902], [38.23529412, -13.1147541, -28.85245902], [41.17647059, -13.1147541, -29.28961749], [44.11764706, -12.67759563, -29.28961749], [47.05882353, -11.80327869, -28.41530055], [50, -10.49180328, -27.54098361], [52.94117647, -10.05464481, -27.10382514], [55.88235294, -10.92896175, -28.41530055], [58.82352941, -13.55191257, -31.03825137], [61.76470588, -14.42622951, -32.34972678], [64.70588235, -13.1147541, -32.34972678], [67.64705882, -9.180327869, -31.47540984], [70.58823529, -6.120218579, -31.03825137], [73.52941176, -5.245901639, -30.16393443], [76.47058824, -6.994535519, -29.28961749], [79.41176471, -8.743169399, -28.85245902], [82.35294118, -10.92896175, -30.16393443], [85.29411765, -14.86338798, -32.34972678], [88.23529412, -17.92349727, -32.78688525], [91.17647059, -21.42076503, -31.91256831], [94.11764706, -20.98360656, -28.85245902], [97.05882353, -19.67213115, -27.10382514], [100, -19.23497268, -27.10382514]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] },
            "tp_ank_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Foot Progression Angle [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Int" }, "max": 40, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, -9.065934066, -20.6043956], [2.941176471, -9.065934066, -20.19230769], [5.882352941, -9.478021978, -19.78021978], [8.823529412, -10.3021978, -19.78021978], [11.76470588, -11.53846154, -19.36813187], [14.70588235, -11.95054945, -18.95604396], [17.64705882, -11.53846154, -18.54395604], [20.58823529, -11.12637363, -17.71978022], [23.52941176, -10.3021978, -17.30769231], [26.47058824, -9.89010989, -16.48351648], [29.41176471, -9.065934066, -16.07142857], [32.35294118, -8.653846154, -15.65934066], [35.29411765, -8.241758242, -16.07142857], [38.23529412, -9.478021978, -16.48351648], [41.17647059, -10.3021978, -17.30769231], [44.11764706, -10.3021978, -17.71978022], [47.05882353, -9.89010989, -18.13186813], [50, -9.065934066, -18.13186813], [52.94117647, -8.241758242, -17.30769231], [55.88235294, -7.417582418, -16.48351648], [58.82352941, -6.593406593, -17.30769231], [61.76470588, -4.532967033, -20.19230769], [64.70588235, -2.884615385, -25.13736264], [67.64705882, -4.532967033, -28.84615385], [70.58823529, -6.181318681, -30.08241758], [73.52941176, -7.005494505, -30.08241758], [76.47058824, -7.82967033, -30.08241758], [79.41176471, -9.065934066, -30.08241758], [82.35294118, -11.95054945, -30.08241758], [85.29411765, -14.42307692, -30.08241758], [88.23529412, -14.83516484, -28.43406593], [91.17647059, -11.53846154, -25.54945055], [94.11764706, -9.065934066, -22.66483516], [97.05882353, -8.241758242, -20.6043956], [100, -8.241758242, -20.6043956]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] },
            "tp_plv_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Pelvic Rotation [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Int" }, "max": 30, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 7.252747253, 0.3296703297], [2.941176471, 6.923076923, 0.3296703297], [5.882352941, 5.934065934, 0.3296703297], [8.823529412, 4.945054945, -0.6593406593], [11.76470588, 3.956043956, -1.318681319], [14.70588235, 3.956043956, -0.989010989], [17.64705882, 4.285714286, -0.3296703297], [20.58823529, 4.615384615, 0.3296703297], [23.52941176, 4.945054945, 0.3296703297], [26.47058824, 4.945054945, 0.3296703297], [29.41176471, 4.615384615, -0.3296703297], [32.35294118, 3.956043956, -0.989010989], [35.29411765, 3.296703297, -1.318681319], [38.23529412, 2.307692308, -2.637362637], [41.17647059, 0.6593406593, -2.967032967], [44.11764706, -1.318681319, -4.285714286], [47.05882353, -1.978021978, -4.945054945], [50, -2.307692308, -5.274725275], [52.94117647, -1.978021978, -5.274725275], [55.88235294, -0.989010989, -4.945054945], [58.82352941, 0.3296703297, -4.615384615], [61.76470588, 1.648351648, -4.615384615], [64.70588235, 2.307692308, -4.615384615], [67.64705882, 1.318681319, -4.945054945], [70.58823529, 0.989010989, -4.945054945], [73.52941176, 1.318681319, -5.274725275], [76.47058824, 1.318681319, -4.615384615], [79.41176471, 1.648351648, -3.956043956], [82.35294118, 1.978021978, -3.626373626], [85.29411765, 2.637362637, -3.296703297], [88.23529412, 3.626373626, -2.967032967], [91.17647059, 4.615384615, -2.307692308], [94.11764706, 5.934065934, -1.318681319], [97.05882353, 6.923076923, -0.3296703297], [100, 7.252747253, 0.3296703297]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] },
            "tp_hip_high_chart_data": { "chart": { "type": "spline", "height": 350 }, "title": { "text": "Hip Rotation [deg]" }, "subtitle": { "text": "" }, "xAxis": { "type": "float", "title": { "text": "Gait cicle" } }, "yAxis": { "title": { "text": "Ext / Int" }, "max": 30, "min": -30 }, "tooltip": { "headerFormat": "<b>{series.name}</b><br>", "pointFormat": "Ang: {point.y:.2f}°", "crosshairs": true, "shared": false }, "plotOptions": { "spline": { "marker": { "enabled": false } } }, "series": [{ "name": "Rangos Normales", "data": [[0, 3.606557377, -8.852459016], [2.941176471, 2.62295082, -7.540983607], [5.882352941, 2.62295082, -5.901639344], [8.823529412, 4.918032787, -4.590163934], [11.76470588, 7.540983607, -2.950819672], [14.70588235, 8.852459016, -2.950819672], [17.64705882, 9.180327869, -2.62295082], [20.58823529, 8.852459016, -2.295081967], [23.52941176, 8.852459016, -1.31147541], [26.47058824, 9.180327869, -0.9836065574], [29.41176471, 10.16393443, -1.31147541], [32.35294118, 11.14754098, -0.6557377049], [35.29411765, 12.13114754, 0.9836065574], [38.23529412, 14.09836066, 1.967213115], [41.17647059, 15.40983607, 2.295081967], [44.11764706, 15.73770492, 1.967213115], [47.05882353, 14.42622951, 1.31147541], [50, 13.7704918, 0.3278688525], [52.94117647, 13.1147541, -0.9836065574], [55.88235294, 11.80327869, -2.950819672], [58.82352941, 9.508196721, -4.918032787], [61.76470588, 7.868852459, -6.557377049], [64.70588235, 6.229508197, -7.540983607], [67.64705882, 4.262295082, -8.196721311], [70.58823529, 2.62295082, -8.196721311], [73.52941176, 0.6557377049, -7.868852459], [76.47058824, 0.3278688525, -7.540983607], [79.41176471, -0.3278688525, -6.885245902], [82.35294118, 0.3278688525, -5.245901639], [85.29411765, 0.6557377049, -4.262295082], [88.23529412, 2.295081967, -4.262295082], [91.17647059, 3.278688525, -5.573770492], [94.11764706, 4.262295082, -6.885245902], [97.05882353, 4.918032787, -8.196721311], [100, 4.590163934, -7.540983607]], "type": "arearange", "lineWidth": 0, "linkedTo": ":previous", "fillOpacity": 0.3, "zIndex": 0 }, { "name": "Izquierda", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }, { "name": "Derecha", "data": [[0, 3], [5, 0.28], [11, 0.25], [17.64705882, 0.2], [23.52941176, 0.28], [29.41176471, 0.28], [35.29411765, 0.47], [41.17647059, 0.79], [47.05882353, 0.72], [52.94117647, 1.02], [58.82352941, 1.12], [64.70588235, 1.2], [70.58823529, 1.18], [76.47058824, 1.19], [82.35294118, 1.85], [88.23529412, 2.22], [94.11764706, 1.15], [100, 3]], "dashStyle": "longdash" }] }
        };
        this._postJSON(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].URL_WEB_SERVICE_KINEMATIC_ANALYSIS, json, this.getHeaders())
            .subscribe(function (json) { return _this.postObjReturn = json; });
    };
    ResultDetailComponent.prototype.putData_manual = function () {
        var _this = this;
        var json = {
            "patient_id": "591e7542583a7b2b751d4ec3",
            "medical_center_id": "591e7542583a7b2b751d4ec3",
            "therapist_id": "591f03510a88ba3158605314",
            "accesories": {
                "is_assited_walk": true,
                "is_treadmills": true,
                "is_walker": true,
                "is_orthoses": true,
                "is_parallel_bars": true
            },
            "patient_descriptions": "field not completed in post call",
        };
        this._putJSON(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].URL_WEB_SERVICE_KINEMATIC_ANALYSIS + "59fd258e3f59a10a24360c11", json, this.getHeaders())
            .subscribe(function (json) { return _this.putObjReturn = json; });
    };
    ResultDetailComponent.prototype.putMatLabData_manual = function () {
        var _this = this;
        var json_matlab = {
            "lbwt_x": [-0.510987043, -0.507847548, -0.501565576, -0.496196598, -0.491059452],
            "lbwt_y": [0.540674865, 0.537599206, 0.53218329, 0.528224289, 0.525324],
            "lbwt_z": [1.61474895, 1.59691453, 1.57354069, 1.55434036, 1.53739333],
            "lfwt_x": [-0.398507059, -0.397183716, -0.394476324, -0.392103, -0.390162498],
            "lfwt_y": [0.588272154, 0.583447039, 0.578022361, 0.57288146, 0.569532335],
            "lfwt_z": [1.70413, 1.69285548, 1.67843926, 1.66533923, 1.65606987],
            "ltrc_x": [-0.456139743, -0.453096241, -0.444883525, -0.438923717, -0.435777724],
            "ltrc_y": [0.574408114, 0.566290855, 0.554492, 0.546806157, 0.542087793],
            "ltrc_z": [1.75878453, 1.73355663, 1.69516492, 1.66894531, 1.65336823],
            "lkne_x": [-0.439642638, -0.450746745, -0.460154414, -0.468907058, -0.471274972],
            "lkne_y": [0.227837697, 0.22827071, 0.227817863, 0.22600098, 0.222509876],
            "lkne_z": [1.94660103, 1.95596731, 1.96060288, 1.96053076, 1.93824673],
            "lank_x": [-0.299996972, -0.307621032, -0.314234704, -0.319124907, -0.326241612],
            "lank_y": [-0.106538437, -0.106994025, -0.107379854, -0.108190544, -0.109016925],
            "lank_z": [2.21435237, 2.20030403, 2.18677807, 2.16759419, 2.16266465],
            "lhee_x": [-0.338616103, -0.345539272, -0.35304141, -0.357975781, -0.367530316],
            "lhee_y": [-0.220685542, -0.220476776, -0.221423388, -0.221060321, -0.223497763],
            "lhee_z": [2.1134963, 2.10699821, 2.10421777, 2.08988857, 2.0972507],
            "ltoe_x": [-0.16483134, -0.173326507, -0.18125011, -0.18900612, -0.196587116],
            "ltoe_y": [-0.223946437, -0.225081, -0.225982144, -0.226950809, -0.227060854],
            "ltoe_z": [2.10366583, 2.11058068, 2.11493826, 2.11493444, 2.10920978]
        };
        this._putJSON(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].URL_WEB_SERVICE_KINEMATIC_ANALYSIS_MATLAB + "59fd258e3f59a10a24360c11", json_matlab, this.getHeaders())
            .subscribe(function (json) { return _this.putObjReturn = json; });
    };
    return ResultDetailComponent;
}());
ResultDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-result-detail',
        template: __webpack_require__(466),
        styles: [__webpack_require__(436)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('slideInOutVideo', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'translate3d(0, 0 , 0)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'translate3d(0, -200%, 0)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('slideInOutDetails', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'translate3d(-110%, 0, 0)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('slideInOutGraphis', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'translate3d(0, 35%, 0)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                // state('in_graph_video', style({
                //   transform: 'translate3d(0, 0, 0)'
                // })),
                // state('out_graph_video', style({
                //   transform: 'translate3d(0, 0, 0)'
                // })),
                // transition('in_graph_video => out_graph_video', animate('400ms ease-in-out')),
                // transition('out_graph_video => in_graph_video', animate('400ms ease-in-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in-out'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], ResultDetailComponent);

var ResultDrawerComponent = (function () {
    function ResultDrawerComponent() {
    }
    return ResultDrawerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ResultDrawerComponent.prototype, "kinematicsAnalysis", void 0);
ResultDrawerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-details-drawer',
        styles: ["\n      :host {\n            \n            background-color: rgba(255, 255, 255, 0.9);\n            position: fixed;\n            left: 1.5rem;\n            bottom: 1rem;\n            top: 50%;\n            width: 0%;\n            min-width: 250px;\n            z-index: 150;\n            overflow-y: auto;\n            border-radius: 0.5rem;\n\n      }\n\n      .division_line{\n          border-bottom: 1px solid #e0e0e0;\n          border-top: 0;\n          margin: 0 0 5px;\n          padding: 0 0 3px;\n      }\n\n      .detail-result-header h2{\n        padding: 2rem 0rem 0rem 1rem;\n      }\n      .name_position{\n        position: static;\n        text-align: center;\n      }\n      .margin_container_details {\n          padding: 0.05rem; \n      }\n      .card-block {\n        padding: 0.25rem;\n      }\n      .card-block p {\n        color: #808c93;   \n      }\n      .card-block p samp{\n        color: #f05a6d;\n      }\n      .title-devider {\n          background-color: rgba(233, 100, 127, 0.78);\n          border-radius: 5px;\n          text-align: center;\n      }\n      h4 {\n        color: #ffffff;\n      }\n\n      h2 {\n        color: #aaa;\n      }\n      \n  "],
        template: "\n      <div class=\"name_position\">\n       <h2 class=\"card-title\">Details</h2>\n      </div>               \n\n\n      <div id=\"accordion\" class=\"margin_container_details\" role=\"tablist\" aria-multiselectable=\"true\">\n        <div>\n           <div class=\"header\" role=\"tab\" id=\"headingOne\">\n               <h4 *ngIf=\"kinematicsAnalysis\" class=\"title-devider\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\"\n              >\n                 Accesories\n               </h4>\n           </div>\n\n          <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n            <div *ngIf=\"kinematicsAnalysis\" class=\"card-block\">\n               \n             <p>\n                Terapeuta: \n                <samp>{{kinematicsAnalysis.therapist_id}}</samp>\n             </p>\n             <p *ngIf=\"kinematicsAnalysis.accesories.is_assited_walk\">\n                 Caminata asistida:\n                 <samp>{{kinematicsAnalysis.accesories_descriptions.assited_walk}}</samp>\n             </p>\n             <p *ngIf=\"kinematicsAnalysis.accesories.is_treadmills\">\n                 Caminadora:\n                 <samp>{{kinematicsAnalysis.accesories_descriptions.treadmills}}</samp>\n             </p>\n             <p *ngIf=\"kinematicsAnalysis.accesories.is_walker\">\n                 Andador:\n                 <samp>{{kinematicsAnalysis.accesories_descriptions.walker}}</samp>\n             </p>\n             <p *ngIf=\"kinematicsAnalysis.accesories.is_orthoses\">\n                 \u00D3rtesis:\n                 <samp>{{kinematicsAnalysis.accesories_descriptions.orthoses}}</samp>\n             </p>\n             <p *ngIf=\"kinematicsAnalysis.accesories.is_parallel_bars\">\n                 Barras paralelas: <samp>{{kinematicsAnalysis.accesories_descriptions.parallel_bars}}</samp>\n             </p>\n\n            </div>\n          </div>\n        </div>\n\n        <div>\n         <div class=\"header\" role=\"tab\" id=\"headingThree\">\n             <h4 class=\"collapsed\" class=\"title-devider\" data-toggle=\"collapse\"\n              data-parent=\"#accordion\" href=\"#collapseFour\" \n              aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                Gait Parameters\n             </h4>\n         </div>\n         <div id=\"collapseFour\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n           <div class=\"card-block\">\n               <p class=\"card-text\">\n                 Use card groups to render equal height cards without gutters between the cards. \n                 Use <code>.card-deck</code> for cards that aren\u2019t attached to each another.</p>\n           </div>\n         </div>\n        </div>\n\n        <div>\n         <div class=\"header\" role=\"tab\" id=\"headingThree\">\n             <h4 class=\"collapsed\" class=\"title-devider\" data-toggle=\"collapse\"\n              data-parent=\"#accordion\" href=\"#collapseTwo\" \n              aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                Observations\n             </h4>\n         </div>\n         <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n           <div class=\"card-block\">\n               <p class=\"card-text\">\n                 Use card groups to render equal height cards without gutters between the cards. \n                 Use <code>.card-deck</code> for cards that aren\u2019t attached to each another.</p>\n           </div>\n         </div>\n        </div>\n\n        <div>\n         <div class=\"header\" role=\"tab\" id=\"headingThree\">\n             <h4 class=\"collapsed\" class=\"title-devider\" data-toggle=\"collapse\"\n              data-parent=\"#accordion\" href=\"#collapseThree\" \n              aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                Additional comments\n             </h4>\n         </div>\n         <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n           <div class=\"card-block\">\n               <p class=\"card-text\">\n                 Use card groups to render equal height cards without gutters between the cards. \n                 Use <code>.card-deck</code> for cards that aren\u2019t attached to each another.</p>\n           </div>\n         </div>\n        </div>\n\n      </div>\n\n\n          \n    "
    }),
    __metadata("design:paramtypes", [])
], ResultDrawerComponent);

var VideoDrawerComponent = (function () {
    function VideoDrawerComponent() {
    }
    return VideoDrawerComponent;
}());
VideoDrawerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-video-drawer',
        styles: ["\n      :host {\n          opacity: 1;\n          background: black;\n          color: #fff;\n          position: fixed;\n          top: 0;\n          width: 100%;\n          min-width: 250px;\n          z-index: 8000;\n        \n      }\n/#\n      #mask {\n        position: fixed;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: auto;\n        background-color: black;\n        opacity: 0.7;\n\n        filter: blur(0px);\n        -webkit-filter: blur(0px);\n        -moz-filter: blur(0px);\n        -o-filter: blur(0px);\n        -ms-filter: blur(0px);\n      }\n #/     \n    "
        ],
        template: "\n    <div >\n      <div class=\"row justify-content-center\">\n         <div class=\"col align-items-center\">\n          <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qxi-cBG71Ho?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>\n         </div>\n      </div>\n    </div>  \n        \n    "
    })
    // <div class="margin-container ccontainer">
    //   <div class="row">
    //     <div class="col align-self-start">
    //     </div>
    //   </div>
    // </div>
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/0qLblUty41c?
    ,
    __metadata("design:paramtypes", [])
], VideoDrawerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=result-detail.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, ".containerr {\n\tbackground-color: #e1e4e8;\n}\n\n.box { \n\tbackground: #e1e4e8;\n    display: table-cell;\n    position: relative;\n    box-shadow: 0 0.5rem 1.25rem 0 rgba(0,0,0,0.28);\n    width: 17rem;\n    z-index: 200;\n    padding: 20px;\n}\n\n.bd-example {\n    position: relative;\n    padding: 1rem;\n    margin: 1rem -1rem;\n    border: solid #f7f7f9;\n    border-width: .2rem 0 0;\n}\n\n.bd-example-container-header {\n    height: 3rem;\n    margin-bottom: .5rem;\n    background-color: #daeeff;\n    border-radius: .25rem;\n}\n\n.bd-example-container-body {\n    height: 24rem;\n    float: left;\n    margin-right: 14rem;\n    background-color: #957bbe;\n    border-radius: .25rem;\n}\n\n.bd-example-container-sidebar {\n    /*float: right;*/\n    float: left;\n    width: 8rem;\n    height: 24rem;\n    background-color: #fae3c4;\n    border-radius: .25rem;\n}\n.drawer_graphic {\n     bottom: 0;\n    position: fixed;\n    margin-bottom: 95px;\n    margin-right: 24px;\n    z-index: 9000;\n    position: fixed;\n    right: 0;\n}\n\n.drawer_video {\n     bottom: 0;\n    position: fixed;\n    margin-bottom: 24px;\n    margin-right: 24px;\n    z-index: 9000;\n    position: fixed;\n    right: 0;\n}\n\n.mdl-button--accent.mdl-button--fab {\n    color: rgba(223, 30, 78, 0.61);\n    background-color: rgba(235, 53, 22, 0.22);\n\n}\n\n.material-icons {\n     -webkit-box-pack: end;\n         -ms-flex-pack: end;\n             justify-content: flex-end; \n    cursor: pointer;\n}\n\n.field-group{\n    /*padding: 0px 0px 0px 9px;*/\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n\n.container-fluid {\n    position: relative;\n    margin-left: auto;\n    margin-right: auto;\n    padding-right: 15px;\n    padding-left: 15px;\n    background-color: black;\n}\n\n.result-section {\n    padding:  1rem 0rem 2rem 0rem;\n}\n\n.result-table-section {\n    padding:  0rem 0rem 2rem 1rem;\n}\n\n.result-details-section {\n    padding:  0rem 0rem 2rem 1rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttorneyListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AttorneyListComponent = (function () {
    function AttorneyListComponent() {
    }
    AttorneyListComponent.prototype.ngOnInit = function () {
    };
    return AttorneyListComponent;
}());
AttorneyListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-attorney-list',
        template: __webpack_require__(448),
        styles: [__webpack_require__(419), __webpack_require__(397)]
    }),
    __metadata("design:paramtypes", [])
], AttorneyListComponent);

//# sourceMappingURL=attorney-list.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardMedicalCenterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardMedicalCenterComponent = (function () {
    function DashboardMedicalCenterComponent() {
    }
    DashboardMedicalCenterComponent.prototype.ngOnInit = function () {
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.medical_center_id = currentUser && currentUser.entity._id;
        this.medical_center_name = currentUser && currentUser.entity.name;
    };
    return DashboardMedicalCenterComponent;
}());
DashboardMedicalCenterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-medical-center',
        template: __webpack_require__(449),
        // templateUrl: './dashboard-medical-center.component.html',
        styles: [__webpack_require__(420)]
    }),
    __metadata("design:paramtypes", [])
], DashboardMedicalCenterComponent);

//# sourceMappingURL=dashboard-medical-center.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(288);
/* unused harmony export Person */
/* unused harmony export SplKne */
/* unused harmony export KinematicsAnalysis */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Person = (function () {
    function Person() {
    }
    return Person;
}());

var SplKne = (function () {
    function SplKne() {
    }
    return SplKne;
}());

var KinematicsAnalysis = (function () {
    function KinematicsAnalysis() {
    }
    return KinematicsAnalysis;
}());

var ResultsComponent = (function () {
    function ResultsComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.people = [];
        this.displayedPeople = [];
        this.token = '';
        this.medical_center_id = '';
        this.medical_center_name = '';
        this.therapist_id = '';
        this.patient_id = '';
        this.kinematicsAnalysiss = [];
        this.patients = [];
        this.therapists = [];
        this.currentMultipleKinematicsAnalysisSelected = [];
        this.currentKinematicsAnalysis = null;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            this.token = currentUser && currentUser.token;
            this.medical_center_id = currentUser && currentUser.entity._id;
            this.medical_center_name = currentUser && currentUser.entity.name;
        }
        else {
            this.token = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].token;
            this.medical_center_id = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].medical_center_id;
            this.medical_center_name = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].medical_center_name;
        }
    };
    // filterPeople(event: any) {
    //   const filterText: string = (<HTMLInputElement>event.target).value.toLowerCase();
    //   this.displayedPeople = this.people.filter((person: Person) =>
    //     !filterText || person.firstName.toLowerCase().indexOf(filterText) > -1
    //   );
    // }
    // sortPeople(event: any) {
    //   const grid = event.target;
    //   const sortOrder = grid.sortOrder[0];
    //   const sortProperty = grid.columns[sortOrder.column].name;
    //   const sortDirection = sortOrder.direction;
    //   this.displayedPeople.sort((a, b) => {
    //     let res: number;
    //     let valueA: string = grid.get(sortProperty, a),
    //         valueB: string = grid.get(sortProperty, b);
    //     if (!+(valueA)) {
    //       res = parseInt(valueA, 10) - parseInt(valueB, 10);
    //     } else {
    //       res = valueA.localeCompare(valueB);
    //     }
    //     if (sortDirection === 'desc') {
    //       res *= -1;
    //     }
    //     return res;
    //   });
    // }
    // getKinematicAnalysiss() {
    //   this._getJSON(this.URL_WEB_SERVICE_ANALYSIS, this.getHeaders())
    //     .subscribe(json => this.kinematicsAnalysiss = json)
    //     // .subscribe(json => this.displayedPeople = this.people = json.result)
    // }
    // getPatientes() {
    //   this._getJSON(this.URL_WEB_SERVICE_PATIENTS, this.getHeaders())
    //     .subscribe(json => this.patients = json)
    // }
    // getTherapist() {
    //   this._getJSON(this.URL_WEB_SERVICE_THERAPISTS, this.getHeaders())
    //     .subscribe(json => this.therapists = json)
    // }
    // onSelectPaciente(patient:any) {
    //   console.log("selected patient");
    //   this.currentPatient = patient;
    //   this.doFilter('patient');
    // }
    // onSelectTherapist(therapist: any) {
    //   console.log("selected therapist");
    //   this.currentTherapist = therapist;
    //   this.doFilter('therapist');
    // }
    ResultsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['../result', this.currentKinematicsAnalysis._id], { relativeTo: this.route });
    };
    ResultsComponent.prototype.doFilter = function (type) {
        //let hard_id: string = '5917e445512fd60c985238fe';
        // Relative navigation back to the crises
        switch (type) {
            case 'therapist':
                if (this.therapist_id === this.currentTherapist._id) {
                    this.therapist_id = '';
                }
                else {
                    this.therapist_id = this.currentTherapist._id;
                }
                break;
            case 'patient':
                if (this.patient_id === this.currentPatient._id) {
                    this.patient_id = '';
                }
                else {
                    this.patient_id = this.currentPatient._id;
                }
                break;
            default:
                // more filters ..
                break;
        }
        // clear the array for new data
        // this.kinematicsAnalysiss = [];
        // this.getKinematicAnalysiss();
        this.optionsHeader = this.getHeaders();
    };
    ResultsComponent.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.token);
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set("patient_id", this.patient_id);
        params.set("medical_center_id", this.medical_center_id);
        params.set("therapist_id", this.therapist_id);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        options.search = params;
        console.log("Parent - getHeaders()", options);
        return options;
    };
    // _getJSON(url: string, option: RequestOptions): Observable<any> {
    //   return this.http.get(url,option)
    //     .map((res: Response) => res.json())
    // }
    // --------------------------------------------------
    // METHODS THAT ALLOW COMUNICATION BETWEEN CHILD 
    // COMPONENTS THROUGH THE PARENT COMPONENT
    // --------------------------------------------------
    // this method is always listening to the selected  
    // KinematicAnalisys from child component 
    // updating the currentKinematicsAnalysis in this 
    // component 
    ResultsComponent.prototype.kinematicAnalysisSelected = function (kinematicsAnalysis) {
        this.currentKinematicsAnalysis = kinematicsAnalysis;
    };
    // this method is always listening to multiselection  
    // KinematicAnalisys from child component 
    // updating the currentMultipleKinematicsAnalysisSelected  
    // in this component 
    ResultsComponent.prototype.multipleKinematicAnalysisSelected = function (multipleKinematicsAnalysis) {
        this.currentMultipleKinematicsAnalysisSelected = multipleKinematicsAnalysis;
        console.log(this.currentMultipleKinematicsAnalysisSelected);
    };
    // this method is always listening to the selected  
    // therapist from child component 
    // updating the currentTherapist in this 
    // component 
    ResultsComponent.prototype.therapistSelected = function (therapist) {
        this.currentTherapist = therapist;
        this.doFilter("therapist");
        console.log("therapistSelected() from doFilter");
    };
    // this method is always listening to the selected  
    // patient from child component 
    // updating the currentPatient in this 
    // component 
    ResultsComponent.prototype.patientSelected = function (patient) {
        console.log("patientSelected", patient);
        this.currentPatient = patient;
        this.doFilter("patient");
        console.log("patientSelected() from doFilter");
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-results-component',
        template: __webpack_require__(451),
        styles: [__webpack_require__(371)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ResultsComponent);

var _a, _b, _c;
// }
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(287);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TherapistListDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbdModalContent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TherapistListDashboardComponent = (function () {
    function TherapistListDashboardComponent() {
    }
    TherapistListDashboardComponent.prototype.ngOnInit = function () {
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.medical_center_id = currentUser && currentUser.entity._id;
        this.medical_center_name = currentUser && currentUser.entity.name;
    };
    return TherapistListDashboardComponent;
}());
TherapistListDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-therapist-dashboard-list',
        template: __webpack_require__(452),
        styles: [__webpack_require__(422)]
    }),
    __metadata("design:paramtypes", [])
], TherapistListDashboardComponent);

var NgbdModalContent = (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    return NgbdModalContent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgbdModalContent.prototype, "name", void 0);
NgbdModalContent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngbd-modal-content',
        template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, {{name}}!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object])
], NgbdModalContent);

var _a;
//# sourceMappingURL=therapist-list.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalCenterComponent_out; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MedicalCenterComponent_out = (function () {
    function MedicalCenterComponent_out() {
    }
    MedicalCenterComponent_out.prototype.ngOnInit = function () {
    };
    return MedicalCenterComponent_out;
}());
MedicalCenterComponent_out = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-medical-center',
        template: __webpack_require__(456),
        styles: [__webpack_require__(426)]
    })
], MedicalCenterComponent_out);

//# sourceMappingURL=medical-center.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var emailValidator = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');
var PatientAddComponent = (function () {
    function PatientAddComponent(activeModal, fb, http, config) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.http = http;
        this.disableForm = false;
        this.names = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.id_Document_num = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.birth = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.address_street = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.address_city = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.address_state = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.address_zip = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.address_country = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.medic_diagostic_name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.medic_diagostic_level = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.medic_diagostic_percentage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.attorney_names = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.attorney_lastName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.attorney_relationship = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.attorney_email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', emailValidator);
        this.attorney_cellphone = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.attorney_phone = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
    }
    PatientAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            this.token = currentUser && currentUser.token;
        }
        else {
            this.token = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].token;
        }
        this.form = this.fb.group({
            'names': this.names,
            'lastName': this.lastName,
            'id_Document_num': this.id_Document_num,
            'birth': this.birth,
            'address_street': this.address_street,
            'address_city': this.address_city,
            'address_state': this.address_state,
            'address_zip': this.address_zip,
            'address_country': this.address_country,
            'medic_diagostic_name': this.medic_diagostic_name,
            'medic_diagostic_level': this.medic_diagostic_level,
            'medic_diagostic_percentage': this.medic_diagostic_percentage,
            'attorney_names': this.attorney_names,
            'attorney_lastName': this.attorney_lastName,
            'attorney_relationship': this.attorney_relationship,
            'attorney_email': this.attorney_email,
            'attorney_cellphone': this.attorney_cellphone,
            'attorney_phone': this.attorney_phone
        });
        this.form.valueChanges
            .map(function (formValues) {
            formValues.names = formValues.names.toUpperCase();
            return formValues;
        })
            .subscribe(function (formValues) {
            console.log("Model Driven Form valid: " + _this.form.valid + " value:", JSON.stringify(formValues));
            // console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(this.form.value.medic_diagostic_name));
        });
    };
    PatientAddComponent.prototype.onSubmit = function () {
        var _this = this;
        var jsonNewPatient = {
            names: this.form.value.names,
            lastname: this.form.value.lastName,
            gender: "-",
            id_Document_type: "DNI",
            id_Document_num: +this.form.value.id_Document_num,
            birth: new Date(this.form.value.birth),
            address: {
                street: this.form.value.address_street,
                city: this.form.value.address_city,
                state: this.form.value.address_state,
                zip: +this.form.value.address_zip,
                country: this.form.value.address_country
            },
            medic_diagostic: [{
                    name: this.form.value.medic_diagostic_name,
                    level: this.form.value.medic_diagostic_level,
                    percentage: this.form.value.medic_diagostic_percentage,
                }],
            attorney: {
                names: this.form.value.attorney_names,
                lastname: this.form.value.attorney_lastName,
                relationship: this.form.value.attorney_relationship,
                email: this.form.value.attorney_email,
                phone: this.form.value.attorney_phone,
                cellphone: this.form.value.attorney_cellphone
            },
            // Will be send by email TO THE ATTORNEY
            username: this.form.value.attorney_names.concat(this.form.value.attorney_lastName),
            password: "patient",
            //created_at: { type: Date, default: Date.now },
            updated_at: new Date(),
            is_active: true
        };
        console.log(JSON.stringify(jsonNewPatient));
        this._postJSON(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].URL_WEB_SERVICE_PATIENTS, JSON.stringify(jsonNewPatient), this.getHeaders())
            .subscribe(function (json) { return _this.newPatient = json; });
        this.activeModal.close();
    };
    PatientAddComponent.prototype._postJSON = function (url, body, option) {
        return this.http.post(url, body, option)
            .map(function (res) { return res.json(); });
    };
    PatientAddComponent.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return options;
    };
    PatientAddComponent.prototype.testPrintCapturedValue = function () {
        console.log(this.form.value);
    };
    return PatientAddComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PatientAddComponent.prototype, "name", void 0);
PatientAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-patient-add',
        template: __webpack_require__(457),
        styles: [__webpack_require__(427)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbDatepickerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbDatepickerConfig */]) === "function" && _d || Object])
], PatientAddComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=patient-add.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientDeleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PatientDeleteComponent = (function () {
    function PatientDeleteComponent(activeModal, http) {
        this.activeModal = activeModal;
        this.http = http;
        this.names = '';
        this.lastnames = '';
    }
    PatientDeleteComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            this.token = currentUser && currentUser.token;
        }
        else {
            this.token = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].token;
        }
    };
    PatientDeleteComponent.prototype.deletePatient = function () {
        var _this = this;
        console.log(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].URL_WEB_SERVICE_PATIENTS + this._id);
        this._deleteJSON(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].URL_WEB_SERVICE_PATIENTS + this._id, this.getHeaders())
            .subscribe(function (json) { return _this.response = json; });
        this.activeModal.close();
    };
    PatientDeleteComponent.prototype._deleteJSON = function (url, option) {
        return this.http.delete(url, option)
            .map(function (res) { return res.json(); });
    };
    PatientDeleteComponent.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return options;
    };
    return PatientDeleteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PatientDeleteComponent.prototype, "_id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PatientDeleteComponent.prototype, "names", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PatientDeleteComponent.prototype, "lastnames", void 0);
PatientDeleteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-patient-delete',
        template: __webpack_require__(458),
        styles: [__webpack_require__(428)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object])
], PatientDeleteComponent);

var _a, _b;
//# sourceMappingURL=patient-delete.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientReadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientReadComponent = (function () {
    function PatientReadComponent(activeModal, fb) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.form = this.fb.group({});
    }
    PatientReadComponent.prototype.ngOnInit = function () {
        console.log(" yeeeee ", this.patient);
        this.names = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.names);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.lastname);
        this.id_Document_num = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.id_Document_num);
        this.birth = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.birth);
        this.address_street = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.address.street);
        this.address_city = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.address.city);
        this.address_state = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.address.state);
        this.address_zip = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.address.zip);
        this.address_country = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.address.country);
        this.medic_diagostic_name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.medic_diagostic[0].name);
        this.medic_diagostic_level = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.medic_diagostic[0].level);
        this.medic_diagostic_percentage = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.medic_diagostic[0].percentage);
        this.attorney_names = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.attorney.names);
        this.attorney_lastName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.attorney.lastname);
        this.attorney_relationship = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.attorney.relationship);
        this.attorney_email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.attorney.email);
        this.attorney_cellphone = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.attorney.cellphone);
        this.attorney_phone = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.patient.attorney.phone);
        this.form = this.fb.group({
            'names': this.names,
            'lastName': this.lastName,
            'id_Document_num': this.id_Document_num,
            'birth': this.birth,
            'address_street': this.address_street,
            'address_city': this.address_city,
            'address_state': this.address_state,
            'address_zip': this.address_zip,
            'address_country': this.address_country,
            'medic_diagostic_name': this.medic_diagostic_name,
            'medic_diagostic_level': this.medic_diagostic_level,
            'medic_diagostic_percentage': this.medic_diagostic_percentage,
            'attorney_names': this.attorney_names,
            'attorney_lastName': this.attorney_lastName,
            'attorney_relationship': this.attorney_relationship,
            'attorney_email': this.attorney_email,
            'attorney_cellphone': this.attorney_cellphone,
            'attorney_phone': this.attorney_phone
        });
        this.form.disable();
    };
    return PatientReadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PatientReadComponent.prototype, "patient", void 0);
PatientReadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-patient-read',
        template: __webpack_require__(460),
        styles: [__webpack_require__(430)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]) === "function" && _b || Object])
], PatientReadComponent);

var _a, _b;
//# sourceMappingURL=patient-read.component.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var emailValidator = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');
var PatientUpdateComponent = (function () {
    function PatientUpdateComponent(activeModal, fb, http) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.http = http;
        this.disableForm = false;
        this.form = this.fb.group({});
    }
    PatientUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            this.token = currentUser && currentUser.token;
        }
        else {
            this.token = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].token;
        }
        this.names = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.names, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.lastname, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.id_Document_num = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.id_Document_num, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.birth = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.birth, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.address_street = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.address.street);
        this.address_city = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.address.city);
        this.address_state = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.address.state);
        this.address_zip = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.address.zip);
        this.address_country = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.address.country);
        this.medic_diagostic_name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.medic_diagostic[0].name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.medic_diagostic_level = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.medic_diagostic[0].level, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.medic_diagostic_percentage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.medic_diagostic[0].percentage, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.attorney_names = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.attorney.names, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.attorney_lastName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.attorney.lastname, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.attorney_relationship = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.attorney.relationship, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.attorney_email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.attorney.email, emailValidator);
        this.attorney_cellphone = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.attorney.cellphone, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.attorney_phone = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.patient.attorney.phone);
        this.form = this.fb.group({
            'names': this.names,
            'lastName': this.lastName,
            'id_Document_num': this.id_Document_num,
            'birth': this.birth,
            'address_street': this.address_street,
            'address_city': this.address_city,
            'address_state': this.address_state,
            'address_zip': this.address_zip,
            'address_country': this.address_country,
            'medic_diagostic_name': this.medic_diagostic_name,
            'medic_diagostic_level': this.medic_diagostic_level,
            'medic_diagostic_percentage': this.medic_diagostic_percentage,
            'attorney_names': this.attorney_names,
            'attorney_lastName': this.attorney_lastName,
            'attorney_relationship': this.attorney_relationship,
            'attorney_email': this.attorney_email,
            'attorney_cellphone': this.attorney_cellphone,
            'attorney_phone': this.attorney_phone
        });
        this.form.valueChanges
            .map(function (formValues) {
            formValues.names = formValues.names.toUpperCase();
            return formValues;
        })
            .subscribe(function (formValues) {
            console.log("Model Driven Form valid: " + _this.form.valid + " value:", JSON.stringify(formValues));
            // console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(this.form.value.medic_diagostic_name));
        });
    };
    PatientUpdateComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.updatedPatient);
        var jsonUpdatedPatient = {
            names: this.form.value.names,
            lastname: this.form.value.lastName,
            gender: "-",
            id_Document_type: "DNI",
            id_Document_num: +this.form.value.id_Document_num,
            birth: new Date(this.form.value.birth),
            address: {
                street: this.form.value.address_street,
                city: this.form.value.address_city,
                state: this.form.value.address_state,
                zip: +this.form.value.address_zip,
                country: this.form.value.address_country
            },
            medic_diagostic: [{
                    name: this.form.value.medic_diagostic_name,
                    level: this.form.value.medic_diagostic_level,
                    percentage: this.form.value.medic_diagostic_percentage,
                }],
            attorney: {
                names: this.form.value.attorney_names,
                lastname: this.form.value.attorney_lastName,
                relationship: this.form.value.attorney_relationship,
                email: this.form.value.attorney_email,
                phone: this.form.value.attorney_phone,
                cellphone: this.form.value.attorney_cellphone
            },
            // Will be send by email TO THE ATTORNEY
            username: this.form.value.attorney_names.concat(this.form.value.attorney_lastName),
            password: "patient",
            //created_at: { type: Date, default: Date.now },
            updated_at: new Date(),
            is_active: true
        };
        console.log(JSON.stringify(jsonUpdatedPatient));
        this._putJSON(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].URL_WEB_SERVICE_PATIENTS + this.patient._id, JSON.stringify(jsonUpdatedPatient), this.getHeaders())
            .subscribe(function (json) { return _this.updatedPatient = json; });
        this.activeModal.close();
    };
    PatientUpdateComponent.prototype._putJSON = function (url, body, option) {
        return this.http.put(url, body, option)
            .map(function (res) { return res.json(); });
    };
    PatientUpdateComponent.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return options;
    };
    PatientUpdateComponent.prototype.testPrintCapturedValue = function () {
        console.log(this.form.value);
    };
    return PatientUpdateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PatientUpdateComponent.prototype, "patient", void 0);
PatientUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-patient-update',
        template: __webpack_require__(461),
        styles: [__webpack_require__(431)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _c || Object])
], PatientUpdateComponent);

var _a, _b, _c;
//# sourceMappingURL=patient-update.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TherapistAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var emailValidator = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');
var TherapistAddComponent = (function () {
    function TherapistAddComponent(activeModal, fb, http, config) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.http = http;
        this.disableForm = false;
        this.names = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.num_ctmp = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.num_ndta = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', emailValidator);
        this.id_Document_num = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.cellphone = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.phone = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        // customize default values of datepickers used by this component tree
        config.minDate = { year: 1970, month: 1, day: 1 };
        config.maxDate = { year: 2000, month: 12, day: 31 };
        // days that don't belong to current month are not visible
        config.outsideDays = 'hidden';
        // weekends are disabled
        config.markDisabled = function (date) {
            var d = new Date(date.year, date.month - 1, date.day);
            return d.getDay() === 0 || d.getDay() === 6;
        };
    }
    TherapistAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            this.token = currentUser && currentUser.token;
        }
        else {
            this.token = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].token;
        }
        // test nested formGroup
        this.form = this.fb.group({
            names: this.names,
            lastName: this.lastName,
            num_ctmp: this.num_ctmp,
            num_ndta: this.num_ndta,
            email: this.email,
            id_Document_num: this.id_Document_num,
            cellphone: this.cellphone,
            phone: this.phone,
            birth: '',
            address: this.fb.group({
                street: '',
                city: '',
                state: '',
                zip: '',
                country: ''
            }),
            medicalCenters: this.fb.group({
                _id: this.medical_center_id,
                name: this.medical_center_name,
                status_request: "pending" // pending(0 day to more), accepted 
            })
        });
        this.form.valueChanges
            .map(function (formValues) {
            formValues.names = formValues.names.toUpperCase();
            formValues.birth = _this.getYear();
            return formValues;
        })
            .subscribe(function (formValues) {
            console.log("Model Driven Form valid: " + _this.form.valid + " value:", JSON.stringify(formValues));
        });
    };
    TherapistAddComponent.prototype.getYear = function () {
        return (this.model) ? this.model.year + "-" + this.model.month + "-" + this.model.day : "";
    };
    TherapistAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._postJSON(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].URL_WEB_SERVICE_THERAPISTS, this.form.value, this.getHeaders())
            .subscribe(function (json) { return _this.newTherapist = json; });
    };
    TherapistAddComponent.prototype._postJSON = function (url, body, option) {
        return this.http.post(url, body, option)
            .map(function (res) { return res.json(); });
    };
    TherapistAddComponent.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return options;
    };
    TherapistAddComponent.prototype.testPrintCapturedValue = function () {
        console.log(this.form.value);
    };
    return TherapistAddComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TherapistAddComponent.prototype, "medical_center_id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TherapistAddComponent.prototype, "medical_center_name", void 0);
TherapistAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-therapist',
        template: __webpack_require__(469),
        styles: [__webpack_require__(439)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbDatepickerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbDatepickerConfig */]) === "function" && _d || Object])
], TherapistAddComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=therapist-add.component.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TherapistDeleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TherapistDeleteComponent = (function () {
    function TherapistDeleteComponent(activeModal, http) {
        this.activeModal = activeModal;
        this.http = http;
        this.names = '';
        this.lastnames = '';
    }
    TherapistDeleteComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            this.token = currentUser && currentUser.token;
        }
        else {
            this.token = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].token;
        }
    };
    TherapistDeleteComponent.prototype.deleteTherapist = function () {
        var _this = this;
        this._deleteJSON(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].URL_WEB_SERVICE_THERAPISTS + this._id, this.getHeaders())
            .subscribe(function (json) { return _this.response = json; });
        this.activeModal.close();
    };
    TherapistDeleteComponent.prototype._deleteJSON = function (url, option) {
        return this.http.delete(url, option)
            .map(function (res) { return res.json(); });
    };
    TherapistDeleteComponent.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return options;
    };
    return TherapistDeleteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TherapistDeleteComponent.prototype, "_id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TherapistDeleteComponent.prototype, "names", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TherapistDeleteComponent.prototype, "lastnames", void 0);
TherapistDeleteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-therapist-delete',
        template: __webpack_require__(470),
        styles: [__webpack_require__(440)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object])
], TherapistDeleteComponent);

var _a, _b;
//# sourceMappingURL=therapist-delete.component.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TherapistReadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TherapistReadComponent = (function () {
    function TherapistReadComponent(activeModal, fb) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.form = this.fb.group({});
    }
    TherapistReadComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            names: this.therapist.names,
            lastName: this.therapist.lastName,
            num_ctmp: this.therapist.num_ctmp,
            num_ndta: this.therapist.num_ndta,
            email: this.therapist.email,
            id_Document_num: this.therapist.id_Document_num,
            cellphone: this.therapist.cellphone,
            phone: this.therapist.phone,
            birth: this.therapist.birth,
            address: this.fb.group({
                street: this.therapist.address.street,
                city: this.therapist.address.city,
                state: this.therapist.address.state,
                zip: this.therapist.address.zip,
                country: this.therapist.address.country
            }),
            medicalCenters: this.fb.group({
                _id: this.therapist.medical_center_id,
                name: this.therapist.medical_center_name,
                status_request: this.therapist.medicalCenters.status_request
            })
        });
        this.form.disable();
    };
    return TherapistReadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TherapistReadComponent.prototype, "therapist", void 0);
TherapistReadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-therapist-read',
        template: __webpack_require__(472),
        styles: [__webpack_require__(442)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]) === "function" && _b || Object])
], TherapistReadComponent);

var _a, _b;
//# sourceMappingURL=therapist-read.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TherapistUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var emailValidator = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');
var TherapistUpdateComponent = (function () {
    function TherapistUpdateComponent(activeModal, fb, http) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.http = http;
        this.form = this.fb.group({});
    }
    TherapistUpdateComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            this.token = currentUser && currentUser.token;
        }
        else {
            this.token = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].token;
        }
        console.log(this.therapist);
        this.form = this.fb.group({
            names: this.therapist.names,
            lastName: this.therapist.lastName,
            num_ctmp: this.therapist.num_ctmp,
            num_ndta: this.therapist.num_ndta,
            email: this.therapist.email,
            id_Document_num: this.therapist.id_Document_num,
            cellphone: this.therapist.cellphone,
            phone: this.therapist.phone,
            birth: this.therapist.birth,
            address: this.fb.group({
                street: this.therapist.address.street,
                city: this.therapist.address.city,
                state: this.therapist.address.state,
                zip: this.therapist.address.zip,
                country: this.therapist.address.country
            }),
            medicalCenters: this.fb.group({
                _id: this.therapist.medical_center_id,
                name: this.therapist.medical_center_name,
                status_request: this.therapist.medicalCenters.status_request
            })
        });
    };
    TherapistUpdateComponent.prototype.onSubmit = function () {
        var _this = this;
        this._putJSON(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].URL_WEB_SERVICE_THERAPISTS + this.therapist._id, this.form.value, this.getHeaders())
            .subscribe(function (json) { return _this.updatedTherapist = json; });
        this.activeModal.close();
    };
    TherapistUpdateComponent.prototype._putJSON = function (url, body, option) {
        return this.http.put(url, body, option)
            .map(function (res) { return res.json(); });
    };
    TherapistUpdateComponent.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return options;
    };
    return TherapistUpdateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TherapistUpdateComponent.prototype, "therapist", void 0);
TherapistUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-therapist-update',
        template: __webpack_require__(473),
        styles: [__webpack_require__(443)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _c || Object])
], TherapistUpdateComponent);

var _a, _b, _c;
//# sourceMappingURL=therapist-update.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ChartPointComponent = (function () {
    function ChartPointComponent() {
        this.click = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.unselect = new core_1.EventEmitter();
        this.mouseOver = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
        this.update = new core_1.EventEmitter();
    }
    return ChartPointComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "click", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "remove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "unselect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "mouseOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "mouseOut", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "update", void 0);
ChartPointComponent = __decorate([
    core_1.Directive({
        selector: 'point'
    })
], ChartPointComponent);
exports.ChartPointComponent = ChartPointComponent;
//# sourceMappingURL=ChartPointComponent.js.map

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ChartPointComponent_1 = __webpack_require__(393);
var ChartSeriesComponent = (function () {
    function ChartSeriesComponent() {
        this.click = new core_1.EventEmitter();
        this.afterAnimate = new core_1.EventEmitter();
        this.checkboxClick = new core_1.EventEmitter();
        this.hide = new core_1.EventEmitter();
        this.legendItemClick = new core_1.EventEmitter();
        this.mouseOver = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
        this.show = new core_1.EventEmitter();
    }
    return ChartSeriesComponent;
}());
__decorate([
    core_1.ContentChild(ChartPointComponent_1.ChartPointComponent),
    __metadata("design:type", ChartPointComponent_1.ChartPointComponent)
], ChartSeriesComponent.prototype, "point", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "click", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "afterAnimate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "checkboxClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "hide", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "legendItemClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "mouseOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "mouseOut", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "show", void 0);
ChartSeriesComponent = __decorate([
    core_1.Directive({
        selector: 'series'
    })
], ChartSeriesComponent);
exports.ChartSeriesComponent = ChartSeriesComponent;
//# sourceMappingURL=ChartSeriesComponent.js.map

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ChartXAxisComponent = (function () {
    function ChartXAxisComponent() {
        this.afterBreaks = new core_1.EventEmitter();
        this.afterSetExtremes = new core_1.EventEmitter();
        this.pointBreak = new core_1.EventEmitter();
        this.pointInBreak = new core_1.EventEmitter();
        this.setExtremes = new core_1.EventEmitter();
    }
    return ChartXAxisComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartXAxisComponent.prototype, "afterBreaks", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartXAxisComponent.prototype, "afterSetExtremes", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartXAxisComponent.prototype, "pointBreak", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartXAxisComponent.prototype, "pointInBreak", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartXAxisComponent.prototype, "setExtremes", void 0);
ChartXAxisComponent = __decorate([
    core_1.Directive({
        selector: 'xAxis'
    })
], ChartXAxisComponent);
exports.ChartXAxisComponent = ChartXAxisComponent;
//# sourceMappingURL=ChartXAxisComponent.js.map

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ChartYAxisComponent = (function () {
    function ChartYAxisComponent() {
        this.afterBreaks = new core_1.EventEmitter();
        this.afterSetExtremes = new core_1.EventEmitter();
        this.pointBreak = new core_1.EventEmitter();
        this.pointInBreak = new core_1.EventEmitter();
        this.setExtremes = new core_1.EventEmitter();
    }
    return ChartYAxisComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "afterBreaks", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "afterSetExtremes", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "pointBreak", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "pointInBreak", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "setExtremes", void 0);
ChartYAxisComponent = __decorate([
    core_1.Directive({
        selector: 'yAxis'
    })
], ChartYAxisComponent);
exports.ChartYAxisComponent = ChartYAxisComponent;
//# sourceMappingURL=ChartYAxisComponent.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, "/*! =========================================================\n *\n Material Dashboard - V1.1.0\n*\n* =========================================================\n*\n* Copyright 2016 Creative Tim (http://www.creative-tim.com/product/material-dashboard)\n *\n *                       _oo0oo_\n *                      o8888888o\n *                      88\" . \"88\n *                      (| -_- |)\n *                      0\\  =  /0\n *                    ___/`---'\\___\n *                  .' \\|     |// '.\n *                 / \\|||  :  |||// \\\n *                / _||||| -:- |||||- \\\n *               |   | \\  -  /// |   |\n *               | \\_|  ''\\---/''  |_/ |\n *               \\  .-\\__  '-'  ___/-. /\n *             ___'. .'  /--.--\\  `. .'___\n *          .\"\" '<  `.___\\_<|>_/___.' >' \"\".\n *         | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |\n *         \\  \\ `_.   \\_ __\\ /__ _/   .-` /  /\n *     =====`-.____`.___ \\_____/___.-`___.-'=====\n *                       `=---='\n *\n *     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n *\n *               Buddha Bless:  \"No Bugs\"\n *\n * ========================================================= */\n/* ANIMATION */\n/* SHADOWS */\n/* Shadows (from mdl http://www.getmdl.io/) */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -ms-touch-action: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n}\n\n.noUi-base {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.noUi-origin {\n  position: absolute;\n  right: 0;\n  top: 0;\n  left: 0;\n  bottom: 0;\n}\n\n.noUi-handle {\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n}\n\n.noUi-stacking .noUi-handle {\n  z-index: 10;\n}\n\n.noUi-state-tap .noUi-origin {\n  transition: left 0.3s, top 0.3s;\n}\n\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n\n.noUi-horizontal {\n  height: 10px;\n}\n\n.noUi-handle {\n  box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  left: -10px;\n  top: -6px;\n  cursor: pointer;\n  border-radius: 100%;\n  transition: all 0.2s ease-out;\n  border: 1px solid;\n  background: #FFFFFF;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.noUi-vertical .noUi-handle {\n  margin-left: 5px;\n  cursor: ns-resize;\n}\n\n.noUi-horizontal.noUi-extended {\n  padding: 0 15px;\n}\n\n.noUi-horizontal.noUi-extended .noUi-origin {\n  right: -15px;\n}\n\n.noUi-background {\n  height: 2px;\n  margin: 20px 0;\n}\n\n.noUi-origin {\n  margin: 0;\n  border-radius: 0;\n  height: 2px;\n  background: #c8c8c8;\n}\n.noUi-origin[style^=\"left: 0\"] .noUi-handle {\n  background-color: #fff;\n  border: 2px solid #c8c8c8;\n}\n.noUi-origin[style^=\"left: 0\"] .noUi-handle.noUi-active {\n  border-width: 1px;\n}\n\n.noUi-target {\n  border-radius: 3px;\n}\n\n.noUi-horizontal {\n  height: 2px;\n  margin: 15px 0;\n}\n\n.noUi-vertical {\n  height: 100%;\n  width: 2px;\n  margin: 0 15px;\n  display: inline-block;\n}\n\n.noUi-handle.noUi-active {\n  -webkit-transform: scale3d(2, 2, 1);\n          transform: scale3d(2, 2, 1);\n}\n\n[disabled].noUi-slider {\n  opacity: 0.5;\n}\n\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n\n.slider {\n  background: #c8c8c8;\n}\n\n.slider.noUi-connect {\n  background-color: #9c27b0;\n}\n.slider .noUi-handle {\n  border-color: #9c27b0;\n}\n.slider.slider-info .noUi-connect, .slider.slider-info.noUi-connect {\n  background-color: #00bcd4;\n}\n.slider.slider-info .noUi-handle {\n  border-color: #00bcd4;\n}\n.slider.slider-success .noUi-connect, .slider.slider-success.noUi-connect {\n  background-color: #4caf50;\n}\n.slider.slider-success .noUi-handle {\n  border-color: #4caf50;\n}\n.slider.slider-warning .noUi-connect, .slider.slider-warning.noUi-connect {\n  background-color: #ff9800;\n}\n.slider.slider-warning .noUi-handle {\n  border-color: #ff9800;\n}\n.slider.slider-danger .noUi-connect, .slider.slider-danger.noUi-connect {\n  background-color: #f44336;\n}\n.slider.slider-danger .noUi-handle {\n  border-color: #f44336;\n}\n\n/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\n\nCopyright (c) 2015 Daniel Eden\n*/\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n.animated.flipOutX,\n.animated.flipOutY {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\nh1, .h1 {\n  font-size: 3.8em;\n  line-height: 1.15em;\n}\n\nh2, .h2 {\n  font-size: 2.6em;\n}\n\nh3, .h3 {\n  font-size: 1.825em;\n  line-height: 1.4em;\n  margin: 20px 0 10px;\n}\n\nh4, .h4 {\n  font-size: 1.3em;\n  line-height: 1.4em;\n}\n\nh5, .h5 {\n  font-size: 1.25em;\n  line-height: 1.4em;\n  margin-bottom: 15px;\n}\n\nh6, .h6 {\n  font-size: 1em;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n/*.title,\n.card-title,\n.info-title,\n.footer-brand,\n.footer-big h5,\n.footer-big h4,\n.media .media-heading{\n    font-weight: $font-weight-extra-bold;\n    font-family: $font-family-serif;\n\n    &,\n    a{\n        color: $black-color;\n        text-decoration: none;\n    }\n}*/\nh2.title {\n  margin-bottom: 30px;\n}\n\n.description,\n.card-description,\n.footer-big p {\n  color: #999999;\n}\n\n.text-warning {\n  color: #ff9800;\n}\n\n.text-primary {\n  color: #9c27b0;\n}\n\n.text-danger {\n  color: #f44336;\n}\n\n.text-success {\n  color: #4caf50;\n}\n\n.text-info {\n  color: #00bcd4;\n}\n\n.text-rose {\n  color: #e91e63;\n}\n\n.text-gray {\n  color: #999999;\n}\n\n.wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh;\n}\n\n.sidebar,\n.off-canvas-sidebar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.sidebar .sidebar-wrapper,\n.off-canvas-sidebar .sidebar-wrapper {\n  position: relative;\n  height: calc(100vh - 75px);\n  overflow: auto;\n  width: 260px;\n  z-index: 4;\n}\n.sidebar .logo-tim,\n.off-canvas-sidebar .logo-tim {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n.sidebar .logo-tim img,\n.off-canvas-sidebar .logo-tim img {\n  width: 60px;\n  height: 60px;\n}\n.sidebar .nav,\n.off-canvas-sidebar .nav {\n  margin-top: 20px;\n}\n.sidebar .nav li > a,\n.off-canvas-sidebar .nav li > a {\n  margin: 10px 15px;\n  border-radius: 3px;\n  color: #3C4858;\n}\n.sidebar .nav li:hover > a,\n.off-canvas-sidebar .nav li:hover > a {\n  background: rgba(200, 200, 200, 0.2);\n  color: #3C4858;\n}\n.sidebar .nav li.active > a,\n.off-canvas-sidebar .nav li.active > a {\n  color: #FFFFFF;\n}\n.sidebar .nav li.active > a i,\n.off-canvas-sidebar .nav li.active > a i {\n  color: #FFFFFF;\n}\n.sidebar .nav p,\n.off-canvas-sidebar .nav p {\n  margin: 0;\n  line-height: 30px;\n  font-size: 14px;\n}\n.sidebar .nav i,\n.off-canvas-sidebar .nav i {\n  font-size: 24px;\n  float: left;\n  margin-right: 15px;\n  line-height: 30px;\n  width: 30px;\n  text-align: center;\n  color: #a9afbb;\n}\n.sidebar .sidebar-background,\n.off-canvas-sidebar .sidebar-background {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center;\n}\n.sidebar .sidebar-background:after,\n.off-canvas-sidebar .sidebar-background:after {\n  position: absolute;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  display: block;\n  background: #FFFFFF;\n  opacity: .93;\n}\n.sidebar .logo,\n.off-canvas-sidebar .logo {\n  position: relative;\n  padding: 15px 15px;\n  z-index: 4;\n}\n.sidebar .logo:after,\n.off-canvas-sidebar .logo:after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  right: 10%;\n  height: 1px;\n  width: 80%;\n  background-color: rgba(180, 180, 180, 0.3);\n}\n.sidebar .logo p,\n.off-canvas-sidebar .logo p {\n  float: left;\n  font-size: 20px;\n  margin: 10px 10px;\n  color: #FFFFFF;\n  line-height: 20px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n.sidebar .logo .simple-text,\n.off-canvas-sidebar .logo .simple-text {\n  text-transform: uppercase;\n  padding: 5px 0px;\n  display: block;\n  font-size: 18px;\n  color: #3C4858;\n  text-align: center;\n  font-weight: 400;\n  line-height: 30px;\n}\n.sidebar .logo-tim,\n.off-canvas-sidebar .logo-tim {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n.sidebar .logo-tim img,\n.off-canvas-sidebar .logo-tim img {\n  width: 60px;\n  height: 60px;\n}\n.sidebar:after, .sidebar:before,\n.off-canvas-sidebar:after,\n.off-canvas-sidebar:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.sidebar:before,\n.off-canvas-sidebar:before {\n  opacity: .33;\n}\n.sidebar:after,\n.off-canvas-sidebar:after {\n  z-index: 3;\n  opacity: 1;\n}\n.sidebar[data-image]:after, .sidebar.has-image:after,\n.off-canvas-sidebar[data-image]:after,\n.off-canvas-sidebar.has-image:after {\n  opacity: .77;\n}\n.sidebar[data-color=\"blue\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"blue\"] .nav li.active a {\n  background-color: #00bcd4;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.sidebar[data-color=\"green\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"green\"] .nav li.active a {\n  background-color: #4caf50;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.sidebar[data-color=\"orange\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"orange\"] .nav li.active a {\n  background-color: #ff9800;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.sidebar[data-color=\"red\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"red\"] .nav li.active a {\n  background-color: #f44336;\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.sidebar[data-color=\"purple\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"purple\"] .nav li.active a {\n  background-color: #9c27b0;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n\n.off-canvas-sidebar .nav > li > a,\n.off-canvas-sidebar .nav > li > a:hover {\n  color: #FFFFFF;\n}\n.off-canvas-sidebar .nav > li > a:focus {\n  background: rgba(200, 200, 200, 0.2);\n}\n\n.main-panel {\n  position: relative;\n  z-index: 2;\n  float: right;\n  overflow: auto;\n  width: calc(100% - 260px);\n  min-height: 100%;\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n  transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n.main-panel > .content {\n  margin-top: 70px;\n  padding: 30px 15px;\n  min-height: calc(100% - 123px);\n}\n.main-panel > .footer {\n  border-top: 1px solid #e7e7e7;\n}\n.main-panel > .navbar {\n  margin-bottom: 0;\n}\n\n.main-panel {\n  max-height: 100%;\n  height: 100%;\n}\n\n.sidebar,\n.main-panel {\n  transition-property: top,bottom;\n  transition-duration: .2s,.2s;\n  transition-timing-function: linear,linear;\n  -webkit-overflow-scrolling: touch;\n}\n\n.btn,\n.navbar .navbar-nav > li > a.btn {\n  border: none;\n  border-radius: 3px;\n  position: relative;\n  padding: 12px 30px;\n  margin: 10px 1px;\n  font-size: 12px;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  will-change: box-shadow, transform;\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn::-moz-focus-inner,\n.navbar .navbar-nav > li > a.btn::-moz-focus-inner {\n  border: 0;\n}\n.btn, .btn.btn-default,\n.navbar .navbar-nav > li > a.btn,\n.navbar .navbar-nav > li > a.btn.btn-default {\n  box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);\n}\n.btn, .btn:hover, .btn:focus, .btn:active, .btn.active, .btn:active:focus, .btn:active:hover, .btn.active:focus, .btn.active:hover, .open > .btn.dropdown-toggle, .open > .btn.dropdown-toggle:focus, .open > .btn.dropdown-toggle:hover, .btn.btn-default, .btn.btn-default:hover, .btn.btn-default:focus, .btn.btn-default:active, .btn.btn-default.active, .btn.btn-default:active:focus, .btn.btn-default:active:hover, .btn.btn-default.active:focus, .btn.btn-default.active:hover, .open > .btn.btn-default.dropdown-toggle, .open > .btn.btn-default.dropdown-toggle:focus, .open > .btn.btn-default.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn,\n.navbar .navbar-nav > li > a.btn:hover,\n.navbar .navbar-nav > li > a.btn:focus,\n.navbar .navbar-nav > li > a.btn:active,\n.navbar .navbar-nav > li > a.btn.active,\n.navbar .navbar-nav > li > a.btn:active:focus,\n.navbar .navbar-nav > li > a.btn:active:hover,\n.navbar .navbar-nav > li > a.btn.active:focus,\n.navbar .navbar-nav > li > a.btn.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-default,\n.navbar .navbar-nav > li > a.btn.btn-default:hover,\n.navbar .navbar-nav > li > a.btn.btn-default:focus,\n.navbar .navbar-nav > li > a.btn.btn-default:active,\n.navbar .navbar-nav > li > a.btn.btn-default.active,\n.navbar .navbar-nav > li > a.btn.btn-default:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-default:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-default.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-default.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle:hover {\n  background-color: #999999;\n  color: #FFFFFF;\n}\n.btn:focus, .btn:active, .btn:hover, .btn.btn-default:focus, .btn.btn-default:active, .btn.btn-default:hover,\n.navbar .navbar-nav > li > a.btn:focus,\n.navbar .navbar-nav > li > a.btn:active,\n.navbar .navbar-nav > li > a.btn:hover,\n.navbar .navbar-nav > li > a.btn.btn-default:focus,\n.navbar .navbar-nav > li > a.btn.btn-default:active,\n.navbar .navbar-nav > li > a.btn.btn-default:hover {\n  box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);\n}\n.btn.disabled, .btn.disabled:hover, .btn.disabled:focus, .btn.disabled.focus, .btn.disabled:active, .btn.disabled.active, .btn:disabled, .btn:disabled:hover, .btn:disabled:focus, .btn:disabled.focus, .btn:disabled:active, .btn:disabled.active, .btn[disabled], .btn[disabled]:hover, .btn[disabled]:focus, .btn[disabled].focus, .btn[disabled]:active, .btn[disabled].active, fieldset[disabled] .btn, fieldset[disabled] .btn:hover, fieldset[disabled] .btn:focus, fieldset[disabled] .btn.focus, fieldset[disabled] .btn:active, fieldset[disabled] .btn.active, .btn.btn-default.disabled, .btn.btn-default.disabled:hover, .btn.btn-default.disabled:focus, .btn.btn-default.disabled.focus, .btn.btn-default.disabled:active, .btn.btn-default.disabled.active, .btn.btn-default:disabled, .btn.btn-default:disabled:hover, .btn.btn-default:disabled:focus, .btn.btn-default:disabled.focus, .btn.btn-default:disabled:active, .btn.btn-default:disabled.active, .btn.btn-default[disabled], .btn.btn-default[disabled]:hover, .btn.btn-default[disabled]:focus, .btn.btn-default[disabled].focus, .btn.btn-default[disabled]:active, .btn.btn-default[disabled].active, fieldset[disabled] .btn.btn-default, fieldset[disabled] .btn.btn-default:hover, fieldset[disabled] .btn.btn-default:focus, fieldset[disabled] .btn.btn-default.focus, fieldset[disabled] .btn.btn-default:active, fieldset[disabled] .btn.btn-default.active,\n.navbar .navbar-nav > li > a.btn.disabled,\n.navbar .navbar-nav > li > a.btn.disabled:hover,\n.navbar .navbar-nav > li > a.btn.disabled:focus,\n.navbar .navbar-nav > li > a.btn.disabled.focus,\n.navbar .navbar-nav > li > a.btn.disabled:active,\n.navbar .navbar-nav > li > a.btn.disabled.active,\n.navbar .navbar-nav > li > a.btn:disabled,\n.navbar .navbar-nav > li > a.btn:disabled:hover,\n.navbar .navbar-nav > li > a.btn:disabled:focus,\n.navbar .navbar-nav > li > a.btn:disabled.focus,\n.navbar .navbar-nav > li > a.btn:disabled:active,\n.navbar .navbar-nav > li > a.btn:disabled.active,\n.navbar .navbar-nav > li > a.btn[disabled],\n.navbar .navbar-nav > li > a.btn[disabled]:hover,\n.navbar .navbar-nav > li > a.btn[disabled]:focus,\n.navbar .navbar-nav > li > a.btn[disabled].focus,\n.navbar .navbar-nav > li > a.btn[disabled]:active,\n.navbar .navbar-nav > li > a.btn[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.active,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled],\n.navbar .navbar-nav > li > a.btn.btn-default[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default.active {\n  box-shadow: none;\n}\n.btn.btn-simple, .btn.btn-default.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple {\n  background-color: transparent;\n  color: #999999;\n  box-shadow: none;\n}\n.btn.btn-simple:hover, .btn.btn-simple:focus, .btn.btn-simple:active, .btn.btn-default.btn-simple:hover, .btn.btn-default.btn-simple:focus, .btn.btn-default.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple:active {\n  background-color: transparent;\n  color: #999999;\n}\n.btn.btn-primary,\n.navbar .navbar-nav > li > a.btn.btn-primary {\n  box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\n}\n.btn.btn-primary, .btn.btn-primary:hover, .btn.btn-primary:focus, .btn.btn-primary:active, .btn.btn-primary.active, .btn.btn-primary:active:focus, .btn.btn-primary:active:hover, .btn.btn-primary.active:focus, .btn.btn-primary.active:hover, .open > .btn.btn-primary.dropdown-toggle, .open > .btn.btn-primary.dropdown-toggle:focus, .open > .btn.btn-primary.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary,\n.navbar .navbar-nav > li > a.btn.btn-primary:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:active,\n.navbar .navbar-nav > li > a.btn.btn-primary.active,\n.navbar .navbar-nav > li > a.btn.btn-primary:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle:hover {\n  background-color: #9c27b0;\n  color: #FFFFFF;\n}\n.btn.btn-primary:focus, .btn.btn-primary:active, .btn.btn-primary:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:active,\n.navbar .navbar-nav > li > a.btn.btn-primary:hover {\n  box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);\n}\n.btn.btn-primary.disabled, .btn.btn-primary.disabled:hover, .btn.btn-primary.disabled:focus, .btn.btn-primary.disabled.focus, .btn.btn-primary.disabled:active, .btn.btn-primary.disabled.active, .btn.btn-primary:disabled, .btn.btn-primary:disabled:hover, .btn.btn-primary:disabled:focus, .btn.btn-primary:disabled.focus, .btn.btn-primary:disabled:active, .btn.btn-primary:disabled.active, .btn.btn-primary[disabled], .btn.btn-primary[disabled]:hover, .btn.btn-primary[disabled]:focus, .btn.btn-primary[disabled].focus, .btn.btn-primary[disabled]:active, .btn.btn-primary[disabled].active, fieldset[disabled] .btn.btn-primary, fieldset[disabled] .btn.btn-primary:hover, fieldset[disabled] .btn.btn-primary:focus, fieldset[disabled] .btn.btn-primary.focus, fieldset[disabled] .btn.btn-primary:active, fieldset[disabled] .btn.btn-primary.active,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled],\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary.active {\n  box-shadow: none;\n}\n.btn.btn-primary.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple {\n  background-color: transparent;\n  color: #9c27b0;\n  box-shadow: none;\n}\n.btn.btn-primary.btn-simple:hover, .btn.btn-primary.btn-simple:focus, .btn.btn-primary.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:active {\n  background-color: transparent;\n  color: #9c27b0;\n}\n.btn.btn-info,\n.navbar .navbar-nav > li > a.btn.btn-info {\n  box-shadow: 0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12);\n}\n.btn.btn-info, .btn.btn-info:hover, .btn.btn-info:focus, .btn.btn-info:active, .btn.btn-info.active, .btn.btn-info:active:focus, .btn.btn-info:active:hover, .btn.btn-info.active:focus, .btn.btn-info.active:hover, .open > .btn.btn-info.dropdown-toggle, .open > .btn.btn-info.dropdown-toggle:focus, .open > .btn.btn-info.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-info,\n.navbar .navbar-nav > li > a.btn.btn-info:hover,\n.navbar .navbar-nav > li > a.btn.btn-info:focus,\n.navbar .navbar-nav > li > a.btn.btn-info:active,\n.navbar .navbar-nav > li > a.btn.btn-info.active,\n.navbar .navbar-nav > li > a.btn.btn-info:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-info:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-info.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-info.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle:hover {\n  background-color: #00bcd4;\n  color: #FFFFFF;\n}\n.btn.btn-info:focus, .btn.btn-info:active, .btn.btn-info:hover,\n.navbar .navbar-nav > li > a.btn.btn-info:focus,\n.navbar .navbar-nav > li > a.btn.btn-info:active,\n.navbar .navbar-nav > li > a.btn.btn-info:hover {\n  box-shadow: 0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2);\n}\n.btn.btn-info.disabled, .btn.btn-info.disabled:hover, .btn.btn-info.disabled:focus, .btn.btn-info.disabled.focus, .btn.btn-info.disabled:active, .btn.btn-info.disabled.active, .btn.btn-info:disabled, .btn.btn-info:disabled:hover, .btn.btn-info:disabled:focus, .btn.btn-info:disabled.focus, .btn.btn-info:disabled:active, .btn.btn-info:disabled.active, .btn.btn-info[disabled], .btn.btn-info[disabled]:hover, .btn.btn-info[disabled]:focus, .btn.btn-info[disabled].focus, .btn.btn-info[disabled]:active, .btn.btn-info[disabled].active, fieldset[disabled] .btn.btn-info, fieldset[disabled] .btn.btn-info:hover, fieldset[disabled] .btn.btn-info:focus, fieldset[disabled] .btn.btn-info.focus, fieldset[disabled] .btn.btn-info:active, fieldset[disabled] .btn.btn-info.active,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled],\n.navbar .navbar-nav > li > a.btn.btn-info[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info.active {\n  box-shadow: none;\n}\n.btn.btn-info.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple {\n  background-color: transparent;\n  color: #00bcd4;\n  box-shadow: none;\n}\n.btn.btn-info.btn-simple:hover, .btn.btn-info.btn-simple:focus, .btn.btn-info.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple:active {\n  background-color: transparent;\n  color: #00bcd4;\n}\n.btn.btn-success,\n.navbar .navbar-nav > li > a.btn.btn-success {\n  box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12);\n}\n.btn.btn-success, .btn.btn-success:hover, .btn.btn-success:focus, .btn.btn-success:active, .btn.btn-success.active, .btn.btn-success:active:focus, .btn.btn-success:active:hover, .btn.btn-success.active:focus, .btn.btn-success.active:hover, .open > .btn.btn-success.dropdown-toggle, .open > .btn.btn-success.dropdown-toggle:focus, .open > .btn.btn-success.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-success,\n.navbar .navbar-nav > li > a.btn.btn-success:hover,\n.navbar .navbar-nav > li > a.btn.btn-success:focus,\n.navbar .navbar-nav > li > a.btn.btn-success:active,\n.navbar .navbar-nav > li > a.btn.btn-success.active,\n.navbar .navbar-nav > li > a.btn.btn-success:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-success:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-success.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-success.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle:hover {\n  background-color: #4caf50;\n  color: #FFFFFF;\n}\n.btn.btn-success:focus, .btn.btn-success:active, .btn.btn-success:hover,\n.navbar .navbar-nav > li > a.btn.btn-success:focus,\n.navbar .navbar-nav > li > a.btn.btn-success:active,\n.navbar .navbar-nav > li > a.btn.btn-success:hover {\n  box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2);\n}\n.btn.btn-success.disabled, .btn.btn-success.disabled:hover, .btn.btn-success.disabled:focus, .btn.btn-success.disabled.focus, .btn.btn-success.disabled:active, .btn.btn-success.disabled.active, .btn.btn-success:disabled, .btn.btn-success:disabled:hover, .btn.btn-success:disabled:focus, .btn.btn-success:disabled.focus, .btn.btn-success:disabled:active, .btn.btn-success:disabled.active, .btn.btn-success[disabled], .btn.btn-success[disabled]:hover, .btn.btn-success[disabled]:focus, .btn.btn-success[disabled].focus, .btn.btn-success[disabled]:active, .btn.btn-success[disabled].active, fieldset[disabled] .btn.btn-success, fieldset[disabled] .btn.btn-success:hover, fieldset[disabled] .btn.btn-success:focus, fieldset[disabled] .btn.btn-success.focus, fieldset[disabled] .btn.btn-success:active, fieldset[disabled] .btn.btn-success.active,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled],\n.navbar .navbar-nav > li > a.btn.btn-success[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success.active {\n  box-shadow: none;\n}\n.btn.btn-success.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple {\n  background-color: transparent;\n  color: #4caf50;\n  box-shadow: none;\n}\n.btn.btn-success.btn-simple:hover, .btn.btn-success.btn-simple:focus, .btn.btn-success.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple:active {\n  background-color: transparent;\n  color: #4caf50;\n}\n.btn.btn-warning,\n.navbar .navbar-nav > li > a.btn.btn-warning {\n  box-shadow: 0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12);\n}\n.btn.btn-warning, .btn.btn-warning:hover, .btn.btn-warning:focus, .btn.btn-warning:active, .btn.btn-warning.active, .btn.btn-warning:active:focus, .btn.btn-warning:active:hover, .btn.btn-warning.active:focus, .btn.btn-warning.active:hover, .open > .btn.btn-warning.dropdown-toggle, .open > .btn.btn-warning.dropdown-toggle:focus, .open > .btn.btn-warning.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning,\n.navbar .navbar-nav > li > a.btn.btn-warning:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:active,\n.navbar .navbar-nav > li > a.btn.btn-warning.active,\n.navbar .navbar-nav > li > a.btn.btn-warning:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle:hover {\n  background-color: #ff9800;\n  color: #FFFFFF;\n}\n.btn.btn-warning:focus, .btn.btn-warning:active, .btn.btn-warning:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:active,\n.navbar .navbar-nav > li > a.btn.btn-warning:hover {\n  box-shadow: 0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2);\n}\n.btn.btn-warning.disabled, .btn.btn-warning.disabled:hover, .btn.btn-warning.disabled:focus, .btn.btn-warning.disabled.focus, .btn.btn-warning.disabled:active, .btn.btn-warning.disabled.active, .btn.btn-warning:disabled, .btn.btn-warning:disabled:hover, .btn.btn-warning:disabled:focus, .btn.btn-warning:disabled.focus, .btn.btn-warning:disabled:active, .btn.btn-warning:disabled.active, .btn.btn-warning[disabled], .btn.btn-warning[disabled]:hover, .btn.btn-warning[disabled]:focus, .btn.btn-warning[disabled].focus, .btn.btn-warning[disabled]:active, .btn.btn-warning[disabled].active, fieldset[disabled] .btn.btn-warning, fieldset[disabled] .btn.btn-warning:hover, fieldset[disabled] .btn.btn-warning:focus, fieldset[disabled] .btn.btn-warning.focus, fieldset[disabled] .btn.btn-warning:active, fieldset[disabled] .btn.btn-warning.active,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled],\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning.active {\n  box-shadow: none;\n}\n.btn.btn-warning.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple {\n  background-color: transparent;\n  color: #ff9800;\n  box-shadow: none;\n}\n.btn.btn-warning.btn-simple:hover, .btn.btn-warning.btn-simple:focus, .btn.btn-warning.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:active {\n  background-color: transparent;\n  color: #ff9800;\n}\n.btn.btn-danger,\n.navbar .navbar-nav > li > a.btn.btn-danger {\n  box-shadow: 0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12);\n}\n.btn.btn-danger, .btn.btn-danger:hover, .btn.btn-danger:focus, .btn.btn-danger:active, .btn.btn-danger.active, .btn.btn-danger:active:focus, .btn.btn-danger:active:hover, .btn.btn-danger.active:focus, .btn.btn-danger.active:hover, .open > .btn.btn-danger.dropdown-toggle, .open > .btn.btn-danger.dropdown-toggle:focus, .open > .btn.btn-danger.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger,\n.navbar .navbar-nav > li > a.btn.btn-danger:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:active,\n.navbar .navbar-nav > li > a.btn.btn-danger.active,\n.navbar .navbar-nav > li > a.btn.btn-danger:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle:hover {\n  background-color: #f44336;\n  color: #FFFFFF;\n}\n.btn.btn-danger:focus, .btn.btn-danger:active, .btn.btn-danger:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:active,\n.navbar .navbar-nav > li > a.btn.btn-danger:hover {\n  box-shadow: 0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2);\n}\n.btn.btn-danger.disabled, .btn.btn-danger.disabled:hover, .btn.btn-danger.disabled:focus, .btn.btn-danger.disabled.focus, .btn.btn-danger.disabled:active, .btn.btn-danger.disabled.active, .btn.btn-danger:disabled, .btn.btn-danger:disabled:hover, .btn.btn-danger:disabled:focus, .btn.btn-danger:disabled.focus, .btn.btn-danger:disabled:active, .btn.btn-danger:disabled.active, .btn.btn-danger[disabled], .btn.btn-danger[disabled]:hover, .btn.btn-danger[disabled]:focus, .btn.btn-danger[disabled].focus, .btn.btn-danger[disabled]:active, .btn.btn-danger[disabled].active, fieldset[disabled] .btn.btn-danger, fieldset[disabled] .btn.btn-danger:hover, fieldset[disabled] .btn.btn-danger:focus, fieldset[disabled] .btn.btn-danger.focus, fieldset[disabled] .btn.btn-danger:active, fieldset[disabled] .btn.btn-danger.active,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled],\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger.active {\n  box-shadow: none;\n}\n.btn.btn-danger.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple {\n  background-color: transparent;\n  color: #f44336;\n  box-shadow: none;\n}\n.btn.btn-danger.btn-simple:hover, .btn.btn-danger.btn-simple:focus, .btn.btn-danger.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:active {\n  background-color: transparent;\n  color: #f44336;\n}\n.btn.btn-white, .btn.btn-white:focus, .btn.btn-white:hover,\n.navbar .navbar-nav > li > a.btn.btn-white,\n.navbar .navbar-nav > li > a.btn.btn-white:focus,\n.navbar .navbar-nav > li > a.btn.btn-white:hover {\n  background-color: #FFFFFF;\n  color: #999999;\n}\n.btn.btn-white.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-white.btn-simple {\n  color: #FFFFFF;\n  background: transparent;\n  box-shadow: none;\n}\n.btn.btn-facebook,\n.navbar .navbar-nav > li > a.btn.btn-facebook {\n  background-color: #3b5998;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12);\n}\n.btn.btn-facebook:focus, .btn.btn-facebook:active, .btn.btn-facebook:hover,\n.navbar .navbar-nav > li > a.btn.btn-facebook:focus,\n.navbar .navbar-nav > li > a.btn.btn-facebook:active,\n.navbar .navbar-nav > li > a.btn.btn-facebook:hover {\n  background-color: #3b5998;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2);\n}\n.btn.btn-facebook.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-facebook.btn-simple {\n  color: #3b5998;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn.btn-twitter,\n.navbar .navbar-nav > li > a.btn.btn-twitter {\n  background-color: #55acee;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12);\n}\n.btn.btn-twitter:focus, .btn.btn-twitter:active, .btn.btn-twitter:hover,\n.navbar .navbar-nav > li > a.btn.btn-twitter:focus,\n.navbar .navbar-nav > li > a.btn.btn-twitter:active,\n.navbar .navbar-nav > li > a.btn.btn-twitter:hover {\n  background-color: #55acee;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2);\n}\n.btn.btn-twitter.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-twitter.btn-simple {\n  color: #55acee;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn.btn-pinterest,\n.navbar .navbar-nav > li > a.btn.btn-pinterest {\n  background-color: #cc2127;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(204, 33, 39, 0.14), 0 3px 1px -2px rgba(204, 33, 39, 0.2), 0 1px 5px 0 rgba(204, 33, 39, 0.12);\n}\n.btn.btn-pinterest:focus, .btn.btn-pinterest:active, .btn.btn-pinterest:hover,\n.navbar .navbar-nav > li > a.btn.btn-pinterest:focus,\n.navbar .navbar-nav > li > a.btn.btn-pinterest:active,\n.navbar .navbar-nav > li > a.btn.btn-pinterest:hover {\n  background-color: #cc2127;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2);\n}\n.btn.btn-pinterest.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-pinterest.btn-simple {\n  color: #cc2127;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn.btn-google,\n.navbar .navbar-nav > li > a.btn.btn-google {\n  background-color: #dd4b39;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12);\n}\n.btn.btn-google:focus, .btn.btn-google:active, .btn.btn-google:hover,\n.navbar .navbar-nav > li > a.btn.btn-google:focus,\n.navbar .navbar-nav > li > a.btn.btn-google:active,\n.navbar .navbar-nav > li > a.btn.btn-google:hover {\n  background-color: #dd4b39;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2);\n}\n.btn.btn-google.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-google.btn-simple {\n  color: #dd4b39;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn.btn-instagram,\n.navbar .navbar-nav > li > a.btn.btn-instagram {\n  background-color: #125688;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(18, 86, 136, 0.14), 0 3px 1px -2px rgba(18, 86, 136, 0.2), 0 1px 5px 0 rgba(18, 86, 136, 0.12);\n}\n.btn.btn-instagram:focus, .btn.btn-instagram:active, .btn.btn-instagram:hover,\n.navbar .navbar-nav > li > a.btn.btn-instagram:focus,\n.navbar .navbar-nav > li > a.btn.btn-instagram:active,\n.navbar .navbar-nav > li > a.btn.btn-instagram:hover {\n  background-color: #125688;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(18, 86, 136, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(18, 86, 136, 0.2);\n}\n.btn.btn-instagram.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-instagram.btn-simple {\n  color: #125688;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn:focus, .btn:active, .btn:active:focus,\n.navbar .navbar-nav > li > a.btn:focus,\n.navbar .navbar-nav > li > a.btn:active,\n.navbar .navbar-nav > li > a.btn:active:focus {\n  outline: 0;\n}\n.btn.btn-round,\n.navbar .navbar-nav > li > a.btn.btn-round {\n  border-radius: 30px;\n}\n.btn:not(.btn-just-icon):not(.btn-fab) .fa,\n.navbar .navbar-nav > li > a.btn:not(.btn-just-icon):not(.btn-fab) .fa {\n  font-size: 18px;\n  margin-top: -2px;\n  position: relative;\n  top: 2px;\n}\n.btn.btn-fab,\n.navbar .navbar-nav > li > a.btn.btn-fab {\n  border-radius: 50%;\n  font-size: 24px;\n  height: 56px;\n  margin: auto;\n  min-width: 56px;\n  width: 56px;\n  padding: 0;\n  overflow: hidden;\n  position: relative;\n  line-height: normal;\n}\n.btn.btn-fab .ripple-container,\n.navbar .navbar-nav > li > a.btn.btn-fab .ripple-container {\n  border-radius: 50%;\n}\n.btn.btn-fab.btn-fab-mini, .btn-group-sm .btn.btn-fab,\n.navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini, .btn-group-sm\n.navbar .navbar-nav > li > a.btn.btn-fab {\n  height: 40px;\n  min-width: 40px;\n  width: 40px;\n}\n.btn.btn-fab.btn-fab-mini.material-icons, .btn-group-sm .btn.btn-fab.material-icons,\n.navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini.material-icons, .btn-group-sm\n.navbar .navbar-nav > li > a.btn.btn-fab.material-icons {\n  top: -3.5px;\n  left: -3.5px;\n}\n.btn.btn-fab.btn-fab-mini .material-icons, .btn-group-sm .btn.btn-fab .material-icons,\n.navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini .material-icons, .btn-group-sm\n.navbar .navbar-nav > li > a.btn.btn-fab .material-icons {\n  font-size: 17px;\n}\n.btn.btn-fab i.material-icons,\n.navbar .navbar-nav > li > a.btn.btn-fab i.material-icons {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-12px, -12px);\n          transform: translate(-12px, -12px);\n  line-height: 24px;\n  width: 24px;\n  font-size: 24px;\n}\n.btn.btn-lg, .btn-group-lg .btn,\n.navbar .navbar-nav > li > a.btn.btn-lg, .btn-group-lg\n.navbar .navbar-nav > li > a.btn {\n  font-size: 14px;\n  padding: 18px 36px;\n}\n.btn.btn-sm, .btn-group-sm .btn,\n.navbar .navbar-nav > li > a.btn.btn-sm, .btn-group-sm\n.navbar .navbar-nav > li > a.btn {\n  padding: 5px 20px;\n  font-size: 11px;\n}\n.btn.btn-xs, .btn-group-xs .btn,\n.navbar .navbar-nav > li > a.btn.btn-xs, .btn-group-xs\n.navbar .navbar-nav > li > a.btn {\n  padding: 4px 15px;\n  font-size: 10px;\n}\n.btn.btn-just-icon,\n.navbar .navbar-nav > li > a.btn.btn-just-icon {\n  font-size: 20px;\n  padding: 12px 12px;\n  line-height: 1em;\n}\n.btn.btn-just-icon i,\n.navbar .navbar-nav > li > a.btn.btn-just-icon i {\n  width: 20px;\n}\n.btn.btn-just-icon.btn-lg,\n.navbar .navbar-nav > li > a.btn.btn-just-icon.btn-lg {\n  font-size: 22px;\n  padding: 13px 18px;\n}\n\n.btn .material-icons {\n  vertical-align: middle;\n  font-size: 17px;\n  top: -1px;\n  position: relative;\n}\n\n.navbar .navbar-nav > li > a.btn {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.navbar .navbar-nav > li > a.btn.btn-fab {\n  margin: 5px 2px;\n}\n.navbar .navbar-nav > li > a:not(.btn) .material-icons {\n  margin-top: -3px;\n  top: 0px;\n  position: relative;\n  margin-right: 3px;\n}\n.navbar .navbar-nav > li > .profile-photo {\n  margin: 5px 2px;\n}\n\n.navbar-default:not(.navbar-transparent) .navbar-nav > li > a.btn.btn-white.btn-simple {\n  color: #555555;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  margin: 10px 1px;\n}\n.btn-group.open > .dropdown-toggle.btn, .btn-group.open > .dropdown-toggle.btn.btn-default,\n.btn-group-vertical.open > .dropdown-toggle.btn,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-default {\n  background-color: #FFFFFF;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-inverse,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-inverse {\n  background-color: #212121;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-primary,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-primary {\n  background-color: #9c27b0;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-success,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-success {\n  background-color: #4caf50;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-info,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-info {\n  background-color: #00bcd4;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-warning,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-warning {\n  background-color: #ff9800;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-danger,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-danger {\n  background-color: #f44336;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-rose,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-rose {\n  background-color: #e91e63;\n}\n.btn-group .dropdown-menu,\n.btn-group-vertical .dropdown-menu {\n  border-radius: 0 0 3px 3px;\n}\n.btn-group.btn-group-raised,\n.btn-group-vertical.btn-group-raised {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.btn-group .btn + .btn,\n.btn-group .btn,\n.btn-group .btn:active,\n.btn-group .btn-group,\n.btn-group-vertical .btn + .btn,\n.btn-group-vertical .btn,\n.btn-group-vertical .btn:active,\n.btn-group-vertical .btn-group {\n  margin: 0;\n}\n\n.close {\n  font-size: inherit;\n  color: #FFFFFF;\n  opacity: .9;\n  text-shadow: none;\n}\n.close:hover, .close:focus {\n  opacity: 1;\n  color: #FFFFFF;\n}\n.close i {\n  font-size: 20px;\n}\n\nbody {\n  background-color: #EEEEEE;\n  color: #e0c5ce;\n}\nbody.inverse {\n  background: #333333;\n}\nbody.inverse, body.inverse .form-control {\n  color: #ffffff;\n}\nbody.inverse .modal,\nbody.inverse .modal .form-control,\nbody.inverse .panel-default,\nbody.inverse .panel-default .form-control,\nbody.inverse .card,\nbody.inverse .card .form-control {\n  background-color: initial;\n  color: initial;\n}\n\n.wrapper.wrapper-full-page {\n  height: auto;\n  min-height: 100vh;\n}\n\nblockquote p {\n  font-style: italic;\n}\n\n.life-of-material-dashboard {\n  background: #FFFFFF;\n}\n\nbody, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 300;\n  line-height: 1.5em;\n}\n\n.serif-font {\n  font-family: \"Roboto Slab\", \"Times New Roman\", serif;\n}\n\n.page-header {\n  height: 60vh;\n  background-position: center center;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\na {\n  color: #8F9799;\n}\na:hover, a:focus {\n  color: #52B9DF;\n  text-decoration: none;\n}\na.text-info:hover, a.text-info:focus {\n  color: #00a5bb;\n}\na .material-icons {\n  vertical-align: middle;\n}\n\n/*           Animations              */\n.animation-transition-general, .sidebar .nav li > a,\n.off-canvas-sidebar .nav li > a {\n  transition: all 300ms linear;\n}\n\n.animation-transition-slow {\n  transition: all 370ms linear;\n}\n\n.animation-transition-fast, .navbar {\n  transition: all 150ms ease 0s;\n}\n\nlegend {\n  border-bottom: 0;\n}\n\n* {\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  -webkit-tap-highlight-color: transparent;\n}\n*:focus {\n  outline: 0;\n}\n\na:focus, a:active,\nbutton:active, button:focus, button:hover,\nbutton::-moz-focus-inner,\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\nselect::-moz-focus-inner,\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\n  outline: 0 !important;\n}\n\nlegend {\n  margin-bottom: 20px;\n  font-size: 21px;\n}\n\noutput {\n  padding-top: 8px;\n  font-size: 14px;\n  line-height: 1.42857;\n}\n\n.form-control {\n  height: 36px;\n  padding: 7px 0;\n  font-size: 14px;\n  line-height: 1.42857;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 36px;\n  }\n  input[type=\"date\"].input-sm, .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm, .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm, .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm, .input-group-sm\n  input[type=\"month\"] {\n    line-height: 24px;\n  }\n  input[type=\"date\"].input-lg, .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg, .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg, .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg, .input-group-lg\n  input[type=\"month\"] {\n    line-height: 44px;\n  }\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n}\n\n.form-control-static {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  min-height: 34px;\n}\n\n.input-sm .input-sm {\n  height: 24px;\n  padding: 3px 0;\n  font-size: 11px;\n  line-height: 1.5;\n  border-radius: 0;\n}\n.input-sm select.input-sm {\n  height: 24px;\n  line-height: 24px;\n}\n.input-sm textarea.input-sm,\n.input-sm select[multiple].input-sm {\n  height: auto;\n}\n\n.form-group-sm .form-control {\n  height: 24px;\n  padding: 3px 0;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.form-group-sm select.form-control {\n  height: 24px;\n  line-height: 24px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 24px;\n  min-height: 31px;\n  padding: 4px 0;\n  font-size: 11px;\n  line-height: 1.5;\n}\n\n.input-lg .input-lg {\n  height: 44px;\n  padding: 9px 0;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 0;\n}\n.input-lg select.input-lg {\n  height: 44px;\n  line-height: 44px;\n}\n.input-lg textarea.input-lg,\n.input-lg select[multiple].input-lg {\n  height: auto;\n}\n\n.form-group-lg .form-control {\n  height: 44px;\n  padding: 9px 0;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n.form-group-lg select.form-control {\n  height: 44px;\n  line-height: 44px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 44px;\n  min-height: 38px;\n  padding: 10px 0;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 8px;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 28px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 8px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 13.0px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 4px;\n    font-size: 11px;\n  }\n}\n\n.label {\n  border-radius: 2px;\n}\n.label, .label.label-default {\n  background-color: #FFFFFF;\n}\n.label.label-inverse {\n  background-color: #212121;\n}\n.label.label-primary {\n  background-color: #9c27b0;\n}\n.label.label-success {\n  background-color: #4caf50;\n}\n.label.label-info {\n  background-color: #00bcd4;\n}\n.label.label-warning {\n  background-color: #ff9800;\n}\n.label.label-danger {\n  background-color: #f44336;\n}\n.label.label-rose {\n  background-color: #e91e63;\n}\n\n.form-control,\n.form-group .form-control {\n  border: 0;\n  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: transparent;\n  transition: background 0s ease-out;\n  float: none;\n  box-shadow: none;\n  border-radius: 0;\n  font-weight: 400;\n}\n.form-control::-moz-placeholder,\n.form-group .form-control::-moz-placeholder {\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder,\n.form-group .form-control:-ms-input-placeholder {\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder,\n.form-group .form-control::-webkit-input-placeholder {\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control[readonly], .form-control[disabled], fieldset[disabled] .form-control,\n.form-group .form-control[readonly],\n.form-group .form-control[disabled], fieldset[disabled]\n.form-group .form-control {\n  background-color: transparent;\n}\n.form-control[disabled], fieldset[disabled] .form-control,\n.form-group .form-control[disabled], fieldset[disabled]\n.form-group .form-control {\n  background-image: none;\n  border-bottom: 1px dotted #D2D2D2;\n}\n\n.form-group {\n  position: relative;\n}\n.form-group.label-static label.control-label, .form-group.label-placeholder label.control-label, .form-group.label-floating label.control-label {\n  position: absolute;\n  pointer-events: none;\n  transition: 0.3s ease all;\n}\n.form-group.label-floating label.control-label {\n  will-change: left, top, contents;\n}\n.form-group.label-placeholder:not(.is-empty) label.control-label {\n  display: none;\n}\n.form-group .help-block {\n  position: absolute;\n  display: none;\n}\n.form-group.is-focused .form-control {\n  outline: none;\n  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 100% 2px, 100% 1px;\n  box-shadow: none;\n  transition-duration: 0.3s;\n}\n.form-group.is-focused .form-control .material-input:after {\n  background-color: #9c27b0;\n}\n.form-group.is-focused.form-info .form-control {\n  background-image: linear-gradient(#00bcd4, #00bcd4), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-success .form-control {\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-warning .form-control {\n  background-image: linear-gradient(#ff9800, #ff9800), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-danger .form-control {\n  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-rose .form-control {\n  background-image: linear-gradient(#e91e63, #e91e63), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-white .form-control {\n  background-image: linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.label-placeholder label,\n.form-group.is-focused.label-placeholder label.control-label {\n  color: #AAAAAA;\n}\n.form-group.is-focused .help-block {\n  display: block;\n}\n.form-group.has-warning .form-control {\n  box-shadow: none;\n}\n.form-group.has-warning.is-focused .form-control {\n  background-image: linear-gradient(#ff9800, #ff9800), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-warning label.control-label,\n.form-group.has-warning .help-block {\n  color: #ff9800;\n}\n.form-group.has-error .form-control {\n  box-shadow: none;\n}\n.form-group.has-error.is-focused .form-control {\n  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-error label.control-label,\n.form-group.has-error .help-block {\n  color: #f44336;\n}\n.form-group.has-success .form-control {\n  box-shadow: none;\n}\n.form-group.has-success.is-focused .form-control {\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-success label.control-label,\n.form-group.has-success .help-block {\n  color: #4caf50;\n}\n.form-group.has-info .form-control {\n  box-shadow: none;\n}\n.form-group.has-info.is-focused .form-control {\n  background-image: linear-gradient(#00bcd4, #00bcd4), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-info label.control-label,\n.form-group.has-info .help-block {\n  color: #00bcd4;\n}\n.form-group textarea {\n  resize: none;\n}\n.form-group textarea ~ .form-control-highlight {\n  margin-top: -11px;\n}\n.form-group select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.form-group select ~ .material-input:after {\n  display: none;\n}\n\n.form-control {\n  margin-bottom: 7px;\n}\n.form-control::-moz-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n\n.checkbox label,\n.radio label,\nlabel {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n\nlabel.control-label {\n  font-size: 11px;\n  line-height: 1.07143;\n  color: #AAAAAA;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n\n.help-block {\n  margin-top: 0;\n  font-size: 11px;\n}\n\n.form-group {\n  padding-bottom: 7px;\n  margin: 27px 0 0 0;\n}\n.form-group .form-control {\n  margin-bottom: 7px;\n}\n.form-group .form-control::-moz-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group .form-control:-ms-input-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group .form-control::-webkit-input-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group .checkbox label,\n.form-group .radio label,\n.form-group label {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group label.control-label {\n  font-size: 11px;\n  line-height: 1.07143;\n  color: #AAAAAA;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group .help-block {\n  margin-top: 0;\n  font-size: 11px;\n}\n.form-group.label-floating label.control-label, .form-group.label-placeholder label.control-label {\n  top: -7px;\n  font-size: 14px;\n  line-height: 1.42857;\n}\n.form-group.label-static label.control-label, .form-group.label-floating.is-focused label.control-label, .form-group.label-floating:not(.is-empty) label.control-label {\n  top: -28px;\n  left: 0;\n  font-size: 11px;\n  line-height: 1.07143;\n}\n.form-group.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -28px;\n  left: 0;\n  font-size: 11px;\n  line-height: 1.07143;\n}\n\n.form-group.form-group-sm {\n  padding-bottom: 3px;\n  margin: 21px 0 0 0;\n}\n.form-group.form-group-sm .form-control {\n  margin-bottom: 3px;\n}\n.form-group.form-group-sm .form-control::-moz-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control:-ms-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control::-webkit-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-sm .checkbox label,\n.form-group.form-group-sm .radio label,\n.form-group.form-group-sm label {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-sm label.control-label {\n  font-size: 9px;\n  line-height: 1.125;\n  color: #AAAAAA;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-sm .help-block {\n  margin-top: 0;\n  font-size: 9px;\n}\n.form-group.form-group-sm.label-floating label.control-label, .form-group.form-group-sm.label-placeholder label.control-label {\n  top: -11px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.form-group.form-group-sm.label-static label.control-label, .form-group.form-group-sm.label-floating.is-focused label.control-label, .form-group.form-group-sm.label-floating:not(.is-empty) label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n.form-group.form-group-sm.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n\n.form-group.form-group-lg {\n  padding-bottom: 9px;\n  margin: 30px 0 0 0;\n}\n.form-group.form-group-lg .form-control {\n  margin-bottom: 9px;\n}\n.form-group.form-group-lg .form-control::-moz-placeholder {\n  font-size: 18px;\n  line-height: 1.33333;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control:-ms-input-placeholder {\n  font-size: 18px;\n  line-height: 1.33333;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control::-webkit-input-placeholder {\n  font-size: 18px;\n  line-height: 1.33333;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-lg .checkbox label,\n.form-group.form-group-lg .radio label,\n.form-group.form-group-lg label {\n  font-size: 18px;\n  line-height: 1.33333;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-lg label.control-label {\n  font-size: 14px;\n  line-height: 1.0;\n  color: #AAAAAA;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-lg .help-block {\n  margin-top: 0;\n  font-size: 14px;\n}\n.form-group.form-group-lg.label-floating label.control-label, .form-group.form-group-lg.label-placeholder label.control-label {\n  top: -5px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n.form-group.form-group-lg.label-static label.control-label, .form-group.form-group-lg.label-floating.is-focused label.control-label, .form-group.form-group-lg.label-floating:not(.is-empty) label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 1.0;\n}\n.form-group.form-group-lg.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 1.0;\n}\n\nselect.form-control {\n  border: 0;\n  box-shadow: none;\n  border-radius: 0;\n}\n.form-group.is-focused select.form-control {\n  box-shadow: none;\n  border-color: #D2D2D2;\n}\nselect.form-control[multiple], .form-group.is-focused select.form-control[multiple] {\n  height: 85px;\n}\n\n.input-group-btn .btn {\n  margin: 0 0 7px 0;\n}\n\n.form-group.form-group-sm .input-group-btn .btn {\n  margin: 0 0 3px 0;\n}\n.form-group.form-group-lg .input-group-btn .btn {\n  margin: 0 0 9px 0;\n}\n\n.input-group .input-group-btn {\n  padding: 0 12px;\n}\n.input-group .input-group-addon {\n  border: 0;\n  background: transparent;\n  padding: 6px 15px 0px;\n}\n\n.form-group input[type=file] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n\n.form-control-feedback {\n  opacity: 0;\n}\n.has-success .form-control-feedback {\n  color: #4caf50;\n  opacity: 1;\n}\n.has-error .form-control-feedback {\n  color: #f44336;\n  opacity: 1;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 0;\n}\n.form-horizontal .radio {\n  margin-bottom: 10px;\n}\n.form-horizontal label {\n  text-align: right;\n}\n.form-horizontal label.control-label {\n  margin: 0;\n}\n\n.form-newsletter .input-group,\n.form-newsletter .form-group {\n  float: left;\n  width: 78%;\n  margin-right: 2%;\n  margin-top: 9px;\n}\n.form-newsletter .btn {\n  float: left;\n  width: 20%;\n  margin: 9px 0 0;\n}\n\n.alert {\n  border: 0;\n  border-radius: 0;\n  position: relative;\n  padding: 20px 15px;\n  line-height: 20px;\n}\n.alert b {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.alert, .alert.alert-default {\n  background-color: white;\n  color: #555555;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2);\n}\n.alert a, .alert .alert-link, .alert.alert-default a, .alert.alert-default .alert-link {\n  color: #555555;\n}\n.alert.alert-inverse {\n  background-color: #2e2e2e;\n  color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2);\n}\n.alert.alert-inverse a, .alert.alert-inverse .alert-link {\n  color: #fff;\n}\n.alert.alert-primary {\n  background-color: #af2cc5;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.alert.alert-primary a, .alert.alert-primary .alert-link {\n  color: #ffffff;\n}\n.alert.alert-success {\n  background-color: #5cb860;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.alert.alert-success a, .alert.alert-success .alert-link {\n  color: #ffffff;\n}\n.alert.alert-info {\n  background-color: #00d3ee;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.alert.alert-info a, .alert.alert-info .alert-link {\n  color: #ffffff;\n}\n.alert.alert-warning {\n  background-color: #ffa21a;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.alert.alert-warning a, .alert.alert-warning .alert-link {\n  color: #ffffff;\n}\n.alert.alert-danger {\n  background-color: #f55a4e;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.alert.alert-danger a, .alert.alert-danger .alert-link {\n  color: #ffffff;\n}\n.alert.alert-rose {\n  background-color: #eb3573;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);\n}\n.alert.alert-rose a, .alert.alert-rose .alert-link {\n  color: #ffffff;\n}\n.alert-info, .alert-danger, .alert-warning, .alert-success {\n  color: #ffffff;\n}\n.alert-default a, .alert-default .alert-link {\n  color: rgba(0,0,0, 0.87);\n}\n.alert i[data-notify=\"icon\"] {\n  font-size: 30px;\n  display: block;\n  left: 15px;\n  position: absolute;\n  top: 50%;\n  margin-top: -15px;\n}\n.alert span {\n  display: block;\n  max-width: 89%;\n}\n.alert .alert-icon {\n  display: block;\n  float: left;\n  margin-right: 15px;\n}\n.alert .alert-icon i {\n  margin-top: -7px;\n  top: 5px;\n  position: relative;\n}\n\n.alert.alert-with-icon {\n  padding-left: 65px;\n}\n\n.table > thead > tr > th {\n  border-bottom-width: 1px;\n  font-size: 1em;\n  font-weight: 300;\n}\n.table .radio,\n.table .checkbox {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 10px;\n  padding: 0;\n  width: 15px;\n}\n.table .radio .icons,\n.table .checkbox .icons {\n  position: relative;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 12px 8px;\n  vertical-align: middle;\n}\n.table > thead > tr > th {\n  padding-bottom: 4px;\n}\n.table .td-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.table .td-actions .btn {\n  margin: 0px;\n  padding: 5px;\n}\n.table > tbody > tr {\n  position: relative;\n}\n\n.checkbox label {\n  cursor: pointer;\n  padding-left: 0;\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .checkbox label {\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .checkbox label:hover, .form-group.is-focused .checkbox label:focus {\n  color: rgba(0,0,0, .54);\n}\nfieldset[disabled] .form-group.is-focused .checkbox label {\n  color: rgba(0,0,0, 0.26);\n}\n.checkbox input[type=checkbox] {\n  opacity: 0;\n  position: absolute;\n  margin: 0;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  left: 0;\n  pointer-events: none;\n}\n.checkbox .checkbox-material {\n  vertical-align: middle;\n  position: relative;\n  top: 3px;\n  padding-right: 5px;\n}\n.checkbox .checkbox-material:before {\n  display: block;\n  position: absolute;\n  left: 0;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.84);\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  z-index: 1;\n  opacity: 0;\n  margin: 0;\n  -webkit-transform: scale3d(2.3, 2.3, 1);\n          transform: scale3d(2.3, 2.3, 1);\n}\n.checkbox .checkbox-material .check {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 1px solid rgba(0,0,0, .54);\n  overflow: hidden;\n  z-index: 1;\n  border-radius: 3px;\n}\n.checkbox .checkbox-material .check:before {\n  position: absolute;\n  content: \"\";\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  display: block;\n  margin-top: -3px;\n  margin-left: 7px;\n  width: 0;\n  height: 0;\n  background: red;\n  box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0 inset;\n  -webkit-animation: checkbox-off 0.3s forwards;\n          animation: checkbox-off 0.3s forwards;\n}\n.checkbox input[type=checkbox]:focus + .checkbox-material .check:after {\n  opacity: 0.2;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material .check {\n  background: #9c27b0;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material .check:before {\n  color: #FFFFFF;\n  box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n  -webkit-animation: checkbox-on 0.3s forwards;\n          animation: checkbox-on 0.3s forwards;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material:before {\n  -webkit-animation: rippleOn 500ms;\n          animation: rippleOn 500ms;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material .check:after {\n  -webkit-animation: rippleOn 500ms forwards;\n          animation: rippleOn 500ms forwards;\n}\n.checkbox input[type=checkbox]:not(:checked) + .checkbox-material:before {\n  -webkit-animation: rippleOff 500ms;\n          animation: rippleOff 500ms;\n}\n.checkbox input[type=checkbox]:not(:checked) + .checkbox-material .check:after {\n  -webkit-animation: rippleOff 500ms;\n          animation: rippleOff 500ms;\n}\nfieldset[disabled] .checkbox, fieldset[disabled] .checkbox input[type=checkbox],\n.checkbox input[type=checkbox][disabled] ~ .checkbox-material .check,\n.checkbox input[type=checkbox][disabled] + .circle {\n  opacity: 0.5;\n}\n.checkbox input[type=checkbox][disabled] ~ .checkbox-material .check {\n  border-color: #000000;\n  opacity: .26;\n}\n.checkbox input[type=checkbox][disabled] + .checkbox-material .check:after {\n  background-color: rgba(0,0,0, 0.87);\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n@-webkit-keyframes checkbox-on {\n  0% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;\n  }\n  50% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;\n  }\n  100% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n  }\n}\n\n@keyframes checkbox-on {\n  0% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;\n  }\n  50% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;\n  }\n  100% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n  }\n}\n@-webkit-keyframes rippleOn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rippleOn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes rippleOff {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rippleOff {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.radio label {\n  cursor: pointer;\n  padding-left: 35px;\n  position: relative;\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .radio label {\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .radio label:hover, .form-group.is-focused .radio label:focus {\n  color: rgba(0,0,0, .54);\n}\nfieldset[disabled] .form-group.is-focused .radio label {\n  color: rgba(0,0,0, 0.26);\n}\n.radio label span {\n  display: block;\n  position: absolute;\n  left: 10px;\n  top: 2px;\n  transition-duration: 0.2s;\n}\n.radio label .circle {\n  border: 1px solid rgba(0,0,0, .54);\n  height: 15px;\n  width: 15px;\n  border-radius: 100%;\n}\n.radio label .check {\n  height: 15px;\n  width: 15px;\n  border-radius: 100%;\n  background-color: #9c27b0;\n  -webkit-transform: scale3d(0, 0, 0);\n          transform: scale3d(0, 0, 0);\n}\n.radio label .check:after {\n  display: block;\n  position: absolute;\n  content: \"\";\n  background-color: rgba(0,0,0, 0.87);\n  left: -18px;\n  top: -18px;\n  height: 50px;\n  width: 50px;\n  border-radius: 100%;\n  z-index: 1;\n  opacity: 0;\n  margin: 0;\n  -webkit-transform: scale3d(1.5, 1.5, 1);\n          transform: scale3d(1.5, 1.5, 1);\n}\n.radio label input[type=radio]:not(:checked) ~ .check:after {\n  -webkit-animation: rippleOff 500ms;\n          animation: rippleOff 500ms;\n}\n.radio label input[type=radio]:checked ~ .check:after {\n  -webkit-animation: rippleOn 500ms;\n          animation: rippleOn 500ms;\n}\n.radio input[type=radio] {\n  opacity: 0;\n  height: 0;\n  width: 0;\n  overflow: hidden;\n}\n.radio input[type=radio]:checked ~ .check, .radio input[type=radio]:checked ~ .circle {\n  opacity: 1;\n}\n.radio input[type=radio]:checked ~ .check {\n  background-color: #9c27b0;\n}\n.radio input[type=radio]:checked ~ .circle {\n  border-color: #9c27b0;\n}\n.radio input[type=radio]:checked ~ .check {\n  -webkit-transform: scale3d(0.65, 0.65, 1);\n          transform: scale3d(0.65, 0.65, 1);\n}\n.radio input[type=radio][disabled] ~ .check, .radio input[type=radio][disabled] ~ .circle {\n  opacity: 0.26;\n}\n.radio input[type=radio][disabled] ~ .check {\n  background-color: #000000;\n}\n.radio input[type=radio][disabled] ~ .circle {\n  border-color: #000000;\n}\n\n@keyframes rippleOn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rippleOff {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.togglebutton {\n  vertical-align: middle;\n}\n.togglebutton, .togglebutton label, .togglebutton input, .togglebutton .toggle {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.togglebutton label {\n  cursor: pointer;\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .togglebutton label {\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .togglebutton label:hover, .form-group.is-focused .togglebutton label:focus {\n  color: rgba(0,0,0, .54);\n}\nfieldset[disabled] .form-group.is-focused .togglebutton label {\n  color: rgba(0,0,0, 0.26);\n}\n.togglebutton label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.togglebutton label .toggle {\n  text-align: left;\n  margin-left: 5px;\n}\n.togglebutton label .toggle,\n.togglebutton label input[type=checkbox][disabled] + .toggle {\n  content: \"\";\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n  background-color: rgba(80, 80, 80, 0.7);\n  border-radius: 15px;\n  margin-right: 15px;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n}\n.togglebutton label .toggle:after {\n  content: \"\";\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-color: #FFFFFF;\n  border-radius: 20px;\n  position: relative;\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\n  left: -5px;\n  top: -3px;\n  border: 1px solid rgba(0,0,0, .54);\n  transition: left 0.3s ease, background 0.3s ease, box-shadow 0.1s ease;\n}\n.togglebutton label input[type=checkbox][disabled] + .toggle:after, .togglebutton label input[type=checkbox][disabled]:checked + .toggle:after {\n  background-color: #BDBDBD;\n}\n.togglebutton label input[type=checkbox] + .toggle:active:after, .togglebutton label input[type=checkbox][disabled] + .toggle:active:after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.1);\n}\n.togglebutton label input[type=checkbox]:checked + .toggle:after {\n  left: 15px;\n}\n.togglebutton label input[type=checkbox]:checked + .toggle {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n.togglebutton label input[type=checkbox]:checked + .toggle:after {\n  border-color: #9c27b0;\n}\n.togglebutton label input[type=checkbox]:checked + .toggle:active:after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(156, 39, 176, 0.1);\n}\n\n.withripple {\n  position: relative;\n}\n\n.ripple-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  border-radius: inherit;\n  pointer-events: none;\n}\n.disabled .ripple-container {\n  display: none;\n}\n\n.ripple {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  margin-left: -10px;\n  margin-top: -10px;\n  border-radius: 100%;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.05);\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.ripple.ripple-on {\n  transition: opacity 0.15s ease-in 0s, -webkit-transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  transition: opacity 0.15s ease-in 0s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  transition: opacity 0.15s ease-in 0s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, -webkit-transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  opacity: 0.1;\n}\n\n.ripple.ripple-out {\n  transition: opacity 0.1s linear 0s !important;\n  opacity: 0;\n}\n\n.section-dark .nav-pills > li > a, .section-image .nav-pills > li > a {\n  color: #999999;\n}\n.section-dark .nav-pills > li > a:hover,\n.section-dark .nav-pills > li > a:focus, .section-image .nav-pills > li > a:hover,\n.section-image .nav-pills > li > a:focus {\n  background-color: #EEEEEE;\n}\n.nav-pills > li > a {\n  line-height: 24px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  min-width: 100px;\n  text-align: center;\n  color: #555555;\n  transition: all .3s;\n}\n.nav-pills > li > a:hover {\n  background-color: rgba(200, 200, 200, 0.2);\n}\n.nav-pills > li i {\n  display: block;\n  font-size: 30px;\n  padding: 15px 0;\n}\n.nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover {\n  background-color: #9c27b0;\n  color: #FFFFFF;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.nav-pills:not(.nav-pills-icons) > li > a {\n  border-radius: 30px;\n}\n.nav-pills.nav-stacked > li + li {\n  margin-top: 5px;\n}\n.nav-pills.nav-pills-info > li.active > a, .nav-pills.nav-pills-info > li.active > a:focus, .nav-pills.nav-pills-info > li.active > a:hover {\n  background-color: #00bcd4;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.nav-pills.nav-pills-success > li.active > a, .nav-pills.nav-pills-success > li.active > a:focus, .nav-pills.nav-pills-success > li.active > a:hover {\n  background-color: #4caf50;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.nav-pills.nav-pills-warning > li.active > a, .nav-pills.nav-pills-warning > li.active > a:focus, .nav-pills.nav-pills-warning > li.active > a:hover {\n  background-color: #ff9800;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.nav-pills.nav-pills-danger > li.active > a, .nav-pills.nav-pills-danger > li.active > a:focus, .nav-pills.nav-pills-danger > li.active > a:hover {\n  background-color: #f44336;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n\n.tab-space {\n  padding: 20px 0 50px 0px;\n}\n\n.modal-content {\n  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);\n  border-radius: 6px;\n  border: none;\n}\n.modal-content .modal-header {\n  border-bottom: none;\n  padding-top: 24px;\n  padding-right: 24px;\n  padding-bottom: 0;\n  padding-left: 24px;\n}\n.modal-content .modal-body {\n  padding-top: 24px;\n  padding-right: 24px;\n  padding-bottom: 16px;\n  padding-left: 24px;\n}\n.modal-content .modal-footer {\n  border-top: none;\n  padding: 7px;\n}\n.modal-content .modal-footer.text-center {\n  text-align: center;\n}\n.modal-content .modal-footer button {\n  margin: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: auto;\n}\n.modal-content .modal-footer button.pull-left {\n  padding-left: 5px;\n  padding-right: 5px;\n  position: relative;\n  left: -5px;\n}\n.modal-content .modal-footer button + button {\n  margin-bottom: 16px;\n}\n.modal-content .modal-body + .modal-footer {\n  padding-top: 0;\n}\n\n.modal-backdrop {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.modal .modal-dialog {\n  margin-top: 100px;\n}\n.modal .modal-header .close {\n  color: #999999;\n}\n.modal .modal-header .close:hover, .modal .modal-header .close:focus {\n  opacity: 1;\n}\n.modal .modal-header .close i {\n  font-size: 16px;\n}\n\n.modal-notice .instruction {\n  margin-bottom: 25px;\n}\n.modal-notice .picture {\n  max-width: 150px;\n}\n.modal-notice .modal-content .btn-raised {\n  margin-bottom: 15px;\n}\n\n.modal-small {\n  width: 300px;\n}\n.modal-small .modal-body {\n  margin-top: 20px;\n}\n\n.navbar {\n  border: 0;\n  border-radius: 3px;\n  border-bottom: 1px solid #ededf3;\n  padding: 10px 0;\n}\n.navbar .navbar-brand {\n  position: relative;\n  height: 50px;\n  line-height: 30px;\n  color: inherit;\n  padding: 10px 15px;\n}\n.navbar .navbar-brand:hover, .navbar .navbar-brand:focus {\n  color: inherit;\n  background-color: transparent;\n}\n.navbar .notification {\n  position: absolute;\n  top: 5px;\n  border: 1px solid #FFF;\n  right: 10px;\n  font-size: 9px;\n  background: #f44336;\n  color: #FFFFFF;\n  min-width: 20px;\n  padding: 0px 5px;\n  height: 20px;\n  border-radius: 10px;\n  text-align: center;\n  line-height: 19px;\n  vertical-align: middle;\n  display: block;\n}\n.navbar .navbar-text {\n  color: inherit;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.navbar .navbar-nav > li > a {\n  color: inherit;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-weight: 400;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n.navbar .navbar-nav > li > a:hover, .navbar .navbar-nav > li > a:focus {\n  color: inherit;\n  background-color: transparent;\n}\n.navbar .navbar-nav > li > a .material-icons,\n.navbar .navbar-nav > li > a .fa {\n  font-size: 20px;\n}\n.navbar .navbar-nav > li > a.btn:not(.btn-just-icon) .fa {\n  position: relative;\n  top: 2px;\n  margin-top: -4px;\n  margin-right: 4px;\n}\n.navbar .navbar-nav > li > .dropdown-menu {\n  margin-top: -20px;\n}\n.navbar .navbar-nav > li.open > .dropdown-menu {\n  margin-top: 0;\n}\n.navbar .navbar-nav > .active > a, .navbar .navbar-nav > .active > a:hover, .navbar .navbar-nav > .active > a:focus {\n  color: inherit;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.navbar .navbar-nav > .disabled > a, .navbar .navbar-nav > .disabled > a:hover, .navbar .navbar-nav > .disabled > a:focus {\n  color: inherit;\n  background-color: transparent;\n  opacity: 0.9;\n}\n.navbar .navbar-nav .profile-photo {\n  padding: 0 5px 0;\n}\n.navbar .navbar-nav .profile-photo .profile-photo-small {\n  height: 40px;\n  width: 40px;\n}\n.navbar .navbar-toggle {\n  border: 0;\n}\n.navbar .navbar-toggle:hover, .navbar .navbar-toggle:focus {\n  background-color: transparent;\n}\n.navbar .navbar-toggle .icon-bar {\n  background-color: inherit;\n  border: 1px solid;\n}\n.navbar .navbar-default .navbar-toggle,\n.navbar .navbar-inverse .navbar-toggle {\n  border-color: transparent;\n}\n.navbar .navbar-collapse,\n.navbar .navbar-form {\n  border-top: none;\n  box-shadow: none;\n}\n.navbar .navbar-nav > .open > a, .navbar .navbar-nav > .open > a:hover, .navbar .navbar-nav > .open > a:focus {\n  background-color: transparent;\n  color: inherit;\n}\n@media (max-width: 767px) {\n  .navbar .navbar-nav .navbar-text {\n    color: inherit;\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border: 0;\n    color: inherit;\n  }\n  .navbar .navbar-nav .open .dropdown-menu .divider {\n    border-bottom: 1px solid;\n    opacity: 0.08;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > li > a {\n    color: inherit;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > li > a:hover, .navbar .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: inherit;\n    background-color: transparent;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > .active > a, .navbar .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: inherit;\n    background-color: transparent;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > .disabled > a, .navbar .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: inherit;\n    background-color: transparent;\n  }\n}\n.navbar.navbar-default .logo-container .brand {\n  color: #555555;\n}\n.navbar .navbar-link {\n  color: inherit;\n}\n.navbar .navbar-link:hover {\n  color: inherit;\n}\n.navbar .btn {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.navbar .btn-link {\n  color: inherit;\n}\n.navbar .btn-link:hover, .navbar .btn-link:focus {\n  color: inherit;\n}\n.navbar .btn-link[disabled]:hover, .navbar .btn-link[disabled]:focus, fieldset[disabled] .navbar .btn-link:hover, fieldset[disabled] .navbar .btn-link:focus {\n  color: inherit;\n}\n.navbar .navbar-form {\n  margin: 4px 0 0;\n}\n.navbar .navbar-form .form-group {\n  margin: 0;\n  padding: 0;\n}\n.navbar .navbar-form .form-group .material-input:before, .navbar .navbar-form .form-group.is-focused .material-input:after {\n  background-color: inherit;\n}\n.navbar .navbar-form .form-group .form-control,\n.navbar .navbar-form .form-control {\n  border-color: inherit;\n  color: inherit;\n  padding: 0;\n  margin: 0;\n  height: 28px;\n  font-size: 14px;\n  line-height: 1.42857;\n}\n.navbar, .navbar.navbar-default {\n  background-color: #FFFFFF;\n  color: #555555;\n}\n.navbar .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar .navbar-form input.form-control::-moz-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-default .navbar-form input.form-control::-moz-placeholder {\n  color: #555555;\n}\n.navbar .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar .navbar-form input.form-control:-ms-input-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-default .navbar-form input.form-control:-ms-input-placeholder {\n  color: #555555;\n}\n.navbar .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar .navbar-form input.form-control::-webkit-input-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-default .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #555555;\n}\n.navbar .dropdown-menu, .navbar.navbar-default .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar .dropdown-menu li > a:hover, .navbar .dropdown-menu li > a:focus, .navbar.navbar-default .dropdown-menu li > a:hover, .navbar.navbar-default .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #FFFFFF;\n  box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2);\n}\n.navbar .dropdown-menu .active > a, .navbar.navbar-default .dropdown-menu .active > a {\n  background-color: #FFFFFF;\n  color: #555555;\n  box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2);\n}\n.navbar .dropdown-menu .active > a:hover, .navbar .dropdown-menu .active > a:focus, .navbar.navbar-default .dropdown-menu .active > a:hover, .navbar.navbar-default .dropdown-menu .active > a:focus {\n  color: #555555;\n}\n.navbar.navbar-inverse {\n  background-color: #212121;\n  color: #fff;\n}\n.navbar.navbar-inverse .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-inverse .navbar-form input.form-control::-moz-placeholder {\n  color: #fff;\n}\n.navbar.navbar-inverse .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-inverse .navbar-form input.form-control:-ms-input-placeholder {\n  color: #fff;\n}\n.navbar.navbar-inverse .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-inverse .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #fff;\n}\n.navbar.navbar-inverse .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-inverse .dropdown-menu li > a:hover, .navbar.navbar-inverse .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #212121;\n  box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2);\n}\n.navbar.navbar-inverse .dropdown-menu .active > a {\n  background-color: #212121;\n  color: #fff;\n  box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2);\n}\n.navbar.navbar-inverse .dropdown-menu .active > a:hover, .navbar.navbar-inverse .dropdown-menu .active > a:focus {\n  color: #fff;\n}\n.navbar.navbar-primary {\n  background-color: #9c27b0;\n  color: #ffffff;\n}\n.navbar.navbar-primary .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-primary .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-primary .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-primary .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-primary .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-primary .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-primary .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-primary .dropdown-menu li > a:hover, .navbar.navbar-primary .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #9c27b0;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.navbar.navbar-primary .dropdown-menu .active > a {\n  background-color: #9c27b0;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.navbar.navbar-primary .dropdown-menu .active > a:hover, .navbar.navbar-primary .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-success {\n  background-color: #4caf50;\n  color: #ffffff;\n}\n.navbar.navbar-success .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-success .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-success .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-success .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-success .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-success .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-success .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-success .dropdown-menu li > a:hover, .navbar.navbar-success .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #4caf50;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.navbar.navbar-success .dropdown-menu .active > a {\n  background-color: #4caf50;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.navbar.navbar-success .dropdown-menu .active > a:hover, .navbar.navbar-success .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-info {\n  background-color: #00bcd4;\n  color: #ffffff;\n}\n.navbar.navbar-info .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-info .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-info .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-info .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-info .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-info .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-info .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-info .dropdown-menu li > a:hover, .navbar.navbar-info .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #00bcd4;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.navbar.navbar-info .dropdown-menu .active > a {\n  background-color: #00bcd4;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.navbar.navbar-info .dropdown-menu .active > a:hover, .navbar.navbar-info .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-warning {\n  background-color: #ff9800;\n  color: #ffffff;\n}\n.navbar.navbar-warning .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-warning .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-warning .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-warning .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-warning .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-warning .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-warning .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-warning .dropdown-menu li > a:hover, .navbar.navbar-warning .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #ff9800;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.navbar.navbar-warning .dropdown-menu .active > a {\n  background-color: #ff9800;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.navbar.navbar-warning .dropdown-menu .active > a:hover, .navbar.navbar-warning .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-danger {\n  background-color: #f44336;\n  color: #ffffff;\n}\n.navbar.navbar-danger .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-danger .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-danger .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-danger .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-danger .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-danger .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-danger .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-danger .dropdown-menu li > a:hover, .navbar.navbar-danger .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #f44336;\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.navbar.navbar-danger .dropdown-menu .active > a {\n  background-color: #f44336;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.navbar.navbar-danger .dropdown-menu .active > a:hover, .navbar.navbar-danger .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-rose {\n  background-color: #e91e63;\n  color: #ffffff;\n}\n.navbar.navbar-rose .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-rose .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-rose .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-rose .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-rose .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-rose .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-rose .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-rose .dropdown-menu li > a:hover, .navbar.navbar-rose .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #e91e63;\n  box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);\n}\n.navbar.navbar-rose .dropdown-menu .active > a {\n  background-color: #e91e63;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);\n}\n.navbar.navbar-rose .dropdown-menu .active > a:hover, .navbar.navbar-rose .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar-inverse {\n  background-color: #3f51b5;\n}\n.navbar.navbar-transparent {\n  background-color: transparent;\n  box-shadow: none;\n  border-bottom: 0;\n}\n.navbar.navbar-transparent .logo-container .brand {\n  color: #FFFFFF;\n}\n.navbar-fixed-top {\n  border-radius: 0;\n}\n@media (max-width: 1199px) {\n  .navbar {\n    /*\n        .navbar-form {\n          margin-top: 10px;\n        }\n    */\n  }\n  .navbar .navbar-brand {\n    height: 50px;\n    padding: 10px 15px;\n  }\n  .navbar .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar .alert {\n  border-radius: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 85px;\n  width: 100%;\n  z-index: 3;\n  transition: all 0.3s;\n}\n\n.nav-align-center {\n  text-align: center;\n}\n.nav-align-center .nav-pills {\n  display: inline-block;\n}\n\n.navbar-absolute {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  z-index: 1029;\n}\n\n.popover, .tooltip-inner {\n  color: #555555;\n  line-height: 1.5em;\n  background: #FFFFFF;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n\n.popover {\n  padding: 0;\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.popover.left > .arrow, .popover.right > .arrow, .popover.top > .arrow, .popover.bottom > .arrow {\n  border: none;\n}\n\n.popover-title {\n  background-color: #FFFFFF;\n  border: none;\n  padding: 15px 15px 5px;\n  font-size: 1.3em;\n}\n\n.popover-content {\n  padding: 10px 15px 15px;\n  line-height: 1.4;\n}\n\n.tooltip.in {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0px, 0);\n  transform: translate3d(0, 0px, 0);\n}\n\n.tooltip {\n  opacity: 0;\n  transition: opacity, -webkit-transform .2s ease;\n  transition: opacity, transform .2s ease;\n  transition: opacity, transform .2s ease, -webkit-transform .2s ease;\n  -webkit-transform: translate3d(0, 5px, 0);\n  transform: translate3d(0, 5px, 0);\n}\n.tooltip.left .tooltip-arrow {\n  border-left-color: #FFFFFF;\n}\n.tooltip.right .tooltip-arrow {\n  border-right-color: #FFFFFF;\n}\n.tooltip.top .tooltip-arrow {\n  border-top-color: #FFFFFF;\n}\n.tooltip.bottom .tooltip-arrow {\n  border-bottom-color: #FFFFFF;\n}\n\n.tooltip-inner {\n  padding: 10px 15px;\n  min-width: 130px;\n}\n\nfooter {\n  padding: 15px 0;\n}\nfooter ul {\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n}\nfooter ul li {\n  display: inline-block;\n}\nfooter ul li a {\n  color: inherit;\n  padding: 15px;\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-radius: 3px;\n  text-decoration: none;\n  position: relative;\n  display: block;\n}\nfooter ul li a:hover {\n  text-decoration: none;\n}\nfooter .copyright {\n  padding: 15px 0;\n  margin: 0;\n}\nfooter .copyright .material-icons {\n  font-size: 18px;\n  position: relative;\n  top: 3px;\n}\nfooter .btn {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.dropdown-menu {\n  border: 0;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.dropdown-menu .divider {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.dropdown-menu li > a {\n  font-size: 13px;\n  padding: 10px 20px;\n  margin: 0 5px;\n  border-radius: 2px;\n  transition: all 150ms linear;\n}\n.dropdown-menu li > a:hover, .dropdown-menu li > a:focus {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n.dropdown-menu.dropdown-with-icons li > a {\n  padding: 12px 20px 12px 12px;\n}\n.dropdown-menu.dropdown-with-icons li > a .material-icons {\n  vertical-align: middle;\n  font-size: 24px;\n  position: relative;\n  margin-top: -4px;\n  top: 1px;\n  margin-right: 12px;\n  opacity: .5;\n}\n.dropdown-menu li {\n  position: relative;\n}\n.dropdown-menu li a:hover,\n.dropdown-menu li a:focus,\n.dropdown-menu li a:active {\n  background-color: #9c27b0;\n  color: #FFFFFF;\n}\n.dropdown-menu .divider {\n  margin: 5px 0;\n}\n.navbar .dropdown-menu li a:hover,\n.navbar .dropdown-menu li a:focus,\n.navbar .dropdown-menu li a:active, .navbar.navbar-default .dropdown-menu li a:hover,\n.navbar.navbar-default .dropdown-menu li a:focus,\n.navbar.navbar-default .dropdown-menu li a:active {\n  background-color: #9c27b0;\n  color: #FFFFFF;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n\n.card {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin: 25px 0px 0px 10px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  color: rgba(0,0,0, 0.87);\n  background: #fff;\n}\n.card .card-height-indicator {\n  margin-top: 100%;\n}\n.card .title {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.card .card-image {\n  height: 60%;\n  position: relative;\n  overflow: hidden;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: -30px;\n  border-radius: 6px;\n}\n.card .card-image img {\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n  pointer-events: none;\n}\n.card .card-image .card-title {\n  position: absolute;\n  bottom: 15px;\n  left: 15px;\n  color: #fff;\n  font-size: 1.3em;\n  text-shadow: 0 2px 5px rgba(33, 33, 33, 0.5);\n}\n.card .category:not([class*=\"text-\"]) {\n  color: #999999;\n}\n.card .card-content {\n  padding: 15px 20px;\n}\n.card .card-content .category {\n  margin-bottom: 0;\n}\n.card .card-header {\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  /*margin: -20px 15px 0;*/\n  margin: 0px 0px 0;\n  border-radius: 0px;\n  padding: 0px;\n  background-color: #999999;\n}\n.card .card-header .title {\n  color: #FFFFFF;\n}\n.card .card-header .category {\n  margin-bottom: 0;\n  color: rgba(255, 255, 255, 0.62);\n}\n.card .card-header.card-chart {\n  padding: 0;\n  min-height: 160px;\n}\n.card .card-header.card-chart + .content h4 {\n  margin-top: 0;\n}\n.card .card-header .ct-label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.card .card-header .ct-grid {\n  stroke: rgba(255, 255, 255, 0.2);\n}\n.card .card-header .ct-series-a .ct-point,\n.card .card-header .ct-series-a .ct-line,\n.card .card-header .ct-series-a .ct-bar,\n.card .card-header .ct-series-a .ct-slice-donut {\n  stroke: rgba(255, 255, 255, 0.8);\n}\n.card .card-header .ct-series-a .ct-slice-pie,\n.card .card-header .ct-series-a .ct-area {\n  fill: rgba(255, 255, 255, 0.4);\n}\n.card .chart-title {\n  position: absolute;\n  top: 25px;\n  width: 100%;\n  text-align: center;\n}\n.card .chart-title h3 {\n  margin: 0;\n  color: #FFFFFF;\n}\n.card .chart-title h6 {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.4);\n}\n.card .card-footer {\n  margin: 0 20px 10px;\n  padding-top: 10px;\n  border-top: 1px solid #eeeeee;\n}\n.card .card-footer .content {\n  display: block;\n}\n.card .card-footer div {\n  display: inline-block;\n}\n.card .card-footer .author {\n  color: #999999;\n}\n.card .card-footer .stats {\n  line-height: 22px;\n  color: #999999;\n  font-size: 12px;\n}\n.card .card-footer .stats .material-icons {\n  position: relative;\n  top: 4px;\n  font-size: 16px;\n}\n.card .card-footer h6 {\n  color: #999999;\n}\n.card img {\n  width: 100%;\n  height: auto;\n}\n.card .category .material-icons {\n  position: relative;\n  top: 6px;\n  line-height: 0;\n}\n.card .category-social .fa {\n  font-size: 24px;\n  position: relative;\n  margin-top: -4px;\n  top: 2px;\n  margin-right: 5px;\n}\n.card .author .avatar {\n  width: 30px;\n  height: 30px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.card .author a {\n  color: #3C4858;\n  text-decoration: none;\n}\n.card .author a .ripple-container {\n  display: none;\n}\n.card .table {\n  margin-bottom: 0;\n}\n.card .table tr:first-child td {\n  border-top: none;\n}\n.card [data-background-color=\"purple\"] {\n  background: linear-gradient(60deg, #ab47bc, #8e24aa);\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.card [data-background-color=\"blue\"] {\n  background: linear-gradient(60deg, #26c6da, #00acc1);\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.card [data-background-color=\"green\"] {\n  background: linear-gradient(60deg, #66bb6a, #43a047);\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.card [data-background-color=\"orange\"] {\n  background: linear-gradient(60deg, #ffa726, #fb8c00);\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.card [data-background-color=\"red\"] {\n  background: linear-gradient(60deg, #ef5350, #e53935);\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.card [data-background-color] {\n  color: #FFFFFF;\n}\n.card [data-background-color] a {\n  color: #FFFFFF;\n}\n\n.card-stats .title {\n  margin: 0;\n}\n.card-stats .card-header {\n  float: left;\n  text-align: center;\n}\n.card-stats .card-header i {\n  font-size: 36px;\n  line-height: 56px;\n  width: 56px;\n  height: 56px;\n}\n.card-stats .card-content {\n  text-align: right;\n  padding-top: 10px;\n}\n\n.card-nav-tabs .header-raised {\n  margin-top: -30px;\n}\n.card-nav-tabs .nav-tabs {\n  background: transparent;\n  padding: 0;\n}\n.card-nav-tabs .nav-tabs-title {\n  float: left;\n  padding: 10px 10px 10px 0;\n  line-height: 24px;\n}\n\n.card-plain {\n  background: transparent;\n  box-shadow: none;\n}\n.card-plain .card-header {\n  margin-left: 0;\n  margin-right: 0;\n}\n.card-plain .content {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.card-plain .card-image {\n  margin: 0;\n  border-radius: 3px;\n}\n.card-plain .card-image img {\n  border-radius: 3px;\n}\n\n.iframe-container {\n  margin: 0 -20px 0;\n}\n.iframe-container iframe {\n  width: 100%;\n  height: 500px;\n  border: 0;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.card-profile,\n.card-testimonial {\n  margin-top: 30px;\n  text-align: center;\n}\n.card-profile .btn-just-icon.btn-raised,\n.card-testimonial .btn-just-icon.btn-raised {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.card-profile .card-avatar,\n.card-testimonial .card-avatar {\n  max-width: 130px;\n  max-height: 130px;\n  margin: -50px auto 0;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.card-profile .card-avatar + .content,\n.card-testimonial .card-avatar + .content {\n  margin-top: 15px;\n}\n.card-profile.card-plain .card-avatar,\n.card-testimonial.card-plain .card-avatar {\n  margin-top: 0;\n}\n\n.nav-tabs {\n  background: #9c27b0;\n  border: 0;\n  border-radius: 3px;\n  padding: 0 15px;\n}\n.nav-tabs > li > a {\n  color: #FFFFFF;\n  border: 0;\n  margin: 0;\n  border-radius: 3px;\n  line-height: 24px;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.nav-tabs > li > a:hover {\n  background-color: transparent;\n  border: 0;\n}\n.nav-tabs > li > a, .nav-tabs > li > a:hover, .nav-tabs > li > a:focus {\n  background-color: transparent;\n  border: 0 !important;\n  color: #FFFFFF !important;\n  font-weight: 500;\n}\n.nav-tabs > li.disabled > a, .nav-tabs > li.disabled > a:hover {\n  color: rgba(255, 255, 255, 0.5);\n}\n.nav-tabs > li .material-icons {\n  margin: -1px 5px 0 0;\n}\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n  background-color: rgba(255, 255, 255, 0.2);\n  transition: background-color .1s .2s;\n}\n\n.ct-label {\n  fill: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 1.3rem;\n  line-height: 1;\n}\n\n.ct-chart-line .ct-label,\n.ct-chart-bar .ct-label {\n  display: block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-label.ct-vertical.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end;\n}\n\n.ct-label.ct-vertical.ct-end {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start;\n}\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: end;\n}\n\n.ct-grid {\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 1px;\n  stroke-dasharray: 2px;\n}\n\n.ct-point {\n  stroke-width: 8px;\n  stroke-linecap: round;\n}\n\n.ct-line {\n  fill: none;\n  stroke-width: 3px;\n}\n\n.ct-area {\n  stroke: none;\n  fill-opacity: 0.8;\n}\n\n.ct-bar {\n  fill: none;\n  stroke-width: 10px;\n}\n\n.ct-slice-donut {\n  fill: none;\n  stroke-width: 60px;\n}\n\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: #00bcd4;\n}\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #00bcd4;\n}\n\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: #f44336;\n}\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #f44336;\n}\n\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: #ff9800;\n}\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #ff9800;\n}\n\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: #9c27b0;\n}\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #9c27b0;\n}\n\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: #4caf50;\n}\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #4caf50;\n}\n\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: #9C9B99;\n}\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-area {\n  fill: #9C9B99;\n}\n\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: #999999;\n}\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-area {\n  fill: #999999;\n}\n\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: #dd4b39;\n}\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-area {\n  fill: #dd4b39;\n}\n\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: #35465c;\n}\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-area {\n  fill: #35465c;\n}\n\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: #e52d27;\n}\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-area {\n  fill: #e52d27;\n}\n\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: #55acee;\n}\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-area {\n  fill: #55acee;\n}\n\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: #cc2127;\n}\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-area {\n  fill: #cc2127;\n}\n\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: #1769ff;\n}\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-area {\n  fill: #1769ff;\n}\n\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: #6188e2;\n}\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-area {\n  fill: #6188e2;\n}\n\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: #a748ca;\n}\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-area {\n  fill: #a748ca;\n}\n\n.ct-square {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-square:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 100%;\n}\n.ct-square:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-square > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-second {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-second:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 93.75%;\n}\n.ct-minor-second:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-second > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-second {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-second:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 88.88889%;\n}\n.ct-major-second:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-second > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-third {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-third:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 83.33333%;\n}\n.ct-minor-third:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-third > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-third {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-third:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 80%;\n}\n.ct-major-third:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-third > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-perfect-fourth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-perfect-fourth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 75%;\n}\n.ct-perfect-fourth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-perfect-fourth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-perfect-fifth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-perfect-fifth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 66.66667%;\n}\n.ct-perfect-fifth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-perfect-fifth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-sixth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-sixth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 62.5%;\n}\n.ct-minor-sixth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-sixth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-golden-section {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-golden-section:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 61.8047%;\n}\n.ct-golden-section:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-golden-section > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-sixth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-sixth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 60%;\n}\n.ct-major-sixth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-sixth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-seventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-seventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 56.25%;\n}\n.ct-minor-seventh:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-seventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-seventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-seventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 53.33333%;\n}\n.ct-major-seventh:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-seventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-octave {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-octave:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 50%;\n}\n.ct-octave:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-octave > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-tenth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-tenth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 40%;\n}\n.ct-major-tenth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-tenth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-eleventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-eleventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 37.5%;\n}\n.ct-major-eleventh:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-eleventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-twelfth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-twelfth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 33.33333%;\n}\n.ct-major-twelfth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-twelfth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-double-octave {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-double-octave:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 25%;\n}\n.ct-double-octave:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-double-octave > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-blue {\n  stroke: #9c27b0 !important;\n}\n\n.ct-azure {\n  stroke: #00bcd4 !important;\n}\n\n.ct-green {\n  stroke: #4caf50 !important;\n}\n\n.ct-orange {\n  stroke: #ff9800 !important;\n}\n\n.ct-red {\n  stroke: #f44336 !important;\n}\n\n.ct-white {\n  stroke: #FFFFFF !important;\n}\n\n.ct-rose {\n  stroke: #e91e63 !important;\n}\n\n@media (min-width: 992px) {\n  .navbar-form {\n    margin-top: 21px;\n    margin-bottom: 21px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .navbar-nav > li > .dropdown-menu,\n  .dropdown .dropdown-menu,\n  .dropdown-menu.bootstrap-datetimepicker-widget {\n    transition: all 150ms linear;\n    margin-top: -20px;\n    visibility: hidden;\n    display: block;\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n\n  .navbar-nav > li.open > .dropdown-menu,\n  .dropdown.open .dropdown-menu,\n  .dropdown-menu.bootstrap-datetimepicker-widget.open {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    visibility: visible;\n    margin-top: 0px;\n  }\n\n  /*.navbar-nav > li > .dropdown-menu:before{\n      border-bottom: 11px solid rgba(0, 0, 0, 0.2);\n      border-left: 11px solid rgba(0, 0, 0, 0);\n      border-right: 11px solid rgba(0, 0, 0, 0);\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      left: 12px;\n      top: -11px;\n  }\n  .navbar-nav > li > .dropdown-menu:after {\n      border-bottom: 11px solid #FFFFFF;\n      border-left: 11px solid rgba(0, 0, 0, 0);\n      border-right: 11px solid rgba(0, 0, 0, 0);\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      left: 12px;\n      top: -10px;\n  }*/\n  .navbar-nav.navbar-right > li > .dropdown-menu:before {\n    left: auto;\n    right: 12px;\n  }\n\n  .navbar-nav.navbar-right > li > .dropdown-menu:after {\n    left: auto;\n    right: 12px;\n  }\n\n  .footer:not(.footer-big) nav > ul li:first-child {\n    margin-left: 0;\n  }\n\n  body > .navbar-collapse.collapse {\n    display: none !important;\n  }\n\n  .card form [class*=\"col-\"] {\n    padding: 6px;\n  }\n  .card form [class*=\"col-\"]:first-child {\n    padding-left: 15px;\n  }\n  .card form [class*=\"col-\"]:last-child {\n    padding-right: 15px;\n  }\n\n  .sidebar .navbar-form {\n    display: none !important;\n  }\n  .sidebar .nav-mobile-menu {\n    display: none;\n  }\n}\n/*          Changes for small display      */\n@media (max-width: 991px) {\n  .sidebar {\n    display: none;\n    box-shadow: none;\n  }\n  .sidebar .sidebar-wrapper {\n    padding-bottom: 60px;\n  }\n  .sidebar .nav-mobile-menu {\n    margin-top: 0;\n  }\n  .sidebar .nav-mobile-menu .notification {\n    float: left;\n    line-height: 30px;\n    margin-right: 8px;\n  }\n  .sidebar .nav-mobile-menu .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n\n  .main-panel {\n    width: 100%;\n  }\n\n  .navbar-transparent {\n    padding-top: 15px;\n    background-color: rgba(0, 0, 0, 0.45);\n  }\n\n  body {\n    position: relative;\n  }\n\n  .main-panel {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    left: 0;\n  }\n\n  .navbar .container {\n    left: 0;\n    width: 100%;\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    position: relative;\n  }\n\n  .navbar .navbar-collapse.collapse,\n  .navbar .navbar-collapse.collapse.in,\n  .navbar .navbar-collapse.collapsing {\n    display: none !important;\n  }\n\n  .navbar-nav > li {\n    float: none;\n    position: relative;\n    display: block;\n  }\n\n  .sidebar,\n  .off-canvas-sidebar {\n    position: fixed;\n    display: block;\n    top: 0;\n    height: 100vh;\n    width: 260px;\n    right: 0;\n    left: auto;\n    z-index: 1032;\n    visibility: visible;\n    background-color: #9A9A9A;\n    overflow-y: visible;\n    border-top: none;\n    text-align: left;\n    padding-right: 0px;\n    padding-left: 0;\n    -webkit-transform: translate3d(260px, 0, 0);\n    transform: translate3d(260px, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  }\n  .sidebar > ul,\n  .off-canvas-sidebar > ul {\n    position: relative;\n    z-index: 4;\n    overflow-y: scroll;\n    height: calc(100vh - 61px);\n    width: 100%;\n  }\n  .sidebar::before,\n  .off-canvas-sidebar::before {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    background-color: #282828;\n    display: block;\n    content: \"\";\n    z-index: 1;\n  }\n  .sidebar .logo,\n  .off-canvas-sidebar .logo {\n    position: relative;\n    z-index: 4;\n  }\n  .sidebar .navbar-form,\n  .off-canvas-sidebar .navbar-form {\n    margin: 10px 15px;\n    float: none !important;\n  }\n  .sidebar .navbar-form .btn,\n  .off-canvas-sidebar .navbar-form .btn {\n    position: absolute;\n    top: 25px;\n    right: 15px;\n  }\n  .sidebar .table-responsive,\n  .off-canvas-sidebar .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .nav-open .navbar-collapse {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0);\n  }\n\n  .nav-open .navbar .container {\n    left: -250px;\n  }\n\n  .nav-open .main-panel {\n    left: 0;\n    -webkit-transform: translate3d(-260px, 0, 0);\n    transform: translate3d(-260px, 0, 0);\n  }\n\n  .nav-open .sidebar {\n    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  }\n\n  .nav-open .off-canvas-sidebar,\n  .nav-open .sidebar {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  .close-layer {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: auto;\n    content: \"\";\n    z-index: 9999;\n    overflow-x: hidden;\n    transition: all 370ms ease-in;\n  }\n  .close-layer.visible {\n    opacity: 1;\n  }\n\n  .navbar-toggle .icon-bar {\n    display: block;\n    position: relative;\n    background: #fff;\n    width: 24px;\n    height: 2px;\n    border-radius: 1px;\n    margin: 0 auto;\n  }\n\n  .navbar-header .navbar-toggle {\n    margin: 10px 15px 10px 0;\n    width: 40px;\n    height: 40px;\n  }\n\n  .bar1,\n  .bar2,\n  .bar3 {\n    outline: 1px solid transparent;\n  }\n\n  @-webkit-keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  .dropdown-menu .divider {\n    background-color: rgba(229, 229, 229, 0.15);\n  }\n\n  .navbar-nav {\n    margin: 1px 0;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    padding: 15px 15px 5px 50px;\n  }\n  .navbar-nav .open .dropdown-menu > li:first-child > a {\n    padding: 5px 15px 5px 50px;\n  }\n  .navbar-nav .open .dropdown-menu > li:last-child > a {\n    padding: 15px 15px 25px 50px;\n  }\n\n  [class*=\"navbar-\"] .navbar-nav > li > a,\n  [class*=\"navbar-\"] .navbar-nav > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .active > a,\n  [class*=\"navbar-\"] .navbar-nav .active > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .active > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .navbar-nav .open .dropdown-menu > li > a:active {\n    color: white;\n  }\n  [class*=\"navbar-\"] .navbar-nav > li > a,\n  [class*=\"navbar-\"] .navbar-nav > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:focus {\n    opacity: .7;\n    background: transparent;\n  }\n  [class*=\"navbar-\"] .navbar-nav.navbar-nav .open .dropdown-menu > li > a:active {\n    opacity: 1;\n  }\n  [class*=\"navbar-\"] .navbar-nav .dropdown > a:hover .caret {\n    border-bottom-color: #777;\n    border-top-color: #777;\n  }\n  [class*=\"navbar-\"] .navbar-nav .dropdown > a:active .caret {\n    border-bottom-color: white;\n    border-top-color: white;\n  }\n\n  .dropdown-menu {\n    display: none;\n  }\n\n  .navbar-fixed-top {\n    -webkit-backface-visibility: hidden;\n  }\n\n  #bodyClick {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: auto;\n    right: 250px;\n    content: \"\";\n    z-index: 9999;\n    overflow-x: hidden;\n  }\n\n  .social-line .btn {\n    margin: 0 0 10px 0;\n  }\n\n  .subscribe-line .form-control {\n    margin: 0 0 10px 0;\n  }\n\n  .social-line.pull-right {\n    float: none;\n  }\n\n  .footer:not(.footer-big) nav > ul li {\n    float: none;\n  }\n\n  .social-area.pull-right {\n    float: none !important;\n  }\n\n  .form-control + .form-control-feedback {\n    margin-top: -8px;\n  }\n\n  .navbar-toggle:hover, .navbar-toggle:focus {\n    background-color: transparent !important;\n  }\n\n  .btn.dropdown-toggle {\n    margin-bottom: 0;\n  }\n\n  .media-post .author {\n    width: 20%;\n    float: none !important;\n    display: block;\n    margin: 0 auto 10px;\n  }\n\n  .media-post .media-body {\n    width: 100%;\n  }\n\n  .navbar-collapse.collapse {\n    height: 100% !important;\n  }\n\n  .navbar-collapse.collapse.in {\n    display: block;\n  }\n\n  .navbar-header .collapse, .navbar-toggle {\n    display: block !important;\n  }\n\n  .navbar-header {\n    float: none;\n  }\n\n  .navbar-collapse .nav p {\n    font-size: 14px;\n    margin: 0;\n  }\n  .navbar-collapse [class^=\"pe-7s-\"] {\n    float: left;\n    font-size: 20px;\n    margin-right: 10px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .table-full-width {\n    margin-left: -20px;\n    margin-right: -20px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_medical_center_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attorney_list_attorney_list_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__medicalCenter_medical_center_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__therapist_list_therapist_list_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__results_results_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__result_result_detail_result_detail_component__ = __webpack_require__(370);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_medical_center_component__["a" /* DashboardMedicalCenterComponent */],
        // canActivate: [AuthGuard],
        children: [
            {
                path: '',
                // canActivateChild: [AuthGuard],
                children: [
                    { path: 'attorney-list', component: __WEBPACK_IMPORTED_MODULE_2__attorney_list_attorney_list_component__["a" /* AttorneyListComponent */] },
                    { path: 'therapist-list', component: __WEBPACK_IMPORTED_MODULE_4__therapist_list_therapist_list_component__["a" /* TherapistListDashboardComponent */] },
                    { path: 'result-list', component: __WEBPACK_IMPORTED_MODULE_5__results_results_component__["a" /* ResultsComponent */] },
                    { path: 'result/:id', component: __WEBPACK_IMPORTED_MODULE_6__result_result_detail_result_detail_component__["a" /* ResultDetailComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__medicalCenter_medical_center_component__["a" /* MedicalCenterComponent_out */] }
                ]
            }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=dashboard-medical-center.routing.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalCenterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MedicalCenterComponent = (function () {
    function MedicalCenterComponent() {
    }
    MedicalCenterComponent.prototype.ngOnInit = function () {
    };
    return MedicalCenterComponent;
}());
MedicalCenterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-medical-center',
        template: __webpack_require__(450),
        styles: [__webpack_require__(421), __webpack_require__(397)]
    })
], MedicalCenterComponent);

//# sourceMappingURL=medical-center.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__patient_read_patient_read_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patient_update_patient_update_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__patient_delete_patient_delete_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__patient_add_patient_add_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var URL_WEB_SERVICE_PATIENTS = 'http://localhost:8080/api/pacients/';
var PatientListComponent = (function () {
    function PatientListComponent(modalService, http) {
        this.modalService = modalService;
        this.http = http;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.listView = true;
        this.photoView = false;
        this.patients = [];
        this.isActiveUpdateModal = true;
    }
    PatientListComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].production) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            this.token = currentUser && currentUser.token;
            this.getTherapist();
        }
        else {
            this.token = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].token;
            var json = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].patientList;
            // [{"_id":"5851f5c773dc11072a0a1a90","is_active":false,"password":"admin","username":"paciente","birth":"2016-11-20T04:19:13.000Z","id_Document_num":12345678,"id_Document_type":"DNI","gender":"4","names":"Hortencia","__v":0,"created_at":"2016-12-15T01:45:43.589Z","attorney":{"names":"Hortencia","email":"manuel@gmail.com","phone":"234 54 13","cellphone":"999 999 999"},"medic_diagostic":[{"name":"Luis Manuel","level":"III","percentage":"56","_id":"5851f5c773dc11072a0a1a91","created_at":"2016-12-15T01:45:43.590Z"}],"address":{"street":"Calle Alameda Santos 344 Dpto 304","city":"Lima","state":"Lima","zip":457645,"country":"Peru"}},{"_id":"591e7932204d862e178a4461","is_active":false,"birth":"2012-11-20T04:19:13.000Z","id_Document_num":12345678,"id_Document_type":"DNI","gender":"3","names":"Camila","__v":0,"created_at":"2017-05-19T04:48:50.357Z","attorney":{"names":"Camila","email":"camilal@gmail.com","phone":"234 54 13","cellphone":"999 999 999"},"medic_diagostic":[{"name":"Luis Manuel","level":"III","percentage":"56","_id":"591e7932204d862e178a4462","created_at":"2017-05-19T04:48:50.366Z"}],"address":{"street":"Calle Alameda Santos 344 Dpto 304","city":"Lima","state":"Lima","zip":457645,"country":"Peru"}},{"_id":"598a4bc134781634db1d5509","is_active":false,"birth":"2012-11-20T04:19:13.000Z","id_Document_num":12345678,"id_Document_type":"DNI","gender":"3","names":"Camila","__v":0,"created_at":"2017-08-08T23:39:45.293Z","attorney":{"names":"Camila","email":"camilal@gmail.com","phone":"234 54 13","cellphone":"999 999 999"},"medic_diagostic":[{"name":"Luis Manuel","level":"III","percentage":"56","_id":"598a4bc134781634db1d550a","created_at":"2017-08-08T23:39:45.298Z"}],"address":{"street":"Calle Alameda Santos 344 Dpto 304","city":"Lima","state":"Lima","zip":457645,"country":"Peru"}},{"_id":"598a4f7c3390ba34fb8018ed","is_active":true,"password":"patient","username":"aa","birth":"2017-08-08T23:55:40.945Z","id_Document_num":2,"id_Document_type":"DNI","gender":"-","lastname":"a","names":"A","__v":0,"created_at":"2017-08-08T23:55:40.956Z","attorney":{"names":"A","lastname":"a"},"medic_diagostic":[{"_id":"598a4f7c3390ba34fb8018ee","created_at":"2017-08-08T23:55:40.961Z"}]},{"_id":"598a507c3390ba34fb8018ef","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-08T23:59:56.823Z","attorney":{"names":"MANOLITO","lastname":"Martel"},"medic_diagostic":[{"_id":"598a507c3390ba34fb8018f0","created_at":"2017-08-08T23:59:56.827Z"}]},{"_id":"598a52773390ba34fb8018f1","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T00:08:23.990Z","attorney":{"names":"MANOLITO","lastname":"Martel"},"medic_diagostic":[{"_id":"598a52773390ba34fb8018f2","created_at":"2017-08-09T00:08:23.990Z"}]},{"_id":"598a54df27209e350ea0b785","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T00:18:39.133Z","attorney":{"names":"MANOLITO","lastname":"Martel"},"medic_diagostic":[{"_id":"598a54df27209e350ea0b786","created_at":"2017-08-09T00:18:39.139Z"}]},{"_id":"598a5a4a44192c3536269a2c","names":"MANOLITO","lastname":"Martel","gender":"-","id_Document_type":"DNI","id_Document_num":6533987,"birth":"2017-08-08T23:59:56.809Z","username":"Luis ManuelMartel Lindo","password":"patient","updated_at":"2017-08-08T23:59:56.809Z","is_active":true,"__v":0,"created_at":"2017-08-09T00:41:46.096Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"name":"PCI","level":"4","percentage":"40","_id":"598a5a4a44192c3536269a2d","created_at":"2017-08-09T00:41:46.099Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a5c8830de8a354b90ab6f","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T00:51:20.374Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a5c8830de8a354b90ab70","created_at":"2017-08-09T00:51:20.379Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a5cccb8ddb7354d005ffc","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T00:52:28.804Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a5cccb8ddb7354d005ffd","created_at":"2017-08-09T00:52:28.810Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a5ead409a82355b9c5e2e","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:00:29.030Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a5ead409a82355b9c5e2f","created_at":"2017-08-09T01:00:29.035Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a5ffb0b5a333562d6a49d","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:06:03.901Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a5ffb0b5a333562d6a49e","created_at":"2017-08-09T01:06:03.906Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a603bd14d893565388690","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:07:07.594Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a603bd14d893565388691","created_at":"2017-08-09T01:07:07.599Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a604ad14d893565388692","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:07:22.224Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a604ad14d893565388693","created_at":"2017-08-09T01:07:22.226Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a608f79f62c3569833c0a","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:08:31.908Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a608f79f62c3569833c0b","created_at":"2017-08-09T01:08:31.912Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a60cf1699b0356e8884f0","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:09:35.249Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a60cf1699b0356e8884f1","created_at":"2017-08-09T01:09:35.253Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a617ff67a2235748e3a3f","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:12:31.690Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a617ff67a2235748e3a40","created_at":"2017-08-09T01:12:31.695Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a63498dc4823585badf25","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:20:09.075Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a6380fae4ba3589c2a145","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:21:04.975Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a63ae56e9de358d0564c1","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:21:50.662Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a63ae56e9de358d0564c2","created_at":"2017-08-09T01:21:50.667Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a63b156e9de358d0564c3","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:21:53.514Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a63b156e9de358d0564c4","created_at":"2017-08-09T01:21:53.515Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a646c4b6e333597725bc3","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:25:00.658Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a646c4b6e333597725bc4","created_at":"2017-08-09T01:25:00.666Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a64fa20a338359a73987a","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:27:22.638Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a64fa20a338359a73987b","created_at":"2017-08-09T01:27:22.645Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a6550ac1a42359dd3692d","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:28:48.467Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a6550ac1a42359dd3692e","created_at":"2017-08-09T01:28:48.473Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a655c9632ec35a0488586","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:29:00.550Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"_id":"598a655c9632ec35a0488587","created_at":"2017-08-09T01:29:00.555Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598a659c182cde35a791c36d","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2017-08-08T23:59:56.809Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-09T01:30:04.766Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"name":"PCI","level":"4","percentage":"40","_id":"598a659c182cde35a791c36e","created_at":"2017-08-09T01:30:04.771Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}},{"_id":"598d1dd91b946d3804d56c95","is_active":true,"password":"patient","username":"Luis ManuelMartel Lindo","birth":"2000-12-12T00:00:00.000Z","id_Document_num":6533987,"id_Document_type":"DNI","gender":"-","lastname":"Martel","names":"MANOLITO","__v":0,"created_at":"2017-08-11T03:00:41.108Z","attorney":{"names":"Luis Manuel","lastname":"Martel Lindo","relationship":"Padre","email":"manuel083@gmail.com","phone":"0154353","cellphone":"9432542378"},"medic_diagostic":[{"name":"PCI","level":"4","percentage":"40","_id":"598d1dd91b946d3804d56c96","created_at":"2017-08-11T03:00:41.113Z"}],"address":{"street":"Calle Varela 1200, Breña","city":"Lima","state":"Lima","zip":15004,"country":"Peru"}}];    
            for (var i = 0; i < json.length; i++) {
                this.p = json[i];
                this.patients.push(this.p);
            }
        }
    };
    // EventEmitter -> expose to parent component
    PatientListComponent.prototype.select = function (patient) {
        this.currentPatient = patient;
        this.onSelect.emit(patient);
    };
    // Service methods
    PatientListComponent.prototype.getTherapist = function () {
        var _this = this;
        this._getJSON(URL_WEB_SERVICE_PATIENTS, this.getHeaders())
            .subscribe(function (json) { return _this.patients = json; });
    };
    // to move to a commun folder 
    PatientListComponent.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.token);
        // let params = new URLSearchParams();
        // params.set("patient_id", this.patient_id);
        // params.set("medical_center_id", this.medical_center_id);
        // params.set("therapist_id", this.therapist_id);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        // options.search = params;
        return options;
    };
    // to move to a commun folder 
    PatientListComponent.prototype._getJSON = function (url, option) {
        return this.http.get(url, option)
            .map(function (res) { return res.json(); });
    };
    PatientListComponent.prototype.switchView = function (view) {
        if (view === 'list') {
            this.listView = true;
            this.photoView = false;
        }
        if (view === 'photo') {
            this.listView = false;
            this.photoView = true;
        }
    };
    PatientListComponent.prototype.askActiveUpdateModal = function () {
        if (!this.isActiveUpdateModal)
            this.isActiveUpdateModal = true;
        else
            this.isActiveUpdateModal = false;
    };
    PatientListComponent.prototype.showReadPatientComponent = function () {
        var options = {
            size: 'lg'
        };
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__patient_read_patient_read_component__["a" /* PatientReadComponent */], options);
        modalRef.componentInstance.patient = this.currentPatient;
    };
    PatientListComponent.prototype.showUpdatePatientComponent = function () {
        var options = {
            size: 'lg'
        };
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__patient_update_patient_update_component__["a" /* PatientUpdateComponent */], options);
        modalRef.componentInstance.patient = this.currentPatient;
        // getTherapist(); // update therapoist list
    };
    PatientListComponent.prototype.showDeletePatientComponent = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__patient_delete_patient_delete_component__["a" /* PatientDeleteComponent */]);
        modalRef.componentInstance._id = this.currentPatient._id;
        modalRef.componentInstance.names = this.currentPatient.names;
        modalRef.componentInstance.lastname = this.currentPatient.lastname;
        //getTherapist(); // update therapoist list
    };
    PatientListComponent.prototype.showAddPatientComponent = function () {
        console.log("showAddPatientComponent");
        var options = {
            size: 'lg'
        };
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_7__patient_add_patient_add_component__["a" /* PatientAddComponent */], options);
        // getTherapist(); // update therapoist list
    };
    return PatientListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PatientListComponent.prototype, "medical_center_id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PatientListComponent.prototype, "allFields", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PatientListComponent.prototype, "onSelect", void 0);
PatientListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-patient-list',
        template: __webpack_require__(459),
        styles: [__webpack_require__(429), __webpack_require__(371)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object])
], PatientListComponent);

var _a, _b;
//# sourceMappingURL=patient-list.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(288);
/* unused harmony export Person */
/* unused harmony export SplKne */
/* unused harmony export KinematicsAnalysis */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Person = (function () {
    function Person() {
    }
    return Person;
}());

var SplKne = (function () {
    function SplKne() {
    }
    return SplKne;
}());

var KinematicsAnalysis = (function () {
    function KinematicsAnalysis() {
    }
    return KinematicsAnalysis;
}());

var ResultListComponent = (function () {
    function ResultListComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.people = [];
        this.displayedPeople = [];
        this.kinematicsAnalysiss = [];
        this.multipleKinematicsAnalysiss = [];
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onMultipleSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeLog = [];
        // (mouseover)="changeStyle($event)" (mouseout)="changeStyle($event)"
        this.color = 'red';
        this.over = false;
        this.kinematicOver = null;
    }
    ResultListComponent.prototype.ngOnChanges = function (changes) {
        var log = [];
        for (var propName in changes) {
            var changedProp = changes[propName];
            var to = JSON.stringify(changedProp.currentValue);
            if (changedProp.isFirstChange()) {
                log.push("Initial value of " + propName + " set to " + to);
            }
            else {
                var from = JSON.stringify(changedProp.previousValue);
                log.push(propName + " changed from " + from + " to " + to);
            }
        }
        this.changeLog.push(log.join(', '));
        console.log(this.changeLog);
        this.getKinematicAnalysiss();
    };
    ResultListComponent.prototype.ngOnInit = function () {
        // this.medical_center_id = '591e7542583a7b2b751d4ec3';
        this.medical_center_id = '';
        this.therapist_id = '';
        this.patient_id = '';
        if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            this.token = currentUser && currentUser.token;
            this.getKinematicAnalysiss();
        }
        else {
            this.token = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].token;
            var json = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].resultList;
            for (var i = 0; i < json.length; i++) {
                this.d = json[i];
                this.kinematicsAnalysiss.push(this.d);
            }
        }
        console.log("ResultListComponent - headersOptions", this.headersOptions);
    };
    ResultListComponent.prototype.filterPeople = function (event) {
        var filterText = event.target.value.toLowerCase();
        this.displayedPeople = this.people.filter(function (person) {
            return !filterText || person.firstName.toLowerCase().indexOf(filterText) > -1;
        });
    };
    ResultListComponent.prototype.sortPeople = function (event) {
        var grid = event.target;
        var sortOrder = grid.sortOrder[0];
        var sortProperty = grid.columns[sortOrder.column].name;
        var sortDirection = sortOrder.direction;
        this.displayedPeople.sort(function (a, b) {
            var res;
            var valueA = grid.get(sortProperty, a), valueB = grid.get(sortProperty, b);
            if (!+(valueA)) {
                res = parseInt(valueA, 10) - parseInt(valueB, 10);
            }
            else {
                res = valueA.localeCompare(valueB);
            }
            if (sortDirection === 'desc') {
                res *= -1;
            }
            return res;
        });
    };
    ResultListComponent.prototype.getKinematicAnalysiss = function () {
        var _this = this;
        console.log("getKinematicAnalysiss- header", this.headersOptions);
        this._getJSON(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URL_WEB_SERVICE_ANALYSIS, this.headersOptions)
            .subscribe(function (json) { return _this.kinematicsAnalysiss = json; });
        // .subscribe(json => this.displayedPeople = this.people = json.result)
    };
    ResultListComponent.prototype.select = function (kinematicsAnalysis) {
        this.onSelect.emit(kinematicsAnalysis);
    };
    ResultListComponent.prototype.multipleSelect = function (idSelected) {
        // look for remove is selected already
        this.updateMultipleSelection(idSelected);
        // console.log(this.multipleKinematicsAnalysiss);
        this.onMultipleSelect.emit(this.multipleKinematicsAnalysiss);
    };
    ResultListComponent.prototype.updateMultipleSelection = function (idSelected) {
        var tempSelected = [];
        var exist = false;
        for (var i = 0; i < this.multipleKinematicsAnalysiss.length; i++) {
            if (this.multipleKinematicsAnalysiss[i] === idSelected)
                exist = true;
        }
        if (!exist) {
            this.multipleKinematicsAnalysiss.push(idSelected);
        }
        else {
            for (var i = 0; i < this.multipleKinematicsAnalysiss.length; i++) {
                if (this.multipleKinematicsAnalysiss[i] !== idSelected)
                    tempSelected.push(this.multipleKinematicsAnalysiss[i]);
            }
            this.multipleKinematicsAnalysiss = [];
            this.multipleKinematicsAnalysiss = tempSelected;
        }
    };
    // doFilter(type:string) {
    //   //let hard_id: string = '5917e445512fd60c985238fe';
    //   // Relative navigation back to the crises
    //   switch (type) {
    //     case "therapist":
    //       if(this.therapist_id === this.selectedTherapist._id) {
    //         this.therapist_id = '';
    //       } else {
    //         this.therapist_id = this.selectedTherapist._id;
    //       }
    //       break;
    //     case "patient":
    //       if(this.patient_id === this.selectedPatient._id) {
    //         this.patient_id = '';
    //       } else {
    //         this.patient_id = this.selectedPatient._id;
    //       }
    //       break;  
    //     default:
    //       // more filters ..
    //       break;
    //   }
    //   // clear the array for new data
    //   this.kinematicsAnalysiss = [];
    //   this.getKinematicAnalysiss();
    // }  
    // getHeaders() {
    //   let headers = new Headers();
    //   headers.append('Accept', 'application/json');
    //   headers.append('Content-Type', 'application/json');
    //   headers.append('x-access-token', this.token);
    //   let params = new URLSearchParams();
    //   params.set("patient_id", this.patient_id);
    //   params.set("medical_center_id", this.medical_center_id);
    //   params.set("therapist_id", this.therapist_id);
    //   let options = new RequestOptions();
    //   options.headers = headers
    //   options.search = params;
    //   return options;
    // }
    ResultListComponent.prototype._getJSON = function (url, option) {
        return this.http.get(url, option)
            .map(function (res) { return res.json(); });
    };
    ResultListComponent.prototype.changeStyle = function ($event, kinematicsAnalysis) {
        console.log("changeStyle", this.over);
        this.color = $event.type == 'mouseover' ? 'yellow' : 'red';
        this.over = $event.type = false ? true : false;
        this.kinematicOver = kinematicsAnalysis;
    };
    return ResultListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ResultListComponent.prototype, "medical_center_id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ResultListComponent.prototype, "therapist_id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ResultListComponent.prototype, "patient_id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ResultListComponent.prototype, "token", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]) === "function" && _a || Object)
], ResultListComponent.prototype, "headersOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ResultListComponent.prototype, "onSelect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ResultListComponent.prototype, "onMultipleSelect", void 0);
ResultListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-result-list',
        template: __webpack_require__(467),
        styles: [__webpack_require__(437)],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], ResultListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=result-list.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export SplKne */
/* unused harmony export KinematicsAnalysis */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplKne = (function () {
    function SplKne() {
    }
    return SplKne;
}());

var KinematicsAnalysis = (function () {
    function KinematicsAnalysis() {
    }
    return KinematicsAnalysis;
}());

var ResultPreviewComponent = (function () {
    function ResultPreviewComponent() {
    }
    ResultPreviewComponent.prototype.ngOnInit = function () {
    };
    return ResultPreviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", KinematicsAnalysis)
], ResultPreviewComponent.prototype, "kinematicsAnalysis", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ResultPreviewComponent.prototype, "patient", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ResultPreviewComponent.prototype, "therapist", void 0);
ResultPreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-result-preview',
        template: __webpack_require__(468),
        styles: [__webpack_require__(438)]
    }),
    __metadata("design:paramtypes", [])
], ResultPreviewComponent);

//# sourceMappingURL=result-preview.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__therapist_read_therapist_read_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__therapist_update_therapist_update_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__therapist_delete_therapist_delete_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__therapist_add_therapist_add_component__ = __webpack_require__(389);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TherapistListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TherapistListComponent = (function () {
    function TherapistListComponent(modalService, http) {
        this.modalService = modalService;
        this.http = http;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.listView = true;
        this.photoView = false;
        this.therapists = [];
        this.showAddForm = false;
    }
    TherapistListComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            this.token = currentUser && currentUser.token;
            this.getTherapist();
        }
        else {
            this.token = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].token;
            var json = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].therapistList;
            for (var i = 0; i < json.length; i++) {
                this.t = json[i];
                this.therapists.push(this.t);
            }
        }
        console.log(this.therapists);
    };
    // EventEmitter -> expose to parent component
    TherapistListComponent.prototype.select = function (therapist) {
        this.currentTherapist = therapist;
        this.onSelect.emit(therapist);
    };
    // Service methods
    TherapistListComponent.prototype.getTherapist = function () {
        var _this = this;
        this._getJSON(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URL_WEB_SERVICE_THERAPISTS, this.getHeaders())
            .subscribe(function (json) { return _this.therapists = json; });
    };
    // to move to a commun folder 
    TherapistListComponent.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.token);
        // let params = new URLSearchParams();
        // params.set("patient_id", this.patient_id);
        // params.set("medical_center_id", this.medical_center_id);
        // params.set("therapist_id", this.therapist_id);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        // options.search = params;
        return options;
    };
    // to move to a commun folder 
    TherapistListComponent.prototype._getJSON = function (url, option) {
        return this.http.get(url, option)
            .map(function (res) { return res.json(); });
    };
    TherapistListComponent.prototype.switchView = function (view) {
        if (view === 'list') {
            this.listView = true;
            this.photoView = false;
        }
        if (view === 'photo') {
            this.listView = false;
            this.photoView = true;
        }
    };
    TherapistListComponent.prototype.showReadTherapistComponent = function () {
        var options = {
            size: 'lg'
        };
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__therapist_read_therapist_read_component__["a" /* TherapistReadComponent */], options);
        modalRef.componentInstance.therapist = this.currentTherapist;
    };
    TherapistListComponent.prototype.showUpdateTherapistComponent = function () {
        var options = {
            size: 'lg'
        };
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__therapist_update_therapist_update_component__["a" /* TherapistUpdateComponent */], options);
        modalRef.componentInstance.therapist = this.currentTherapist;
        // getTherapist(); // update therapoist list
    };
    TherapistListComponent.prototype.showDeleteTherapistComponent = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_7__therapist_delete_therapist_delete_component__["a" /* TherapistDeleteComponent */]);
        modalRef.componentInstance._id = this.currentTherapist._id;
        modalRef.componentInstance.names = this.currentTherapist.names;
        modalRef.componentInstance.lastname = this.currentTherapist.lastname;
        //getTherapist(); // update therapoist list
    };
    TherapistListComponent.prototype.showAddTherapistComponent = function () {
        console.log("showAddTherapistComponent");
        var options = {
            size: 'lg'
        };
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_8__therapist_add_therapist_add_component__["a" /* TherapistAddComponent */], options);
        modalRef.componentInstance.medical_center_id = this.medical_center_id;
        modalRef.componentInstance.medical_center_name = this.medical_center_name;
        // getTherapist(); // update therapoist list
    };
    return TherapistListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TherapistListComponent.prototype, "medical_center_id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TherapistListComponent.prototype, "medical_center_name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TherapistListComponent.prototype, "allFields", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TherapistListComponent.prototype, "onSelect", void 0);
TherapistListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-therapist-list',
        template: __webpack_require__(471),
        styles: [__webpack_require__(441), __webpack_require__(371)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object])
], TherapistListComponent);

var _a, _b;
//# sourceMappingURL=therapist-list.component.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateFormatPipe = (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (value) {
        // return value.charAt(0).toUpperCase() + value.substr(1);
        return value.slice(0, -14);
    };
    return DateFormatPipe;
}());
DateFormatPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'dateFormat'
    })
], DateFormatPipe);

//# sourceMappingURL=date-format.pipe.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_format_pipe__ = __webpack_require__(409);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import {CommonModule} from "@angular/common";

var PipeModule = PipeModule_1 = (function () {
    function PipeModule() {
    }
    PipeModule.forRoot = function () {
        return {
            ngModule: PipeModule_1,
            providers: [],
        };
    };
    return PipeModule;
}());
PipeModule = PipeModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__date_format_pipe__["a" /* DateFormatPipe */]],
        // imports:[CommonModule],
        exports: [__WEBPACK_IMPORTED_MODULE_1__date_format_pipe__["a" /* DateFormatPipe */]]
    })
], PipeModule);

var PipeModule_1;
//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ChartSeriesComponent_1 = __webpack_require__(394);
var ChartXAxisComponent_1 = __webpack_require__(395);
var ChartYAxisComponent_1 = __webpack_require__(396);
var HighchartsService_1 = __webpack_require__(290);
var initChart_1 = __webpack_require__(416);
var createBaseOpts_1 = __webpack_require__(413);
var ChartComponent = (function () {
    function ChartComponent(element, highchartsService) {
        this.create = new core_1.EventEmitter();
        this.click = new core_1.EventEmitter();
        this.addSeries = new core_1.EventEmitter();
        this.afterPrint = new core_1.EventEmitter();
        this.beforePrint = new core_1.EventEmitter();
        this.drilldown = new core_1.EventEmitter();
        this.drillup = new core_1.EventEmitter();
        this.load = new core_1.EventEmitter();
        this.redraw = new core_1.EventEmitter();
        this.selection = new core_1.EventEmitter();
        this.type = 'Chart';
        this.element = element;
        this.highchartsService = highchartsService;
    }
    Object.defineProperty(ChartComponent.prototype, "options", {
        set: function (opts) {
            this.userOpts = opts;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ChartComponent.prototype.init = function () {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart_1.initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        this.baseOpts = createBaseOpts_1.createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.element.nativeElement);
        this.init();
    };
    return ChartComponent;
}());
__decorate([
    core_1.ContentChild(ChartSeriesComponent_1.ChartSeriesComponent),
    __metadata("design:type", ChartSeriesComponent_1.ChartSeriesComponent)
], ChartComponent.prototype, "series", void 0);
__decorate([
    core_1.ContentChild(ChartXAxisComponent_1.ChartXAxisComponent),
    __metadata("design:type", ChartXAxisComponent_1.ChartXAxisComponent)
], ChartComponent.prototype, "xAxis", void 0);
__decorate([
    core_1.ContentChild(ChartYAxisComponent_1.ChartYAxisComponent),
    __metadata("design:type", ChartYAxisComponent_1.ChartYAxisComponent)
], ChartComponent.prototype, "yAxis", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "create", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "click", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "addSeries", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "afterPrint", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "beforePrint", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "drilldown", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "drillup", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "load", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "redraw", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "selection", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChartComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ChartComponent.prototype, "options", null);
ChartComponent = __decorate([
    core_1.Component({
        selector: 'chart',
        template: '&nbsp;',
        providers: [HighchartsService_1.HighchartsService],
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, HighchartsService_1.HighchartsService])
], ChartComponent);
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=ChartComponent.js.map

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ChartEvent = (function () {
    function ChartEvent(event, context) {
        this.originalEvent = event;
        this.context = context;
    }
    return ChartEvent;
}());
exports.ChartEvent = ChartEvent;
//# sourceMappingURL=ChartEvent.js.map

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ChartEvent_1 = __webpack_require__(412);
var chartEvents = [
    'addSeries',
    'afterPrint',
    'beforePrint',
    'drilldown',
    'drillup',
    'load',
    'redraw',
    'selection'
];
var seriesEvents = [
    'click',
    'afterAnimate',
    'checkboxClick',
    'hide',
    'legendItemClick',
    'mouseOut',
    'mouseOver',
    'show'
];
var pointEvents = [
    'click',
    'remove',
    'select',
    'unselect',
    'mouseOut',
    'mouseOver',
    'update'
];
var xAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
var yAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
function createBaseOpts(chartCmp, seriesCmp, pointCmp, xAxisCmp, yAxisCmp, element) {
    var opts = {
        chart: {
            renderTo: element,
            events: {}
        },
        plotOptions: {
            series: {
                events: {},
                point: {
                    events: {}
                }
            }
        },
        xAxis: {
            events: {}
        },
        yAxis: {
            events: {}
        }
    };
    chartEvents.forEach(function (eventName) {
        opts.chart.events[eventName] = opts.chart.events[eventName] || function (event) {
            chartCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
        };
    });
    if (seriesCmp) {
        seriesEvents.forEach(function (eventName) {
            opts.plotOptions.series.events[eventName] = opts.plotOptions.series.events[eventName] || function (event) {
                seriesCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    if (pointCmp) {
        pointEvents.forEach(function (eventName) {
            opts.plotOptions.series.point.events[eventName] = opts.plotOptions.series.point.events[eventName] || function (event) {
                pointCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    if (xAxisCmp) {
        xAxisEvents.forEach(function (eventName) {
            opts.xAxis.events[eventName] = opts.xAxis.events[eventName] || function (event) {
                xAxisCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    if (yAxisCmp) {
        yAxisEvents.forEach(function (eventName) {
            opts.yAxis.events[eventName] = opts.yAxis.events[eventName] || function (event) {
                yAxisCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    return opts;
}
exports.createBaseOpts = createBaseOpts;
//# sourceMappingURL=createBaseOpts.js.map

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObj = function (x) {
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Sources cannot be null or undefined');
    }
    return Object(val);
}
function assignKey(to, from, key) {
    var val = from[key];
    if (val === undefined || val === null) {
        return;
    }
    if (hasOwnProperty.call(to, key)) {
        if (to[key] === undefined || to[key] === null) {
            throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
        }
    }
    if (!hasOwnProperty.call(to, key) || !isObj(val)) {
        to[key] = val;
    }
    else {
        to[key] = assign(Object(to[key]), from[key]);
    }
}
function assign(to, from) {
    if (to === from) {
        return to;
    }
    from = Object(from);
    for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
            assignKey(to, from, key);
        }
    }
    return to;
}
function deepAssign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    target = toObject(target);
    for (var s = 0; s < args.length; s++) {
        assign(target, args[s]);
    }
    return target;
}
exports.deepAssign = deepAssign;
//# sourceMappingURL=deepAssign.js.map

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var ChartComponent_1 = __webpack_require__(411);
exports.ChartComponent = ChartComponent_1.ChartComponent;
var ChartSeriesComponent_1 = __webpack_require__(394);
exports.ChartSeriesComponent = ChartSeriesComponent_1.ChartSeriesComponent;
var ChartPointComponent_1 = __webpack_require__(393);
exports.ChartPointComponent = ChartPointComponent_1.ChartPointComponent;
var ChartXAxisComponent_1 = __webpack_require__(395);
exports.ChartXAxisComponent = ChartXAxisComponent_1.ChartXAxisComponent;
var ChartYAxisComponent_1 = __webpack_require__(396);
exports.ChartYAxisComponent = ChartYAxisComponent_1.ChartYAxisComponent;
var HighchartsService_1 = __webpack_require__(290);
var CHART_DIRECTIVES = [
    ChartComponent_1.ChartComponent,
    ChartSeriesComponent_1.ChartSeriesComponent,
    ChartPointComponent_1.ChartPointComponent,
    ChartXAxisComponent_1.ChartXAxisComponent,
    ChartYAxisComponent_1.ChartYAxisComponent
];
var ChartModule = ChartModule_1 = (function () {
    function ChartModule() {
    }
    ChartModule.forRoot = function (highchartsStatic) {
        var highchartsModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            highchartsModules[_i - 1] = arguments[_i];
        }
        highchartsModules.forEach(function (module) {
            module(highchartsStatic);
        });
        return {
            ngModule: ChartModule_1,
            providers: [
                { provide: HighchartsService_1.HighchartsStatic, useValue: highchartsStatic }
            ]
        };
    };
    return ChartModule;
}());
ChartModule = ChartModule_1 = __decorate([
    core_1.NgModule({
        declarations: [CHART_DIRECTIVES],
        exports: [CHART_DIRECTIVES]
    })
], ChartModule);
exports.ChartModule = ChartModule;
var ChartModule_1;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var deepAssign_1 = __webpack_require__(414);
function initChart(highchartsService, userOpts, baseOpts, type) {
    var Highcharts = highchartsService.getHighchartsStatic();
    if (!Highcharts) {
        throw new Error('Base Highcharts module should be set via ChartModule.init');
    }
    if (!Highcharts[type]) {
        throw new Error(type + " is unknown chart type.");
    }
    if (Array.isArray(userOpts.xAxis)) {
        baseOpts.xAxis = [baseOpts.xAxis];
    }
    if (Array.isArray(userOpts.yAxis)) {
        baseOpts.yAxis = [baseOpts.yAxis];
    }
    var opts = deepAssign_1.deepAssign({}, baseOpts, userOpts);
    return new Highcharts[type](opts);
}
exports.initChart = initChart;
//# sourceMappingURL=initChart.js.map

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(415));

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, "/*.card {\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n    border-radius: 3px;\n    color: rgba(0,0,0, 0.87);\n    background: #fff;\n}\n\n.card .card-header {\n    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n    margin: -20px 15px 0;\n    border-radius: 3px;\n    padding: 15px;\n    background-color: #999999;\n}\n\n.card .card-content {\n    padding: 15px 20px;\n}\n\n.card [data-background-color] {\n    color: #FFFFFF;\n}\n\n.card [data-background-color=\"purple\"] {\n    background: linear-gradient(60deg, #ab47bc, #8e24aa);\n    box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n\n.card .category:not([class*=\"text-\"]) {\n    color: #999999;\n}*/\n\n/*.margin-container {\n    margin-top: 80px;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, ".mdl-badge[data-badge]:after {\n    content: attr(data-badge);\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    -ms-flex-direction: row;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    -ms-flex-align: center;\n    -webkit-box-align: center;\n            align-items: center;\n    position: absolute;\n    top: -3px;\n    right: -24px;\n    font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n    font-weight: 600;\n    font-size: 12px;\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    background: rgb(255,64,129);\n    color: rgb(255,255,255);\n}\n*, ::after, ::before {\n    box-sizing: inherit;\n}\n\n/*.margin-container {\n    margin-top: 80px;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, "\n/*.content {\n    padding: 30px 15px;\n    min-height: calc(100% - 123px);\n    background: black;\n}\n\n.card {\n    border-radius: 4px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1);\n    background-color: #FFFFFF;\n    margin-bottom: 30px;\n}\n\n.card .header {\n    padding: 33px 30px 0;\n}\n\n.card .content {\n    padding: 15px 15px 10px 15px;\n}\n\n.card .title {\n    margin: 0;\n    color: #333333;\n    font-weight: 300;\n}\n\n.card .category, .card label {\n    font-size: 14px;\n    font-weight: 400;\n    color: #9A9A9A;\n    margin-bottom: 0px;\n}\n*/\n/*.margin-container {\n    margin-top: 80px;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, ".mdl-badge[data-badge]:after {\n    content: attr(data-badge);\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    -ms-flex-direction: row;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    -ms-flex-align: center;\n    -webkit-box-align: center;\n            align-items: center;\n    position: absolute;\n    top: -3px;\n    right: -24px;\n    font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n    font-weight: 600;\n    font-size: 12px;\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    background: rgb(255,64,129);\n    color: rgb(255,255,255);\n}\n*, ::after, ::before {\n    box-sizing: inherit;\n}\n\n/*.margin-container {\n    margin-top: 80px;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, "\n.modal-header {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    /*flex-direction: row-reverse;*/\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n\n    padding: 14px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\n\n.modal-footer {\n    padding: 0px;\n    text-align: right;\n    border-top: 1px solid rgba(229, 229, 229, 0.01);\n}\n\n.modal-footer__actions {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    flex-direction: row-reverse;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n}\n\n\n.close {\n    margin-left: auto;\n    font-size: 3.5rem;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    opacity: .2;\n}\n\n.mdl_icon {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 20px;\n    opacity: .3;\n    text-align: left;\n    width: 40px;\n    font-size: 30px;\n    cursor: pointer;\n}\n\n.mdl_icon_person {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 5px;\n    margin-left: -1.5rem;\n    opacity: .2;\n    text-align: left;\n    font-size: 6rem;\n    cursor: pointer;\n}\n\n.field-group{\n    padding: 0px 0px 0px 9px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.btn_space {\n    margin: 0px 5px 0px 0px;\n}\n\n.out {\n    color: transparent;\n    margin: 9px;\n    width: 1px;\n    height: 1px;\n}\n\ninput {\n    -webkit-appearance: textfield;\n    background-color: transparent;\n    -webkit-rtl-ordering: logical;\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n    cursor: auto;\n    padding: 1px;\n    border-style: transparent;\n    border-color: transparent;\n    -o-border-image: transparent;\n       border-image: transparent;\n}\n\n.date_style {\n    padding: 1rem;\n}\n\n.form-inline {\n    z-index: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, "\n.modal-header {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    /*flex-direction: row-reverse;*/\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n\n    padding: 14px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\n\n.modal-footer {\n    padding: 0px;\n    text-align: right;\n    border-top: 1px solid rgba(229, 229, 229, 0.01);\n}\n\n.modal-footer__actions {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    flex-direction: row-reverse;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n}\n\n\n.close {\n    margin-left: auto;\n    font-size: 3.5rem;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    opacity: .2;\n}\n\n.mdl_icon {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 20px;\n    opacity: .3;\n    text-align: left;\n    width: 40px;\n    font-size: 30px;\n}\n\n.mdl_icon_person {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 0px;\n    margin-left: -17px;\n    opacity: .2;\n    text-align: left;\n    /*width: 100%;*/\n    font-size: 131px;\n    font-size: 300%\n}\n\n.field-group{\n    padding: 0px 0px 0px 9px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.vertical_divider{\n    border-left:1px solid #e0e0e0; \n     border-right:1px solid #e0e0e0; \n     height:400px;\n     position:absolute;\n     /*right:249px;*/\n     top:10px; \n}\n\n.horizontal_divider{\n    border-bottom: 1px solid #e0e0e0;\n    border-top: 0;\n    margin: 0 0 5px;\n    padding: 0 0 3px;\n}\n\n.btn_space {\n    margin: 0px 5px 0px 0px;\n}\n\n.text-center {\n    text-align: center!important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, ".patients {\n  font-size: medium;\n  margin: 0.5em 0em 1em 0em;\n  list-style-type: none;\n  margin-left: -1rem; \n  height: 8rem;\n  width: 90%;\n  overflow-y: scroll;\n}\n.patients li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: transparent;\n  color: #808C93; /*light gray*/\n  margin: 0em;\n  padding: 0em 0;\n  height: -1em;\n  border-radius: 2px;\n}\n.patients li:hover {\n  color: #000000; /* black */\n  left: .1em;\n}\n.patients li.active {\n    color: #f05a6d;\n}\n.patients li.selected {\n  color: #f05a6d; /* primary color */\n\n}\n.patients li.selected:hover {\n  color: #ed8593;\n}\n.patients .text {\n  position: relative;\n  top: -3px;\n}\n.patients .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n\n@media (min-width: 576px){\n  .modal-dialog {\n    max-width: 70%;\n    margin: 20px auto;\n  }\n  .modal-dialog_delete {\n    max-width: 40%;\n    margin: 20px auto;\n  }\n}\n\n/* TABLE */\n.table {\n  font-size: large;\n  margin: 0em 0em 0em 0.5em;\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.table tbody tr {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: transparent;\n  color: #808C93; /*light gray*/\n  margin: 0em;\n  padding: 0em 0;\n  height: -1em;\n  border-radius: 2px;\n}\n.table tbody tr:hover {\n  background-color: #f3f3f3;\n  color: #000000; /* black */\n  left: .1em;\n}\n.table tbody tr.active {\n    color: #f05a6d;\n}\n.table tbody tr.selected {\n  color: #f05a6d; /* primary color */\n\n}\n.table tbody tr.selected:hover {\n  color: #ed8593;\n}\n\n.header_table th{\n    color: #98D5EC;\n}\n\n.drawer_add_patient {\n    /*background-color: #e91e63;*/\n    position: fixed;\n    bottom: 0;\n    margin-bottom: 24px;\n    margin-right: 24px;\n    position: fixed;\n    z-index: 1000;\n    right: 0;\n}\n\n/*\nCopyright 2017 Google Inc. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, "\n.modal-header {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    /*flex-direction: row-reverse;*/\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n\n    padding: 14px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\n\n.modal-footer {\n    padding: 0px;\n    text-align: right;\n    border-top: 1px solid rgba(229, 229, 229, 0.01);\n}\n\n.modal-footer__actions {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    flex-direction: row-reverse;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n}\n\n\n.close {\n    margin-left: auto;\n    font-size: 3.5rem;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    opacity: .2;\n}\n\n.mdl_icon {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 20px;\n    opacity: .3;\n    text-align: left;\n    width: 40px;\n    font-size: 30px;\n}\n\n.mdl_icon_person {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 5px;\n    margin-left: -1.5rem;\n    opacity: .2;\n    text-align: left;\n    font-size: 6rem;\n}\n\n.field-group{\n    padding: 0px 0px 0px 9px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.btn_space {\n    margin: 0px 5px 0px 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, "\n.modal-header {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    /*flex-direction: row-reverse;*/\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n\n    padding: 14px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\n\n.modal-footer {\n    padding: 0px;\n    text-align: right;\n    border-top: 1px solid rgba(229, 229, 229, 0.01);\n}\n\n.modal-footer__actions {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    flex-direction: row-reverse;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n}\n\n\n.close {\n    margin-left: auto;\n    font-size: 3.5rem;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    opacity: .2;\n}\n\n.mdl_icon {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 20px;\n    opacity: .3;\n    text-align: left;\n    width: 40px;\n    font-size: 30px;\n}\n\n.mdl_icon_person {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 5px;\n    margin-left: -1.5rem;\n    opacity: .2;\n    text-align: left;\n    font-size: 6rem;\n}\n\n.field-group{\n    padding: 0px 0px 0px 9px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.btn_space {\n    margin: 0px 5px 0px 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, "chart {\n    display: block;\n}\n\n\n.division_line_multiple_value{\n    border-bottom: 1px solid #e0e0e0;\n    border-top: 0;\n    margin: 0 0 15px;\n    padding: 0 0 16px;\n}\n\n.division_line_single_value {\n    border-bottom: 1px solid #e0e0e0;\n    border-top: 0;\n    margin: 0 0 5px;\n    padding: 0 0 3px;\n}\n\n\n.drawer_details {\n    /*background-color: #e91e63;*/\n    bottom: 0;\n    position: fixed;\n    margin-bottom: 24px;\n    margin-right: 24px;\n    z-index: 9000;\n    position: fixed;\n    right: 0;\n}\n.drawer_video {\n    bottom: 0;\n    position: fixed;\n    margin-bottom: 95px;\n    margin-right: 24px;\n    z-index: 9000;\n    position: fixed;\n    right: 0;\n}\n.drawer_menu {\n    bottom: 0;\n    position: fixed;\n    margin-bottom: 8px;\n    margin-right: 24px;\n    z-index: 9000;\n    position: fixed;\n    right: 0;\n}\n.name_position_fixed{\n     bottom: 0;\n    position: fixed;\n    margin-top: 80px;\n    margin-right: 24px;\n    z-index: 9000;\n    position: fixed;\n    right: 0;\n}\n.name_position {\n    position: static;\n    z-index: 8000;\n    text-align: center;\n    /* background-color: rgba(2, 2, 3, 0.1); */\n    z-index: 200;\n    padding: 1rem;\n}\n\n.mdl-button--accent.mdl-button--fab {\n    color: rgba(223, 30, 78, 0.61);\n    background-color: rgba(235, 53, 22, 0.22);\n\n}\n\n.video_section {\n    position: fixed;\n    width: 100%;\n    /* height: 200px; */\n    /* left: 50%; */\n    top: 11%;\n    /* margin-left: -300px; */\n    z-index: 200;\n}\n\n.scrollable {\n    height: 66rem;\n    margin: 0;\n    overflow: scroll;\n    overflow-x: hidden;\n}\n.scrollable_video{\n    height: 45rem;\n    margin: 0;\n    overflow: scroll\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.results {\n  font-size: medium;\n  margin: 0em 0em 0em 0.5em;\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n  height: 200px;\n  overflow-y: auto;\n}\n.results li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: 0em;\n  padding: 0em 0;\n  height: -1em;\n  border-radius: 2px;\n}\n.results li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.results li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.results .text {\n  position: relative;\n  top: -3px;\n}\n.results .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 0px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.view {\n/*  float:right;\n  margin-top: 0px;\n  margin-right: .8em;\n  background-color: gray !important;\n  color:white;\n  height: 20px;*/\n    margin: 1px 1px 1px 1px;\n\n}\n/*.results li:hover {*/\n#li-results:hover + #btn-view {\n  /*margin: 25px 25px 25px 25px;*/\n   background: #ccc\n}\n\n.option_position {\n  right-margin: 0px;\n}\n\n/*.vertical-menu {\n    width: 100%;\n    height: 200px;\n    overflow-y: auto;\n}\n\n.vertical-menu li {\n    background-color: #eee;\n    color: black;\n    display: block;\n    padding: 5px;\n    text-decoration: none;\n    font-size: 12px;\n    margin-left : -22px;\n}\n\n.vertical-menu li:hover {\n    background-color: #ccc;\n}\n\n.vertical-menu li.active {\n    background-color: #4CAF50;\n    color: white;\n}*/\n\n/* TABLE */\n.table {\n  font-size: large;\n  margin: 0em 0em 0em 0em;\n  list-style-type: none;\n  width: 80%;\n  overflow-y: auto;\n}\n.table thead { \n  display:block; \n}\n.table tbody { \n  height: 20rem; \n  overflow-y: scroll; \n  display: block; \n}\n.table tbody tr {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: transparent;\n  color: #808C93; /*light gray*/\n  margin: 0em;\n  padding: 0em 0;\n  height: -1em;\n  border-radius: 2px;\n}\n.table tbody tr:hover {\n  background-color: #f3f3f3;\n  color: #000000; /* black */\n  left: .1em;\n}\n.table tbody tr.active {\n    color: #f05a6d;\n}\n.table tbody tr.selected {\n  color: #f05a6d; /* primary color */\n\n}\n.table tbody tr.selected:hover {\n  color: #ed8593;\n}\n\n.header_table th{\n    color: #98D5EC;\n}\n\n\n\n/*\nCopyright 2017 Google Inc. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, ".cons-set {\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -ms-flex-flow: row wrap;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    /*padding: 2rem .5rem;*/\n}\n\n.icons-set__icon {\n    margin: 1rem 1rem 1rem 0rem;\n    color: #9b9b9b;\n    width: 4rem;\n    height: 4rem;\n    position: relative;\n    overflow: hidden;\n    display: inline-block;\n    text-decoration: none;\n    cursor: pointer;\n    text-align: center;\n    padding: 0.3rem;\n    border: 2px solid rgb(244, 244, 244);\n    border-radius: 10px;\n    transition: all 75ms linear;\n}\n\n.img_icon {\n\tbackground: yellow;\n}\n\n.title-devider {\n    background-color: rgba(240, 90, 109, 0.06);\n}\n\n.card-block p {\n    color: #808c93;\n    \n}\n\n.card-block p samp{\n    color: #f05a6d;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, ".modal-header {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    /*flex-direction: row-reverse;*/\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n\n    padding: 14px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\n\n.modal-footer {\n    padding: 0px;\n    text-align: right;\n    border-top: 1px solid rgba(229, 229, 229, 0.01);\n}\n\n.modal-footer__actions {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    flex-direction: row-reverse;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n}\n\n\n.close {\n    margin-left: auto;\n    font-size: 3.5rem;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    opacity: .2;\n}\n\n.mdl_icon {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 20px;\n    opacity: .3;\n    text-align: left;\n    width: 40px;\n    font-size: 30px;\n    cursor: pointer;\n}\n\n.mdl_icon_person {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 5px;\n    margin-left: -1.5rem;\n    opacity: .2;\n    text-align: left;\n    font-size: 6rem;\n    cursor: pointer;\n}\n\n.field-group{\n    padding: 0px 0px 0px 9px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.btn_space {\n    margin: 0px 5px 0px 0px;\n}\n\n.out {\n    margin: -9999px;\n}\n\ninput {\n    -webkit-appearance: textfield;\n    background-color: transparent;\n    -webkit-rtl-ordering: logical;\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n    cursor: auto;\n    padding: 1px;\n    border-style: transparent;\n    border-color: transparent;\n    -o-border-image: transparent;\n       border-image: transparent;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, "\n.modal-header {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    /*flex-direction: row-reverse;*/\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n\n    padding: 14px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\n\n.modal-footer {\n    padding: 0px;\n    text-align: right;\n    border-top: 1px solid rgba(229, 229, 229, 0.01);\n}\n\n.modal-footer__actions {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    flex-direction: row-reverse;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n}\n\n\n.close {\n    margin-left: auto;\n    font-size: 3.5rem;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    opacity: .2;\n}\n\n.mdl_icon {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 20px;\n    opacity: .3;\n    text-align: left;\n    width: 40px;\n    font-size: 30px;\n}\n\n.mdl_icon_person {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 0px;\n    margin-left: -17px;\n    opacity: .2;\n    text-align: left;\n    /*width: 100%;*/\n    font-size: 131px;\n    font-size: 300%\n}\n\n.field-group{\n    padding: 0px 0px 0px 9px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.vertical_divider{\n    border-left:1px solid #e0e0e0; \n     border-right:1px solid #e0e0e0; \n     height:400px;\n     position:absolute;\n     /*right:249px;*/\n     top:10px; \n}\n\n.horizontal_divider{\n    border-bottom: 1px solid #e0e0e0;\n    border-top: 0;\n    margin: 0 0 5px;\n    padding: 0 0 3px;\n}\n\n.btn_space {\n    margin: 0px 5px 0px 0px;\n}\n\n.text-center {\n    text-align: center!important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, ".therapists {\n  font-size: medium;\n  margin: 0.5em 0em 1em 0em;\n  list-style-type: none;\n  margin-left: -1rem; \n  height: 8rem;\n  width: 90%;\n  overflow-y: scroll;\n}\n.therapists li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: transparent;\n  color: #808C93; /*light gray*/\n  margin: 0em;\n  padding: 0em 0;\n  height: -1em;\n  border-radius: 2px;\n}\n.therapists li:hover {\n  color: #000000; /* black */\n  left: .1em;\n}\n.therapists li.active {\n    color: #f05a6d;\n}\n.therapists li.selected {\n  color: #f05a6d; /* primary color */\n\n}\n.therapists li.selected:hover {\n  color: #ed8593;\n}\n.therapists .text {\n  position: relative;\n  top: -3px;\n}\n.therapists .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n@media (min-width: 576px){\n  .modal-dialog {\n    max-width: 70%;\n    margin: 20px auto;\n  }\n  .modal-dialog_delete {\n    max-width: 40%;\n    margin: 20px auto;\n  }\n}\n\n/* TABLE */\n.table {\n  font-size: large;\n  margin: 0em 0em 0em 0.5em;\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.table tbody tr {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: transparent;\n  color: #808C93; /*light gray*/\n  margin: 0em;\n  padding: 0em 0;\n  height: -1em;\n  border-radius: 2px;\n}\n.table tbody tr:hover {\n  background-color: #f3f3f3;\n  color: #000000; /* black */\n  left: .1em;\n}\n.table tbody tr.active {\n    color: #f05a6d;\n}\n.table tbody tr.selected {\n  color: #f05a6d; /* primary color */\n\n}\n.table tbody tr.selected:hover {\n  color: #ed8593;\n}\n\n.header_table th{\n    color: #98D5EC;\n}\n\n.drawer_add_therapist {\n    /*background-color: #e91e63;*/\n    position: fixed;\n    bottom: 0;\n    margin-bottom: 24px;\n    margin-right: 24px;\n    position: fixed;\n    z-index: 1000;\n    right: 0;\n}\n\n\n/*\nCopyright 2017 Google Inc. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, ".modal-header {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    /*flex-direction: row-reverse;*/\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n\n    padding: 14px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\n\n.modal-footer {\n    padding: 0px;\n    text-align: right;\n    border-top: 1px solid rgba(229, 229, 229, 0.01);\n}\n\n.modal-footer__actions {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    flex-direction: row-reverse;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n}\n\n\n.close {\n    margin-left: auto;\n    font-size: 3.5rem;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    opacity: .2;\n}\n\n.mdl_icon {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 20px;\n    opacity: .3;\n    text-align: left;\n    width: 40px;\n    font-size: 30px;\n    cursor: pointer;\n}\n\n.mdl_icon_person {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 5px;\n    margin-left: -1.5rem;\n    opacity: .2;\n    text-align: left;\n    font-size: 6rem;\n    cursor: pointer;\n}\n\n.field-group{\n    padding: 0px 0px 0px 9px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.btn_space {\n    margin: 0px 5px 0px 0px;\n}\n\n.out {\n    margin: -9999px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, ".modal-header {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    /*flex-direction: row-reverse;*/\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n\n    padding: 14px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\n\n.modal-footer {\n    padding: 0px;\n    text-align: right;\n    border-top: 1px solid rgba(229, 229, 229, 0.01);\n}\n\n.modal-footer__actions {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    flex-direction: row-reverse;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n}\n\n\n.close {\n    margin-left: auto;\n    font-size: 3.5rem;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    opacity: .2;\n}\n\n.mdl_icon {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 20px;\n    opacity: .3;\n    text-align: left;\n    width: 40px;\n    font-size: 30px;\n    cursor: pointer;\n}\n\n.mdl_icon_person {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-top: 5px;\n    margin-left: -1.5rem;\n    opacity: .2;\n    text-align: left;\n    font-size: 6rem;\n    cursor: pointer;\n}\n\n.field-group{\n    padding: 0px 0px 0px 9px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.btn_space {\n    margin: 0px 5px 0px 0px;\n}\n\n.out {\n    margin: -9999px;\n}\n\ninput {\n    -webkit-appearance: textfield;\n    background-color: transparent;\n    -webkit-rtl-ordering: logical;\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n    cursor: auto;\n    padding: 1px;\n    border-style: transparent;\n    border-color: transparent;\n    -o-border-image: transparent;\n       border-image: transparent;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

/*
 Highcharts JS v5.0.12 (2017-05-24)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(v){"object"===typeof module&&module.exports?module.exports=v:v(Highcharts)})(function(v){(function(a){function r(a,b){this.init(a,b)}var t=a.CenteredSeriesMixin,w=a.each,p=a.extend,m=a.merge,f=a.splat;p(r.prototype,{coll:"pane",init:function(a,b){this.chart=b;this.background=[];b.pane.push(this);this.setOptions(a)},setOptions:function(a){this.options=m(this.defaultOptions,this.chart.angular?{background:{}}:void 0,a)},render:function(){var a=this.options,b=this.options.background,d=this.chart.renderer;
this.group||(this.group=d.g("pane-group").attr({zIndex:a.zIndex||0}).add());this.updateCenter();if(b)for(b=f(b),a=Math.max(b.length,this.background.length||0),d=0;d<a;d++)b[d]&&this.axis?this.renderBackground(m(this.defaultBackgroundOptions,b[d]),d):this.background[d]&&(this.background[d]=this.background[d].destroy(),this.background.splice(d,1))},renderBackground:function(a,b){var d="animate";this.background[b]||(this.background[b]=this.chart.renderer.path().add(this.group),d="attr");this.background[b][d]({d:this.axis.getPlotBandPath(a.from,
a.to,a)}).attr({fill:a.backgroundColor,stroke:a.borderColor,"stroke-width":a.borderWidth,"class":"highcharts-pane "+(a.className||"")})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"#cccccc",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ffffff"],[1,"#e6e6e6"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"},updateCenter:function(a){this.center=(a||this.axis||{}).center=
t.getCenter.call(this)},update:function(a,b){m(!0,this.options,a);this.setOptions(this.options);this.render();w(this.chart.axes,function(d){d.pane===this&&(d.pane=null,d.update({},b))},this)}});a.Pane=r})(v);(function(a){var r=a.each,t=a.extend,w=a.map,p=a.merge,m=a.noop,f=a.pick,h=a.pInt,b=a.wrap,d,e,k=a.Axis.prototype;a=a.Tick.prototype;d={getOffset:m,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:m,setCategories:m,setTitle:m};e={defaultRadialGaugeOptions:{labels:{align:"center",
x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(c){c=
this.options=p(this.defaultOptions,this.defaultRadialOptions,c);c.plotBands||(c.plotBands=[])},getOffset:function(){k.getOffset.call(this);this.chart.axisOffset[this.side]=0},getLinePath:function(c,b){c=this.center;var d=this.chart,g=f(b,c[2]/2-this.offset);this.isCircular||void 0!==b?b=this.chart.renderer.symbols.arc(this.left+c[0],this.top+c[1],g,g,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0}):(b=this.postTranslate(this.angleRad,g),b=["M",c[0]+d.plotLeft,c[1]+d.plotTop,"L",b.x,
b.y]);return b},setAxisTranslation:function(){k.setAxisTranslation.call(this);this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0)},beforeSetTickPositions:function(){if(this.autoConnect=this.isCircular&&void 0===f(this.userMax,this.options.max)&&this.endAngleRad-this.startAngleRad===2*Math.PI)this.max+=this.categories&&1||this.pointRange||this.closestPointRange||
0},setAxisSize:function(){k.setAxisSize.call(this);this.isRadial&&(this.pane.updateCenter(this),this.isCircular&&(this.sector=this.endAngleRad-this.startAngleRad),this.len=this.width=this.height=this.center[2]*f(this.sector,1)/2)},getPosition:function(c,b){return this.postTranslate(this.isCircular?this.translate(c):this.angleRad,f(this.isCircular?b:this.translate(c),this.center[2]/2)-this.offset)},postTranslate:function(c,b){var d=this.chart,g=this.center;c=this.startAngleRad+c;return{x:d.plotLeft+
g[0]+Math.cos(c)*b,y:d.plotTop+g[1]+Math.sin(c)*b}},getPlotBandPath:function(c,b,d){var g=this.center,n=this.startAngleRad,a=g[2]/2,e=[f(d.outerRadius,"100%"),d.innerRadius,f(d.thickness,10)],k=Math.min(this.offset,0),z=/%$/,m,p=this.isCircular;"polygon"===this.options.gridLineInterpolation?g=this.getPlotLinePath(c).concat(this.getPlotLinePath(b,!0)):(c=Math.max(c,this.min),b=Math.min(b,this.max),p||(e[0]=this.translate(c),e[1]=this.translate(b)),e=w(e,function(b){z.test(b)&&(b=h(b,10)*a/100);return b}),
"circle"!==d.shape&&p?(c=n+this.translate(c),b=n+this.translate(b)):(c=-Math.PI/2,b=1.5*Math.PI,m=!0),e[0]-=k,e[2]-=k,g=this.chart.renderer.symbols.arc(this.left+g[0],this.top+g[1],e[0],e[0],{start:Math.min(c,b),end:Math.max(c,b),innerR:f(e[1],e[0]-e[2]),open:m}));return g},getPlotLinePath:function(b,d){var c=this,g=c.center,e=c.chart,a=c.getPosition(b),k,h,f;c.isCircular?f=["M",g[0]+e.plotLeft,g[1]+e.plotTop,"L",a.x,a.y]:"circle"===c.options.gridLineInterpolation?(b=c.translate(b))&&(f=c.getLinePath(0,
b)):(r(e.xAxis,function(b){b.pane===c.pane&&(k=b)}),f=[],b=c.translate(b),g=k.tickPositions,k.autoConnect&&(g=g.concat([g[0]])),d&&(g=[].concat(g).reverse()),r(g,function(c,d){h=k.getPosition(c,b);f.push(d?"L":"M",h.x,h.y)}));return f},getTitlePosition:function(){var b=this.center,d=this.chart,e=this.options.title;return{x:d.plotLeft+b[0]+(e.x||0),y:d.plotTop+b[1]-{high:.5,middle:.25,low:0}[e.align]*b[2]+(e.y||0)}}};b(k,"init",function(b,g,a){var c=g.angular,n=g.polar,q=a.isX,k=c&&q,h,m=g.options,
r=this.pane=g.pane[a.pane||0],y=r.options;if(c){if(t(this,k?d:e),h=!q)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else n&&(t(this,e),this.defaultRadialOptions=(h=q)?this.defaultRadialXOptions:p(this.defaultYAxisOptions,this.defaultRadialYOptions));c||n?(this.isRadial=!0,g.inverted=!1,m.chart.zoomType=null):this.isRadial=!1;h&&(r.axis=this);b.call(this,g,a);k||!c&&!n||(b=this.options,this.angleRad=(b.angle||0)*Math.PI/180,this.startAngleRad=(y.startAngle-90)*Math.PI/180,this.endAngleRad=
(f(y.endAngle,y.startAngle+360)-90)*Math.PI/180,this.offset=b.offset||0,this.isCircular=h)});b(k,"autoLabelAlign",function(b){if(!this.isRadial)return b.apply(this,[].slice.call(arguments,1))});b(a,"getPosition",function(b,d,e,a,l){var c=this.axis;return c.getPosition?c.getPosition(e):b.call(this,d,e,a,l)});b(a,"getLabelPosition",function(b,d,e,a,l,q,k,h,m){var c=this.axis,g=q.y,n=20,u=q.align,x=(c.translate(this.pos)+c.startAngleRad+Math.PI/2)/Math.PI*180%360;c.isRadial?(b=c.getPosition(this.pos,
c.center[2]/2+f(q.distance,-25)),"auto"===q.rotation?a.attr({rotation:x}):null===g&&(g=c.chart.renderer.fontMetrics(a.styles.fontSize).b-a.getBBox().height/2),null===u&&(c.isCircular?(this.label.getBBox().width>c.len*c.tickInterval/(c.max-c.min)&&(n=0),u=x>n&&x<180-n?"left":x>180+n&&x<360-n?"right":"center"):u="center",a.attr({align:u})),b.x+=q.x,b.y+=g):b=b.call(this,d,e,a,l,q,k,h,m);return b});b(a,"getMarkPath",function(b,d,e,a,l,k,h){var c=this.axis;c.isRadial?(b=c.getPosition(this.pos,c.center[2]/
2+a),d=["M",d,e,"L",b.x,b.y]):d=b.call(this,d,e,a,l,k,h);return d})})(v);(function(a){var r=a.each,t=a.noop,w=a.pick,p=a.Series,m=a.seriesType,f=a.seriesTypes;m("arearange","area",{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{series.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:!1}}},
{pointArrayMap:["low","high"],dataLabelCollections:["dataLabel","dataLabelUpper"],toYData:function(a){return[a.low,a.high]},pointValKey:"low",deferTranslatePolar:!0,highToXY:function(a){var b=this.chart,d=this.xAxis.postTranslate(a.rectPlotX,this.yAxis.len-a.plotHigh);a.plotHighX=d.x-b.plotLeft;a.plotHigh=d.y-b.plotTop},translate:function(){var a=this,b=a.yAxis,d=!!a.modifyValue;f.area.prototype.translate.apply(a);r(a.points,function(e){var k=e.low,c=e.high,g=e.plotY;null===c||null===k?e.isNull=!0:
(e.plotLow=g,e.plotHigh=b.translate(d?a.modifyValue(c,e):c,0,1,0,1),d&&(e.yBottom=e.plotHigh))});this.chart.polar&&r(this.points,function(b){a.highToXY(b)})},getGraphPath:function(a){var b=[],d=[],e,k=f.area.prototype.getGraphPath,c,g,n;n=this.options;var u=this.chart.polar&&!1!==n.connectEnds,l=n.connectNulls,q=n.step;a=a||this.points;for(e=a.length;e--;)c=a[e],c.isNull||u||l||a[e+1]&&!a[e+1].isNull||d.push({plotX:c.plotX,plotY:c.plotY,doCurve:!1}),g={polarPlotY:c.polarPlotY,rectPlotX:c.rectPlotX,
yBottom:c.yBottom,plotX:w(c.plotHighX,c.plotX),plotY:c.plotHigh,isNull:c.isNull},d.push(g),b.push(g),c.isNull||u||l||a[e-1]&&!a[e-1].isNull||d.push({plotX:c.plotX,plotY:c.plotY,doCurve:!1});a=k.call(this,a);q&&(!0===q&&(q="left"),n.step={left:"right",center:"center",right:"left"}[q]);b=k.call(this,b);d=k.call(this,d);n.step=q;n=[].concat(a,b);this.chart.polar||"M"!==d[0]||(d[0]="L");this.graphPath=n;this.areaPath=this.areaPath.concat(a,d);n.isArea=!0;n.xMap=a.xMap;this.areaPath.xMap=a.xMap;return n},
drawDataLabels:function(){var a=this.data,b=a.length,d,e=[],k=p.prototype,c=this.options.dataLabels,g=c.align,n=c.verticalAlign,u=c.inside,l,q,x=this.chart.inverted;if(c.enabled||this._hasPointLabels){for(d=b;d--;)if(l=a[d])q=u?l.plotHigh<l.plotLow:l.plotHigh>l.plotLow,l.y=l.high,l._plotY=l.plotY,l.plotY=l.plotHigh,e[d]=l.dataLabel,l.dataLabel=l.dataLabelUpper,l.below=q,x?g||(c.align=q?"right":"left"):n||(c.verticalAlign=q?"top":"bottom"),c.x=c.xHigh,c.y=c.yHigh;k.drawDataLabels&&k.drawDataLabels.apply(this,
arguments);for(d=b;d--;)if(l=a[d])q=u?l.plotHigh<l.plotLow:l.plotHigh>l.plotLow,l.dataLabelUpper=l.dataLabel,l.dataLabel=e[d],l.y=l.low,l.plotY=l._plotY,l.below=!q,x?g||(c.align=q?"left":"right"):n||(c.verticalAlign=q?"bottom":"top"),c.x=c.xLow,c.y=c.yLow;k.drawDataLabels&&k.drawDataLabels.apply(this,arguments)}c.align=g;c.verticalAlign=n},alignDataLabel:function(){f.column.prototype.alignDataLabel.apply(this,arguments)},setStackedPoints:t,getSymbol:t,drawPoints:t})})(v);(function(a){var r=a.seriesType;
r("areasplinerange","arearange",null,{getPointSpline:a.seriesTypes.spline.prototype.getPointSpline})})(v);(function(a){var r=a.defaultPlotOptions,t=a.each,w=a.merge,p=a.noop,m=a.pick,f=a.seriesType,h=a.seriesTypes.column.prototype;f("columnrange","arearange",w(r.column,r.arearange,{lineWidth:1,pointRange:null}),{translate:function(){var b=this,d=b.yAxis,a=b.xAxis,k=a.startAngleRad,c,g=b.chart,n=b.xAxis.isRadial,u;h.translate.apply(b);t(b.points,function(e){var q=e.shapeArgs,l=b.options.minPointLength,
f,h;e.plotHigh=u=d.translate(e.high,0,1,0,1);e.plotLow=e.plotY;h=u;f=m(e.rectPlotY,e.plotY)-u;Math.abs(f)<l?(l-=f,f+=l,h-=l/2):0>f&&(f*=-1,h-=f);n?(c=e.barX+k,e.shapeType="path",e.shapeArgs={d:b.polarArc(h+f,h,c,c+e.pointWidth)}):(q.height=f,q.y=h,e.tooltipPos=g.inverted?[d.len+d.pos-g.plotLeft-h-f/2,a.len+a.pos-g.plotTop-q.x-q.width/2,f]:[a.left-g.plotLeft+q.x+q.width/2,d.pos-g.plotTop+h+f/2,f])})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:p,crispCol:h.crispCol,drawPoints:h.drawPoints,
drawTracker:h.drawTracker,getColumnMetrics:h.getColumnMetrics,animate:function(){return h.animate.apply(this,arguments)},polarArc:function(){return h.polarArc.apply(this,arguments)},pointAttribs:h.pointAttribs})})(v);(function(a){var r=a.each,t=a.isNumber,w=a.merge,p=a.pick,m=a.pInt,f=a.Series,h=a.seriesType,b=a.TrackerMixin;h("gauge","line",{dataLabels:{enabled:!0,defer:!1,y:15,borderRadius:3,crop:!1,verticalAlign:"top",zIndex:2,borderWidth:1,borderColor:"#cccccc"},dial:{},pivot:{},tooltip:{headerFormat:""},
showInLegend:!1},{angular:!0,directTouch:!0,drawGraph:a.noop,fixedBox:!0,forceDL:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var b=this.yAxis,a=this.options,k=b.center;this.generatePoints();r(this.points,function(c){var d=w(a.dial,c.dial),e=m(p(d.radius,80))*k[2]/200,u=m(p(d.baseLength,70))*e/100,l=m(p(d.rearLength,10))*e/100,q=d.baseWidth||3,f=d.topWidth||1,h=a.overshoot,r=b.startAngleRad+b.translate(c.y,null,null,null,!0);t(h)?(h=h/180*Math.PI,r=Math.max(b.startAngleRad-
h,Math.min(b.endAngleRad+h,r))):!1===a.wrap&&(r=Math.max(b.startAngleRad,Math.min(b.endAngleRad,r)));r=180*r/Math.PI;c.shapeType="path";c.shapeArgs={d:d.path||["M",-l,-q/2,"L",u,-q/2,e,-f/2,e,f/2,u,q/2,-l,q/2,"z"],translateX:k[0],translateY:k[1],rotation:r};c.plotX=k[0];c.plotY=k[1]})},drawPoints:function(){var b=this,a=b.yAxis.center,k=b.pivot,c=b.options,g=c.pivot,n=b.chart.renderer;r(b.points,function(a){var d=a.graphic,e=a.shapeArgs,g=e.d,k=w(c.dial,a.dial);d?(d.animate(e),e.d=g):(a.graphic=n[a.shapeType](e).attr({rotation:e.rotation,
zIndex:1}).addClass("highcharts-dial").add(b.group),a.graphic.attr({stroke:k.borderColor||"none","stroke-width":k.borderWidth||0,fill:k.backgroundColor||"#000000"}))});k?k.animate({translateX:a[0],translateY:a[1]}):(b.pivot=n.circle(0,0,p(g.radius,5)).attr({zIndex:2}).addClass("highcharts-pivot").translate(a[0],a[1]).add(b.group),b.pivot.attr({"stroke-width":g.borderWidth||0,stroke:g.borderColor||"#cccccc",fill:g.backgroundColor||"#000000"}))},animate:function(b){var a=this;b||(r(a.points,function(b){var c=
b.graphic;c&&(c.attr({rotation:180*a.yAxis.startAngleRad/Math.PI}),c.animate({rotation:b.shapeArgs.rotation},a.options.animation))}),a.animate=null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);f.prototype.render.call(this);this.group.clip(this.chart.clipRect)},setData:function(b,a){f.prototype.setData.call(this,b,!1);this.processData();this.generatePoints();p(a,!0)&&this.chart.redraw()},drawTracker:b&&b.drawTrackerPoint},
{setState:function(b){this.state=b}})})(v);(function(a){var r=a.each,t=a.noop,w=a.pick,p=a.seriesType,m=a.seriesTypes;p("boxplot","column",{threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eMaximum: {point.high}\x3cbr/\x3eUpper quartile: {point.q3}\x3cbr/\x3eMedian: {point.median}\x3cbr/\x3eLower quartile: {point.q1}\x3cbr/\x3eMinimum: {point.low}\x3cbr/\x3e'},whiskerLength:"50%",fillColor:"#ffffff",lineWidth:1,
medianWidth:2,states:{hover:{brightness:-.3}},whiskerWidth:2},{pointArrayMap:["low","q1","median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]},pointValKey:"high",pointAttribs:function(a){var f=this.options,b=a&&a.color||this.color;return{fill:a.fillColor||f.fillColor||b,stroke:f.lineColor||b,"stroke-width":f.lineWidth||0}},drawDataLabels:t,translate:function(){var a=this.yAxis,h=this.pointArrayMap;m.column.prototype.translate.apply(this);r(this.points,function(b){r(h,
function(d){null!==b[d]&&(b[d+"Plot"]=a.translate(b[d],0,1,0,1))})})},drawPoints:function(){var a=this,h=a.options,b=a.chart.renderer,d,e,k,c,g,n,u=0,l,q,m,p,z=!1!==a.doQuartiles,t,y=a.options.whiskerLength;r(a.points,function(f){var x=f.graphic,r=x?"animate":"attr",J=f.shapeArgs,v={},C={},H={},I=f.color||a.color;void 0!==f.plotY&&(l=J.width,q=Math.floor(J.x),m=q+l,p=Math.round(l/2),d=Math.floor(z?f.q1Plot:f.lowPlot),e=Math.floor(z?f.q3Plot:f.lowPlot),k=Math.floor(f.highPlot),c=Math.floor(f.lowPlot),
x||(f.graphic=x=b.g("point").add(a.group),f.stem=b.path().addClass("highcharts-boxplot-stem").add(x),y&&(f.whiskers=b.path().addClass("highcharts-boxplot-whisker").add(x)),z&&(f.box=b.path(void 0).addClass("highcharts-boxplot-box").add(x)),f.medianShape=b.path(void 0).addClass("highcharts-boxplot-median").add(x)),v.stroke=f.stemColor||h.stemColor||I,v["stroke-width"]=w(f.stemWidth,h.stemWidth,h.lineWidth),v.dashstyle=f.stemDashStyle||h.stemDashStyle,f.stem.attr(v),y&&(C.stroke=f.whiskerColor||h.whiskerColor||
I,C["stroke-width"]=w(f.whiskerWidth,h.whiskerWidth,h.lineWidth),f.whiskers.attr(C)),z&&(x=a.pointAttribs(f),f.box.attr(x)),H.stroke=f.medianColor||h.medianColor||I,H["stroke-width"]=w(f.medianWidth,h.medianWidth,h.lineWidth),f.medianShape.attr(H),n=f.stem.strokeWidth()%2/2,u=q+p+n,f.stem[r]({d:["M",u,e,"L",u,k,"M",u,d,"L",u,c]}),z&&(n=f.box.strokeWidth()%2/2,d=Math.floor(d)+n,e=Math.floor(e)+n,q+=n,m+=n,f.box[r]({d:["M",q,e,"L",q,d,"L",m,d,"L",m,e,"L",q,e,"z"]})),y&&(n=f.whiskers.strokeWidth()%2/
2,k+=n,c+=n,t=/%$/.test(y)?p*parseFloat(y)/100:y/2,f.whiskers[r]({d:["M",u-t,k,"L",u+t,k,"M",u-t,c,"L",u+t,c]})),g=Math.round(f.medianPlot),n=f.medianShape.strokeWidth()%2/2,g+=n,f.medianShape[r]({d:["M",q,g,"L",m,g]}))})},setStackedPoints:t})})(v);(function(a){var r=a.each,t=a.noop,w=a.seriesType,p=a.seriesTypes;w("errorbar","boxplot",{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},
whiskerWidth:null},{type:"errorbar",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:p.arearange?function(){var a=this.pointValKey;p.arearange.prototype.drawDataLabels.call(this);r(this.data,function(f){f.y=f[a]})}:t,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||p.column.prototype.getColumnMetrics.call(this)}})})(v);(function(a){var r=a.correctFloat,t=a.isNumber,w=a.pick,p=a.Point,m=a.Series,
f=a.seriesType,h=a.seriesTypes;f("waterfall","column",{dataLabels:{inside:!0},lineWidth:1,lineColor:"#333333",dashStyle:"dot",borderColor:"#333333",states:{hover:{lineWidthPlus:0}}},{pointValKey:"y",translate:function(){var b=this.options,a=this.yAxis,e,k,c,g,n,f,l,q,m,p,t=w(b.minPointLength,5),v=t/2,y=b.threshold,D=b.stacking,A;h.column.prototype.translate.apply(this);q=m=y;k=this.points;e=0;for(b=k.length;e<b;e++)c=k[e],l=this.processedYData[e],g=c.shapeArgs,n=D&&a.stacks[(this.negStacks&&l<y?"-":
"")+this.stackKey],A=this.getStackIndicator(A,c.x,this.index),p=n?n[c.x].points[A.key]:[0,l],c.isSum?c.y=r(l):c.isIntermediateSum&&(c.y=r(l-m)),f=Math.max(q,q+c.y)+p[0],g.y=a.translate(f,0,1,0,1),c.isSum?(g.y=a.translate(p[1],0,1,0,1),g.height=Math.min(a.translate(p[0],0,1,0,1),a.len)-g.y):c.isIntermediateSum?(g.y=a.translate(p[1],0,1,0,1),g.height=Math.min(a.translate(m,0,1,0,1),a.len)-g.y,m=p[1]):(g.height=0<l?a.translate(q,0,1,0,1)-g.y:a.translate(q,0,1,0,1)-a.translate(q-l,0,1,0,1),q+=n&&n[c.x]?
n[c.x].total:l),0>g.height&&(g.y+=g.height,g.height*=-1),c.plotY=g.y=Math.round(g.y)-this.borderWidth%2/2,g.height=Math.max(Math.round(g.height),.001),c.yBottom=g.y+g.height,g.height<=t&&!c.isNull?(g.height=t,g.y-=v,c.plotY=g.y,c.minPointLengthOffset=0>c.y?-v:v):c.minPointLengthOffset=0,g=c.plotY+(c.negative?g.height:0),this.chart.inverted?c.tooltipPos[0]=a.len-g:c.tooltipPos[1]=g},processData:function(b){var a=this.yData,e=this.options.data,k,c=a.length,g,n,f,l,q,h;n=g=f=l=this.options.threshold||
0;for(h=0;h<c;h++)q=a[h],k=e&&e[h]?e[h]:{},"sum"===q||k.isSum?a[h]=r(n):"intermediateSum"===q||k.isIntermediateSum?a[h]=r(g):(n+=q,g+=q),f=Math.min(n,f),l=Math.max(n,l);m.prototype.processData.call(this,b);this.options.stacking||(this.dataMin=f,this.dataMax=l)},toYData:function(b){return b.isSum?0===b.x?null:"sum":b.isIntermediateSum?0===b.x?null:"intermediateSum":b.y},pointAttribs:function(b,a){var d=this.options.upColor;d&&!b.options.color&&(b.color=0<b.y?d:null);b=h.column.prototype.pointAttribs.call(this,
b,a);delete b.dashstyle;return b},getGraphPath:function(){return["M",0,0]},getCrispPath:function(){var b=this.data,a=b.length,e=this.graph.strokeWidth()+this.borderWidth,e=Math.round(e)%2/2,f=this.yAxis.reversed,c=[],g,n,u;for(u=1;u<a;u++){n=b[u].shapeArgs;g=b[u-1].shapeArgs;n=["M",g.x+g.width,g.y+b[u-1].minPointLengthOffset+e,"L",n.x,g.y+b[u-1].minPointLengthOffset+e];if(0>b[u-1].y&&!f||0<b[u-1].y&&f)n[2]+=g.height,n[5]+=g.height;c=c.concat(n)}return c},drawGraph:function(){m.prototype.drawGraph.call(this);
this.graph.attr({d:this.getCrispPath()})},setStackedPoints:function(){var b=this.options,a,e;m.prototype.setStackedPoints.apply(this,arguments);a=this.stackedYData?this.stackedYData.length:0;for(e=1;e<a;e++)b.data[e].isSum||b.data[e].isIntermediateSum||(this.stackedYData[e]+=this.stackedYData[e-1])},getExtremes:function(){if(this.options.stacking)return m.prototype.getExtremes.apply(this,arguments)}},{getClassName:function(){var b=p.prototype.getClassName.call(this);this.isSum?b+=" highcharts-sum":
this.isIntermediateSum&&(b+=" highcharts-intermediate-sum");return b},isValid:function(){return t(this.y,!0)||this.isSum||this.isIntermediateSum}})})(v);(function(a){var r=a.Series,t=a.seriesType,v=a.seriesTypes;t("polygon","scatter",{marker:{enabled:!1,states:{hover:{enabled:!1}}},stickyTracking:!1,tooltip:{followPointer:!0,pointFormat:""},trackByArea:!0},{type:"polygon",getGraphPath:function(){for(var a=r.prototype.getGraphPath.call(this),m=a.length+1;m--;)(m===a.length||"M"===a[m])&&0<m&&a.splice(m,
0,"z");return this.areaPath=a},drawGraph:function(){this.options.fillColor=this.color;v.area.prototype.drawGraph.call(this)},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawTracker:r.prototype.drawTracker,setStackedPoints:a.noop})})(v);(function(a){var r=a.arrayMax,t=a.arrayMin,v=a.Axis,p=a.color,m=a.each,f=a.isNumber,h=a.noop,b=a.pick,d=a.pInt,e=a.Point,k=a.Series,c=a.seriesType,g=a.seriesTypes;c("bubble","scatter",{dataLabels:{formatter:function(){return this.point.z},inside:!0,verticalAlign:"middle"},
marker:{lineColor:null,lineWidth:1,radius:null,states:{hover:{radiusPlus:0}},symbol:"circle"},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],specialGroup:"group",bubblePadding:!0,zoneAxis:"z",directTouch:!0,pointAttribs:function(a,c){var d=b(this.options.marker.fillOpacity,
.5);a=k.prototype.pointAttribs.call(this,a,c);1!==d&&(a.fill=p(a.fill).setOpacity(d).get("rgba"));return a},getRadii:function(b,a,c,d){var g,e,f,n=this.zData,k=[],l=this.options,q="width"!==l.sizeBy,h=l.zThreshold,m=a-b;e=0;for(g=n.length;e<g;e++)f=n[e],l.sizeByAbsoluteValue&&null!==f&&(f=Math.abs(f-h),a=Math.max(a-h,Math.abs(b-h)),b=0),null===f?f=null:f<b?f=c/2-1:(f=0<m?(f-b)/m:.5,q&&0<=f&&(f=Math.sqrt(f)),f=Math.ceil(c+f*(d-c))/2),k.push(f);this.radii=k},animate:function(b){var a=this.options.animation;
b||(m(this.points,function(b){var c=b.graphic,d;c&&c.width&&(d={x:c.x,y:c.y,width:c.width,height:c.height},c.attr({x:b.plotX,y:b.plotY,width:1,height:1}),c.animate(d,a))}),this.animate=null)},translate:function(){var b,c=this.data,d,e,k=this.radii;g.scatter.prototype.translate.call(this);for(b=c.length;b--;)d=c[b],e=k?k[b]:0,f(e)&&e>=this.minPxSize/2?(d.marker=a.extend(d.marker,{radius:e,width:2*e,height:2*e}),d.dlBox={x:d.plotX-e,y:d.plotY-e,width:2*e,height:2*e}):d.shapeArgs=d.plotY=d.dlBox=void 0},
alignDataLabel:g.column.prototype.alignDataLabel,buildKDTree:h,applyZones:h},{haloPath:function(b){return e.prototype.haloPath.call(this,0===b?0:(this.marker?this.marker.radius||0:0)+b)},ttBelow:!1});v.prototype.beforePadding=function(){var a=this,c=this.len,e=this.chart,g=0,k=c,h=this.isXAxis,p=h?"xData":"yData",v=this.min,w={},D=Math.min(e.plotWidth,e.plotHeight),A=Number.MAX_VALUE,E=-Number.MAX_VALUE,F=this.max-v,B=c/F,G=[];m(this.series,function(c){var g=c.options;!c.bubblePadding||!c.visible&&
e.options.chart.ignoreHiddenSeries||(a.allowZoomOutside=!0,G.push(c),h&&(m(["minSize","maxSize"],function(b){var a=g[b],c=/%$/.test(a),a=d(a);w[b]=c?D*a/100:a}),c.minPxSize=w.minSize,c.maxPxSize=Math.max(w.maxSize,w.minSize),c=c.zData,c.length&&(A=b(g.zMin,Math.min(A,Math.max(t(c),!1===g.displayNegative?g.zThreshold:-Number.MAX_VALUE))),E=b(g.zMax,Math.max(E,r(c))))))});m(G,function(b){var c=b[p],d=c.length,e;h&&b.getRadii(A,E,b.minPxSize,b.maxPxSize);if(0<F)for(;d--;)f(c[d])&&a.dataMin<=c[d]&&c[d]<=
a.dataMax&&(e=b.radii[d],g=Math.min((c[d]-v)*B-e,g),k=Math.max((c[d]-v)*B+e,k))});G.length&&0<F&&!this.isLog&&(k-=c,B*=(c+g-k)/c,m([["min","userMin",g],["max","userMax",k]],function(c){void 0===b(a.options[c[0]],a[c[1]])&&(a[c[0]]+=c[2]/B)}))}})(v);(function(a){function r(b,a){var d=this.chart,f=this.options.animation,c=this.group,g=this.markerGroup,n=this.xAxis.center,h=d.plotLeft,l=d.plotTop;d.polar?d.renderer.isSVG&&(!0===f&&(f={}),a?(b={translateX:n[0]+h,translateY:n[1]+l,scaleX:.001,scaleY:.001},
c.attr(b),g&&g.attr(b)):(b={translateX:h,translateY:l,scaleX:1,scaleY:1},c.animate(b,f),g&&g.animate(b,f),this.animate=null)):b.call(this,a)}var t=a.each,v=a.pick,p=a.seriesTypes,m=a.wrap,f=a.Series.prototype,h=a.Pointer.prototype;f.searchPointByAngle=function(b){var a=this.chart,e=this.xAxis.pane.center;return this.searchKDTree({clientX:180+-180/Math.PI*Math.atan2(b.chartX-e[0]-a.plotLeft,b.chartY-e[1]-a.plotTop)})};f.getConnectors=function(b,a,e,f){var c,d,k,h,l,m,p,r;d=f?1:0;c=0<=a&&a<=b.length-
1?a:0>a?b.length-1+a:0;a=0>c-1?b.length-(1+d):c-1;d=c+1>b.length-1?d:c+1;k=b[a];d=b[d];h=k.plotX;k=k.plotY;l=d.plotX;m=d.plotY;d=b[c].plotX;c=b[c].plotY;h=(1.5*d+h)/2.5;k=(1.5*c+k)/2.5;l=(1.5*d+l)/2.5;p=(1.5*c+m)/2.5;m=Math.sqrt(Math.pow(h-d,2)+Math.pow(k-c,2));r=Math.sqrt(Math.pow(l-d,2)+Math.pow(p-c,2));h=Math.atan2(k-c,h-d);p=Math.PI/2+(h+Math.atan2(p-c,l-d))/2;Math.abs(h-p)>Math.PI/2&&(p-=Math.PI);h=d+Math.cos(p)*m;k=c+Math.sin(p)*m;l=d+Math.cos(Math.PI+p)*r;p=c+Math.sin(Math.PI+p)*r;d={rightContX:l,
rightContY:p,leftContX:h,leftContY:k,plotX:d,plotY:c};e&&(d.prevPointCont=this.getConnectors(b,a,!1,f));return d};m(f,"buildKDTree",function(b){this.chart.polar&&(this.kdByAngle?this.searchPoint=this.searchPointByAngle:this.options.findNearestPointBy="xy");b.apply(this)});f.toXY=function(b){var a,e=this.chart,f=b.plotX;a=b.plotY;b.rectPlotX=f;b.rectPlotY=a;a=this.xAxis.postTranslate(b.plotX,this.yAxis.len-a);b.plotX=b.polarPlotX=a.x-e.plotLeft;b.plotY=b.polarPlotY=a.y-e.plotTop;this.kdByAngle?(e=
(f/Math.PI*180+this.xAxis.pane.options.startAngle)%360,0>e&&(e+=360),b.clientX=e):b.clientX=b.plotX};p.spline&&(m(p.spline.prototype,"getPointSpline",function(a,d,e,f){this.chart.polar?f?(a=this.getConnectors(d,f,!0,this.connectEnds),a=["C",a.prevPointCont.rightContX,a.prevPointCont.rightContY,a.leftContX,a.leftContY,a.plotX,a.plotY]):a=["M",e.plotX,e.plotY]:a=a.call(this,d,e,f);return a}),p.areasplinerange&&(p.areasplinerange.prototype.getPointSpline=p.spline.prototype.getPointSpline));m(f,"translate",
function(a){var b=this.chart;a.call(this);if(b.polar&&(this.kdByAngle=b.tooltip&&b.tooltip.shared,!this.preventPostTranslate))for(a=this.points,b=a.length;b--;)this.toXY(a[b])});m(f,"getGraphPath",function(a,d){var b=this,f,c,g;if(this.chart.polar){d=d||this.points;for(f=0;f<d.length;f++)if(!d[f].isNull){c=f;break}!1!==this.options.connectEnds&&void 0!==c&&(this.connectEnds=!0,d.splice(d.length,0,d[c]),g=!0);t(d,function(a){void 0===a.polarPlotY&&b.toXY(a)})}f=a.apply(this,[].slice.call(arguments,
1));g&&d.pop();return f});m(f,"animate",r);p.column&&(p=p.column.prototype,p.polarArc=function(a,d,e,f){var b=this.xAxis.center,g=this.yAxis.len;return this.chart.renderer.symbols.arc(b[0],b[1],g-d,null,{start:e,end:f,innerR:g-v(a,g)})},m(p,"animate",r),m(p,"translate",function(a){var b=this.xAxis,e=b.startAngleRad,f,c,g;this.preventPostTranslate=!0;a.call(this);if(b.isRadial)for(f=this.points,g=f.length;g--;)c=f[g],a=c.barX+e,c.shapeType="path",c.shapeArgs={d:this.polarArc(c.yBottom,c.plotY,a,a+
c.pointWidth)},this.toXY(c),c.tooltipPos=[c.plotX,c.plotY],c.ttBelow=c.plotY>b.center[1]}),m(p,"alignDataLabel",function(a,d,e,k,c,g){this.chart.polar?(a=d.rectPlotX/Math.PI*180,null===k.align&&(k.align=20<a&&160>a?"left":200<a&&340>a?"right":"center"),null===k.verticalAlign&&(k.verticalAlign=45>a||315<a?"bottom":135<a&&225>a?"top":"middle"),f.alignDataLabel.call(this,d,e,k,c,g)):a.call(this,d,e,k,c,g)}));m(h,"getCoordinates",function(a,d){var b=this.chart,f={xAxis:[],yAxis:[]};b.polar?t(b.axes,function(a){var c=
a.isXAxis,e=a.center,h=d.chartX-e[0]-b.plotLeft,e=d.chartY-e[1]-b.plotTop;f[c?"xAxis":"yAxis"].push({axis:a,value:a.translate(c?Math.PI-Math.atan2(h,e):Math.sqrt(Math.pow(h,2)+Math.pow(e,2)),!0)})}):f=a.call(this,d);return f});m(a.Chart.prototype,"getAxes",function(b){this.pane||(this.pane=[]);t(a.splat(this.options.pane),function(b){new a.Pane(b,this)},this);b.call(this)});m(a.Chart.prototype,"drawChartBox",function(a){a.call(this);t(this.pane,function(a){a.render()})});m(a.Chart.prototype,"get",
function(b,d){return a.find(this.pane,function(a){return a.options.id===d})||b.call(this,d)})})(v)});


/***/ }),

/***/ 445:
/***/ (function(module, exports) {

/*
 Highcharts JS v5.0.12 (2017-05-24)
 Exporting module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:k(Highcharts)})(function(k){(function(f){var k=f.defaultOptions,p=f.doc,A=f.Chart,w=f.addEvent,I=f.removeEvent,E=f.fireEvent,t=f.createElement,B=f.discardElement,v=f.css,n=f.merge,C=f.pick,h=f.each,F=f.objectEach,u=f.extend,J=f.isTouchDevice,D=f.win,G=D.navigator.userAgent,K=f.Renderer.prototype.symbols;/Edge\/|Trident\/|MSIE /.test(G);/firefox/i.test(G);u(k.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",
downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});k.navigation={buttonOptions:{theme:{},symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24}};n(!0,k.navigation,{menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",background:"none",color:"#333333",fontSize:J?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",
color:"#ffffff"},buttonOptions:{symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{fill:"#ffffff",stroke:"none",padding:5}}});k.exporting={type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",_titleKey:"contextButtonTitle",menuItems:[{textKey:"printChart",onclick:function(){this.print()}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChart()}},
{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}]}}};f.post=function(a,b,e){var c=t("form",n({method:"post",action:a,enctype:"multipart/form-data"},e),{display:"none"},p.body);F(b,function(a,b){t("input",{type:"hidden",name:b,value:a},null,c)});c.submit();B(c)};u(A.prototype,{sanitizeSVG:function(a,
b){if(b&&b.exporting&&b.exporting.allowHTML){var e=a.match(/<\/svg>(.*?$)/);e&&e[1]&&(e='\x3cforeignObject x\x3d"0" y\x3d"0" width\x3d"'+b.chart.width+'" height\x3d"'+b.chart.height+'"\x3e\x3cbody xmlns\x3d"http://www.w3.org/1999/xhtml"\x3e'+e[1]+"\x3c/body\x3e\x3c/foreignObject\x3e",a=a.replace("\x3c/svg\x3e",e+"\x3c/svg\x3e"))}a=a.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g,
"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'\x3csvg xmlns:xlink\x3d"http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g," xlink:href\x3d").replace(/\n/," ").replace(/<\/svg>.*?$/,"\x3c/svg\x3e").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1\x3d"rgb($2)" $1-opacity\x3d"$3"').replace(/&nbsp;/g,"\u00a0").replace(/&shy;/g,"\u00ad");return a=a.replace(/<IMG /g,"\x3cimage ").replace(/<(\/?)TITLE>/g,"\x3c$1title\x3e").replace(/height=([^" ]+)/g,
'height\x3d"$1"').replace(/width=([^" ]+)/g,'width\x3d"$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href\x3d"$1"/\x3e').replace(/ id=([^" >]+)/g,' id\x3d"$1"').replace(/class=([^" >]+)/g,'class\x3d"$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(a){return a.toLowerCase()})},getChartHTML:function(){return this.container.innerHTML},getSVG:function(a){var b,e,c,r,m,g=n(this.options,a);p.createElementNS||(p.createElementNS=function(a,b){return p.createElement(b)});
e=t("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},p.body);c=this.renderTo.style.width;m=this.renderTo.style.height;c=g.exporting.sourceWidth||g.chart.width||/px$/.test(c)&&parseInt(c,10)||600;m=g.exporting.sourceHeight||g.chart.height||/px$/.test(m)&&parseInt(m,10)||400;u(g.chart,{animation:!1,renderTo:e,forExport:!0,renderer:"SVGRenderer",width:c,height:m});g.exporting.enabled=!1;delete g.data;g.series=[];h(this.series,function(a){r=n(a.userOptions,
{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible});r.isInternal||g.series.push(r)});h(this.axes,function(a){a.userOptions.internalKey||(a.userOptions.internalKey=f.uniqueKey())});b=new f.Chart(g,this.callback);a&&h(["xAxis","yAxis","series"],function(c){var d={};a[c]&&(d[c]=a[c],b.update(d))});h(this.axes,function(a){var c=f.find(b.axes,function(b){return b.options.internalKey===a.userOptions.internalKey}),d=a.getExtremes(),e=d.userMin,d=d.userMax;!c||void 0===e&&void 0===d||
c.setExtremes(e,d,!0,!1)});c=b.getChartHTML();c=this.sanitizeSVG(c,g);g=null;b.destroy();B(e);return c},getSVGForExport:function(a,b){var e=this.options.exporting;return this.getSVG(n({chart:{borderRadius:0}},e.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||e.sourceWidth,sourceHeight:a&&a.sourceHeight||e.sourceHeight}}))},exportChart:function(a,b){b=this.getSVGForExport(a,b);a=n(this.options.exporting,a);f.post(a.url,{filename:a.filename||"chart",type:a.type,width:a.width||0,scale:a.scale,
svg:b},a.formAttributes)},print:function(){var a=this,b=a.container,e=[],c=b.parentNode,f=p.body,m=f.childNodes,g=a.options.exporting.printMaxWidth,d,H;if(!a.isPrinting){a.isPrinting=!0;a.pointer.reset(null,0);E(a,"beforePrint");if(H=g&&a.chartWidth>g)d=[a.options.chart.width,void 0,!1],a.setSize(g,void 0,!1);h(m,function(a,b){1===a.nodeType&&(e[b]=a.style.display,a.style.display="none")});f.appendChild(b);D.focus();D.print();setTimeout(function(){c.appendChild(b);h(m,function(a,b){1===a.nodeType&&
(a.style.display=e[b])});a.isPrinting=!1;H&&a.setSize.apply(a,d);E(a,"afterPrint")},1E3)}},contextMenu:function(a,b,e,c,f,m,g){var d=this,r=d.options.navigation,k=d.chartWidth,q=d.chartHeight,n="cache-"+a,l=d[n],x=Math.max(f,m),y,z;l||(d[n]=l=t("div",{className:a},{position:"absolute",zIndex:1E3,padding:x+"px"},d.container),y=t("div",{className:"highcharts-menu"},null,l),v(y,u({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},r.menuStyle)),z=function(){v(l,
{display:"none"});g&&g.setState(0);d.openMenu=!1},d.exportEvents.push(w(l,"mouseleave",function(){l.hideTimer=setTimeout(z,500)}),w(l,"mouseenter",function(){clearTimeout(l.hideTimer)}),w(p,"mouseup",function(b){d.pointer.inClass(b.target,a)||z()})),h(b,function(a){if(a){var b;a.separator?b=t("hr",null,null,y):(b=t("div",{className:"highcharts-menu-item",onclick:function(b){b&&b.stopPropagation();z();a.onclick&&a.onclick.apply(d,arguments)},innerHTML:a.text||d.options.lang[a.textKey]},null,y),b.onmouseover=
function(){v(this,r.menuItemHoverStyle)},b.onmouseout=function(){v(this,r.menuItemStyle)},v(b,u({cursor:"pointer"},r.menuItemStyle)));d.exportDivElements.push(b)}}),d.exportDivElements.push(y,l),d.exportMenuWidth=l.offsetWidth,d.exportMenuHeight=l.offsetHeight);b={display:"block"};e+d.exportMenuWidth>k?b.right=k-e-f-x+"px":b.left=e-x+"px";c+m+d.exportMenuHeight>q&&"top"!==g.alignOptions.verticalAlign?b.bottom=q-c-x+"px":b.top=c+m-x+"px";v(l,b);d.openMenu=!0},addButton:function(a){var b=this,e=b.renderer,
c=n(b.options.navigation.buttonOptions,a),f=c.onclick,m=c.menuItems,g,d,k=c.symbolSize||12;b.btnCount||(b.btnCount=0);b.exportDivElements||(b.exportDivElements=[],b.exportSVGElements=[]);if(!1!==c.enabled){var h=c.theme,q=h.states,p=q&&q.hover,q=q&&q.select,l;delete h.states;f?l=function(a){a.stopPropagation();f.call(b,a)}:m&&(l=function(){b.contextMenu(d.menuClassName,m,d.translateX,d.translateY,d.width,d.height,d);d.setState(2)});c.text&&c.symbol?h.paddingLeft=C(h.paddingLeft,25):c.text||u(h,{width:c.width,
height:c.height,padding:0});d=e.button(c.text,0,0,l,h,p,q).addClass(a.className).attr({"stroke-linecap":"round",title:b.options.lang[c._titleKey],zIndex:3});d.menuClassName=a.menuClassName||"highcharts-menu-"+b.btnCount++;c.symbol&&(g=e.symbol(c.symbol,c.symbolX-k/2,c.symbolY-k/2,k,k).addClass("highcharts-button-symbol").attr({zIndex:1}).add(d),g.attr({stroke:c.symbolStroke,fill:c.symbolFill,"stroke-width":c.symbolStrokeWidth||1}));d.add().align(u(c,{width:d.width,x:C(c.x,b.buttonOffset)}),!0,"spacingBox");
b.buttonOffset+=(d.width+c.buttonSpacing)*("right"===c.align?-1:1);b.exportSVGElements.push(d,g)}},destroyExport:function(a){var b=a?a.target:this;a=b.exportSVGElements;var e=b.exportDivElements,c=b.exportEvents,f;a&&(h(a,function(a,c){a&&(a.onclick=a.ontouchstart=null,f="cache-"+a.menuClassName,b[f]&&delete b[f],b.exportSVGElements[c]=a.destroy())}),a.length=0);e&&(h(e,function(a,c){clearTimeout(a.hideTimer);I(a,"mouseleave");b.exportDivElements[c]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=
null;B(a)}),e.length=0);c&&(h(c,function(a){a()}),c.length=0)}});K.menu=function(a,b,e,c){return["M",a,b+2.5,"L",a+e,b+2.5,"M",a,b+c/2+.5,"L",a+e,b+c/2+.5,"M",a,b+c-1.5,"L",a+e,b+c-1.5]};A.prototype.renderExporting=function(){var a=this,b=a.options.exporting,e=b.buttons,c=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0;a.isDirtyExporting&&a.destroyExport();c&&!1!==b.enabled&&(a.exportEvents=[],F(e,function(b){a.addButton(b)}),a.isDirtyExporting=!1);w(a,"destroy",a.destroyExport)};A.prototype.callbacks.push(function(a){a.renderExporting();
w(a,"redraw",a.renderExporting);h(["exporting","navigation"],function(b){a[b]={update:function(e,c){a.isDirtyExporting=!0;n(!0,a.options[b],e);C(c,!0)&&a.redraw()}}})})})(k)});


/***/ }),

/***/ 446:
/***/ (function(module, exports) {

/*
  Highcharts JS v5.0.12 (2017-05-24)
 Solid angular gauge module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(l){"object"===typeof module&&module.exports?module.exports=l:l(Highcharts)})(function(l){(function(e){var l=e.pInt,u=e.pick,m=e.each,r=e.isNumber,w=e.wrap,v;w(e.Renderer.prototype.symbols,"arc",function(a,f,d,c,e,b){a=a(f,d,c,e,b);b.rounded&&(c=((b.r||c)-b.innerR)/2,b=["A",c,c,0,1,1,a[12],a[13]],a.splice.apply(a,[a.length-1,0].concat(["A",c,c,0,1,1,a[1],a[2]])),a.splice.apply(a,[11,3].concat(b)));return a});v={initDataClasses:function(a){var f=this.chart,d,c=0,t=this.options;this.dataClasses=
d=[];m(a.dataClasses,function(b,h){b=e.merge(b);d.push(b);b.color||("category"===t.dataClassColor?(h=f.options.colors,b.color=h[c++],c===h.length&&(c=0)):b.color=e.color(t.minColor).tweenTo(e.color(t.maxColor),h/(a.dataClasses.length-1)))})},initStops:function(a){this.stops=a.stops||[[0,this.options.minColor],[1,this.options.maxColor]];m(this.stops,function(a){a.color=e.color(a[1])})},toColor:function(a,f){var d=this.stops,c,e,b=this.dataClasses,h,g;if(b)for(g=b.length;g--;){if(h=b[g],c=h.from,d=
h.to,(void 0===c||a>=c)&&(void 0===d||a<=d)){e=h.color;f&&(f.dataClass=g);break}}else{this.isLog&&(a=this.val2lin(a));a=1-(this.max-a)/(this.max-this.min);for(g=d.length;g--&&!(a>d[g][0]););c=d[g]||d[g+1];d=d[g+1]||c;a=1-(d[0]-a)/(d[0]-c[0]||1);e=c.color.tweenTo(d.color,a)}return e}};e.seriesType("solidgauge","gauge",{colorByPoint:!0},{translate:function(){var a=this.yAxis;e.extend(a,v);!a.dataClasses&&a.options.dataClasses&&a.initDataClasses(a.options);a.initStops(a.options);e.seriesTypes.gauge.prototype.translate.call(this)},
drawPoints:function(){var a=this,f=a.yAxis,d=f.center,c=a.options,t=a.chart.renderer,b=c.overshoot,h=r(b)?b/180*Math.PI:0,g;r(c.threshold)&&(g=f.startAngleRad+f.translate(c.threshold,null,null,null,!0));this.thresholdAngleRad=u(g,f.startAngleRad);m(a.points,function(b){var g=b.graphic,k=f.startAngleRad+f.translate(b.y,null,null,null,!0),m=l(u(b.options.radius,c.radius,100))*d[2]/200,n=l(u(b.options.innerRadius,c.innerRadius,60))*d[2]/200,p=f.toColor(b.y,b),q=Math.min(f.startAngleRad,f.endAngleRad),
r=Math.max(f.startAngleRad,f.endAngleRad);"none"===p&&(p=b.color||a.color||"none");"none"!==p&&(b.color=p);k=Math.max(q-h,Math.min(r+h,k));!1===c.wrap&&(k=Math.max(q,Math.min(r,k)));q=Math.min(k,a.thresholdAngleRad);k=Math.max(k,a.thresholdAngleRad);k-q>2*Math.PI&&(k=q+2*Math.PI);b.shapeArgs=n={x:d[0],y:d[1],r:m,innerR:n,start:q,end:k,rounded:c.rounded};b.startR=m;g?(b=n.d,g.animate(e.extend({fill:p},n)),b&&(n.d=b)):(b.graphic=t.arc(n).addClass(b.getClassName(),!0).attr({fill:p,"sweep-flag":0}).add(a.group),
"square"!==c.linecap&&b.graphic.attr({"stroke-linecap":"round","stroke-linejoin":"round"}),b.graphic.attr({stroke:c.borderColor||"none","stroke-width":c.borderWidth||0}))})},animate:function(a){a||(this.startAngleRad=this.thresholdAngleRad,e.seriesTypes.pie.prototype.animate.call(this,a))}})})(l)});


/***/ }),

/***/ 448:
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n      <!-- <app-patient-list  [token]=\"token\" -->\n      <app-patient-list [medical_center_id]=\"medical_center_id\"\n                        [allFields]=\"true\">\n                        <!-- not necessary in this list component -->\n                        <!-- (onSelect)=\"patientSelected($event)\"> -->\n      </app-patient-list>\n    </div> \n\n   </div> \n</div>\n"

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

module.exports = "\n<nav id=\"topNav\" class=\"navbar navbar-toggleable-sm navbar-fixed-top border-bottom\">\n<!-- <nav id=\"topNav\" class=\"navbar-default navbar-toggleable-sm fixed-top\"> -->\n    <div class=\"container\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsingNavbar\">\n            ☰\n        </button>\n        <a class=\"navbar-brand page-scroll mr-3\" \n           routerLink=\"./\" \n           routerLinkActive=\"active\" \n           [routerLinkActiveOptions]=\"{ exact: true }\">Gaitcome</a>\n        <div class=\"collapse navbar-collapse\" id=\"collapsingNavbar\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link page-scroll pr-3\" \n                       routerLink=\"./\" \n                       routerLinkActive=\"active\" \n                       [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link page-scroll pr-3\" \n                       routerLink=\"./attorney-list\" \n                       routerLinkActive=\"active\">Patients</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link page-scroll pr-3\" \n                       routerLink=\"./therapist-list\" \n                       routerLinkActive=\"active\">Therapist</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link page-scroll pr-3\" \n                       routerLink=\"./result-list\" \n                       routerLinkActive=\"active\">Results</a>\n                </li>\n            </ul>\n            <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link page-scroll\" data-toggle=\"modal\"\n                  title=\"A free Bootstrap theme\"\n                  href=\"#aboutModal\">Log out</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link page-scroll\" data-toggle=\"modal\"\n                  title=\"A free Bootstrap theme\"\n                  href=\"#alertModal\">{{medical_center_name}}</a>\n              </li>\n            </ul>\n        </div>\n      </div>\n  </nav>\n<!-- <nav id=\"topNav\" class=\"navbar navbar-default navbar-fixed-top border-bottom\">\n    <div class=\"container\">\n      <button class=\"navbar-toggler hidden-md-up pull-right\"\n              type=\"button\" data-toggle=\"collapse\"\n              data-target=\"#collapsingNavbar\">\n              ☰</button>\n\n      <a class=\"navbar-brand page-scroll\" \n         routerLink=\"./\" \n         routerLinkActive=\"active\" \n         [routerLinkActiveOptions]=\"{ exact: true }\">Gaitcome</a>\n\n      <div class=\"collapse navbar-toggleable-sm\"\n           id=\"collapsingNavbar\">\n        <div class=\"row\">\n          <div class=\"col\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link page-scroll\" \n                 routerLink=\"./\" \n                 routerLinkActive=\"active\" \n                 [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link page-scroll\" \n                 routerLink=\"./attorney-list\" \n                 routerLinkActive=\"active\">Patients</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link page-scroll\" \n                 routerLink=\"./therapist-list\" \n                 routerLinkActive=\"active\">Therapist</a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link page-scroll\" \n                 routerLink=\"./result-list\" \n                 routerLinkActive=\"active\">Results</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col\">\n          <ul class=\"nav justify-content-end\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link page-scroll\" data-toggle=\"modal\"\n                title=\"A free Bootstrap theme\"\n                href=\"#aboutModal\">☰</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link page-scroll\" data-toggle=\"modal\"\n                title=\"A free Bootstrap theme\"\n                href=\"#alertModal\">{{medical_center_name}}</a>\n            </li>\n          </ul>\n        </div>\n        </div>\n      </div>\n    </div>\n  </nav> -->\n\n  <!-- Modals from template -->\n    <div id=\"aboutModal\" class=\"modal fade\" tabindex=\"-1\"\n    role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body text-xs-center\">\n          <h2 class=\"text-xs-center\">Bootstrap 4 Theme</h2>\n          <h6 class=\"text-xs-center\">A free, responsive template</h6>\n          <p class=\"text-xs-center\">\n            This is a customized, single page example\n            template that demonstrates some\n            of the new features to check\n            out in Bootstrap 4. Some of the\n            features include Google Montserrat\n            fonts, animation using Dan Eden's\n            animate.css and the WOW jQuery\n            plugin to watch the scrolling.\n          </p>\n          <p class=\"text-xs-center\"><a href=\"http://www.codeply.com/download/kNmg5E60WS\">Download</a></p>\n          <br>\n          <button class=\"btn btn-primary btn-lg\" data-dismiss=\"modal\"\n            aria-hidden=\"true\"> OK </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"alertModal\" class=\"modal fade\" tabindex=\"-1\"\n    role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body text-xs-center\">\n          <!-- <add-therapist></add-therapist> -->\n          <app-patient-add></app-patient-add>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <router-outlet></router-outlet>\n\n\n<!-- <a class=\"mdl-navigation__link\" routerLink=\"./\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard</a>\n <a class=\"mdl-navigation__link\" routerLink=\"./attorney-list\" routerLinkActive=\"active\">Manage Attorney</a>\n <a class=\"mdl-navigation__link\" routerLink=\"./therapist-list\" routerLinkActive=\"active\">Manage therapist</a>\n <a class=\"mdl-navigation__link\" routerLink=\"../dashboard-attorney\" routerLinkActive=\"active\">To attorney dashboard</a> -->"

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\n<div class=\"margin-container\">\n\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <div class=\"card\">\n\n          <div class=\"card-header\" data-background-color=\"red\">\n            <p class=\"category\">Entrada</p>\n          </div>\n\n          <div class=\"card-content\">\n\n            <mdl-list>\n              <mdl-list-item lines=\"3\" mdl-ripple>\n                <mdl-list-item-primary-content>\n                  <mdl-icon mdl-list-item-avatar>supervisor_account</mdl-icon>\n                  <span>Terapeutas</span>\n                  <mdl-list-item-text-body>\n                    <a >\n                      <span mdl-badge=\"10\">Confirmación ingreso</span>\n                    </a>\n                  </mdl-list-item-text-body>\n                </mdl-list-item-primary-content>\n                <!-- <mdl-list-item-secondary-content>\n                  <a href=\"#\">\n                    <span mdl-badge=\"4\">Confirmación de ingreso a centro médico</span>\n                  </a>\n                </mdl-list-item-secondary-content> -->\n              </mdl-list-item>\n              <mdl-list-item lines=\"3\">\n                <mdl-list-item-primary-content>\n                  <mdl-icon mdl-list-item-avatar>accessible</mdl-icon>\n                  <span>Pacientes</span>\n                    <mdl-list-item-text-body>\n                      <a >\n                        <span mdl-badge=\"4\">Visisbilidad de resultados</span>\n                      </a>\n                    </mdl-list-item-text-body>\n                </mdl-list-item-primary-content>\n                <!-- <mdl-list-item-secondary-content>\n                  <a href=\"#\">\n                    <span mdl-badge=\"4\">Solicitud de visisbilidad de resultados</span>\n                    <mdl-icon>star</mdl-icon>\n                  </a>\n                </mdl-list-item-secondary-content> -->\n              </mdl-list-item>\n             \n              <!-- <mdl-list-item lines=\"3\">\n                <mdl-list-item-primary-content>\n                  <mdl-icon mdl-list-item-avatar>person</mdl-icon>\n                  <span>Bob Odenkirk</span>\n                  <mdl-list-item-text-body>\n                    Bob Odinkrik played the role of Saul in Breaking\n                    Bad. Due to public fondness\n                    for the character, Bob stars\n                    in his own show now, called\n                    \"Better Call Saul\".\n                  </mdl-list-item-text-body>\n                </mdl-list-item-primary-content>\n                <mdl-list-item-secondary-content>\n                  <a href=\"#\">\n                    <mdl-icon>star</mdl-icon>\n                  </a>\n                </mdl-list-item-secondary-content>\n              </mdl-list-item> -->\n            </mdl-list>\n\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-7\">\n        <div class=\"card\">\n\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h5 class=\"title\"></h5>\n            <p class=\"category\">Detalles de entrada</p>\n          </div>\n\n\n          <div class=\"card-content\">\n            <mdl-list-item lines=\"3\">\n              <mdl-list-item-primary-content>\n                <mdl-icon mdl-list-item-avatar>timeline</mdl-icon>\n                <span>Analisis cinematicos</span>\n                <mdl-list-item-text-body>\n                  <a >\n                    <span mdl-badge=\"4\">Esta semana</span>\n                  </a>\n                  <a >\n                    <span mdl-badge=\"1\">Este mes</span>\n                  </a>            \n                </mdl-list-item-text-body>\n              </mdl-list-item-primary-content>\n            <!--   <mdl-list-item-secondary-content>\n                <a href=\"#\">\n                  <mdl-icon>star</mdl-icon>\n                </a>\n              </mdl-list-item-secondary-content> -->\n            </mdl-list-item>\n\n\n            \n\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ 451:
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-container\">\n\n  \n  <div class=\"container-fluid\">\n        <div *ngIf=\"currentKinematicsAnalysis\">\n          \n          <div class=\"collapse\" id=\"collapseVideo\">\n              <!-- <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/0qLblUty41c\" frameborder=\"0\" allowfullscreen></iframe> -->\n              <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qxi-cBG71Ho?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>\n          </div>\n        </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row result-section\">\n      \n\n      <div class=\"col-md-5 push-md-3 result-table-section\">\n        <app-result-list [token]=\"token\"\n                         [medical_center_id]=\"medical_center_id\"\n                         [therapist_id]=\"currentTherapist\" \n                         [patient_id]=\"currentPatient\" \n                         [headersOptions]=\"optionsHeader\" \n                         (onSelect)=\"kinematicAnalysisSelected($event)\"\n                         (onMultipleSelect)=\"multipleKinematicAnalysisSelected($event)\">\n        </app-result-list> \n      </div>\n\n      <div class=\"col-md-3 pull-md-5\">\n      \n        <div class=\"row\">\n          <div class=\"col\">\n              <div class=\"roww field-group\">\n                <h4 data-toggle=\"collapse\" href=\"#collapsePatientList\" aria-expanded=\"true\" aria-controls=\"collapsePatientList\">\n                  Patients\n                </h4>\n                <mdl-icon class=\"col-xs-2 icon material-icons\"  \n                           data-toggle=\"collapse\" href=\"#collapsePatientList\" aria-expanded=\"true\" aria-controls=\"collapsePatientList\">keyboard_arrow_down</mdl-icon>\n              </div>\n              <div class=\"collapse\" id=\"collapsePatientList\">\n                  <app-patient-list [medical_center_id]=\"medical_center_id\"\n                                    [allFields]=\"false\"\n                                    (onSelect)=\"patientSelected($event)\">\n                  </app-patient-list>\n              </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"roww field-group\">\n              <h4 data-toggle=\"collapse\" href=\"#collapseTherapistList\" aria-expanded=\"true\" aria-controls=\"collapseTherapistList\">\n                Therapists\n              </h4>\n              <mdl-icon  class=\"col-xs-2  icon material-icons\" \n                         data-toggle=\"collapse\" href=\"#collapseTherapistList\" aria-expanded=\"true\" aria-controls=\"collapseTherapistList\">keyboard_arrow_down</mdl-icon>\n            </div>             \n            <div class=\"collapse\" id=\"collapseTherapistList\">\n                <app-therapist-list [medical_center_id]=\"medical_center_id\"\n                                    [allFields]=\"false\"\n                                    (onSelect)=\"therapistSelected($event)\">\n                </app-therapist-list>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4\">\n        <div *ngIf=\"currentKinematicsAnalysis\">\n          \n          <div class=\"collapse\" id=\"collapseVideo\">\n              <iframe class=\"video-section\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/0qLblUty41c\" frameborder=\"0\" allowfullscreen></iframe>\n          </div>\n          <div class=\"result-details-section\">\n\n            <div class=\"row\">\n                                  \n              <app-result-preview [kinematicsAnalysis]=\"currentKinematicsAnalysis\"\n                                  [patient]=\"currentPatient\"\n                                  [therapist]=\"currentTherapist\">\n              </app-result-preview>   \n            </div>\n            \n            <div class=\"row\">\n              <button type=\"button\" \n                      class=\"btn btn-primary btn-sm\" \n                      (click)=\"gotoDetail()\">View graphics</button> \n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"drawer_graphic\">\n      <div *ngIf=\"currentKinematicsAnalysis\">\n      <!-- <div *ngIf=\"blnCurKneAna\"> -->\n        <button mdl-button  mdl-button-type=\"fab\" mdl-colored=\"accent\" mdl-ripple (click)=\"gotoDetail()\">\n            <mdl-icon>timeline</mdl-icon>\n        </button>\n      </div>   \n    </div>\n\n    <div class=\"drawer_video\">\n      <div *ngIf=\"currentKinematicsAnalysis\">\n      <!-- <div *ngIf=\"blnCurKneAna\"> -->\n        <button mdl-button  mdl-button-type=\"fab\" mdl-colored=\"accent\" mdl-ripple \n                data-toggle=\"collapse\" data-target=\"#collapseVideo\" aria-expanded=\"false\" aria-controls=\"collapseVideo\">\n            <mdl-icon>movies</mdl-icon>\n        </button>\n      </div>   \n    </div>\n  </div>\n\n\n</div>\n    \n    \n\n\n    <div *ngIf=\"false\" class=\"row\">\n\n      <!-- Result filter by patient and therapist -->\n      <div class=\"col-md-2\">\n        \n        <!-- Patient list | child component-->\n        <div class=\"row\">\n            <!-- <div class=\"card-block\"> -->\n          <!-- <app-patient-list [token]=\"token\" -->\n          <app-patient-list [medical_center_id]=\"medical_center_id\"\n                            [allFields]=\"false\"\n                            (onSelect)=\"patientSelected($event)\">\n          </app-patient-list>\n            <!-- </div> -->\n        </div>\n        <!-- Therapist list |  child component -->\n        <div class=\"row\">\n          <!-- <div class=\"card-block\"> -->\n          <!-- <app-therapist-list [token]=\"token\" -->\n          <app-therapist-list [medical_center_id]=\"medical_center_id\"\n                              [allFields]=\"false\"\n                              (onSelect)=\"therapistSelected($event)\">\n          </app-therapist-list>\n          <!-- </div> -->\n        </div>\n\n        <div class=\"row\">\n          <h6>Opciones de multi seleccion</h6>\n        </div>  \n      </div>  \n\n      <div class=\"col-md-10\">\n          \n\n          <!-- Show video from selected result -->\n          <div class=\"row\"> \n            <div class=\"col-md-12\">\n              <div class=\"card-block\">\n                <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/0qLblUty41c\" frameborder=\"0\" allowfullscreen></iframe>\n              </div>\n            </div>\n          </div>\n\n          <!-- Result list and result details  -->\n          <div class=\"row\">\n\n              <!-- Result list | child component -->\n              <div class=\"col-md-6\">\n                <div class=\"card-block\">\n                  <app-result-list [token]=\"token\"\n                                   [medical_center_id]=\"medical_center_id\"\n                                   [therapist_id]=\"currentTherapist\" \n                                   [patient_id]=\"currentPatient\" \n                                   [headersOptions]=\"optionsHeader\" \n                                   (onSelect)=\"kinematicAnalysisSelected($event)\"\n                                   (onMultipleSelect)=\"multipleKinematicAnalysisSelected($event)\">\n                  </app-result-list>                              \n              \n                </div>\n              </div>\n\n              <!-- Result Preview | child component -->\n              <div class=\"card-block\">\n                <div class=\"col-md-6\">\n                  <div *ngIf=\"currentKinematicsAnalysis\">\n                    <div class=\"row\">\n                      \n                      <app-result-preview [kinematicsAnalysis]=\"currentKinematicsAnalysis\">\n                      </app-result-preview>   \n                    </div>\n\n                    <div class=\"row\">\n                      <button type=\"button\" \n                              class=\"btn btn-primary btn-sm\" \n                              (click)=\"gotoDetail()\">View graphics</button> \n                    </div>\n                  </div>\n                </div>\n\n              </div>\n          </div>\n          \n      </div>\n\n    </div>\n\n"

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n      <!-- <app-patient-list  [token]=\"token\" -->\n      <app-therapist-list [medical_center_id]=\"medical_center_id\"\n                          [medical_center_name]=\"medical_center_name\"\n                          [allFields]=\"true\">\n                        <!-- not necessary in this list component -->\n                        <!-- (onSelect)=\"patientSelected($event)\"> -->\n      </app-therapist-list>\n      \n    </div> \n\n   </div> \n</div>\n"

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-container \">\n  <div  class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <div class=\"card\">\n\n          <div class=\"card-header\" data-background-color=\"red\">\n            <p class=\"category\">Entrada</p>\n          </div>\n\n          <div class=\"card-content\">\n\n            <mdl-list>\n              <mdl-list-item lines=\"3\" mdl-ripple>\n                <mdl-list-item-primary-content>\n                  <mdl-icon mdl-list-item-avatar>supervisor_account</mdl-icon>\n                  <span>Terapeutas</span>\n                  <mdl-list-item-text-body>\n                    <a>\n                      <span mdl-badge=\"10\">Confirmación ingreso</span>\n                    </a>\n                  </mdl-list-item-text-body>\n                </mdl-list-item-primary-content>\n                <!-- <mdl-list-item-secondary-content>\n                  <a>\n                    <span mdl-badge=\"4\">Confirmación de ingreso a centro médico</span>\n                  </a>\n                </mdl-list-item-secondary-content> -->\n              </mdl-list-item>\n              <mdl-list-item lines=\"3\">\n                <mdl-list-item-primary-content>\n                  <mdl-icon mdl-list-item-avatar>accessible</mdl-icon>\n                  <span>Pacientes</span>\n                    <mdl-list-item-text-body>\n                      <a>\n                        <span mdl-badge=\"4\">Visisbilidad de resultados</span>\n                      </a>\n                    </mdl-list-item-text-body>\n                </mdl-list-item-primary-content>\n                <!-- <mdl-list-item-secondary-content>\n                  <a>\n                    <span mdl-badge=\"4\">Solicitud de visisbilidad de resultados</span>\n                    <mdl-icon>star</mdl-icon>\n                  </a>\n                </mdl-list-item-secondary-content> -->\n              </mdl-list-item>\n              \n              <!-- <mdl-list-item lines=\"3\">\n                <mdl-list-item-primary-content>\n                  <mdl-icon mdl-list-item-avatar>person</mdl-icon>\n                  <span>Bob Odenkirk</span>\n                  <mdl-list-item-text-body>\n                    Bob Odinkrik played the role of Saul in Breaking\n                    Bad. Due to public fondness\n                    for the character, Bob stars\n                    in his own show now, called\n                    \"Better Call Saul\".\n                  </mdl-list-item-text-body>\n                </mdl-list-item-primary-content>\n                <mdl-list-item-secondary-content>\n                  <a>\n                    <mdl-icon>star</mdl-icon>\n                  </a>\n                </mdl-list-item-secondary-content>\n              </mdl-list-item> -->\n            </mdl-list>\n\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-7\">\n        <div class=\"card\">\n\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h5 class=\"title\"></h5>\n            <p class=\"category\">Detalles de entrada</p>\n          </div>\n\n\n          <div class=\"card-content\">\n            <mdl-list>\n              <mdl-list-item lines=\"3\">\n                <mdl-list-item-primary-content>\n                  <mdl-icon mdl-list-item-avatar>timeline</mdl-icon>\n                  <span>Analisis cinematicos</span>\n                  <mdl-list-item-text-body>\n                    <a>\n                      <span mdl-badge=\"4\">Esta semana</span>\n                    </a>\n                    <a >\n                      <span mdl-badge=\"1\">Este mes</span>\n                    </a>            \n                  </mdl-list-item-text-body>\n                </mdl-list-item-primary-content>\n              <!--   <mdl-list-item-secondary-content>\n                  <a>\n                    <mdl-icon>star</mdl-icon>\n                  </a>\n                </mdl-list-item-secondary-content> -->\n              </mdl-list-item>\n            </mdl-list>  \n\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h2 class=\"modal-title\">Patient</h2>\n    <button type=\"button\" class=\"close\" aria-h6=\"Close\" \n            (click)=\"activeModal.close('Close click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n<div class=\"modal-body\">\n    <form [formGroup]=\"form\" class=\"card-group\">\n\n        <div class=\"row\">\n          <div class=\"col-lg\">\n          <!-- Patient -->\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"field-group\">\n                        <div class=\"col-md-3\">\n                            <mdl-icon class=\"mdl_icon_person\">account_circle</mdl-icon>\n                            <!-- <div class=\"add_patient_photo\">\n                              <button mdl-button \n                                      mdl-button-type=\"icon\" \n                                      mdl-colored=\"primary\"\n                                      (click)=\"showAddPatientComponent()\">\n                                <mdl-icon>add_a_photo</mdl-icon>\n                              </button>\n                            </div> -->\n                        </div>\n                        <div class=\"col-9\">\n                            <div class=\"row\">\n                                <mdl-textfield label=\"Nombres\" \n                                               name=\"names\" \n                                               type=\"text\" \n                                               formControlName=\"names\" \n                                               ></mdl-textfield>\n                            </div>\n\n                            <div class=\"row\">\n                                <mdl-textfield label=\"Apellidos\" \n                                               name=\"lastname\" \n                                               type=\"text\" \n                                               formControlName=\"lastName\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n            <!-- Birth and DNI -->\n                <div class=\"col\">\n                    <div class=\"field-group\">\n\n                        <mdl-icon class=\"mdl_icon\">date_range</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"(yyyy-mm-dd)\" \n                                       name=\"birth\" \n                                       pattern=\"-?[0-9.-]*(\\.[0-9.-]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"birth\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n                <!-- <div class=\"col\">\n                    \n                    <div class=\"field-group\">\n                        <form class=\"form-inline\">\n                              <mdl-icon class=\"mdl_icon\" (click)=\"d.toggle()\">date_range</mdl-icon>\n                              <input  placeholder=\"INPUTyyyy-mm-dd\"\n                                      class=\"out\"\n                                      name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n                        </form>\n                        <mdl-textfield  type=\"text\"\n                                       label=\"yyyy-mm-dd\" \n                                       name=\"birth\" \n                                       pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"birth\"\n                                       ></mdl-textfield>\n                      \n                    </div>\n                </div> -->\n                <div class=\"col\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">credit_card</mdl-icon>\n                        <mdl-textfield type=\"text\"\n                                       label=\"DNI\" \n                                       name=\"id_Document_num\" \n                                       pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"id_Document_num\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n            <!--  Address-->\n                <div class=\"col-md-12\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">location_city</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"Direccion\" \n                                       name=\"address_street\" \n                                       formControlName=\"address_street\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>    \n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"City\" \n                                       name=\"address_city\" \n                                       formControlName=\"address_city\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"State\" \n                                       name=\"address_state\" \n                                       formControlName=\"address_state\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">credit_card</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"Zip\" \n                                       name=\"address_zip\" \n                                       pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"address_zip\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">public</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"Country\" \n                                       name=\"address_country\" \n                                       formControlName=\"address_country\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n          </div>\n\n\n          <div class=\"col-lg\">\n          <!-- Attorney -->\n            <h5>Attorney</h5>\n            <div class=\"row\">\n            <!-- Names, lastname -->\n                <div class=\"col\">\n                     <div class=\"field-group\">\n                        <div class=\"col-md-3\">\n                            <mdl-icon class=\"mdl_icon_person\">account_circle</mdl-icon>\n                        </div>\n                        <div class=\"col-9\">\n                            <div class=\"row\">\n                                <mdl-textfield label=\"Nombres\" \n                                               name=\"attorney_names\" \n                                               type=\"text\" \n                                               formControlName=\"attorney_names\" \n                                               ></mdl-textfield>\n                            </div>\n\n                            <div class=\"row\">\n                                <mdl-textfield label=\"Apellidos\" \n                                               name=\"attorney_lastname\" \n                                               type=\"text\" \n                                               formControlName=\"attorney_lastName\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <!-- address -->\n                <div class=\"col\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">group</mdl-icon>\n                        <mdl-textfield label=\"Parentesco\" \n                                       name=\"attorney_relationship\" \n                                       type=\"text\" \n                                       formControlName=\"attorney_relationship\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <!-- phone, cellphone -->\n                <div class=\"col\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">settings_phone</mdl-icon>\n                        <mdl-textfield type=\"text\"\n                                       label=\"Teléfono\" \n                                       name=\"attorney_phone\" \n                                       pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"attorney_phone\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"field-group\">\n\n                        <mdl-icon class=\"mdl_icon\">settings_cell</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"N° de celular\" \n                                       name=\"attorney_cellphone\" \n                                       pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"attorney_cellphone\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <!-- email -->\n                <div class=\"col\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">email</mdl-icon>\n                        <mdl-textfield label=\"Email\" \n                                       name=\"attorney_email\" \n                                       type=\"text\" \n                                       formControlName=\"attorney_email\" \n                                       pattern=\"^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$\" \n                                       error-msg=\"Please provide a correct email!\"\n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n          </div>\n        </div>\n          \n\n        <div class=\"row\">\n          <div class=\"col-lg\">\n          <!-- Medical diagnostic -->\n                <h5>Medical diagnostic</h5>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">content_paste</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                           label=\"Name\" \n                                           name=\"medic_diagostic_name\" \n                                           formControlName=\"medic_diagostic_name\" \n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">poll</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                           label=\"Level\"\n                                           name=\"medic_diagostic_level\" \n                                           formControlName=\"medic_diagostic_level\" \n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">donut_small</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                           label=\"Percentage\" \n                                           name=\"medic_diagostic_percentage\" \n                                           formControlName=\"medic_diagostic_percentage\" \n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    \n    </form>\n\n</div>\n\n<div class=\"modal-footer\">\n    <div class=\"modal-footer__actions\">\n        <button class=\"btn_space\"\n                mdl-button \n                (click)=\"onSubmit()\" [disabled]=\"!form.valid\" \n                mdl-button-type=\"raised\" \n                mdl-ripple mdl-colored=\"primary\"\n                (click)=\"activeModal.close('Close click')\">Crear Cuenta</button>\n        <button class=\"btn_space\"\n                mdl-button \n                (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n<div>{{model}}</div>\n\n</div>\n"

/***/ }),

/***/ 458:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h2 class=\"modal-title\">Delete patient</h2>\n    <button type=\"button\" class=\"close\" aria-h6=\"Close\" \n            (click)=\"activeModal.close('Close click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body text-xs-center\">\n  <h4 class=\"text-center\">Do you want to delete {{names}} {{lastnames}}?</h4>\n</div>\n<div class=\"modal-footer\">\n    <div class=\"modal-footer__actions\">\n        <button class=\"btn_space\"\n                mdl-button \n                mdl-button-type=\"raised\" \n                mdl-ripple mdl-colored=\"primary\"\n                (click)=\"deletePatient()\">Eliminar</button>\n        <button class=\"btn_space\"\n                mdl-button \n                (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n</div>"

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allFields; then thenBlock else elseBlock\"></div>\n\n<ng-template #thenBlock>\n\t<div class=\"margin-container\">\n\t    <div class=\"container\">\n\n\t    \t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t<h2>Pacientes</h2>\n\t\t\t    </div>\n\t    \t</div>\n\n            <table class=\"table table-responsive\">\n\t\t\t  <thead>\n\t\t\t    <tr class=\"header_table\">\n\t\t\t      <th>#</th>\n\t\t\t      <th>Nombres</th>\n\t\t\t      <th>Last names</th>\n\t\t\t      <th>Att. name</th>\n\t\t\t      <th>Att. last name</th>\n\t\t\t      <th></th>\n\t\t\t    </tr>\n\t\t\t  </thead>\n\t\t\t  <tbody>\n\t\t\t    <tr *ngFor = \"let patient of patients\"\n\t\t\t\t        [class.selected]=\"patient === currentPatient\"\n\t\t\t\t        (mouseout)=\"currentPatient = null\"\n\t\t\t\t        (mouseover)=\"select(patient)\">\n\t\t\t\t  \t<!-- <div> -->\n\t\t\t\t      <th scope=\"row\">#</th>\n\t\t\t\t      <td>{{patient.names}}</td>\n\t\t\t\t      <td>{{patient.lastname}}</td>\n\t\t\t\t      <td>{{patient.attorney.names}}</td>\n\t\t\t\t      <td>{{patient.attorney.lastname}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<div *ngIf=\"currentPatient === currentPatient\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t        <div class=\"col\">\n\t\t\t\t\t\t          \t<mdl-icon  \tclass=\"icon material-icons\" \n\t\t\t\t\t\t          \t\t\t \tmdl-tooltip-large=\"ver\"\n\t\t\t\t\t\t            \t\t \t(click)=\"showReadPatientComponent()\"\n\t\t\t\t\t\t              \t\t\t>visibility</mdl-icon>\n\t\t\t\t\t\t            \n\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t        <div class=\"col\">\n\t\t\t\t\t\t          \t<mdl-icon  \tclass=\"icon material-icons\" \n\t\t\t\t\t\t          \t\t\t \tmdl-tooltip-large=\"editar\"\n\t\t\t\t\t\t          \t\t\t \t(click)=\"showUpdatePatientComponent()\"\n\t\t\t\t\t\t              \t\t\thref=\"#updateModal\">edit</mdl-icon>\n\t\t\t\t\t\t            \n\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t        <div class=\"col\">\n\t\t\t\t\t\t          \t<mdl-icon  \tclass=\"icon material-icons\" \n\t\t\t\t\t\t          \t\t\t \tmdl-tooltip-large=\"eliminar\"\n\t\t\t\t\t\t            \t\t \t(click)=\"showDeletePatientComponent()\"\n\t\t\t\t\t\t              \t\t\thref=\"#deleteModal\">delete</mdl-icon>\n\t\t\t\t\t\t            \n\t\t\t\t\t\t        </div>\n\t\t\t\t\t        </div>\n\t\t\t\t\t\t</div> \t\n\t\t\t\t      </td>\n\t\t\t\t  \t<!-- </div> -->\n\t\t\t    </tr>\n\t\t\t   \n\t\t\t  </tbody>\n\t\t\t</table>\n\n\t\t</div>\n\n\t</div>\n\t<div class=\"drawer_add_patient\">\n\t\t<mdl-button mdl-button\n\t\t\t\t\tmdl-button-type=\"fab\" \n\t\t\t\t\tmdl-colored=\"primary\"\n\t\t\t\t\tmdl-ripple\n\t    \t\t \t(click)=\"showAddPatientComponent()\">\n\t\t    <mdl-icon>add</mdl-icon>\n\t\t</mdl-button>\n\t</div>\n</ng-template>\n\n<ng-template #elseBlock>\n\t<!-- <h2>Patietn</h2> -->\n\n\t<!-- Tooltips -->\n   <!--  <div class=\"col-md-1\">\n\t\t<mdl-icon  class=\"col icon material-icons\" mdl-tooltip-large=\"Print\" (click)=\"switchView('list')\">print</mdl-icon>\n    </div>\n    <div class=\"col-md-1\">\n\t\t<mdl-icon  class=\"col icon material-icons\" [mdl-tooltip]=\"tt1\" mdl-tooltip-position=\"top\" (click)=\"switchView('photo')\">add</mdl-icon>\n    </div> -->\n    \n\t<ul class=\"patients\">  \n\t    <li  *ngFor = \"let patient of patients\"\n\t        (click)=\"select(patient)\"\n\t        [class.selected]=\"patient === currentPatient\">\n\n\t        \n\t\t\t<div *ngIf=\"listView\">  \n\t\t\t\t\t{{patient.names}}        \n\t\t\t</div>\n\t\t\t<div *ngIf=\"photoView\">\n\t\t\t\t\t<mdl-chip mdl-label=\"{{patient.names}}\">\n\t\t\t\t\t  <span mdl-chip-contact class=\"mdl-color--blue mdl-color-text--white\">A</span>\n\t\t\t\t\t</mdl-chip>\n\t\t\t</div>  \n\t    </li>\n\t</ul>\n</ng-template>\n"

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h2 class=\"modal-title\">Patient View</h2>\n    <button type=\"button\" class=\"close\" aria-h6=\"Close\" \n            (click)=\"activeModal.close('Close click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n<div class=\"modal-body\">\n    <form [formGroup]=\"form\" class=\"card-group\">\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n          <!-- Patient -->\n            <div class=\"row\">\n            <!-- name , last name -->\n                <div class=\"col-md-12\">\n                    <div class=\"field-group\">\n                        <div class=\"col-md-3\">\n                            <mdl-icon class=\"mdl_icon_person\">account_circle</mdl-icon>\n                        </div>\n                        <div class=\"col-md-9  col-xs-12\">\n                            <div class=\"row\">\n                                <mdl-textfield label=\"Nombres\" \n                                               name=\"names\" \n                                               type=\"text\" \n                                               formControlName=\"names\" \n                                               readonly='true'\n                                               ></mdl-textfield>\n                            </div>\n\n                            <div class=\"row\">\n                                <mdl-textfield label=\"Apellidos\" \n                                               name=\"lastname\" \n                                               type=\"text\" \n                                               formControlName=\"lastName\" \n                                               readonly='true'\n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n            <!-- DNI & birth -->\n                <div class=\"col-md-6\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">credit_card</mdl-icon>\n                        <mdl-textfield type=\"text\"\n                                       label=\"DNI\" \n                                       name=\"id_Document_num\" \n                                       pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"id_Document_num\" \n                                       readonly='true'\n                                       ></mdl-textfield>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"field-group\">\n\n                        <mdl-icon class=\"mdl_icon\">date_range</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"Nacimiento (yyyy-mm-dd)\" \n                                       name=\"birth\" \n                                       pattern=\"-?[0-9.-]*(\\.[0-9.-]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"birth\" \n                                       readonly='true'\n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n            <!--  Address-->\n                <div class=\"col-md-12\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">location_city</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"Direccion\" \n                                       name=\"address_street\" \n                                       formControlName=\"address_street\" \n                                       readonly='true'\n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>    \n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"City\" \n                                       name=\"address_city\" \n                                       formControlName=\"address_city\" \n                                       readonly='true'\n                                       ></mdl-textfield>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"State\" \n                                       name=\"address_state\" \n                                       formControlName=\"address_state\" \n                                       readonly='true'\n                                       ></mdl-textfield>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">credit_card</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"Zip\" \n                                       name=\"address_zip\" \n                                       pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"address_zip\" \n                                       readonly='true'\n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">public</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"Country\" \n                                       name=\"address_country\" \n                                       formControlName=\"address_country\" \n                                       readonly='true'\n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n          </div>\n\n\n          <div class=\"col-md-6\">\n          <!-- Attorney -->\n            <h5>Attorney</h5>\n            <div class=\"row\">\n            <!-- Names, lastname -->\n                <div class=\"col-md-12\">\n                     <div class=\"field-group\">\n                        <div class=\"col-md-3\">\n                            <mdl-icon class=\"mdl_icon_person\">account_circle</mdl-icon>\n                        </div>\n                        <div class=\"col-md-9  col-xs-12\">\n                            <div class=\"row\">\n                                <mdl-textfield label=\"Nombres\" \n                                               name=\"attorney_names\" \n                                               type=\"text\" \n                                               formControlName=\"attorney_names\" \n                                               readonly='true'\n                                               ></mdl-textfield>\n                            </div>\n\n                            <div class=\"row\">\n                                <mdl-textfield label=\"Apellidos\" \n                                               name=\"attorney_lastname\" \n                                               type=\"text\" \n                                               formControlName=\"attorney_lastName\" \n                                               readonly='true'\n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <!-- address -->\n                <div class=\"col-md-12\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">group</mdl-icon>\n                        <mdl-textfield label=\"Parentesco\" \n                                       name=\"attorney_relationship\" \n                                       type=\"text\" \n                                       formControlName=\"attorney_relationship\" \n                                       readonly='true'\n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <!-- phone, cellphone -->\n                <div class=\"col-md-6\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">settings_phone</mdl-icon>\n                        <mdl-textfield type=\"text\"\n                                       label=\"Teléfono\" \n                                       name=\"attorney_phone\" \n                                       pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"attorney_phone\" \n                                       readonly='true'\n                                       ></mdl-textfield>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"field-group\">\n\n                        <mdl-icon class=\"mdl_icon\">settings_cell</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"N° de celular\" \n                                       name=\"attorney_cellphone\" \n                                       pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"attorney_cellphone\" \n                                       readonly='true'\n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <!-- email -->\n                <div class=\"col-md-12\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">email</mdl-icon>\n                        <mdl-textfield label=\"Email\" \n                                       name=\"attorney_email\" \n                                       type=\"text\" \n                                       formControlName=\"attorney_email\" \n                                       readonly='true'\n                                       pattern=\"^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$\" \n                                       error-msg=\"Please provide a correct email!\"\n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n          </div>\n        </div>\n          \n\n        <!-- <div class=\"horizontal_divider\"></div> -->\n\n        <div class=\"row\">\n          <div class=\"col-lg\">\n          <!-- Medical diagnostic -->\n              <h5>Medical diagnostic</h5>\n              <div class=\"row\">\n                  <div class=\"col-md-4\">\n                      <div class=\"field-group\">\n                          <mdl-icon class=\"mdl_icon\">content_paste</mdl-icon>\n                          <mdl-textfield type=\"text\" \n                                         label=\"Name\" \n                                         name=\"medic_diagostic_name\" \n                                         formControlName=\"medic_diagostic_name\" \n                                         readonly='true'\n                                         ></mdl-textfield>\n                      </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"field-group\">\n                          <mdl-icon class=\"mdl_icon\">poll</mdl-icon>\n                          <mdl-textfield type=\"text\" \n                                         label=\"Level\"\n                                         name=\"medic_diagostic_level\" \n                                         formControlName=\"medic_diagostic_level\" \n                                         readonly='true'\n                                         ></mdl-textfield>\n                      </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"field-group\">\n                          <mdl-icon class=\"mdl_icon\">donut_small</mdl-icon>\n                          <mdl-textfield type=\"text\" \n                                         label=\"Percentage\" \n                                         name=\"medic_diagostic_percentage\" \n                                         formControlName=\"medic_diagostic_percentage\" \n                                         readonly='true'\n                                         ></mdl-textfield>\n                      </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n\n    </form>\n</div>\n\n<div class=\"modal-footer\">\n    <div class=\"modal-footer__actions\">\n        \n        <button class=\"btn_space\"\n                mdl-button \n                (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n</div>"

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h2 class=\"modal-title\">Patient update</h2>\n    <button type=\"button\" class=\"close\" aria-h6=\"Close\" \n            (click)=\"activeModal.close('Close click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n<div class=\"modal-body\">\n    <form [formGroup]=\"form\" class=\"card-group\">\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n          <!-- Patient -->\n            <div class=\"row\">\n            <!-- name , last name -->\n                <div class=\"col-md-12\">\n                    <div class=\"field-group\">\n                        <div class=\"col-md-3\">\n                            <mdl-icon class=\"mdl_icon_person\">account_circle</mdl-icon>\n                        </div>\n                        <div class=\"col-md-9  col-xs-12\">\n                            <div class=\"row\">\n                                <mdl-textfield label=\"Nombres\" \n                                               name=\"names\" \n                                               type=\"text\" \n                                               formControlName=\"names\" \n                                               ></mdl-textfield>\n                            </div>\n\n                            <div class=\"row\">\n                                <mdl-textfield label=\"Apellidos\" \n                                               name=\"lastname\" \n                                               type=\"text\" \n                                               formControlName=\"lastName\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n            <!-- DNI & birth -->\n                <div class=\"col-md-6\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">credit_card</mdl-icon>\n                        <mdl-textfield type=\"text\"\n                                       label=\"DNI\" \n                                       name=\"id_Document_num\" \n                                       pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"id_Document_num\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"field-group\">\n\n                        <mdl-icon class=\"mdl_icon\">date_range</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"Nacimiento (yyyy-mm-dd)\" \n                                       name=\"birth\" \n                                       pattern=\"-?[0-9.-]*(\\.[0-9.-]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"birth\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n            <!--  Address-->\n                <div class=\"col-md-12\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">location_city</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"Direccion\" \n                                       name=\"address_street\" \n                                       formControlName=\"address_street\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>    \n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"City\" \n                                       name=\"address_city\" \n                                       formControlName=\"address_city\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"State\" \n                                       name=\"address_state\" \n                                       formControlName=\"address_state\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">credit_card</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"Zip\" \n                                       name=\"address_zip\" \n                                       pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"address_zip\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">public</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"Country\" \n                                       name=\"address_country\" \n                                       formControlName=\"address_country\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n          </div>\n\n\n          <div class=\"col-md-6\">\n          <!-- Attorney -->\n            <h5>Attorney</h5>\n            <div class=\"row\">\n            <!-- Names, lastname -->\n                <div class=\"col-md-12\">\n                     <div class=\"field-group\">\n                        <div class=\"col-md-3\">\n                            <mdl-icon class=\"mdl_icon_person\">account_circle</mdl-icon>\n                        </div>\n                        <div class=\"col-md-9  col-xs-12\">\n                            <div class=\"row\">\n                                <mdl-textfield label=\"Nombres\" \n                                               name=\"attorney_names\" \n                                               type=\"text\" \n                                               formControlName=\"attorney_names\" \n                                               ></mdl-textfield>\n                            </div>\n\n                            <div class=\"row\">\n                                <mdl-textfield label=\"Apellidos\" \n                                               name=\"attorney_lastname\" \n                                               type=\"text\" \n                                               formControlName=\"attorney_lastName\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <!-- address -->\n                <div class=\"col-md-12\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">group</mdl-icon>\n                        <mdl-textfield label=\"Parentesco\" \n                                       name=\"attorney_relationship\" \n                                       type=\"text\" \n                                       formControlName=\"attorney_relationship\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <!-- phone, cellphone -->\n                <div class=\"col-md-6\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">settings_phone</mdl-icon>\n                        <mdl-textfield type=\"text\"\n                                       label=\"Teléfono\" \n                                       name=\"attorney_phone\" \n                                       pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"attorney_phone\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"field-group\">\n\n                        <mdl-icon class=\"mdl_icon\">settings_cell</mdl-icon>\n                        <mdl-textfield type=\"text\" \n                                       label=\"N° de celular\" \n                                       name=\"attorney_cellphone\" \n                                       pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                       error-msg=\"Caracteres no numéricos!\" \n                                       formControlName=\"attorney_cellphone\" \n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <!-- email -->\n                <div class=\"col-md-12\">\n                    <div class=\"field-group\">\n                        <mdl-icon class=\"mdl_icon\">email</mdl-icon>\n                        <mdl-textfield label=\"Email\" \n                                       name=\"attorney_email\" \n                                       type=\"text\" \n                                       formControlName=\"attorney_email\" \n                                       pattern=\"^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$\" \n                                       error-msg=\"Please provide a correct email!\"\n                                       ></mdl-textfield>\n                    </div>\n                </div>\n            </div>\n          </div>\n        </div>\n          \n\n        <!-- <div class=\"horizontal_divider\"></div> -->\n\n        <div class=\"row\">\n          <div class=\"col-lg\">\n          <!-- Medical diagnostic -->\n                <h5>Medical diagnostic</h5>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">content_paste</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                           label=\"Name\" \n                                           name=\"medic_diagostic_name\" \n                                           formControlName=\"medic_diagostic_name\" \n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">poll</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                           label=\"Level\"\n                                           name=\"medic_diagostic_level\" \n                                           formControlName=\"medic_diagostic_level\" \n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">donut_small</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                           label=\"Percentage\" \n                                           name=\"medic_diagostic_percentage\" \n                                           formControlName=\"medic_diagostic_percentage\" \n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n\n\n    </form>\n</div>\n\n<div class=\"modal-footer\">\n    <div class=\"modal-footer__actions\">\n        <button class=\"btn_space\"\n                mdl-button \n                mdl-button-type=\"raised\" \n                mdl-ripple mdl-colored=\"primary\"\n                (click)=\"onSubmit()\" [disabled]=\"!form.valid\">Update</button>\n        <button class=\"btn_space\"\n                mdl-button \n                (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n</div>\n"

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "\n\n\n<!-- <div class=\"container-fluid\"> -->\n        <div class=\"video_section\">\n          \n         <!--  <div class=\"collapse\" id=\"collapseVideo\">\n              <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/0qLblUty41c\" frameborder=\"0\" allowfullscreen></iframe>\n          </div> -->\n        </div>\n<!-- </div> -->\n\n<div class=\"name_position\">\n          <h2>Camila sedano</h2>\n</div>\n\n<div class=\"content\">\n    <div class=\"container\">\n\n        <div  class=\"col-md-12\">\n\n          <!--   <div [class]=\"dynamicColDetail\">\n            </div> -->\n\n            <!-- Graphics of gait analysis -->\n            <div [class]=\"dynamicColGraph\" [@slideInOutGraphis]=\"graphState\">\n            <!-- <div [@slideInOutGraphis]=\"graphState\"> -->\n            <!-- <div class=\"col-md-12 scrollable\" [@slideInOutVideo]=\"videoState\">                 -->\n\n                    <!-- <div class=\"row\">\n                        <div class=\"col-md-4 name_position\">\n                            <h3>Sagital plane</h3>\n                        </div>\n                        <div class=\"col-md-4 name_position\">\n                            <h3>Coronal plane</h3>\n                        </div>\n                        <div class=\"col-md-4 name_position\">\n                            <h3>Transverse plane</h3>\n                        </div>\n                    </div>\n -->\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <chart [options]=\"sp_plv_high_chart_data\" align=\"center\"></chart>\n                            <!-- <chart [options]=\"options\" align=\"center\"></chart> -->\n                        </div>\n                        <div class=\"col-md-4\">\n                            <chart [options]=\"fp_plv_high_chart_data\" align=\"center\"></chart>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <chart [options]=\"tp_plv_high_chart_data\" align=\"center\"></chart>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <chart [options]=\"sp_hip_high_chart_data\" align=\"center\"></chart>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <chart [options]=\"fp_hip_high_chart_data\" align=\"center\"></chart>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <chart [options]=\"tp_hip_high_chart_data\" align=\"center\"></chart>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <chart [options]=\"sp_kne_high_chart_data\" align=\"center\"></chart>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <chart [options]=\"fp_kne_high_chart_data\" align=\"center\"></chart>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <chart [options]=\"tp_kne_high_chart_data\" align=\"center\"></chart>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <chart [options]=\"sp_ank_high_chart_data\" align=\"center\"></chart>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <chart [options]=\"fp_ank_high_chart_data\" align=\"center\"></chart>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <chart [options]=\"tp_ank_high_chart_data\" align=\"center\"></chart>\n                        </div>\n                    </div>\n\n\n            </div>\n\n        </div>\n\n    </div>\n</div>\n\n\n \n<div class=\"drawer_details\">\n        <button mdl-button  mdl-button-type=\"fab\"  mdl-colored=\"accent\" mdl-ripple (click)=\"toggleDetails()\" >\n            <mdl-icon>toc</mdl-icon>\n        </button>\n        \n</div>\n\n\n<div class=\"drawer_video\">\n        <!-- <button mdl-button  mdl-button-type=\"fab\" mdl-colored=\"accent\" mdl-ripple \n            data-toggle=\"collapse\" data-target=\"#collapseVideo\" aria-expanded=\"false\" aria-controls=\"collapseVideo\">\n        <mdl-icon>movie</mdl-icon>\n        </button> \n -->\n\n      <!--   <button mdl-button  mdl-button-type=\"fab\" mdl-colored=\"accent\" mdl-ripple (click)=\"toggleVideo()\">\n            <mdl-icon>movie</mdl-icon>\n        </button> -->\n\n         <button mdl-button  mdl-button-type=\"fab\" mdl-colored=\"accent\" mdl-ripple \n            data-toggle=\"collapse\" data-target=\"#collapseVideo\" aria-expanded=\"false\" aria-controls=\"collapseVideo\"\n            (click)=\"toggleVideo()\">\n            <mdl-icon>movie</mdl-icon>\n        </button> \n\n</div>  \n\n\n<!-- youtube videos of gait analysis  COMPONENTES -->\n\n<app-details-drawer [@slideInOutDetails]=\"menuState\"\n            [kinematicsAnalysis] =\"kinematicsAnalysis\">\n    \n</app-details-drawer>\n\n\n<app-video-drawer [@slideInOutVideo]=\"videoState\">\n\n</app-video-drawer>\n\n<!-- <div> <button (click)=\"putMatLab_manual()\">Put matlab data </button> </div>\n<div> <button (click)=\"putManual()\">PUT data</button> </div>\n<div> <button (click)=\"testRetriveHighChartFromEnvionmentFile()\"> testRetriveHighChartFromEnvionmentFile</button> </div>\n -->"

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "<h2>Resultados</h2>\n<!-- <span class=\"bd-booticon outline\">B</span> -->\n\n<ul  *ngIf=\"false\" class=\"results\">  \n  <li class=\"row\" *ngFor = 'let kinematicsAnalysis of kinematicsAnalysiss' \n      (mouseout)=\"mouseOvered=kinematicsAnalysis\"   \n      (mouseover)=\"mouseOvered=kinematicsAnalysis\"\n  >\n<!-- [class.selected]=\"kinematicsAnalysis === multipleKinematicsAnalysiss\"  -->\n\n\n      <mdl-checkbox  class=\"col-md-1\" (click)=\"multipleSelect(kinematicsAnalysis._id)\">\n      </mdl-checkbox>\n     \n      <div class=\"col-md-8\">kinematicsAnalysis.created_at</div>\n\n      <div *ngIf=\"mouseOvered === kinematicsAnalysis\">\n        <div class=\"col-md-1\">\n          <mdl-icon  class=\"icon material-icons\" mdl-tooltip-large=\"ver resumen\"\n            (click)=\"select(kinematicsAnalysis)\">content_paste</mdl-icon>\n        </div>\n      </div>\n\n  </li>\n\n</ul>\n\n<!-- <h4>Change log:</h4>\n    <ul>\n      <li *ngFor=\"let change of changeLog\">change</li>\n    </ul>\n -->\n\n \n\n  \n  <!--  -->\n  <!--  -->\n  <!--  -->\n\n<table class=\"table table-responsive\">\n  <thead>\n    <tr class=\"header_table\">\n      <th></th>\n      <th>Date</th>\n      <th>Options</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor = 'let kinematicsAnalysis of kinematicsAnalysiss' \n    (mouseout)=\"mouseOvered=kinematicsAnalysis\"   \n    (mouseover)=\"mouseOvered=kinematicsAnalysis\"\n    >\n      <!-- <div> -->\n        <th scope=\"row\">\n          <mdl-checkbox (click)=\"multipleSelect(kinematicsAnalysis._id)\">\n          </mdl-checkbox>\n        </th>\n        <td>{{kinematicsAnalysis.created_at | dateFormat}}</td>\n        <td>\n          <div *ngIf=\"mouseOvered === kinematicsAnalysis\">\n            <mdl-icon class=\"icon material-icons\" mdl-tooltip-large=\"ver resumen\"\n                      (click)=\"select(kinematicsAnalysis)\">content_paste</mdl-icon>\n\n          </div>\n        </td>\n      <!-- </div> -->\n    </tr>\n   \n  </tbody>\n</table>\n\n"

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

module.exports = "\n<!-- <h6 class=\"title-devider\">\n  {{kinematicsAnalysis._id | uppercase}} is selected \n</h6>\n -->\n\n<!-- <mdl-list>\n\n  <mdl-list-item lines=\"3\" mdl-ripple>\n    <mdl-list-item-primary-content>\n        <mdl-icon mdl-list-item-avatar>person</mdl-icon>\n        <span>{{patient.names}}</span>\n        <mdl-list-item-text-body>\n          <a >\n            <span mdl-badge=\"10\">{{patient.lastname}}</span>\n          </a>\n        </mdl-list-item-text-body>\n    </mdl-list-item-primary-content>\n  </mdl-list-item>\n  \n  <mdl-list-item lines=\"3\" mdl-ripple>\n    <mdl-list-item-primary-content>\n        <mdl-icon mdl-list-item-avatar>person</mdl-icon>\n        <span>{{therapist.names}}</span>\n        <mdl-list-item-text-body>\n          <a >\n            <span mdl-badge=\"10\">{{therapist.lastname}}</span>\n          </a>\n        </mdl-list-item-text-body>\n    </mdl-list-item-primary-content>\n  </mdl-list-item>\n\n</mdl-list>\n -->\n\n<!-- <div *ngIf=\"kinematicsAnalysis\" class=\"row cons-set \"> -->\n\n<h2>Analysis details</h2>\n\n<!-- Views of analysis -->\n<h6 class=\"title-devider\">\n  Graphic views :  \n</h6>\n\n\n<div *ngIf=\"kinematicsAnalysis\" class=\"row cons-set\">\n  \n  <div class=\"col-xs-4\" \n     *ngIf=\"kinematicsAnalysis.sp_kne_high_chart_data; then thenBlock_is_sagitalplane else elseBlock_is_sagitalPlane\"></div>\n  <div >\n    <ng-template #thenBlock_is_sagitalplane>\n        <img class=\"icons-set__icon\" src=\"../../../../assets/img/activated_icons/icons8-Foot Angle.png\" title=\"Sagittal view\">\n    </ng-template>\n    <ng-template #elseBlock_is_sagitalPlane>\n         <img class=\"icons-set__icon\" src=\"../../../../assets/img/deactivated_icons/icons8-Foot Angle.png\" title=\"Sagittal view not available\">\n    </ng-template>\n  </div>\n\n  <div class=\"col-xs-4\" \n     *ngIf=\"kinematicsAnalysis.fp_kne_high_chart_data; then thenBlock_is_frotalplane else elseBlock_is_frotalPlane\"></div>\n  <div >\n    <ng-template #thenBlock_is_frotalplane>\n        <img class=\"icons-set__icon\" src=\"../../../../assets/img/activated_icons/icons8-Pronation of Foot Filled.png\" title=\"Frotal\">\n    </ng-template>\n    <ng-template #elseBlock_is_frotalPlane>\n         <img class=\"icons-set__icon\" src=\"../../../../assets/img/deactivated_icons/icons8-Pronation of Foot Filled.png\" title=\"No frontal view available\">\n    </ng-template>\n  </div>\n\n  <div class=\"col-xs-4\" \n     *ngIf=\"kinematicsAnalysis.tp_kne_high_chart_data; then thenBlock_is_tranversalplane else elseBlock_is_tranversalPlane\"></div>\n  <div >\n    <ng-template #thenBlock_is_tranversalplane>\n        <img class=\"icons-set__icon\" src=\"../../../../assets/img/activated_icons/icons8-Foot Angle.png\" title=\"Tranverse view\">\n    </ng-template>\n    <ng-template #elseBlock_is_tranversalPlane>\n         <img class=\"icons-set__icon\" src=\"../../../../assets/img/deactivated_icons/icons8-Foot Angle.png\" title=\"No transverse view\">\n    </ng-template>\n  </div>\n\n</div>\n\n<!-- Accesories of the analysis -->\n<h6 class=\"title-devider\">\n  Accesories:  \n</h6>\n\n<div *ngIf=\"kinematicsAnalysis\" class=\"row cons-set\">\n\n  <div class=\"col-xs-4\" \n     *ngIf=\"kinematicsAnalysis.accesories.assited_walk; then thenBlock_assited_walk else elseBlock_assited_walk\"></div>\n  <div >\n    <ng-template #thenBlock_assited_walk>\n        <img class=\"icons-set__icon\" src=\"../../../../assets/img/activated_icons/icons8-Walker-Filled.png\" title=\"Assited walk\">\n    </ng-template>\n    <ng-template #elseBlock_assited_walk>\n         <img class=\"icons-set__icon\" src=\"../../../../assets/img/deactivated_icons/icons8-Walker-Filled.png\" title=\"No assited walk\">\n    </ng-template>\n  </div>\n\n\n\n  <div class=\"col-xs-4\" \n     *ngIf=\"kinematicsAnalysis.accesories.is_treadmills; then thenBlock_is_treadmills else elseBlock_is_treadmills\"></div>\n  <div >\n    <ng-template #thenBlock_is_treadmills>\n        <img class=\"icons-set__icon\" src=\"../../../../assets/img/activated_icons/icons8-Treadmill-Filled.png\" title=\"Treadmills\">\n    </ng-template>\n    <ng-template #elseBlock_is_treadmills>\n         <img class=\"icons-set__icon\" src=\"../../../../assets/img/deactivated_icons/icons8-Treadmill-Filled.png\" title=\"No Treadmills\">\n    </ng-template>\n  </div>\n\n\n  <div class=\"col-xs-4\" \n     *ngIf=\"kinematicsAnalysis.accesories.is_walker; then thenBlock_is_walker else elseBlock_is_walker\"></div>\n  <div >\n    <ng-template #thenBlock_is_walker>\n        <img class=\"icons-set__icon\" src=\"../../../../assets/img/activated_icons/icons8-Crutch-Filled.png\" title=\"Crutches\">\n    </ng-template>\n    <ng-template #elseBlock_is_walker>\n         <img class=\"icons-set__icon\" src=\"../../../../assets/img/deactivated_icons/icons8-Crutch-Filled.png\" title=\"No crutches\">\n    </ng-template>\n  </div>\n\n\n  <div class=\"col-xs-4\" \n     *ngIf=\"kinematicsAnalysis.accesories.is_parallel_bars; then thenBlock_is_parallel_bars else elseBlock_is_parallel_bars\"></div>\n  <div >\n    <ng-template #thenBlock_is_parallel_bars>\n        <img class=\"icons-set__icon\" src=\"../../../../assets/img/activated_icons/icons8-Equivalent.png\" title=\"Parallel bars\">\n    </ng-template>\n    <ng-template #elseBlock_is_parallel_bars>\n         <img class=\"icons-set__icon\" src=\"../../../../assets/img/deactivated_icons/icons8-Equivalent.png\" title=\"No parallel bars\">\n    </ng-template>\n  </div>\n\n\n  <div class=\"col-xs-4\" \n     *ngIf=\"kinematicsAnalysis.accesories.is_orthoses; then thenBlock_is_orthoses else elseBlock_is_orthoses\"></div>\n  <div >\n    <ng-template #thenBlock_is_orthoses>\n        <img class=\"icons-set__icon\" src=\"../../../../assets/img/activated_icons/icons8-Armored-Boot.png\" title=\"Orthoses\">\n    </ng-template>\n    <ng-template #elseBlock_is_orthoses>\n         <img class=\"icons-set__icon\" src=\"../../../../assets/img/deactivated_icons/icons8-Armored-Boot.png\" title=\"No orthoses\">\n    </ng-template>\n  </div>\n\n\n <div class=\"col-xs-4\" \n     *ngIf=\"!kinematicsAnalysis.accesories.is_orthoses; then thenBlock_is_no_orthoses else elseBlock_is_no_orthoses\"></div>\n  <div >\n    <ng-template #thenBlock_is_no_orthoses>\n        <img class=\"icons-set__icon\" src=\"../../../../assets/img/activated_icons/icons8-Walking Filled.png\" title=\"Elastic bands\">\n    </ng-template>\n    <ng-template #elseBlock_is_no_orthoses>\n         <img class=\"icons-set__icon\" src=\"../../../../assets/img/deactivated_icons/icons8-Walking Filled.png\" title=\"No elastic bands\">\n    </ng-template>\n  </div>\n\n</div>\n\n\n<!-- More detail of the analysis -->\n<h6 class=\"title-devider\">\n  More details\n</h6>\n<div *ngIf=\"kinematicsAnalysis\" class=\"card-block\">\n               \n <p>\n    Patient: \n    <samp>{{patient.names}} {{patient.lastname}}</samp>\n </p>\n\n <p>\n    Therapist: \n    <samp>{{therapist.names}} {{therapist.lastname}}</samp>\n </p>\n\n <p *ngIf=\"kinematicsAnalysis.accesories.is_assited_walk\">\n     Caminata asistida:\n     <samp>{{kinematicsAnalysis.accesories_descriptions.assited_walk}}</samp>\n </p>\n <p *ngIf=\"kinematicsAnalysis.accesories.is_treadmills\">\n     Caminadora:\n     <samp>{{kinematicsAnalysis.accesories_descriptions.treadmills}}</samp>\n </p>\n <p *ngIf=\"kinematicsAnalysis.accesories.is_walker\">\n     Andador:\n     <samp>{{kinematicsAnalysis.accesories_descriptions.walker}}</samp>\n </p>\n <p *ngIf=\"kinematicsAnalysis.accesories.is_orthoses\">\n     Órtesis:\n     <samp>{{kinematicsAnalysis.accesories_descriptions.orthoses}}</samp>\n </p>\n <p *ngIf=\"kinematicsAnalysis.accesories.is_parallel_bars\">\n     Barras paralelas: <samp>{{kinematicsAnalysis.accesories_descriptions.parallel_bars}}</samp>\n </p>\n\n</div>\n\n <!-- \n<mdl-list>\n\n <mdl-list-item lines=\"3\" mdl-ripple>\n    <mdl-list-item-primary-content>\n      <mdl-icon mdl-list-item-avatar><img class=\"icons-set__icon src=\"../../../../assets/img/deactivated_icons/icons8-Armored-Boot.png\" title=\"No orthoses\" width=\"30\" height=\"30\"></mdl-icon>\n      <span>Terapeutas</span>\n      <mdl-list-item-text-body>\n        <a >\n          <span mdl-badge=\"10\">Confirmación ingreso</span>\n        </a>\n      </mdl-list-item-text-body>\n    </mdl-list-item-primary-content>\n  </mdl-list-item> -->\n  \n <!--   <mdl-list-item lines=\"3\">\n    <mdl-list-item-primary-content>\n      <mdl-icon mdl-list-item-avatar>accessible</mdl-icon>\n      <span>Pacientes</span>\n        <mdl-list-item-text-body>\n          <a >\n            <span mdl-badge=\"4\">Visisbilidad de resultados</span>\n          </a>\n        </mdl-list-item-text-body>\n    </mdl-list-item-primary-content>\n  </mdl-list-item> -->\n\n <!--  <mdl-list-item lines=\"3\">\n    <mdl-list-item-primary-content>\n      <mdl-icon mdl-list-item-avatar>theaters</mdl-icon>\n      <span>Pacientes</span>\n        <mdl-list-item-text-body>\n          <a >\n            <span mdl-badge=\"4\">Visisbilidad de resultados</span>\n          </a>\n        </mdl-list-item-text-body>\n    </mdl-list-item-primary-content>\n  </mdl-list-item>\n \n <mdl-list-item lines=\"3\">\n    <mdl-list-item-primary-content>\n      <mdl-icon mdl-list-item-avatar>directions_walk\n\n  </mdl-icon>\n      <span>Pacientes</span>\n        <mdl-list-item-text-body>\n          <a >\n            <span mdl-badge=\"4\">Visisbilidad de resultados</span>\n          </a>\n        </mdl-list-item-text-body>\n    </mdl-list-item-primary-content>\n  </mdl-list-item>\n\n  <mdl-list-item lines=\"3\">\n    <mdl-list-item-primary-content>\n      <mdl-icon mdl-list-item-avatar><i class=\"material-icons\">transfer_within_a_station</i></mdl-icon>\n      <span>Pacientes</span>\n        <mdl-list-item-text-body>\n          <a >\n            <span mdl-badge=\"4\">Visisbilidad de resultados</span>\n          </a>\n        </mdl-list-item-text-body>\n    </mdl-list-item-primary-content>\n  </mdl-list-item>\n\n  <mdl-list-item lines=\"3\">\n    <mdl-list-item-primary-content>\n      <mdl-icon mdl-list-item-avatar>wc</mdl-icon>\n      <span>Pacientes</span>\n        <mdl-list-item-text-body>\n          <a >\n            <span mdl-badge=\"4\">Visisbilidad de resultados</span>\n          </a>\n        </mdl-list-item-text-body>\n    </mdl-list-item-primary-content>\n  </mdl-list-item>\n\n  <mdl-list-item lines=\"3\">\n    <mdl-list-item-primary-content>\n      <mdl-icon mdl-list-item-avatar>child_care</mdl-icon>\n      <span>Pacientes</span>\n        <mdl-list-item-text-body>\n          <a >\n            <span mdl-badge=\"4\">Visisbilidad de resultados</span>\n          </a>\n        </mdl-list-item-text-body>\n    </mdl-list-item-primary-content>\n  </mdl-list-item>-->\n\n <!--  <mdl-list-item lines=\"3\">\n    <mdl-list-item-primary-content>\n      <mdl-icon mdl-list-item-avatar><img class=\"img_icon\" src=\"https://www.flaticon.com/premium-icon/icons/svg/384/384104.svg\" title=\"Plot\" width=\"24\" height=\"24\"></mdl-icon>\n      <span>Pacientes</span>\n        <mdl-list-item-text-body>\n          <a >\n            <span mdl-badge=\"4\">Visisbilidad de resultados</span>\n          </a>\n        </mdl-list-item-text-body>\n    </mdl-list-item-primary-content>\n  </mdl-list-item>  \n  \n</mdl-list>\n\n-->\n"

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h2 class=\"modal-title\">New therapist</h2>\n    <button type=\"button\" class=\"close\" aria-h6=\"Close\" \n            (click)=\"activeModal.close('Close click')\">\n    \t<span aria-hidden=\"true\">&times;</span>\n \t  </button>\n</div>\n\n<div class=\"modal-body\">\n    <form [formGroup]=\"form\" class=\"card-group\">\n       \n        <div class=\"row\">\n            <div class=\"col-lg\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                    <!-- name , last name -->\n                        <div class=\"field-group\">\n                            <div class=\"col-md-3\">\n                                <mdl-icon class=\"mdl_icon_person\">account_circle</mdl-icon>\n                                <!-- <div class=\"add_patient_photo\">\n                                  <button mdl-button \n                                          mdl-button-type=\"icon\" \n                                          mdl-colored=\"primary\"\n                                          (click)=\"showAddPatientComponent()\">\n                                    <mdl-icon>add_a_photo</mdl-icon>\n                                  </button>\n                                </div> -->\n                            </div>\n                            <div class=\"col-9\">\n                                <div class=\"row\">\n                                    <mdl-textfield label=\"Nombres\" \n                                                   name=\"names\" \n                                                   type=\"text\" \n                                                   formControlName=\"names\" \n                                                   ></mdl-textfield>\n                                </div>\n\n                                <div class=\"row\">\n                                    <mdl-textfield label=\"Apellidos\" \n                                                   name=\"lastname\" \n                                                   type=\"text\" \n                                                   formControlName=\"lastName\" \n                                                   ></mdl-textfield>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                <!-- Birth and DNI -->\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n\n                            <mdl-icon class=\"mdl_icon\">date_range</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                           label=\"(yyyy-mm-dd)\" \n                                           name=\"birth\" \n                                           pattern=\"-?[0-9.-]*(\\.[0-9.-]+)?\" \n                                           error-msg=\"Caracteres no numéricos!\" \n                                           formControlName=\"birth\" \n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col\">\n                        \n                        <div class=\"field-group\">\n\n                           <form class=\"form-inlinejh\">\n                                  <mdl-icon class=\"mdl_icon\" (click)=\"d.toggle()\">date_range</mdl-icon>\n                                  <input  placeholder=\"yyyy-mm-dd\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n                            </form>\n\n                            <mdl-textfield type=\"text\"\n                                           label=\"birth\" \n                                           name=\"birth\" \n                                           pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                           error-msg=\"Caracteres no numéricos!\" \n                                           formControlName=\"birth\"\n                                           class=\"out\"\n                                           ></mdl-textfield>\n                        </div>\n                    </div> -->\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">credit_card</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                           label=\"N° de DNI\" \n                                           name=\"id_Document_num\" \n                                           pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                           error-msg=\"Caracteres no numéricos!\" \n                                           formControlName=\"id_Document_num\" \n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                <!-- CTMP, NDTA -->\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                            \t\t\t   label=\"N° de CTMP\" \n                            \t\t\t   name=\"num_ctmp\" \n                            \t\t\t   pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                            \t\t\t   error-msg=\"Caracteres no numéricos!\" \n                            \t\t\t   formControlName=\"num_ctmp\" \n                            \t\t\t   ></mdl-textfield>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                            \t\t\t   label=\"N° de NDTA\" \n                            \t\t\t   name=\"num_ndta\" \n                            \t\t\t   pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                            \t\t\t   error-msg=\"Caracteres no numéricos!\" \n                            \t\t\t   formControlName=\"num_ndta\" \n                            \t\t\t   ></mdl-textfield>\n                        </div>\n                    </div>\n                </div>\n               \n                <div class=\"row\">\n                <!-- email -->\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">email</mdl-icon>\n                            <mdl-textfield label=\"Email\" \n                                           name=\"email\" \n                                           type=\"text\" \n                                           formControlName=\"email\" \n                                           pattern=\"^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$\" \n                                           error-msg=\"Please provide a correct email!\"\n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"row\">\n                <!-- cell Phone, phone -->\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n\n                            <mdl-icon class=\"mdl_icon\">settings_cell</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                           label=\"N° de celular\" \n                                           name=\"cellphone\" \n                                           pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                           error-msg=\"Caracteres no numéricos!\" \n                                           formControlName=\"cellphone\" \n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">settings_phone</mdl-icon>\n                            <mdl-textfield type=\"text\"\n                                           label=\"Teléfono\" \n                                           name=\"phone\" \n                                           pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                           error-msg=\"Caracteres no numéricos!\" \n                                           formControlName=\"phone\" \n                                           ></mdl-textfield>\n                        </div>\n\n                    </div>\n                </div>\n\n            </div> \n\n            <div class=\"col-lg\">\n                <div formGroupName=\"address\">\n                <!--  Address-->\n                    <h5>Address</h5>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">location_city</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"Direccion\" \n                                               name=\"street\" \n                                               formControlName=\"street\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>    \n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"City\" \n                                               name=\"city\" \n                                               formControlName=\"city\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"State\" \n                                               name=\"state\" \n                                               formControlName=\"state\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">credit_card</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"Zip\" \n                                               name=\"zip\" \n                                               pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                               error-msg=\"Caracteres no numéricos!\" \n                                               formControlName=\"zip\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">public</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"Country\" \n                                               name=\"country\" \n                                               formControlName=\"country\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div> \n    </form>\n</div>\n\n<div class=\"modal-footer\">\n    <div class=\"modal-footer__actions\">\n        <button class=\"btn_space\"\n                mdl-button \n        \t\t(click)=\"onSubmit()\" [disabled]=\"!form.valid\" \n        \t\tmdl-button-type=\"raised\" \n        \t\tmdl-ripple mdl-colored=\"primary\"\n                (click)=\"activeModal.close('Close click')\">Crear Cuenta</button>\n        <button class=\"btn_space\"\n                mdl-button \n                (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h2 class=\"modal-title\">Delete therapist</h2>\n    <button type=\"button\" class=\"close\" aria-h6=\"Close\" \n            (click)=\"activeModal.close('Close click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body text-xs-center\">\n  <h4 class=\"text-center\">Do you want to delete {{names}} {{lastnames}}?</h4>\n</div>\n<div class=\"modal-footer\">\n    <div class=\"modal-footer__actions\">\n        <button class=\"btn_space\"\n                mdl-button \n                mdl-button-type=\"raised\" \n                mdl-ripple mdl-colored=\"primary\"\n                (click)=\"deleteTherapist()\">Eliminar</button>\n        <button class=\"btn_space\"\n                mdl-button \n                (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n</div>"

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allFields; then thenBlock else elseBlock\"></div>\n\n<ng-template #thenBlock>\n    <div class=\"margin-container\">\n        <div class=\"container\">\n\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <h2>Thearpist</h2>\n                </div>\n            </div>\n\n            <table class=\"table table-responsive\">\n              <thead>\n                <tr class=\"header_table\">\n                  <th>#</th>\n                  <th>Nombres</th>\n                  <th>Last names</th>\n                  <th>Email</th>\n                  <th>Cellphone</th>\n                  <th>CTMP</th>\n                  <th>NDTA</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor = \"let therapist of therapists\"\n                        [class.selected]=\"therapist === currentTherapist\"\n                        (mouseout)=\"currentTherapist = null\"\n                        (mouseover)=\"select(therapist)\">\n                    <!-- <div> -->\n                      <th scope=\"row\">#</th>\n                      <td>{{therapist.names}}</td>\n                      <td>{{therapist.lastname}}</td>\n                      <td>{{therapist.email}}</td>\n                      <td>{{therapist.cellphone}}</td>\n                      <td>{{therapist.num_ctmp}}</td>  \n                      <td>{{therapist.num_ndta}}</td>\n                      <td>\n                        <div *ngIf=\"currentTherapist === currentTherapist\">\n                            <div class=\"row\">\n                                <div class=\"col\">\n                                    <mdl-icon   class=\"icon material-icons\" \n                                                mdl-tooltip-large=\"ver\"\n                                                (click)=\"showReadTherapistComponent()\"\n                                                >visibility</mdl-icon>\n                                    \n                                </div>\n                                <div class=\"col\">\n                                    <mdl-icon   class=\"icon material-icons\" \n                                                mdl-tooltip-large=\"editar\"\n                                                (click)=\"showUpdateTherapistComponent()\"\n                                                href=\"#updateModal\">edit</mdl-icon>\n                                    \n                                </div>\n                                <div class=\"col\">\n                                    <mdl-icon   class=\"icon material-icons\" \n                                                mdl-tooltip-large=\"eliminar\"\n                                                (click)=\"showDeleteTherapistComponent()\"\n                                                href=\"#deleteModal\">delete</mdl-icon>\n                                    \n                                </div>\n                            </div>\n                        </div>  \n                      </td>\n                     <!--  <td>\n                        <button mdl-button #btn4=\"mdlButton\" \n                                [mdl-toggle-menu]=\"m4\"           \n                                mdl-button-type=\"icon\" \n                                mdl-ripple><mdl-icon>more_vert</mdl-icon>\n                        </button>\n                        <mdl-menu #m4=\"mdlMenu\" mdl-menu-position=\"top-right\">\n                           <mdl-menu-item mdl-ripple (click)=\"showReadTherapistComponent()\">See</mdl-menu-item>\n                           <mdl-menu-item mdl-ripple (click)=\"showUpdateTherapistComponent()\">Edit</mdl-menu-item>\n                           <mdl-menu-item mdl-ripple (click)=\"showDeleteTherapistComponent()\">Delete</mdl-menu-item>\n                        </mdl-menu>\n\n                      </td> -->\n                           <!-- <mdl-menu-item mdl-ripple mdl-menu-item-full-bleed-divider>Another Action</mdl-menu-item> -->\n                           <!-- <mdl-menu-item mdl-ripple disabled>Disabled Action</mdl-menu-item> -->\n                    <!-- </div> -->\n                </tr>\n               \n              </tbody>\n            </table>\n\n        </div>\n        \n    </div>\n    <div class=\"drawer_add_therapist\">\n        <mdl-button mdl-button\n                    mdl-button-type=\"fab\" \n                    mdl-colored=\"primary\"\n                    mdl-ripple\n                    (click)=\"showAddTherapistComponent()\">\n            <mdl-icon>add</mdl-icon>\n        </mdl-button>\n    </div>\n</ng-template>\n\n<ng-template #elseBlock>\n    <!-- <h2>Therapist</h2> -->\n    <!-- Tooltips -->\n    <!-- <div class=\"col-md-1\">\n        <mdl-icon  class=\"col icon material-icons\" mdl-tooltip-large=\"Print\" (click)=\"switchView('list')\">print</mdl-icon>\n    </div>\n    <div class=\"col-md-1\">\n        <mdl-icon  class=\"col icon material-icons\" [mdl-tooltip]=\"tt1\" mdl-tooltip-position=\"top\" (click)=\"switchView('photo')\">add</mdl-icon>\n    </div> -->\n    \n    <ul class=\"therapists\">  \n        <li  *ngFor = \"let therapist of therapists\"\n            (click)=\"select(therapist)\"\n            [class.selected]=\"therapist === currentTherapist\">\n\n            \n            <div *ngIf=\"listView\">  \n                    {{therapist.names}}        \n            </div>\n            <div *ngIf=\"photoView\">\n                    <mdl-chip mdl-label=\"{{therapist.names}}\">\n                      <span mdl-chip-contact class=\"mdl-color--blue mdl-color-text--white\">A</span>\n                    </mdl-chip>\n            </div>  \n        </li>\n    </ul>\n</ng-template>\n  \n"

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h2 class=\"modal-title\">New therapist</h2>\n    <button type=\"button\" class=\"close\" aria-h6=\"Close\" \n            (click)=\"activeModal.close('Close click')\">\n      <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<div class=\"modal-body\">\n    <form [formGroup]=\"form\" class=\"card-group\">\n       \n        <div class=\"row\">\n            <div class=\"col-lg\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                    <!-- name , last name -->\n                        <div class=\"field-group\">\n                            <div class=\"col-md-3\">\n                                <mdl-icon class=\"mdl_icon_person\">account_circle</mdl-icon>\n                                <!-- <div class=\"add_patient_photo\">\n                                  <button mdl-button \n                                          mdl-button-type=\"icon\" \n                                          mdl-colored=\"primary\"\n                                          (click)=\"showAddPatientComponent()\">\n                                    <mdl-icon>add_a_photo</mdl-icon>\n                                  </button>\n                                </div> -->\n                            </div>\n                            <div class=\"col-9\">\n                                <div class=\"row\">\n                                    <mdl-textfield label=\"Nombres\" \n                                                   name=\"names\" \n                                                   type=\"text\" \n                                                   formControlName=\"names\" \n                                                   readonly='true'\n                                                   ></mdl-textfield>\n                                </div>\n\n                                <div class=\"row\">\n                                    <mdl-textfield label=\"Apellidos\" \n                                                   name=\"lastname\" \n                                                   type=\"text\" \n                                                   formControlName=\"lastName\" \n                                                   readonly='true'\n                                                   ></mdl-textfield>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                <!-- DNI & birth -->\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">credit_card</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                           label=\"N° de DNI\" \n                                           name=\"id_Document_num\" \n                                           pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                           error-msg=\"Caracteres no numéricos!\" \n                                           formControlName=\"id_Document_num\" \n                                           readonly='true'\n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        \n                        <div class=\"field-group\">\n\n                           <!-- <form class=\"form-inlinejh\"> -->\n                              <!-- <div class=\"form-group\"> -->\n                                <!-- <div class=\"input-group\"> -->\n                                  <mdl-icon class=\"mdl_icon\">credit_card</mdl-icon>\n                                  <!-- <input  placeholder=\"yyyy-mm-dd\" -->\n                                         <!-- name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\"> -->\n                            <!-- </form> -->\n\n                            <mdl-textfield type=\"text\"\n                                           label=\"birth\" \n                                           name=\"birth\" \n                                           pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                           error-msg=\"Caracteres no numéricos!\" \n                                           formControlName=\"birth\"\n                                           readonly='true'\n                                           ></mdl-textfield>\n\n                            <!-- <hr/>\n                            <pre>Model: {{ name}}</pre> -->\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                <!-- CTMP, NDTA -->\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                     label=\"N° de CTMP\" \n                                     name=\"num_ctmp\" \n                                     pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                     error-msg=\"Caracteres no numéricos!\" \n                                     formControlName=\"num_ctmp\" \n                                     readonly='true'\n                                     ></mdl-textfield>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                     label=\"N° de NDTA\" \n                                     name=\"num_ndta\" \n                                     pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                     error-msg=\"Caracteres no numéricos!\" \n                                     formControlName=\"num_ndta\" \n                                     readonly='true'\n                                     ></mdl-textfield>\n                        </div>\n                    </div>\n                </div>\n               \n                <div class=\"row\">\n                <!-- email -->\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">email</mdl-icon>\n                            <mdl-textfield label=\"Email\" \n                                           name=\"email\" \n                                           type=\"text\" \n                                           formControlName=\"email\" \n                                           readonly='true'\n                                           pattern=\"^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$\" \n                                           error-msg=\"Please provide a correct email!\"\n                                           >gfdgfdsgfd</mdl-textfield>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"row\">\n                <!-- cell Phone, phone -->\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n\n                            <mdl-icon class=\"mdl_icon\">settings_cell</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                           label=\"N° de celular\" \n                                           name=\"cellphone\" \n                                           pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                           error-msg=\"Caracteres no numéricos!\" \n                                           formControlName=\"cellphone\" \n                                           readonly='true'\n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">settings_phone</mdl-icon>\n                            <mdl-textfield type=\"text\"\n                                           label=\"Teléfono\" \n                                           name=\"phone\" \n                                           pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                           error-msg=\"Caracteres no numéricos!\" \n                                           formControlName=\"phone\" \n                                           readonly='true'\n                                           ></mdl-textfield>\n                        </div>\n\n                    </div>\n                </div>\n\n            </div> \n\n            <div class=\"col-lg\">\n                <div formGroupName=\"address\">\n                <!--  Address-->\n                    <h5>Address</h5>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">location_city</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"Direccion\" \n                                               name=\"street\" \n                                               formControlName=\"street\" \n                                               readonly='true'\n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>    \n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"City\" \n                                               name=\"city\" \n                                               formControlName=\"city\" \n                                               readonly='true'\n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"State\" \n                                               name=\"state\" \n                                               formControlName=\"state\" \n                                               readonly='true'\n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">credit_card</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"Zip\" \n                                               name=\"zip\" \n                                               pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                               error-msg=\"Caracteres no numéricos!\" \n                                               formControlName=\"zip\" \n                                               readonly='true'\n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">public</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"Country\" \n                                               name=\"country\" \n                                               formControlName=\"country\" \n                                               readonly='true'\n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div> \n    </form>\n</div>\n\n<div class=\"modal-footer\">\n    <div class=\"modal-footer__actions\">\n        <button class=\"btn_space\"\n                mdl-button \n                (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h2 class=\"modal-title\">Update therapist</h2>\n    <button type=\"button\" class=\"close\" aria-h6=\"Close\" \n            (click)=\"activeModal.close('Close click')\">\n    \t<span aria-hidden=\"true\">&times;</span>\n \t</button>\n</div>\n\n<div class=\"modal-body\">\n    <form [formGroup]=\"form\" class=\"card-group\">\n       \n        <div class=\"row\">\n            <div class=\"col-lg\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                    <!-- name , last name -->\n                        <div class=\"field-group\">\n                            <div class=\"col-md-3\">\n                                <mdl-icon class=\"mdl_icon_person\">account_circle</mdl-icon>\n                                <!-- <div class=\"add_patient_photo\">\n                                  <button mdl-button \n                                          mdl-button-type=\"icon\" \n                                          mdl-colored=\"primary\"\n                                          (click)=\"showAddPatientComponent()\">\n                                    <mdl-icon>add_a_photo</mdl-icon>\n                                  </button>\n                                </div> -->\n                            </div>\n                            <div class=\"col-9\">\n                                <div class=\"row\">\n                                    <mdl-textfield label=\"Nombres\" \n                                                   name=\"names\" \n                                                   type=\"text\" \n                                                   formControlName=\"names\" \n                                                   ></mdl-textfield>\n                                </div>\n\n                                <div class=\"row\">\n                                    <mdl-textfield label=\"Apellidos\" \n                                                   name=\"lastname\" \n                                                   type=\"text\" \n                                                   formControlName=\"lastName\" \n                                                   ></mdl-textfield>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                <!-- DNI & birth -->\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">credit_card</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                           label=\"N° de DNI\" \n                                           name=\"id_Document_num\" \n                                           pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                           error-msg=\"Caracteres no numéricos!\" \n                                           formControlName=\"id_Document_num\" \n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        \n                        <div class=\"field-group\">\n\n                           <form class=\"form-inlinejh\">\n                              <!-- <div class=\"form-group\"> -->\n                                <!-- <div class=\"input-group\"> -->\n                                  <mdl-icon class=\"mdl_icon\" (click)=\"d.toggle()\">credit_card</mdl-icon>\n                                  <input  placeholder=\"yyyy-mm-dd\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n                            </form>\n\n                            <mdl-textfield type=\"text\"\n                                           label=\"birth\" \n                                           name=\"birth\" \n                                           pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                           error-msg=\"Caracteres no numéricos!\" \n                                           formControlName=\"birth\"\n                                           class=\"out\"\n                                           ></mdl-textfield>\n\n                            <!-- <hr/>\n                            <pre>Model: {{ name}}</pre> -->\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                <!-- CTMP, NDTA -->\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                            \t\t\t   label=\"N° de CTMP\" \n                            \t\t\t   name=\"num_ctmp\" \n                            \t\t\t   pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                            \t\t\t   error-msg=\"Caracteres no numéricos!\" \n                            \t\t\t   formControlName=\"num_ctmp\" \n                            \t\t\t   ></mdl-textfield>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                            \t\t\t   label=\"N° de NDTA\" \n                            \t\t\t   name=\"num_ndta\" \n                            \t\t\t   pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                            \t\t\t   error-msg=\"Caracteres no numéricos!\" \n                            \t\t\t   formControlName=\"num_ndta\" \n                            \t\t\t   ></mdl-textfield>\n                        </div>\n                    </div>\n                </div>\n               \n                <div class=\"row\">\n                <!-- email -->\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">email</mdl-icon>\n                            <mdl-textfield label=\"Email\" \n                                           name=\"email\" \n                                           type=\"text\" \n                                           formControlName=\"email\" \n                                           pattern=\"^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$\" \n                                           error-msg=\"Please provide a correct email!\"\n                                           >gfdgfdsgfd</mdl-textfield>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"row\">\n                <!-- cell Phone, phone -->\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n\n                            <mdl-icon class=\"mdl_icon\">settings_cell</mdl-icon>\n                            <mdl-textfield type=\"text\" \n                                           label=\"N° de celular\" \n                                           name=\"cellphone\" \n                                           pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                           error-msg=\"Caracteres no numéricos!\" \n                                           formControlName=\"cellphone\" \n                                           ></mdl-textfield>\n                        </div>\n                    </div>\n\n                    <div class=\"col\">\n                        <div class=\"field-group\">\n                            <mdl-icon class=\"mdl_icon\">settings_phone</mdl-icon>\n                            <mdl-textfield type=\"text\"\n                                           label=\"Teléfono\" \n                                           name=\"phone\" \n                                           pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                           error-msg=\"Caracteres no numéricos!\" \n                                           formControlName=\"phone\" \n                                           ></mdl-textfield>\n                        </div>\n\n                    </div>\n                </div>\n\n            </div> \n\n            <div class=\"col-lg\">\n                <div formGroupName=\"address\">\n                <!--  Address-->\n                    <h5>Address</h5>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">location_city</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"Direccion\" \n                                               name=\"street\" \n                                               formControlName=\"street\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>    \n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"City\" \n                                               name=\"city\" \n                                               formControlName=\"city\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">card_membership</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"State\" \n                                               name=\"state\" \n                                               formControlName=\"state\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">credit_card</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"Zip\" \n                                               name=\"zip\" \n                                               pattern=\"-?[0-9]*(\\.[0-9]+)?\" \n                                               error-msg=\"Caracteres no numéricos!\" \n                                               formControlName=\"zip\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"field-group\">\n                                <mdl-icon class=\"mdl_icon\">public</mdl-icon>\n                                <mdl-textfield type=\"text\" \n                                               label=\"Country\" \n                                               name=\"country\" \n                                               formControlName=\"country\" \n                                               ></mdl-textfield>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div> \n    </form>\n</div>\n\n<div class=\"modal-footer\">\n    <div class=\"modal-footer__actions\">\n        <button class=\"btn_space\"\n                mdl-button \n        \t\t(click)=\"onSubmit()\" [disabled]=\"!form.valid\" \n        \t\tmdl-button-type=\"raised\" \n        \t\tmdl-ripple mdl-colored=\"primary\"\n                (click)=\"activeModal.close('Close click')\">Crear Cuenta</button>\n        <button class=\"btn_space\"\n                mdl-button \n                (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n</div>\n\n\n"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map