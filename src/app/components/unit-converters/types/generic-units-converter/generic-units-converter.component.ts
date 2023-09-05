import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-generic-units-converter[popularUnits][units][updateResult][linkUnitType][unitType]',
  templateUrl: './generic-units-converter.component.html',
  styleUrls: ['./generic-units-converter.component.scss'],
})
export class GenericUnitsConverterComponent implements OnInit {
  userInput: string = '1';
  switchLink = ''
  @Input('popularUnits') popularUnits: readonly { route: string, reverseRoute: string, labelRoute: string, labelReverseRoute: string, }[] = [];
  @Input('units') units: readonly any[] = [];
  storageKey: string = "";
  @Input('result') result = "";
  @Input('unitType') unitType = "";
  @Input('errorMessage') errorMessage = "";
  @Input('linkUnitType') linkUnitType: string[] = [];
  @Output('updateResult') updateResult = new EventEmitter<string>();

  locatOption1:string='';
  locatOption2:string='';
  constructor(private route: ActivatedRoute,private router:Router) {
  }


  filterFn(query:string,option:any){
    return option.key.toLowerCase().includes(query.toLowerCase()) || option.label.toLowerCase().includes(query.toLowerCase())
  }

  ngOnInit() {
    [this.locatOption1,this.locatOption2] = this.linkUnitType;
    this.storageKey = `${this.convertToSnakeCase(this.unitType)}_storing`
    this.handleParamsChange();
  }

  applyUnits(){
    console.log('`${this.locatOption1}-to-${this.locatOption2}`',`${this.locatOption1}-to-${this.locatOption2}`);
    
    this.router.navigate(['./',`${this.locatOption1}-to-${this.locatOption2}`],{relativeTo:this.route.parent})
  }

  convertToSnakeCase(test:string) {
    return test.replace(/\s+/g, '_').toLowerCase();
  }

  private handleParamsChange() {
    this.route.params.subscribe((params) => {
      if (!params['units-type']) {
        return;
      }
      this.linkUnitType = (params['units-type'] as string).split('-to-');
      this.switchLink = `${this.linkUnitType[1]}-${this.linkUnitType[0]}`
    })
  }

  setUserInput(text: string) {
    this.userInput = text
    this.updateResult.emit(this.userInput);
  }
  clearTextArea() {
    this.userInput = '1';
    this.updateResult.emit(this.userInput);
  }
}
