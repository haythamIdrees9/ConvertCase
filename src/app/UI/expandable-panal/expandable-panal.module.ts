import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpandablePanalComponent } from './expandable-panal.component';

@NgModule({
  declarations: [
    ExpandablePanalComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [ExpandablePanalComponent]
})
export class ExpandablePanalModule { }