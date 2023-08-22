import { NgModule } from '@angular/core';
import { TextConverterComponent } from './text-converter.component';
import { RouterModule } from '@angular/router';
import { CustomToasterModule } from '../UI/custom-toaster/custom-toaster.module';
import { InOutTextBoxesModule } from '../UI/in-out-text-boxes/in-out-text-boxes.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TextConverterComponent],
  imports: [CommonModule,
     CustomToasterModule, 
     InOutTextBoxesModule,
      FormsModule,
       RouterModule.forChild([{ path: '', component: TextConverterComponent }])]
})
export class TextConverterModule { }