import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../../UI/shared.module';
import { ResultActionsBtnComponent } from '../../UI/result-actions-btn/result-actions-btn.component';
import { MassConverterToolComponent } from './mass-converter-tool.component';

@NgModule({
  declarations: [MassConverterToolComponent],
  imports: [
    sharedModule,
    FormsModule,
    ResultActionsBtnComponent,
    RouterModule.forChild([{ path: '', component: MassConverterToolComponent}, {path: ':action', component: MassConverterToolComponent }])]
})
export class MassConverterToolModule { }