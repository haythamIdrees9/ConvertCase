import { Component, OnInit } from '@angular/core';
import { CALCOLATORS_PAGES } from '../health-and-fitness/calcolators-utils';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-calculator-parent',
  templateUrl: './calculator-parent.component.html',
  styleUrls: ['./calculator-parent.component.scss', '../../container.scss','../calculators.component.scss']
})
export class CalculatorParent implements OnInit {
  pages = CALCOLATORS_PAGES;
  selectedTypeIndex = 0;
  constructor(private route:ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.route.url.subscribe((url) =>{
      if(url.length > 0 && url[0].path){
          this.selectedTypeIndex = Math.max(0,this.pages.findIndex(type => type.path === url[0].path));
      }

    })
    
  }

}
