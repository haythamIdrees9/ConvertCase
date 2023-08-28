import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightUnitConverterComponent } from './weight-unit-converter.component';

describe('WeightUnitConverterComponent', () => {
  let component: WeightUnitConverterComponent;
  let fixture: ComponentFixture<WeightUnitConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeightUnitConverterComponent]
    });
    fixture = TestBed.createComponent(WeightUnitConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
