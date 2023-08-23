import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithTwoOptionComponent } from './button-with-two-option.component';

describe('ButtonWithTwoOptionComponent', () => {
  let component: ButtonWithTwoOptionComponent;
  let fixture: ComponentFixture<ButtonWithTwoOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonWithTwoOptionComponent]
    });
    fixture = TestBed.createComponent(ButtonWithTwoOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
