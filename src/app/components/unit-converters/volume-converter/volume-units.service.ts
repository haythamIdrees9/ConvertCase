import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class VolumeUnitsService {

  units: readonly { key: string; label: string; conversionRate: number; }[] = Object.freeze([
    { key: 'Cubicmeter', label: 'Cubic meter (m³)', conversionRate: 1 },
    { key: 'CubicKilometer', label: 'Cubic Kilometer (km³)', conversionRate: 1e9 },
  { key: 'CubicCentimeter', label: 'Cubic Centimeter (cm³)', conversionRate: 1e-6 },
  { key: 'CubicMillimeter', label: 'Cubic Millimeter (mm³)', conversionRate: 1e-9 },
  { key: 'Liter', label: 'Liter (L)', conversionRate: 1e-3 },
  { key: 'Milliliter', label: 'Milliliter (mL)', conversionRate: 1e-6 },
  { key: 'USGallon', label: 'US Gallon (gal)', conversionRate: 0.00378541 },
  { key: 'ImperialGallon', label: 'Imperial Gallon (UK gal)', conversionRate: 0.00454609 },
  { key: 'CubicFoot', label: 'Cubic Foot (ft³)', conversionRate: 0.0283168 },
  { key: 'CubicInch', label: 'Cubic Inch (in³)', conversionRate: 0.0000163871 },
  { key: 'USQuart', label: 'US Quart (qt)', conversionRate: 0.000946353 },
  { key: 'Liter', label: 'Liter (L)', conversionRate: 1e-3 },
  { key: 'Milliliter', label: 'Milliliter (mL)', conversionRate: 1e-6 },
  { key: 'USGallon', label: 'US Gallon (gal)', conversionRate: 0.00378541 },
  { key: 'ImperialGallon', label: 'Imperial Gallon (UK gal)', conversionRate: 0.00454609 },
  { key: 'CubicFoot', label: 'Cubic Foot (ft³)', conversionRate: 0.0283168 },
  { key: 'CubicInch', label: 'Cubic Inch (in³)', conversionRate: 0.0000163871 },
  { key: 'USQuart', label: 'US Quart (qt)', conversionRate: 0.000946353 },
  { key: 'ImperialQuart', label: 'Imperial Quart (UK qt)', conversionRate: 0.00113652 },
  { key: 'USPint', label: 'US Pint (pt)', conversionRate: 0.000473176 },
  { key: 'ImperialPint', label: 'Imperial Pint (UK pt)', conversionRate: 0.000568261 },
  { key: 'USFluidOunce', label: 'US Fluid Ounce (fl oz)', conversionRate: 2.95735e-5 },
  { key: 'USGallon', label: 'US Gallon (gal)', conversionRate: 0.00378541 },
  { key: 'ImperialGallon', label: 'Imperial Gallon (UK gal)', conversionRate: 0.00454609 },
  { key: 'CubicFoot', label: 'Cubic Foot (ft³)', conversionRate: 0.0283168 },
  { key: 'CubicInch', label: 'Cubic Inch (in³)', conversionRate: 0.0000163871 },
  { key: 'USQuart', label: 'US Quart (qt)', conversionRate: 0.000946353 },
  { key: 'ImperialQuart', label: 'Imperial Quart (UK qt)', conversionRate: 0.00113652 },
  { key: 'USPint', label: 'US Pint (pt)', conversionRate: 0.000473176 },
  { key: 'ImperialPint', label: 'Imperial Pint (UK pt)', conversionRate: 0.000568261 },
  { key: 'USFluidOunce', label: 'US Fluid Ounce (fl oz)', conversionRate: 2.95735e-5 },
  { key: 'ImperialFluidOunce', label: 'Imperial Fluid Ounce (UK fl oz)', conversionRate: 2.84131e-5 },
  { key: 'CubicMile', label: 'Cubic Mile (mi³)', conversionRate: 4168181825.4 },
  { key: 'AcreFoot', label: 'Acre-Foot', conversionRate: 1233.48 },
  { key: 'BoardFoot', label: 'Board Foot', conversionRate: 2.35974e-3 },
  { key: 'Minim', label: 'Minim (min)', conversionRate: 6.16115e-8 },
  { key: 'Cord', label: 'Cord', conversionRate: 3.62456 },
  { key: 'Firkin', label: 'Firkin', conversionRate: 0.0409148 },
  { key: 'Hogshead', label: 'Hogshead', conversionRate: 0.238481 },
  { key: 'Jigger', label: 'Jigger', conversionRate: 4.4444e-6 },
  { key: 'Last', label: 'Last', conversionRate: 2.90909 },
  { key: 'Microliter', label: 'Microliter (μL)', conversionRate: 1e-9 },
  { key: 'Nanoliter', label: 'Nanoliter (nL)', conversionRate: 1e-12 },
  { key: 'Picoliter', label: 'Picoliter (pL)', conversionRate: 1e-15 },
  { key: 'Femtoliter', label: 'Femtoliter (fL)', conversionRate: 1e-18 },
  { key: 'Attoliter', label: 'Attoliter (aL)', conversionRate: 1e-21 },
  { key: 'Barrel', label: 'Barrel (bbl)', conversionRate: 0.158987 },
  { key: 'Cup', label: 'Cup (c)', conversionRate: 0.000236588 },
  { key: 'Drop', label: 'Drop (gtt)', conversionRate: 4.92892e-8 },
  { key: 'Peck', label: 'Peck (pk)', conversionRate: 0.00880977 },
  { key: 'Bushel', label: 'Bushel (bu)', conversionRate: 0.0352391 },
  { key: 'Decaliter', label: 'Decaliter (daL)', conversionRate: 0.1 },
  { key: 'PicacreFoot', label: 'Picacre Foot (picac ft)', conversionRate: 4.46489e-10 },
  { key: 'Fluidram', label: 'Fluidram (fl dr)', conversionRate: 3.69669e-6 },
  { key: 'Stere', label: 'Stere (st)', conversionRate: 1 },
  { key: 'Kiloliter', label: 'Kiloliter (kL)', conversionRate: 1 },
  { key: 'Deciliter', label: 'Deciliter (dL)', conversionRate: 0.001 },
  { key: 'Centiliter', label: 'Centiliter (cL)', conversionRate: 1e-4 },
  { key: 'Micromicroliter', label: 'Micromicroliter (μμL)', conversionRate: 1e-12 },
  ]);

popularUnits = Object.freeze([
  { route: 'CubicCentimeter-CubicMeter', reverseRoute: 'CubicMeter-CubicCentimeter', labelRoute: 'Cubic Centimeter to Cubic Meter', labelReverseRoute: 'Cubic Meter to Cubic Centimeter' },
  { route: 'CubicMillimeter-CubicCentimeter', reverseRoute: 'CubicCentimeter-CubicMillimeter', labelRoute: 'Cubic Millimeter to Cubic Centimeter', labelReverseRoute: 'Cubic Centimeter to Cubic Millimeter' },
  { route: 'Milliliter-CubicCentimeter', reverseRoute: 'CubicCentimeter-Milliliter', labelRoute: 'Milliliter to Cubic Centimeter', labelReverseRoute: 'Cubic Centimeter to Milliliter' },
  { route: 'Liter-CubicCentimeter', reverseRoute: 'CubicCentimeter-Liter', labelRoute: 'Liter to Cubic Centimeter', labelReverseRoute: 'Cubic Centimeter to Liter' },
  { route: 'Milliliter-Liter', reverseRoute: 'Liter-Milliliter', labelRoute: 'Milliliter to Liter', labelReverseRoute: 'Liter to Milliliter' },
  { route: 'Milliliter-CubicMillimeter', reverseRoute: 'CubicMillimeter-Milliliter', labelRoute: 'Milliliter to Cubic Millimeter', labelReverseRoute: 'Cubic Millimeter to Milliliter' },
  { route: 'CubicInch-CubicCentimeter', reverseRoute: 'CubicCentimeter-CubicInch', labelRoute: 'Cubic Inch to Cubic Centimeter', labelReverseRoute: 'Cubic Centimeter to Cubic Inch' },
  { route: 'USGallon-Liter', reverseRoute: 'Liter-USGallon', labelRoute: 'US Gallon to Liter', labelReverseRoute: 'Liter to US Gallon' },
  { route: 'CubicFoot-CubicMeter', reverseRoute: 'CubicMeter-CubicFoot', labelRoute: 'Cubic Foot to Cubic Meter', labelReverseRoute: 'Cubic Meter to Cubic Foot' },
  { route: 'USGallon-CubicMeter', reverseRoute: 'CubicMeter-USGallon', labelRoute: 'US Gallon to Cubic Meter', labelReverseRoute: 'Cubic Meter to US Gallon' },
  { route: 'ImperialGallon-Liter', reverseRoute: 'Liter-ImperialGallon', labelRoute: 'Imperial Gallon to Liter', labelReverseRoute: 'Liter to Imperial Gallon' },
  { route: 'CubicInch-CubicMillimeter', reverseRoute: 'CubicMillimeter-CubicInch', labelRoute: 'Cubic Inch to Cubic Millimeter', labelReverseRoute: 'Cubic Millimeter to Cubic Inch' },
  { route: 'CubicInch-Liter', reverseRoute: 'Liter-CubicInch', labelRoute: 'Cubic Inch to Liter', labelReverseRoute: 'Liter to Cubic Inch' },
  { route: 'USQuart-CubicMeter', reverseRoute: 'CubicMeter-USQuart', labelRoute: 'US Quart to Cubic Meter', labelReverseRoute: 'Cubic Meter to US Quart' },
  { route: 'USQuart-Liter', reverseRoute: 'Liter-USQuart', labelRoute: 'US Quart to Liter', labelReverseRoute: 'Liter to US Quart' },
  { route: 'USPint-CubicMeter', reverseRoute: 'CubicMeter-USPint', labelRoute: 'US Pint to Cubic Meter', labelReverseRoute: 'Cubic Meter to US Pint' },
  { route: 'CubicInch-Milliliter', reverseRoute: 'Milliliter-CubicInch', labelRoute: 'Cubic Inch to Milliliter', labelReverseRoute: 'Milliliter to Cubic Inch' },
  { route: 'USFluidOunce-Milliliter', reverseRoute: 'Milliliter-USFluidOunce', labelRoute: 'US Fluid Ounce to Milliliter', labelReverseRoute: 'Milliliter to US Fluid Ounce' },
  { route: 'CubicFoot-CubicInch', reverseRoute: 'CubicInch-CubicFoot', labelRoute: 'Cubic Foot to Cubic Inch', labelReverseRoute: 'Cubic Inch to Cubic Foot' },
  { route: 'USFluidOunce-Liter', reverseRoute: 'Liter-USFluidOunce', labelRoute: 'US Fluid Ounce to Liter', labelReverseRoute: 'Liter to US Fluid Ounce' }
]);

pairsWithKg = this.units
.filter(unit => unit.key !== 'CubicMeter') 
.map(unit => ({
  route: `${unit.key}-CubicMeter`,
  reverseRoute: `CubicMeter-${unit.key}`,
  labelRoute: `${unit.label} to Cubic Meter`,
  labelReverseRoute: `Cubic Meter to ${unit.label}`,
  label: `1 ${unit.label} = ${unit.conversionRate} cubic meter`,
}));

  constructor() {    
  }


  getConversionRate(fromUnit:string, toUnit:string) {
    const fromUnitData = this.units.find(unit => unit.key === fromUnit);
    const toUnitData = this.units.find(unit => unit.key === toUnit);

    if (!fromUnitData || !toUnitData) {
      throw new Error("Invalid length units provided.");
    }
    const rate1 = new Decimal(toUnitData.conversionRate);
    const rate2 = new Decimal(fromUnitData.conversionRate);
    return rate2.div(rate1).toNumber()
  }


}