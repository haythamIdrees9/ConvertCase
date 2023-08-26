import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceConversionsComponent } from './distance-conversions.component';

describe('DistanceConversionsComponent', () => {
  let component: DistanceConversionsComponent;
  let fixture: ComponentFixture<DistanceConversionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistanceConversionsComponent]
    });
    fixture = TestBed.createComponent(DistanceConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
