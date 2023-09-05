import { Component, OnInit } from '@angular/core';
import Decimal from 'decimal.js';
import { UnitsService } from './units.service';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/components/services/meta.service';
import { SeoService } from 'src/app/components/services/seo.service';

@Component({
  selector: 'app-length-converter',
  templateUrl: './units-converter.component.html'
})
export class UnitConverterComponent implements OnInit {
  result: string = "";
  userInput:string = "1";
  units: readonly { key: string, label: string, conversionRate: number }[] = [];
  popularUnits: readonly { route: string, reverseRoute: string, labelRoute: string, labelReverseRoute: string, }[] = [];
  conversionRate!: number;
  linkUnitType: string[] = ['cubickilometer', 'cubicmeter'];
  constructor(private unitsService: UnitsService, private route: ActivatedRoute,
    private metaService:MetaService, private seoService:SeoService) {
 }


  updateResult(userInput: string = this.userInput) {
    this.userInput = userInput;
    const inputDecimal = new Decimal(Number(userInput));
    this.result = `${inputDecimal.times(this.conversionRate)}`;
  }

  ngOnInit() {
    this.popularUnits = this.unitsService.popularUnits;
    this.units = this.unitsService.units;
    this.conversionRate = this.unitsService.calculateConversionRate(this.units[1].conversionRate, this.units[0].conversionRate);
    this.updateResult(this.userInput)
    this.handleParamsChange();
    this.seoService.createLinkForCanonicalURL('unit-converters/length')

  }

  private handleParamsChange(){
    this.route.params.subscribe((params) => {
      if(!params['units-type']){
        return;
      }
      this.linkUnitType = (params['units-type'] as string).split('-to-');
      this.conversionRate = this.unitsService.getConversionRate(this.linkUnitType[0], this.linkUnitType[1]);
      this.updateSeoData();
      this.updateResult();
    });
  }

  updateSeoData(){
    this.metaService.setTitle(`Convert ${this.linkUnitType[0]} to ${this.linkUnitType[1]}`);
    this.metaService.setDescription(`Switch effortlessly between ${this.linkUnitType[0]} and ${this.linkUnitType[1]} with precision using our length converter. Fast, accurate, and user-friendly`)
    this.metaService.setKeywords("length converter, meter, kilometer, mile, yard, foot, inch, centimeter, millimeter, unit conversion, distance converter, convert meters to feet, kilometers to miles, centimeters to inches, millimeters to yards, length measurement, metric to imperial conversion")
  }
}
