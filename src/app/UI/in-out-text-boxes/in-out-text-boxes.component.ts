import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { focusWeb } from 'src/app/utils/general';

@Component({
  selector: 'app-in-out-text-boxes[result][storageKey]',
  templateUrl: './in-out-text-boxes.component.html',
  styleUrls: ['./in-out-text-boxes.component.scss']
})
export class InOutTextBoxesComponent implements OnInit {
  @ViewChild('input_area') set inputRef(inputArea: ElementRef) {
    this.inputArea = inputArea;
    focusWeb(this.inputArea)
  }
  inputArea!: ElementRef;
  userText: string = '';
  @Input('result') set resultVal(result: string) {
    this.result = result;
    this.outPutInputInfo = this.countWordsLinesCharacters(this.result);
  }
  result: string = '';
  @Input('storageKey') storageKey: string = '';
  @Output() onChangeEmitter = new EventEmitter();
  defaultInfo =  `0 words, 0 lines, and 0 characters`;
  userInputInfo: string = this.defaultInfo;
  outPutInputInfo: string = this.defaultInfo;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      focusWeb(this.inputArea)
    })

    const savedText = sessionStorage.getItem(this.storageKey);
    if (savedText?.trim().toLowerCase()) {
      setTimeout(() => {
        this.userText = savedText;
        this.onChangeEmitter.emit(this.userText);
        this.userInputInfo = this.countWordsLinesCharacters(this.userText);
      });
    }
  }

  focus(){
    focusWeb(this.inputArea)
  }

  onInputChange() {
    sessionStorage.setItem(this.storageKey, this.userText);
    this.onChangeEmitter.emit(this.userText)
    this.userInputInfo = this.countWordsLinesCharacters(this.userText);
  }

  clear() {
    this.userText = '';
    this.userInputInfo = this.defaultInfo;
    sessionStorage.setItem(this.storageKey, this.userText);
  }


  countWordsLinesCharacters(str: string) {
    if(str?.trim().toLowerCase().length === 0){
      return this.defaultInfo;
    }
    const words = str.split(" ");
    const wordCount = words.length;
    const linesCount = str.split("\n").length;
    const charactersCount = str.length;
    return `${wordCount} words, ${linesCount} lines, and ${charactersCount} characters.`;
  }


}


