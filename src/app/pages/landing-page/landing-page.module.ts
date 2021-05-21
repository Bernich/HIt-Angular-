import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HivenewsSharedModule } from 'src/app/shared';
import { HivenewsLayoutsModule } from 'src/app/layouts/layouts.module';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page.route';
import { CourseService } from 'src/app/admin/shared/services';

@NgModule({
  imports: [HivenewsSharedModule, HivenewsLayoutsModule, LandingPageRoutingModule],
  declarations: [LandingPageComponent],
  entryComponents: [LandingPageComponent],
  providers: [
    CourseService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HivenewsLandingPageModule { }
