import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthUnitConverterComponent } from './length-unit-converter.component';

describe('LengthUnitConverterComponent', () => {
  let component: LengthUnitConverterComponent;
  let fixture: ComponentFixture<LengthUnitConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LengthUnitConverterComponent]
    });
    fixture = TestBed.createComponent(LengthUnitConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
