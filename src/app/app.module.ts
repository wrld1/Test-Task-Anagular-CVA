import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordStrengthForm } from './components/password-strength-form/password-strength-form.component';
import { PasswordInputFieldComponent } from './components/password-input-field/password-input-field.component';
import { PasswordColorCheckerComponent } from './components/password-color-checker/password-color-checker.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthForm,
    PasswordInputFieldComponent,
    PasswordColorCheckerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: PasswordStrengthForm }]),
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
