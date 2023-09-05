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
          {path: 'length', loadChildren: () => import('./types/measurement/length-converter/length-converter.module').then(m => m.LengthConverterModule)},
          {path: 'temperature', loadChildren: () => import('./types/measurement/temperature-converter/temperature-converter.module').then(m => m.TemperatureConverterModule)},
          {path: 'area', loadChildren: () => import('./types/measurement/area-converter/area-converter.module').then(m => m.AreaConverterModule)},
          {path: 'pressure', loadChildren: () => import('./types/measurement/pressure-converter/pressure-converter.module').then(m => m.PressureConverterModule)},
          {path: 'numbers', loadChildren: () => import('./types/measurement/numbers-converter/numbers-converter.module').then(m => m.NumbersConverterModule)},
          {path: 'weight-and-mass', loadChildren: () => import('./types/data-managment/weight-converter/weight-converter.module').then(m => m.WeightConverterModule)},
          {path: 'volume', loadChildren: () => import('./types/data-managment/volume-converter/volume-converter.module').then(m => m.VolumeConverterModule)},
          {path: 'fuel-consumption', loadChildren: () => import('./types/data-managment/fuel-consumption-converter/fuel-consumption-converter.module').then(m => m.FuelConsumptionConverterModule)},
          {path: 'data-storage', loadChildren: () => import('./types/data-managment/data-storage-converter/data-storage-converter.module').then(m => m.dataStorageConverterModule)},
          {path: 'energy', loadChildren: () => import('./types/engineering/energy-converter/energy-converter.module').then(m => m.EnergyConverterModule)},
          {path: 'power', loadChildren: () => import('./types/engineering/power-converter/power-converter.module').then(m => m.PowerConverterModule)},
          {path: 'force', loadChildren: () => import('./types/engineering/force-converter/force-converter.module').then(m => m.ForceConverterModule)},
          {path: 'time', loadChildren: () => import('./types/time-speed/time-converter/time-converter.module').then(m => m.TimeConverterModule)},
          {path: 'speed', loadChildren: () => import('./types/time-speed/speed-converter/speed-converter.module').then(m => m.SpeedConverterModule)},
          {path: 'angle', loadChildren: () => import('./types/radiology/angle-converter/angle-converter.module').then(m => m.AngleConverterModule)},
          
        ],
          
        }
      ])
    ]

})
export class UnitConvertersModule { }