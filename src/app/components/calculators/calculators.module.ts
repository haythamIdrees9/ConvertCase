import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'health-and-fitness', loadChildren: () => import('./health-and-fitness/health-and-fitness.module').then(m => m.HealthAndFitnessModule) },
       {path:'**',redirectTo:'health-and-fitness'}
  ])]
})
export class calculatorsModule { }