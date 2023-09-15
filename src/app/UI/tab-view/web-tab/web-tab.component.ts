import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-web-tab',
  templateUrl: './web-tab.component.html',
  styleUrls: ['./web-tab.component.scss'],
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class WebTabComponent {
  @ViewChildren('title') set titleVal(titles: QueryList<ElementRef>) {
    if (titles) {
      let left = 0;
      setTimeout(()=>{
        this.titlesRef = [];
        titles.toArray().forEach(title => {
          this.titlesRef.push({ width: title.nativeElement.clientWidth + 32, left: left });
          left += title.nativeElement.clientWidth + 16;
        })
      })
    }
  }
  titlesRef: { width: number, left: number }[] = [];
  @Input({required:true,alias:'mainPath'}) mainPath = ''
  @Input({required:true,alias:'selectedTypeIndex'}) selectedTypeIndex = 0;
  @Input({required:true,alias:'pages'}) pages!: {
    title: string;
    path: string;
    iconSrc: string;
  }[];

  openedMenu: number = -1;
  hoverIndexMenu: number = 0;


  @HostListener('document:click')
  hideLinksModal() {
    this.openedMenu = -1;
  }
  
}
