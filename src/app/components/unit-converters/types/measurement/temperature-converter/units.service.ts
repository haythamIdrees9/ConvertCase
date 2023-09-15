import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

type unit =  { key: string; label: string;abbreviation:string; convertToCelsius: (key: any) => any;convertFromCelsius:(key: any) => any }
@Injectable()
export class UnitsService {
  
  units: readonly unit [] = Object.freeze([
    {key: "celsius",abbreviation: "c" ,label: "Celsius",convertToCelsius: (value) => new Decimal(value),convertFromCelsius: (celsius) => new Decimal(celsius),},
    {key: "fahrenheit",abbreviation:"f",label: "Fahrenheit",convertToCelsius: (fahrenheit) => new Decimal(fahrenheit).minus(32).times(5).div(9),convertFromCelsius: (celsius) => new Decimal(celsius).times(9).div(5).plus(32),},
    {key: "kelvin",abbreviation:"k",label: "Kelvin",convertToCelsius: (kelvin) => new Decimal(kelvin).minus(273.15),convertFromCelsius: (celsius) => new Decimal(celsius).plus(273.15),},
    {key: "rankine",abbreviation:"r",label: "Rankine",convertToCelsius: (rankine) => new Decimal(rankine).minus(491.67).times(5).div(9),convertFromCelsius: (celsius) => new Decimal(celsius).times(9).div(5).plus(491.67),},
    {key: "reaumur",abbreviation:"re",label: "Réaumur",convertToCelsius: (reaumur) => new Decimal(reaumur).times(5).div(4),convertFromCelsius: (celsius) => new Decimal(celsius).times(4).div(5),},
    {key: "romer",abbreviation:"ro",label: "Rømer",convertToCelsius: (romer) => new Decimal(romer).minus(7.5).times(40).div(21),convertFromCelsius: (celsius) => new Decimal(celsius).times(21).div(40).plus(7.5),},
    {key: "delisle",abbreviation:"de",label: "Delisle",convertToCelsius: (delisle) => new Decimal(100).minus(delisle).times(2).div(3),convertFromCelsius: (celsius) => new Decimal(100).minus(celsius).times(3).div(2),},
    {key: "newton",abbreviation:"n",label: "Newton",convertToCelsius: (newton) => new Decimal(newton).times(100).div(33),convertFromCelsius: (celsius) => new Decimal(celsius).times(33).div(100),},
    {key: "centigrade",abbreviation:"c",label: "Centigrade",convertToCelsius: (centigrade) => new Decimal(centigrade),convertFromCelsius: (celsius) => new Decimal(celsius),},
    {key: "gas-mark",abbreviation:"gas mark",label: "Gas Mark",convertToCelsius: (gasMark) => new Decimal(gasMark).minus(1).times(25).plus(150),convertFromCelsius: (celsius) => new Decimal(celsius).minus(150).div(25).plus(1),},
    {key: "planck-temperature",abbreviation:"planck temperature",label: "Planck Temperature",convertToCelsius: (planck) => new Decimal(planck).times('1.41680833e+32'),convertFromCelsius: (celsius) => new Decimal(celsius).div('1.41680833e+32'),},
  ]

);

popularUnits = Object.freeze([
    {route: 'celsius-to-fahrenheit',reverseRoute: 'fahrenheit-to-celsius',labelRoute: 'Celsius to Fahrenheit',labelReverseRoute: 'Fahrenheit to Celsius', },
    {route: 'celsius-to-kelvin',reverseRoute: 'kelvin-to-celsius',labelRoute: 'Celsius to Kelvin',labelReverseRoute: 'Kelvin to Celsius', },
    {route: 'celsius-to-rankine',reverseRoute: 'rankine-to-celsius',labelRoute: 'Celsius to Rankine',labelReverseRoute: 'Rankine to Celsius', },
    {route: 'celsius-to-reaumur',reverseRoute: 'reaumur-to-celsius',labelRoute: 'Celsius to Réaumur',labelReverseRoute: 'Réaumur to Celsius', },
    {route: 'celsius-to-romer',reverseRoute: 'romer-to-celsius',labelRoute: 'Celsius to Rømer',labelReverseRoute: 'Rømer to Celsius', },
    {route: 'celsius-to-delisle',reverseRoute: 'delisle-to-celsius',labelRoute: 'Celsius to Delisle',labelReverseRoute: 'Delisle to Celsius', },
    {route: 'celsius-to-newton',reverseRoute: 'newton-to-celsius',labelRoute: 'Celsius to Newton',labelReverseRoute: 'Newton to Celsius', },
    {route: 'celsius-to-centigrade',reverseRoute: 'centigrade-to-celsius',labelRoute: 'Celsius to Centigrade',labelReverseRoute: 'Centigrade to Celsius', },
    {route: 'celsius-to-gas-mark',reverseRoute: 'gas-mark-to-celsius',labelRoute: 'Celsius to Gas Mark',labelReverseRoute: 'Gas Mark to Celsius', },
    {route: 'celsius-to-planck-temperature',reverseRoute: 'planck-temperature-to-celsius',labelRoute: 'Celsius to Planck Temperature',labelReverseRoute: 'Planck Temperature to Celsius', },
    {route: 'fahrenheit-to-kelvin',reverseRoute: 'kelvin-to-fahrenheit',labelRoute: 'Fahrenheit to Kelvin',labelReverseRoute: 'Kelvin to Fahrenheit', },
    {route: 'fahrenheit-to-rankine',reverseRoute: 'rankine-to-fahrenheit',labelRoute: 'Fahrenheit to Rankine',labelReverseRoute: 'Rankine to Fahrenheit', },
    {route: 'fahrenheit-to-reaumur',reverseRoute: 'reaumur-to-fahrenheit',labelRoute: 'Fahrenheit to Réaumur',labelReverseRoute: 'Réaumur to Fahrenheit', },
    {route: 'fahrenheit-to-romer',reverseRoute: 'romer-to-fahrenheit',labelRoute: 'Fahrenheit to Rømer',labelReverseRoute: 'Rømer to Fahrenheit', },
    {route: 'fahrenheit-to-delisle',reverseRoute: 'delisle-to-fahrenheit',labelRoute: 'Fahrenheit to Delisle',labelReverseRoute: 'Delisle to Fahrenheit', },
    {route: 'fahrenheit-to-newton',reverseRoute: 'newton-to-fahrenheit',labelRoute: 'Fahrenheit to Newton',labelReverseRoute: 'Newton to Fahrenheit', },
    {route: 'fahrenheit-to-centigrade',reverseRoute: 'centigrade-to-fahrenheit',labelRoute: 'Fahrenheit to Centigrade',labelReverseRoute: 'Centigrade to Fahrenheit', },
    {route: 'fahrenheit-to-gas-mark',reverseRoute: 'gas-mark-to-fahrenheit',labelRoute: 'Fahrenheit to Gas Mark',labelReverseRoute: 'Gas Mark to Fahrenheit', },
    {route: 'fahrenheit-to-planck-temperature',reverseRoute: 'planck-temperature-to-fahrenheit',labelRoute: 'Fahrenheit to Planck Temperature',labelReverseRoute: 'Planck Temperature to Fahrenheit', },
    {route: 'kelvin-to-rankine',reverseRoute: 'rankine-to-kelvin',labelRoute: 'Kelvin to Rankine',labelReverseRoute: 'Rankine to Kelvin', },
  
]);


  constructor() {    
  }


  

  getConversionRate(fromUnitKey:string, toUnitKey:string) {
    const fromUnit = this.units.find(unit => unit.key === fromUnitKey);
    const toUnit = this.units.find(unit => unit.key === toUnitKey);
  
    if (!fromUnit || !toUnit) {
      throw new Error('Invalid units Provided.');
    }
    return [fromUnit,toUnit]
  }
}