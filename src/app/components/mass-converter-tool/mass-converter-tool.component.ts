import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mass-converter-tool',
  templateUrl: './mass-converter-tool.component.html',
  styleUrls: ['./mass-converter-tool.component.scss']
})
export class MassConverterToolComponent {
  text: string = '';
  toasterMessage: string = '';
  originalText = '';
  executeFn = () => { };
  storageKey = 'massCoverters';
  readonly buttonMappings: {[key: string]: any} = {
    'pounds-to-kilograms': this.poundsToKilograms,
    'kilograms-to-pounds': this.kilogramsToPounds,
    'ounces-to-grams': this.ouncesToGrams,
    'grams-to-ounces': this.gramsToOunces,
    'pounds-to-ounces': this.poundsToOunces,
    'ounces-to-pounds': this.ouncesToPounds,
    'milligrams-to-grams': this.milligramsToGrams,
    'grams-to-milligrams': this.gramsToMilligrams,
    'kilograms-to-tons': this.kilogramsToTons,
    'tons-to-kilograms': this.tonsToKilograms,
    'pounds-to-stones': this.poundsToStones,
    'stones-to-pounds': this.stonesToPounds,
  };
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const action = this.route.snapshot.params['action'];
    if (action && this.buttonMappings[action]){
      this.executeFn = this.buttonMappings[action]; 
    }    
  }
  

  clearTextArea() {
    this.text = '';
    this.originalText = ''
  }

  setOriginalText(text: string) {
    this.originalText = text;
    this.executeFn()
  }

  onSelect(executeFn: () => void) {
    this.executeFn = executeFn;
    if (this.originalText) {
      this.executeFn();
    } else {
      this.text = '';
    }
  }


  poundsToKilograms(): void {
    this.text = `${parseFloat(this.originalText) * 0.453592}`;
  }
  
  kilogramsToPounds(): void {
    this.text = `${parseFloat(this.originalText) / 0.453592}`;
  }
  
  ouncesToGrams(): void {
    this.text = `${parseFloat(this.originalText) * 28.3495}`;
  }
  
  gramsToOunces(): void {
    this.text = `${parseFloat(this.originalText) / 28.3495}`;
  }
  
  poundsToOunces(): void {
    this.text = `${parseFloat(this.originalText) * 16}`;
  }
  
  ouncesToPounds(): void {
    this.text = `${parseFloat(this.originalText) / 16}`;
  }
  
  milligramsToGrams(): void {
    this.text = `${parseFloat(this.originalText) * 0.001}`;
  }
  
  gramsToMilligrams(): void {
    this.text = `${parseFloat(this.originalText) * 1000}`;
  }
  
  kilogramsToTons(): void {
    this.text = `${parseFloat(this.originalText) * 0.00110231}`;
  }
  
  tonsToKilograms(): void {
    this.text = `${parseFloat(this.originalText) / 0.00110231}`;
  }
  
  poundsToStones(): void {
    this.text = `${parseFloat(this.originalText) * 0.0714286}`;
  }
  
  stonesToPounds(): void {
    this.text = `${parseFloat(this.originalText) / 0.0714286}`;
  }
  
}
