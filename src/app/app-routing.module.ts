import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { landingPageRoute } from './pages/landing-page';

const routes: Routes = [
  ...landingPageRoute,


  {
    path: 'posts',
    loadChildren: () =>
      import('./pages/post-detail-page/post-detail-page.module').then((m) => m.HivenewsPostDetailPageModule),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
