import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomToasterComponent } from '../custom-toaster/custom-toaster.component';

@Component({
  selector: 'app-result-actions-btn',
  templateUrl: './result-actions-btn.component.html',
  styleUrls: ['./result-actions-btn.component.scss'],
  standalone:true,
  imports:[CustomToasterComponent]
})
export class ResultActionsBtnComponent {
  @Output('onClear') onClear = new EventEmitter()
  @Input('text') text!:string;
  toasterMessage: string = '';


  copyText() {
    const textarea = document.createElement('textarea');
    textarea.textContent = this.text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    this.toasterMessage = 'Converted text copied to clipboard!';
    // Clear the toaster message after 3 seconds
    setTimeout(() => {
      this.clearToasterMessage();
    }, 3000);
  }

  clearToasterMessage() {
    this.text = '';
  }

  downloadText() {
    const blob = new Blob([this.text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted_text.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

}
