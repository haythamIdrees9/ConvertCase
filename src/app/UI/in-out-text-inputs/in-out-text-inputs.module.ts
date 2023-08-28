import { NgModule } from '@angular/core';
import {  InOutTextInputComponent } from './in-out-text-inputs.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:[CommonModule,FormsModule,RouterModule],
  declarations:[InOutTextInputComponent],
  exports:[InOutTextInputComponent]
})
export class InOutTextInputModule {}