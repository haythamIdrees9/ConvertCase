import { NgModule } from "@angular/core";
import { PreloadAllModules, Route, RouterModule } from "@angular/router";

const routes: Route[] = [
  {path:'text-case-tools',loadChildren: () => import('./text-converter/text-converter.module').then(m => m.TextConverterModule)},
  {path:'url-encode-decode',loadChildren:() => import('./encode-decode-url/url-encode-decode.module').then(m => m.URLEncodeDecodeModule) },
  {path:'text-manipulation',loadChildren:() => import('./text-manipulation/text-manipulation.module').then(m => m.TextManipulationModule) },
  {path:'data-format-converter',loadChildren:() => import('./data-format-converter/data-format-converter.module').then(m => m.DataFormatConverterModule) },
  
  {path:'**', redirectTo:'text-case-tools',pathMatch:'full'},
]
@NgModule({
imports: [
RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})
],
exports:[RouterModule]
})
export class AppRoutingModule { }