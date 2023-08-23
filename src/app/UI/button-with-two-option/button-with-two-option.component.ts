import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-with-two-option',
  templateUrl: './button-with-two-option.component.html',
  styleUrls: ['./button-with-two-option.component.scss'],
  standalone:true
})
export class ButtonWithTwoOptionComponent {
  @Output('onClick') onClick = new EventEmitter<{first:string,second:string}>();
  @Input('placeholder1') placeholder1!:string;
  @Input('placeholder2') placeholder2!:string;
  @Input('text') text!:string;
  @Input('apply') apply!:string;
  
  show:boolean = false;


  @HostListener('document:click')
  clickOutSide(){
    this.show = false;
  }
 }
 