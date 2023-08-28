import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InOutTextInputModule } from 'src/app/UI/in-out-text-inputs/in-out-text-inputs.module';
import { SelectAlwaysOpenComponent } from 'src/app/UI/select-always-open/select-always-open.component';
import { WeightConverterComponent } from './weight-converter.component';
import { ResultActionsBtnComponent } from 'src/app/UI/result-actions-btn/result-actions-btn.component';
import { WightUnitsService } from './weight-units.service';
import { CommonModule } from '@angular/common';
import { PoppularLinksComponent } from '../poppular-links/poppular-links.component';
import { WeightUnitConverterComponent } from './weight-unit-converter/weight-unit-converter.component';

@NgModule({
  declarations: [WeightConverterComponent,WeightUnitConverterComponent],
  imports: [
      FormsModule,
      CommonModule,
      SelectAlwaysOpenComponent,
      InOutTextInputModule,
      ResultActionsBtnComponent,
      PoppularLinksComponent,
      RouterModule.forChild([{ path: '', component: WeightConverterComponent}, 
      
      {path: ':units-type', component:WeightUnitConverterComponent }
    ])],
      providers:[WightUnitsService]

})
export class WeightConverterModule { }