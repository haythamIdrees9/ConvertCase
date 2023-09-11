import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-links-view',
  templateUrl: './links-view.component.html',
  styleUrls: ['./links-view.component.scss'],
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class LinksViewComponent {

  @Input('pages') pages : { path: string, label: string }[] = [];
  @Input('title') title : string = "";
  @Input('ParentPath') ParentPath : string = "";
  @Input('mobStart') mobStart : string = "lg";
  
  isLinksModalVisible: boolean = false;
  showLinksModal() {
    this.isLinksModalVisible = true;
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden'; 
    }
  }
  
  @HostListener('document:click')
  hideLinksModal() {
    this.isLinksModalVisible = false;
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden auto'; 
    }
  }

}
