import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-medical-center',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnInit {

  url: any;
  name:string;
  video: any = {id: 'wzrnuUOoFNM'};
  baseUrl:string = 'https://www.youtube.com/embed/';
  constructor(private sanitizer: DomSanitizer) { 
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);    
  }

  ngOnInit() {
  }

  // lineChart
  public lineChartData:Array<any> = [
    // {data: [40, 40, 40, 40, 40, 40, 40], label: 'Series A'},
    {data: [28, 18, 40, 19, 36, 27, 20], label: ''},
    {data: [18, 38, -7, 9, -5, 27, 10], label: ''}
  ];
  public lineChartLabels:Array<any> = ['', '', '', '', '', '', ''];
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
  public lineChartColors:Array<any> = [
    // { // grey
    //   backgroundColor: 'rgba(148,159,177,0)',
    //   borderColor: 'rgba(255,255,255,1)',
    //   // pointBackgroundColor: 'rgba(148,159,177,1)',
    //   // pointBorderColor: '#fff',
    //   // pointHoverBackgroundColor: '#fff',
    //   // pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0)',
      borderColor: 'rgba(255,0,0,0.1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0)',
      borderColor: 'rgba(0,0,255,0.1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 40) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  // public lineChartData:Array<any> = [
  //   [65, 59, 80, 81, 56, 55, 40],
  //   [28, 48, 40, 19, 86, 27, 90]
  // ];
  // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartType:string = 'line';
  // public pieChartType:string = 'pie';

  // // Pie
  // public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  // public pieChartData:number[] = [300, 500, 100];

  // public randomizeType():void {
  //   this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  //   this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  // }

  // public chartClicked(e:any):void {
  //   console.log(e);
  // }

  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

}
