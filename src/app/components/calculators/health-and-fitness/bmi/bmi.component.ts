import { Component, OnInit } from '@angular/core';
import { minorWords } from '../../../../utils/words';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '../../../services/meta.service';
import { InfoService } from './info.service';


@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss','../../../container.scss'],
  providers:[InfoService]
})
export class BMIComponent implements OnInit {

  constructor(private route:ActivatedRoute, private metaService: MetaService, private infoService:InfoService) { }

  ngOnInit(): void {
    this.handleSeo()
  }
  
  private handleSeo() {
    this.metaService.setTitle('Text Conversion: Uppercase, Lowercase, Title and More');
    this.metaService.setDescription(`Text case converter - A set of functions that can be used to convert text to different cases, such as uppercase, lowercase, title case, and camel case. Perfect for formatting text for different purposes, such as headings, titles, and code.`);
    this.metaService.setKeywords("uppercase conversion, lowercase conversion, title case conversion, capitalized case conversion, camel case conversion, kebab case conversion, snake case conversion, inverse case conversion")
  }


  calculateBMI(weightInKg:number, heightInM:number) {
    // Check for valid input
    if (weightInKg <= 0 || heightInM <= 0) {
        return "Invalid input. Please enter valid weight and height.";
    }

    // Calculate BMI
    const bmi = weightInKg / (heightInM * heightInM);

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    return {
        bmi: bmi.toFixed(2), // Limit to two decimal places
        category: category,
    };
}



}
