import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinksViewComponent } from 'src/app/UI/links-view/links-view.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: 'text-case-converter', loadChildren: () => import('./text-converter/text-converter.module').then(m => m.TextConverterModule) },
        { path: 'text-manipulation', loadChildren: () => import('./text-manipulation/text-manipulation.module').then(m => m.TextManipulationModule) },
        {path:'**', redirectTo:'text-case-converter',pathMatch:'full'},
  ])]
})
export class TextToolsModule { }