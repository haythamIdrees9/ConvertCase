import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-always-open',
  templateUrl: './select-always-open.component.html',
  styleUrls: ['./select-always-open.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class SelectAlwaysOpenComponent {
  @ViewChild('dropdown') set dropdownVal(dropdown: ElementRef ){
    dropdown.nativeElement.size = Math.min(6,this.items.length)
  }

  @Input('items') items: readonly {key:string,label:string}[] = [{key:'test1',label:'test'},{key:'test2',label:'test'}]
  @Input('selected') selected!:{key:string,label:string};
  @Output('onSelect') onSelect = new EventEmitter()
  onSelectItem(selectedItem:{key:string,label:string}): void {
    this.onSelect.emit(selectedItem);
    this.selected = selectedItem;
  }

}
