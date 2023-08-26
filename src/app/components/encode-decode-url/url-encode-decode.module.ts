import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../../UI/shared.module';
import { EncodeDecodeUrlComponent } from './url-encode-decode.component';
import { ResultActionsBtnComponent } from '../../UI/result-actions-btn/result-actions-btn.component';

@NgModule({
  declarations: [EncodeDecodeUrlComponent],
  imports: [
    sharedModule,
    FormsModule,
    ResultActionsBtnComponent,
    RouterModule.forChild([{ path: '', component: EncodeDecodeUrlComponent}, {path: ':action', component: EncodeDecodeUrlComponent }])]
})
export class URLEncodeDecodeModule { }