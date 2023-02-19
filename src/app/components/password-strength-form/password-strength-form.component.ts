import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'password-strength-form',
  templateUrl: './password-strength-form.component.html',
  styleUrls: ['./password-strength-form.component.css'],
})
export class PasswordStrengthForm implements OnInit {
  public form!: FormGroup;

  get passwordField(): FormControl {
    return this.form.get('password') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.generateForm();
  }

  public generateForm(): void {
    this.form = new FormGroup({
      password: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }
}
