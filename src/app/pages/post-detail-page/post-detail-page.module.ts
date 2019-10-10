import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HivenewsSharedModule } from 'src/app/shared';
import { HivenewsLayoutsModule } from 'src/app/layouts/layouts.module';
import { postDetailPageRoute } from './post-detail-page.route';
import { HiveNewsClientPostDetailComponent } from './post-detail-page.component';

@NgModule({
  imports: [
    RouterModule.forChild(postDetailPageRoute),
    HivenewsSharedModule,
    HivenewsLayoutsModule
  ],
  declarations: [HiveNewsClientPostDetailComponent],
  entryComponents: [HiveNewsClientPostDetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HivenewsPostDetailPageModule {}
