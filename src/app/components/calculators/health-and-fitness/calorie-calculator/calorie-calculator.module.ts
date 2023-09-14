import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../../../../UI/shared.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { DropdownComponent } from 'src/app/UI/dropdown/dropdown.component';
import { CalorieCalculator } from './calorie-calculator.component';
import { TabsViewComponent } from 'src/app/UI/tabs-view/tabs-view.component';

@NgModule({
  declarations: [CalorieCalculator],
  imports: [sharedModule,
    FormsModule,
    TabsViewComponent,
    ReactiveFormsModule,
    HighchartsChartModule,
    DropdownComponent,
    RouterModule.forChild([{ path: '', component: CalorieCalculator }])]

})
export class CalorieModule { }