import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchDropdownComponent } from '../search-dropdown/search-dropdown.component';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss'],
  standalone: true,
  imports: [CommonModule, SearchDropdownComponent]
})
export class DateSelectorComponent {
  // Define arrays for days, months, and years
  days: { key: number; label: number; }[] = [];
  months: { key: number; label: number; }[] = [];
  years: { key: number; label: number; }[] = [];

  // Default selected values
  @Input() selectedDay: number = new Date().getDate();
  @Input() selectedMonth: number = new Date().getMonth() + 1; // Adding 1 because months are 0-indexed
  @Input() selectedYear: number = new Date().getFullYear();
  @Input() componentId: string = "";
  @Output() onChangeEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // Initialize the arrays with appropriate values
    this.initializeDays();
    this.initializeMonths();
    this.initializeYears();
  }

  filterYearFn = (query: string, option: any) => {
    if (!isNaN(Number(query))) {
      this.selectedYear = Number(query);
      this.onChange()
    }
    return option.key == query;
  }
  
  filterMonthsFn = (query: string, option: any) => {
    if (!isNaN(Number(query)) && Number(query) <= 12) {
      this.selectedMonth = Number(query);
      this.onChange()
    }
    return option.key == query;
  }

  filterDaysFn = (query: string, option: any) => {
    if (!isNaN(Number(query)) && Number(query) < this.days.length) {
      this.selectedMonth = Number(query);
      this.onChange()
    }
    return option.key == query;
  }

  filterFn(query: string, option: any) {
    return option.key == query;
  }

  onChange() {
    let date = new Date(this.selectedYear, this.selectedMonth, this.selectedDay);
    date.setFullYear(this.selectedYear)
    this.onChangeEmitter.emit(date)
  }

  // Function to initialize the days array based on the selected month and year
  initializeDays(): void {
    const daysInMonth = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
    this.days = Array.from({ length: daysInMonth }, (_, i) => ({ key: i + 1, label: i + 1 }));
    if (this.selectedDay > this.days.length) {
      this.selectedDay = this.days.length;
    }
  }

  // Function to initialize the months array
  initializeMonths(): void {
    this.months = Array.from({ length: 12 }, (_, i) => ({ key: i + 1, label: i + 1 }));
  }

  // Function to initialize the years array (adjust the range as needed)
  initializeYears(): void {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100; // Adjust the range as needed
    this.years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => ({ key: startYear + i, label: startYear + i })).reverse();
  }

  // Function to handle changes in the selected month and update the days array
  onMonthChange(): void {
    this.initializeDays();
  }
}
