import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConvertersComponent } from './unit-converters.component';

describe('UnitConvertersComponent', () => {
  let component: UnitConvertersComponent;
  let fixture: ComponentFixture<UnitConvertersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitConvertersComponent]
    });
    fixture = TestBed.createComponent(UnitConvertersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
