import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Address, heroes, states } from './data-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  heroForm: FormGroup;

  fieldControls: any = {};

  fields = [
    {label: 'name', type: 'text', controlName: 'name'},
    {label: 'Street', type: 'text', controlName: 'street'},
    {label: 'City', type: 'text', controlName: 'city'},
    {label: 'State', type: 'select', controlName: 'state'},
    {label: 'Zip', type: 'number', controlName: 'zip'}
  ];

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
    this.createForm();
  }

  createForm() {
    this.fields.forEach((f) => {
      this.fieldControls[f.controlName] = new FormControl();
    });

    this.heroForm = this.fb.group(this.fieldControls);

    this.fieldControls.name.setValue(heroes[0].name);

    this.cd.markForCheck();
  }

  getControl(controlName: string) {
    return this.fieldControls[controlName];
  }
}
