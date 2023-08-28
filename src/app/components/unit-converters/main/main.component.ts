import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  pages = [ {path:'length',label:'Length'},{path:'weight-and-mass',label:'Weight'},{path:'volume',label:'Volume'},{path:'temperature',label:'Temperature'}]
}
