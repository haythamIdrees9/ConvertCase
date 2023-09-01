import { Component, OnInit } from '@angular/core';
import { UnitsService } from './units.service';
import { ActivatedRoute } from '@angular/router';

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
  linkUnitType:string [] = ['cubickilometer','cubicmeter'];
  currentUnits:readonly { key: string; label: string; convertToCelsius: (key: any) => any;convertFromCelsius:(key: any) => any }[]  = []
  constructor(private unitsService: UnitsService, private route: ActivatedRoute) {
  }

  updateResult(userInput: string = this.userInput) {
    this.userInput = userInput;
    const celsiusValue = this.currentUnits[0].convertToCelsius(Number(userInput));
    this.result = this.currentUnits[1].convertFromCelsius(celsiusValue);
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
      this.currentUnits = this.unitsService.getConversionRate(this.linkUnitType[0], this.linkUnitType[1]);
      this.updateResult();
    })
  }
}
