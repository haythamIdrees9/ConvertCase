import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generic-units-converter[popularUnits][units][updateResult][storageKey][popularTitle][title][linkUnitType]',
  templateUrl: './generic-units-converter.component.html',
  styleUrls: ['../../main-converters.scss'],
})
export class GenericUnitsConverterComponent implements OnInit {
  userInput: string = '1';
  switchLink = ''
  @Input('popularUnits') popularUnits: readonly { route: string, reverseRoute: string, labelRoute: string, labelReverseRoute: string, }[] = [];
  @Input('units') units: readonly any[] = [];
  @Input('storageKey') storageKey: string = "";
  @Input('popularTitle') popularTitle: string = "";
  @Input('title') title: string = "";
  @Input('result') result = "";
  @Input('linkUnitType') linkUnitType: string[] = [];


  @Output('updateResult') updateResult = new EventEmitter<string>()
  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.handleParamsChange();
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
    console.log('this.userInput', this.userInput);

  }
  clearTextArea() {
    this.userInput = '1';
    this.updateResult.emit(this.userInput);
  }
}
