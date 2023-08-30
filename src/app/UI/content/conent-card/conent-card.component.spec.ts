import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConentCardComponent } from './conent-card.component';

describe('ConentCardComponent', () => {
  let component: ConentCardComponent;
  let fixture: ComponentFixture<ConentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConentCardComponent]
    });
    fixture = TestBed.createComponent(ConentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
