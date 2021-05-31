import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HivenewsSharedModule } from 'src/app/shared';
import { HivenewsLayoutsModule } from 'src/app/layouts/layouts.module';
import { NewsPageComponent } from './news-page.component';
import { NewsPageRoutingModule } from './news-page.route';

@NgModule({
  imports: [
    HivenewsSharedModule,
    HivenewsLayoutsModule,
    NewsPageRoutingModule],
  declarations: [NewsPageComponent],
  entryComponents: [NewsPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsPageModule { }
