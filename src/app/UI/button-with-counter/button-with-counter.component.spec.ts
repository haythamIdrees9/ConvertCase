import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithCounterComponent } from './button-with-counter.component';

describe('ButtonWithCounterComponent', () => {
  let component: ButtonWithCounterComponent;
  let fixture: ComponentFixture<ButtonWithCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonWithCounterComponent]
    });
    fixture = TestBed.createComponent(ButtonWithCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
