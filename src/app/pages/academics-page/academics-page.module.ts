import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HivenewsSharedModule } from 'src/app/shared';
import { HivenewsLayoutsModule } from 'src/app/layouts/layouts.module';
import { AcademicsPageComponent } from './academics-page.component';
import { AcademicsPageRoutingModule } from './academics-page.route';

@NgModule({
  imports: [HivenewsSharedModule, HivenewsLayoutsModule, AcademicsPageRoutingModule],
  declarations: [AcademicsPageComponent],
  entryComponents: [AcademicsPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AcademicsPageModule { }
