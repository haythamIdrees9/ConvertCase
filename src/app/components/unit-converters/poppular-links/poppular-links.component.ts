import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-poppular-links',
  templateUrl: './poppular-links.component.html',
  styleUrls: ['./poppular-links.component.scss'],
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class PoppularLinksComponent {
  @Input("popular") popular!: readonly { route: string, reverseRoute: string,labelRoute:string,labelReverseRoute:string }[];
  @Input("pairTitle") pairTitle!:string;
  @Input("popularTitle") popularTitle!:string;
}
