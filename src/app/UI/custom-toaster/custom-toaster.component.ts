import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-toaster',
  templateUrl: './custom-toaster.component.html',
  styleUrls: ['./custom-toaster.component.scss']
})
export class CustomToasterComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'success';
  @Output() closeToast: EventEmitter<void> = new EventEmitter<void>();
}
