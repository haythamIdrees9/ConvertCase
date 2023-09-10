import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../../../../UI/shared.module';
import { BMIComponent } from './bmi.component';
import { ResultActionsBtnComponent } from '../../../../UI/result-actions-btn/result-actions-btn.component';
import { LinksContainerComponent } from '../../links-container/links-container.component';

@NgModule({
  declarations: [BMIComponent],
  imports: [sharedModule,
    FormsModule,
    LinksContainerComponent,
    ResultActionsBtnComponent,
    RouterModule.forChild([{ path: '', component: BMIComponent }])]

})
export class BmiConverterModule { }