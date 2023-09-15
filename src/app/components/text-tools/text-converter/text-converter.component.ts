import { Component, OnInit } from '@angular/core';
import { minorWords } from '../../../utils/words';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '../../services/meta.service';
import { InfoService } from './info.service';


@Component({
  selector: 'app-text-converter',
  templateUrl: './text-converter.component.html',
  styleUrls: ['./text-converter.component.scss','../../container.scss'],
  providers:[InfoService]
})
export class TextConverterComponent implements OnInit {
  text: string = '';
  storageKey = 'convertedText'
  originalText = '';
  isRoot!:boolean;
  executeFn = () => { };
  readonly buttonMappings: { [key: string]: any } = {
    'convert-to-uppercase': this.convertToUppercase,
    'convert-to-lowercase': this.convertToLowercase,
    'convert-to-title-case': this.convertToTitleCase,
    'convert-to-capitalized-case': this.convertToCapitalizedCase,
    'convert-to-camel-case': this.convertToCamelCase,
    'convert-to-kebab-case': this.textToKebabCase,
    'convert-to-snake-case': this.convertToSnakeCase,
    'convert-to-inverse-case': this.convertToInverseCase,
  };
  readonly metaContent: { [key: string]: any } = {
    "convert-to-uppercase": "Convert text to uppercase using the Uppercase Conversion tool. Transform all characters to uppercase for a consistent and bold appearance.",
    "convert-to-lowercase": "Convert text to lowercase using the Lowercase Conversion tool. Transform all characters to lowercase for a uniform and subdued style.",
    "convert-to-title-case": "Convert text to title case using the Title Case Conversion tool. Capitalize the first letter of each word for a polished and professional look.",
    "convert-to-capitalized-case": "Convert text to capitalized case using the Capitalized Case Conversion tool. Capitalize the first letter of the text for a stylish and refined presentation.",
    "convert-to-camel-case": "Convert text to camel case using the Camel Case Conversion tool. Transform text into a format where words are joined and each word after the first starts with a capital letter.",
    "convert-to-kebab-case": "Convert text to kebab case using the Kebab Case Conversion tool. Join words with hyphens for URLs and identifiers with improved readability.",
    "convert-to-snake-case": "Convert text to snake case using the Snake Case Conversion tool. Join words with underscores for variable names and identifiers in programming.",
    "convert-to-inverse-case": "Convert text to inverse case using the Inverse Case Conversion tool. Reverse the case of each character for a unique and eye-catching effect."
  }
  readonly metaKeywords: { [key: string]: any } = {
    'convert-to-uppercase': 'Convert to Uppercase, Uppercase Converter, Text Uppercase, Case Conversion, Uppercase Text, Online Uppercase, Convert Text to Uppercase, Uppercase Generator, Text Case Change, Capitalization Tool, Uppercase Online, Text Transformation, Case Formatting, Capital Letters',
    'convert-to-lowercase': 'Convert to Lowercase, Lowercase Converter, Text Lowercase, Case Conversion, Lowercase Text, Online Lowercase, Convert Text to Lowercase, Lowercase Generator, Text Case Change, Lowercase Online, Text Transformation, Case Formatting, Small Letters',
    'convert-to-title-case': 'Convert to Title Case, Title Case Converter, Text Title Case, Capitalization Tool, Title Case Text, Online Title Case, Convert Text to Title Case, Title Case Generator, Text Case Change, Proper Case, Title Formatting, Text Transformation, Capital Letters',
    'convert-to-capitalized-case': 'Convert to Capitalized Case, Capitalized Case Converter, Text Capitalization, Title Case Generator, Proper Case Conversion, Text Formatting, Capital Letters, Title Casing, Text Transformation, Capitalization Tool, Online Text Capitalizer',
    'convert-to-camel-case': 'Convert to Camel Case, CamelCase Converter, Text CamelCase, CamelCase Generator, Text Case Change, Camel Notation, Coding Convention, Programming Style, CamelCase Online, Text Transformation, Coding Standards',
    'convert-to-kebab-case': 'Convert to Kebab Case, KebabCase Converter, Text KebabCase, KebabCase Generator, Text Case Change, Kebab Notation, Coding Convention, Programming Style, KebabCase Online, Text Transformation, Coding Standards',
    'convert-to-snake-case': 'Convert to Snake Case, SnakeCase Converter, Text SnakeCase, SnakeCase Generator, Text Case Change, Snake Notation, Coding Convention, Programming Style, SnakeCase Online, Text Transformation, Coding Standards',
    'convert-to-inverse-case': 'Convert to Inverse Case, Inverse Case Converter, Text Inverse Case, Inverse Case Generator, Text Case Change, Inverse Notation, Coding Convention, Programming Style, Inverse Case Online, Text Transformation, Coding Standards',

  }
  desccription:string = ''
  defaultAction = 'convert-to-uppercase';

  constructor(private route:ActivatedRoute, private metaService: MetaService, private infoService:InfoService) { }

  ngOnInit(): void {
    this.handleSeo()

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
      const action = (params['action'] && this.metaContent[params['action']])?params['action']: this.defaultAction;      
      this.isRoot = !params['action'];
      if (action) {
        this.metaService.setTitle(`${action} online`);
        this.metaService.setDescription(this.metaContent[action]);
        this.metaService.setKeywords(this.metaKeywords[action]);
      }
      this.setInnerDescription(action)
    })
  }

  setInnerDescription(action:string){
    if(action && this.infoService.getData(action)){
      this.desccription = this.infoService.getData(action);
    } else{
      this.isRoot = true;
      this.executeFn = this.buttonMappings[this.defaultAction];
    }
  }
  
  private handleSeo() {
    this.metaService.setTitle('Text Conversion: Uppercase, Lowercase, Title and More');
    this.metaService.setDescription(`Text case converter - A set of functions that can be used to convert text to different cases, such as uppercase, lowercase, title case, and camel case. Perfect for formatting text for different purposes, such as headings, titles, and code.`);
    this.metaService.setKeywords("uppercase conversion, lowercase conversion, title case conversion, capitalized case conversion, camel case conversion, kebab case conversion, snake case conversion, inverse case conversion")
  }

  onSelect(executeFn: () => void) {
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
