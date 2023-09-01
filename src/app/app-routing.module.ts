import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const routes: Route[] = [
  {path:'text-case-tools',loadChildren: () => import('./components/text-converter/text-converter.module').then(m => m.TextConverterModule)},
  {path:'encode-decode',loadChildren:() => import('./components/encode-decode/encode-decode.module').then(m => m.EncodeDecodeModule) },
  {path:'text-manipulation',loadChildren:() => import('./components/text-manipulation/text-manipulation.module').then(m => m.TextManipulationModule) },
  {path:'unit-converters',loadChildren:() => import('./components/unit-converters/unit-converters.module').then(m => m.UnitConvertersModule) },
  {path:'**', redirectTo:'text-case-tools',pathMatch:'full'},
]
@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports:[RouterModule]
})
export class AppRoutingModule { }