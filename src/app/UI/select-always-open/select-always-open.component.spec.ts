import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAlwaysOpenComponent } from './select-always-open.component';

describe('SelectAlwaysOpenComponent', () => {
  let component: SelectAlwaysOpenComponent;
  let fixture: ComponentFixture<SelectAlwaysOpenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectAlwaysOpenComponent]
    });
    fixture = TestBed.createComponent(SelectAlwaysOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
