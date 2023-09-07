import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number }[] = Object.freeze(
    [
      { "key": "meter-per-liter", "label": "Meter per Liter", "conversionRate": 1 },
      { "key": "kilometer-per-liter", "label": "Kilometer per Liter", "conversionRate": 0.001 },
      { "key": "mile-per-gallon-us", "label": "Mile per Gallon (US)", "conversionRate": 0.000160358 },
      { "key": "mile-per-gallon-uk", "label": "Mile per Gallon (UK)", "conversionRate": 0.000117845 },
      { "key": "liter-per-100-kilometers", "label": "Liter per 100 Kilometers", "conversionRate": 0.01 },
      { "key": "kilometer-per-gallon-us", "label": "Kilometer per Gallon (US)", "conversionRate": 0.000160934 },
      { "key": "kilometer-per-gallon-uk", "label": "Kilometer per Gallon (UK)", "conversionRate": 0.000134481 },
      { "key": "meter-per-gallon-us", "label": "Meter per Gallon (US)", "conversionRate": 0.000000161 },
      { "key": "meter-per-gallon-uk", "label": "Meter per Gallon (UK)", "conversionRate": 0.000000134 },
      { "key": "nautical-mile-per-liter", "label": "Nautical Mile per Liter", "conversionRate": 0.000539956 },
      { "key": "nautical-mile-per-gallon-us", "label": "Nautical Mile per Gallon (US)", "conversionRate": 0.000000916 },
      { "key": "nautical-mile-per-gallon-uk", "label": "Nautical Mile per Gallon (UK)", "conversionRate": 0.000000762 },
      { "key": "kilometer-per-cubic-meter", "label": "Kilometer per Cubic Meter", "conversionRate": 0.001 },
      { "key": "mile-per-cubic-yard", "label": "Mile per Cubic Yard", "conversionRate": 1.30795 },
      { "key": "meter-per-cubic-foot", "label": "Meter per Cubic Foot", "conversionRate": 0.0283168 },
      { "key": "mile-per-liter", "label": "Mile per Liter", "conversionRate": 0.000621371 },
      { "key": "kilometer-per-cubic-foot", "label": "Kilometer per Cubic Foot", "conversionRate": 0.0283168 },
      { "key": "mile-per-cubic-meter", "label": "Mile per Cubic Meter", "conversionRate": 0.000000621 },
      { "key": "mile-per-cubic-inch", "label": "Mile per Cubic Inch", "conversionRate": 0.0000000254 },
      { "key": "meter-per-cubic-inch", "label": "Meter per Cubic Inch", "conversionRate": 0.0000610236 },
      { "key": "mile-per-cubic-centimeter", "label": "Mile per Cubic Centimeter", "conversionRate": 0.000000621 }
    ]
  );

  popularUnits = Object.freeze([
    {
      "route": "kilometer-per-liter-to-mile-per-gallon-us",
      "reverseRoute": "mile-per-gallon-us-to-kilometer-per-liter",
      "labelRoute": "Kilometer per Liter to Mile per Gallon (US)",
      "labelReverseRoute": "Mile per Gallon (US) to Kilometer per Liter"
    },
    {
      "route": "kilometer-per-liter-to-mile-per-gallon-uk",
      "reverseRoute": "mile-per-gallon-uk-to-kilometer-per-liter",
      "labelRoute": "Kilometer per Liter to Mile per Gallon (UK)",
      "labelReverseRoute": "Mile per Gallon (UK) to Kilometer per Liter"
    },
    {
      "route": "mile-per-gallon-us-to-mile-per-liter",
      "reverseRoute": "mile-per-liter-to-mile-per-gallon-us",
      "labelRoute": "Mile per Gallon (US) to Mile per Liter",
      "labelReverseRoute": "Mile per Liter to Mile per Gallon (US)"
    },
    {
      "route": "kilometer-per-liter-to-liter-per-100-kilometers",
      "reverseRoute": "liter-per-100-kilometers-to-kilometer-per-liter",
      "labelRoute": "Kilometer per Liter to Liter per 100 Kilometers",
      "labelReverseRoute": "Liter per 100 Kilometers to Kilometer per Liter"
    },
    {
      "route": "mile-per-gallon-uk-to-mile-per-liter",
      "reverseRoute": "mile-per-liter-to-mile-per-gallon-uk",
      "labelRoute": "Mile per Gallon (UK) to Mile per Liter",
      "labelReverseRoute": "Mile per Liter to Mile per Gallon (UK)"
    },
    {
      "route": "mile-per-liter-to-liter-per-100-kilometers",
      "reverseRoute": "liter-per-100-kilometers-to-mile-per-liter",
      "labelRoute": "Mile per Liter to Liter per 100 Kilometers",
      "labelReverseRoute": "Liter per 100 Kilometers to Mile per Liter"
    },
    {
      "route": "mile-per-gallon-us-to-mile-per-gallon-uk",
      "reverseRoute": "mile-per-gallon-uk-to-mile-per-gallon-us",
      "labelRoute": "Mile per Gallon (US) to Mile per Gallon (UK)",
      "labelReverseRoute": "Mile per Gallon (UK) to Mile per Gallon (US)"
    },
    {
      "route": "liter-per-100-kilometers-to-mile-per-gallon-us",
      "reverseRoute": "mile-per-gallon-us-to-liter-per-100-kilometers",
      "labelRoute": "Liter per 100 Kilometers to Mile per Gallon (US)",
      "labelReverseRoute": "Mile per Gallon (US) to Liter per 100 Kilometers"
    },
    {
      "route": "liter-per-100-kilometers-to-mile-per-gallon-uk",
      "reverseRoute": "mile-per-gallon-uk-to-liter-per-100-kilometers",
      "labelRoute": "Liter per 100 Kilometers to Mile per Gallon (UK)",
      "labelReverseRoute": "Mile per Gallon (UK) to Liter per 100 Kilometers"
    },
    {
      "route": "kilometer-per-liter-to-kilometer-per-gallon-us",
      "reverseRoute": "kilometer-per-gallon-us-to-kilometer-per-liter",
      "labelRoute": "Kilometer per Liter to Kilometer per Gallon (US)",
      "labelReverseRoute": "Kilometer per Gallon (US) to Kilometer per Liter"
    },
    {
      "route": "kilometer-per-liter-to-kilometer-per-gallon-uk",
      "reverseRoute": "kilometer-per-gallon-uk-to-kilometer-per-liter",
      "labelRoute": "Kilometer per Liter to Kilometer per Gallon (UK)",
      "labelReverseRoute": "Kilometer per Gallon (UK) to Kilometer per Liter"
    },
    {
      "route": "kilometer-per-liter-to-meter-per-liter",
      "reverseRoute": "meter-per-liter-to-kilometer-per-liter",
      "labelRoute": "Kilometer per Liter to Meter per Liter",
      "labelReverseRoute": "Meter per Liter to Kilometer per Liter"
    },
    {
      "route": "kilometer-per-liter-to-millimeter-per-liter",
      "reverseRoute": "millimeter-per-liter-to-kilometer-per-liter",
      "labelRoute": "Kilometer per Liter to Millimeter per Liter",
      "labelReverseRoute": "Millimeter per Liter to Kilometer per Liter"
    },
    {
      "route": "meter-per-liter-to-mile-per-gallon-us",
      "reverseRoute": "mile-per-gallon-us-to-meter-per-liter",
      "labelRoute": "Meter per Liter to Mile per Gallon (US)",
      "labelReverseRoute": "Mile per Gallon (US) to Meter per Liter"
    },
    {
      "route": "meter-per-liter-to-mile-per-gallon-uk",
      "reverseRoute": "mile-per-gallon-uk-to-meter-per-liter",
      "labelRoute": "Meter per Liter to Mile per Gallon (UK)",
      "labelReverseRoute": "Mile per Gallon (UK) to Meter per Liter"
    },
    {
      "route": "meter-per-liter-to-liter-per-100-kilometers",
      "reverseRoute": "liter-per-100-kilometers-to-meter-per-liter",
      "labelRoute": "Meter per Liter to Liter per 100 Kilometers",
      "labelReverseRoute": "Liter per 100 Kilometers to Meter per Liter"
    },
    {
      "route": "meter-per-liter-to-mile-per-liter",
      "reverseRoute": "mile-per-liter-to-meter-per-liter",
      "labelRoute": "Meter per Liter to Mile per Liter",
      "labelReverseRoute": "Mile per Liter to Meter per Liter"
    },
    {
      "route": "meter-per-liter-to-kilometer-per-gallon-us",
      "reverseRoute": "kilometer-per-gallon-us-to-meter-per-liter",
      "labelRoute": "Meter per Liter to Kilometer per Gallon (US)",
      "labelReverseRoute": "Kilometer per Gallon (US) to Meter per Liter"
    },
    {
      "route": "meter-per-liter-to-kilometer-per-gallon-uk",
      "reverseRoute": "kilometer-per-gallon-uk-to-meter-per-liter",
      "labelRoute": "Meter per Liter to Kilometer per Gallon (UK)",
      "labelReverseRoute": "Kilometer per Gallon (UK) to Meter per Liter"
    }
  ]
   );


  constructor() {
    
      
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