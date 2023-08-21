import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-converter',
  templateUrl: './text-converter.component.html',
  styleUrls: ['./text-converter.component.scss'],
})
export class TextConverterComponent implements OnInit {
  text: string = '';
  toasterMessage: string = '';
  toasterType: 'success' | 'error' | 'info' | 'warning' = 'success';
  constructor() { }

  ngOnInit(): void {
    const savedText = localStorage.getItem('convertedText');
    console.log('savedText', savedText);

    if (savedText) {
      this.text = savedText;
    }
  }

  convertToLowercase() {
    this.text = this.text.toLowerCase();
    this.convertText();
  }

  convertToUppercase() {
    this.text = this.text.toUpperCase();
    this.convertText();
  }

  convertToTitlecase() {
    this.text = this.text.toLowerCase();
    const minorWords = [
      'a',
      'an',
      'and',
      'as',
      'at',
      'but',
      'by',
      'for',
      'in',
      'nor',
      'of',
      'on',
      'or',
      'so',
      'the',
      'to',
      'up',
      'yet',
    ];
    this.text = this.text.replace(/(^|\n).+?($|\n)/g, (match) => {
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
    this.convertText();
  }

  convertToCapitalizedCase() {
    this.text = this.text.toLowerCase();
    this.text = this.text.replace(/\b\w/g, (txt) => txt.toUpperCase());
    this.convertText();
  }

  convertToInverseCase() {
    this.text = this.text
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
    this.convertText();
  }

  clearTextArea() {
    this.text = '';
  }

  copyText() {
    const textarea = document.createElement('textarea');
    textarea.textContent = this.text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    this.toasterMessage = 'Converted text copied to clipboard!';
    this.toasterType = 'success';

    // Clear the toaster message after 3 seconds
    setTimeout(() => {
      this.clearToasterMessage();
    }, 3000);

    // alert('Converted text copied to clipboard!');
  }

  clearToasterMessage() {
    this.toasterMessage = '';
    this.toasterType = 'success';
  }

  downloadText() {
    const blob = new Blob([this.text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted_text.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  convertText() {
    localStorage.setItem('convertedText', this.text);
  }
}
