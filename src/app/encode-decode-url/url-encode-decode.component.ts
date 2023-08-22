import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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


  clearTextArea() {
    this.text = '';
    this.originalText = ''
  }

}
