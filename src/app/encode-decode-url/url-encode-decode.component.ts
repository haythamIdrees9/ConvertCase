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
  storageKey = 'urlEncodeDecode'
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

}
