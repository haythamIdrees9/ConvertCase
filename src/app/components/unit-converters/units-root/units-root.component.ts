import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-units-root',
  templateUrl: './units-root.component.html',
  styleUrls: ['./units-root.component.scss']
})
export class UnitsRootComponent implements OnInit {


  constructor(private metaService:MetaService,private router:Router) {
 }

  ngOnInit() {
    this.updateSeoData();
  }

  updateSeoData() {
    this.metaService.setTitle("Welcome to the Unit Converter");
    this.metaService.setDescription("Explore the world of effortless unit conversions with our versatile Unit Converter tool. Whether you're a professional in the fields of science, engineering, or simply someone who frequently encounters different measurement systems, our converter is designed to simplify your work and make everyday calculations a breeze.");
    this.metaService.setKeywords("Unit Converter, unit conversions, measurement systems, length converter, temperature converter, area converter, pressure converter, numbers converter, weight and mass converter, volume converter, fuel consumption converter, data storage converter, energy converter, power converter, force converter, velocity converter, time converter, speed converter, angle converter");
  }
  
  startConversion(){
    this.router.navigate(['','unit-converters','temperature'],{replaceUrl:true})
  }

}
