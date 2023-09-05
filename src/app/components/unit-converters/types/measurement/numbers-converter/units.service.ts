import { Injectable } from '@angular/core';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; base: number }[] = Object.freeze([

      { key: "binary", label: "Binary", base: 2 },
      { key: "octal", label: "Octal", base: 8 },
      { key: "decimal", label: "Decimal", base: 10 },
      { key: "hexadecimal", label: "Hexadecimal", base: 16 },
  ]
  );

  popularUnits = Object.freeze([
    { route: "binary-to-octal", reverseRoute: "octal-to-binary", labelRoute: "Binary to Octal", labelReverseRoute: "Octal to Binary" },
    { route: "binary-to-decimal", reverseRoute: "decimal-to-binary", labelRoute: "Binary to Decimal", labelReverseRoute: "Decimal to Binary" },
    { route: "binary-to-hexadecimal", reverseRoute: "hexadecimal-to-binary", labelRoute: "Binary to Hexadecimal", labelReverseRoute: "Hexadecimal to Binary" },
    { route: "octal-to-decimal", reverseRoute: "decimal-to-octal", labelRoute: "Octal to Decimal", labelReverseRoute: "Decimal to Octal" },
    { route: "octal-to-hexadecimal", reverseRoute: "hexadecimal-to-octal", labelRoute: "Octal to Hexadecimal", labelReverseRoute: "Hexadecimal to Octal" },
    { route: "decimal-to-hexadecimal", reverseRoute: "hexadecimal-to-decimal", labelRoute: "Decimal to Hexadecimal", labelReverseRoute: "Hexadecimal to Decimal" },
  ]
  );


  constructor() {
  }

  isValidBaseNumber(number:string, base:number) {
    // Check if the base is within a valid range (between 2 and 32)
    if (base < 2 || base > 32) {
      return false;
    }
  
    // Define a regular expression pattern based on the specified base
    const pattern = new RegExp(`^[0-${base - 1}]+$`, 'i');
  
    // Use the regular expression to test if the number is valid in the specified base
    return pattern.test(number);
  }

  getBase(key:string){
    return this.units.find(item => item.key === key)?.base || 10;
  }

  convertBaseNumber(number: string, fromBase: number, toBase: number) {
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Convert the number to decimal
    let decimalNumber = 0;
    for (let i = number.length - 1; i >= 0; i--) {
      const digit = digits.indexOf(number[i].toUpperCase());
      decimalNumber += digit * Math.pow(fromBase, number.length - 1 - i);
    }

    // Convert the decimal number to the desired base
    let result = "";
    while (decimalNumber > 0) {
      const remainder = decimalNumber % toBase;
      result = digits[remainder] + result;
      decimalNumber = Math.floor(decimalNumber / toBase);
    }

    return result;
  }

}