import { NgModule } from "@angular/core";
import { PreloadAllModules, Route, RouterModule } from "@angular/router";

const routes: Route[] = [
  {path:'text-case-tools',loadChildren: () => import('./components/text-converter/text-converter.module').then(m => m.TextConverterModule)},
  {path:'url-encode-decode',loadChildren:() => import('./components/encode-decode-url/url-encode-decode.module').then(m => m.URLEncodeDecodeModule) },
  {path:'text-manipulation',loadChildren:() => import('./components/text-manipulation/text-manipulation.module').then(m => m.TextManipulationModule) },
  {path:'temperature-converters',loadChildren:() => import('./components/temperature-converters/temperature-converters.module').then(m => m.TemperatureConvertersModule) },
  {path:'distance-converters',loadChildren:() => import('./components/distance-conversions/distance-conversions.module').then(m => m.DistanceConversionsModule) },
  
  
  {path:'**', redirectTo:'text-case-tools',pathMatch:'full'},
]
@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports:[RouterModule]
})
export class AppRoutingModule { }