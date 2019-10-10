import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'subscription',
        loadChildren:
          './subscription-activate-page/subscription-activate-page.module#HivenewsSubscriptionActivatePageModule'
      },
      {
        path: 'posts',
        loadChildren:
          './post-detail-page/post-detail-page.module#HivenewsPostDetailPageModule'
      }
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HivenewsPagesModule {}
