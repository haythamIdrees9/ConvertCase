import { Component, OnInit } from '@angular/core';
import { UnitsService } from './units.service';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/components/services/meta.service';
import { SeoService } from 'src/app/components/services/seo.service';
import { UnitsInfoService } from './units-description.service';

@Component({
  selector: 'app-numbers-converter',
  templateUrl: './units-converter.component.html',
})
export class UnitConverterComponent implements OnInit {
  userInput: string = '1';
  result: string = '';
  units: readonly { key: string, label: string, base: number }[] = [];
  popularUnits: readonly { route: string, reverseRoute: string, labelRoute: string, labelReverseRoute: string, }[] = [];
  conversionRate!: number;
  linkUnitType:string [] = ['decimal','binary'];
  linkUnitBase:number [] = [10,2];
  errorMessage:string = '';
  unitsDescription:string[]=[];
linkUnitLabels :any[] = [];
  compareValues  = [1,2,3,4,5,6,7,8,9,10,20,50,100,1000];
  tableValues:{input:string,result:string}[] = [];
constructor(private unitsService: UnitsService,private unitsInfoService:UnitsInfoService, private route: ActivatedRoute,
     private metaService:MetaService, private seoService:SeoService) {
  }

 
  updateResult(userInput: string = this.userInput) {
    this.userInput = userInput;
    if(this.unitsService.isValidBaseNumber(userInput,this.linkUnitBase[0])){
      this.result = this.unitsService.convertBaseNumber(userInput,this.linkUnitBase[0],this.linkUnitBase[1]);
      this.errorMessage = "";
    } else{
      this.result = "";
      this.errorMessage = "Please provide a valid base number!";
    }
  }

  getResult(userInput:number){
    let num = this.unitsService.convertBaseNumber(`${userInput}`,10,this.linkUnitBase[0]);    
    return this.unitsService.convertBaseNumber(num,this.linkUnitBase[0],this.linkUnitBase[1]);
  }

  ngOnInit() {
    this.popularUnits = this.unitsService.popularUnits;
    this.units = this.unitsService.units;
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
      this.linkUnitBase = [this.unitsService.getBase(this.linkUnitType[0]),this.unitsService.getBase(this.linkUnitType[1])]
      this.linkUnitLabels = [this.units.find(item => this.linkUnitType[0] === item.key)?.label, this.units.find(item => this.linkUnitType[1] === item.key)?.label]
      this.tableValues = this.compareValues.map((input:number) => ({input:this.unitsService.convertBaseNumber(`${input}`,10,this.linkUnitBase[0]),result:this.getResult(input)}))
      this.updateSeoData();
      this.updateResult();
    })
  }

  updateSeoData(){
    this.metaService.setTitle(`Convert ${this.linkUnitType[0]} to ${this.linkUnitType[1]}`);
    this.metaService.setDescription(`Convert numbers effortlessly between ${this.linkUnitType[0]} and ${this.linkUnitType[1]}. Get quick and precise results with our user-friendly numbers converter.`)
    this.metaService.setKeywords("numbers converters, numeral systems, binary, decimal, hexadecimal, octal, unit conversion, convert binary to decimal, hexadecimal to octal, numeral system conversion, number system conversion, number base conversion, numeral system calculator")
  }
}
