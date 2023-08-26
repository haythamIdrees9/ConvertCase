import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassConverterToolComponent } from './mass-converter-tool.component';

describe('MassConverterToolComponent', () => {
  let component: MassConverterToolComponent;
  let fixture: ComponentFixture<MassConverterToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MassConverterToolComponent]
    });
    fixture = TestBed.createComponent(MassConverterToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
