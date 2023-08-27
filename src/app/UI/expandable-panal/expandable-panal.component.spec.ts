import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandablePanalComponent } from './expandable-panal.component';

describe('ExpandablePanalComponent', () => {
  let component: ExpandablePanalComponent;
  let fixture: ComponentFixture<ExpandablePanalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandablePanalComponent]
    });
    fixture = TestBed.createComponent(ExpandablePanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
