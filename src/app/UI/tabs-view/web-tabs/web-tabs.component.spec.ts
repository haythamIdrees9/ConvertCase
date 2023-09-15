import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTabsComponent } from './web-tabs.component';

describe('WebTabsComponent', () => {
  let component: WebTabsComponent;
  let fixture: ComponentFixture<WebTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebTabsComponent]
    });
    fixture = TestBed.createComponent(WebTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
