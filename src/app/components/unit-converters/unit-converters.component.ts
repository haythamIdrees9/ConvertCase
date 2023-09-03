import { AfterViewInit, Component, HostListener } from '@angular/core';


export    const  UnitPages = [{ path: 'length', label: 'Length' }, { path: 'weight-and-mass', label: 'Weight and Mass' }, { path: 'volume', label: 'Volume' },
{ path: 'temperature', label: 'Temperature' },
{ path: 'area', label: 'Area' },
{ path: 'pressure', label: 'Pressure' },
{ path: 'energy', label: 'Energy' },
{ path: 'power', label: 'Power' },
{ path: 'force', label: 'Force' },
{ path: 'time', label: 'Time' },
{ path: 'speed', label: 'Speed' },
{ path: 'angle', label: 'Angle' },
{ path: 'fuel-consumption', label: 'Fuel Consumption' },

];

@Component({
  selector: 'app-unit-converters',
  templateUrl: './unit-converters.component.html',
  styleUrls: ['./unit-converters.component.scss']
})
export class UnitConvertersComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    window.scrollTo(0,0)
    setTimeout(() => {
      window.scrollTo(0,0)
    }, 1);
  }
  pages = UnitPages;

  isLinksModalVisible: boolean = false;

  showLinksModal() {
    this.isLinksModalVisible = true;
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden'; 
    }
  }

  hideLinksModal() {
    this.isLinksModalVisible = false;
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden auto'; 
    }
  }

}
