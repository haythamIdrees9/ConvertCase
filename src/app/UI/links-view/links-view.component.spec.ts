import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksViewComponent } from './links-view.component';

describe('LinksViewComponent', () => {
  let component: LinksViewComponent;
  let fixture: ComponentFixture<LinksViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksViewComponent]
    });
    fixture = TestBed.createComponent(LinksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
