import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number,abbreviation?:string}[] = Object.freeze([
    { key: "degree", label: "Degree", conversionRate: 1 },
    { key: "radian", label: "Radian", conversionRate: 57.2958 },
    { key: "arc-minute", label: "Arc Minute", conversionRate: 0.0166667 },
    { key: "arc-second", label: "Arc Second", conversionRate: 0.000277778 },
    { key: "gradian", label: "Gradian", conversionRate: 1.11111 },
    { key: "sextant", label: "Sextant", conversionRate: 60 },
    { key: "quadrant", label: "Quadrant", conversionRate: 90 },
    { key: "revolution", label: "Revolution", conversionRate: 360 },
    { key: "circle", label: "Circle", conversionRate: 360 },
    { key: "turn", label: "Turn", conversionRate: 360 },
    { key: "right-angle", label: "Right Angle", conversionRate: 90 },
    { key: "gon", label: "Gon", conversionRate: 1.11111 },
    { key: "mil-nato", label: "Mil (NATO)", conversionRate: 0.05625 },
    { key: "mil-soviet", label: "Mil (Soviet)", conversionRate: 0.06 },
    { key: "mil-swedish", label: "Mil (Swedish)", conversionRate: 0.0675 },
    { key: "mil-russian", label: "Mil (Russian)", conversionRate: 0.0572958 },
    { key: "mil-french", label: "Mil (French)", conversionRate: 0.0628319 },
    { key: "mil-austria", label: "Mil (Austria)", conversionRate: 0.0647997 },
    { key: "mil-german", label: "Mil (German)", conversionRate: 0.0572958 },
    { key: "mil-italian", label: "Mil (Italian)", conversionRate: 0.0625 }
  ]
  
  
  );

  popularUnits = Object.freeze([
    {route: "degree-to-radian",reverseRoute: "radian-to-degree",labelRoute: "Degree to Radian",labelReverseRoute: "Radian to Degree"},
    {route: "degree-to-arc-minute",reverseRoute: "arc-minute-to-degree",labelRoute: "Degree to Arc Minute",labelReverseRoute: "Arc Minute to Degree"},
    {route: "degree-to-arc-second",reverseRoute: "arc-second-to-degree",labelRoute: "Degree to Arc Second",labelReverseRoute: "Arc Second to Degree"},
    {route: "degree-to-gradian",reverseRoute: "gradian-to-degree",labelRoute: "Degree to Gradian",labelReverseRoute: "Gradian to Degree"},
    {route: "degree-to-sextant",reverseRoute: "sextant-to-degree",labelRoute: "Degree to Sextant",labelReverseRoute: "Sextant to Degree"},
    {route: "degree-to-quadrant",reverseRoute: "quadrant-to-degree",labelRoute: "Degree to Quadrant",labelReverseRoute: "Quadrant to Degree"},
    {route: "degree-to-revolution",reverseRoute: "revolution-to-degree",labelRoute: "Degree to Revolution",labelReverseRoute: "Revolution to Degree"},
    {route: "degree-to-circle",reverseRoute: "circle-to-degree",labelRoute: "Degree to Circle",labelReverseRoute: "Circle to Degree"},
    {route: "degree-to-turn",reverseRoute: "turn-to-degree",labelRoute: "Degree to Turn",labelReverseRoute: "Turn to Degree"},
    {route: "degree-to-right-angle",reverseRoute: "right-angle-to-degree",labelRoute: "Degree to Right Angle",labelReverseRoute: "Right Angle to Degree"},
    {route: "degree-to-gon",reverseRoute: "gon-to-degree",labelRoute: "Degree to Gon",labelReverseRoute: "Gon to Degree"},
    {route: "degree-to-mil-nato",reverseRoute: "mil-nato-to-degree",labelRoute: "Degree to Mil (NATO)",labelReverseRoute: "Mil (NATO) to Degree"},
    {route: "degree-to-mil-soviet",reverseRoute: "mil-soviet-to-degree",labelRoute: "Degree to Mil (Soviet)",labelReverseRoute: "Mil (Soviet) to Degree"},
    {route: "degree-to-mil-swedish",reverseRoute: "mil-swedish-to-degree",labelRoute: "Degree to Mil (Swedish)",labelReverseRoute: "Mil (Swedish) to Degree"},
    {route: "degree-to-mil-russian",reverseRoute: "mil-russian-to-degree",labelRoute: "Degree to Mil (Russian)",labelReverseRoute: "Mil (Russian) to Degree"},
    {route: "degree-to-mil-french",reverseRoute: "mil-french-to-degree",labelRoute: "Degree to Mil (French)",labelReverseRoute: "Mil (French) to Degree"},
    {route: "degree-to-mil-austria",reverseRoute: "mil-austria-to-degree",labelRoute: "Degree to Mil (Austria)",labelReverseRoute: "Mil (Austria) to Degree"},
    {route: "degree-to-mil-german",reverseRoute: "mil-german-to-degree",labelRoute: "Degree to Mil (German)",labelReverseRoute: "Mil (German) to Degree"},
    {route: "degree-to-mil-italian",reverseRoute: "mil-italian-to-degree",labelRoute: "Degree to Mil (Italian)",labelReverseRoute: "Mil (Italian) to Degree"}
  ]
  
  
  );


  constructor() {
            //  console.log('units',this.units.map(item => ({...item,abbreviation:this.test.find(i => i.key === item.key)?.label})));
      //  console.log('units',this.units.map(item => (item.key)));   
  }


  getConversionRate(fromUnit: string, toUnit: string) {
    const fromUnitData = this.units.find(unit => unit.key === fromUnit);
    const toUnitData = this.units.find(unit => unit.key === toUnit);
     if (!fromUnitData || !toUnitData) { throw new Error("Invalid units provided."); 
    } 
    return this.calculateConversionRate(toUnitData.conversionRate, fromUnitData.conversionRate)
  }

  calculateConversionRate(conversionRate1: number, conversionRate2: number) {
    const rate1 = new Decimal(conversionRate1); const rate2 = new Decimal(conversionRate2); return rate2.div(rate1).toNumber()
  }


}