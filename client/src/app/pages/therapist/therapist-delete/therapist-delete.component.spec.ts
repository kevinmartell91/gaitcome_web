import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistDeleteComponent } from './therapist-delete.component';

describe('TherapistDeleteComponent', () => {
  let component: TherapistDeleteComponent;
  let fixture: ComponentFixture<TherapistDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
