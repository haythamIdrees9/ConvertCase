import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number,abbreviation?:string }[] = Object.freeze([
    {key: "cubicmeter",label: "Cubic meter (m³)",conversionRate: 1,abbreviation: "m³"},
    {key: "cubickilometer",label: "Cubic Kilometer (km³)",conversionRate: 1000000000,abbreviation: "km³"},
    {key: "cubiccentimeter",label: "Cubic Centimeter (cm³)",conversionRate: 0.000001,abbreviation: "cm³"},
    {key: "cubicmillimeter",label: "Cubic Millimeter (mm³)",conversionRate: 1e-9,abbreviation: "mm³"},
    {key: "liter",label: "Liter (L)",conversionRate: 0.001,abbreviation: "L"},
    {key: "milliliter",label: "Milliliter (mL)",conversionRate: 0.000001,abbreviation: "mL"},
    {key: "usgallon",label: "US Gallon (gal)",conversionRate: 0.00378541,abbreviation: "gal (US)"},
    {key: "imperialgallon",label: "Imperial Gallon (UK gal)",conversionRate: 0.00454609,abbreviation: "gal (UK)"},
    {key: "cubicfoot",label: "Cubic Foot (ft³)",conversionRate: 0.0283168,abbreviation: "ft³"},
    {key: "cubicinch",label: "Cubic Inch (in³)",conversionRate: 0.0000163871,abbreviation: "in³"},
    {key: "usquart",label: "US Quart (qt)",conversionRate: 0.000946353,abbreviation: "qt (US)"},
    {key: "imperialquart",label: "Imperial Quart (UK qt)",conversionRate: 0.00113652,abbreviation: "qt (UK)"},
    {key: "uspint",label: "US Pint (pt)",conversionRate: 0.000473176,abbreviation: "pt (US)"},
    {key: "imperialpint",label: "Imperial Pint (UK pt)",conversionRate: 0.000568261,abbreviation: "pt (UK)"},
    {key: "usfluidounce",label: "US Fluid Ounce (fl oz)",conversionRate: 0.0000295735,abbreviation: "fl oz (US)"},
    {key: "imperialfluidounce",label: "Imperial Fluid Ounce (UK fl oz)",conversionRate: 0.0000284131,abbreviation: "fl oz (UK)"},
    {key: "cubicmile",label: "Cubic Mile (mi³)",conversionRate: 4168181825.4,abbreviation: "mi³"},
    {key: "acrefoot",label: "Acre-Foot",conversionRate: 1233.48,abbreviation: "acre-ft"},
    {key: "boardfoot",label: "Board Foot",conversionRate: 0.00235974,abbreviation: "board ft"},
    {key: "minim",label: "Minim (min)",conversionRate: 6.16115e-8,abbreviation: "min"},
    {key: "cord",label: "Cord",conversionRate: 3.62456,abbreviation: "cord"},
    {key: "firkin",label: "Firkin",conversionRate: 0.0409148,abbreviation: "firkin"},
    {key: "hogshead",label: "Hogshead",conversionRate: 0.238481,abbreviation: "hogshead"},
    {key: "jigger",label: "Jigger",conversionRate: 0.0000044444,abbreviation: "jigger"},
    {key: "last",label: "Last",conversionRate: 2.90909,abbreviation: "last"},
    {key: "microliter",label: "Microliter (μL)",conversionRate: 1e-9,abbreviation: "µL"},
    {key: "nanoliter",label: "Nanoliter (nL)",conversionRate: 1e-12,abbreviation: "nL"},
    {key: "picoliter",label: "Picoliter (pL)",conversionRate: 1e-15,abbreviation: "pL"},
    {key: "femtoliter",label: "Femtoliter (fL)",conversionRate: 1e-18,abbreviation: "fL"},
    {key: "attoliter",label: "Attoliter (aL)",conversionRate: 1e-21,abbreviation: "aL"},
    {key: "barrel",label: "Barrel (bbl)",conversionRate: 0.158987,abbreviation: "bbl"},
    {key: "cup",label: "Cup (c)",conversionRate: 0.000236588,abbreviation: "cup"},
    {key: "drop",label: "Drop (gtt)",conversionRate: 4.92892e-8,abbreviation: "drop"},
    {key: "peck",label: "Peck (pk)",conversionRate: 0.00880977,abbreviation: "pk"},
    {key: "bushel",label: "Bushel (bu)",conversionRate: 0.0352391,abbreviation: "bu"},
    {key: "decaliter",label: "Decaliter (daL)",conversionRate: 0.1,abbreviation: "daL"},
    {key: "picacrefoot",label: "Picacre Foot (picac ft)",conversionRate: 4.46489e-10,abbreviation: "pacre-ft"},
    {key: "fluidram",label: "Fluidram (fl dr)",conversionRate: 0.00000369669,abbreviation: "fluidram"},
    {key: "stere",label: "Stere (st)",conversionRate: 1,abbreviation: "stere"},
    {key: "kiloliter",label: "Kiloliter (kL)",conversionRate: 1,abbreviation: "kL"},
    {key: "deciliter",label: "Deciliter (dL)",conversionRate: 0.001,abbreviation: "dL"},
    {key: "centiliter",label: "Centiliter (cL)",conversionRate: 0.0001,abbreviation: "cL"},
    {key: "micromicroliter",label: "Micromicroliter (μμL)",conversionRate: 1e-12,abbreviation: "µµL"
    }
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
    // console.log('units',this.units.map(item => ({...item,abbreviation:this.test.find(i => i.key === item.key)?.abbreviation})));

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