import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/components/services/meta.service';

@Component({
  selector: 'app-home-workouts-beginners-guide',
  templateUrl: './home-workouts-beginners-guide.component.html',
  styleUrls: ['./home-workouts-beginners-guide.component.scss'],
})
export class HomeWorkoutsBeginnersGuideComponent implements OnInit {

  constructor(private metaService: MetaService) {

  }
  ngOnInit(): void {
    this.metaService.setKeywords("home workouts, beginner's fitness, setting goals, fitness journey, workout routine, fitness goals, workout space, bodyweight exercises, nutrition tips, healthy lifestyle, motivation, fitness beginners, starting fitness, exercise at home")
    this.metaService.setDescription("Discover how to kickstart your fitness journey at home with this beginner's guide. Learn to set realistic goals, create a workout space, and choose the right exercises. Get motivated and embark on a path to a healthier lifestyle today.")
    this.metaService.setTitle("Beginner's Guide to Home Workouts");
  }

}
