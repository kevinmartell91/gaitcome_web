import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDeleteComponent } from './result-delete.component';

describe('ResultDeleteComponent', () => {
  let component: ResultDeleteComponent;
  let fixture: ComponentFixture<ResultDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
