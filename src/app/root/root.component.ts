import { Component, OnInit } from '@angular/core';
import { MetaService } from '../components/services/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  appName = "Convert Case";




  constructor(private metaService: MetaService) {
  }

  ngOnInit() {
    this.updateSeoData();
  }

  updateSeoData() {
    this.metaService.setTitle("Convert Case - Text Transformation & Utility Tool");
    this.metaService.setDescription("Welcome to Convert Case, your all-in-one textual content and utility device. Whether you're a developer, a writer, or simply someone who loves gambling with text, our app offers a extensive variety of capabilities to make your life less difficult and greater creative.");
    this.metaService.setKeywords("Convert Case, text transformation, utility tool, text conversion, text manipulation, utility calculators, text transformation functions, additional features");
  }


}
