import { Component, OnInit } from '@angular/core';
import Decimal from 'decimal.js';
import { UnitsService } from './units.service';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/components/services/meta.service';
import { SeoService } from 'src/app/components/services/seo.service';
import { UnitsInfoService } from './units-description.service';

@Component({
  selector: 'app-energy-converter',
  templateUrl: './units-converter.component.html',
})
export class UnitConverterComponent implements OnInit {
  userInput: string = '1';
  result: string = '';
  units: readonly { key: string, label: string, conversionRate: number,abbreviation?:string }[] = [];
  popularUnits: readonly { route: string, reverseRoute: string, labelRoute: string, labelReverseRoute: string, }[] = [];
  conversionRate!: number;
  linkUnitType:string [] = ['joule','calorie'];
  unitsDescription:string[]=[];
linkUnitLabels :any[] = [];
unitsAbbreviation :any[] = ['',''];
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
      let unit1 = this.units.find(item => this.linkUnitType[0] === item.key)
      let unit2 = this.units.find(item => this.linkUnitType[1] === item.key)
      this.linkUnitLabels = [unit1?.label, unit2?.label]
      this.unitsAbbreviation = [unit1?.abbreviation, unit2?.abbreviation]
      this.updateResult();
      this.updateSeoData();
    })
  }

  updateSeoData(){
    this.metaService.setTitle(`${this.linkUnitType[0]} to ${this.linkUnitType[1]} online converter`);
    this.metaService.setDescription(`Effortlessly convert energy units like ${this.linkUnitType[0]} to ${this.linkUnitType[1]}. Get quick and accurate results with our energy converter!`)
    this.metaService.setKeywords(`${this.getUniqKeyword()}energy converter, watt, kilowatt, megawatt, joule, kilojoule, BTU, calorie, electronvolt, erg, therm, power conversion, energy unit conversion, watt to kilowatt, megawatt to gigawatt, joule to BTU, calorie to kilojoule, electronvolt to erg, foot-pound to joule, energy efficiency`)
  }
  
  private getUniqKeyword(){
    let abbreviation = `${this.unitsAbbreviation[0]} to ${this.unitsAbbreviation[1]}`;
    let full = `${this.clearKeyword(this.linkUnitLabels[0])} to ${this.clearKeyword(this.linkUnitLabels[1])}`
    let revAbbreviation = `${this.unitsAbbreviation[1]} to ${this.unitsAbbreviation[0]}`;
    let revFull = `${this.clearKeyword(this.linkUnitLabels[1])} to ${this.clearKeyword(this.linkUnitLabels[0])}`
    return `${abbreviation}, ${full}, ${revAbbreviation}, ${revFull}, `
  }

clearKeyword(inputString:string) {
  return inputString.replace(/\s+/g,' ').trim().toLowerCase();
}
}
