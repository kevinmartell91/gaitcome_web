import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTherapistComponent } from './add-therapist.component';

describe('AddTherapistComponent', () => {
  let component: AddTherapistComponent;
  let fixture: ComponentFixture<AddTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
