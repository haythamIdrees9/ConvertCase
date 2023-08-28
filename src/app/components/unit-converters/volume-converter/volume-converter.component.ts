import { Component, OnInit } from '@angular/core';
import Decimal from 'decimal.js';
import { VolumeUnitsService } from './volume-units.service';

@Component({
  selector: 'app-volume-converter',
  templateUrl: './volume-converter.component.html',
  styleUrls: ['../main-converters.scss'],
})
export class VolumeConverterComponent implements OnInit {
  storageKey = "volumeUnitsConvert";
  originalText:string = '1';
  text:string = '';
  inputValue: number = 0;
  units: readonly { key: string, label: string, conversionRate: number }[] = [];
  popularUnits: readonly { route: string, reverseRoute: string,labelRoute:string,labelReverseRoute:string }[] = [];
  pairsWithKg: readonly { route: string, reverseRoute: string,labelRoute:string,labelReverseRoute:string,label:string }[] = [];
  conversionRate1!:number;
  conversionRate2!:number;
  constructor( private volumeUnitsService:VolumeUnitsService){    
  }

  updateResult() {
    const rate1 = new Decimal(this.conversionRate1);
    const rate2 = new Decimal(this.conversionRate2);
    const inputDecimal = new Decimal(Number(this.originalText));
    this.text = `${inputDecimal.times(rate1).div(rate2)}`;
  }

  ngOnInit() {
    this.popularUnits = this.volumeUnitsService.popularUnits;
    this.pairsWithKg = this.volumeUnitsService.pairsWithKg;
    this.units = this.volumeUnitsService.units;
    this.conversionRate1 = this.units[0].conversionRate;
    this.conversionRate2 = this.units[1].conversionRate;
    this.updateResult();
  }

  setOriginalText(text:string){
    this.originalText = text
    this.updateResult();
  }
  clearTextArea() {
    this.originalText = '1';
    this.updateResult();
  }
}
