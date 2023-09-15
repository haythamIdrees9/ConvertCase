import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinksViewComponent } from 'src/app/UI/links-view/links-view.component';
import { CommonModule } from '@angular/common';
import { TextToolsParentComponent } from './text-tools-parent/text-tools-parent.component';
import { TabViewComponent } from 'src/app/UI/tab-view/tab-view.component';

@NgModule({
  declarations: [
    TextToolsParentComponent
  ],
  imports: [
    CommonModule,
    TabViewComponent,
    RouterModule.forChild([
      {path:'',component:TextToolsParentComponent,children:[
        { path: 'text-case-converter', loadChildren: () => import('./text-converter/text-converter.module').then(m => m.TextConverterModule) },
        { path: 'text-manipulation', loadChildren: () => import('./text-manipulation/text-manipulation.module').then(m => m.TextManipulationModule) },
        {path:'**', redirectTo:'text-case-converter',pathMatch:'full'},
      ]}
  ])]
})
export class TextToolsModule { }