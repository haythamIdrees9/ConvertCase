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
    {path:'/text-case-tools',label:'Text Convert Case'},
    {path:'/url-encode-decode',label:'URL Encoding and Decoding'},
    {path:'/text-manipulation',label:'Text Manipulation'},
    {path:'/temperature-converters',label:'Temperature Converstion'},
    {path:'/distance-converters',label:'Distance Converters'},
    
    
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