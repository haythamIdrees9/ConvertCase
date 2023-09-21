import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root.component';
import { ImgViewerComponent } from '../UI/img-viewer/img-viewer.component';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    ImgViewerComponent,
    RouterModule.forChild([{ path: '', component: RootComponent }])]

})
export class RootModule { }