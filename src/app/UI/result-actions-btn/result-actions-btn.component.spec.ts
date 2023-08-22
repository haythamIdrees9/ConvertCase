import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultActionsBtnComponent } from './result-actions-btn.component';

describe('ResultActionsBtnComponent', () => {
  let component: ResultActionsBtnComponent;
  let fixture: ComponentFixture<ResultActionsBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultActionsBtnComponent]
    });
    fixture = TestBed.createComponent(ResultActionsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
