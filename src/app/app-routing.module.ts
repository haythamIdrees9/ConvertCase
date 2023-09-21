import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const routes: Route[] = [
  // redirect
  {path:'text-case-converter', redirectTo:'text-tools/text-case-converter'},
  {path:'text-manipulation' ,redirectTo:'text-tools/text-manipulation'},
  {path:'encode-decode' ,redirectTo:'programming-tools/encode-decode'},
  
  {path:'' ,loadChildren: () => import('./root/root.module').then(m => m.RootModule), pathMatch:'full'},
  {path:'text-tools',loadChildren: () => import('./components/text-tools/text-tools.module').then(m => m.TextToolsModule)},
  {path:'programming-tools',loadChildren:() => import('./components/programming-tools/programming-tools.module').then(m => m.ProgrammingToolsModule) },
  {path:'unit-converters',loadChildren:() => import('./components/unit-converters/unit-converters.module').then(m => m.UnitConvertersModule) },
  {path:'calculators',loadChildren:() => import('./components/calculators/calculators.module').then(m => m.calculatorsModule) },
  {path:'**', redirectTo:'unit-converters',pathMatch:'full'},
]
@NgModule({
imports: [
RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
],
exports:[RouterModule]
})
export class AppRoutingModule { }