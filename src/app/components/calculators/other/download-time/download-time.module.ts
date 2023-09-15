import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DateSelectorComponent } from 'src/app/UI/date-selector/date-selector.component';
import { DownloadTimeComponent } from './download-time.component';
import { ContentModule } from 'src/app/UI/content/conent.module';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from 'src/app/UI/dropdown/dropdown.component';

@NgModule({
  declarations: [DownloadTimeComponent],
  imports: [
    DateSelectorComponent,
    FormsModule,
    ContentModule,
    CommonModule,
    DropdownComponent,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: DownloadTimeComponent }])]

})
export class DownloadTimeModule { }