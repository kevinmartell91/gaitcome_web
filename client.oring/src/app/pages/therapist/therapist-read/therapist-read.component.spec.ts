import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistReadComponent } from './therapist-read.component';

describe('TherapistReadComponent', () => {
  let component: TherapistReadComponent;
  let fixture: ComponentFixture<TherapistReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
