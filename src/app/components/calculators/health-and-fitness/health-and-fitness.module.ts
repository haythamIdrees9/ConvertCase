import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: 'bmi', loadChildren: () => import('./bmi/bmi.module').then(m => m.BmiConverterModule) },
      { path: 'bmr', loadChildren: () => import('./bmr/bmr.module').then(m => m.BMRConverterModule) },
      
      {path:'**',redirectTo:'bmi'}
    ])
  ]

})
export class HealthAndFitnessModule { }