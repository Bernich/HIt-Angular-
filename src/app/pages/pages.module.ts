import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HivenewsLandingPageModule } from './landing-page';
import { HivenewsPostDetailPageModule } from './post-detail-page';
import { HivenewsSubscriptionActivatePageModule } from './subscription-activate-page';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./landing-page/landing-page.module').then((m) => m.HivenewsLandingPageModule),
      },
      {
        path: 'subscription',
        loadChildren: () => import('./subscription-activate-page/subscription-activate-page.module').then((m) => m.HivenewsSubscriptionActivatePageModule),
      },
      {
        path: 'posts',
        loadChildren: () => import('./post-detail-page/post-detail-page.module').then((m) => m.HivenewsPostDetailPageModule),
      }
    ]),

    HivenewsLandingPageModule, HivenewsPostDetailPageModule, HivenewsSubscriptionActivatePageModule
  ],
  declarations: [],
  exports: [HivenewsLandingPageModule, HivenewsPostDetailPageModule, HivenewsSubscriptionActivatePageModule],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HivenewsPagesModule { }
