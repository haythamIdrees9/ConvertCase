import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

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
    {path:'text-tools/text-case-converter',label:'Text Tools' ,icon:'assets/images/replace.svg'},
    {path:'programming-tools/encode-decode',label:'Programming Tools',icon:'assets/images/decode.svg'},
    // {path:'text-tools/text-manipulation',label:'Text Manipulation',icon:'assets/images/replace.svg'},
    {path:'/unit-converters',label:'Unit Converters',icon:'assets/images/unit.svg'},
  ]

  selectedRouteIndex = 1;
  constructor(private location: Location,private router:Router){

  }
  ngOnInit(): void {
    this.router.events.pipe(filter(change => change instanceof NavigationEnd)).subscribe(()=>{
      this.detectRouteIndex();
    })
  }

  detectRouteIndex(){
    let path = this.location.path();
    if(!path){
      path = this.menuRouts[0].path;
    }
    this.selectedRouteIndex = this.menuRouts.findIndex(item => item.path === path)
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
    if(this.isMenuOpened){
      this.stopScrolling();
    } else {
      this.enableScrolling();
    }
    this.isSearchOpened = false;
  }
  stopPropagation(event:Event){
    event.stopPropagation()
  }

  @HostListener('document:click')
  backToMainMode() {
    this.isSearchOpened = false;
    this.isMenuOpened = false;
    this.enableScrolling();
  }

  enableScrolling(){
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden auto'; 
    }
  }

  stopScrolling(){
    this.searchField?.nativeElement?.focus();
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden'; 
    }
  }

}