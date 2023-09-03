import { Component } from '@angular/core';
import { UnitPages } from '../unit-converters.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  pages = UnitPages;

}
