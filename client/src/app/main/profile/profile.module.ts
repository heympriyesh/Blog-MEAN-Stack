import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { MyblogComponent } from './myblog/myblog.component';
import { DraftComponent } from './draft/draft.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { HomeComponent } from '../home/home.component';
import { SharedNavBarModule } from '../SharedNavBar/shard-navbar.module';

@NgModule({
  declarations: [
    MainProfileComponent,
    MyblogComponent,
    DraftComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, SharedNavBarModule],
})
export class ProfileModule {}
