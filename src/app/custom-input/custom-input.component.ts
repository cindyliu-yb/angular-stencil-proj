import { Component, forwardRef, Input, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR  } from '@angular/forms';

import { } from '@angular/forms';
export const CUSTOM_INPUT_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
};

const noop = () => { };

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [CUSTOM_INPUT_VALUE_ACCESSOR]
})
export class CustomInputComponent implements ControlValueAccessor {

  /** Callback registered via registerOnTouched (ControlValueAccessor) */
  protected _onTouchedCallback: () => void = noop;
  /** Callback registered via registerOnChange (ControlValueAccessor) */
  protected _onChangeCallback: (_: any) => void = noop;

  /** @internal */
  protected _value: any = '';

  constructor(private cd: ChangeDetectorRef) { }

  /** @internal */
  get value(): any {
      return this._value;
  }

  @Input() set value(v: any) {
    if (v !== this._value) {
        this._value = v;
        this._onChangeCallback(v);
        this.cd.markForCheck();
    }
  }

  writeValue(value: any): void {
      this.value = value;
  }

  registerOnChange(fn: (_: any) => void): void {
      this._onChangeCallback = fn;
  }
  registerOnTouched(fn: () => any): void {
      this._onTouchedCallback = fn;
  }

  onValueChange(ev: any) {
    this.value = ev.target.value;
  }
}
