import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodeDecodeComponent } from './encode-decode.component';

describe('EncodeDecodeComponent', () => {
  let component: EncodeDecodeComponent;
  let fixture: ComponentFixture<EncodeDecodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncodeDecodeComponent]
    });
    fixture = TestBed.createComponent(EncodeDecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
