import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConentCardComponent } from './conent-card/conent-card.component';

@NgModule({
  imports:[CommonModule],
  declarations:[ConentCardComponent],
  exports:[ConentCardComponent]
})
export class ContentModule {}