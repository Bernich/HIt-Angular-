import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HivenewsSharedModule } from 'src/app/shared';
import { HivenewsLayoutsModule } from 'src/app/layouts/layouts.module';
import { AboutPageComponent } from './about-page.component';
import { AboutPageRoutingModule } from './about-page.route';

@NgModule({
  imports: [HivenewsSharedModule, HivenewsLayoutsModule, AboutPageRoutingModule],
  declarations: [AboutPageComponent],
  entryComponents: [AboutPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutPageModule { }
