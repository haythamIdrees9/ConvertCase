import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-dropdown[options][placeholder][filterFn][inputAriaLabelledBy][listAriaLabelledBy][label]',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule]
})
export class SearchDropdownComponent implements OnInit {

  @Input() options:readonly any[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() inputAriaLabelledBy: string = '';
  @Input() label: string = '';
  @Input() listAriaLabelledBy: string = '';
  @Input() filterFn!: (query: string,option:any) => any ;
  @Input() searchQuery:string = "";
  @Output() selectedOption = new EventEmitter();
  filteredOptions: readonly any [] = [];
  isFilterShown:boolean = false;
  ngOnInit(): void {
    this.filteredOptions = this.options;
  }

  filterOptions(query: string) {
    this.filteredOptions = this.options.filter(option => this.filterFn(query,option));
    this.isFilterShown = true;
  }

  @HostListener('document:click')
  closeDropdown() {
    this.isFilterShown = false;
  }

  onSelectOption(option:any) {
    this.selectedOption.emit(option);
    this.searchQuery = option.label || this.searchQuery;
    this.closeDropdown();
  }
}
