import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTabComponent } from './web-tab.component';

describe('WebTabComponent', () => {
  let component: WebTabComponent;
  let fixture: ComponentFixture<WebTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebTabComponent]
    });
    fixture = TestBed.createComponent(WebTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
