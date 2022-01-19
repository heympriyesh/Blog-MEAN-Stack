import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { DraftComponent } from './draft/draft.component';
import { MainProfileComponent } from './main-profile-leftNav/main-profile.component';
import { MyblogComponent } from './myblog/myblog.component';
import { ProfileComponent } from './user-details/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainProfileComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'me', component: ProfileComponent },
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
