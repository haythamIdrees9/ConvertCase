import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Decimal from 'decimal.js';

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
  @Input('conversionRate') set conversionRateVal(conversionRate:number){
    this.conversionRate = conversionRate;
    this.conversionExamples = {fromOne:this.getResult(1),toOne:this.getResult(1,1/conversionRate)} 
    this.conversionValues = {10:'',15:'',20:'',25:''};
    Object.keys(this.conversionValues).forEach((key:string) => {
      this.conversionValues[key] = this.getResult(Number(key));
    })
    this.tableValues = this.compareValues.map((input:any) => ({input,result:this.getResult(input)}));
    this.formula = {from:` × ${this.conversionRate}`,to:` × ${1/this.conversionRate}`};
  } 
  conversionRate = 0;
  
  @Input('unitType') unitType = "";
  @Input('errorMessage') errorMessage = "";
  @Input('linkUnitType') linkUnitType: string[] = [];
  @Input('tableValues') tableValues:{input:string,result:string}[] = [];
  conversionExamples !: {fromOne:string,toOne:string};
  conversionValues!:{[key:string]:string};
  compareValues  = [0.01,0.1,1,2,3,4,5,6,7,8,9,10,20,50,100,1000];

  @Output('updateResult') updateResult = new EventEmitter<string>();

  locatOption1:string='';
  locatOption2:string='';
  linkUnitLabels:string [] = [];
  @Input('formula') formula = {from:`${this.conversionRate} `,to:`${1/this.conversionRate}`};

  constructor(private route: ActivatedRoute,private router:Router) {
  }



  ngOnInit() {
    [this.locatOption1,this.locatOption2] = this.linkUnitType;
    this.linkUnitLabels = [this.units.find(item => this.linkUnitType[0] === item.key)?.label,this.units.find(item => this.linkUnitType[1] === item.key)?.label]
    this.storageKey = `${this.convertToSnakeCase(this.unitType)}_storing`
    this.handleParamsChange();
  }

  filterFn(query:string,option:any){
    return option.key.toLowerCase().includes(query.toLowerCase()) || option.label.toLowerCase().includes(query.toLowerCase())
  }

  getResult(value:number,conversionRate = this.conversionRate):string{
    const inputDecimal = new Decimal(Number(value));
    const res = inputDecimal.times(conversionRate).toNumber();
    if(Math.abs(res) > 1){
      return `${parseFloat(`${res.toFixed(2)}`)}`
    }
    return `${res}`;
  }


  applyUnits(){
    this.router.navigate(['./',`${this.locatOption1}-to-${this.locatOption2}`],{relativeTo:this.route.parent,replaceUrl:true})
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
      this.linkUnitLabels = [this.units.find(item => this.linkUnitType[0] === item.key)?.label,this.units.find(item => this.linkUnitType[1] === item.key)?.label]
      this.switchLink = `${this.linkUnitType[1]}-to-${this.linkUnitType[0]}`
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
