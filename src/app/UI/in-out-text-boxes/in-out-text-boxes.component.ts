import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-in-out-text-boxes[result][storageKey]',
  templateUrl: './in-out-text-boxes.component.html',
  styleUrls: ['./in-out-text-boxes.component.scss']
})
export class InOutTextBoxesComponent implements OnInit {
  @ViewChild('input_area') set inputRef(inputArea:ElementRef){
    this.inputArea = inputArea;
    this.inputArea?.nativeElement?.focus()
  }
  inputArea!:ElementRef;
  userText:string = '';
  @Input('result') result:string = '';
  @Input('storageKey') storageKey:string = '';
  @Output() onChangeEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    const savedText = sessionStorage.getItem(this.storageKey);
    if (savedText?.trim()) {
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
    sessionStorage.setItem(this.storageKey, this.userText);
    this.onChangeEmitter.emit(this.userText)
  }

  clear(){
    this.userText = '';
  }

}
