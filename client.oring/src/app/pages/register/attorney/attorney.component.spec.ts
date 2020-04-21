/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AttorneyComponent } from './attorney.component';

describe('AttorneyComponent', () => {
  let component: AttorneyComponent;
  let fixture: ComponentFixture<AttorneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
