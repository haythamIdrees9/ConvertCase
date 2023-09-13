import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinksViewComponent } from 'src/app/UI/links-view/links-view.component';
import { webMinWidth } from 'src/app/utils/general';

@Component({
  selector: 'app-links-container',
  templateUrl: './links-container.component.html',
  styleUrls: ['./links-container.component.scss'],
  standalone: true,
  imports: [LinksViewComponent, CommonModule, RouterModule]
})
export class LinksContainerComponent implements OnInit {

  @ViewChildren('title') set titleVal(titles: QueryList<ElementRef>) {
    if (titles) {
      let left = 0;
      this.titlesRef = [];
      titles.toArray().forEach(title => {
        this.titlesRef.push({ width: title.nativeElement.clientWidth + 32, left: left });
        left += title.nativeElement.clientWidth + 16;
      })
      // this.titlesRef = title.toArray();
      console.log('this.titlesRef', this.titlesRef);
    }
  }
  titlesRef: { width: number, left: number }[] = [];
  mainPath = 'calculators'
  pages = [
    {
      title: 'Health and Fitness',
      mainPath: 'health-and-fitness',
      iconSrc: 'assets/images/heart-plus.svg',
      items: [
        { path: 'bmi', label: 'BMI Calcolator', iconSrc: 'assets/images/heart.svg' },
        { path: 'bmr', label: 'BMR Calcolator', iconSrc: 'assets/images/heart.svg' },
        { path: 'calorie-needed-calculator', label: 'Calorie Calculator', iconSrc: 'assets/images/heart.svg' },
      ]
    },
    {
      title: 'Other Calculators',
      mainPath: '.',
      iconSrc: 'assets/images/list.svg',
      items: [
        { path: 'bmi', label: 'BMI Calcolator', iconSrc: 'assets/images/heart.svg' },
        { path: 'bmr', label: 'BMR Calcolator', iconSrc: 'assets/images/heart.svg' },
        { path: 'calorie-needed-calculator', label: 'Calorie Calculator', iconSrc: 'assets/images/heart.svg' },
      ]
    },
    {
      title: 'Other Calculators',
      mainPath: '.',
      iconSrc: 'assets/images/list.svg',
      items: [
        { path: 'bmi', label: 'BMI Calcolator', iconSrc: 'assets/images/heart.svg' },
        { path: 'bmr', label: 'BMR Calcolator', iconSrc: 'assets/images/heart.svg' },
        { path: 'calorie-needed-calculator', label: 'Calorie Calculator', iconSrc: 'assets/images/heart.svg' },
      ]
    }
  ];

  openedMenu: number = -1;
  hoverIndexMenu: number = 0;
  selectedTypeIndex = 0;
  isWebView = false;
  isMobileModalVisible = false;
  @HostListener('document:click')
  hideLinks() {
    this.openedMenu = -1;
  }

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
    this.isMobileModalVisible = false;
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden auto'; 
    }
  }

}
