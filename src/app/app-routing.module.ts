import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const routes: Route[] = [
    {path:'', redirectTo:'text-case-tools',pathMatch:'full'},
    {path:'text-case-tools',loadChildren: () => import('./text-converter/text-converter.module').then(m => m.TextConverterModule)}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
