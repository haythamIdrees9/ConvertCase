import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InOutTextInputModule } from 'src/app/UI/in-out-text-inputs/in-out-text-inputs.module';
import { ResultActionsBtnComponent } from '../../UI/result-actions-btn/result-actions-btn.component';
import { sharedModule } from '../../UI/shared.module';
import { DistanceConversionsComponent } from './distance-conversions.component';

@NgModule({
  declarations: [DistanceConversionsComponent],
  imports: [
    sharedModule,
    FormsModule,
    ResultActionsBtnComponent,
    InOutTextInputModule,
    RouterModule.forChild([{ path: '', component: DistanceConversionsComponent }, {path: ':action', component: DistanceConversionsComponent }])]
})
export class DistanceConversionsModule { }