import { Component, OnInit } from '@angular/core';
import Decimal from 'decimal.js';
import { UnitsService } from './units.service';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/components/services/meta.service';
import { SeoService } from 'src/app/components/services/seo.service';
import { UnitsInfoService } from './units-description.service';

@Component({
  selector: 'app-data-storage-converter',
  templateUrl: './units-converter.component.html',
})
export class UnitConverterComponent implements OnInit {
  userInput: string = '1';
  result: string = '';
  errorMessage: string = '';
  
  units: readonly { key: string, label: string, conversionRate: number }[] = [];
  popularUnits: readonly { route: string, reverseRoute: string, labelRoute: string, labelReverseRoute: string, }[] = [];
  conversionRate!: number;
  linkUnitType:string [] = ['byte','bit'];
  unitsDescription:string[]=[];
constructor(private unitsService: UnitsService,private unitsInfoService:UnitsInfoService, private route: ActivatedRoute,
     private metaService:MetaService, private seoService:SeoService) {
  }

 
  updateResult(userInput: string = this.userInput) {
    this.userInput = userInput;
    if(this.unitsService.isValidNumber(userInput)){
      this.errorMessage = "";
      const inputDecimal = new Decimal(Number(userInput));
      this.result = `${inputDecimal.times(this.conversionRate)}`;
    } else{
      this.result = "";
      this.errorMessage = "Please provide a valid base number!";
    }

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
      this.updateSeoData();
      this.updateResult();
    })
  }

  updateSeoData(){
    this.metaService.setTitle(`Convert ${this.linkUnitType[0]} to ${this.linkUnitType[1]}`);
    this.metaService.setDescription(`Effortlessly convert data storage units like ${this.linkUnitType[0]} to ${this.linkUnitType[1]}. Get quick and accurate results with our user-friendly data storage converter`)
    this.metaService.setKeywords("data storage converter, byte, kilobyte, megabyte, gigabyte, terabyte, petabyte, unit conversion, convert bytes to kilobytes, megabytes to gigabytes, data storage unit conversion, data storage measurement, storage conversion tool, byte to gigabyte conversion")
  }
}
