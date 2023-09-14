import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BMRComponent } from './bmr.component';

import { DropdownComponent } from 'src/app/UI/dropdown/dropdown.component';
import { ContentModule } from 'src/app/UI/content/conent.module';

@NgModule({
  declarations: [BMRComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,    
    DropdownComponent,
    ContentModule,
    RouterModule.forChild([{ path: '', component: BMRComponent }])]

})
export class BMRModule { }