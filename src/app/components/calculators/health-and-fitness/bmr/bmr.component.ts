import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetaService } from '../../../services/meta.service';


@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.scss', '../../../container.scss','../../calculators.component.scss'],
  providers: []
})
export class BMRComponent implements OnInit {
  selectedGender: string = 'female';
  age: number = 18;
  
  avgWeight = '50';
  avgWeightPound = '110';
  avgHeightFeet = '5';
  avgHeightInch = '7';
  avgHeight = '170';
  bmrForm!: FormGroup;
  isUSType = true;
  bmr!: number;
  constructor(private metaService:MetaService, private formBuilder: FormBuilder) {


  }
  
  ngOnInit(): void {
    this.handleSeo();
    this.buildForm();
    this.calculateBMR();
  }
  
  private handleSeo() {
    this.metaService.setTitle('Unlocking Your Potential: Understanding Basal Metabolic Rate (BMR)');
    this.metaService.setDescription(`Discover the Science Behind Basal Metabolic Rate (BMR) and Revolutionize Your Health Journey. Learn how to Calculate BMR, Set Personalized Fitness Goals, and Achieve Your Ideal Weight. Explore FAQs, Practical Applications, and Additional Resources for a Holistic Approach to Well-being.`);
    this.metaService.setKeywords("Basal Metabolic Rate (BMR), BMR Calculation, Understanding BMR, Fitness and BMR, BMR and Weight Management, Personalized Nutrition, BMR Calculator, Metabolic Health, Exercise Planning with BMR, Health and Fitness, Daily Caloric Needs, Weight Loss and BMR, Muscle Gain and BMR, BMR FAQs, Nutrition and BMR");
  }
  setUnitType(isUSType:boolean){
    this.isUSType = isUSType;
    this.buildForm();
  }

  buildForm(){
    this.bmrForm = this.formBuilder.group({
      gender: [this.selectedGender, [Validators.required]], 
      age: [this.age, [Validators.required, Validators.min(1)]], 
      height: [this.avgHeight, [Validators.required, Validators.min(1)]], 
      heightFeet: [this.avgHeightFeet, [Validators.required, Validators.min(1)]], 
      heightInch: [this.avgHeightInch, [Validators.required, Validators.min(0)]], 
      weight: [this.avgWeight, [Validators.required, Validators.min(1)]],
      weightPound: [this.avgWeightPound, [Validators.required, Validators.min(1)]],
    });
  }


  calculateBMR_US(){
    this.feetAndInchesToMeters();
    this.poundsToKilograms();
    this.calculateBMR();
  }

  feetAndInchesToMeters() {
    const feetInMeters = Number(this.avgHeightFeet) * 30.48;
    const inchesInMeters = Number(this.avgHeightInch) * 2.54;
    this.avgHeight = `${parseFloat((feetInMeters + inchesInMeters).toFixed(2))}`;
    this.bmrForm.get('height')?.setValue(this.avgHeight)
  }

  poundsToKilograms() {
    this.avgWeight = `${parseFloat((Number(this.avgWeightPound) * 0.453592).toFixed(2))}`;
    this.bmrForm.get('weight')?.setValue(this.avgWeight)
  }

  calculateBMR() {
    const heightInM = (this.bmrForm.get('height')?.value);
    const weightInKg = this.bmrForm.get('weight')?.value;
    const age = this.bmrForm.get('age')?.value;
    
    // Check for valid input
    if (weightInKg <= 0 || heightInM <= 0 || age < 1) {
      return;
    }


    if (age && heightInM && weightInKg) {
      if (this.selectedGender === 'male') {
        // Calculate BMR for males
        this.bmr = Math.round(88.362 + (13.397 * weightInKg) + (4.799 * heightInM) - (5.677 * this.age));
      } else if (this.selectedGender === 'female') {
        // Calculate BMR for females
        this.bmr = Math.round(447.593 + (9.247 * weightInKg) + (3.098 * heightInM) - (4.330 * this.age));
      }
    } else {
      this.bmr = 0;
    }
  }

  calculateCalories(activityLevelMultiplier: number) {
    if (this.bmr !== null) {
      // Calculate daily calorie needs based on BMR and activity level multiplier
      return Math.round(this.bmr * activityLevelMultiplier);
    }
    return 0;
  }
  
}
