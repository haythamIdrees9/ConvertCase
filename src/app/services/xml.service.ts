import { Injectable } from '@angular/core';
import { XMLParser, XMLBuilder, XMLValidator} from  "fast-xml-parser";

@Injectable()
export class XMLService {

  constructor() { }

  convertXMLtoCSV(xmlString: string): string {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
  
    const csvRows = [];
    const headerRow = [];
  
    // Extract header row from the first record element's attributes
    const firstRecord = xmlDoc.querySelector('record');
    if (firstRecord) {
      const attributes = Array.from(firstRecord.attributes);
      for (const attribute of attributes) {
        headerRow.push(attribute.name);
      }
    }
  
    csvRows.push(headerRow);
  
    // Extract data rows from all record elements
    const records = Array.from(xmlDoc.getElementsByTagName('record'));
    for (const record of records) {
      const csvRow = [];
      const attributes = Array.from(record.attributes);
      for (const attribute of attributes) {
        csvRow.push(attribute.value);
      }
      csvRows.push(csvRow);
    }
  
    // Generate CSV content
    const csvContent = csvRows.map(row => row.join(',')).join('\n');
    return csvContent;
  }

  xmlToJson(xml: string): any {
    const parser = new XMLParser();
    return parser.parse(xml);
    }


  jsonToXml(jsonObject: any): string {
    const builder = new XMLBuilder();
    const xml =   builder.build(jsonObject);
    return this.prettifyXml(xml).replace(/^\s*[\r\n]/gm, '');
}

  private   prettifyXml(xml: string, indentSize: number = 2): string {
    let result = '';
    let currentIndent = 0;

    const xmlChars = xml.split(/(?=<\/)|(?<=>)/);

    for (const char of xmlChars) {
        if (char.startsWith('</')) {
            currentIndent -= indentSize;
            result = result.slice(0, -indentSize); // Remove extra spaces before the closing tag
        }

        if (!char.startsWith('<')) {
            result += char;
        } else {
            if (!char.endsWith('/>') && !char.startsWith('</')) {
                result += '\n' + ' '.repeat(currentIndent);
            }
            result += char;
            if (!char.endsWith('/>') && !char.startsWith('</')) {
                currentIndent += indentSize;
            }
        }

        if (char.startsWith('</')) {
            result += '\n' + ' '.repeat(currentIndent);
        }
    }

    return result.trim();
}

  convertCSVtoXML(csvString: string): string {
    const csvLines = csvString.trim().split('\n');
    if (csvLines.length === 0) {
      return ''; // Empty CSV, return empty XML
    }
  
    const [header, ...dataRows] = csvLines;
    const headers = header.split(',');
    const rootTagName = 'data'; // You can adjust the root tag name as needed
  
    const xmlData = [];
    xmlData.push(`<${rootTagName}>`);
  
    for (const dataRow of dataRows) {
      const dataValues = dataRow.split(',');
      if (dataValues.length !== headers.length) {
        continue; // Skip rows with incorrect number of values
      }
  
      xmlData.push('<record>');
      for (let i = 0; i < headers.length; i++) {
        const attributeName = headers[i];
        const attributeValue = dataValues[i];
        xmlData.push(`<${attributeName}>${attributeValue}</${attributeName}>`);
      }
      xmlData.push('</record>');
    }
  
    xmlData.push(`</${rootTagName}>`);
  
    return xmlData.join('\n');
  }

  convertXMLtoYAML(xmlString: string): string {
    const xmlDoc = new DOMParser().parseFromString(xmlString, 'text/xml');
    const rootElement = xmlDoc.documentElement;
  
    function processXMLElement(element: Element, indentLevel: number): string[] {
        const lines: string[] = [];
        const tagName = element.tagName;
        const childNodes = element.childNodes;
      
        lines.push(`${'  '.repeat(indentLevel)}${tagName}:`);
      
        for (let i = 0; i < childNodes.length; i++) {
          const node = childNodes[i];
          if (node instanceof Element) {
            const childLines = processXMLElement(node, indentLevel + 1);
            lines.push(...childLines);
          } else if (node instanceof Text && node.nodeValue?.trim() !== '') {
            const value = node.nodeValue?.trim();
            lines.push(`${'  '.repeat(indentLevel + 1)}${value}`);
          }
        }
      
        return lines;
      }
      
  
    const yamlLines = processXMLElement(rootElement, 0);
    return yamlLines.join('\n');
  }
  

  convertYAMLtoXML(yamlString: string): string {
    const yamlLines = yamlString.split('\n').map(line => line.trim()).filter(line => line !== '');
    const xmlLines: string[] = [];
  
    function parseYAMLLine(line: string, indentLevel: number) {
      const keyValuePair = line.split(':');
      if (keyValuePair.length === 2) {
        const key = keyValuePair[0].trim();
        const value = keyValuePair[1].trim();
        xmlLines.push(`${'  '.repeat(indentLevel)}<${key}>${value}</${key}>`);
      }
    }
  
    function processYAML(lines: string[], indentLevel: number) {
      let i = 0;
      while (i < lines.length) {
        const line = lines[i];
        if (line.endsWith(':')) {
          const key = line.slice(0, -1);
          xmlLines.push(`${'  '.repeat(indentLevel)}<${key}>`);
          i++;
          while (i < lines.length && lines[i].startsWith('  ')) {
            processYAML([lines[i]], indentLevel + 1);
            i++;
          }
          xmlLines.push(`${'  '.repeat(indentLevel)}</${key}>`);
        } else {
          parseYAMLLine(line, indentLevel);
          i++;
        }
      }
    }
  
    processYAML(yamlLines, 0);
    return xmlLines.join('\n');
  }

  convertXMLtoTSV(xmlText: string): string {
    const xmlDoc = new DOMParser().parseFromString(xmlText, 'application/xml');
    if (!xmlDoc) {
      throw new Error('Failed to parse XML document.');
    }
  
    const lines: string[] = [];
    const root = xmlDoc.documentElement;
  
    if (root) {
      const elements = root.getElementsByTagName('*');
  
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const row: string[] = [];
        
        if (element.nodeType === Node.ELEMENT_NODE) {
          for (let j = 0; j < element.childNodes.length; j++) {
            const childNode = element.childNodes[j];
            
            if (childNode.nodeType === Node.TEXT_NODE) {
              row.push(childNode.nodeValue?.trim() || '');
            }
          }
  
          lines.push(row.join('\t'));
        }
      }
    }
  
    return lines.join('\n');
  }
  
  convertTSVtoXML(tsvText: string): string {
    const xmlDoc = document.implementation.createDocument('', '', null);
    const root = xmlDoc.createElement('root');
    xmlDoc.appendChild(root);
  
    const lines = tsvText.trim().split('\n');
    for (const line of lines) {
      const fields = line.split('\t');
      const element = xmlDoc.createElement(fields[0]);
      
      for (let i = 1; i < fields.length; i++) {
        const textNode = xmlDoc.createTextNode(fields[i]);
        element.appendChild(textNode);
      }
  
      root.appendChild(element);
    }
  
    const xmlSerializer = new XMLSerializer();
    return xmlSerializer.serializeToString(xmlDoc);
  }
  

  
  
}