import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { focusWeb } from 'src/app/utils/general';

@Component({
  selector: 'app-in-out-text-inputs[result][storageKey]',
  templateUrl: './in-out-text-inputs.component.html',
  styleUrls: ['./in-out-text-inputs.component.scss']
})
export class InOutTextInputComponent implements OnInit {
  @ViewChild('input_area') set inputRef(inputArea:ElementRef){
    this.inputArea = inputArea;
    focusWeb(this.inputArea)
  
  }
  inputArea!:ElementRef;
  @Input('result') result:string = '';
  @Input('storageKey') storageKey:string = '';
  @Input('type') type:string = 'text';
  @Input('userText') userText:string = '';
  @Input('switchLink') switchLink:string = '';
  @Input('placeholder') placeholder:string = 'Enter text here...';
  
  @Output() onChangeEmitter = new EventEmitter();
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      focusWeb(this.inputArea)
    })
    const savedText = sessionStorage.getItem(this.storageKey);
    if (savedText) {
      setTimeout(()=>{
        this.userText = savedText;
        this.onChangeEmitter.emit(this.userText)
      });
    }
  }

  onInputChange(){
    sessionStorage.setItem(this.storageKey, this.userText);
    this.onChangeEmitter.emit(this.userText)
  }

  clear(){
    this.userText = '';
  }

  isMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) =>  navigator.userAgent.match(toMatchItem));
  
  }

}
