import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../../../../UI/shared.module';
import { LinksContainerComponent } from '../../links-container/links-container.component';
import { BMIComponent } from './bmi.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [BMIComponent],
  imports: [sharedModule,
    FormsModule,
    ReactiveFormsModule,
    LinksContainerComponent,
    HighchartsChartModule,
    RouterModule.forChild([{ path: '', component: BMIComponent }])]

})
export class BmiConverterModule { }