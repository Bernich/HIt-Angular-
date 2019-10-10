import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HivenewsSharedModule } from 'src/app/shared';
import { HivenewsLayoutsModule } from 'src/app/layouts/layouts.module';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  imports: [HivenewsSharedModule, HivenewsLayoutsModule],
  declarations: [LandingPageComponent],
  entryComponents: [LandingPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HivenewsLandingPageModule {}
