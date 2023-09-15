import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../../services/meta.service';


@Component({
  selector: 'app-age',
  templateUrl: './download-time.component.html',
  styleUrls: ['../../../container.scss', '../../calculators.component.scss', './download-time.component.scss'],
  providers: []
})
export class DownloadTimeComponent implements OnInit {
  fileSize: number = 500;
  bandwidth: number = 5;
  dateTypes = [
    { key: 'byte', label: 'Byte (B)' },
    { key: 'kilobyte', label: 'Kilobyte (KB)' },
    { key: 'megabyte', label: 'Megabyte (MB)' },
    { key: 'gigabyte', label: 'Gigabyte (GB)' },
    { key: 'terabyte', label: 'Terabyte (TB)' },
  ];
  bandwidthTypes = [
    { key: 'bbit/s', label: 'Bbit/s' },
    { key: 'kbbit/s', label: 'KBbit/s' },
    { key: 'mbbit/s', label: 'MBbit/s' },
    { key: 'gbbit/s', label: 'GBbit/s' },
    { key: 'tbbit/s', label: 'TBbit/s' },
  ];
  selectedDataType = this.dateTypes[2].key;
  selectedBandWidthType = this.bandwidthTypes[2].key;
  timeNeeded = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  constructor(private metaService: MetaService) {


  }

  ngOnInit(): void {
    this.handleSeo();
    this.calculateDownloadUploadTime();
  }

  private handleSeo() {
    this.metaService.setTitle('Download & Upload Time Calculator: Estimate File Transfer Speed');
    this.metaService.setDescription(`Estimate download and upload times with our calculator. Input file size, data type, bandwidth, and more. Optimize your file transfers easily.`);
    this.metaService.setKeywords("download time, upload time, file transfer speed, file size calculator, bandwidth calculator, data transfer estimation, optimize file transfers, internet speed calculator");
  }

  calculateDownloadUploadTime(): any {
    // Validate input values
    if (this.fileSize <= 0 || this.bandwidth <= 0) {
      return { error: "Invalid input. Please provide positive values for file size and internet speed." };
    }
    
    // Calculate time in seconds
    const fileSizeInBits = this.convertToBits(this.fileSize, this.selectedDataType); // Convert  to bits
    const timeInSeconds =  fileSizeInBits / this.convertBandwidthToBitsPerSecond(this.bandwidth, this.selectedBandWidthType);
    console.log('ininin',timeInSeconds);
    if(timeInSeconds < 1 && timeInSeconds > 0){
       this.timeNeeded.seconds = Number((Math.round((timeInSeconds % 60) * 100) / 100).toFixed(2))
    } else {
      this.timeNeeded.seconds = Math.floor(timeInSeconds % 60);
    }
    // Convert time to hours, minutes, and seconds
    this.timeNeeded.hours = Math.floor(timeInSeconds / 3600);
    this.timeNeeded.minutes = Math.floor((timeInSeconds % 3600) / 60);
  }

  convertToBits(value: number, unit: string): number {
    switch (unit.toLowerCase()) {
      case 'byte':
        return value * 8;
      case 'kilobyte':
        return value * 8 * 1024;
      case 'megabyte':
        return value * 8 * 1024 * 1024;
      case 'gigabyte':
        return value * 8 * 1024 * 1024 * 1024;
      case 'terabyte':
        return value * 8 * 1024 * 1024 * 1024 * 1024;
      default:
        return 0;
    }
  }

  convertBandwidthToBitsPerSecond(value: number, unit: string): number {
    console.log('unit',unit);
    
    switch (unit.toLowerCase()) {
      case 'bbit/s':
        return value;
      case 'kbbit/s':
        return value * 1024;
      case 'mbbit/s':
        return value * 1024 * 1024;
      case 'gbbit/s':
        return value * 1024 * 1024 * 1024;
      case 'tbbit/s':
        return value * 1024 * 1024 * 1024 * 1024;
      default:
        return 0;
    }
  }


}
