import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-expandable-panal',
  templateUrl: './expandable-panal.component.html',
  styleUrls: ['./expandable-panal.component.scss']
})
export class ExpandablePanalComponent {
  opened: boolean = false;


  @HostListener('document:click', ["$event"])
  closePanal(event: Event) {
    this.opened = false;
  }

  openPanal() {
    if(!this.opened){
      setTimeout(()=>{
        this.opened = true;
      })
    }
  }

}
