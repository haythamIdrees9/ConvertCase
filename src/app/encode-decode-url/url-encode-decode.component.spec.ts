import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodeDecodeUrlComponent } from './url-encode-decode.component';

describe('EncodeDecodeUrlComponent', () => {
  let component: EncodeDecodeUrlComponent;
  let fixture: ComponentFixture<EncodeDecodeUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncodeDecodeUrlComponent]
    });
    fixture = TestBed.createComponent(EncodeDecodeUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
