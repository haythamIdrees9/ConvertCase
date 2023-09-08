import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'encode-decode', loadChildren: () => import('./encode-decode/encode-decode.module').then(m => m.EncodeDecodeModule) },
      {path:'**', redirectTo:'encode-decode',pathMatch:'full'},

  ])]
})
export class ProgrammingToolsModule { }