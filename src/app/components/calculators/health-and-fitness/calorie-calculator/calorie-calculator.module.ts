import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../../../../UI/shared.module';
import { LinksContainerComponent } from '../../links-container/links-container.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DropdownComponent } from 'src/app/UI/dropdown/dropdown.component';
import { CalorieCalculator } from './calorie-calculator.component';

@NgModule({
  declarations: [CalorieCalculator],
  imports: [sharedModule,
    FormsModule,
    ReactiveFormsModule,
    LinksContainerComponent,
    HighchartsChartModule,
    DropdownComponent,
    RouterModule.forChild([{ path: '', component: CalorieCalculator }])]

})
export class CalorieModule { }