import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from 'ngx-ckeditor';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
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
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, CKEditorModule],
})
export class MainRoutingModule {}
