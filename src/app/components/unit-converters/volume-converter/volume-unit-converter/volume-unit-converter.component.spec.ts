import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeUnitConverterComponent } from './volume-unit-converter.component';

describe('VolumeUnitConverterComponent', () => {
  let component: VolumeUnitConverterComponent;
  let fixture: ComponentFixture<VolumeUnitConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolumeUnitConverterComponent]
    });
    fixture = TestBed.createComponent(VolumeUnitConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
