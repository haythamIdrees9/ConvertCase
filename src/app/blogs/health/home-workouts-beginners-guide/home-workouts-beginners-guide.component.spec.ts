import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkoutsBeginnersGuideComponent } from './home-workouts-beginners-guide.component';

describe('HomeWorkoutsBeginnersGuideComponent', () => {
  let component: HomeWorkoutsBeginnersGuideComponent;
  let fixture: ComponentFixture<HomeWorkoutsBeginnersGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeWorkoutsBeginnersGuideComponent]
    });
    fixture = TestBed.createComponent(HomeWorkoutsBeginnersGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
