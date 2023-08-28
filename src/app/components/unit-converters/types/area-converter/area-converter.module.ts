import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InOutTextInputModule } from 'src/app/UI/in-out-text-inputs/in-out-text-inputs.module';

import { ResultActionsBtnComponent } from 'src/app/UI/result-actions-btn/result-actions-btn.component';
import { CommonModule } from '@angular/common';
import { PoppularLinksComponent } from '../../poppular-links/poppular-links.component';
import { UnitsService } from './units.service';
import { UnitConverterComponent } from './units-converter.component';
import { NavLinksComponent } from 'src/app/UI/nav-links/nav-links.component';

@NgModule({
  declarations: [UnitConverterComponent],
  imports: [
    FormsModule,
    CommonModule,
    InOutTextInputModule,
    ResultActionsBtnComponent,
    PoppularLinksComponent,
    NavLinksComponent,
    RouterModule.forChild([{ 
      path: '', redirectTo:'square-meter-to-square-kilometer',pathMatch:'full' },
    { path: ':units-type', component: UnitConverterComponent }
    ])],
  providers: [UnitsService]

})
export class AreaConverterModule { }