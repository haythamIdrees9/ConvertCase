import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const routes: Route[] = [
    {path:'', redirectTo:'text-case-tools',pathMatch:'full'},
    {path:'text-case-tools',loadChildren: () => import('./text-converter/text-converter.module').then(m => m.TextConverterModule)},
    {path:'url-encode-decode',loadChildren:() => import('./encode-decode-url/url-encode-decode.module').then(m => m.URLEncodeDecodeModule) },
    {path:'text-manipulation',loadChildren:() => import('./text-manipulation/text-manipulation.module').then(m => m.TextManipulationModule) },

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
