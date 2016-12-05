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
var platform_browser_1 = require('@angular/platform-browser');
var ResultDashboardComponent = (function () {
    function ResultDashboardComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.video = { id: 'PJniSb91tvo' };
        this.baseUrl = 'https://www.youtube.com/embed/';
        this.private_video = "https://www.youtube.com/watch?v=0qLblUty41c&feature=em-share_video_user";
        this.private_video_from_gmail_natification = "https://www.youtube.com/attribution_link?a=9pH1ANgTnOg&u=/watch%3Fv%3D0qLblUty41c%26feature%3Dem-share_video_user";
        // // lineChart
        // public lineChartData:Array<any> = [
        //   {data: [50, 80,100, 25,123, 50, 70], label: 'Series A'},
        //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
        //   {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
        // ];
        // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        // public lineChartOptions:any = {
        //   animation: false,
        //   responsive: true
        // };
        // public lineChartColors:Array<any> = [
        //   { // grey
        //     backgroundColor: 'rgba(148,159,177,0.2)',
        //     borderColor: 'rgba(148,159,177,0.2)',
        //     pointBackgroundColor: 'rgba(148,159,177,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        //   },
        //   { // dark grey
        //     backgroundColor: 'rgba(255,255,255,0)',
        //     borderColor: 'rgba(77,83,96,1)',
        //     pointBackgroundColor: 'rgba(77,83,96,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(77,83,96,1)'
        //   },
        //   { // grey
        //     backgroundColor: 'rgba(254,254,254,1)',
        //     borderColor: 'rgba(148,159,177,0.2)',
        //     pointBackgroundColor: 'rgba(148,159,177,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        //   }
        // ];
        // public lineChartLegend:boolean = true;
        // public lineChartType:string = 'line';
        // public randomize():void {
        //   let _lineChartData:Array<any> = new Array(this.lineChartData.length);
        //   for (let i = 0; i < this.lineChartData.length; i++) {
        //     _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
        //     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        //       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        //     }
        //   }
        //   this.lineChartData = _lineChartData;
        // }
        // // events
        // public chartClicked(e:any):void {
        //   console.log(e);
        // }
        // public chartHovered(e:any):void {
        //   console.log(e);
        // }
        // lineChart
        this.lineChartData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        this.pieChartType = 'pie';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.private_video_from_gmail_natification);
    }
    ResultDashboardComponent.prototype.randomizeType = function () {
        this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
        this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
    };
    ResultDashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ResultDashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ResultDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bar-chart-demo',
            templateUrl: 'result-dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], ResultDashboardComponent);
    return ResultDashboardComponent;
}());
exports.ResultDashboardComponent = ResultDashboardComponent;
//# sourceMappingURL=result-dashboard.component.js.map