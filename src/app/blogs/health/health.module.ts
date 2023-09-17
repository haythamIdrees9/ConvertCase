import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TabsViewComponent } from 'src/app/UI/tabs-view/tabs-view.component';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        TabsViewComponent,
        RouterModule.forChild([
            { path: 'home-workouts-beginners-guide', loadChildren: () => import('./home-workouts-beginners-guide/home-workouts-beginners-guide.module').then(m => m.HomeWorkoutsBeginnersGuideModule) }
        ])]
})
export class HealthModule { }