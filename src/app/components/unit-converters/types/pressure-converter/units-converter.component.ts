import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Decimal from 'decimal.js';
import { UnitsService } from './units.service';
import { MetaService } from 'src/app/components/services/meta.service';
import { SeoService } from 'src/app/components/services/seo.service';

@Component({
  selector: 'app-pressure-converter',
  templateUrl: './units-converter.component.html',
})
export class UnitConverterComponent implements OnInit {
  userInput: string = '1';
  result: string = '';
  units: readonly { key: string, label: string, conversionRate: number }[] = [];
  popularUnits: readonly { route: string, reverseRoute: string, labelRoute: string, labelReverseRoute: string, }[] = [];
  conversionRate!: number;
  linkUnitType: string[] = ['pascal', 'bar'];
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
    this.conversionRate = this.unitsService.calculateConversionRate(this.units[1].conversionRate, this.units[0].conversionRate)
    this.handleParamsChange();
    this.updateResult();
    this.seoService.createLinkForCanonicalURL('unit-converters/pressure')
  }

  private handleParamsChange() {
    this.route.params.subscribe((params) => {
      if (!params['units-type']) {
        return;
      }
      this.linkUnitType = (params['units-type'] as string).split('-to-');
      this.conversionRate = this.unitsService.getConversionRate(this.linkUnitType[0], this.linkUnitType[1]);
      this.updateResult();
      this.updateSeoData();
    })
  }

  updateSeoData(){
    this.metaService.setTitle(`Convert ${this.linkUnitType[0]} to ${this.linkUnitType[1]}`);
    this.metaService.setDescription(`Effortlessly convert pressure units like ${this.linkUnitType[0]} to ${this.linkUnitType[1]}. Get quick and precise results with our user-friendly pressure converter`)
    this.metaService.setKeywords("pressure converter, Pascal, kilopascal, bar, atmosphere, psi, Torr, millibar, unit conversion, convert Pascal to psi, kilopascal to bar, atmosphere to Torr, pressure unit conversion, pressure measurement, pressure conversion tool, Pascal to kilopascal, bar to psi, Torr to millibar")
  }
}
