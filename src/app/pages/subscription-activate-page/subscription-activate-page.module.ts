import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HivenewsSharedModule } from 'src/app/shared';
import { subscriptionActivatePage_Route } from './subscription-activate-page.route';
import { SubscriptionActivatePageComponent } from './subscription-activate-page.component';

const ENTITY_STATES = [...subscriptionActivatePage_Route];

@NgModule({
  imports: [RouterModule.forChild(ENTITY_STATES), HivenewsSharedModule],
  declarations: [SubscriptionActivatePageComponent],
  entryComponents: [SubscriptionActivatePageComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HivenewsSubscriptionActivatePageModule {}
