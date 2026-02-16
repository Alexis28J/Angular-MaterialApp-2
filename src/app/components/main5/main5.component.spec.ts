import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Main5Component } from './main5.component';

describe('Main5Component', () => {
  let component: Main5Component;
  let fixture: ComponentFixture<Main5Component>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Main5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
