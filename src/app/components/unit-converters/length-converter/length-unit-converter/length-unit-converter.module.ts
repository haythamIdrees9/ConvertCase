import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InOutTextInputModule } from 'src/app/UI/in-out-text-inputs/in-out-text-inputs.module';
import { SelectAlwaysOpenComponent } from 'src/app/UI/select-always-open/select-always-open.component';
import { ResultActionsBtnComponent } from 'src/app/UI/result-actions-btn/result-actions-btn.component';
import { CommonModule } from '@angular/common';
import { LengthUnitConverterComponent } from './length-unit-converter.component';

@NgModule({
  declarations: [LengthUnitConverterComponent],
  imports: [
      FormsModule,
      CommonModule,
      SelectAlwaysOpenComponent,
      InOutTextInputModule,
      ResultActionsBtnComponent,
      RouterModule.forChild([{path: '', component: LengthUnitConverterComponent }])],
})
export class LengthUnitConverterModule { }