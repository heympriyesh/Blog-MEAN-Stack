import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AuthRoutingModule } from './auth-routing.modulet';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/MaterialModule/material.module';

@NgModule({
  declarations: [SignupComponent, ResetpasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AuthModule {}
