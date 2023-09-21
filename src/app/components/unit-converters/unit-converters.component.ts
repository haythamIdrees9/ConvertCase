import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


export const UnitPages = [
  { path: 'temperature', label: 'Temperature' },
  { path: 'length', label: 'Length' },
  { path: 'weight-and-mass', label: 'Weight and Mass' },
  { path: 'volume', label: 'Volume' },
  { path: 'time', label: 'Time' },
  { path: 'speed', label: 'Speed' },
  { path: 'area', label: 'Area' },
  { path: 'power', label: 'Power' },
  { path: 'pressure', label: 'Pressure' },
  { path: 'energy', label: 'Energy' },
  { path: 'force', label: 'Force' },
  { path: 'data-storage', label: 'Data Storage' },
  { path: 'fuel-consumption', label: 'Fuel Consumption' },
  { path: 'angle', label: 'Angle' },
  { path: 'numbers', label: 'Numbers' },
  { path: 'velocity', label: 'Velocity' },
];

@Component({
  selector: 'app-unit-converters',
  templateUrl: './unit-converters.component.html',
  styleUrls: ['./unit-converters.component.scss']
})
export class UnitConvertersComponent implements AfterViewInit, OnInit {
  ngAfterViewInit(): void {
    window.scrollTo(0, 0)
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 1);
  }
  pages = UnitPages;

  isRoute:boolean = false;
  constructor(private router:Router) {

  }

  ngOnInit(): void {
    this.isRoute = this.router.url === '/unit-converters';
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(()=>{
      this.isRoute = this.router.url === '/unit-converters';
    })
    
  }

}
