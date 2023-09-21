import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { UnitsRootComponent } from './units-root.component';
import { ImgViewerComponent } from 'src/app/UI/img-viewer/img-viewer.component';

@NgModule({
  declarations: [UnitsRootComponent],
  imports: [
    CommonModule,
    ImgViewerComponent,
    RouterModule.forChild([
      { path: '', component: UnitsRootComponent }
    ])],
  providers: []

})
export class UnitsRootModule { }