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

  @Input('pages')  set pagesVal(pages : { path: string, label: string,pathPath?:string[] }[]){
    this.pages = pages.map(page => {
      page['pathPath'] = this.getPath(page.path)
      return page
    })
    
  }
  pages : { path: string, label: string,pathPath?:string[] }[] = [];
  @Input('title') title : string = "";
  @Input('parentPath') parentPath : string[] = [""];
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

  getPath(link:string){
    return ['',...this.parentPath,link];
  }

}
