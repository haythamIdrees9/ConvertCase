import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetaService } from '../../../services/meta.service';
import { CALCOLATORS_PAGES } from '../calcolators-utils';


@Component({
  selector: 'app-calculator-parent',
  templateUrl: './calculator-parent.component.html',
  styleUrls: ['./calculator-parent.component.scss', '../../../container.scss','../health.component.scss']
})
export class CalculatorParent {
  pages = CALCOLATORS_PAGES;

}
