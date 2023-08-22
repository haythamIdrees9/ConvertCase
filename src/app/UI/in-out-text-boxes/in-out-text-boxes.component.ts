import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-in-out-text-boxes[result][storedKey]',
  templateUrl: './in-out-text-boxes.component.html',
  styleUrls: ['./in-out-text-boxes.component.scss']
})
export class InOutTextBoxesComponent implements OnInit {
  userText:string = '';
  @Input('result') result:string = '';
  @Input('storedKey') storedKey:string = '';
  @Output() onChangeEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    const savedText = localStorage.getItem(this.storedKey);
    if (savedText) {
      this.userText = savedText;
      this.onChangeEmitter.emit(this.userText)
    }
  }

  onInputChange(){
    localStorage.setItem(this.storedKey, this.userText);
    this.onChangeEmitter.emit(this.userText)
  }

  clear(){
    this.userText = '';
  }

}
