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
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ReadSingleBlogComponent } from './read-single-blog/read-single-blog.component';
import { SharedNavBarModule } from './SharedNavBar/shard-navbar.module';
import { EditblogComponent } from './editblog/editblog.component';
import { EditdraftComponent } from './editdraft/editdraft.component';
// import { SharedModule } from '../shared/shared.module';

// HomeComponent,
@NgModule({
  declarations: [
    LandingComponent,
    WriteblogComponent,
    DialogComponent,
    ReadblogComponent,
    ReadSingleBlogComponent,
    EditblogComponent,
    EditdraftComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    MaterialModule,
    HttpClientModule,
    SweetAlert2Module,
    NgxSkeletonLoaderModule,
    SharedNavBarModule,
  ],
  providers: [],
  exports: [],
})
export class MainModule {}
