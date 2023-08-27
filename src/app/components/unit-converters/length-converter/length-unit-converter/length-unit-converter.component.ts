import { Component } from '@angular/core';
import { LengthUnitsService } from '../length-units.service';
import Decimal from 'decimal.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-length-unit-converter',
  templateUrl: './length-unit-converter.component.html',
  styleUrls: ['./length-unit-converter.component.scss']
})
export class LengthUnitConverterComponent {
  storageKey = "lengthUnitConvert";
  originalText:string = '1';
  text:string = '';
  inputValue: number = 0;
  convertFrom: string = 'm';
  convertTo: string = 'km';
  resultValue: number = 0;
  title = "Length Converters"
  popularLengthUnits: readonly { route: string, reverseRoute: string,labelRoute:string,labelReverseRoute:string }[] = [];
  pairsWithMeter: readonly { route: string, reverseRoute: string,labelRoute:string,labelReverseRoute:string,label:string }[] = [];

  conversionRate!:number;
  switchLink = ''
  constructor( private lengthUnitsService:LengthUnitsService,private route:ActivatedRoute){
  }

  updateResult() {
    const inputDecimal = new Decimal(Number(this.originalText));
    this.text = `${inputDecimal.times(this.conversionRate)}`;
  }

  ngOnInit() {
    this.popularLengthUnits = this.lengthUnitsService.popularLengthUnits;
    this.pairsWithMeter = this.lengthUnitsService.pairsWithMeter;
    
    this.route.params.subscribe((params)=>{
      const unitsType = params['units-type'].split('-');
      this.switchLink = `${unitsType[1]}-${unitsType[0]}`
      this.title = `Convert ${unitsType[0]} to ${unitsType[1]}`
      this.lengthUnitsService.getConversionRate(unitsType[0],unitsType[1])
      this.conversionRate = this.lengthUnitsService.getConversionRate(unitsType[0],unitsType[1]);
      this.updateResult();
    })
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
