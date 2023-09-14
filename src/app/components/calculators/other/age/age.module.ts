import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DateSelectorComponent } from 'src/app/UI/date-selector/date-selector.component';
import { AgeComponent } from './age.component';
import { ContentModule } from 'src/app/UI/content/conent.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AgeComponent],
  imports: [
    DateSelectorComponent,
    FormsModule,
    ContentModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: AgeComponent }])]

})
export class AgeModule { }