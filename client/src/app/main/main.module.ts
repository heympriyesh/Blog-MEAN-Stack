import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { WriteblogComponent } from './writeblog/writeblog.component';
import { MaterialModule } from '../shared/MaterialModule/material.module';
import { DialogComponent } from './dialog';

@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    WriteblogComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    MaterialModule,
  ],
  providers: [],
  exports: [],
})
export class MainModule {}
