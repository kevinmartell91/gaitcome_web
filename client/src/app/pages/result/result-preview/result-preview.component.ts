import { Component, OnInit , Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/Router';

export class SplKne {
        // normal_ranges: number[][];
         normal_ranges: Array<Array<number>>;
        // patient_angles: number[][];
         patient_angles: Array<Array<number>>;
}
export class KinematicsAnalysis {
    _id: string;
    therapist_id: string;
    medical_center_id: string;
    created_at: string;
    patient_id: string;
    accesories_descriptions: {  
      assited_walk: string,
      treadmills: string,
      walker: string,
      orthoses: string,
      parallel_bars: string
    }
    spl_kne: SplKne;
    // spl_kne: SeriesAngles;
}

@Component({
  selector: 'app-result-preview',
  templateUrl: './result-preview.component.html',
  styleUrls: ['./result-preview.component.css']
})
export class ResultPreviewComponent implements OnInit {

  constructor( ) { }

  @Input() kinematicsAnalysis: KinematicsAnalysis;
  

  ngOnInit() {
  }


}
