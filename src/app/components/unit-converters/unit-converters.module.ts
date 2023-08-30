import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResultActionsBtnComponent } from '../../UI/result-actions-btn/result-actions-btn.component';
import { UnitConvertersComponent } from './unit-converters.component';
import { ExpandablePanalModule } from 'src/app/UI/expandable-panal/expandable-panal.module';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UnitConvertersComponent, MainComponent],
  imports: [
      FormsModule,
      ResultActionsBtnComponent,
      ExpandablePanalModule,
      CommonModule,
       RouterModule.forChild([
        { path: '', component: UnitConvertersComponent,children:[
          // {path:'',component:MainComponent},
          {path:'',redirectTo:'length', pathMatch:'full'},
          {path: 'length', loadChildren: () => import('./types/length-converter/length-converter.module').then(m => m.LengthConverterModule)},
          {path: 'weight-and-mass', loadChildren: () => import('./types/weight-converter/weight-converter.module').then(m => m.WeightConverterModule)},
          {path: 'volume', loadChildren: () => import('./types/volume-converter/volume-converter.module').then(m => m.VolumeConverterModule)},
          {path: 'temperature', loadChildren: () => import('./types/temperature-converter/temperature-converter.module').then(m => m.TemperatureConverterModule)},
          {path: 'area', loadChildren: () => import('./types/area-converter/area-converter.module').then(m => m.AreaConverterModule)},
          {path: 'pressure', loadChildren: () => import('./types/pressure-converter/pressure-converter.module').then(m => m.PressureConverterModule)},
          {path: 'energy', loadChildren: () => import('./types/energy-converter/energy-converter.module').then(m => m.EnergyConverterModule)},
        ],
          
        }
      ])
    ]

})
export class UnitConvertersModule { }