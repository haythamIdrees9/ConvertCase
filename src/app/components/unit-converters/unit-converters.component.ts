import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-unit-converters',
  templateUrl: './unit-converters.component.html',
  styleUrls: ['./unit-converters.component.scss']
})
export class UnitConvertersComponent {
  pages = [{ path: 'length', label: 'Length' }, { path: 'weight-and-mass', label: 'Weight and Mass' }, { path: 'volume', label: 'Volume' },
  { path: 'temperature', label: 'Temperature' },
  { path: 'area', label: 'Area' },
  { path: 'pressure', label: 'Pressure' },
  { path: 'energy', label: 'energy' },
  ]

  isLinksModalVisible: boolean = false;

  showLinksModal() {
    this.isLinksModalVisible = true;
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden'; 
    }
  }

  @HostListener('document:click')
  hideLinksModal() {
    this.isLinksModalVisible = false;
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden auto'; 
    }
  }

}
