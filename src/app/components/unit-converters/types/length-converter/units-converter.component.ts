import { Component, OnInit } from '@angular/core';
import Decimal from 'decimal.js';
import { UnitsService } from './units.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-length-converter',
  templateUrl: './units-converter.component.html',
  styleUrls: ['../../main-converters.scss'],
})
export class UnitConverterComponent implements OnInit {
  storageKey = "lengthUnitsConvert";
  originalText: string = '1';
  text: string = '';
  inputValue: number = 0;
  units: readonly { key: string, label: string, conversionRate: number }[] = [];
  popularUnits: readonly { route: string, reverseRoute: string, labelRoute: string, labelReverseRoute: string, }[] = [];
  switchLink = ''
  conversionRate!: number;
  linkUnitType:string [] = ['cubickilometer','cubicmeter'];
  constructor(private unitsService: UnitsService, private route: ActivatedRoute) {
  }

 
  updateResult() {
    const inputDecimal = new Decimal(Number(this.originalText));
    this.text = `${inputDecimal.times(this.conversionRate)}`;
  }

  ngOnInit() {
    this.popularUnits = this.unitsService.popularUnits;
    this.units = this.unitsService.units;
    this.conversionRate = this.unitsService.calculateConversionRate(this.units[1].conversionRate, this.units[0].conversionRate)
    this.handleParamsChange();
    this.updateResult();
  }

  private handleParamsChange(){
    this.route.params.subscribe((params) => {
      if(!params['units-type']){
        return;
      }
      this.linkUnitType = (params['units-type'] as string).split('-to-');
      this.switchLink = `${this.linkUnitType[1]}-${this.linkUnitType[0]}`
      this.conversionRate = this.unitsService.getConversionRate(this.linkUnitType[0], this.linkUnitType[1]);
      this.updateResult();
    })
  }

  setOriginalText(text: string) {
    this.originalText = text
    this.updateResult();
  }
  clearTextArea() {
    this.originalText = '1';
    this.updateResult();
  }
}
