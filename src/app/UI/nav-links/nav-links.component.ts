import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class NavLinksComponent {
  @ViewChild('dropdown') set dropdownVal(dropdown: ElementRef ){
    dropdown.nativeElement.size = Math.min(6,this.items.length)
  }

  @Input('items') items: readonly {key:string,label:string}[] = [{key:'test1',label:'test'},{key:'test2',label:'test'}]
  @Input('selected') selected!:string;
  @Input('prefix') prefix:string = ''
  @Input('suffix') suffix:string = ''
  @Output('onSelect') onSelect = new EventEmitter();
}
