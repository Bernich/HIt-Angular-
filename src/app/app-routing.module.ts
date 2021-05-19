import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then((m) => m.HivenewsLandingPageModule),
  },
  {
    path: 'academics',
    loadChildren: () =>
      import('./pages/academics-page/academics-page.module').then((m) => m.AcademicsPageModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about-page/about-page.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./pages/post-detail-page/post-detail-page.module').then((m) => m.HivenewsPostDetailPageModule),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];


// { enableTracing: true }
@NgModule({
  imports: [
    RouterModule.forRoot(routes,)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
