import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginSignupComponent } from './login/login-signup.component';
import { AuthRoutingModule } from './auth.route';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';



@NgModule({
  declarations: [loginSignupComponent, AdminloginComponent, ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
