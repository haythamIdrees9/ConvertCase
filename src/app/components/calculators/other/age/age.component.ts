import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetaService } from '../../../services/meta.service';


@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['../../../container.scss','../../calculators.component.scss','./age.component.scss'],
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
  prevYear = this.startDate.getFullYear();
  constructor(private metaService:MetaService) {


  }
  
  ngOnInit(): void {
    this.handleSeo();
    this.calculateAge();
  }
  
  private handleSeo() {
    this.metaService.setTitle('Discover Your Age: User Age Calculator');
    this.metaService.setDescription(`Calculate your age instantly with our user-friendly Age Calculator tool. Simply enter your birthdate, and we'll provide you with your current age in years, months, and days. It's quick, accurate, and free. Try it now!`);
    this.metaService.setKeywords("age calculator, calculate age, user age calculation, birthdate calculator, age in years and months, how old am I, accurate age calculation, online age calculator, age in days and months, birthday age tool");
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
