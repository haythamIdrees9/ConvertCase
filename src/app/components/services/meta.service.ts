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

  setMeta(name:string,content:string){
    this.meta.updateTag({name,content})
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