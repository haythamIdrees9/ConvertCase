import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DropdownComponent } from 'src/app/UI/dropdown/dropdown.component';
import { CalorieCalculator } from './calorie-calculator.component';
import { ContentModule } from 'src/app/UI/content/conent.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CalorieCalculator],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContentModule,
    DropdownComponent,
    RouterModule.forChild([{ path: '', component: CalorieCalculator }])]

})
export class CalorieModule { }