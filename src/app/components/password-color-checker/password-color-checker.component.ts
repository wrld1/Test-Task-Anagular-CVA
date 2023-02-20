import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordStrength } from 'src/app/enums/PasswordStrength';

@Component({
  selector: 'password-color-checker',
  templateUrl: './password-color-checker.component.html',
  styleUrls: ['./password-color-checker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordColorCheckerComponent),
      multi: true,
    },
  ],
})
export class PasswordColorCheckerComponent implements ControlValueAccessor {
  passwordStrength = '';
  value = '';

  passwordStrengthEnum = PasswordStrength;

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  @Input() set password(value: string) {
    this.value = value;
    this.updateColors();
  }

  writeValue(value: string): void {
    if (value) {
      this.value = value;
      this.updateColors();
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private updateColors(): void {
    switch (true) {
      case this.value === '':
        this.passwordStrength = 'empty';
        break;
      case this.value.length < 8:
        this.passwordStrength = 'short';
        break;
      case /^[a-zA-Z]+$/.test(this.value) ||
        /^[0-9]+$/.test(this.value) ||
        /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(this.value):
        this.passwordStrength = 'weak';
        break;
      case /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(this.value) ||
        /^[a-zA-Z0-9]+$/.test(this.value) ||
        /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(this.value):
        this.passwordStrength = 'medium';
        break;
      case /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9]).+$/.test(
        this.value
      ):
        this.passwordStrength = 'strong';
        break;
    }

    this.onChange(this.value);
  }
}
