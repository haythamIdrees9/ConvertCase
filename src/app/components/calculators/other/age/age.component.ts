import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetaService } from '../../../services/meta.service';


@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss', '../../../container.scss','../../calculators.component.scss'],
  providers: []
})
export class AgeComponent implements OnInit {
  result: {
    years: number,
    months: number,
    weeks: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  } = {
    years:0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  endDate = new Date();
  startDate = new Date(this.endDate.getFullYear() - 18,this.endDate.getMonth(),this.endDate.getDay());
  
  constructor(private metaService:MetaService, private formBuilder: FormBuilder) {


  }
  
  ngOnInit(): void {
    this.handleSeo();
    this.calculateAge();
  }
  
  private handleSeo() {
    // this.metaService.setTitle('Unlocking Your Potential: Understanding Basal Metabolic Rate (BMR)');
    // this.metaService.setDescription(`Discover the Science Behind Basal Metabolic Rate (BMR) and Revolutionize Your Health Journey. Learn how to Calculate BMR, Set Personalized Fitness Goals, and Achieve Your Ideal Weight. Explore FAQs, Practical Applications, and Additional Resources for a Holistic Approach to Well-being.`);
    // this.metaService.setKeywords("Basal Metabolic Rate (BMR), BMR Calculation, Understanding BMR, Fitness and BMR, BMR and Weight Management, Personalized Nutrition, BMR Calculator, Metabolic Health, Exercise Planning with BMR, Health and Fitness, Daily Caloric Needs, Weight Loss and BMR, Muscle Gain and BMR, BMR FAQs, Nutrition and BMR");
  }
  

  onEndDateChange(date:Date){
    this.endDate = date;
    this.calculateAge();
  }

  onStartDateChange(date:Date){
    this.startDate = date;
    this.calculateAge();
  }

  calculateAge() {
    const timeDifference = this.endDate.getTime() - this.startDate.getTime();
    
    const millisecondsPerSecond = 1000;
    const secondsPerMinute = 60;
    const minutesPerHour = 60;
    const hoursPerDay = 24;
    const daysPerWeek = 7;
    const daysPerMonth = 30.44; // An approximate value for an average month
    
    this.result.years = this.endDate.getFullYear() - this.startDate.getFullYear();
    this.result.seconds = Math.floor(timeDifference / millisecondsPerSecond);
    this.result.minutes = Math.floor(this.result.seconds / secondsPerMinute);
    this.result.hours = Math.floor(this.result.minutes / minutesPerHour);
    this.result.days = Math.floor(this.result.hours / hoursPerDay);
    this.result.weeks = Math.floor(this.result.days / daysPerWeek);
    this.result.months = Math.floor(this.result.days / daysPerMonth);
  }
}
