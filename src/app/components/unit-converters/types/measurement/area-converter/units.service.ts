import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number,abbreviation?:string}[] = Object.freeze([
    {key: "square-meter",label: "Square Meter",conversionRate: 1,abbreviation: "m²"},
    {key: "square-kilometer",label: "Square Kilometer",conversionRate: 1000000,abbreviation: "km²"},
    {key: "hectare",label: "Hectare",conversionRate: 10000,abbreviation: "ha"},
    {key: "acre",label: "Acre",conversionRate: 4046.86,abbreviation: "ac"},
    {key: "square-mile",label: "Square Mile",conversionRate: 2589990,abbreviation: "mi²"},
    {key: "square-centimeter",label: "Square Centimeter",conversionRate: 0.0001,abbreviation: "cm²"},
    {key: "square-millimeter",label: "Square Millimeter",conversionRate: 0.000001,abbreviation: "mm²"},
    {key: "square-yard",label: "Square Yard",conversionRate: 0.836127,abbreviation: "yd²"},
    {key: "square-foot",label: "Square Foot",conversionRate: 0.092903,abbreviation: "ft²"},
    {key: "square-inch",label: "Square Inch",conversionRate: 0.00064516,abbreviation: "in²"},
    {key: "are",label: "Are",conversionRate: 100,abbreviation: "a"},
    {key: "dunam",label: "Dunam",conversionRate: 1000,abbreviation: "dn"},
    {key: "feddan",label: "Feddan",conversionRate: 4200,abbreviation: "fdn"},
    {key: "rai",label: "Rai",conversionRate: 1600,abbreviation: "rai"},
    {key: "section",label: "Section",conversionRate: 2589988.11,abbreviation: "section"},
    {key: "township",label: "Township",conversionRate: 93239571.99,abbreviation: "township"},
    {key: "circular-mil",label: "Circular Mil",conversionRate: 5.067075e-10,abbreviation: "circ-mil"},
    {key: "square-decimeter",label: "Square Decimeter",conversionRate: 0.01,abbreviation: "dm²"},
    {key: "homestead",label: "Homestead",conversionRate: 647497.027584,abbreviation: "homestead"},
    {key: "bovate",label: "Bovate",conversionRate: 505.857,abbreviation: "bovate"},
    {key: "cuerda-varas",label: "Cuerda (Varas)",conversionRate: 7084.5,abbreviation: "cv"},
    {key: "cuerda",label: "Cuerda",conversionRate: 3937.04,abbreviation: "cuerda"},
    {key: "manzana",label: "Manzana",conversionRate: 1000,abbreviation: "manzana"},
    {key: "arpent-acre",label: "Arpent Acre",conversionRate: 181.822,abbreviation: "arp-ac"},
    {key: "stremma",label: "Stremma",conversionRate: 1000,abbreviation: "stremma"},
    {key: "djerib",label: "Djerib",conversionRate: 2800,abbreviation: "djerib"},
    {key: "vergees",label: "Vergees",conversionRate: 1638.80963,abbreviation: "vergees"
    }
]
  );

  popularUnits = Object.freeze([
    { route: "square-meter-to-square-kilometer", reverseRoute: "square-kilometer-to-square-meter", labelRoute: "Square Meter to Square Kilometer", labelReverseRoute: "Square Kilometer to Square Meter" },
    { route: "square-meter-to-hectare", reverseRoute: "hectare-to-square-meter", labelRoute: "Square Meter to Hectare", labelReverseRoute: "Hectare to Square Meter" },
    { route: "square-meter-to-acre", reverseRoute: "acre-to-square-meter", labelRoute: "Square Meter to Acre", labelReverseRoute: "Acre to Square Meter" },
    { route: "square-meter-to-square-mile", reverseRoute: "square-mile-to-square-meter", labelRoute: "Square Meter to Square Mile", labelReverseRoute: "Square Mile to Square Meter" },
    { route: "square-meter-to-square-yard", reverseRoute: "square-yard-to-square-meter", labelRoute: "Square Meter to Square Yard", labelReverseRoute: "Square Yard to Square Meter" },
    { route: "square-meter-to-square-foot", reverseRoute: "square-foot-to-square-meter", labelRoute: "Square Meter to Square Foot", labelReverseRoute: "Square Foot to Square Meter" },
    { route: "square-meter-to-square-inch", reverseRoute: "square-inch-to-square-meter", labelRoute: "Square Meter to Square Inch", labelReverseRoute: "Square Inch to Square Meter" },
    { route: "square-kilometer-to-hectare", reverseRoute: "hectare-to-square-kilometer", labelRoute: "Square Kilometer to Hectare", labelReverseRoute: "Hectare to Square Kilometer" },
    { route: "square-kilometer-to-acre", reverseRoute: "acre-to-square-kilometer", labelRoute: "Square Kilometer to Acre", labelReverseRoute: "Acre to Square Kilometer" },
    { route: "hectare-to-acre", reverseRoute: "acre-to-hectare", labelRoute: "Hectare to Acre", labelReverseRoute: "Acre to Hectare" },
    { route: "square-foot-to-square-meter", reverseRoute: "square-meter-to-square-foot", labelRoute: "Square Foot to Square Meter", labelReverseRoute: "Square Meter to Square Foot" },
    { route: "square-yard-to-square-meter", reverseRoute: "square-meter-to-square-yard", labelRoute: "Square Yard to Square Meter", labelReverseRoute: "Square Meter to Square Yard" },
    { route: "square-mile-to-square-kilometer", reverseRoute: "square-kilometer-to-square-mile", labelRoute: "Square Mile to Square Kilometer", labelReverseRoute: "Square Kilometer to Square Mile" },
    { route: "square-mile-to-acre", reverseRoute: "acre-to-square-mile", labelRoute: "Square Mile to Acre", labelReverseRoute: "Acre to Square Mile" },
    { route: "square-foot-to-square-inch", reverseRoute: "square-inch-to-square-foot", labelRoute: "Square Foot to Square Inch", labelReverseRoute: "Square Inch to Square Foot" },
    { route: "square-yard-to-square-foot", reverseRoute: "square-foot-to-square-yard", labelRoute: "Square Yard to Square Foot", labelReverseRoute: "Square Foot to Square Yard" },
    { route: "square-yard-to-acre", reverseRoute: "acre-to-square-yard", labelRoute: "Square Yard to Acre", labelReverseRoute: "Acre to Square Yard" },
    { route: "square-mile-to-square-yard", reverseRoute: "square-yard-to-square-mile", labelRoute: "Square Mile to Square Yard", labelReverseRoute: "Square Yard to Square Mile" },
    { route: "square-foot-to-square-centimeter", reverseRoute: "square-centimeter-to-square-foot", labelRoute: "Square Foot to Square Centimeter", labelReverseRoute: "Square Centimeter to Square Foot" },
    { route: "square-yard-to-square-meter", reverseRoute: "square-meter-to-square-yard", labelRoute: "Square Yard to Square Meter", labelReverseRoute: "Square Meter to Square Yard" }]);



  constructor() {   
  
  }


  

  getConversionRate(fromUnit:string, toUnit:string) {
    const fromUnitData = this.units.find(unit => unit.key === fromUnit);
    const toUnitData = this.units.find(unit => unit.key === toUnit);

    if (!fromUnitData || !toUnitData) {
      throw new Error("Invalid units provided.");
    }
    return this.calculateConversionRate(toUnitData.conversionRate,fromUnitData.conversionRate)
  }

  calculateConversionRate(conversionRate1:number,conversionRate2:number){
    const rate1 = new Decimal(conversionRate1);
    const rate2 = new Decimal(conversionRate2);
    return rate2.div(rate1).toNumber()
  }


}