import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsRootComponent } from './units-root.component';

describe('UnitsRootComponent', () => {
  let component: UnitsRootComponent;
  let fixture: ComponentFixture<UnitsRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitsRootComponent]
    });
    fixture = TestBed.createComponent(UnitsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
