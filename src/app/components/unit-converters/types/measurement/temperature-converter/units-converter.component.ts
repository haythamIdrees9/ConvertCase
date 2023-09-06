import { Component, OnInit } from '@angular/core';
import { UnitsService } from './units.service';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/components/services/meta.service';
import { SeoService } from 'src/app/components/services/seo.service';
import { UnitsInfoService } from './units-description.service';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './units-converter.component.html',
})
export class UnitConverterComponent implements OnInit {
  userInput: string = '1';
  result: string = '';
  inputValue: number = 0;
  units: readonly { key: string; label: string; convertToCelsius: (key: any) => any;convertFromCelsius:(key: any) => any }[] = [];
  popularUnits: readonly { route: string, reverseRoute: string, labelRoute: string, labelReverseRoute: string, }[] = [];
  linkUnitType:string [] = ['',''];
  currentUnits:readonly { key: string; label: string; convertToCelsius: (key: any) => any;convertFromCelsius:(key: any) => any }[]  = []
  unitsDescription:string[]=[];
linkUnitLabels :any[] = [];
  compareValues  = [0.01,0.1,1,2,3,4,5,6,7,8,9,10,20,50,100,1000];
  tableValues:{input:string,result:string}[] = [];
constructor(private unitsService: UnitsService,private unitsInfoService:UnitsInfoService, private route: ActivatedRoute,
    private metaService:MetaService, private seoService:SeoService) {
 }

  updateResult(userInput: string = this.userInput) {
    this.userInput = userInput;
    const celsiusValue = this.currentUnits[0].convertToCelsius(Number(userInput));
    this.result = this.currentUnits[1].convertFromCelsius(celsiusValue);
  }

  getResult(userInput:number){
    const celsiusValue = this.currentUnits[0].convertToCelsius(Number(userInput));
    const res = this.currentUnits[1].convertFromCelsius(celsiusValue)
    if(Math.abs(res) > 1){
      return `${parseFloat(`${res.toFixed(2)}`)}`
    }
    return `${res}`;
  }

  ngOnInit() {
    this.popularUnits = this.unitsService.popularUnits;
    this.units = this.unitsService.units;
    this.currentUnits = [this.units[0], this.units[1]];
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
      this.currentUnits = this.unitsService.getConversionRate(this.linkUnitType[0], this.linkUnitType[1]);
this.linkUnitLabels = [this.units.find(item => this.linkUnitType[0] === item.key)?.label, this.units.find(item => this.linkUnitType[1] === item.key)?.label]
      this.tableValues = this.compareValues.map((input:number) => ({input:`${input}`,result:this.getResult(input)}))
      this.updateResult();
      this.updateSeoData();
    })
  }


  updateSeoData(){
    this.metaService.setTitle(`Convert ${this.linkUnitType[0]} to ${this.linkUnitType[1]}`);
    this.metaService.setDescription(`Convert temperatures between ${this.linkUnitType[0]} and ${this.linkUnitType[1]} effortlessly. Get quick and accurate results with our user-friendly temperature converter`)
    this.metaService.setKeywords("temperature converter, Celsius, Fahrenheit, Kelvin, Rankine, unit conversion, temperature measurement, conversion tool, temperature scales, calculator, temperature conversion formulas, online temperature converter, temperature units, conversion chart, temperature conversions")
  }
}
