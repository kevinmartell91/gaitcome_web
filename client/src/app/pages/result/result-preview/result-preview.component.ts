import { Component, OnInit , Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/Router';



@Component({
  selector: 'app-result-preview',
  templateUrl: './result-preview.component.html',
  styleUrls: ['./result-preview.component.css']
})
export class ResultPreviewComponent implements OnInit {


  @Input() kinematicsAnalysis: any; 
  @Input() patient: any;
  @Input() therapist: any;

  imgPathActivated : String;
  imgPathDeactivated : String;
  
  
  assited_walk_icon_path: String;      
  treadmills_icon_path: String;        
  walker_icon_path: String;       
  orthoses_icon_path: String;         
  parallel_bars_icon_path: String;

  assited_walk_icon_title: String;      
  treadmills_icon_title: String;        
  walker_icon_title: String;       
  orthoses_icon_title: String;         
  parallel_bars_icon_title: String;     

  constructor( ) {

    this.imgPathActivated = "../../../../assets/img/activated_icons/";
    this.imgPathDeactivated = "../../../../assets/img/deactivated_icons/";
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.updateGaitAnalysisIcons();

  }

  updateGaitAnalysisIcons() {
    
    let tempImgPath : String;
    let tempPathTitle : String;

    if(!this.kinematicsAnalysis.accesories.is_assited_walk) {
      tempImgPath = this.imgPathDeactivated; 
      tempPathTitle = 'No andador';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Si andador';
    }
    this.assited_walk_icon_path = tempImgPath + 'icons8-Walker-Filled.png';
    this.assited_walk_icon_title = tempPathTitle;

    if(!this.kinematicsAnalysis.accesories.is_treadmills) {
      tempImgPath = this.imgPathDeactivated;
      tempPathTitle = 'No caminadora';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Si caminadora';
    }
    this.treadmills_icon_path = tempImgPath + 'icons8-Treadmill-Filled.png';
    this.treadmills_icon_title = tempPathTitle;

    if(!this.kinematicsAnalysis.accesories.is_walker) {
      tempImgPath = this.imgPathDeactivated;
      tempPathTitle = 'No muletas';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Si muleatas';
    }
    this.walker_icon_path = tempImgPath + 'icons8-Crutch-Filled.png';
    this.walker_icon_title = tempPathTitle;

    if(!this.kinematicsAnalysis.accesories.is_orthoses) {
      tempImgPath = this.imgPathDeactivated;
      tempPathTitle = 'No órtesis';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Si órtesis';
    }
    this.orthoses_icon_path = tempImgPath + 'icons8-Armored-Boot.png';
    this.orthoses_icon_title = tempPathTitle;

    if(!this.kinematicsAnalysis.accesories.is_parallel_bars) {
      tempImgPath = this.imgPathDeactivated;
      tempPathTitle = 'No barras paralelas';
    } else {
      tempImgPath = this.imgPathActivated;
      tempPathTitle = 'Si barras paralelas';
    }
    this.parallel_bars_icon_path = tempImgPath + 'icons8-Equivalent.png';
    this.parallel_bars_icon_title = tempPathTitle;

    console.log("parallel_bars_icon_path",this.parallel_bars_icon_path);
    console.log("this.treadmills_icon_title",this.treadmills_icon_title);



  }


  

}
