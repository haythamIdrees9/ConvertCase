import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonWithCounterComponent } from '../../UI/button-with-counter/button-with-counter.component';
import { ButtonWithTwoOptionComponent } from '../../UI/button-with-two-option/button-with-two-option.component';
import { ResultActionsBtnComponent } from '../../UI/result-actions-btn/result-actions-btn.component';
import { sharedModule } from '../../UI/shared.module';
import { InOutTextInputModule } from 'src/app/UI/in-out-text-inputs/in-out-text-inputs.module';
import { TemperatureConvertersComponent } from './temperature-converters.component';

@NgModule({
  declarations: [TemperatureConvertersComponent],
  imports: [
    sharedModule,
    FormsModule,
    ResultActionsBtnComponent,
    InOutTextInputModule,
    RouterModule.forChild([{ path: '', component: TemperatureConvertersComponent }, {path: ':action', component: TemperatureConvertersComponent }])]
})
export class TemperatureConvertersModule { }