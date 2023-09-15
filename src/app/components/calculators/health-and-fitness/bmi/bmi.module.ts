import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BMIComponent } from './bmi.component';

import { CommonModule } from '@angular/common';
import { ContentModule } from 'src/app/UI/content/conent.module';

@NgModule({
  declarations: [BMIComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContentModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: BMIComponent }])]

})
export class BMIModule { }