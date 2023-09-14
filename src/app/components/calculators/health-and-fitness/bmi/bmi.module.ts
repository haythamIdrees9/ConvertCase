import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../../../../UI/shared.module';
import { BMIComponent } from './bmi.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { TabsViewComponent } from 'src/app/UI/tabs-view/tabs-view.component';

@NgModule({
  declarations: [BMIComponent],
  imports: [sharedModule,
    FormsModule,
    ReactiveFormsModule,
    TabsViewComponent,
    HighchartsChartModule,
    RouterModule.forChild([{ path: '', component: BMIComponent }])]

})
export class BMIModule { }