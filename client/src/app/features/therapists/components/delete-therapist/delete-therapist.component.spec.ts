import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTherapistComponent } from './delete-therapist.component';

describe('DeleteTherapistComponent', () => {
  let component: DeleteTherapistComponent;
  let fixture: ComponentFixture<DeleteTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
