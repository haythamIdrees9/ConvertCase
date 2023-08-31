import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../../UI/shared.module';
import { EncodeDecodeComponent } from './encode-decode.component';
import { ResultActionsBtnComponent } from '../../UI/result-actions-btn/result-actions-btn.component';

@NgModule({
  declarations: [EncodeDecodeComponent],
  imports: [
    sharedModule,
    FormsModule,
    ResultActionsBtnComponent,
    RouterModule.forChild([{ path: '', component: EncodeDecodeComponent}, {path: ':action', component: EncodeDecodeComponent }])]
})
export class EncodeDecodeModule { }