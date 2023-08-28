import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
      this.inputArea?.nativeElement?.focus()
    })
    const savedText = sessionStorage.getItem(this.storageKey);
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
    sessionStorage.setItem(this.storageKey, this.userText);
    this.onChangeEmitter.emit(this.userText)
  }

  clear(){
    this.userText = '';
  }

}
