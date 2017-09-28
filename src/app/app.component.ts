import { Component } from '@angular/core';
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

  name = new FormControl(heroes[0].name, null);

  constructor(private fb: FormBuilder) {
    // this.createForm();
    this.heroForm = this.fb.group({
      name: this.name
    });
  }

  // createForm() {
  //   this.heroForm = this.fb.group({
  //     name: ['', Validators.required],
  //     address: this.fb.group({ // <-- the child FormGroup
  //       street: '',
  //       city: '',
  //       state: '',
  //       zip: ''
  //     })
  //   });

  //   this.heroForm.setValue({
  //     name:    heroes[0].name,
  //     address: heroes[0].addresses[0] || new Address()
  //   });
  // }
}
