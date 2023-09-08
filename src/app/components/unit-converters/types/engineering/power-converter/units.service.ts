import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number,abbreviation?:string}[] = Object.freeze([
    {key: "kilowatt",label: "Kilowatt",conversionRate: 1000,abbreviation: "kW"},
    {key: "megawatt",label: "Megawatt",conversionRate: 1000000,abbreviation: "MW"},
    {key: "gigawatt",label: "Gigawatt",conversionRate: 1000000000,abbreviation: "GW"},
    {key: "terawatt",label: "Terawatt",conversionRate: 1000000000000,abbreviation: "TW"},
    {key: "watt",label: "Watt",conversionRate: 1,abbreviation: "W"},
    {key: "milliwatt",label: "Milliwatt",conversionRate: 0.001,abbreviation: "mW"},
    {key: "micro-watt",label: "Micro Watt",conversionRate: 0.000001,abbreviation: "µW"},
    {key: "nano-watt",label: "Nano Watt",conversionRate: 1e-9,abbreviation: "nW"},
    {key: "pico-watt",label: "Pico Watt",conversionRate: 1e-12,abbreviation: "pW"},
    {key: "femto-watt",label: "Femto Watt",conversionRate: 1e-15,abbreviation: "fW"},
    {key: "exawatt",label: "Exawatt",conversionRate: 1000000000000000000,abbreviation: "EW"},
    {key: "petawatt",label: "Petawatt",conversionRate: 1000000000000000,abbreviation: "PW"},
    {key: "terawatt-hour",label: "Terawatt Hour",conversionRate: 3600000000000000,abbreviation: "TWh"},
    {key: "gigawatt-hour",label: "Gigawatt Hour",conversionRate: 3600000000000,abbreviation: "GWh"},
    {key: "megawatt-hour",label: "Megawatt Hour",conversionRate: 3600000000,abbreviation: "MWh"},
    {key: "kilowatt-hour",label: "Kilowatt Hour",conversionRate: 3600000,abbreviation: "kWh"},
    {key: "watt-hour",label: "Watt Hour",conversionRate: 3600,abbreviation: "Wh"},
    {key: "joule-per-second",label: "Joule per Second",conversionRate: 1,abbreviation: "J/s"},
    {key: "calorie-per-second",label: "Calorie per Second",conversionRate: 0.004184,abbreviation: "cal/s"},
    {key: "foot-pound-per-second",label: "Foot-Pound per Second",conversionRate: 1.35582,abbreviation: "ft·lbf/s"},
    {key: "british-thermal-unit-per-second",label: "BTU per Second",conversionRate: 1055.06,abbreviation: "BTU/s"},
    {key: "horsepower-boiler",label: "Horsepower (Boiler)",conversionRate: 9812.5,abbreviation: "hp (boiler)"},
    {key: "horsepower-electric",label: "Horsepower (Electric)",conversionRate: 746,abbreviation: "hp (electric)"},
    {key: "horsepower-metric",label: "Horsepower (Metric)",conversionRate: 735.5,abbreviation: "hp (metric)"},
    {key: "horsepower-imperial",label: "Horsepower (Imperial)",conversionRate: 745.7,abbreviation: "hp (imperial)"},
    {key: "erg-per-second",label: "Erg per Second",conversionRate: 1e-7,abbreviation: "erg/s"},
    {key: "foot-pound-per-minute",label: "Foot-Pound per Minute",conversionRate: 0.022597,abbreviation: "ft·lbf/min"},
    {key: "watt-second",label: "Watt Second",conversionRate: 1,abbreviation: "W·s"},
    {key: "erg-per-hour",label: "Erg per Hour",conversionRate: 2.77778e-11,abbreviation: "erg/h"},
    {key: "foot-pound-per-hour",label: "Foot-Pound per Hour",conversionRate: 0.0003725061366,abbreviation: "ft·lbf/h"},
    {key: "joule-per-hour",label: "Joule per Hour",conversionRate: 0.0002777777778,abbreviation: "J/h"},
    {key: "calorie-per-minute",label: "Calorie per Minute",conversionRate: 0.00006973318408,abbreviation: "cal/min"},
    {key: "foot-pound-per-second-gram",label: "Foot-Pound per Second (Gram)",conversionRate: 0.00003108095,abbreviation: "ft·lbf/s·g"},
    {key: "calorie-per-hour",label: "Calorie per Hour",conversionRate: 0.000001162222222,abbreviation: "cal/h"},
    {key: "foot-pound-per-minute-gram",label: "Foot-Pound per Minute (Gram)",conversionRate: 5.18049217e-7,abbreviation: "ft·lbf/min·g"},
    {key: "foot-pound-per-hour-gram",label: "Foot-Pound per Hour (Gram)",conversionRate: 8.634153e-9,abbreviation: "ft·lbf/h·g"},
    {key: "erg-per-minute",label: "Erg per Minute",conversionRate: 1.666667e-9,abbreviation: "erg/min"},
    {key: "erg-per-hour",label: "Erg per Hour",conversionRate: 2.77778e-11,abbreviation: "erg/h"},
    {key: "joule-per-minute",label: "Joule per Minute",conversionRate: 0.01666666667,abbreviation: "J/min"},
    {key: "watt-minute",label: "Watt Minute",conversionRate: 60,abbreviation: "W·min"},
    {key: "watt-day",label: "Watt Day",conversionRate: 1440,abbreviation: "W·day"},
    {key: "joule-per-day",label: "Joule per Day",conversionRate: 0.04166666667,abbreviation: "J/day"},
    {key: "calorie-per-day",label: "Calorie per Day",conversionRate: 0.00001157407,abbreviation: "cal/day"
    }
]);

  popularUnits = Object.freeze([
  { route: "kilowatt-to-megawatt", reverseRoute: "megawatt-to-kilowatt", labelRoute: "Kilowatt to Megawatt", labelReverseRoute: "Megawatt to Kilowatt" },
  { route: "megawatt-to-gigawatt", reverseRoute: "gigawatt-to-megawatt", labelRoute: "Megawatt to Gigawatt", labelReverseRoute: "Gigawatt to Megawatt" },
  { route: "gigawatt-to-terawatt", reverseRoute: "terawatt-to-gigawatt", labelRoute: "Gigawatt to Terawatt", labelReverseRoute: "Terawatt to Gigawatt" },
  { route: "terawatt-to-watt", reverseRoute: "watt-to-terawatt", labelRoute: "Terawatt to Watt", labelReverseRoute: "Watt to Terawatt" },
  { route: "watt-to-milliwatt", reverseRoute: "milliwatt-to-watt", labelRoute: "Watt to Milliwatt", labelReverseRoute: "Milliwatt to Watt" },
  { route: "watt-to-micro-watt", reverseRoute: "micro-watt-to-watt", labelRoute: "Watt to Micro Watt", labelReverseRoute: "Micro Watt to Watt" },
  { route: "watt-to-nano-watt", reverseRoute: "nano-watt-to-watt", labelRoute: "Watt to Nano Watt", labelReverseRoute: "Nano Watt to Watt" },
  { route: "watt-to-pico-watt", reverseRoute: "pico-watt-to-watt", labelRoute: "Watt to Pico Watt", labelReverseRoute: "Pico Watt to Watt" },
  { route: "watt-to-femto-watt", reverseRoute: "femto-watt-to-watt", labelRoute: "Watt to Femto Watt", labelReverseRoute: "Femto Watt to Watt" },
  { route: "terawatt-to-exawatt", reverseRoute: "exawatt-to-terawatt", labelRoute: "Terawatt to Exawatt", labelReverseRoute: "Exawatt to Terawatt" },
  { route: "exawatt-to-petawatt", reverseRoute: "petawatt-to-exawatt", labelRoute: "Exawatt to Petawatt", labelReverseRoute: "Petawatt to Exawatt" },
  { route: "terawatt-hour-to-gigawatt-hour", reverseRoute: "gigawatt-hour-to-terawatt-hour", labelRoute: "Terawatt Hour to Gigawatt Hour", labelReverseRoute: "Gigawatt Hour to Terawatt Hour" },
  { route: "gigawatt-hour-to-megawatt-hour", reverseRoute: "megawatt-hour-to-gigawatt-hour", labelRoute: "Gigawatt Hour to Megawatt Hour", labelReverseRoute: "Megawatt Hour to Gigawatt Hour" },
  { route: "megawatt-hour-to-kilowatt-hour", reverseRoute: "kilowatt-hour-to-megawatt-hour", labelRoute: "Megawatt Hour to Kilowatt Hour", labelReverseRoute: "Kilowatt Hour to Megawatt Hour" },
  { route: "kilowatt-hour-to-watt-hour", reverseRoute: "watt-hour-to-kilowatt-hour", labelRoute: "Kilowatt Hour to Watt Hour", labelReverseRoute: "Watt Hour to Kilowatt Hour" },
  { route: "watt-hour-to-joule-per-second", reverseRoute: "joule-per-second-to-watt-hour", labelRoute: "Watt Hour to Joule per Second", labelReverseRoute: "Joule per Second to Watt Hour" },
  { route: "joule-per-second-to-calorie-per-second", reverseRoute: "calorie-per-second-to-joule-per-second", labelRoute: "Joule per Second to Calorie per Second", labelReverseRoute: "Calorie per Second to Joule per Second" },
  { route: "foot-pound-per-second-to-british-thermal-unit-per-second", reverseRoute: "british-thermal-unit-per-second-to-foot-pound-per-second", labelRoute: "Foot-Pound per Second to BTU per Second", labelReverseRoute: "BTU per Second to Foot-Pound per Second" }
  ]
  );


  constructor() {
      
  }




  getConversionRate(fromUnit: string, toUnit: string) {
    const fromUnitData = this.units.find(unit => unit.key === fromUnit);
    const toUnitData = this.units.find(unit => unit.key === toUnit);
     if (!fromUnitData || !toUnitData) {
       throw new Error("Invalid units provided."); 
    } 
    return this.calculateConversionRate(toUnitData.conversionRate, fromUnitData.conversionRate)
  }

  calculateConversionRate(conversionRate1: number, conversionRate2: number) {
    const rate1 = new Decimal(conversionRate1); const rate2 = new Decimal(conversionRate2); return rate2.div(rate1).toNumber()
  }


}