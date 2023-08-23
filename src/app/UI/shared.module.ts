import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InOutTextBoxesModule } from './in-out-text-boxes/in-out-text-boxes.module';
import { CustomToasterComponent } from './custom-toaster/custom-toaster.component';

@NgModule({
    declarations:[],
    imports: [
        CommonModule,
        InOutTextBoxesModule,CustomToasterComponent],
    exports: [CommonModule,
        CustomToasterComponent,
        InOutTextBoxesModule]
})
export class sharedModule { }