import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number,abbreviation?:string}[] = Object.freeze([
    {key: "newton",label: "Newton",conversionRate: 1,abbreviation: "N"},
    {key: "dyne",label: "Dyne",conversionRate: 0.00001,abbreviation: "dyn"},
    {key: "kilogram-force",label: "Kilogram-force",conversionRate: 9.80665,abbreviation: "kgf"},
    {key: "pound-force",label: "Pound-force",conversionRate: 4.44822,abbreviation: "lbf"},
    {key: "ounce-force",label: "Ounce-force",conversionRate: 0.2780139,abbreviation: "ozf"},
    {key: "gram-force",label: "Gram-force",conversionRate: 0.00980665,abbreviation: "gf"},
    {key: "kilonewton",label: "Kilonewton",conversionRate: 1000,abbreviation: "kN"},
    {key: "meganewton",label: "Meganewton",conversionRate: 1000000,abbreviation: "MN"},
    {key: "giganewton",label: "Giganewton",conversionRate: 1000000000,abbreviation: "GN"},
    {key: "teranewton",label: "Teranewton",conversionRate: 1000000000000,abbreviation: "TN"},
    {key: "millinewton",label: "Millinewton",conversionRate: 0.001,abbreviation: "mN"},
    {key: "micronewton",label: "Micronewton",conversionRate: 0.000001,abbreviation: "µN"},
    {key: "nanonewton",label: "Nanonewton",conversionRate: 1e-9,abbreviation: "nN"},
    {key: "piconewton",label: "Piconewton",conversionRate: 1e-12,abbreviation: "pN"},
    {key: "femtonewton",label: "Femtonewton",conversionRate: 1e-15,abbreviation: "fN"},
    {key: "meganewton-per-square-meter",label: "Meganewton per Square Meter",conversionRate: 1,abbreviation: "MN/m²"},
    {key: "dyne-per-square-centimeter",label: "Dyne per Square Centimeter",conversionRate: 0.1,abbreviation: "dyn/cm²"},
    {key: "kilogram-force-per-square-meter",label: "Kilogram-force per Square Meter",conversionRate: 9.80665,abbreviation: "kgf/m²"},
    {key: "pound-force-per-square-inch",label: "Pound-force per Square Inch",conversionRate: 6894.76,abbreviation: "lbf/in²"},
    {key: "kilopound-force",label: "Kilopound-force",conversionRate: 4448.22,abbreviation: "kip"},
    {key: "kip",label: "Kip",conversionRate: 4448.22,abbreviation: "kip"},
    {key: "ounce-force-inch",label: "Ounce-force Inch",conversionRate: 0.007251,abbreviation: "ozf·in"},
    {key: "poundal",label: "Poundal",conversionRate: 0.138255,abbreviation: "poundal"},
    {key: "pond",label: "Pond",conversionRate: 0.00980665,abbreviation: "pond"},
    {key: "tonne-force",label: "Tonne-force",conversionRate: 9806.65,abbreviation: "tonne-force"},
    {key: "kilonewton-per-square-meter",label: "Kilonewton per Square Meter",conversionRate: 1000,abbreviation: "kN/m²"},
    {key: "meganewton-per-square-centimeter",label: "Meganewton per Square Centimeter",conversionRate: 10000000,abbreviation: "MN/cm²"},
    {key: "kilopond-per-square-meter",label: "Kilopond per Square Meter",conversionRate: 98.0665,abbreviation: "kgf/m²"},
    {key: "newton-per-meter",label: "Newton per Meter",conversionRate: 1,abbreviation: "N/m"},
    {key: "dyne-per-centimeter",label: "Dyne per Centimeter",conversionRate: 0.001,abbreviation: "dyn/cm"},
    {key: "pound-force-per-foot",label: "Pound-force per Foot",conversionRate: 1.48816,abbreviation: "lbf/ft"},
    {key: "poundal-per-foot",label: "Poundal per Foot",conversionRate: 0.0421401,abbreviation: "poundal/ft"},
    {key: "gram-force-per-square-centimeter",label: "Gram-force per Square Centimeter",conversionRate: 98.0665,abbreviation: "gf/cm²"},
    {key: "kilonewton-per-square-centimeter",label: "Kilonewton per Square Centimeter",conversionRate: 100000,abbreviation: "kN/cm²"},
    {key: "millinewton-per-meter",label: "Millinewton per Meter",conversionRate: 0.001,abbreviation: "mN/m"},
    {key: "micronewton-per-meter",label: "Micronewton per Meter",conversionRate: 0.000001,abbreviation: "µN/m"},
    {key: "nanonewton-per-meter",label: "Nanonewton per Meter",conversionRate: 1e-9,abbreviation: "nN/m"},
    {key: "piconewton-per-meter",label: "Piconewton per Meter",conversionRate: 1e-12,abbreviation: "pN/m"},
    {key: "femtonewton-per-meter",label: "Femtonewton per Meter",conversionRate: 1e-15,abbreviation: "fN/m"},
    {key: "millinewton-per-millimeter",label: "Millinewton per Millimeter",conversionRate: 1,abbreviation: "mN/mm"},
    {key: "poundal-per-inch",label: "Poundal per Inch",conversionRate: 0.345966,abbreviation: "poundal/in"},
    {key: "kilogram-force-meter",label: "Kilogram-force Meter",conversionRate: 9.80665,abbreviation: "kgf·m"},
    {key: "pound-force-foot",label: "Pound-force Foot",conversionRate: 0.0421401,abbreviation: "lbf·ft"
    }
]);

  popularUnits = Object.freeze([
    {
      route: "newton-to-dyne",
      reverseRoute: "dyne-to-newton",
      labelRoute: "Newton to Dyne",
      labelReverseRoute: "Dyne to Newton"},
    {
      route: "newton-to-kilogram-force",
      reverseRoute: "kilogram-force-to-newton",
      labelRoute: "Newton to Kilogram-force",
      labelReverseRoute: "Kilogram-force to Newton"},
    {
      route: "newton-to-pound-force",
      reverseRoute: "pound-force-to-newton",
      labelRoute: "Newton to Pound-force",
      labelReverseRoute: "Pound-force to Newton"},
    {
      route: "newton-to-ounce-force",
      reverseRoute: "ounce-force-to-newton",
      labelRoute: "Newton to Ounce-force",
      labelReverseRoute: "Ounce-force to Newton"},
    {
      route: "newton-to-gram-force",
      reverseRoute: "gram-force-to-newton",
      labelRoute: "Newton to Gram-force",
      labelReverseRoute: "Gram-force to Newton"},
    {
      route: "newton-to-kilonewton",
      reverseRoute: "kilonewton-to-newton",
      labelRoute: "Newton to Kilonewton",
      labelReverseRoute: "Kilonewton to Newton"},
    {
      route: "newton-to-meganewton",
      reverseRoute: "meganewton-to-newton",
      labelRoute: "Newton to Meganewton",
      labelReverseRoute: "Meganewton to Newton"},
    {
      route: "newton-to-giganewton",
      reverseRoute: "giganewton-to-newton",
      labelRoute: "Newton to Giganewton",
      labelReverseRoute: "Giganewton to Newton"},
    {
      route: "newton-to-teranewton",
      reverseRoute: "teranewton-to-newton",
      labelRoute: "Newton to Teranewton",
      labelReverseRoute: "Teranewton to Newton"},
    {
      route: "newton-to-millinewton",
      reverseRoute: "millinewton-to-newton",
      labelRoute: "Newton to Millinewton",
      labelReverseRoute: "Millinewton to Newton"},
    {
      route: "newton-to-micronewton",
      reverseRoute: "micronewton-to-newton",
      labelRoute: "Newton to Micronewton",
      labelReverseRoute: "Micronewton to Newton"},
    {
      route: "newton-to-nanonewton",
      reverseRoute: "nanonewton-to-newton",
      labelRoute: "Newton to Nanonewton",
      labelReverseRoute: "Nanonewton to Newton"},
    {
      route: "newton-to-piconewton",
      reverseRoute: "piconewton-to-newton",
      labelRoute: "Newton to Piconewton",
      labelReverseRoute: "Piconewton to Newton"},
    {
      route: "newton-to-femtonewton",
      reverseRoute: "femtonewton-to-newton",
      labelRoute: "Newton to Femtonewton",
      labelReverseRoute: "Femtonewton to Newton"},
    {
      route: "newton-to-meganewton-per-square-meter",
      reverseRoute: "meganewton-per-square-meter-to-newton",
      labelRoute: "Newton to Meganewton per Square Meter",
      labelReverseRoute: "Meganewton per Square Meter to Newton"},
    {
      route: "newton-to-dyne-per-square-centimeter",
      reverseRoute: "dyne-per-square-centimeter-to-newton",
      labelRoute: "Newton to Dyne per Square Centimeter",
      labelReverseRoute: "Dyne per Square Centimeter to Newton"},
    {
      route: "newton-to-kilogram-force-per-square-meter",
      reverseRoute: "kilogram-force-per-square-meter-to-newton",
      labelRoute: "Newton to Kilogram-force per Square Meter",
      labelReverseRoute: "Kilogram-force per Square Meter to Newton"},
    {
      route: "newton-to-pound-force-per-square-inch",
      reverseRoute: "pound-force-per-square-inch-to-newton",
      labelRoute: "Newton to Pound-force per Square Inch",
      labelReverseRoute: "Pound-force per Square Inch to Newton"},
    {
      route: "newton-to-kilopound-force",
      reverseRoute: "kilopound-force-to-newton",
      labelRoute: "Newton to Kilopound-force",
      labelReverseRoute: "Kilopound-force to Newton"
    }
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