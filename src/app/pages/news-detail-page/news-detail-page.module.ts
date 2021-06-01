import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HivenewsSharedModule } from 'src/app/shared';
import { HivenewsLayoutsModule } from 'src/app/layouts/layouts.module';
import { NewsDetailPageComponent } from './news-detail-page.component';
import { NewsDetailPageRoutingModule } from './news-detail-page.route';

@NgModule({
  imports: [
    HivenewsSharedModule,
    HivenewsLayoutsModule,
    NewsDetailPageRoutingModule
  ],
  declarations: [NewsDetailPageComponent],
  entryComponents: [NewsDetailPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsDetailPageModule { }
