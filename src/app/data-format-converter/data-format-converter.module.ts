import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../UI/shared.module';
import { ResultActionsBtnComponent } from '../UI/result-actions-btn/result-actions-btn.component';
import { DataFormatConverterComponent } from './data-format-converter.component';

@NgModule({
  declarations: [DataFormatConverterComponent],
  imports: [sharedModule,
      FormsModule,
      ResultActionsBtnComponent,
       RouterModule.forChild([{ path: '', component: DataFormatConverterComponent}, {path: ':action', component: DataFormatConverterComponent }])],

})
export class DataFormatConverterModule { }