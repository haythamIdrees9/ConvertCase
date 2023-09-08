import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number,abbreviation?:string}[] = Object.freeze([
    {key: "joule",label: "Joule",conversionRate: 1,abbreviation: "J"},
    {key: "calorie",label: "Calorie",conversionRate: 4.184,abbreviation: "cal"},
    {key: "kilojoule",label: "Kilojoule",conversionRate: 1000,abbreviation: "kJ"},
    {key: "electron-volt",label: "Electron Volt",conversionRate: 1.60218e-19,abbreviation: "eV"},
    {key: "watt-hour",label: "Watt Hour",conversionRate: 3600,abbreviation: "Wh"},
    {key: "kcal",label: "Kilocalorie",conversionRate: 4184,abbreviation: "kcal"},
    {key: "megajoule",label: "Megajoule",conversionRate: 1000000,abbreviation: "MJ"},
    {key: "erg",label: "Erg",conversionRate: 1e-7,abbreviation: "erg"},
    {key: "british-thermal-unit",label: "British Thermal Unit",conversionRate: 1055.06,abbreviation: "BTU"},
    {key: "foot-pound",label: "Foot Pound",conversionRate: 1.35582,abbreviation: "ft-lb"},
    {key: "therm",label: "Therm",conversionRate: 105480400,abbreviation: "therm"},
    {key: "quad",label: "Quad",conversionRate: 1055000000000000000,abbreviation: "quad"},
    {key: "btu-it",label: "BTU (International Table)",conversionRate: 1055.06,abbreviation: "BTU (IT)"},
    {key: "btu-th",label: "BTU (Thermochemical)",conversionRate: 1054.84,abbreviation: "BTU (th)"},
    {key: "kilowatt-hour",label: "Kilowatt Hour",conversionRate: 3600000,abbreviation: "kWh"},
    {key: "gigajoule",label: "Gigajoule",conversionRate: 1000000000,abbreviation: "GJ"},
    {key: "cal-th",label: "Calorie (Thermochemical)",conversionRate: 4.184,abbreviation: "cal (th)"},
    {key: "cal-it",label: "Calorie (International Table)",conversionRate: 4.1868,abbreviation: "cal (it)"},
    {key: "thermie",label: "Thermie",conversionRate: 41868000,abbreviation: "th"},
    {key: "ton-of-coal-equivalent",label: "Ton of Coal Equivalent",conversionRate: 29307600000,abbreviation: "TCE"},
    {key: "ton-of-oil-equivalent",label: "Ton of Oil Equivalent",conversionRate: 41868000000,abbreviation: "TOE"},
    {key: "ton-of-tnt",label: "Ton of TNT Equivalent",conversionRate: 4184000000,abbreviation: "ton of TNT"},
    {key: "exajoule",label: "Exajoule",conversionRate: 1000000000000000000,abbreviation: "EJ"},
    {key: "petajoule",label: "Petajoule",conversionRate: 1000000000000000,abbreviation: "PJ"},
    {key: "terajoule",label: "Terajoule",conversionRate: 1000000000000,abbreviation: "TJ"},
    {key: "calorie-mean",label: "Calorie (Mean)",conversionRate: 4.19002,abbreviation: "cal (mean)"},
    {key: "calorie-15-degree-celsius",label: "Calorie (15°C)",conversionRate: 4.1855,abbreviation: "cal (15°C)"},
    {key: "calorie-20-degree-celsius",label: "Calorie (20°C)",conversionRate: 4.1819,abbreviation: "cal (20°C)"},
    {key: "calorie-thermochemical-33-degree-fahrenheit",label: "Calorie (Thermochemical, 33°F)",conversionRate: 4.184,abbreviation: "cal (th) (33°F)"},
    {key: "calorie-thermochemical-39-degree-fahrenheit",label: "Calorie (Thermochemical, 39°F)",conversionRate: 4.1855,abbreviation: "cal (th) (39°F)"},
    {key: "calorie-thermochemical",label: "Calorie (Thermochemical)",conversionRate: 4.184,abbreviation: "cal (th)"},
    {key: "therm-us",label: "Therm (US)",conversionRate: 105480400,abbreviation: "therm (US)"},
    {key: "teraelectron-volt",label: "Teraelectron Volt",conversionRate: 1.60218e-7,abbreviation: "TeV"},
    {key: "gigaelectron-volt",label: "Gigaelectron Volt",conversionRate: 1.60218e-10,abbreviation: "GeV"},
    {key: "megaelectron-volt",label: "Megaelectron Volt",conversionRate: 1.60218e-13,abbreviation: "MeV"},
    {key: "kilolectron-volt",label: "Kiloelectron Volt",conversionRate: 1.60218e-16},
    {key: "erg-calorie",label: "Erg to Calorie",conversionRate: 1.00042e-7,abbreviation: "erg/cal"},
    {key: "erg-kilojoule",label: "Erg to Kilojoule",conversionRate: 1e-10,abbreviation: "erg/kJ"},
    {key: "erg-kilocalorie",label: "Erg to Kilocalorie",conversionRate: 2.38846e-11,abbreviation: "erg/kcal"},
    {key: "erg-btu",label: "Erg to BTU",conversionRate: 9.4782e-11,abbreviation: "erg/BTU"},
    {key: "erg-watt-hour",label: "Erg to Watt Hour",conversionRate: 2.77778e-14,abbreviation: "erg/Wh"},
    {key: "erg-foot-pound",label: "Erg to Foot Pound",conversionRate: 7.37562e-8,abbreviation: "erg/ft-lb"
    }
]);

  popularUnits = Object.freeze([
    { route: "joule-to-calorie", reverseRoute: "calorie-to-joule", labelRoute: "Joule to Calorie", labelReverseRoute: "Calorie to Joule" },
    { route: "joule-to-kilojoule", reverseRoute: "kilojoule-to-joule", labelRoute: "Joule to Kilojoule", labelReverseRoute: "Kilojoule to Joule" },
    { route: "joule-to-electron-volt", reverseRoute: "electron-volt-to-joule", labelRoute: "Joule to Electron Volt", labelReverseRoute: "Electron Volt to Joule" },
    { route: "joule-to-watt-hour", reverseRoute: "watt-hour-to-joule", labelRoute: "Joule to Watt Hour", labelReverseRoute: "Watt Hour to Joule" },
    { route: "joule-to-kcal", reverseRoute: "kcal-to-joule", labelRoute: "Joule to Kilocalorie", labelReverseRoute: "Kilocalorie to Joule" },
    { route: "joule-to-megajoule", reverseRoute: "megajoule-to-joule", labelRoute: "Joule to Megajoule", labelReverseRoute: "Megajoule to Joule" },
    { route: "calorie-to-kilojoule", reverseRoute: "kilojoule-to-calorie", labelRoute: "Calorie to Kilojoule", labelReverseRoute: "Kilojoule to Calorie" },
    { route: "calorie-to-electron-volt", reverseRoute: "electron-volt-to-calorie", labelRoute: "Calorie to Electron Volt", labelReverseRoute: "Electron Volt to Calorie" },
    { route: "calorie-to-watt-hour", reverseRoute: "watt-hour-to-calorie", labelRoute: "Calorie to Watt Hour", labelReverseRoute: "Watt Hour to Calorie" },
    { route: "calorie-to-kcal", reverseRoute: "kcal-to-calorie", labelRoute: "Calorie to Kilocalorie", labelReverseRoute: "Kilocalorie to Calorie" },
    { route: "kilojoule-to-electron-volt", reverseRoute: "electron-volt-to-kilojoule", labelRoute: "Kilojoule to Electron Volt", labelReverseRoute: "Electron Volt to Kilojoule" },
    { route: "kilojoule-to-watt-hour", reverseRoute: "watt-hour-to-kilojoule", labelRoute: "Kilojoule to Watt Hour", labelReverseRoute: "Watt Hour to Kilojoule" },
    { route: "kilojoule-to-kcal", reverseRoute: "kcal-to-kilojoule", labelRoute: "Kilojoule to Kilocalorie", labelReverseRoute: "Kilocalorie to Kilojoule" },
    { route: "kilojoule-to-megajoule", reverseRoute: "megajoule-to-kilojoule", labelRoute: "Kilojoule to Megajoule", labelReverseRoute: "Megajoule to Kilojoule" },
    { route: "electron-volt-to-watt-hour", reverseRoute: "watt-hour-to-electron-volt", labelRoute: "Electron Volt to Watt Hour", labelReverseRoute: "Watt Hour to Electron Volt" },
    { route: "electron-volt-to-kcal", reverseRoute: "kcal-to-electron-volt", labelRoute: "Electron Volt to Kilocalorie", labelReverseRoute: "Kilocalorie to Electron Volt" },
    { route: "watt-hour-to-kcal", reverseRoute: "kcal-to-watt-hour", labelRoute: "Watt Hour to Kilocalorie", labelReverseRoute: "Kilocalorie to Watt Hour" },
    { route: "watt-hour-to-megajoule", reverseRoute: "megajoule-to-watt-hour", labelRoute: "Watt Hour to Megajoule", labelReverseRoute: "Megajoule to Watt Hour" },
    { route: "watt-hour-to-gigajoule", reverseRoute: "gigajoule-to-watt-hour", labelRoute: "Watt Hour to Gigajoule", labelReverseRoute: "Gigajoule to Watt Hour" },
    { route: "watt-hour-to-cal-th", reverseRoute: "cal-th-to-watt-hour", labelRoute: "Watt Hour to Calorie (Thermochemical)", labelReverseRoute: "Calorie (Thermochemical) to Watt Hour" }
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