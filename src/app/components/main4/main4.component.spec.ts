import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main4Component } from './main4.component';

describe('Main4Component', () => {
  let component: Main4Component;
  let fixture: ComponentFixture<Main4Component>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Main4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
