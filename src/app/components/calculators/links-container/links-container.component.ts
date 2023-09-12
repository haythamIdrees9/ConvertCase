import { Component } from '@angular/core';
import { LinksViewComponent } from 'src/app/UI/links-view/links-view.component';

@Component({
  selector: 'app-links-container',
  templateUrl: './links-container.component.html',
  styleUrls: ['./links-container.component.scss'],
  standalone:true,
  imports:[LinksViewComponent]
})
export class LinksContainerComponent {

  pages = [ 
    { path: 'bmi', label: 'BMI Calcolator' }, 
    { path: 'bmr', label: 'BMR Calcolator' }, 
    
  ];
}
