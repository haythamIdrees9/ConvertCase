import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown[options][placeholder][inputAriaLabelledBy][listAriaLabelledBy][label][componentId]',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule]
})
export class DropdownComponent implements OnInit {  
  @ViewChild('container') container!:ElementRef;
  @Input() options:readonly any[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() inputAriaLabelledBy: string = '';
  @Input() label: string = '';
  @Input() selected: string = '';
  @Input() listAriaLabelledBy: string = '';
  @Input() componentId:string = "";
  @Output() selectedOption = new EventEmitter();
  isFilterShown:boolean = false;
  ngOnInit(): void {
  }

  @HostListener('document:click',['$event'])
  onDocumentClick(event:Event) {
    if(!this.container.nativeElement.contains(event.target)){
      this.closeDropdown();
    }
  }

  closeDropdown(){
    this.isFilterShown = false;
  }

  toggleDropdown() {
    this.isFilterShown = !this.isFilterShown;
  }

  onSelectOption(option:any) {
    this.selectedOption.emit(option);
    this.selected = option.label || this.selected;
    this.closeDropdown();
  }
}
