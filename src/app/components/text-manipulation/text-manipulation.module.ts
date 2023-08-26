import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResultActionsBtnComponent } from '../../UI/result-actions-btn/result-actions-btn.component';
import { sharedModule } from '../../UI/shared.module';
import { TextManipulationComponent } from './text-manipulation.component';
import { ButtonWithCounterComponent } from '../../UI/button-with-counter/button-with-counter.component';
import { ButtonWithTwoOptionComponent } from '../../UI/button-with-two-option/button-with-two-option.component';

@NgModule({
  declarations: [TextManipulationComponent],
  imports: [
    sharedModule,
    FormsModule,
    ResultActionsBtnComponent,
    ButtonWithCounterComponent,
    ButtonWithTwoOptionComponent,
    RouterModule.forChild([{ path: '', component: TextManipulationComponent }, {path: ':action', component: TextManipulationComponent }])]
})
export class TextManipulationModule { }