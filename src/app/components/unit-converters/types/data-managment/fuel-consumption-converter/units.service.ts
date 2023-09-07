import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number,abbreviation?:string }[] = Object.freeze(
    [
      {
          "key": "meter-per-liter",
          "label": "Meter per Liter",
          "conversionRate": 1,
          "abbreviation": "m/L"
      },
      {
          "key": "kilometer-per-liter",
          "label": "Kilometer per Liter",
          "conversionRate": 0.001,
          "abbreviation": "km/L"
      },
      {
          "key": "mile-per-gallon-us",
          "label": "Mile per Gallon (US)",
          "conversionRate": 0.000160358,
          "abbreviation": "mi/gal US"
      },
      {
          "key": "mile-per-gallon-uk",
          "label": "Mile per Gallon (UK)",
          "conversionRate": 0.000117845,
          "abbreviation": "mi/gal UK"
      },
      {
          "key": "liter-per-100-kilometers",
          "label": "Liter per 100 Kilometers",
          "conversionRate": 0.01,
          "abbreviation": "L/100 km"
      },
      {
          "key": "kilometer-per-gallon-us",
          "label": "Kilometer per Gallon (US)",
          "conversionRate": 0.000160934,
          "abbreviation": "km/gal US"
      },
      {
          "key": "kilometer-per-gallon-uk",
          "label": "Kilometer per Gallon (UK)",
          "conversionRate": 0.000134481,
          "abbreviation": "km/gal UK"
      },
      {
          "key": "meter-per-gallon-us",
          "label": "Meter per Gallon (US)",
          "conversionRate": 1.61e-7,
          "abbreviation": "m/gal US"
      },
      {
          "key": "meter-per-gallon-uk",
          "label": "Meter per Gallon (UK)",
          "conversionRate": 1.34e-7,
          "abbreviation": "m/gal UK"
      },
      {
          "key": "nautical-mile-per-liter",
          "label": "Nautical Mile per Liter",
          "conversionRate": 0.000539956,
          "abbreviation": "nmi/L"
      },
      {
          "key": "nautical-mile-per-gallon-us",
          "label": "Nautical Mile per Gallon (US)",
          "conversionRate": 9.16e-7,
          "abbreviation": "nmi/gal US"
      },
      {
          "key": "nautical-mile-per-gallon-uk",
          "label": "Nautical Mile per Gallon (UK)",
          "conversionRate": 7.62e-7,
          "abbreviation": "nmi/gal UK"
      },
      {
          "key": "kilometer-per-cubic-meter",
          "label": "Kilometer per Cubic Meter",
          "conversionRate": 0.001,
          "abbreviation": "km/m³"
      },
      {
          "key": "mile-per-cubic-yard",
          "label": "Mile per Cubic Yard",
          "conversionRate": 1.30795,
          "abbreviation": "mi/yd³"
      },
      {
          "key": "meter-per-cubic-foot",
          "label": "Meter per Cubic Foot",
          "conversionRate": 0.0283168,
          "abbreviation": "m/ft³"
      },
      {
          "key": "mile-per-liter",
          "label": "Mile per Liter",
          "conversionRate": 0.000621371,
          "abbreviation": "mi/L"
      },
      {
          "key": "kilometer-per-cubic-foot",
          "label": "Kilometer per Cubic Foot",
          "conversionRate": 0.0283168,
          "abbreviation": "km/ft³"
      },
      {
          "key": "mile-per-cubic-meter",
          "label": "Mile per Cubic Meter",
          "conversionRate": 6.21e-7,
          "abbreviation": "mi/m³"
      },
      {
          "key": "mile-per-cubic-inch",
          "label": "Mile per Cubic Inch",
          "conversionRate": 2.54e-8,
          "abbreviation": "mi/in³"
      },
      {
          "key": "meter-per-cubic-inch",
          "label": "Meter per Cubic Inch",
          "conversionRate": 0.0000610236,
          "abbreviation": "m/in³"
      },
      {
          "key": "mile-per-cubic-centimeter",
          "label": "Mile per Cubic Centimeter",
          "conversionRate": 6.21e-7,
          "abbreviation": "mi/cm³"
      }
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

  test = [
    {"key": "meter-per-liter", "abbreviation": "m/L"},
    {"key": "kilometer-per-liter", "abbreviation": "km/L"},
    {"key": "mile-per-gallon-us", "abbreviation": "mi/gal US"},
    {"key": "mile-per-gallon-uk", "abbreviation": "mi/gal UK"},
    {"key": "liter-per-100-kilometers", "abbreviation": "L/100 km"},
    {"key": "kilometer-per-gallon-us", "abbreviation": "km/gal US"},
    {"key": "kilometer-per-gallon-uk", "abbreviation": "km/gal UK"},
    {"key": "meter-per-gallon-us", "abbreviation": "m/gal US"},
    {"key": "meter-per-gallon-uk", "abbreviation": "m/gal UK"},
    {"key": "nautical-mile-per-liter", "abbreviation": "nmi/L"},
    {"key": "nautical-mile-per-gallon-us", "abbreviation": "nmi/gal US"},
    {"key": "nautical-mile-per-gallon-uk", "abbreviation": "nmi/gal UK"},
    {"key": "kilometer-per-cubic-meter", "abbreviation": "km/m³"},
    {"key": "mile-per-cubic-yard", "abbreviation": "mi/yd³"},
    {"key": "meter-per-cubic-foot", "abbreviation": "m/ft³"},
    {"key": "mile-per-liter", "abbreviation": "mi/L"},
    {"key": "kilometer-per-cubic-foot", "abbreviation": "km/ft³"},
    {"key": "mile-per-cubic-meter", "abbreviation": "mi/m³"},
    {"key": "mile-per-cubic-inch", "abbreviation": "mi/in³"},
    {"key": "meter-per-cubic-inch", "abbreviation": "m/in³"},
    {"key": "mile-per-cubic-centimeter", "abbreviation": "mi/cm³"}
]

  constructor() {
       console.log('units',this.units.map(item => ({...item,abbreviation:this.test.find(i => i.key === item.key)?.abbreviation})));
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