import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordColorCheckerComponent } from './password-color-checker.component';

describe('PasswordColorCheckerComponent', () => {
  let component: PasswordColorCheckerComponent;
  let fixture: ComponentFixture<PasswordColorCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordColorCheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordColorCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
