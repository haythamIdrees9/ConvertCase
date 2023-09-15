import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { webMinWidth } from 'src/app/utils/general';

@Component({
  selector: 'app-tab-view[pages][mainPath]',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class TabViewComponent implements OnInit {

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
  @Input('mainPath') mainPath = ''
  @Input('selectedTypeIndex') selectedTypeIndex = 0;
 
  @Input('pages') pages!: {
    title: string;
    path: string;
    iconSrc: string;
  }[];

  openedMenu: number = -1;
  hoverIndexMenu: number = 0;
  isWebView = false;
  isMobileModalVisible = false;

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window) {
      this.isWebView = window.innerWidth >= webMinWidth;
    }
  }

  showLinksModal() {
    this.isMobileModalVisible = true;
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden';
    }
  }

  @HostListener('document:click')
  hideLinksModal() {
    this.openedMenu = -1;
    this.isMobileModalVisible = false;
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden auto';
    }
  }

}
