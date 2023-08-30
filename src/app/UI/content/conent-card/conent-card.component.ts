import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conent-card',
  templateUrl: './conent-card.component.html',
  styleUrls: ['./conent-card.component.scss']
})
export class ConentCardComponent {
@Input('showAdd') showAdd!:boolean;
}
