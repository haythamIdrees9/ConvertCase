import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GenericUnitsConverterModule } from '../../generic-units-converter/generic-units-converter.module';
import { UnitConverterComponent } from './units-converter.component';
import { UnitsService } from './units.service';
import { UnitsInfoService } from './units-description.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UnitConverterComponent],
  imports: [
    GenericUnitsConverterModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo:'meter-per-liter-to-kilometer-per-liter',pathMatch:'full' },
    { path: ':units-type', component: UnitConverterComponent }
    ])],
  providers: [UnitsService,UnitsInfoService]

})
export class FuelConsumptionConverterModule { }