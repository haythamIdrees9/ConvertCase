import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetaService } from '../../../services/meta.service';
import { InfoService } from './info.service';


@Component({
  selector: 'app-calorie-calculator',
  templateUrl: './calorie-calculator.component.html',
  styleUrls: ['./calorie-calculator.component.scss', '../../../container.scss','../health.component.scss'],
  providers: [InfoService]
})
export class CalorieCalculator implements OnInit {
  selectedGender: string = 'female';
  age: number = 18;

  avgWeight = '50';
  avgWeightPound = '110';
  avgHeightFeet = '5';
  avgHeightInch = '7';
  avgHeight = '170';
  userForm!: FormGroup;
  isUSType = true;

  activity = [
    { key: 'sedentary', label: 'Little to no exercise' },
    { key: 'lightly_active', label: 'Light exercise 1-3 days a week' },
    { key: 'moderately_active', label: 'Moderate exercise 3-5 days a week' },
    { key: 'very_active', label: 'Hard exercise 6-7 days a week' },
    { key: 'super_active', label: 'Very hard exercise or physical job' }
  ];
  
  selectedActivity = this.activity[1].key;
  calorieResults: { label: string, calories: number, percentage: string }[] = [];

  constructor(private metaService: MetaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.handleSeo();
    this.buildForm();
    this.calculateCalories();
  }

  private handleSeo() {
    // this.metaService.setTitle('Unlocking Your Potential: Understanding Basal Metabolic Rate (calorie)');
    // this.metaService.setDescription(`Discover the Science Behind Basal Metabolic Rate (calorie) and Revolutionize Your Health Journey. Learn how to Calculate calorie, Set Personalized Fitness Goals, and Achieve Your Ideal Weight. Explore FAQs, Practical Applications, and Additional Resources for a Holistic Approach to Well-being.`);
    // this.metaService.setKeywords("Basal Metabolic Rate (calorie), calorie Calculation, Understanding calorie, Fitness and calorie, calorie and Weight Management, Personalized Nutrition, calorie Calculator, Metabolic Health, Exercise Planning with calorie, Health and Fitness, Daily Caloric Needs, Weight Loss and calorie, Muscle Gain and calorie, calorie FAQs, Nutrition and calorie");
  }
  setUnitType(isUSType: boolean) {
    this.isUSType = isUSType;
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuilder.group({
      gender: [this.selectedGender, [Validators.required]],
      age: [this.age, [Validators.required, Validators.min(1)]],
      height: [this.avgHeight, [Validators.required, Validators.min(1)]],
      heightFeet: [this.avgHeightFeet, [Validators.required, Validators.min(1)]],
      heightInch: [this.avgHeightInch, [Validators.required, Validators.min(0)]],
      weight: [this.avgWeight, [Validators.required, Validators.min(1)]],
      weightPound: [this.avgWeightPound, [Validators.required, Validators.min(1)]],
      activity: [this.selectedActivity, [Validators.required]],
    });
  }


  calculateCalories_US() {
    this.feetAndInchesToMeters();
    this.poundsToKilograms();
    this.calculateCalories();
  }

  feetAndInchesToMeters() {
    const feetInMeters = Number(this.avgHeightFeet) * 30.48;
    const inchesInMeters = Number(this.avgHeightInch) * 2.54;
    this.avgHeight = `${parseFloat((feetInMeters + inchesInMeters).toFixed(2))}`;
    this.userForm.get('height')?.setValue(this.avgHeight)
  }

  poundsToKilograms() {
    this.avgWeight = `${parseFloat((Number(this.avgWeightPound) * 0.453592).toFixed(2))}`;
    this.userForm.get('weight')?.setValue(this.avgWeight)
  }

  calculateCalories() {
    const MALE_CONSTANT = 5;
    const FEMALE_CONSTANT = 161;

    const height = (this.userForm.get('height')?.value);
    const weight = this.userForm.get('weight')?.value;
    const age = this.userForm.get('age')?.value;

    const gender:string = this.userForm.get('gender')?.value || 'male';
    const activityLevel:string  = this.userForm.get('activity')?.value;

    // Determine the gender constant based on the selected gender
    const genderConstant = ( gender === 'male') ? MALE_CONSTANT : FEMALE_CONSTANT;

    // Calculate BMR using the Mifflin-St Jeor Equation
    const calorie = (10 * weight) + (6.25 * height) - (5 * age) + genderConstant;

    // Define activity factors for different activity levels
    const activityFactors:any = {
      'sedentary': 1.2,
      'lightly_active': 1.375,
      'moderately_active': 1.55,
      'very_active': 1.725,
      'super_active': 1.9
    };
    console.log('activityLevel',activityLevel);
    
    // Calculate daily calorie needs by applying the activity factor
    if(typeof activityLevel === 'string'){
      const activityFactor = activityFactors[activityLevel];
      const dailyCalories = calorie * activityFactor;
      
      this.calorieResults = [{ label: 'Maintain weight', calories: Math.round(dailyCalories), percentage: '100%' },
      { label: 'Mild weight loss', calories: Math.round(dailyCalories * 0.9), percentage: '90%' },
      { label: 'Weight loss', calories: Math.round(dailyCalories * 0.79), percentage: '79%' },
      { label: 'Extreme weight loss', calories: Math.round(dailyCalories * 0.59), percentage: '59%' }]
      console.log(dailyCalories,'in',this.calorieResults,activityFactor,activityLevel);
    }
  

  }


}
