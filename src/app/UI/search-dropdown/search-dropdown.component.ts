import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-dropdown[options][placeholder][filterFn][inputAriaLabelledBy][listAriaLabelledBy][label][componentId]',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule]
})
export class SearchDropdownComponent implements OnInit {  
  @ViewChild('container') container!:ElementRef;
  @Input('options')  set optionsVal(options:readonly any[]){
    this.options = options;  
    this.filteredOptions = this.options;
    this.searchQuery =  this.selected;
  }
  options:readonly any[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() inputAriaLabelledBy: string = '';
  @Input() label: string = '';
  @Input('selected') set selectedVal(selected: string){
    this.selected = selected;
    this.searchQuery =  this.selected;
  }
  
  selected: string = '';
  @Input() listAriaLabelledBy: string = '';
  @Input() filterFn!: (query: string,option:any) => any ;
  @Input() searchQuery:string = this.selected;
  @Input() componentId:string = "";
  @Output() selectedOption = new EventEmitter();
  filteredOptions: readonly any [] = [];
  isFilterShown:boolean = false;
  ngOnInit(): void {
    this.filteredOptions = this.options;
    this.searchQuery =  this.selected;
  }

  filterOptions(query: string) {
    this.filteredOptions = this.options.filter(option => this.filterFn(query,option));
    this.isFilterShown = true;
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
    this.searchQuery = option.label || this.searchQuery;
    this.closeDropdown();
  }
}
