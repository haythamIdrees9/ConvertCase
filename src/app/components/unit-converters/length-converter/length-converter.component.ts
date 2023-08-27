import { Component, OnInit } from '@angular/core';
import Decimal from 'decimal.js';
import { LengthUnitsService } from './length-units.service';

@Component({
  selector: 'app-length-converter',
  templateUrl: './length-converter.component.html',
  styleUrls: ['./length-converter.component.scss'],
})
export class LengthConverterComponent implements OnInit {
  storageKey = "lengthUnitsConvert";
  originalText:string = '1';
  text:string = '';
  inputValue: number = 0;
  convertFrom: string = 'm';
  convertTo: string = 'km';
  resultValue: number = 0;

  lengthUnits: readonly { key: string, label: string, conversionRate: number }[] = []
  popularLengthUnits: readonly { route: string, reverseRoute: string,labelRoute:string,labelReverseRoute:string }[] = []
  conversionRate1!:number;
  conversionRate2!:number;
  constructor( private lengthUnitsService:LengthUnitsService){
    console.log('iiin');
    
  }

  updateResult() {
    const rate1 = new Decimal(this.conversionRate1);
    const rate2 = new Decimal(this.conversionRate2);
    const inputDecimal = new Decimal(Number(this.originalText));
    this.text = `${inputDecimal.times(rate1).div(rate2)}`;
  }

  ngOnInit() {
    this.popularLengthUnits = this.lengthUnitsService.popularLengthUnits;
    this.lengthUnits = this.lengthUnitsService.lengthUnits;
    this.conversionRate1 = this.lengthUnits[0].conversionRate;
    this.conversionRate2 = this.lengthUnits[1].conversionRate;
    console.log('this.lengthUnits');
    
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
