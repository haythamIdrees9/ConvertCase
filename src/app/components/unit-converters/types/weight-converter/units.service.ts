import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number }[] = Object.freeze([
    { key: 'kilogram', label: 'kilogram [kg]', conversionRate: 1 },
    { key: 'gram', label: 'gram [g]', conversionRate: 0.001 },
    { key: 'milligram', label: 'milligram [mg]', conversionRate: 0.000001 },
    { key: 'ton_metric', label: 'ton (metric) [t]', conversionRate: 1000 },
    { key: 'pound', label: 'pound [lbs]', conversionRate: 0.453592 },
    { key: 'ounce', label: 'ounce [oz]', conversionRate: 0.0283495 },
    { key: 'carat', label: 'carat [car, ct]', conversionRate: 0.0002 },
    { key: 'ton_us_short', label: 'ton (short) [ton (US)]', conversionRate: 907.185 },
    { key: 'ton_uk_long', label: 'ton (long) [ton (UK)]', conversionRate: 1016.05 },
    { key: 'dram', label: 'dram [dr]', conversionRate: 0.00177185 },
    { key: 'atomic_mass_unit', label: 'Atomic mass unit [u]', conversionRate: 1.66053906660e-27 },
    { key: 'short_ton_us', label: 'short ton (US) [ton (US)]', conversionRate: 907.185 },
    { key: 'long_ton_uk', label: 'long ton (UK) [ton (UK)]', conversionRate: 1016.05 },
    { key: 'exagram', label: 'exagram [Eg]', conversionRate: 1e18 },
    { key: 'petagram', label: 'petagram [Pg]', conversionRate: 1e15 },
    { key: 'teragram', label: 'teragram [Tg]', conversionRate: 1e12 },
    { key: 'gigagram', label: 'gigagram [Gg]', conversionRate: 1e9 },
    { key: 'megagram', label: 'megagram [Mg]', conversionRate: 1e6 },
    { key: 'hectogram', label: 'hectogram [hg]', conversionRate: 100 },
    { key: 'dekagram', label: 'dekagram [dag]', conversionRate: 10 },
    { key: 'decigram', label: 'decigram [dg]', conversionRate: 0.1 },
    { key: 'centigram', label: 'centigram [cg]', conversionRate: 0.01 },
    { key: 'carrat', label: 'carrat [ct]', conversionRate: 0.0002 },
    { key: 'microgram', label: 'microgram [µg]', conversionRate: 0.000001 },
    { key: 'nanogram', label: 'nanogram [ng]', conversionRate: 1e-9 },
    { key: 'picogram', label: 'picogram [pg]', conversionRate: 1e-12 },
    { key: 'femtogram', label: 'femtogram [fg]', conversionRate: 1e-15 },
    { key: 'attogram', label: 'attogram [ag]', conversionRate: 1e-18 },
    { key: 'dalton', label: 'Dalton', conversionRate: 1.66053906660e-27 },
    { key: 'kilopound', label: 'kilopound [kip]', conversionRate: 453.592 },
    { key: 'slug', label: 'slug', conversionRate: 14.5939 },
    { key: 'pound_force_square_second_per_foot', label: 'pound-force square second/foot', conversionRate: 47.8803 },
    { key: 'pound_troy_or_apothecary', label: 'pound (troy or apothecary)', conversionRate: 0.373242 },
    { key: 'poundal', label: 'poundal [pdl]', conversionRate: 0.138255 },
    { key: 'ton_assay_us', label: 'ton (assay) (US)', conversionRate: 29.1667 },
    { key: 'ton_assay_uk', label: 'ton (assay) (UK)', conversionRate: 32.6667 },
    { key: 'kiloton_metric', label: 'kiloton (metric)', conversionRate: 1e6 },
    { key: 'quintal_metric', label: 'quintal (metric)', conversionRate: 100 },
    { key: 'hundredweight_us', label: 'hundred weight (US)', conversionRate: 45359.2 },
    { key: 'hundredweight_uk', label: 'hundred weight (UK)', conversionRate: 50802.3 },
    { key: 'quarter_us', label: 'quarter (US) [qr (US)]', conversionRate: 2268 },
    { key: 'quarter_uk', label: 'quarter (UK) [qr (UK)]', conversionRate: 2540 },
    { key: 'stone_us', label: 'stone (US)', conversionRate: 6350.29 },
    { key: 'stone_uk', label: 'stone (UK)', conversionRate: 6350.29 },
    { key: 'tonne', label: 'tonne [t]', conversionRate: 1000 },
    { key: 'pennyweight', label: 'penny weight [pwt]', conversionRate: 0.00155517 },
    { key: 'scruple_apothecary', label: 'scruple (apothecary) [s.ap]', conversionRate: 0.00388793 },
    { key: 'grain', label: 'grain [gr]', conversionRate: 0.00006479891 },
    { key: 'gamma', label: 'Gamma', conversionRate: 1e-9 },
    { key: 'electron_mass_rest', label: 'Electron mass (rest)', conversionRate: 9.10938356e-31 },
    { key: 'muon_mass', label: 'Muon mass', conversionRate: 1.883531627e-28 },
    { key: 'proton_mass', label: 'Proton mass', conversionRate: 1.67262192369e-27 },
    { key: 'neutron_mass', label: 'Neutron mass', conversionRate: 1.67492749804e-27 },
    { key: 'deuteron_mass', label: 'Deuteron mass', conversionRate: 3.343583719e-27 },
    { key: 'earths_mass', label: "Earth's mass", conversionRate: 5.97237e24 },
    { key: 'moon_mass', label: "Moon's mass", conversionRate: 7.342e22 },
    { key: 'mars_mass', label: "Mars's mass", conversionRate: 6.4171e23 },
    { key: 'suns_mass', label: "Sun's mass", conversionRate: 1.9885e30 },
]
);

