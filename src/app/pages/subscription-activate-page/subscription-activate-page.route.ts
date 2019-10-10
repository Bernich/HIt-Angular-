import { Routes } from '@angular/router';

import { SubscriptionActivatePageComponent } from './subscription-activate-page.component';

export const subscriptionActivatePage_Route: Routes = [
  {
    path: 'activate',
    component: SubscriptionActivatePageComponent,
    data: {
      authorities: [],
      pageTitle: 'Hive News - Subscription Activation'
    }
  }
];
