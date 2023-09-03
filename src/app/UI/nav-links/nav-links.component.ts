import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList,  ViewChild, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class NavLinksComponent implements OnInit{

  @ViewChild('dropdown') set dropdownVal(dropdown: ElementRef ){
    dropdown.nativeElement.size = Math.min(6,this.items.length)
  }

  @ViewChildren('items') set itemsVal(itemsList: QueryList<ElementRef>){
    this.itemsList = itemsList;
      if(this.selectedIndex !== -1  && this.selectedIndex < itemsList?.toArray().length){
          itemsList?.toArray()[this.selectedIndex].nativeElement?.scrollIntoView({  block: 'center' });
      }
  }
  itemsList!: QueryList<ElementRef>

  @Input('items') items: readonly {key:string,label:string}[] = [{key:'test1',label:'test'},{key:'test2',label:'test'}]
  @Input('selected') set selectedVal(selected:string){
    this.selected = selected;
    this.selectedIndex = this.items.findIndex(item => this.selected && this.selected === item.key)
    if(this.selectedIndex !== -1  && this.selectedIndex < this.itemsList?.toArray().length){
        this.itemsList.toArray()[this.selectedIndex].nativeElement?.scrollIntoView({ block: 'center' });
    }
  }
  selected!:string;
  @Input('prefix') prefix:string = ''
  @Input('suffix') suffix:string = ''
  @Output('onSelect') onSelect = new EventEmitter();
  selectedIndex = 0
  ngOnInit(): void {
    if(this.items?.length){
      this.selectedIndex = this.items.findIndex(item => this.selected && this.selected === item.key)
    }

  }
}
