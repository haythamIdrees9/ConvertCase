import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number }[] = Object.freeze([
    { key: "cubicmeter", label: "Cubic meter (m³)", conversionRate: 1 },
    { key: "cubickilometer", label: "Cubic Kilometer (km³)", conversionRate: 1000000000 },
    { key: "cubiccentimeter", label: "Cubic Centimeter (cm³)", conversionRate: 0.000001 },
    { key: "cubicmillimeter", label: "Cubic Millimeter (mm³)", conversionRate: 1e-9 },
    { key: "liter", label: "Liter (L)", conversionRate: 0.001 },
    { key: "milliliter", label: "Milliliter (mL)", conversionRate: 0.000001 },
    { key: "usgallon", label: "US Gallon (gal)", conversionRate: 0.00378541 },
    { key: "imperialgallon", label: "Imperial Gallon (UK gal)", conversionRate: 0.00454609 },
    { key: "cubicfoot", label: "Cubic Foot (ft³)", conversionRate: 0.0283168 },
    { key: "cubicinch", label: "Cubic Inch (in³)", conversionRate: 0.0000163871 },
    { key: "usquart", label: "US Quart (qt)", conversionRate: 0.000946353 },
    { key: "imperialquart", label: "Imperial Quart (UK qt)", conversionRate: 0.00113652 },
    { key: "uspint", label: "US Pint (pt)", conversionRate: 0.000473176 },
    { key: "imperialpint", label: "Imperial Pint (UK pt)", conversionRate: 0.000568261 },
    { key: "usfluidounce", label: "US Fluid Ounce (fl oz)", conversionRate: 0.0000295735 },
    { key: "imperialfluidounce", label: "Imperial Fluid Ounce (UK fl oz)", conversionRate: 0.0000284131 },
    { key: "cubicmile", label: "Cubic Mile (mi³)", conversionRate: 4168181825.4 },
    { key: "acrefoot", label: "Acre-Foot", conversionRate: 1233.48 },
    { key: "boardfoot", label: "Board Foot", conversionRate: 0.00235974 },
    { key: "minim", label: "Minim (min)", conversionRate: 6.16115e-8 },
    { key: "cord", label: "Cord", conversionRate: 3.62456 },
    { key: "firkin", label: "Firkin", conversionRate: 0.0409148 },
    { key: "hogshead", label: "Hogshead", conversionRate: 0.238481 },
    { key: "jigger", label: "Jigger", conversionRate: 0.0000044444 },
    { key: "last", label: "Last", conversionRate: 2.90909 },
    { key: "microliter", label: "Microliter (μL)", conversionRate: 1e-9 },
    { key: "nanoliter", label: "Nanoliter (nL)", conversionRate: 1e-12 },
    { key: "picoliter", label: "Picoliter (pL)", conversionRate: 1e-15 },
    { key: "femtoliter", label: "Femtoliter (fL)", conversionRate: 1e-18 },
    { key: "attoliter", label: "Attoliter (aL)", conversionRate: 1e-21 },
    { key: "barrel", label: "Barrel (bbl)", conversionRate: 0.158987 },
    { key: "cup", label: "Cup (c)", conversionRate: 0.000236588 },
    { key: "drop", label: "Drop (gtt)", conversionRate: 4.92892e-8 },
    { key: "peck", label: "Peck (pk)", conversionRate: 0.00880977 },
    { key: "bushel", label: "Bushel (bu)", conversionRate: 0.0352391 },
    { key: "decaliter", label: "Decaliter (daL)", conversionRate: 0.1 },
    { key: "picacrefoot", label: "Picacre Foot (picac ft)", conversionRate: 4.46489e-10 },
    { key: "fluidram", label: "Fluidram (fl dr)", conversionRate: 0.00000369669 },
    { key: "stere", label: "Stere (st)", conversionRate: 1 },
    { key: "kiloliter", label: "Kiloliter (kL)", conversionRate: 1 },
    { key: "deciliter", label: "Deciliter (dL)", conversionRate: 0.001 },
    { key: "centiliter", label: "Centiliter (cL)", conversionRate: 0.0001 },
    { key: "micromicroliter", label: "Micromicroliter (μμL)", conversionRate: 1e-12 }
  ]
  );

  popularUnits = Object.freeze([
    { route: 'cubiccentimeter-to-cubicmeter', reverseRoute: 'cubicmeter-to-cubiccentimeter', labelRoute: 'Cubic Centimeter to Cubic Meter', labelReverseRoute: 'Cubic Meter to Cubic Centimeter' },
    { route: 'cubicmillimeter-to-cubiccentimeter', reverseRoute: 'cubiccentimeter-to-cubicmillimeter', labelRoute: 'Cubic Millimeter to Cubic Centimeter', labelReverseRoute: 'Cubic Centimeter to Cubic Millimeter' },
    { route: 'milliliter-to-cubiccentimeter', reverseRoute: 'cubiccentimeter-to-milliliter', labelRoute: 'Milliliter to Cubic Centimeter', labelReverseRoute: 'Cubic Centimeter to Milliliter' },
    { route: 'liter-to-cubiccentimeter', reverseRoute: 'cubiccentimeter-to-liter', labelRoute: 'Liter to Cubic Centimeter', labelReverseRoute: 'Cubic Centimeter to Liter' },
    { route: 'milliliter-to-liter', reverseRoute: 'liter-to-milliliter', labelRoute: 'Milliliter to Liter', labelReverseRoute: 'Liter to Milliliter' },
    { route: 'milliliter-to-cubicmillimeter', reverseRoute: 'cubicmillimeter-to-milliliter', labelRoute: 'Milliliter to Cubic Millimeter', labelReverseRoute: 'Cubic Millimeter to Milliliter' },
    { route: 'cubicinch-to-cubiccentimeter', reverseRoute: 'cubiccentimeter-to-cubicinch', labelRoute: 'Cubic Inch to Cubic Centimeter', labelReverseRoute: 'Cubic Centimeter to Cubic Inch' },
    { route: 'usgallon-to-liter', reverseRoute: 'liter-to-usgallon', labelRoute: 'US Gallon to Liter', labelReverseRoute: 'Liter to US Gallon' },
    { route: 'cubicfoot-to-cubicmeter', reverseRoute: 'cubicmeter-to-cubicfoot', labelRoute: 'Cubic Foot to Cubic Meter', labelReverseRoute: 'Cubic Meter to Cubic Foot' },
    { route: 'usgallon-to-cubicmeter', reverseRoute: 'cubicmeter-to-usgallon', labelRoute: 'US Gallon to Cubic Meter', labelReverseRoute: 'Cubic Meter to US Gallon' },
    { route: 'imperialgallon-to-liter', reverseRoute: 'liter-to-imperialgallon', labelRoute: 'Imperial Gallon to Liter', labelReverseRoute: 'Liter to Imperial Gallon' },
    { route: 'cubicinch-to-cubicmillimeter', reverseRoute: 'cubicmillimeter-to-cubicinch', labelRoute: 'Cubic Inch to Cubic Millimeter', labelReverseRoute: 'Cubic Millimeter to Cubic Inch' },
    { route: 'cubicinch-to-liter', reverseRoute: 'liter-to-cubicinch', labelRoute: 'Cubic Inch to Liter', labelReverseRoute: 'Liter to Cubic Inch' },
    { route: 'usquart-to-cubicmeter', reverseRoute: 'cubicmeter-to-usquart', labelRoute: 'US Quart to Cubic Meter', labelReverseRoute: 'Cubic Meter to US Quart' },
    { route: 'usquart-to-liter', reverseRoute: 'liter-to-usquart', labelRoute: 'US Quart to Liter', labelReverseRoute: 'Liter to US Quart' },
    { route: 'uspint-to-cubicmeter', reverseRoute: 'cubicmeter-to-uspint', labelRoute: 'US Pint to Cubic Meter', labelReverseRoute: 'Cubic Meter to US Pint' },
    { route: 'cubicinch-to-milliliter', reverseRoute: 'milliliter-to-cubicinch', labelRoute: 'Cubic Inch to Milliliter', labelReverseRoute: 'Milliliter to Cubic Inch' },
    { route: 'usfluidounce-to-milliliter', reverseRoute: 'milliliter-to-usfluidounce', labelRoute: 'US Fluid Ounce to Milliliter', labelReverseRoute: 'Milliliter to US Fluid Ounce' },
    { route: 'cubicfoot-to-cubicinch', reverseRoute: 'cubicinch-to-cubicfoot', labelRoute: 'Cubic Foot to Cubic Inch', labelReverseRoute: 'Cubic Inch to Cubic Foot' },
    { route: 'usfluidounce-to-liter', reverseRoute: 'liter-to-usfluidounce', labelRoute: 'US Fluid Ounce to Liter', labelReverseRoute: 'Liter to US Fluid Ounce' }
  ]);


  constructor() {

  }




  getConversionRate(fromUnit: string, toUnit: string) {
    const fromUnitData = this.units.find(unit => unit.key === fromUnit); const toUnitData = this.units.find(unit => unit.key === toUnit);
    if (!fromUnitData || !toUnitData) {
      throw new Error("Invalid units provided.");
    }
    return this.calculateConversionRate(toUnitData.conversionRate, fromUnitData.conversionRate)
  }

  calculateConversionRate(conversionRate1: number, conversionRate2: number) {
    const rate1 = new Decimal(conversionRate1); const rate2 = new Decimal(conversionRate2); return rate2.div(rate1).toNumber()
  }


}