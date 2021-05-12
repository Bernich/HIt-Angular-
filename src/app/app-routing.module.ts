import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { landingPageRoute } from './pages/landing-page';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then((m) => m.HivenewsLandingPageModule),
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
