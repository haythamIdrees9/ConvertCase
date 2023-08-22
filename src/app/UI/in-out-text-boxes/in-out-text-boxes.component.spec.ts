import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutTextBoxesComponent } from './in-out-text-boxes.component';

describe('InOutTextBoxesComponent', () => {
  let component: InOutTextBoxesComponent;
  let fixture: ComponentFixture<InOutTextBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOutTextBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InOutTextBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
