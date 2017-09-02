import {Component, OnInit, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { TherapistAddComponent } from "../../therapist/therapist-add/therapist-add.component";

@Component({
  selector: 'app-therapist-dashboard-list',
  templateUrl: './therapist-list.component.html',
  styleUrls: ['./therapist-list.component.css']
})
export class TherapistListDashboardComponent implements OnInit {

  medical_center_id:string;
  medical_center_name:string;

  constructor() { }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.medical_center_id = currentUser && currentUser.entity._id;
    this.medical_center_name = currentUser && currentUser.entity.name;

  }

}

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}