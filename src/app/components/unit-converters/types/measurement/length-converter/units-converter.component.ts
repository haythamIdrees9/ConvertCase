import { Component, OnInit } from '@angular/core';
import Decimal from 'decimal.js';
import { UnitsService } from './units.service';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/components/services/meta.service';
import { SeoService } from 'src/app/components/services/seo.service';
import { UnitsInfoService } from './units-description.service';

@Component({
  selector: 'app-length-converter',
  templateUrl: './units-converter.component.html'
})
export class UnitConverterComponent implements OnInit {
  result: string = "";
  userInput:string = "1";
  units: readonly { key: string, label: string, conversionRate: number,abbreviation?:string }[] = [];
  popularUnits: readonly { route: string, reverseRoute: string, labelRoute: string, labelReverseRoute: string, }[] = [];
  conversionRate!: number;
  linkUnitType: string[] = ['cubickilometer', 'cubicmeter'];
  unitsDescription:string[]=[];
  linkUnitLabels :any[] = [];
  unitsAbbreviation:any[]=['',''];
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
    this.conversionRate = this.unitsService.calculateConversionRate(this.units[1].conversionRate, this.units[0].conversionRate);
    this.updateResult(this.userInput)
    this.handleParamsChange();
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
      this.updateSeoData();
      this.updateResult();
    });
  }

  updateSeoData(){
    this.metaService.setTitle(`${this.linkUnitType[0]} to ${this.linkUnitType[1]} online converter`);
    this.metaService.setDescription(`Switch effortlessly between ${this.linkUnitType[0]} and ${this.linkUnitType[1]} with precision using our length converter. Fast, accurate, and user-friendly`)
    this.metaService.setKeywords(`${this.getUniqKeyword()}length converter, meter, kilometer, mile, yard, foot, inch, centimeter, millimeter, unit conversion, distance converter, convert meters to feet, kilometers to miles, centimeters to inches, millimeters to yards, length measurement, metric to imperial conversion`)
  }

  private getUniqKeyword(){
      let abbreviation = `${this.unitsAbbreviation[0]} to ${this.unitsAbbreviation[1]}`;
      let full = `${this.clearKeyword(this.linkUnitLabels[0])} to ${this.clearKeyword(this.linkUnitLabels[1])}`
      let revAbbreviation = `${this.unitsAbbreviation[1]} to ${this.unitsAbbreviation[0]}`;
      let revFull = `${this.clearKeyword(this.linkUnitLabels[1])} to ${this.clearKeyword(this.linkUnitLabels[0])}`
      return `${abbreviation}, ${full}, ${revAbbreviation}, ${revFull}, `
    }

  clearKeyword(inputString:string) {
    return inputString.replace(/\[.*?\]/g, '').replace(/\s+/g,' ').trim().toLowerCase();
  }
  
}
