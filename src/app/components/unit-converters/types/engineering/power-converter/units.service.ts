import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number }[] = Object.freeze([{ key: "kilowatt", label: "Kilowatt", conversionRate: 1000 },
  { key: "megawatt", label: "Megawatt", conversionRate: 1000000 },
  { key: "gigawatt", label: "Gigawatt", conversionRate: 1000000000 },
  { key: "terawatt", label: "Terawatt", conversionRate: 1000000000000 },
  { key: "watt", label: "Watt", conversionRate: 1 },
  { key: "milliwatt", label: "Milliwatt", conversionRate: 0.001 },
  { key: "micro-watt", label: "Micro Watt", conversionRate: 0.000001 },
  { key: "nano-watt", label: "Nano Watt", conversionRate: 0.000000001 },
  { key: "pico-watt", label: "Pico Watt", conversionRate: 0.000000000001 },
  { key: "femto-watt", label: "Femto Watt", conversionRate: 0.000000000000001 },
  { key: "exawatt", label: "Exawatt", conversionRate: 1000000000000000000 },
  { key: "petawatt", label: "Petawatt", conversionRate: 1000000000000000 },
  { key: "terawatt-hour", label: "Terawatt Hour", conversionRate: 3600000000000000 },
  { key: "gigawatt-hour", label: "Gigawatt Hour", conversionRate: 3600000000000 },
  { key: "megawatt-hour", label: "Megawatt Hour", conversionRate: 3600000000 },
  { key: "kilowatt-hour", label: "Kilowatt Hour", conversionRate: 3600000 },
  { key: "watt-hour", label: "Watt Hour", conversionRate: 3600 },
  { key: "joule-per-second", label: "Joule per Second", conversionRate: 1 },
  { key: "calorie-per-second", label: "Calorie per Second", conversionRate: 0.004184 },
  { key: "foot-pound-per-second", label: "Foot-Pound per Second", conversionRate: 1.35582 },
  { key: "british-thermal-unit-per-second", label: "BTU per Second", conversionRate: 1055.06 },
  { key: "horsepower-boiler", label: "Horsepower (Boiler)", conversionRate: 9812.5 },
  { key: "horsepower-electric", label: "Horsepower (Electric)", conversionRate: 746 },
  { key: "horsepower-metric", label: "Horsepower (Metric)", conversionRate: 735.5 },
  { key: "horsepower-imperial", label: "Horsepower (Imperial)", conversionRate: 745.7 },
  { key: "erg-per-second", label: "Erg per Second", conversionRate: 0.0000001 },
  { key: "foot-pound-per-minute", label: "Foot-Pound per Minute", conversionRate: 0.022597 },
  { key: "watt-second", label: "Watt Second", conversionRate: 1 },
  { key: "erg-per-hour", label: "Erg per Hour", conversionRate: 0.0000000000277778 },
  { key: "foot-pound-per-hour", label: "Foot-Pound per Hour", conversionRate: 0.0003725061366 },
  { key: "joule-per-hour", label: "Joule per Hour", conversionRate: 0.0002777777778 },
  { key: "calorie-per-minute", label: "Calorie per Minute", conversionRate: 0.00006973318408 },
  { key: "foot-pound-per-second-gram", label: "Foot-Pound per Second (Gram)", conversionRate: 0.00003108095 },
  { key: "calorie-per-hour", label: "Calorie per Hour", conversionRate: 0.000001162222222 },
  { key: "foot-pound-per-minute-gram", label: "Foot-Pound per Minute (Gram)", conversionRate: 0.000000518049217 },
  { key: "foot-pound-per-hour-gram", label: "Foot-Pound per Hour (Gram)", conversionRate: 0.000000008634153 },
  { key: "erg-per-minute", label: "Erg per Minute", conversionRate: 0.000000001666667 },
  { key: "erg-per-hour", label: "Erg per Hour", conversionRate: 0.0000000000277778 },
  { key: "joule-per-minute", label: "Joule per Minute", conversionRate: 0.01666666667 },
  { key: "watt-minute", label: "Watt Minute", conversionRate: 60 },
  { key: "watt-day", label: "Watt Day", conversionRate: 1440 },
  { key: "joule-per-day", label: "Joule per Day", conversionRate: 0.04166666667 },
  { key: "calorie-per-day", label: "Calorie per Day", conversionRate: 0.00001157407 },
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
    // let value = (8 * 5);
      
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