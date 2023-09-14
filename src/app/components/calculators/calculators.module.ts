import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CalculatorParent } from './health-and-fitness/calculator-parent/calculator-parent.component';
import { TabsViewComponent } from 'src/app/UI/tabs-view/tabs-view.component';

@NgModule({
  declarations: [
    CalculatorParent
  ],
  imports: [
    CommonModule,
    TabsViewComponent,
    RouterModule.forChild([
      {path:'',component:CalculatorParent,children:[
        { path: 'health-and-fitness', loadChildren: () => import('./health-and-fitness/health-and-fitness.module').then(m => m.HealthAndFitnessModule) },
        { path: '**', redirectTo: 'health-and-fitness' }
      ]}
    ])]
})
export class calculatorsModule { }