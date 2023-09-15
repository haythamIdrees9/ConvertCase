import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, first, take, tap } from 'rxjs';


@Component({
  selector: 'app-text-tools-parent',
  templateUrl: './text-tools-parent.component.html',
  styleUrls: ['./text-tools-parent.component.scss', '../../container.scss']
})
export class TextToolsParentComponent implements OnInit {
  selectedTypeIndex = 0;
  pages = [ 
    { path: 'text-case-converter', title: 'Text Converter' , iconSrc:'assets/images/text-height.svg'}, 
    { path: 'text-manipulation', title: 'text Manipulation', iconSrc:'assets/images/a.svg' }
  ];
  constructor(private router:Router){

  }
  
  ngOnInit(): void {
    let isFirstEvent = true;

    this.router.events.pipe(
      filter((event) => isFirstEvent || event instanceof NavigationEnd),
      tap(() => isFirstEvent = false)
    ).subscribe((event) => {
      const url = this.router.url.split('/').filter(item => !!item);
      if(url.length > 1){
        this.selectedTypeIndex = Math.max(
          0,
          this.pages.findIndex((type) => type.path === url[1])
          );
      }
    });
    
    
    
  }

}
