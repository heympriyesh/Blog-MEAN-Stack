import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraftComponent } from './draft/draft.component';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { MyblogComponent } from './myblog/myblog.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainProfileComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'myblog', component: MyblogComponent },
      { path: 'draft', component: DraftComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
