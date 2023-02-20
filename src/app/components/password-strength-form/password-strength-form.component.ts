import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'password-strength-form',
  templateUrl: './password-strength-form.component.html',
  styleUrls: ['./password-strength-form.component.css'],
})
export class PasswordStrengthForm implements OnInit {
  public form!: FormGroup;

  constructor() {}

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
