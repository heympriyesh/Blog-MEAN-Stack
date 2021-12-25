import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/MaterialModule/material.module';
import { CKEditorModule } from 'ngx-ckeditor';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { DeactivateServiceGuard } from './shared/deactivate.guard';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    CKEditorModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    NgxSkeletonLoaderModule,
  ],
  providers: [DeactivateServiceGuard, AuthGuard],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
