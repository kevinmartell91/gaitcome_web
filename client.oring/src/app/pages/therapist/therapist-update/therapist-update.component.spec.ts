import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistUpdateComponent } from './therapist-update.component';

describe('TherapistUpdateComponent', () => {
  let component: TherapistUpdateComponent;
  let fixture: ComponentFixture<TherapistUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
