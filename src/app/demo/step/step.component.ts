/**
 * source: https://stackblitz.com/edit/dynamic-form-array-by-pmp?file=app%2Fstepper-overview-example.html
 */

import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './step.component.html'
})
export class StepComponent implements OnInit {
  isLinear = false;
  form: FormArray = this.formBuilder.array([]);
  formGroup: FormGroup = this.formBuilder.group({
    form: this.form
  });

  tabs = ['one', 'two', 'three'];


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.addItem();
  }


  public addItem(): void {
    this.form = this.formGroup.get('form') as FormArray;
    this.form.push(this.init());
  }

  init(): any {
    return this.formBuilder.group({
      cont: new FormControl('', [Validators.required]),
    });
  }

  get aliases(): FormArray {
    return this.formGroup.get('form') as FormArray;
  }
}
