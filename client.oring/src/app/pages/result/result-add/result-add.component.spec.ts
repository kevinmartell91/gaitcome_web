import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAddComponent } from './result-add.component';

describe('ResultAddComponent', () => {
  let component: ResultAddComponent;
  let fixture: ComponentFixture<ResultAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
