import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultUpdateComponent } from './result-update.component';

describe('ResultUpdateComponent', () => {
  let component: ResultUpdateComponent;
  let fixture: ComponentFixture<ResultUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
