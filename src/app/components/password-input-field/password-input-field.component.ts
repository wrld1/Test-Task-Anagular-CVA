import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-password-input-field',
  templateUrl: './password-input-field.component.html',
  styleUrls: ['./password-input-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputFieldComponent),
      multi: true,
    },
  ],
})
export class PasswordInputFieldComponent implements ControlValueAccessor {
  @Input()
  public parentForm!: FormGroup;

  @Input()
  public fieldName!: string;

  public passwordFieldType: string = 'password';

  public value: string = '';

  public onChanged!: (value: string) => void;

  public onTouched!: () => void;

  public isDisabled!: boolean;

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  constructor() {}

  public writeValue(value: string): void {
    this.value = value;
  }

  public onChange(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.onChanged(value);
  }

  public registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public togglePasswordVisible(): void {
    this.passwordFieldType =
      this.passwordFieldType === 'text' ? 'password' : 'text';
  }
}
