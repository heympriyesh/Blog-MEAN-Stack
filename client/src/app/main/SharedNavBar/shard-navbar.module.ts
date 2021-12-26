import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MaterialModule } from 'src/app/shared/MaterialModule/material.module';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [MaterialModule, RouterModule, SweetAlert2Module, CommonModule],
  exports: [HomeComponent],
})
export class SharedNavBarModule {}
