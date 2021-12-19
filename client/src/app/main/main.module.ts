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
import { ReadblogComponent } from './readblog/readblog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    WriteblogComponent,
    DialogComponent,
    ReadblogComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [],
})
export class MainModule {}
