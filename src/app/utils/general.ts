import { ElementRef } from "@angular/core";

export const webMinWidth = 900;

export function focusWeb(element:ElementRef){
    if(!isMobile()){
        element?.nativeElement?.focus()
    }
}

export function isMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) =>  navigator.userAgent.match(toMatchItem));
  
  }