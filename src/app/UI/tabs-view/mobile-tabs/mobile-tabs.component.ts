import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-tabs',
  templateUrl: './mobile-tabs.component.html',
  styleUrls: ['./mobile-tabs.component.scss'],
  standalone:true,
  imports:[CommonModule,RouterModule]

})
export class MobileTabsComponent {
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
  @Input({required:true}) mainPath = ''
  @Input({required:true}) tabsTitle = ''

  @Input({required:true}) selectedTypeIndex = 0;
  @Input({required:true,alias:'pages'}) pages!: {
    title: string;
    path: string;
    iconSrc: string;
    items: {
      path: string;
      title: string;
      iconSrc: string;
    }[];
  }[];
  hoverIndexMenu: number = 0;
  isMobileModalVisible = false;



  showLinksModal() {
    this.isMobileModalVisible = true;
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden';
    }
  }

  @HostListener('document:click')
  hideLinksModal() {
    this.isMobileModalVisible = false;
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden auto';
    }
  }
}
