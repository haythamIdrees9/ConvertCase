import { NgModule } from '@angular/core';
import {  InOutTextInputComponent } from './in-out-text-inputs.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:[CommonModule,FormsModule],
  declarations:[InOutTextInputComponent],
  exports:[InOutTextInputComponent]
})
export class InOutTextInputModule {}