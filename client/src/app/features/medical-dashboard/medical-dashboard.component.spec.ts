import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDashboardComponent } from './medical-dashboard.component';

describe('MedicalDashboardComponent', () => {
  let component: MedicalDashboardComponent;
  let fixture: ComponentFixture<MedicalDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
