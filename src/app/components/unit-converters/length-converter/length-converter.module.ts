import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InOutTextInputModule } from 'src/app/UI/in-out-text-inputs/in-out-text-inputs.module';
import { SelectAlwaysOpenComponent } from 'src/app/UI/select-always-open/select-always-open.component';
import { LengthConverterComponent } from './length-converter.component';
import { ResultActionsBtnComponent } from 'src/app/UI/result-actions-btn/result-actions-btn.component';
import { LengthUnitsService } from './length-units.service';
import { CommonModule } from '@angular/common';
import { PoppularLinksComponent } from '../poppular-links/poppular-links.component';
import { LengthUnitConverterComponent } from './length-unit-converter/length-unit-converter.component';

@NgModule({
  declarations: [LengthConverterComponent,LengthUnitConverterComponent],
  imports: [
      FormsModule,
      CommonModule,
      SelectAlwaysOpenComponent,
      InOutTextInputModule,
      ResultActionsBtnComponent,
      PoppularLinksComponent,
      RouterModule.forChild([{ path: '', component: LengthConverterComponent}, 
      
      {path: ':units-type', component:LengthUnitConverterComponent }
    ])],
      providers:[LengthUnitsService]

})
export class LengthConverterModule { }