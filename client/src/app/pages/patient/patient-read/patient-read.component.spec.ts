import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReadComponent } from './patient-read.component';

describe('PatientReadComponent', () => {
  let component: PatientReadComponent;
  let fixture: ComponentFixture<PatientReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
