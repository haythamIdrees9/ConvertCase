import { NgModule } from '@angular/core';
import { CustomToasterComponent } from './custom-toaster.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:[CommonModule],
  declarations:[CustomToasterComponent],
  exports:[CustomToasterComponent]
})
export class CustomToasterModule {}