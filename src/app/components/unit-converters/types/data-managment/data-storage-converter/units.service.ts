import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number,abbreviation:string}[] = Object.freeze([
    {
        "key": "bit",
        "label": "Bit [b]",
        "conversionRate": 1,
        "abbreviation": "bit"
    },
    {
        "key": "nibble",
        "label": "Nibble",
        "conversionRate": 4,
        "abbreviation": "nibble"
    },
    {
        "key": "byte",
        "label": "Byte [B]",
        "conversionRate": 8,
        "abbreviation": "B"
    },
    {
        "key": "character",
        "label": "Character",
        "conversionRate": 8,
        "abbreviation": "char"
    },
    {
        "key": "word",
        "label": "Word",
        "conversionRate": 16,
        "abbreviation": "word"
    },
    {
        "key": "MAPM-word",
        "label": "MAPM-Word",
        "conversionRate": 32,
        "abbreviation": "MAPM-word"
    },
    {
        "key": "quadruple-word",
        "label": "Quadruple Word",
        "conversionRate": 64,
        "abbreviation": "quad-word"
    },
    {
        "key": "block",
        "label": "Block",
        "conversionRate": 512,
        "abbreviation": "block"
    },
    {
        "key": "kilobit",
        "label": "Kilobit [kb]",
        "conversionRate": 1000,
        "abbreviation": "Kb"
    },
    {
        "key": "kilobyte",
        "label": "Kilobyte [kB]",
        "conversionRate": 8000,
        "abbreviation": "KB"
    },
    {
        "key": "kilobyte-10",
        "label": "Kilobyte (10^3 bytes)",
        "conversionRate": 8000,
        "abbreviation": "KB-10"
    },
    {
        "key": "megabit",
        "label": "Megabit [Mb]",
        "conversionRate": 1000000,
        "abbreviation": "Mb"
    },
    {
        "key": "megabyte",
        "label": "Megabyte [MB]",
        "conversionRate": 8000000,
        "abbreviation": "MB"
    },
    {
        "key": "megabyte-10",
        "label": "Megabyte (10^6 bytes)",
        "conversionRate": 8000000,
        "abbreviation": "MB-10"
    },
    {
        "key": "gigabit",
        "label": "Gigabit [Gb]",
        "conversionRate": 1000000000,
        "abbreviation": "Gb"
    },
    {
        "key": "gigabyte",
        "label": "Gigabyte [GB]",
        "conversionRate": 8000000000,
        "abbreviation": "GB"
    },
    {
        "key": "gigabyte-10",
        "label": "Gigabyte (10^9 bytes)",
        "conversionRate": 8000000000,
        "abbreviation": "GB-10"
    },
    {
        "key": "terabit",
        "label": "Terabit [Tb]",
        "conversionRate": 1000000000000,
        "abbreviation": "Tb"
    },
    {
        "key": "terabyte",
        "label": "Terabyte [TB]",
        "conversionRate": 8000000000000,
        "abbreviation": "TB"
    },
    {
        "key": "terabyte-10",
        "label": "Terabyte (10^12 bytes)",
        "conversionRate": 8000000000000,
        "abbreviation": "TB-10"
    },
    {
        "key": "petabit",
        "label": "Petabit [Pb]",
        "conversionRate": 1000000000000000,
        "abbreviation": "Pb"
    },
    {
        "key": "petabyte",
        "label": "Petabyte [PB]",
        "conversionRate": 8000000000000000,
        "abbreviation": "PB"
    }
]
  );

  popularUnits = Object.freeze([
    { "route": "bit-to-byte", "reverseRoute": "byte-to-bit", "labelRoute": "Bit to Byte", "labelReverseRoute": "Byte to Bit" },
    { "route": "bit-to-kilobit", "reverseRoute": "kilobit-to-bit", "labelRoute": "Bit to Kilobit", "labelReverseRoute": "Kilobit to Bit" },
    { "route": "bit-to-kilobyte", "reverseRoute": "kilobyte-to-bit", "labelRoute": "Bit to Kilobyte", "labelReverseRoute": "Kilobyte to Bit" },
    { "route": "byte-to-kilobyte", "reverseRoute": "kilobyte-to-byte", "labelRoute": "Byte to Kilobyte", "labelReverseRoute": "Kilobyte to Byte" },
    { "route": "byte-to-megabyte", "reverseRoute": "megabyte-to-byte", "labelRoute": "Byte to Megabyte", "labelReverseRoute": "Megabyte to Byte" },
    { "route": "kilobit-to-kilobyte", "reverseRoute": "kilobyte-to-kilobit", "labelRoute": "Kilobit to Kilobyte", "labelReverseRoute": "Kilobyte to Kilobit" },
    { "route": "kilobyte-to-megabyte", "reverseRoute": "megabyte-to-kilobyte", "labelRoute": "Kilobyte to Megabyte", "labelReverseRoute": "Megabyte to Kilobyte" },
    { "route": "kilobyte-10-to-megabyte", "reverseRoute": "megabyte-to-kilobyte-10", "labelRoute": "Kilobyte (10^3 bytes) to Megabyte", "labelReverseRoute": "Megabyte to Kilobyte (10^3 bytes)" },
    { "route": "megabit-to-megabyte", "reverseRoute": "megabyte-to-megabit", "labelRoute": "Megabit to Megabyte", "labelReverseRoute": "Megabyte to Megabit" },
    { "route": "megabyte-to-gigabyte", "reverseRoute": "gigabyte-to-megabyte", "labelRoute": "Megabyte to Gigabyte", "labelReverseRoute": "Gigabyte to Megabyte" },
    { "route": "megabyte-10-to-gigabyte", "reverseRoute": "gigabyte-to-megabyte-10", "labelRoute": "Megabyte (10^6 bytes) to Gigabyte", "labelReverseRoute": "Gigabyte to Megabyte (10^6 bytes)" },
    { "route": "gigabit-to-gigabyte", "reverseRoute": "gigabyte-to-gigabit", "labelRoute": "Gigabit to Gigabyte", "labelReverseRoute": "Gigabyte to Gigabit" },
    { "route": "gigabyte-to-terabyte", "reverseRoute": "terabyte-to-gigabyte", "labelRoute": "Gigabyte to Terabyte", "labelReverseRoute": "Terabyte to Gigabyte" },
    { "route": "gigabyte-10-to-terabyte", "reverseRoute": "terabyte-to-gigabyte-10", "labelRoute": "Gigabyte (10^9 bytes) to Terabyte", "labelReverseRoute": "Terabyte to Gigabyte (10^9 bytes)" },
    { "route": "terabit-to-terabyte", "reverseRoute": "terabyte-to-terabit", "labelRoute": "Terabit to Terabyte", "labelReverseRoute": "Terabyte to Terabit" },
    { "route": "terabyte-to-petabyte", "reverseRoute": "petabyte-to-terabyte", "labelRoute": "Terabyte to Petabyte", "labelReverseRoute": "Petabyte to Terabyte" },
    { "route": "terabyte-10-to-petabyte", "reverseRoute": "petabyte-to-terabyte-10", "labelRoute": "Terabyte (10^12 bytes) to Petabyte", "labelReverseRoute": "Petabyte to Terabyte (10^12 bytes)" },
    { "route": "petabit-to-petabyte", "reverseRoute": "petabyte-to-petabit", "labelRoute": "Petabit to Petabyte", "labelReverseRoute": "Petabyte to Petabit" },
    { "route": "petabyte-to-exabyte", "reverseRoute": "exabyte-to-petabyte", "labelRoute": "Petabyte to Exabyte", "labelReverseRoute": "Exabyte to Petabyte" }
  ]);    
