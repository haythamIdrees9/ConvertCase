import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  
  ngAfterViewInit(): void {
    if (window.location.hostname === "localhost") {
      document.querySelectorAll(".ad").forEach((ad:any) => ad.style.display = "none");
    }
  }

}
