import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from 'ngx-ckeditor';
import { AuthGuard } from '../shared/auth.guard';
import { DeactivateServiceGuard } from '../shared/deactivate.guard';
import { EditblogComponent } from './editblog/editblog.component';
import { EditdraftComponent } from './editdraft/editdraft.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ReadSingleBlogComponent } from './read-single-blog/read-single-blog.component';
import { ReadblogComponent } from './readblog/readblog.component';
import { WriteblogComponent } from './writeblog/writeblog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'creators',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'creators', component: LandingComponent },
      {
        path: 'write',
        component: WriteblogComponent,
        canActivate: [AuthGuard],
        canDeactivate: [DeactivateServiceGuard],
      },
      {
        path: 'read',
        component: ReadblogComponent,
      },
      {
        path: 'read/:id',
        component: ReadSingleBlogComponent,
      },
      {
        path: 'edit/:id',
        component: EditblogComponent,
      },
      {
        path: 'edit-draft/:id',
        component: EditdraftComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, CKEditorModule],
})
export class MainRoutingModule {}
