/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MedicalCenterComponent_out } from './medical-center.component';

describe('MedicalCenterComponent_out', () => {
  let component: MedicalCenterComponent_out;
  let fixture: ComponentFixture<MedicalCenterComponent_out>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalCenterComponent_out ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCenterComponent_out);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
