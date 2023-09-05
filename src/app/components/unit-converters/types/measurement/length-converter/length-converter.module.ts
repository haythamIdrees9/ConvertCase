import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UnitConverterComponent } from './units-converter.component';
import { UnitsService } from './units.service';
import { GenericUnitsConverterModule } from '../../generic-units-converter/generic-units-converter.module';
import { UnitsInfoService } from './units-description.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UnitConverterComponent],
  imports: [
    GenericUnitsConverterModule,
    CommonModule,
    RouterModule.forChild([{
      path: '', redirectTo: 'kilometer-to-meter', pathMatch: 'full'
    },
    { path: ':units-type', component: UnitConverterComponent }
    ])],
  providers: [UnitsService, UnitsInfoService]

})
export class LengthConverterModule { }