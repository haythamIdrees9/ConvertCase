import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoppularLinksComponent } from './poppular-links.component';

describe('PoppularLinksComponent', () => {
  let component: PoppularLinksComponent;
  let fixture: ComponentFixture<PoppularLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoppularLinksComponent]
    });
    fixture = TestBed.createComponent(PoppularLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
