import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSoonPageComponent } from './pages/coming-soon-page/coming-soon-page.component';
import { NewNewsPageComponent } from './pages/new-news-page';

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
    path: 'news',
    component: NewNewsPageComponent
    // loadChildren: () =>
    //   import('./pages/news-page/news-page.module').then((m) => m.NewsPageModule),
  },

  {
    path: 'new-news', component: NewNewsPageComponent
  },

  {
    path: 'news/:id',
    loadChildren: () =>
      import('./pages/news-detail-page/news-detail-page.module').then((m) => m.NewsDetailPageModule),
  },
  {
    path: 'academics/:slug',
    loadChildren: () =>
      import('./pages/course-detail-page/course-detail-page.module').then((m) => m.CourseDetailPageModule),
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

  {
    path: "**",
    redirectTo: "/"
  }
];


// { enableTracing: true }
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
