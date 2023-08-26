import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextManipulationComponent } from './text-manipulation.component';

describe('TextManipulationComponent', () => {
  let component: TextManipulationComponent;
  let fixture: ComponentFixture<TextManipulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextManipulationComponent]
    });
    fixture = TestBed.createComponent(TextManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
