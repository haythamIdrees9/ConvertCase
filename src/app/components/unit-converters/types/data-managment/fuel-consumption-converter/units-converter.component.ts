import { Component, OnInit } from '@angular/core';
import Decimal from 'decimal.js';
import { UnitsService } from './units.service';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/components/services/meta.service';
import { SeoService } from 'src/app/components/services/seo.service';
import { UnitsInfoService } from './units-description.service';

@Component({
  selector: 'app-fuel-consumption-converter',
  templateUrl: './units-converter.component.html',
})
export class UnitConverterComponent implements OnInit {
  userInput: string = '1';
  result: string = '';
  units: readonly { key: string, label: string, conversionRate: number }[] = [];
  popularUnits: readonly { route: string, reverseRoute: string, labelRoute: string, labelReverseRoute: string, }[] = [];
  conversionRate!: number;
  linkUnitType:string [] = ['meter-per-liter','kilometer-per-liter'];
  unitsDescription:string[]=[];
linkUnitLabels :any[] = [];
constructor(private unitsService: UnitsService,private unitsInfoService:UnitsInfoService, private route: ActivatedRoute,
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
  }

  private handleParamsChange(){
    this.route.params.subscribe((params) => {
      if(!params['units-type']){
        return;
      }
      this.linkUnitType = (params['units-type'] as string).split('-to-');
      if(this.linkUnitType.length > 1 && this.linkUnitType[0] === this.linkUnitType[1]){
        this.unitsDescription = [this.unitsInfoService.getDescription(this.linkUnitType[0])]; 
      } else {
        this.unitsDescription = [this.unitsInfoService.getDescription(this.linkUnitType[0]),this.unitsInfoService.getDescription(this.linkUnitType[1])]; 
      }
      this.conversionRate = this.unitsService.getConversionRate(this.linkUnitType[0], this.linkUnitType[1]);
this.linkUnitLabels = [this.units.find(item => this.linkUnitType[0] === item.key)?.label, this.units.find(item => this.linkUnitType[1] === item.key)?.label]
      this.updateResult();
      this.updateSeoData();
    })
  }

  updateSeoData(){
    this.metaService.setTitle(`${this.linkUnitType[0]} to ${this.linkUnitType[1]} online converter`);
    this.metaService.setDescription(`Easily convert fuel consumption between ${this.linkUnitType[0]} and ${this.linkUnitType[1]}. Get fast, accurate results with our user-friendly fuel consumption converter`)
    this.metaService.setKeywords("fuel consumption converter, miles per gallon (MPG), kilometers per liter (KPL), liters per 100 kilometers (L/100KM), unit conversion, convert MPG to KPL, L/100KM to MPG, fuel consumption unit conversion, fuel consumption measurement, fuel consumption conversion tool, fuel efficiency");
  }
}
