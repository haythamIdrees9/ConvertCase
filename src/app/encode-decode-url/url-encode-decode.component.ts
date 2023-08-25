import { Component } from '@angular/core';
import {encode as punycodeEncode, decode as punycodeDecode} from "punycode"

@Component({
  selector: 'app-url-encode-decode',
  templateUrl: './url-encode-decode.component.html',
  styleUrls: ['./url-encode-decode.component.scss'],

})
export class EncodeDecodeUrlComponent {

  text: string = '';
  toasterMessage: string = '';
  originalText = '';
  executeFn = () => { };
  storageKey = 'urlEncodeDecode';
  readonly morseCodeMap: {[key:string]:string}  = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
  };
  constructor() { }

  ngOnInit(): void {

  }

  setOriginalText(text: string) {
    this.originalText = text;
    this.executeFn()
  }

  urlEncode() {
    this.text = encodeURIComponent(this.originalText);
  }

  urlDecode() {
    try {
      this.text =  decodeURIComponent(this.originalText);
    } catch (error:any) {
      console.error("Error decoding URL:", error?.message);
      this.toasterMessage = "Error decoding URL:", error?.message;
    }
  }
  
  htmlEncode() {
    const element = document.createElement("div");
    element.textContent = this.originalText;
    this.text = element.innerHTML;
  }

  htmlDecode() {
    const element = document.createElement("div");
    element.innerHTML = this.originalText;
    this.text = element.textContent || '';
  }

  base64Encode() {
    this.text = btoa(this.originalText);
  }

  base64Decode() {
    try {
      this.text = atob(this.originalText);
    } catch (error:any) {
      console.error("Error decoding Base64:", error.message);
    }
  }

  rot13() {
    this.text = this.originalText.replace(/[a-zA-Z]/g, function(char) {
      const offset = char.toLowerCase() < "n" ? 13 : -13;
      return String.fromCharCode(char.charCodeAt(0) + offset);
    });
  }

  rot47() {
    this.text = this.originalText.replace(/[!-~]/g, function(char) {
      return String.fromCharCode((char.charCodeAt(0) - 33 + 47) % 94 + 33);
    });
  }

  punycodeEncode() {
    this.text = punycodeEncode(this.originalText);
  }

  punycodeDecode() {
    try {
      this.text = punycodeDecode(this.originalText);
    } catch (error:any) {
      console.error("Error decoding punycode:", error.message);
      this.toasterMessage = 'Error: Invalid input'
    }
  }

  utf8Encode() {
    const encodedBytes = [];
    for (let j = 0; j < this.originalText.length; j++) {
      const code = this.originalText.charCodeAt(j);
      if (code < 128) {
        encodedBytes.push(`\\x${code.toString(16)}`);
      } else if (code < 2048) {
        encodedBytes.push(`\\x${(192 + (code >> 6)).toString(16)}`);
        encodedBytes.push(`\\x${(128 + (code & 63)).toString(16)}`);
      } else {
        encodedBytes.push(`\\x${(224 + (code >> 12)).toString(16)}`);
        encodedBytes.push(`\\x${(((code >> 6) & 63) + 128).toString(16)}`);
        encodedBytes.push(`\\x${(128 + (code & 63)).toString(16)}`);
      }
    }
    this.text =  encodedBytes.join('');
  };
  
  utf8Decode()  {
    const byteTokens = this.originalText.split("\\x").filter(token => token !== "");
    const decodedChars = [];
  
    for (let i = 0; i < byteTokens.length; i++) {
      const byteValue = parseInt(byteTokens[i], 16);
      if (byteValue < 128) {
        decodedChars.push(String.fromCharCode(byteValue));
      } else if (byteValue >= 192 && byteValue < 224) {
        const secondByteValue = parseInt(byteTokens[++i], 16);
        decodedChars.push(String.fromCharCode(((byteValue & 31) << 6) | (secondByteValue & 63)));
      } else if (byteValue >= 224 && byteValue < 240) {
        const secondByteValue = parseInt(byteTokens[++i], 16);
        const thirdByteValue = parseInt(byteTokens[++i], 16);
        decodedChars.push(String.fromCharCode(((byteValue & 15) << 12) | ((secondByteValue & 63) << 6) | (thirdByteValue & 63)));
      }
    }
  
    this.text = decodedChars.join('');
  }

  utf16Encode()  {
    let encodedString = '';
    for (let i = 0; i < this.originalText.length; i++) {
      const codePoint = this.originalText.charCodeAt(i);
      encodedString += `\\u{${codePoint.toString(16)}}`;
    }
    this.text = encodedString;
  };
  

  utf16Decode() {
    const codePoints = this.originalText.match(/\\u\{([0-9a-fA-F]+)\}/g);
    if (!codePoints) {
      return; 
    }
  
    let decodedString = '';
    codePoints.forEach(codePoint => {
      const matched = codePoint.match(/[0-9a-fA-F]+/);
      if(!matched){
        return;
      }
      const hexValue = matched[0];
      const intValue = parseInt(hexValue, 16);
      decodedString += String.fromCodePoint(intValue);
    });
  
    this.text = decodedString;
  };
  
  clearTextArea() {
    this.text = '';
    this.originalText = ''
  }

  // base64Encode() {
  //   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  //   let result = '';
  //   let i = 0;
  
  //   while (i < this.originalText.length) {
  //     const char1 = this.originalText.charCodeAt(i++);
  //     const char2 = this.originalText.charCodeAt(i++);
  //     const char3 = this.originalText.charCodeAt(i++);
  
  //     const byte1 = char1 >> 2;
  //     const byte2 = ((char1 & 3) << 4) | (char2 >> 4);
  //     const byte3 = ((char2 & 15) << 2) | (char3 >> 6);
  //     const byte4 = char3 & 63;
  
  //     result +=
  //       chars.charAt(byte1) +
  //       chars.charAt(byte2) +
  //       (isNaN(char2) ? '=' : chars.charAt(byte3)) +
  //       (isNaN(char3) ? '=' : chars.charAt(byte4));
  //   }
  
  //   this.text = result;
  // }
  
  // base64Decode() {
  //   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  //   let result = '';
  //   let i = 0;
  
  //   const input = this.originalText.replace(/[^A-Za-z0-9+/=]/g, ''); // Remove invalid characters
  
  //   while (i < input.length) {
  //     const char1 = chars.indexOf(input.charAt(i++));
  //     const char2 = chars.indexOf(input.charAt(i++));
  //     const char3 = chars.indexOf(input.charAt(i++));
  //     const char4 = chars.indexOf(input.charAt(i++));
  
  //     const byte1 = (char1 << 2) | (char2 >> 4);
  //     const byte2 = ((char2 & 15) << 4) | (char3 >> 2);
  //     const byte3 = ((char3 & 3) << 6) | char4;
  
  //     result += String.fromCharCode(byte1);
  
  //     if (char3 !== 64) {
  //       result += String.fromCharCode(byte2);
  //     }
  //     if (char4 !== 64) {
  //       result += String.fromCharCode(byte3);
  //     }
  //   }
  
  //   this.text =  result;
  // }
  
  morseCodeEncode() {
    this.text = this.originalText.toUpperCase()
      .split('')
      .map((char:string) => this.morseCodeMap[char] || char)
      .join(' ');
  }
  
   morseCodeDecode() {
    const reverseMap: {[key:string]:string} = {};
    Object.keys(this.morseCodeMap).forEach((key:string) => {
      reverseMap[this.morseCodeMap[key]] = key;
    });
    this.text = this.originalText.split(' ')
      .map((code) => reverseMap[code] || code)
      .join('');
  }
  
  bcdEncode() {
    this.text = this.originalText.split('')
      .map((digit) => ('0000' + parseInt(digit).toString(2)).slice(-4))
      .join('');
  }
  
  bcdDecode() {
    const binaryDigits = this.originalText.match(/.{1,4}/g);
    if(!binaryDigits){
      this.text = 'Enter valid value'
      return;
    }
    this.text = binaryDigits.map((binaryDigit) => parseInt(binaryDigit, 2).toString()).join('');
  }

}
