import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainProfileComponent } from './main-profile-leftNav/main-profile.component';
import { MyblogComponent } from './myblog/myblog.component';
import { DraftComponent } from './draft/draft.component';
import { ProfileComponent } from './user-details/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { HomeComponent } from '../home/home.component';
import { SharedNavBarModule } from '../SharedNavBar/shard-navbar.module';
import { MaterialModule } from 'src/app/shared/MaterialModule/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  EmailChangeDialogComponent,
  PasswordChangeDialogComponent,
} from '../dialog';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MainProfileComponent,
    MyblogComponent,
    DraftComponent,
    ProfileComponent,
    PasswordChangeDialogComponent,
    EmailChangeDialogComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedNavBarModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
  ],
})
export class ProfileModule {}
