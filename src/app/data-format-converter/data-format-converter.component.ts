import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { XMLService } from '../services/xml.service';

@Component({
  selector: 'app-data-format-converter',
  templateUrl: './data-format-converter.component.html',
  styleUrls: ['./data-format-converter.component.scss'],
  providers:[XMLService]
})
export class DataFormatConverterComponent implements OnInit {
  text: string = '';
  storageKey = 'convertedData';
  originalText = '';
  executeFn:any = () => {};
  toasterMessage:string = '';
  readonly buttonMappings: { [key: string]: any } = {
    'json-to-xml': this.convertJSONtoXML,
    'xml-to-json': this.convertXMLtoJSON,
    'json-to-csv': this.convertJSONtoCSV,
    'csv-to-json': this.convertCSVtoJSON,
    'json-to-yaml': this.convertJSONtoYAML,
    'yaml-to-json': this.convertYAMLtoJSON,
    'xml-to-csv': this.convertXMLtoCSV,
    'csv-to-xml': this.convertCSVtoXML,
    'xml-to-yaml': this.convertXMLtoYAML,
    'yaml-to-xml': this.convertYAMLtoXML,
    'xml-to-tsv': this.convertXMLtoTSV,
    'tsv-to-xml': this.convertTSVtoXML,
  };

  constructor(private route:ActivatedRoute,private xmlService:XMLService) { }

  ngOnInit(): void {
    const action = this.route.snapshot.params['action'];
    if (action && this.buttonMappings[action]) {
      this.executeFn = this.buttonMappings[action];
    }
  }

  onSelect(executeFn: any) {
    this.executeFn = executeFn;
    if(!this.originalText){
      return;
    }
    this.executeFn();
  }

  showToaster(toasterMessage:string){
    this.toasterMessage = toasterMessage;
    setTimeout(()=>{
      this.toasterMessage = "";
    },5000)
  }

  setOriginalText(text: string) {
    this.originalText = text;
    this.executeFn();
  }

  convertJSONtoXML() {
    try {
      const jsonObject = JSON.parse(this.originalText);
      this.text = this.xmlService.jsonToXml(jsonObject);
    } catch (error) {
      console.error("Error converting JSON to XML:", error);
      this.showToaster("Invalid JSON input. Please provide valid JSON.");    
    }
  }

  convertXMLtoJSON() {
    try {
      const jsonObject = this.xmlService.xmlToJson(this.originalText);
      this.text = JSON.stringify(jsonObject, null, 2);
    } catch (error) {
      console.error("Error converting XML to JSON:", error);
      this.showToaster("Invalid XML input. Please provide valid XML.");    
    }
  }
  

  convertJSONtoCSV(jsonData: any): string {
    const separator = ",";
    const keys = Object.keys(jsonData[0]);
  
    // Generate the CSV header
    const csvHeader = keys.join(separator);
  
    // Generate the CSV rows
    const csvRows = jsonData.map((item: any) => {
      const values = keys.map((key) => {
        const value = item[key];
        return typeof value === "string" ? `"${value}"` : value;
      });
      return values.join(separator);
    });
  
    // Combine the header and rows
    const csvContent = [csvHeader, ...csvRows].join("\n");
  
    return csvContent;
  }
  

  convertCSVtoJSON(csvData: string): any[] {
    const lines = csvData.trim().split("\n");
    if (lines.length === 0) {
      return [];
    }
  
    const keys = lines[0].split(",");
    const jsonData: any[] = [];
  
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",");
      const entry: any = {};
  
      for (let j = 0; j < keys.length; j++) {
        const key = keys[j];
        let value:any = values[j];
  
        // Remove surrounding double quotes if present
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
  
        // Convert numeric strings to numbers
        if (!isNaN(Number(value))) {
          value = parseFloat(value);
        }
  
        entry[key] = value;
      }
  
      jsonData.push(entry);
    }
  
    return jsonData;
  }
  
  convertJSONtoYAML() {
    try {
      const jsonData = JSON.parse(this.originalText);
      const yamlLines:string[] = [];
  
      function processObject(obj:any, indent:string) {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'object') {
              yamlLines.push(`${indent}${key}:`);
              processObject(value, `${indent}  `);
            } else {
              yamlLines.push(`${indent}${key}: ${value}`);
            }
          }
        }
      }
  
      processObject(jsonData, '');
  
      this.text = yamlLines.join('\n');
    } catch (error) {
      this.showToaster("Error: Invalid JSON");    
    
    }
  }
  

  convertYAMLtoJSON() {
    try {
      const yamlLines = this.originalText.trim().split('\n');
      const jsonData = this.parseYAMLLines(yamlLines);
      this.text = JSON.stringify(jsonData, null, 2);
    } catch (error) {
      this.showToaster("Error: Invalid YAML");    
    }
  }
  
  private parseYAMLLines(lines: string[]) {
    const jsonData = {};
    let currentLevel:any = jsonData;
    const stack = [];
  
    for (const line of lines) {
      const [key, value] = line.split(':');
      const level = this.calculateIndentationLevel(line);
  
      while (stack.length > level) {
        stack.pop();
        currentLevel = stack.length === 0 ? jsonData : stack[stack.length - 1];
      }
  
      const formattedKey = key.trim();
      if (value !== undefined) {
        currentLevel[formattedKey] = value.trim();
      } else {
        currentLevel[formattedKey] = {};
        stack.push(currentLevel[formattedKey]);
        currentLevel = currentLevel[formattedKey];
      }
    }
  
    return jsonData;
  }
  
  private calculateIndentationLevel(line: string) {
    let level = 0;
    while (line[level] === ' ') {
      level++;
    }
    return Math.floor(level / 2);
  }
  
  
  convertXMLtoCSV() {
    this.text = this.xmlService.convertXMLtoCSV(this.originalText);
  }

  convertCSVtoXML() {
    this.text = this.xmlService.convertCSVtoXML(this.originalText);
  }

  convertXMLtoYAML() {
    this.text = this.xmlService.convertXMLtoYAML(this.originalText);
  }

  convertYAMLtoXML() {
    this.text = this.xmlService.convertYAMLtoXML(this.originalText);
  }

  convertXMLtoTSV() {
    this.text = this.xmlService.convertXMLtoTSV(this.originalText);
  }

  convertTSVtoXML() {
    this.text = this.xmlService.convertTSVtoXML(this.originalText);
  }

  clearTextArea() {
    this.text = '';
    this.originalText = '';
  }
}
