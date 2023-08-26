import { Component, OnDestroy, OnInit } from '@angular/core';
import { minorWords } from '../../utils/words';
import { ActivatedRoute } from '@angular/router';

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
    'text-to-kebab-case': this.textToKebabCase,
    'convert-to-snake-case': this.convertToSnakeCase,
    'convert-to-inverse-case': this.convertToInverseCase,
  };
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const action = this.route.snapshot.params['action'];
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