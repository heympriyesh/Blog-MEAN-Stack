import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'creators',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'creators', component: LandingComponent }],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
