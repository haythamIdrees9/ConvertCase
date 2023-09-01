import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InOutTextInputModule } from 'src/app/UI/in-out-text-inputs/in-out-text-inputs.module';

import { ResultActionsBtnComponent } from 'src/app/UI/result-actions-btn/result-actions-btn.component';
import { CommonModule } from '@angular/common';
import { PoppularLinksComponent } from '../../poppular-links/poppular-links.component';
import { NavLinksComponent } from 'src/app/UI/nav-links/nav-links.component';
import { GenericUnitsConverterComponent } from './generic-units-converter.component';
import { SearchDropdownComponent } from 'src/app/UI/search-dropdown/search-dropdown.component';

@NgModule({
  declarations: [GenericUnitsConverterComponent],
  imports: [
    FormsModule,
    CommonModule,
    InOutTextInputModule,
    ResultActionsBtnComponent,
    PoppularLinksComponent,
    NavLinksComponent,
    RouterModule,
    SearchDropdownComponent],
  providers: [],
  exports:[GenericUnitsConverterComponent]

})
export class GenericUnitsConverterModule { }