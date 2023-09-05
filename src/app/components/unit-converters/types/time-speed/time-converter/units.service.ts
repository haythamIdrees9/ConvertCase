import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number }[] = Object.freeze([
    { key: "second", label: "Second", conversionRate: 1 },
    { key: "millisecond", label: "Millisecond", conversionRate: 0.001 },
    { key: "microsecond", label: "Microsecond", conversionRate: 0.000001 },
    { key: "nanosecond", label: "Nanosecond", conversionRate: 0.000000001 },
    { key: "picosecond", label: "Picosecond", conversionRate: 0.000000000001 },
    { key: "minute", label: "Minute", conversionRate: 60 },
    { key: "hour", label: "Hour", conversionRate: 3600 },
    { key: "day", label: "Day", conversionRate: 86400 },
    { key: "week", label: "Week", conversionRate: 604800 },
    { key: "month", label: "Month", conversionRate: 2628000 },
    { key: "year", label: "Year", conversionRate: 31536000 },
    { key: "decade", label: "Decade", conversionRate: 315360000 },
    { key: "century", label: "Century", conversionRate: 3153600000 },
    { key: "millennium", label: "Millennium", conversionRate: 31536000000 },
    { key: "shake", label: "Shake", conversionRate: 0.00000001 },
    { key: "fortnight", label: "Fortnight", conversionRate: 1209600 },
    { key: "svedberg", label: "Svedberg", conversionRate: 0.0000000000001 },
    { key: "femtosecond", label: "Femtosecond", conversionRate: 0.000000000000001 },
    { key: "attosecond", label: "Attosecond", conversionRate: 0.000000000000000001 },
    { key: "planck-time", label: "Planck Time", conversionRate: 5.39116e-44 },
    { key: "jiffy", label: "Jiffy", conversionRate: 0.01 },
    { key: "sidereal-second", label: "Sidereal Second", conversionRate: 0.99726957 },
    { key: "sidereal-minute", label: "Sidereal Minute", conversionRate: 59.836174 },
    { key: "sidereal-hour", label: "Sidereal Hour", conversionRate: 3590.17045 },
    { key: "sidereal-day", label: "Sidereal Day", conversionRate: 86164.1004 },
    { key: "sidereal-week", label: "Sidereal Week", conversionRate: 604148.703 },
    { key: "sidereal-month", label: "Sidereal Month", conversionRate: 2629744.29 },
    { key: "sidereal-year", label: "Sidereal Year", conversionRate: 31558171.5 },
    { key: "geological-era", label: "Geological Era", conversionRate: 315360000000 },
    { key: "cosmic-year", label: "Cosmic Year", conversionRate: 1020000000000000 }
  ]
  );

  popularUnits = Object.freeze([
    {route: "second-to-millisecond",reverseRoute: "millisecond-to-second",labelRoute: "Second to Millisecond",labelReverseRoute: "Millisecond to Second"},
    {route: "second-to-microsecond",reverseRoute: "microsecond-to-second",labelRoute: "Second to Microsecond",labelReverseRoute: "Microsecond to Second"},
    {route: "second-to-nanosecond",reverseRoute: "nanosecond-to-second",labelRoute: "Second to Nanosecond",labelReverseRoute: "Nanosecond to Second"},
    {route: "second-to-picosecond",reverseRoute: "picosecond-to-second",labelRoute: "Second to Picosecond",labelReverseRoute: "Picosecond to Second"},
    {route: "second-to-minute",reverseRoute: "minute-to-second",labelRoute: "Second to Minute",labelReverseRoute: "Minute to Second"},
    {route: "second-to-hour",reverseRoute: "hour-to-second",labelRoute: "Second to Hour",labelReverseRoute: "Hour to Second"},
    {route: "second-to-day",reverseRoute: "day-to-second",labelRoute: "Second to Day",labelReverseRoute: "Day to Second"},
    {route: "second-to-week",reverseRoute: "week-to-second",labelRoute: "Second to Week",labelReverseRoute: "Week to Second"},
    {route: "second-to-month",reverseRoute: "month-to-second",labelRoute: "Second to Month",labelReverseRoute: "Month to Second"},
    {route: "second-to-year",reverseRoute: "year-to-second",labelRoute: "Second to Year",labelReverseRoute: "Year to Second"},
    {route: "second-to-decade",reverseRoute: "decade-to-second",labelRoute: "Second to Decade",labelReverseRoute: "Decade to Second"},
    {route: "second-to-century",reverseRoute: "century-to-second",labelRoute: "Second to Century",labelReverseRoute: "Century to Second"},
    {route: "second-to-millennium",reverseRoute: "millennium-to-second",labelRoute: "Second to Millennium",labelReverseRoute: "Millennium to Second"},
    {route: "second-to-shake",reverseRoute: "shake-to-second",labelRoute: "Second to Shake",labelReverseRoute: "Shake to Second"},
    {route: "second-to-fortnight",reverseRoute: "fortnight-to-second",labelRoute: "Second to Fortnight",labelReverseRoute: "Fortnight to Second"},
    {route: "second-to-svedberg",reverseRoute: "svedberg-to-second",labelRoute: "Second to Svedberg",labelReverseRoute: "Svedberg to Second"},
    {route: "second-to-femtosecond",reverseRoute: "femtosecond-to-second",labelRoute: "Second to Femtosecond",labelReverseRoute: "Femtosecond to Second"},
    {route: "second-to-attosecond",reverseRoute: "attosecond-to-second",labelRoute: "Second to Attosecond",labelReverseRoute: "Attosecond to Second"},
    {route: "second-to-planck-time",reverseRoute: "planck-time-to-second",labelRoute: "Second to Planck Time",labelReverseRoute: "Planck Time to Second"}
  ]
  );


  constructor() {
    // let value = (4 * 5);
    // console.log(this.units.length,'uni1ts',this.units.map(item => {return {key:item.key,conversionRate:item.conversionRate.toString()}}).slice(value,value + 5));  
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