popularUnits = Object.freeze([
  { route: 'gram-to-kilogram', reverseRoute: 'kilogram-to-gram', labelRoute: 'gram [g] to Kilogram', labelReverseRoute: 'Kilogram to gram [g]', },
  { route: 'milligram-to-kilogram', reverseRoute: 'kilogram-to-milligram', labelRoute: 'milligram [mg] to Kilogram', labelReverseRoute: 'Kilogram to milligram [mg]', },
  { route: 'ton_metric-to-kilogram', reverseRoute: 'kilogram-to-ton_metric', labelRoute: 'ton (metric) [t] to Kilogram', labelReverseRoute: 'Kilogram to ton (metric) [t]', },
  { route: 'pound-to-kilogram', reverseRoute: 'kilogram-to-pound', labelRoute: 'pound [lbs] to Kilogram', labelReverseRoute: 'Kilogram to pound [lbs]', },
  { route: 'ounce-to-kilogram', reverseRoute: 'kilogram-to-ounce', labelRoute: 'ounce [oz] to Kilogram', labelReverseRoute: 'Kilogram to ounce [oz]', },
  { route: 'carat-to-kilogram', reverseRoute: 'kilogram-to-carat', labelRoute: 'carat [car, ct] to Kilogram', labelReverseRoute: 'Kilogram to carat [car, ct]', },
  { route: 'ton_us_short-to-kilogram', reverseRoute: 'kilogram-to-ton_us_short', labelRoute: 'ton (short) [ton (US)] to Kilogram', labelReverseRoute: 'Kilogram to ton (short) [ton (US)]', },
  { route: 'ton_uk_long-to-kilogram', reverseRoute: 'kilogram-to-ton_uk_long', labelRoute: 'ton (long) [ton (UK)] to Kilogram', labelReverseRoute: 'Kilogram to ton (long) [ton (UK)]', },
  { route: 'atomic_mass_unit-to-kilogram', reverseRoute: 'kilogram-to-atomic_mass_unit', labelRoute: 'Atomic mass unit [u] to Kilogram', labelReverseRoute: 'Kilogram to Atomic mass unit [u]', },
  { route: 'exagram-to-kilogram', reverseRoute: 'kilogram-to-exagram', labelRoute: 'exagram [Eg] to Kilogram', labelReverseRoute: 'Kilogram to exagram [Eg]', },
  { route: 'petagram-to-kilogram', reverseRoute: 'kilogram-to-petagram', labelRoute: 'petagram [Pg] to Kilogram', labelReverseRoute: 'Kilogram to petagram [Pg]', },
  { route: 'teragram-to-kilogram', reverseRoute: 'kilogram-to-teragram', labelRoute: 'teragram [Tg] to Kilogram', labelReverseRoute: 'Kilogram to teragram [Tg]', },
  { route: 'gigagram-to-kilogram', reverseRoute: 'kilogram-to-gigagram', labelRoute: 'gigagram [Gg] to Kilogram', labelReverseRoute: 'Kilogram to gigagram [Gg]', },
  { route: 'megagram-to-kilogram', reverseRoute: 'kilogram-to-megagram', labelRoute: 'megagram [Mg] to Kilogram', labelReverseRoute: 'Kilogram to megagram [Mg]', },
  { route: 'hectogram-to-kilogram', reverseRoute: 'kilogram-to-hectogram', labelRoute: 'hectogram [hg] to Kilogram', labelReverseRoute: 'Kilogram to hectogram [hg]', },
  { route: 'dekagram-to-kilogram', reverseRoute: 'kilogram-to-dekagram', labelRoute: 'dekagram [dag] to Kilogram', labelReverseRoute: 'Kilogram to dekagram [dag]', },
  { route: 'decigram-to-kilogram', reverseRoute: 'kilogram-to-decigram', labelRoute: 'decigram [dg] to Kilogram', labelReverseRoute: 'Kilogram to decigram [dg]', },
  { route: 'centigram-to-kilogram', reverseRoute: 'kilogram-to-centigram', labelRoute: 'centigram [cg] to Kilogram', labelReverseRoute: 'Kilogram to centigram [cg]', },
  { route: 'microgram-to-kilogram', reverseRoute: 'kilogram-to-microgram', labelRoute: 'microgram [µg] to Kilogram', labelReverseRoute: 'Kilogram to microgram [µg]', },
  { route: 'nanogram-to-kilogram', reverseRoute: 'kilogram-to-nanogram', labelRoute: 'nanogram [ng] to Kilogram', labelReverseRoute: 'Kilogram to nanogram [ng]', },
]);


  constructor() {    
  }


  getUnits(key:string){
    return this.units.find(unit => unit.key === key);
  }

  getConversionRate(fromUnit:string, toUnit:string) {
    const fromUnitData = this.units.find(unit => unit.key === fromUnit);
    const toUnitData = this.units.find(unit => unit.key === toUnit);

    if (!fromUnitData || !toUnitData) {
      throw new Error("Invalid length units provided.");
    }
    return this.calculateConversionRate(toUnitData.conversionRate,fromUnitData.conversionRate)
  }

  calculateConversionRate(conversionRate1:number,conversionRate2:number){
    const rate1 = new Decimal(conversionRate1);
    const rate2 = new Decimal(conversionRate2);
    return rate2.div(rate1).toNumber()
  }


}