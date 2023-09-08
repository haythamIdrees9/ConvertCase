import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number,abbreviation?:string }[] = Object.freeze([
    {key: "kilogram",label: "kilogram [kg]",conversionRate: 1,abbreviation: "kg"},
    {key: "gram",label: "gram [g]",conversionRate: 0.001,abbreviation: "g"},
    {key: "milligram",label: "milligram [mg]",conversionRate: 0.000001,abbreviation: "mg"},
    {key: "ton-metric",label: "ton (metric) [t]",conversionRate: 1000,abbreviation: "ton"},
    {key: "pound",label: "pound [lbs]",conversionRate: 0.453592,abbreviation: "lb"},
    {key: "ounce",label: "ounce [oz]",conversionRate: 0.0283495,abbreviation: "oz"},
    {key: "carat",label: "carat [car, ct]",conversionRate: 0.0002,abbreviation: "ct"},
    {key: "ton-us-short",label: "ton (short) [ton (US)]",conversionRate: 907.185,abbreviation: "ton (US)"},
    {key: "ton-uk-long",label: "ton (long) [ton (UK)]",conversionRate: 1016.05,abbreviation: "ton (UK)"},
    {key: "dram",label: "dram [dr]",conversionRate: 0.00177185,abbreviation: "dram"},
    {key: "atomic-mass-unit",label: "Atomic mass unit [u]",conversionRate: 1.6605390666e-27,abbreviation: "u"},
    {key: "short-ton-us",label: "short ton (US) [ton (US)]",conversionRate: 907.185,abbreviation: "short ton (US)"},
    {key: "long-ton-uk",label: "long ton (UK) [ton (UK)]",conversionRate: 1016.05,abbreviation: "long ton (UK)"},
    {key: "exagram",label: "exagram [Eg]",conversionRate: 1000000000000000000,abbreviation: "Eg"},
    {key: "petagram",label: "petagram [Pg]",conversionRate: 1000000000000000,abbreviation: "Pg"},
    {key: "teragram",label: "teragram [Tg]",conversionRate: 1000000000000,abbreviation: "Tg"},
    {key: "gigagram",label: "gigagram [Gg]",conversionRate: 1000000000,abbreviation: "Gg"},
    {key: "megagram",label: "megagram [Mg]",conversionRate: 1000000,abbreviation: "Mg"},
    {key: "hectogram",label: "hectogram [hg]",conversionRate: 100,abbreviation: "hg"},
    {key: "dekagram",label: "dekagram [dag]",conversionRate: 10,abbreviation: "dag"},
    {key: "decigram",label: "decigram [dg]",conversionRate: 0.1,abbreviation: "dg"},
    {key: "centigram",label: "centigram [cg]",conversionRate: 0.01,abbreviation: "cg"},
    {key: "carrat",label: "carrat [ct]",conversionRate: 0.0002,abbreviation: "ct"},
    {key: "microgram",label: "microgram [µg]",conversionRate: 0.000001,abbreviation: "µg"},
    {key: "nanogram",label: "nanogram [ng]",conversionRate: 1e-9,abbreviation: "ng"},
    {key: "picogram",label: "picogram [pg]",conversionRate: 1e-12,abbreviation: "pg"},
    {key: "femtogram",label: "femtogram [fg]",conversionRate: 1e-15,abbreviation: "fg"},
    {key: "attogram",label: "attogram [ag]",conversionRate: 1e-18,abbreviation: "ag"},
    {key: "dalton",label: "Dalton",conversionRate: 1.6605390666e-27,abbreviation: "Da"},
    {key: "kilopound",label: "kilopound [kip]",conversionRate: 453.592,abbreviation: "kips"},
    {key: "slug",label: "slug",conversionRate: 14.5939,abbreviation: "slug"},
    {key: "pound-force-square-second-per-foot",label: "pound-force square second/foot",conversionRate: 47.8803,abbreviation: "lb-ft/s²"},
    {key: "pound-troy-or-apothecary",label: "pound (troy or apothecary)",conversionRate: 0.373242,abbreviation: "lb (troy/apothecary)"},
    {key: "poundal",label: "poundal [pdl]",conversionRate: 0.138255,abbreviation: "pdl"},
    {key: "ton-assay-us",label: "ton (assay) (US)",conversionRate: 29.1667,abbreviation: "ton assay (US)"},
    {key: "ton-assay-uk",label: "ton (assay) (UK)",conversionRate: 32.6667,abbreviation: "ton assay (UK)"},
    {key: "kiloton-metric",label: "kiloton (metric)",conversionRate: 1000000,abbreviation: "kiloton"},
    {key: "quintal-metric",label: "quintal (metric)",conversionRate: 100,abbreviation: "quintal"},
    {key: "hundredweight-us",label: "hundred weight (US)",conversionRate: 45359.2,abbreviation: "hundredweight (US)"},
    {key: "hundredweight-uk",label: "hundred weight (UK)",conversionRate: 50802.3,abbreviation: "hundredweight (UK)"},
    {key: "quarter-us",label: "quarter (US) [qr (US)]",conversionRate: 2268,abbreviation: "quarter (US)"},
    {key: "quarter-uk",label: "quarter (UK) [qr (UK)]",conversionRate: 2540,abbreviation: "quarter (UK)"},
    {key: "stone-us",label: "stone (US)",conversionRate: 6350.29,abbreviation: "stone (US)"},
    {key: "stone-uk",label: "stone (UK)",conversionRate: 6350.29,abbreviation: "stone (UK)"},
    {key: "tonne",label: "tonne [t]",conversionRate: 1000,abbreviation: "t"},
    {key: "pennyweight",label: "penny weight [pwt]",conversionRate: 0.00155517,abbreviation: "dwt"},
    {key: "scruple-apothecary",label: "scruple (apothecary) [s.ap]",conversionRate: 0.00388793,abbreviation: "scruple (apothecary)"},
    {key: "grain",label: "grain [gr]",conversionRate: 0.00006479891,abbreviation: "gr"},
    {key: "gamma",label: "Gamma",conversionRate: 1e-9,abbreviation: "γ"},
    {key: "electron-mass-rest",label: "Electron mass (rest)",conversionRate: 9.10938356e-31,abbreviation: "mₑ"},
    {key: "muon-mass",label: "Muon mass",conversionRate: 1.883531627e-28,abbreviation: "mμ"},
    {key: "proton-mass",label: "Proton mass",conversionRate: 1.67262192369e-27,abbreviation: "mp"},
    {key: "neutron-mass",label: "Neutron mass",conversionRate: 1.67492749804e-27,abbreviation: "mn"},
    {key: "deuteron-mass",label: "Deuteron mass",conversionRate: 3.343583719e-27,abbreviation: "md"},
    {key: "earths-mass",label: "Earth's mass",conversionRate: 5.97237e+24,abbreviation: "earths mass"},
    {key: "moon-mass",label: "Moon's mass",conversionRate: 7.342e+22,abbreviation: "moon mass"},
    {key: "mars-mass",label: "Mars's mass",conversionRate: 6.4171e+23,abbreviation: "mMars"},
    {key: "suns-mass",label: "Sun's mass",conversionRate: 1.9885e+30,abbreviation: "suns mass"
    }
]
);

