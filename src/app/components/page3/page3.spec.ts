import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3 } from './page3';

describe('Page3', () => {
  let component: Page3;
  let fixture: ComponentFixture<Page3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
