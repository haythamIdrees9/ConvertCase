import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-with-counter[placeholder][text]',
  templateUrl: './button-with-counter.component.html',
  styleUrls: ['./button-with-counter.component.scss'],
  standalone:true
})
export class ButtonWithCounterComponent {
 @Output('onClick') onClick = new EventEmitter<number>();
 @Input('placeholder') placeholder!:string;
 @Input('text') text!:string;
 @Input('formInfo') formInfo!:string;

 show:boolean = false;


 @HostListener('document:click')
 clickOutSide(){
   this.show = false;
 }
}
