import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-viewer',
  templateUrl: './img-viewer.component.html',
  styleUrls: ['./img-viewer.component.scss'],
  standalone:true
})
export class ImgViewerComponent {

  @Input({required:true,alias:'src'}) src!:string;
  @Input({required:true,alias:'alt'}) alt!:string;
  @Input({required:true,alias:'attribution'}) attribution!:{name:string,externalLink:string};
}
