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

  convertJSONtoCSV() {
    try {
      let jsonArray = JSON.parse(this.originalText);
      console.log('test',this.text);
  
    if (!Array.isArray(jsonArray)) {
        jsonArray = [jsonArray];
    }

    if (!jsonArray || jsonArray.length === 0) {
        
      this.text = ''; 
      return;
    }

    const headers = Object.keys(jsonArray[0]);
    const csvRows = [headers.join(',')];

    for (const obj of jsonArray) {
        const values = headers.map(header => {
            const value = obj[header];
            return typeof value === 'string' ? `"${value}"` : value;
        });
        csvRows.push(values.join(','));
    }

    this.text =  csvRows.join('\n');
    } catch (error: any) {
      console.error('Error parsing or processing JSON:', error.message);
      this.text =  '';
    }
  }


  convertCSVtoJSON() {
    const lines = this.originalText.trim().split("\n");
    if (lines.length === 0) {
      this.text = '';
      return;
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
  
    this.text =  JSON.stringify(jsonData, null, 2);;
  }
  
  convertJSONtoYAML() {
    try {
      const jsonData = JSON.parse(this.originalText);
      const yamlLines:string[] = [];
  
      function processObject(obj:any, indent:string) {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            const keyIndex = Array.isArray(obj)?` -`:`${key}:`
            if (typeof value === 'object') {
              yamlLines.push(`${indent}${keyIndex}`);
              processObject(value, `${indent}  `);
            } else {
              
              yamlLines.push(`${indent}${key}: ${value}`);
            }
          }
        }
      }
  
      processObject(jsonData, '');
      this.text = this.prettifyYAML(yamlLines)
    } catch (error) {
      this.showToaster("Error: Invalid JSON");
    }
  }

  prettifyYAML(yamlLines:string[]) {
    const prettifiedLines = [];
    let currentIndentation = 0;
    console.log('yamlLines',);
    
    for (const line of yamlLines) {
      const trimmedLine = line.trim();
  
      if (trimmedLine.endsWith(':')) {
        prettifiedLines.push(' '.repeat(currentIndentation) + trimmedLine);
        currentIndentation += 2; // Increase indentation by 2 spaces
      } else if (trimmedLine === '-') {
        prettifiedLines.push(' '.repeat(currentIndentation) + trimmedLine);
      } else {
          console.log('trimm',trimmedLine)
        prettifiedLines.push(' '.repeat(currentIndentation) + trimmedLine);
        // currentIndentation -= 2; // Decrease indentation by 2 spaces
        // currentIndentation = Math.max(currentIndentation,2)
      } 
    }
    return prettifiedLines.join('\n');
  }


  convertYAMLtoJSON() {
    try {
      const yamlLines = this.originalText.trim().split('\n');
      console.log('yamlLines',yamlLines);
      
      const jsonData = this.prettifyYAMaL(yamlLines);
      this.text = JSON.stringify(jsonData, null, 2);
    } catch (error) {
      this.showToaster("Error: Invalid YAML");    
    }
  }
  
  private prettifyYAMaL(yamlLines:String[]) {
    const prettifiedLines = [];
    let currentIndentation = 0;
  
    for (const line of yamlLines) {
      const trimmedLine = line.trim();
  
      if (trimmedLine.endsWith(':')) {
        prettifiedLines.push(' '.repeat(currentIndentation) + trimmedLine);
        currentIndentation += 2; // Increase indentation by 2 spaces
      } else if (trimmedLine === '-') {
        prettifiedLines.push(' '.repeat(currentIndentation) + trimmedLine);
      } else if(currentIndentation > 0) {
          console.log('trimm',trimmedLine)
        prettifiedLines.push(' '.repeat(currentIndentation) + trimmedLine);
        currentIndentation -= 2; // Decrease indentation by 2 spaces
      }
    }
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
