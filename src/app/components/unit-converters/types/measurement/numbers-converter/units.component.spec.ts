import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitConverterComponent } from './units-converter.component';


describe('LengthConverterComponent', () => {
  let component: UnitConverterComponent;
  let fixture: ComponentFixture<UnitConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitConverterComponent]
    });
    fixture = TestBed.createComponent(UnitConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
