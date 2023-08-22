import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('search_field') searchField!:ElementRef ; 
  isSearchOpened: boolean = false;
  isMenuOpened: boolean = false;
  menuRouts = [
    {path:'/home',label:'HOME'},
    {path:'/books',label:'BOOKS'},
    {path:'/reviews',label:'REVIEWS'},
    {path:'/news',label:'NEWS'},
    {path:'/contact',label:'CONTACTS'},
  ]

  selectedRouteIndex = 1;

  toggleSearchState(event: Event) {
    event.stopPropagation()
    this.isSearchOpened = !this.isSearchOpened;
    if(this.isSearchOpened && this.searchField?.nativeElement){
      setTimeout(()=>{
        this.searchField.nativeElement.focus()
      })
    }
  }

  toggleMenuState(event: Event){
    event.stopPropagation()
    this.isMenuOpened = !this.isMenuOpened;
    this.isSearchOpened = false;
  }
  stopPropagation(event:Event){
    event.stopPropagation()
  }

  @HostListener('document:click')
  backToMainMode() {
    this.isSearchOpened = false;
    this.isMenuOpened = false;
  }

  onSearch(term:string){
    this.backToMainMode();
  }
}