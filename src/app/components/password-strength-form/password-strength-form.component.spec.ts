import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthForm } from './password-strength-form.component';

describe('PasswordCheckerComponent', () => {
  let component: PasswordStrengthForm;
  let fixture: ComponentFixture<PasswordStrengthForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordStrengthForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordStrengthForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
