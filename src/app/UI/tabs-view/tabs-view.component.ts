import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { webMinWidth } from 'src/app/utils/general';
import { WebTabsComponent } from './web-tabs/web-tabs.component';
import { MobileTabsComponent } from './mobile-tabs/mobile-tabs.component';

@Component({
  selector: 'app-tabs-view[pages][mainPath]',
  templateUrl: './tabs-view.component.html',
  styleUrls: ['./tabs-view.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule,WebTabsComponent,MobileTabsComponent]
})
export class TabsViewComponent implements OnInit {

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
  @Input('mainPath') mainPath = '';
  @Input({required:true}) tabsTitle = ''

  @Input('selectedTypeIndex') selectedTypeIndex = 0;
 
  @Input('pages') pages!: {
    title: string;
    path: string;
    iconSrc: string;
    items: {
      path: string;
      title: string;
      iconSrc: string;
    }[];
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



}
