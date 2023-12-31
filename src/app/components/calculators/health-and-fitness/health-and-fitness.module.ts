import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: 'bmi-calculator', loadChildren: () => import('./bmi/bmi.module').then(m => m.BMIModule) },
      { path: 'bmr-calculator', loadChildren: () => import('./bmr/bmr.module').then(m => m.BMRModule) },
      { path: 'calorie-needed-calculator', loadChildren: () => import('./calorie-calculator/calorie-calculator.module').then(m => m.CalorieModule) },
      
      
      {path:'**',redirectTo:'bmi-calculator'}
    ])
  ]

})
export class HealthAndFitnessModule { }