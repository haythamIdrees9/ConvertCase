import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetaService } from '../../../services/meta.service';
import { InfoService } from './info.service';


@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss', '../../../container.scss'],
  providers: [InfoService]
})
export class BMIComponent implements OnInit {
  avgWeight = '65';
  avgWeightPound = '143';
  avgHeightFeet = '5';
  avgHeightInch = '7';
  avgHeight = '170';
  bmiForm: FormGroup;
  bmiResult: { bmi: number, category: string,status:string } = {bmi:16,category:'',status:''};
  isUSType = true;
  constructor(private metaService: MetaService, private formBuilder: FormBuilder) {
    // Initialize the form group with validators
    this.bmiForm = this.formBuilder.group({
      height: [this.avgHeight, [Validators.required, Validators.min(1)]], 
      heightFeet: [this.avgHeightFeet, [Validators.required, Validators.min(1)]], 
      heightInch: [this.avgHeightInch, [Validators.required, Validators.min(0)]], 
      weight: [this.avgWeight, [Validators.required, Validators.min(1)]],
      weightPound: [this.avgWeightPound, [Validators.required, Validators.min(1)]],
      
    });
  }

  ngOnInit(): void {
    this.handleSeo();
    this.calculateBMI_US();
  }

  setUnitType(isUSType:boolean){
    this.isUSType = isUSType;
  }

  private handleSeo() {
    this.metaService.setTitle('BMI Calculator: Check Your Body Mass Index');
    this.metaService.setDescription(`Use our BMI calculator to quickly and accurately assess your Body Mass Index (BMI), a crucial indicator of your weight and overall health. Simply enter your height and weight, and our user-friendly tool will provide you with your BMI score and an interpretation of your weight status. Discover if you fall within the healthy range, and gain valuable insights into your weight management journey. Calculate your BMI today and take a step towards a healthier, happier you.`);
    this.metaService.setKeywords("BMI calculator, Body Mass Index, BMI calculation, Calculate BMI, weight assessment, healthy weight, weight management, health calculator, BMI interpretation, BMI range, weight status, obesity risk, weight assessment tool, BMI chart, ideal weight, BMI categories, health and weight");
  }

  calculateBMI_US(){
    this.feetAndInchesToMeters();
    this.poundsToKilograms();
    this.calculateBMI();
  }

  feetAndInchesToMeters() {
    const feetInMeters = Number(this.avgHeightFeet) * 30.48;
    const inchesInMeters = Number(this.avgHeightInch) * 2.54;
    this.avgHeight = `${parseFloat((feetInMeters + inchesInMeters).toFixed(2))}`;
    this.bmiForm.get('height')?.setValue(this.avgHeight)
  }

  poundsToKilograms() {
    this.avgWeight = `${parseFloat((Number(this.avgWeightPound) * 0.453592).toFixed(2))}`;
    this.bmiForm.get('weight')?.setValue(this.avgWeight)
  }


  calculateBMI() {
    const heightInM = (this.bmiForm.get('height')?.value / 100);
    const weightInKg = this.bmiForm.get('weight')?.value;

    // Check for valid input
    if (weightInKg <= 0 || heightInM <= 0) {
      return;
    }

    // Calculate BMI
    const bmi = weightInKg / (heightInM * heightInM);

    // Determine BMI category
    let category;
    if (bmi < 16) {
      category = "Underweight";
    } else if (bmi < 17) {
      category = "Moderate thinness";
    } else if (bmi < 18.5) {
      category = "Mild Thinness";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
      category = "overweight";
    } else if (bmi >= 30 && bmi < 35) {
      category = "obese class 1";
    } else if (bmi >= 35 && bmi < 40) {
      category = "obese class 2";
    }else {
      category = "obese class 3";
    }

    this.bmiResult = {
      bmi: parseFloat(bmi.toFixed(1)), // Limit to two decimal places
      category: category,
      status: category.toLowerCase().replace(/\s/g,'-')
    };
  }



}


/**
 * 
 * let ctx = document.getElementById("split-chart")

let a = 300 // fixed width for the chart

new Chart(ctx, {
  type: "doughnut",
  labels: ["yellow","green","Red", "pink", "blue","Invisible"],
  width: a,
  height: a,
  options: {
    cutout: "70%",
    rotation: -90,
    clip: { left: 0, top: 0, right: 0, bottom: -1 * 0.5 * a },
    plugins: {
      legend: {
        display: false
      }
    }
  },
  data: {
    datasets: [
      {
        label: "%",
        data: [10, 2, 3,13,10,10,10,8,65],
        backgroundColor: [
      "#BC2020","#D38888","#FFE400", "#008137", "#FFE400","#D38888","#BC2020","#8A0101",
          "rgba(46, 204, 113, 0)"
        ],
          borderColor: [
"#BC2020","#D38888","#FFE400", "#008137", "#FFE400","#D38888","#BC2020","#8A0101",
          "rgba(255, 255, 255 ,0)"
        ],

        
        borderWidth: 1
      }
    ]
  }
});

 * 
 */