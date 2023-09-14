import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../../../../UI/shared.module';
import { BMRComponent } from './bmr.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DropdownComponent } from 'src/app/UI/dropdown/dropdown.component';
import { TabsViewComponent } from 'src/app/UI/tabs-view/tabs-view.component';

@NgModule({
  declarations: [BMRComponent],
  imports: [sharedModule,
    TabsViewComponent,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    DropdownComponent,
    RouterModule.forChild([{ path: '', component: BMRComponent }])]

})
export class BMRModule { }