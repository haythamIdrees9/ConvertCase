import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMRComponent } from './bmr.component';

describe('BMRComponent', () => {
  let component: BMRComponent;
  let fixture: ComponentFixture<BMRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
