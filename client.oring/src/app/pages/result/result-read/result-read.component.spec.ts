import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultReadComponent } from './result-read.component';

describe('ResultReadComponent', () => {
  let component: ResultReadComponent;
  let fixture: ComponentFixture<ResultReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
