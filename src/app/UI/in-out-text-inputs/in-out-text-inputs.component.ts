import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-in-out-text-inputs[result][storageKey]',
  templateUrl: './in-out-text-inputs.component.html',
  styleUrls: ['./in-out-text-inputs.component.scss']
})
export class InOutTextInputComponent implements OnInit {
  @ViewChild('input_area') set inputRef(inputArea:ElementRef){
    this.inputArea = inputArea;
    this.inputArea?.nativeElement?.focus()
  }
  inputArea!:ElementRef;
  userText:string = '';
  @Input('result') result:string = '';
  @Input('storageKey') storageKey:string = '';
  @Input('type') type:string = 'text';
  @Output() onChangeEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    const savedText = localStorage.getItem(this.storageKey);
    if (savedText) {
      setTimeout(()=>{
        this.userText = savedText;
        this.onChangeEmitter.emit(this.userText)
      });
    }
  }

  focus(){
    this.inputArea.nativeElement.focus()
  }

  onInputChange(){
    localStorage.setItem(this.storageKey, this.userText);
    this.onChangeEmitter.emit(this.userText)
  }

  clear(){
    this.userText = '';
  }

}
