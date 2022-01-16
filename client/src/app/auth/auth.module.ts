import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './forgotPassword/resetpassword.component';
import { AuthRoutingModule } from './auth-routing.modulet';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/MaterialModule/material.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ResetPasswordDialComponent } from '../main/dialog';

@NgModule({
  declarations: [
    SignupComponent,
    ResetpasswordComponent,
    LoginComponent,
    ResetPasswordDialComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    SweetAlert2Module,
    FormsModule,
  ],
})
export class AuthModule {}
