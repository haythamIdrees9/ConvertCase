import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temperature-converters',
  templateUrl: './temperature-converters.component.html',
  styleUrls: ['./temperature-converters.component.scss']
})
export class TemperatureConvertersComponent {
  text: string = '';
  toasterMessage: string = '';
  originalText = '';
  executeFn = () => { };
  storageKey = 'TemperatureConverter';

  buttonMappings: {[key: string]: any} = {
    'celsius-to-fahrenheit': this.celsiusToFahrenheit,
    'fahrenheit-to-celsius': this.fahrenheitToCelsius,
    'kelvin-to-celsius': this.kelvinToCelsius,
    'celsius-to-kelvin': this.celsiusToKelvin,
    'kelvin-to-fahrenheit': this.kelvinToFahrenheit,
    'fahrenheit-to-kelvin': this.fahrenheitToKelvin
  };
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const action = this.route.snapshot.params['action'];
    if (action && this.buttonMappings[action]){
      this.executeFn = this.buttonMappings[action]; 
    }    
  }
  
  onSelect(executeFn: () => void) {
    this.executeFn = executeFn;
    if (this.originalText) {
      this.executeFn();
    } else {
      this.text = '';
    }
  }
  
  setOriginalText(text: string) {
    this.originalText = text;
    if (this.originalText) {
      this.executeFn();
    } else {
      this.text = '';
    }
  }

  clearTextArea() {
    this.text = '';
    this.originalText = '';
  }
  
  celsiusToFahrenheit(): void {
    this.text = `${(parseFloat(this.originalText) * 9/5) + 32}`;
  }

  fahrenheitToCelsius(): void {
    this.text = `${(parseFloat(this.originalText) - 32) * 5/9}`;
  }

  kelvinToCelsius(): void {
    this.text = `${parseFloat(this.originalText) - 273.15}`;
  }

  celsiusToKelvin(): void {
    this.text = `${parseFloat(this.originalText) + 273.15}`;
  }

  kelvinToFahrenheit(): void {
    this.text = `${(parseFloat(this.originalText) - 273.15) * 9/5 + 32}`;
  }

  fahrenheitToKelvin(): void {
    this.text = `${(parseFloat(this.originalText) - 32) * 5/9 + 273.15}`;
  }

}
