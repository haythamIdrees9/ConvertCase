import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-converters',
  templateUrl: './unit-converters.component.html',
  styleUrls: ['./unit-converters.component.scss']
})
export class UnitConvertersComponent {
  pages = [ {path:'length',label:'Length'},{path:'weight-and-mass',label:'Weight and Mass'}]

}