popularUnits = Object.freeze([
  { route: 'gram-to-kilogram', reverseRoute: 'kilogram-to-gram', labelRoute: 'gram [g] to Kilogram', labelReverseRoute: 'Kilogram to gram [g]', },
  { route: 'milligram-to-kilogram', reverseRoute: 'kilogram-to-milligram', labelRoute: 'milligram [mg] to Kilogram', labelReverseRoute: 'Kilogram to milligram [mg]', },
  { route: 'ton-metric-to-kilogram', reverseRoute: 'kilogram-to-ton-metric', labelRoute: 'ton (metric) [t] to Kilogram', labelReverseRoute: 'Kilogram to ton (metric) [t]', },
  { route: 'pound-to-kilogram', reverseRoute: 'kilogram-to-pound', labelRoute: 'pound [lbs] to Kilogram', labelReverseRoute: 'Kilogram to pound [lbs]', },
  { route: 'ounce-to-kilogram', reverseRoute: 'kilogram-to-ounce', labelRoute: 'ounce [oz] to Kilogram', labelReverseRoute: 'Kilogram to ounce [oz]', },
  { route: 'carat-to-kilogram', reverseRoute: 'kilogram-to-carat', labelRoute: 'carat [car, ct] to Kilogram', labelReverseRoute: 'Kilogram to carat [car, ct]', },
  { route: 'ton-us-short-to-kilogram', reverseRoute: 'kilogram-to-ton-us-short', labelRoute: 'ton (short) [ton (US)] to Kilogram', labelReverseRoute: 'Kilogram to ton (short) [ton (US)]', },
  { route: 'ton-uk-long-to-kilogram', reverseRoute: 'kilogram-to-ton-uk-long', labelRoute: 'ton (long) [ton (UK)] to Kilogram', labelReverseRoute: 'Kilogram to ton (long) [ton (UK)]', },
  { route: 'atomic-mass-unit-to-kilogram', reverseRoute: 'kilogram-to-atomic-mass-unit', labelRoute: 'Atomic mass unit [u] to Kilogram', labelReverseRoute: 'Kilogram to Atomic mass unit [u]', },
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