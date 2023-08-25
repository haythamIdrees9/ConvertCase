import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFormatConverterComponent } from './data-format-converter.component';

describe('AppDataFormatConverterComponent', () => {
  let component: DataFormatConverterComponent;
  let fixture: ComponentFixture<DataFormatConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataFormatConverterComponent]
    });
    fixture = TestBed.createComponent(DataFormatConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
