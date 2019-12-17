import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { loginSignupComponent } from './login-signup.component';

describe('LoginComponent', () => {
  let component: loginSignupComponent;
  let fixture: ComponentFixture<loginSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ loginSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(loginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
