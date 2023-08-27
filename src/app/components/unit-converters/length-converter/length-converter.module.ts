import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InOutTextInputModule } from 'src/app/UI/in-out-text-inputs/in-out-text-inputs.module';
import { SelectAlwaysOpenComponent } from 'src/app/UI/select-always-open/select-always-open.component';
import { LengthConverterComponent } from './length-converter.component';
import { ResultActionsBtnComponent } from 'src/app/UI/result-actions-btn/result-actions-btn.component';
import { LengthUnitsService } from './length-units.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LengthConverterComponent],
  imports: [
      FormsModule,
      CommonModule,
      SelectAlwaysOpenComponent,
      InOutTextInputModule,
      ResultActionsBtnComponent,
      RouterModule.forChild([{ path: '', component: LengthConverterComponent}, {path: ':units-type', loadChildren:() => import('./length-unit-converter/length-unit-converter.module').then(m => m.LengthUnitConverterModule) }])],
      providers:[LengthUnitsService]

})
export class LengthConverterModule { }