import { Component } from '@angular/core';

@Component({
  selector: 'app-text-manipulation',
  templateUrl: './text-manipulation.component.html',
  styleUrls: ['./text-manipulation.component.scss']
})
export class TextManipulationComponent {
  text: string = '';
  storageKey = 'convertedText'
  originalText = '';
  executeFn:any = () => { };
  columnWidth:number = 1;
  textRouterCount:number = 1;
  repetitions:number = 1;
  replacement: string = '';
  search: string = '';

  
  
  setOriginalText(text: string) {
    this.originalText = text;
    this.executeFn()
  }

  clearTextArea() {
    this.text = '';
    this.originalText = ''
  }

  textReverser() {
    this.text = this.originalText.split('').reverse().join('');
  }

  textRotator(textRouterCount:number = this.textRouterCount) {
    this.textRouterCount = textRouterCount;
    const rotatedText = [];
    for (let i = 0; i < this.originalText.length; i++) {
      const charCode = this.originalText.charCodeAt(i);
      rotatedText.push(String.fromCharCode(charCode + textRouterCount));
    }
    this.text = rotatedText.join('');
  }

  textColumnFormatter(columnWidth: number = this.columnWidth) {
    this.columnWidth = columnWidth;
    const formattedText = [];
    for (let i = 0; i < this.originalText.length; i += columnWidth) {
      const column = this.originalText.substring(i, columnWidth);
      formattedText.push(column);
    }
    this.text = formattedText.join('\n');
  }

  textTransposer() {
    const rows = this.originalText.split('\n');
    const transposedRows = [];
  
    for (let i = 0; i < rows[0].length; i++) {
      let transposedRow = '';
      for (const row of rows) {
        if (i < row.length) {
          transposedRow += row[i];
        }
      }
      transposedRows.push(transposedRow);
    }
  
    this.text = transposedRows.join('\n');
  }

  textRepeater(repetitions: number = this.repetitions) {
    this.repetitions = repetitions;
    this.text = this.originalText.repeat(repetitions);
  }

  textReplacer(search: string = this.search, replacement: string = this.replacement) {
    this.replacement = replacement;
    this.search = search;
    this.text = this.originalText.split(search).join(replacement);
  }

  textRotate(rotation: number) {
    const rotatedText = [];
    for (let i = 0; i < this.originalText.length; i++) {
      const charCode = this.originalText.charCodeAt(i);
      rotatedText.push(String.fromCharCode(charCode + rotation));
    }
    this.text = rotatedText.join('');
  }

  textRandomization() {
    const characters = this.originalText.split('');
  
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
  
    this.text = characters.join('');
  }

  textSorting() {
    const characters = this.originalText.split('');
    characters.sort();
    this.text = characters.join('');
  }

}