test = [
  {"key": "bit", "abbreviation": "bit"},
  {"key": "nibble", "abbreviation": "nibble"},
  {"key": "byte", "abbreviation": "B"},
  {"key": "character", "abbreviation": "char"},
  {"key": "word", "abbreviation": "word"},
  {"key": "MAPM-word", "abbreviation": "MAPM-word"},
  {"key": "quadruple-word", "abbreviation": "quad-word"},
  {"key": "block", "abbreviation": "block"},
  {"key": "kilobit", "abbreviation": "Kb"},
  {"key": "kilobyte", "abbreviation": "KB"},
  {"key": "kilobyte-10", "abbreviation": "KB-10"},
  {"key": "megabit", "abbreviation": "Mb"},
  {"key": "megabyte", "abbreviation": "MB"},
  {"key": "megabyte-10", "abbreviation": "MB-10"},
  {"key": "gigabit", "abbreviation": "Gb"},
  {"key": "gigabyte", "abbreviation": "GB"},
  {"key": "gigabyte-10", "abbreviation": "GB-10"},
  {"key": "terabit", "abbreviation": "Tb"},
  {"key": "terabyte", "abbreviation": "TB"},
  {"key": "terabyte-10", "abbreviation": "TB-10"},
  {"key": "petabit", "abbreviation": "Pb"},
  {"key": "petabyte", "abbreviation": "PB"}
]

  constructor() {    
             console.log('units',this.units.map(item => ({...item,abbreviation:this.test.find(i => i.key === item.key)?.abbreviation})));
      //  console.log('units',this.units.map(item => (item.key)));  
  }


  isValidNumber(userInput:string) {
    const parsedValue = parseFloat(userInput);
    return !isNaN(parsedValue) && isFinite(parsedValue); 
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