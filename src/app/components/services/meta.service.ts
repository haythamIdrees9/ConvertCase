import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { minorWords } from 'src/app/utils/words';

@Injectable({ providedIn: 'root' })
export class MetaService {

  constructor(private meta:Meta,private title:Title) {

  }

  setTitle(title:string){
    this.title.setTitle(this.convertToTitleCase(title.replace(/-/g,' ')))
  }

  setKeywords(keywords:string){
    this.meta.updateTag({name:'keywords',content:keywords})
  }

  setDescription(description:string){
    this.meta.updateTag({name:'description',content:description})

  }

  private convertToTitleCase(originalText:string) {
    return originalText.replace(/(^|\n).+?($|\n)/g, (match) => {
      return match.replace(/\b\w+/g, (word) => {
        if (
          !minorWords.includes(word.toLowerCase()) ||
          word === word.toUpperCase()
        ) {
          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        } else {
          return word.toLowerCase();
        }
      });
    });
  }
}