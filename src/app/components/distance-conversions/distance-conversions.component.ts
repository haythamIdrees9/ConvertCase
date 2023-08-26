import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-distance-conversions',
  templateUrl: './distance-conversions.component.html',
  styleUrls: ['./distance-conversions.component.scss']
})
export class DistanceConversionsComponent {
  text: string = '';
  toasterMessage: string = '';
  originalText = '';
  executeFn = () => { };
  storageKey = 'distanseConversion';

  buttonMappings: {[key: string]: any} = {
    'miles-to-kilometers': this.milesToKilometers,
    'kilometers-to-miles': this.kilometersToMiles,
    'feet-to-meters': this.feetToMeters,
    'meters-to-feet': this.metersToFeet,
    'yards-to-meters': this.yardsToMeters,
    'meters-to-yards': this.metersToYards,
    'inches-to-centimeters': this.inchesToCentimeters,
    'centimeters-to-inches': this.centimetersToInches,
    'millimeters-to-inches': this.millimetersToInches,
    'inches-to-millimeters': this.inchesToMillimeters,
    'centimeters-to-meters': this.centimetersToMeters,
    'meters-to-centimeters': this.metersToCentimeters,
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
  


  milesToKilometers(): void {
    this.text = `${parseFloat(this.originalText) * 1.60934}`;
  }
  
  kilometersToMiles(): void {
    this.text = `${parseFloat(this.originalText) / 1.60934}`;
  }
  
  feetToMeters(): void {
    this.text = `${parseFloat(this.originalText) * 0.3048}`;
  }
  
  metersToFeet(): void {
    this.text = `${parseFloat(this.originalText) / 0.3048}`;
  }
  
  yardsToMeters(): void {
    this.text = `${parseFloat(this.originalText) * 0.9144}`;
  }
  
  metersToYards(): void {
    this.text = `${parseFloat(this.originalText) / 0.9144}`;
  }
  
  inchesToCentimeters(): void {
    this.text = `${parseFloat(this.originalText) * 2.54}`;
  }
  
  centimetersToInches(): void {
    this.text = `${parseFloat(this.originalText) / 2.54}`;
  }
  
  millimetersToInches(): void {
    this.text = `${parseFloat(this.originalText) * 0.03937}`;
  }
  
  inchesToMillimeters(): void {
    this.text = `${parseFloat(this.originalText) / 0.03937}`;
  }
  
  centimetersToMeters(): void {
    this.text = `${parseFloat(this.originalText) * 0.01}`;
  }
  
  metersToCentimeters(): void {
    this.text = `${parseFloat(this.originalText) * 100}`;
  }
  

}
