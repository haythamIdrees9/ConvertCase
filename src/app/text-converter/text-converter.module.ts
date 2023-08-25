import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../UI/shared.module';
import { TextConverterComponent } from './text-converter.component';
import { ResultActionsBtnComponent } from '../UI/result-actions-btn/result-actions-btn.component';

@NgModule({
  declarations: [TextConverterComponent],
  imports: [sharedModule,
      FormsModule,
      ResultActionsBtnComponent,
       RouterModule.forChild([{ path: '', component: TextConverterComponent}, {path: ':action', component: TextConverterComponent }])]

})
export class TextConverterModule { }