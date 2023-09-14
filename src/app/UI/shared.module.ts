import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InOutTextBoxesModule } from './in-out-text-boxes/in-out-text-boxes.module';
import { CustomToasterComponent } from './custom-toaster/custom-toaster.component';
import { ContentModule } from './content/conent.module';

@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    InOutTextBoxesModule,
     CustomToasterComponent,
     ContentModule],
  exports: [CommonModule,
    CustomToasterComponent,
    InOutTextBoxesModule,
    ContentModule]
})
export class sharedModule { }