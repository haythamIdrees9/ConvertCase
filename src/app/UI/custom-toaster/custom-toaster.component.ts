import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-toaster',
  templateUrl: './custom-toaster.component.html',
  styleUrls: ['./custom-toaster.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class CustomToasterComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'success';
  @Output() closeToast: EventEmitter<void> = new EventEmitter<void>();
}
