import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [

    
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'health', loadChildren: () => import('./health/health.module').then(m => m.HealthModule)
            }])]
})
export class BlogsModule { }