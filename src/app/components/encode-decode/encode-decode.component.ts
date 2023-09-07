import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { encode as punycodeEncode, decode as punycodeDecode } from "punycode"
import { MetaService } from '../services/meta.service';
import { SeoService } from '../services/seo.service';
import { InfoService } from './info.service';

@Component({
  selector: 'app-encode-decode',
  templateUrl: './encode-decode.component.html',
  styleUrls: ['./encode-decode.component.scss'],
  providers: [InfoService]

})
export class EncodeDecodeComponent {

  text: string = '';
  toasterMessage: string = '';
  originalText = '';
  executeFn = () => { };
  storageKey = 'urlEncodeDecode';
  isRoot!: boolean;
  readonly morseCodeMap: { [key: string]: string } = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
  };

  readonly buttonMappings: { [key: string]: any } = {
    'url-encode': this.urlEncode,
    'url-decode': this.urlDecode,
    'html-encode': this.htmlEncode,
    'html-decode': this.htmlDecode,
    'rot13': this.rot13,
    'rot47': this.rot47,
    'punycode-encode': this.punycodeEncode,
    'punycode-decode': this.punycodeDecode,
    'utf8-encode': this.utf8Encode,
    'utf8-decode': this.utf8Decode,
    'utf16-encode': this.utf16Encode,
    'utf16-decode': this.utf16Decode,
    'base64-encode': this.base64Encode,
    'base64-decode': this.base64Decode,
    'morse-encode': this.morseCodeEncode,
    'morse-decode': this.morseCodeDecode,
    'bcd-encode': this.bcdEncode,
    'bcd-decode': this.bcdDecode
  };

  readonly metaContent: { [key: string]: any } = {
    "url-encode": "Encode URLs with the URL Encode tool. Transform special characters into percent-encoded format for safe sharing and linking.",
    "url-decode": "Decode URLs with the URL Decode tool. Convert percent-encoded characters back to their original form for easy readability and understanding.",
    "html-encode": "Encode HTML entities using the HTML Encode tool. Convert special characters to their corresponding HTML entities for secure and valid web content.",
    "html-decode": "Decode HTML entities with the HTML Decode tool. Transform HTML entities back to their original characters for accurate and natural text representation.",
    "rot13": "Transform text using the ROT13 cipher. Encrypt and decrypt text using the ROT13 algorithm, a simple letter substitution cipher.",
    "rot47": "Encrypt and decrypt text using the ROT47 cipher. Similar to ROT13, the ROT47 algorithm provides a higher level of encryption for text.",
    "punycode-encode": "Encode international domain names using Punycode. Convert non-ASCII characters to ASCII-compatible representations for domain name registration.",
    "punycode-decode": "Decode Punycode domain names. Convert ASCII-compatible domain names back to their original non-ASCII characters.",
    "utf8-encode": "Encode text using UTF-8 encoding. Convert characters to their corresponding UTF-8 byte sequences for multilingual compatibility.",
    "utf8-decode": "Decode UTF-8 encoded text. Convert UTF-8 byte sequences back to their original characters for accurate content representation.",
    "utf16-encode": "Encode text using UTF-16 encoding. Transform characters into their corresponding UTF-16 code units for various applications.",
    "utf16-decode": "Decode UTF-16 encoded text. Convert UTF-16 code units back to their original characters for proper text interpretation.",
    "base64-encode": "Encode text using Base64 encoding. Convert binary data to ASCII text for safe transmission and storage.",
    "base64-decode": "Decode Base64 encoded text. Convert Base64-encoded data back to its original binary format.",
    "morse-encode": "Encode text into Morse code. Transform characters into Morse code representations for communication and fun.",
    "morse-decode": "Decode Morse code back to text. Convert Morse code signals into their corresponding characters for message interpretation.",
    "bcd-encode": "Encode decimal numbers using Binary-Coded Decimal (BCD) encoding. Convert decimal digits to their BCD representation.",
    "bcd-decode": "Decode Binary-Coded Decimal (BCD) encoded numbers. Convert BCD digits back to their decimal form for numerical operations."
  }

  readonly metaKeywords: { [key: string]: any } = {
    url:'URL Encoding, URL Decoding, Percent Encoding, URL Escape Characters, URL Character Encoding, URL Component Encoding, URL Parameter Encoding, URL Encoding in JavaScript, HTML URL Encoding, URL Special Characters, Encoding Algorithms, URL Encoding Guide, URL Encoding Explained, URL Encoding Examples, URL Encoding Best Practices, URL Encoding Online Tool, URL Encode/Decode Functions, URL Encoding Cheat Sheet, How to Use URL Encoding, URL Encoding vs. URL Decoding',
    html:'HTML Encoding, HTML Special Characters, Character Encoding, HTML Entity, HTML Escape Characters, HTML Character Entities, HTML Encoding in JavaScript, HTML Character Reference, HTML Encoding Online, HTML Encoding Examples, HTML Encoding Guide, How to Use HTML Encoding, HTML Encoding Cheat Sheet, Encoding HTML Entities, HTML Encoding vs. Decoding, HTML Escaping, HTML Special Character Codes, HTML Character Set, HTML Symbol Encoding',
    rot13:'ROT13, ROT13 Cipher, ROT13 Encryption, ROT13 Decoder, Text Encryption, Text Decryption, ROT13 Algorithm, Caesar Cipher, Text Encoding, Data Security, Online ROT13 Encoder, ROT13 Examples, ROT13 Tool, ROT13 Converter, Text Transformation, Data Privacy, Data Encryption, ROT13 Online, Text Security',
    rot47:'ROT47, ROT47 Cipher, ROT47 Encryption, ROT47 Decoder, Text Encryption, Text Decryption, ROT47 Algorithm, Text Encoding, Data Security, Online ROT47 Encoder, ROT47 Examples, ROT47 Tool, ROT47 Converter, Text Transformation, Data Privacy, Data Encryption, ROT47 Online, Text Security',
    punycode: 'Punycode Encode, Punycode Encoding, Punycode Conversion, Internationalized Domain Names, IDN Encoding, Domain Name Conversion, Punycode Converter, Punycode Online, Encode IDN, Convert Domain Names, URL Encoding, Unicode to Punycode, Web Addresses Encoding, Web Development Tools, Domain Name Internationalization, Encode International Characters, IDN Support',
    utf8: 'UTF-8 Encoding, UTF-8 Decoding, UTF-8 Converter, Unicode Transformation Format, UTF-8 Characters, Text Encoding, Text Decoding, Character Encoding, UTF-8 Encoding Tool, UTF-8 Online, UTF-8 Examples, UTF-8 Support, Text Conversion, Web Development, Data Encoding, Data Decoding, UTF-8 Encoding Algorithm',
    utf16: 'UTF-16 Encoding, UTF-16 Decoding, UTF-16 Converter, Unicode Transformation Format 16, UTF-16 Characters, Text Encoding, Text Decoding, Character Encoding, UTF-16 Encoding Tool, UTF-16 Online, UTF-16 Examples, UTF-16 Support, Text Conversion, Web Development, Data Encoding, Data Decoding, UTF-16 Encoding Algorithm',
    base64: 'Base64 Encoding, Base64 Decoding, Base64 Converter, Base64 Algorithm, Text Encoding, Text Decoding, Data Encoding, Data Decoding, Base64 Encoding Tool, Base64 Online, Base64 Examples, Base64 Support, Text Conversion, Web Development, Data Security, Data Privacy, Base64 Encoding Algorithm',
    morse: 'Morse Code Encoding, Morse Code Decoding, Morse Code Converter, Morse Code Translator, Text Encoding, Text Decoding, Morse Code Alphabet, Morse Code Examples, Morse Code Translator Tool, Morse Code Online, Communication, Text Conversion, Communication System, Morse Code Messages, Morse Code Generator, Morse Code Symbols',
    bcd: 'BCD Encoding, BCD Decoding, Binary-Coded Decimal, Binary-Coded Decimal Converter, BCD Code, Decimal Encoding, Decimal Decoding, Binary Code, BCD Arithmetic, Binary-Coded Decimal Calculator, Binary Representation, Data Conversion, Digital Data, BCD Format, BCD Converter, Decimal Binary Conversion',
  }

  desccription: string = "";
  defaultAction = 'url-encode';
  constructor(private route: ActivatedRoute, private metaService: MetaService, private infoService: InfoService, private seoService: SeoService) { }

  ngOnInit(): void {
    this.handleSeo();
    let action = this.route.snapshot.params['action'];
    if (action && this.buttonMappings[action]) {
      this.isRoot = false;
      this.executeFn = this.buttonMappings[action];
      this.desccription = this.infoService.getData(action);
      this.setInnerDescription(action)
    } else {
      action = this.defaultAction;
      this.executeFn = this.buttonMappings[action];
      this.isRoot = true;
    }

    this.route.params.subscribe(params => {
      const action = (params['action'] && this.metaContent[params['action']]) ? params['action'] : this.defaultAction;
      if (action) {
        let clearedAction = action.replace('-encode', '').replace('-decode', '');
        this.metaService.setTitle(`${clearedAction} Encoding/Decoding online`);
        this.metaService.setDescription(this.metaContent[action]);
        this.metaService.setKeywords(this.metaKeywords[clearedAction]);
      }
      this.setInnerDescription(action);
      this.setCanonical();
    })

  }

  setInnerDescription(action: string) {
    if (action && this.infoService.getData(action)) {
      this.desccription = this.infoService.getData(action);
    } else {
      this.isRoot = true;
      this.executeFn = this.buttonMappings[this.defaultAction];
    }
  }

  private setCanonical() {
    let action = this.route.snapshot.params['action']
    if (!action || ['rot13', 'rot47'].includes(action)) {
      return;
    }
    action = action.replace('-encode', '').replace('-decode', '');
    this.seoService.createLinkForCanonicalURL(`${action}-encode`)
  }

  private handleSeo() {
    this.metaService.setTitle('Encode Decode Tools: Convert Text to Secure Formats and Back');
    this.metaService.setDescription('Navigate through a collection of encode-decode tools designed to transform text into secure formats and decode it back to its original state. Encode text for safe transmission, storage, and compatibility, and then decode it effortlessly. Explore a range of encoding and decoding utilities for versatile text manipulation.')
    this.metaService.setKeywords("encoding, decoding, URL manipulation, character encoding, character decoding, data transformation, encryption, decryption, security, privacy, URL encoding, URL decoding, HTML encoding, HTML decoding, ROT13 cipher, ROT47 cipher, Punycode encoding, Punycode decoding, UTF-8 encoding, UTF-8 decoding, UTF-16 encoding, UTF-16 decoding, Base64 encoding, Base64 decoding, Morse code encoding, Morse code decoding, BCD encoding, BCD decoding")
  }

  setOriginalText(text: string) {
    this.originalText = text;
    this.executeFn()
  }

  onSelect(executeFn: () => void) {
    this.executeFn = executeFn;
    this.executeFn();

  }

  urlEncode() {
    this.text = encodeURIComponent(this.originalText);
  }

  urlDecode() {
    try {
      this.text = decodeURIComponent(this.originalText);
    } catch (error: any) {
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
    } catch (error: any) {
      console.error("Error decoding Base64:", error.message);
    }
  }

  rot13() {
    this.text = this.originalText.replace(/[a-zA-Z]/g, function (char) {
      const offset = char.toLowerCase() < "n" ? 13 : -13;
      return String.fromCharCode(char.charCodeAt(0) + offset);
    });
  }

  rot47() {
    this.text = this.originalText.replace(/[!-~]/g, function (char) {
      return String.fromCharCode((char.charCodeAt(0) - 33 + 47) % 94 + 33);
    });
  }

  punycodeEncode() {
    this.text = punycodeEncode(this.originalText);
  }

  punycodeDecode() {
    try {
      this.text = punycodeDecode(this.originalText);
    } catch (error: any) {
      console.error("Error decoding punycode:", error.message);
      this.toasterMessage = 'Error: Invalid input'

      setTimeout(() => {
        this.toasterMessage = ''
      }, 5000)
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
    this.text = encodedBytes.join('');
  };

  utf8Decode() {
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

  utf16Encode() {
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
      if (!matched) {
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

  morseCodeEncode() {
    this.text = this.originalText.toUpperCase()
      .split('')
      .map((char: string) => this.morseCodeMap[char] || char)
      .join(' ');
  }

  morseCodeDecode() {
    const reverseMap: { [key: string]: string } = {};
    Object.keys(this.morseCodeMap).forEach((key: string) => {
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
    if (!binaryDigits) {
      this.text = 'Enter valid value'
      return;
    }
    this.text = binaryDigits.map((binaryDigit) => parseInt(binaryDigit, 2).toString()).join('');
  }

}
