import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTherapistComponent } from './view-therapist.component';

describe('ViewTherapistComponent', () => {
  let component: ViewTherapistComponent;
  let fixture: ComponentFixture<ViewTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
