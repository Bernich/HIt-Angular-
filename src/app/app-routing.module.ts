import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompleteCourseRegistrationComponent } from './pages/completed-registration-page/completed-registration-page.component';
import { ConfirmCourseDetailsPageComponent } from './pages/confirm-course-details-page/confirm-course-details-page.component';
import { NewNewsPageComponent } from './pages/new-news-page';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => m.HivenewsLandingPageModule
      ),
  },
  {
    path: 'academics',
    loadChildren: () =>
      import('./pages/academics-page/academics-page.module').then(
        (m) => m.AcademicsPageModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about-page/about-page.module').then(
        (m) => m.AboutPageModule
      ),
  },
  {
    path: 'news',
    component: NewNewsPageComponent,
    // loadChildren: () =>
    //   import('./pages/news-page/news-page.module').then((m) => m.NewsPageModule),
  },

  {
    path: 'new-news',
    component: NewNewsPageComponent,
  },

  {
    path: 'register/:slug',
    component: RegistrationPageComponent,
  },
  {
    path: 'register/:slug/complete',
    component: CompleteCourseRegistrationComponent,
  },
  {
    path: 'news/:slug',
    loadChildren: () =>
      import('./pages/news-detail-page/news-detail-page.module').then(
        (m) => m.NewsDetailPageModule
      ),
  },
  {
    path: 'academics/:slug',
    loadChildren: () =>
      import('./pages/course-detail-page/course-detail-page.module').then(
        (m) => m.CourseDetailPageModule
      ),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./pages/post-detail-page/post-detail-page.module').then(
        (m) => m.HivenewsPostDetailPageModule
      ),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },

  //
  {
    path: 'course/:slug/payment',
    component: ConfirmCourseDetailsPageComponent,
  },

  {
    path: '**',
    redirectTo: '/',
  },
];

// { enableTracing: true }
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
