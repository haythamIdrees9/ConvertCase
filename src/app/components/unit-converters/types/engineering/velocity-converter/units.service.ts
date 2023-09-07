import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number,abbreviation?:string}[] = Object.freeze([
    {
        "key": "meter-per-second",
        "label": "Meter per Second",
        "conversionRate": 1,
        "abbreviation": "m/s"
    },
    {
        "key": "kilometer-per-hour",
        "label": "Kilometer per Hour",
        "conversionRate": 0.277778,
        "abbreviation": "km/h"
    },
    {
        "key": "mile-per-hour",
        "label": "Mile per Hour",
        "conversionRate": 0.44704,
        "abbreviation": "mph"
    },
    {
        "key": "foot-per-second",
        "label": "Foot per Second",
        "conversionRate": 0.3048,
        "abbreviation": "ft/s"
    },
    {
        "key": "knot",
        "label": "Knot",
        "conversionRate": 0.514444,
        "abbreviation": "kn"
    },
    {
        "key": "mach",
        "label": "Mach",
        "conversionRate": 343.058,
        "abbreviation": "Ma"
    },
    {
        "key": "light-per-second",
        "label": "Speed of Light (c)",
        "conversionRate": 299792458,
        "abbreviation": "c"
    },
    {
        "key": "kilometer-per-second",
        "label": "Kilometer per Second",
        "conversionRate": 1000,
        "abbreviation": "km/s"
    },
    {
        "key": "centimeter-per-second",
        "label": "Centimeter per Second",
        "conversionRate": 0.01,
        "abbreviation": "cm/s"
    },
    {
        "key": "millimeter-per-second",
        "label": "Millimeter per Second",
        "conversionRate": 0.001,
        "abbreviation": "mm/s"
    },
    {
        "key": "yard-per-second",
        "label": "Yard per Second",
        "conversionRate": 0.9144,
        "abbreviation": "yd/s"
    },
    {
        "key": "mile-per-second",
        "label": "Mile per Second",
        "conversionRate": 1609.34,
        "abbreviation": "mi/s"
    },
    {
        "key": "inch-per-second",
        "label": "Inch per Second",
        "conversionRate": 0.0254,
        "abbreviation": "in/s"
    },
    {
        "key": "microinch-per-second",
        "label": "Microinch per Second",
        "conversionRate": 2.54e-8,
        "abbreviation": "µin/s"
    },
    {
        "key": "millimeter-per-hour",
        "label": "Millimeter per Hour",
        "conversionRate": 2.77778e-7,
        "abbreviation": "mm/hr"
    },
    {
        "key": "centimeter-per-hour",
        "label": "Centimeter per Hour",
        "conversionRate": 0.00000277778,
        "abbreviation": "cm/hr"
    },
    {
        "key": "kilometer-per-millisecond",
        "label": "Kilometer per Millisecond",
        "conversionRate": 1000000,
        "abbreviation": "km/ms"
    },
    {
        "key": "meter-per-millisecond",
        "label": "Meter per Millisecond",
        "conversionRate": 1000,
        "abbreviation": "m/ms"
    },
    {
        "key": "foot-per-millisecond",
        "label": "Foot per Millisecond",
        "conversionRate": 0.3048,
        "abbreviation": "ft/ms"
    },
    {
        "key": "inch-per-millisecond",
        "label": "Inch per Millisecond",
        "conversionRate": 0.0254,
        "abbreviation": "in/ms"
    }
]);

  popularUnits = Object.freeze([
    { "route": "meter-per-second-to-kilometer-per-hour", "reverseRoute": "kilometer-per-hour-to-meter-per-second", "labelRoute": "Meter per Second to Kilometer per Hour", "labelReverseRoute": "Kilometer per Hour to Meter per Second" },
    { "route": "meter-per-second-to-mile-per-hour", "reverseRoute": "mile-per-hour-to-meter-per-second", "labelRoute": "Meter per Second to Mile per Hour", "labelReverseRoute": "Mile per Hour to Meter per Second" },
    { "route": "meter-per-second-to-foot-per-second", "reverseRoute": "foot-per-second-to-meter-per-second", "labelRoute": "Meter per Second to Foot per Second", "labelReverseRoute": "Foot per Second to Meter per Second" },
    { "route": "kilometer-per-hour-to-mile-per-hour", "reverseRoute": "mile-per-hour-to-kilometer-per-hour", "labelRoute": "Kilometer per Hour to Mile per Hour", "labelReverseRoute": "Mile per Hour to Kilometer per Hour" },
    { "route": "kilometer-per-hour-to-foot-per-second", "reverseRoute": "foot-per-second-to-kilometer-per-hour", "labelRoute": "Kilometer per Hour to Foot per Second", "labelReverseRoute": "Foot per Second to Kilometer per Hour" },
    { "route": "mile-per-hour-to-foot-per-second", "reverseRoute": "foot-per-second-to-mile-per-hour", "labelRoute": "Mile per Hour to Foot per Second", "labelReverseRoute": "Foot per Second to Mile per Hour" },
    { "route": "knot-to-meter-per-second", "reverseRoute": "meter-per-second-to-knot", "labelRoute": "Knot to Meter per Second", "labelReverseRoute": "Meter per Second to Knot" },
    { "route": "knot-to-kilometer-per-hour", "reverseRoute": "kilometer-per-hour-to-knot", "labelRoute": "Knot to Kilometer per Hour", "labelReverseRoute": "Kilometer per Hour to Knot" },
    { "route": "knot-to-mile-per-hour", "reverseRoute": "mile-per-hour-to-knot", "labelRoute": "Knot to Mile per Hour", "labelReverseRoute": "Mile per Hour to Knot" },
    { "route": "mach-to-meter-per-second", "reverseRoute": "meter-per-second-to-mach", "labelRoute": "Mach to Meter per Second", "labelReverseRoute": "Meter per Second to Mach" },
    { "route": "mile-per-hour-to-kilometer-per-hour", "reverseRoute": "kilometer-per-hour-to-mile-per-hour", "labelRoute": "Mile per Hour to Kilometer per Hour", "labelReverseRoute": "Kilometer per Hour to Mile per Hour" },
    { "route": "mile-per-hour-to-mach", "reverseRoute": "mach-to-mile-per-hour", "labelRoute": "Mile per Hour to Mach", "labelReverseRoute": "Mile per Hour to Mach" },
    { "route": "foot-per-second-to-kilometer-per-hour", "reverseRoute": "kilometer-per-hour-to-foot-per-second", "labelRoute": "Foot per Second to Kilometer per Hour", "labelReverseRoute": "Kilometer per Hour to Foot per Second" },
    { "route": "foot-per-second-to-mile-per-hour", "reverseRoute": "mile-per-hour-to-foot-per-second", "labelRoute": "Foot per Second to Mile per Hour", "labelReverseRoute": "Mile per Hour to Foot per Second" },
    { "route": "c-to-meter-per-second", "reverseRoute": "meter-per-second-to-c", "labelRoute": "Speed of Light to Meter per Second", "labelReverseRoute": "Meter per Second to Speed of Light" },
    { "route": "kilometer-per-second-to-mile-per-hour", "reverseRoute": "mile-per-hour-to-kilometer-per-second", "labelRoute": "Kilometer per Second to Mile per Hour", "labelReverseRoute": "Mile per Hour to Kilometer per Second" },
    { "route": "kilometer-per-second-to-foot-per-second", "reverseRoute": "foot-per-second-to-kilometer-per-second", "labelRoute": "Kilometer per Second to Foot per Second", "labelReverseRoute": "Foot per Second to Kilometer per Second" },
    { "route": "mile-per-hour-to-meter-per-second", "reverseRoute": "meter-per-second-to-mile-per-hour", "labelRoute": "Mile per Hour to Meter per Second", "labelReverseRoute": "Meter per Second to Mile per Hour" },
    { "route": "foot-per-second-to-meter-per-second", "reverseRoute": "meter-per-second-to-foot-per-second", "labelRoute": "Foot per Second to Meter per Second", "labelReverseRoute": "Meter per Second to Foot per Second" }
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