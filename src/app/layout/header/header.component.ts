import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @ViewChild('search_field') searchField!:ElementRef ; 
  isSearchOpened: boolean = false;
  isMenuOpened: boolean = false;
  menuRouts = [
    {path:'/text-case-tools',label:'Text Convert Case'},
    {path:'/url-encode-decode',label:'URL Encoding and Decoding'},
  ]

  selectedRouteIndex = 1;
  constructor(private location: Location){

  }
  ngOnInit(): void {
    const path = this.location.path();
    this.selectedRouteIndex = this.menuRouts.findIndex(item => item.path === path)
    console.log('path',path);
    
  }

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

}