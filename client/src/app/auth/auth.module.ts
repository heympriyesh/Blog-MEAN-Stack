import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AuthRoutingModule } from './auth-routing.modulet';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/MaterialModule/material.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [SignupComponent, ResetpasswordComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    SweetAlert2Module,
  ],
})
export class AuthModule {}
