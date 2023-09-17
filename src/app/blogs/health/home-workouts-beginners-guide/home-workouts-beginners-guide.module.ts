import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TabsViewComponent } from 'src/app/UI/tabs-view/tabs-view.component';
import { HomeWorkoutsBeginnersGuideComponent } from './home-workouts-beginners-guide.component';
import { ImgViewerComponent } from '../../img-viewer/img-viewer.component';

@NgModule({
    declarations: [
        HomeWorkoutsBeginnersGuideComponent,
    ],
    imports: [
        CommonModule,
        ImgViewerComponent,
        TabsViewComponent,
        RouterModule.forChild([
            { path: '', component: HomeWorkoutsBeginnersGuideComponent }
        ])]
})
export class HomeWorkoutsBeginnersGuideModule { }