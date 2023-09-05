import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {
  
  units: readonly { key: string; label: string; conversionRate: number }[] = Object.freeze([
    { key: "pascal",label: "Pascal",conversionRate: 1 },
    { key: "bar",label: "Bar",conversionRate: 100000 },
    { key: "atmosphere",label: "Atmosphere",conversionRate: 101325 },
    { key: "torr",label: "Torr",conversionRate: 133.322 },
    { key: "psi",label: "Pound per Square Inch (psi)",conversionRate: 6894.76 },
    { key: "mmhg",label: "Millimeter of Mercury (mmHg)",conversionRate: 133.322 },
    { key: "pa",label: "Pascal",conversionRate: 1 },
    { key: "hpa",label: "Hectopascal (hPa)",conversionRate: 100 },
    { key: "kpa",label: "Kilopascal (kPa)",conversionRate: 1000 },
    { key: "mpa",label: "Megapascal (MPa)",conversionRate: 1000000 },
    { key: "gpa",label: "Gigapascal (GPa)",conversionRate: 1000000000 },
    { key: "n/m2",label: "Newton per Square Meter (N/m²)",conversionRate: 1 },
    { key: "kn/m2",label: "Kilonewton per Square Meter (kN/m²)",conversionRate: 1000 },
    { key: "mn/m2",label: "Meganewton per Square Meter (MN/m²)",conversionRate: 1000000 },
    { key: "gn/m2",label: "Giganewton per Square Meter (GN/m²)",conversionRate: 1000000000 },
    { key: "mbar",label: "Millibar (mbar)",conversionRate: 100 },
    { key: "milibar",label: "Millibar (mbar)",conversionRate: 100 },
    { key: "microbar",label: "Microbar (µbar)",conversionRate: 0.1 },
    { key: "n/mm2",label: "Newton per Square Millimeter (N/mm²)",conversionRate: 1000000 },
    { key: "kn/mm2",label: "Kilonewton per Square Millimeter (kN/mm²)",conversionRate: 1000000000 },
    { key: "mn/mm2",label: "Meganewton per Square Millimeter (MN/mm²)",conversionRate: 1000000000000 },
    { key: "gf/cm2",label: "Gram Force per Square Centimeter (gf/cm²)",conversionRate: 98.0665 },
    { key: "gf/mm2",label: "Gram Force per Square Millimeter (gf/mm²)",conversionRate: 98066.5 },
    { key: "kgf/cm2",label: "Kilogram Force per Square Centimeter (kgf/cm²)",conversionRate: 98066.5 },
    { key: "kgf/mm2",label: "Kilogram Force per Square Millimeter (kgf/mm²)",conversionRate: 98066500 },
    { key: "tonf/cm2",label: "Ton Force per Square Centimeter (tonf/cm²)",conversionRate: 98066500 },
    { key: "tonf/mm2",label: "Ton Force per Square Millimeter (tonf/mm²)",conversionRate: 98066500000 },
    { key: "kg/cm2",label: "Kilogram per Square Centimeter (kg/cm²)",conversionRate: 98066.5 },
    { key: "kg/mm2",label: "Kilogram per Square Millimeter (kg/mm²)",conversionRate: 98066500 },
    { key: "ton/cm2",label: "Ton per Square Centimeter (ton/cm²)",conversionRate: 98066.5 },
    { key: "ton/mm2",label: "Ton per Square Millimeter (ton/mm²)",conversionRate: 98066500 },
    { key: "inwg",label: "Inch Water Column (inWG)",conversionRate: 248.84 },
    { key: "ftwg",label: "Foot Water Column (ftWG)",conversionRate: 2989.07 },
    { key: "mca",label: "Meter of Column Water (mca)",conversionRate: 9806.65 },
    { key: "mmca",label: "Millimeter of Column Water (mmca)",conversionRate: 9.80665 },
    { key: "inmh2o",label: "Inch of Mercury (inH2O)",conversionRate: 249.082 },
    { key: "ftmh2o",label: "Foot of Mercury (ftH2O)",conversionRate: 2989.07 },
    { key: "incawc",label: "Inch of Water Column (inCaWC)",conversionRate: 248.84 },
    { key: "ftcawc",label: "Foot of Water Column (ftCaWC)",conversionRate: 2989.07 }
  ]
);
popularUnits = Object.freeze([
  { route: "pascal-to-bar",reverseRoute: "bar-to-pascal",labelRoute: "Pascal to Bar",labelReverseRoute: "Bar to Pascal" },
  { route: "pascal-to-atmosphere",reverseRoute: "atmosphere-to-pascal",labelRoute: "Pascal to Atmosphere",labelReverseRoute: "Atmosphere to Pascal" },
  { route: "pascal-to-torr",reverseRoute: "torr-to-pascal",labelRoute: "Pascal to Torr",labelReverseRoute: "Torr to Pascal" },
  { route: "pascal-to-psi",reverseRoute: "psi-to-pascal",labelRoute: "Pascal to Pound per Square Inch",labelReverseRoute: "Pound per Square Inch to Pascal" },
  { route: "pascal-to-mmhg",reverseRoute: "mmhg-to-pascal",labelRoute: "Pascal to Millimeter of Mercury",labelReverseRoute: "Millimeter of Mercury to Pascal" },
  { route: "bar-to-atmosphere",reverseRoute: "atmosphere-to-bar",labelRoute: "Bar to Atmosphere",labelReverseRoute: "Atmosphere to Bar" },
  { route: "bar-to-torr",reverseRoute: "torr-to-bar",labelRoute: "Bar to Torr",labelReverseRoute: "Torr to Bar" },
  { route: "bar-to-psi",reverseRoute: "psi-to-bar",labelRoute: "Bar to Pound per Square Inch",labelReverseRoute: "Pound per Square Inch to Bar" },
  { route: "bar-to-mmhg",reverseRoute: "mmhg-to-bar",labelRoute: "Bar to Millimeter of Mercury",labelReverseRoute: "Millimeter of Mercury to Bar" },
  { route: "atmosphere-to-torr",reverseRoute: "torr-to-atmosphere",labelRoute: "Atmosphere to Torr",labelReverseRoute: "Torr to Atmosphere" },
  { route: "atmosphere-to-psi",reverseRoute: "psi-to-atmosphere",labelRoute: "Atmosphere to Pound per Square Inch",labelReverseRoute: "Pound per Square Inch to Atmosphere" },
  { route: "atmosphere-to-mmhg",reverseRoute: "mmhg-to-atmosphere",labelRoute: "Atmosphere to Millimeter of Mercury",labelReverseRoute: "Millimeter of Mercury to Atmosphere" },
  { route: "torr-to-psi",reverseRoute: "psi-to-torr",labelRoute: "Torr to Pound per Square Inch",labelReverseRoute: "Pound per Square Inch to Torr" },
  { route: "torr-to-mmhg",reverseRoute: "mmhg-to-torr",labelRoute: "Torr to Millimeter of Mercury",labelReverseRoute: "Millimeter of Mercury to Torr" },
  { route: "psi-to-mmhg",reverseRoute: "mmhg-to-psi",labelRoute: "Pound per Square Inch to Millimeter of Mercury",labelReverseRoute: "Millimeter of Mercury to Pound per Square Inch" },
  { route: "hpa-to-kpa",reverseRoute: "kpa-to-hpa",labelRoute: "Hectopascal to Kilopascal",labelReverseRoute: "Kilopascal to Hectopascal" },
  { route: "hpa-to-mpa",reverseRoute: "mpa-to-hpa",labelRoute: "Hectopascal to Megapascal",labelReverseRoute: "Megapascal to Hectopascal" },
  { route: "hpa-to-gpa",reverseRoute: "gpa-to-hpa",labelRoute: "Hectopascal to Gigapascal",labelReverseRoute: "Gigapascal to Hectopascal" },
  { route: "kpa-to-mpa",reverseRoute: "mpa-to-kpa",labelRoute: "Kilopascal to Megapascal",labelReverseRoute: "Megapascal to Kilopascal" },
  { route: "kpa-to-gpa",reverseRoute: "gpa-to-kpa",labelRoute: "Kilopascal to Gigapascal",labelReverseRoute: "Gigapascal to Kilopascal" }
]);
 
 
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