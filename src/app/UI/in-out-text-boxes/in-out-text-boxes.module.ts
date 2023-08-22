import { NgModule } from '@angular/core';
import { InOutTextBoxesComponent } from './in-out-text-boxes.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:[CommonModule,FormsModule],
  declarations:[InOutTextBoxesComponent],
  exports:[InOutTextBoxesComponent]
})
export class InOutTextBoxesModule {}