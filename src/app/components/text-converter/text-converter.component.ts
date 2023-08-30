import { Component,  OnInit } from '@angular/core';
import { minorWords } from '../../utils/words';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-text-converter',
  templateUrl: './text-converter.component.html',
  styleUrls: ['./text-converter.component.scss'],
})
export class TextConverterComponent implements OnInit {
  text: string = '';
  storageKey = 'convertedText'
  originalText = '';
  executeFn = () => {};
  readonly buttonMappings:{[key:string]:any}  = {
    'convert-to-uppercase': this.convertToUppercase,
    'convert-to-lowercase': this.convertToLowercase,
    'convert-to-title-case': this.convertToTitleCase,
    'convert-to-capitalized-case': this.convertToCapitalizedCase,
    'convert-to-camel-case': this.convertToCamelCase,
    'convert-text-to-kebab-case': this.textToKebabCase,
    'convert-to-snake-case': this.convertToSnakeCase,
    'convert-to-inverse-case': this.convertToInverseCase,
  };
  readonly metaContent:{[key:string]:any} =  {
    "convert-to-uppercase": "Convert text to uppercase using the Uppercase Conversion tool. Transform all characters to uppercase for a consistent and bold appearance.",
    "convert-to-lowercase": "Convert text to lowercase using the Lowercase Conversion tool. Transform all characters to lowercase for a uniform and subdued style.",
    "convert-to-title-case": "Convert text to title case using the Title Case Conversion tool. Capitalize the first letter of each word for a polished and professional look.",
    "convert-to-capitalized-case": "Convert text to capitalized case using the Capitalized Case Conversion tool. Capitalize the first letter of the text for a stylish and refined presentation.",
    "convert-to-camel-case": "Convert text to camel case using the Camel Case Conversion tool. Transform text into a format where words are joined and each word after the first starts with a capital letter.",
    "convert-text-to-kebab-case": "Convert text to kebab case using the Kebab Case Conversion tool. Join words with hyphens for URLs and identifiers with improved readability.",
    "convert-to-snake-case": "Convert text to snake case using the Snake Case Conversion tool. Join words with underscores for variable names and identifiers in programming.",
    "convert-to-inverse-case": "Convert text to inverse case using the Inverse Case Conversion tool. Reverse the case of each character for a unique and eye-catching effect."
  }
  
  constructor(private route:ActivatedRoute,private metaService:MetaService, private router:Router) { }

  ngOnInit(): void {
    this.metaService.setTitle('Text Converter: Transform Text with Encoding, Decoding, and More');
    this.metaService.setMeta("description",`Discover versatile text conversion tools for encoding, decoding, and transformation. Convert text to URL-safe formats, HTML entities, Unicode encodings, and more. Decode and restore text to its original form. Empower your content with efficient text conversion utilities for various encoding needs.`);
    const defaultAction = 'convert-to-uppercase'
    let action = this.route.snapshot.params['action'];
    if(!action || !this.buttonMappings[action]){
      action = defaultAction
      this.router.navigate(['./',defaultAction],{relativeTo:this.route.parent})
    }
    this.route.params.subscribe(params =>{
      const action = params['action'] || defaultAction;
      if(action){
        this.metaService.setTitle(action);
        this.metaService.setMeta("description",this.metaContent[action]);
      }    
    })
    
    if(action && this.buttonMappings[action]){
      this.executeFn = this.buttonMappings[action];
    }    
  }

  onSelect(executeFn:() => void){
    this.executeFn = executeFn;
    this.executeFn(); 
  }

  setOriginalText(text: string) {
    this.originalText = text;
    this.executeFn()
  }

  convertToLowercase() {
    this.text = this.originalText.toLowerCase();
  }

  convertToUppercase() {
    this.text = this.originalText.toUpperCase();
  }

  convertToTitleCase() {
    this.text = this.originalText.toLowerCase();
    this.text = this.originalText.replace(/(^|\n).+?($|\n)/g, (match) => {
      return match.replace(/\b\w+/g, (word) => {
        if (
          !minorWords.includes(word.toLowerCase()) ||
          word === word.toUpperCase()
        ) {
          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        } else {
          return word.toLowerCase();
        }
      });
    });
  }

  convertToCapitalizedCase() {
    this.text = this.originalText.toLowerCase();
    this.text = this.text.replace(/\b\w/g, (txt) => txt.toUpperCase());
  }

  convertToInverseCase() {
    this.text = this.originalText
      .split('')
      .map((char) => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else if (char === char.toLowerCase()) {
          return char.toUpperCase();
        } else {
          return char;
        }
      })
      .join('');
  }


  textToKebabCase() {
    this.text = this.originalText.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
  }

  convertToCamelCase() {
    this.text = this.originalText.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }

  convertToSnakeCase() {
    this.text = this.originalText.replace(/\s+/g, '_').toLowerCase();
  }


  removeSpaces() {
    this.text = this.originalText.replace(/\s/g, '');
  }

  reverseText() {
    this.text = this.originalText.split('').reverse().join('');
  }



  clearTextArea() {
    this.text = '';
    this.originalText = ''
  }


}
