import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService { 
   readonly domain = "http://convertcase.me/"
  constructor(@Inject(DOCUMENT) private doc:Document) {}
  
  createLinkForCanonicalURL(link:string) {
    let canonicalLink: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink = this.doc.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(canonicalLink);
    }
    
    canonicalLink.setAttribute('href', `${this.domain}${link}`);
   }
} 