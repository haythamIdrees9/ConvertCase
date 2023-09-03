import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GenericUnitsConverterModule } from '../generic-units-converter/generic-units-converter.module';
import { UnitConverterComponent } from './units-converter.component';
import { UnitsService } from './units.service';

@NgModule({
  declarations: [UnitConverterComponent],
  imports: [
    GenericUnitsConverterModule,
    RouterModule.forChild([{ 
      path: '', redirectTo:'kilowatt-to-megawatt',pathMatch:'full' },
    { path: ':units-type', component: UnitConverterComponent }
    ])],
  providers: [UnitsService]

})
export class PowerConverterModule { }